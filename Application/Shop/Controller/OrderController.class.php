<?php

namespace Shop\Controller;

/**
 * 订单管理控制器
 * 
 * @author zoujingli <zoujingli@qq.com>
 * @date 2014/09/22 10:52:50
 */
class OrderController extends ShopController {

    /**
     * 订单列表过滤
     * @param type $data
     */
    protected function _index_data_filter(&$data) {
        foreach ($data as &$row) {
            $map = array('order_id' => $row['id']);
            $row['list'] = M('StoreOrderProduct')->where($map)->select();
        }
    }

    /**
     * 订单准备页面，选地址，选快递...
     * 
     * @author Zoe
     * @date 2014-12-11
     */
    public function check() {
        $car_id = I('get.check', array(), 'trim');
        if (!empty($car_id)) {
            /* 选择的购物车记录ID */
            $car_id = I('get.check', array());
            /* 全部购物车记录ID */
            $_car_id = I('get.car_id', array());
            /* 对应购物车记录数量 */
            $_number = I('get.number', array());
            /* 数据扁平化 */
            $_selected = array();
            foreach ($_car_id as $key => $id) {
                in_array($id, $car_id) && isset($_number[$key]) && $_selected[$id] = $_number[$key];
            }
            /* 购物车提交，直接GET购物车记录ID，以英文逗号分割 */
            $list = M('StoreOrderCar')->where(array('id' => array('in', $car_id)))->select();
            //更新购物车的数量，暂不写入库
            foreach ($list as &$vo) {
                isset($_selected[$vo['id']]) && $vo['num'] = $_selected[$vo['id']];
            }
            unset($_selected, $_car_id, $_number);
        } else {
            /* 直接购买，直接GET接收数据 */
            $item = array();
            $item['param'] = I("get.param");
            $item['price'] = I("get.price");
            $item['num'] = I("get.num");
            $item['cid'] = I("get.cid");
            $item['id'] = 0;
            $list = array();
            $list[] = $item;
        }


        /**
         * 数据为空时，返回错误
         */
        if (empty($list)) {
            $this->error('订单提交失败，请稍候再试！');
        }

        /**
         * 收货地址处理
         */
        $map = array();
        $map['openid'] = $this->openid;
        $addressid = I("get.addressid", 0, 'trim,intval');
        if (empty($addressid)) {
            $map['is_default'] = 2; //默认地址
        } else {
            $map['id'] = $addressid; //选中地址
        }
        $address = M("MemberAddress")->where($map)->find();

        $free_express = 0;
        $times = array();
        foreach ($list as $val) {
            //获取商品信息
            $product = M("StoreProduct")->where(array('id' => $val['cid']))->find();
            $arr = explode('_split_', $val['param']);
            $product["all_params"][$arr[0]] = $arr[1];
            $product['num'] = $val['num'];
            $product['price'] = $val['price'];
            $products[] = $product;

            //检测库存是否充足  add by tanglinjun 2015-01-20
            $store = get_product_store($val['cid'], $val['param']);
            if (empty($store)) {
                $store = M("StoreProduct")->where(array('id' => $val['cid']))->getField("store_nums");
            }
            $surplus = $store - $val['num'];
            if ($surplus < 0) {
                R('Wap/Error/show', array('库存不足', '请浏览其他产品！'));
            }

            //检查产品购买次数是否符合要求 add by tanglinjun 2015-01-27
            $productInfo = M("StoreProduct")->field("times_limit,free_express")->where(array("id" => $val['cid']))->find();
            if ($productInfo['times_limit'] == '0') {
                R('Wap/Error/show', array('本产品暂时不能购买', '请浏览其他产品！'));
            } elseif ($productInfo['times_limit'] > 0) {
                //记录商品次数
                $times[$val['cid']] += $val['num'];
            }

            //在多产品订单中，有一个产品免邮，那么都免邮。
            if ($productInfo['free_express'] == '1') {
                $free_express = 1;
            }
        }

        //修复产品未选属性导致商品购买限制失效的bug add by tanglinjun 2015-01-29
        foreach ($times as $key => $val) {
            //1、统计当前会员购买此产品的次数
            $buyNums = M("StoreOrderProduct")->where(array("product_id" => $key, "openid" => $this->openid, "is_pay" => array('in', '0,1')))->sum("product_nums");
            //2、已有的购买次数+当前购买次数
            $nowNums = $buyNums + $val;
            if ($nowNums > $productInfo['times_limit']) {
                R('Wap/Error/show', array('超过本产品的购买次数', '请浏览其他产品！'));
            }
        }

        //输出产品列表
        $this->assign("products", $products);
        $this->assign('list', $list);

        //获取快递信息
        $deliverys = M("StoreDelivery")->where(array('status' => 2))->select();
        $this->assign('deliverys', $deliverys);
        //总金额
        $this->assign('total_price', $this->_getTotal($list));
        //是否免邮
        $this->assign("free_express", $free_express);
        //收货地址
        $this->assign("address", $address);
        $this->assign("ptitle", "提交订单");
        $this->display();
    }

    /**
     * 计算数据
     * @param type $data
     * @return type
     */
    private function _getTotal(&$data) {
        $total_price = 0;
        foreach ($data as &$row) {
            $total_price += $row['num'] * $row['price'];
        }
        return $total_price;
    }

    /**
     * 添加订单,并添加产品快照，处理产品销量
     * 
     * @author Zoe
     * @date 2014-12-11
     */
    public function show() {

        if (IS_POST) {
            /* 创建订单 */
            $data = array();
            $data['openid'] = $openid = $this->openid;
            /* 支付类型 */
            $data['pay_type'] = I('post.pay_type', '1');
            /* 快递配送 */
            $fid = I('post.freight', 0, 'intval');
            if (empty($fid)) {
                //免邮处理
                $data['freight'] = "免邮";
                $data['pay_freight'] = "0";
            } else {
                $deliverys = M("StoreDelivery")->where(array('id' => $fid))->find();
                $data['freight'] = $deliverys['name'];
                $data['pay_freight'] = $deliverys['firstprice'];
            }

            $list = json_decode(I('post.list', '[]', 'trim'), true);

            if (empty($list)) {
                $this->error('订单提交失败，请稍候后再试');
            }

            $data['order_amount'] = $this->_getTotal($list);

            // 收货人信息
            $data['accept_name'] = I('post.accept_name');
            $data['country'] = I('post.country');
            $data['province'] = I('post.province');
            $data['city'] = I('post.city');
            $data['area'] = I('post.area');
            $data['address'] = I('post.address');
            $data['phone'] = I('post.phone');
            $data['postcode'] = I('post.postcode');

            // 用户留言
            $data['post_script'] = I('post.post_script');

            M()->startTrans();
            //防止表单重复提交
            $result = $this->_save($data, D('StoreOrder'));

            if ($result['status']) {
                $order_id = $result['data']['id'];
                //定义订单号
                $data = array();
                //前面带上1 代表普通订单
                $data['order_no'] = "1" . date('ymdH') . str_pad("{$order_id}", 4, '0', STR_PAD_LEFT);
                $result['order_no'] = $data['order_no'];
                $data['id'] = $order_id;
                $result2 = $this->_save($data, D('StoreOrder'));
                if ($result2['status']) {
                    //写入订单详情
                    $result_list = true;

                    foreach ($list as $prot) {
                        $product_info = M('StoreProduct')->where(array('id' => $prot['cid']))->find();
                        $data = array();
                        $data['order_id'] = $order_id;
                        $data['product_id'] = $prot['cid'];
                        $data['openid'] = $this->openid;
                        $data['product_name'] = $product_info['name'];
                        $data['img'] = $product_info['logo'];
                        $data['weight'] = $product_info['weight'];
                        $data['params'] = $prot['param'];
                        $data['product_params'] = $product_info['params'];
                        $data['product_price'] = $prot['price'];
                        $data['product_nums'] = $prot['num'];

                        $r1 = $this->_save($data, M('StoreOrderProduct'));
                        //更新购物车
                        if ($prot['id'] == 0) {
                            $r2 = 1; //所有直接都买的都跳过购物车状态修改  luoshaobo 2015-04-29
                        } else {
                            $r2 = M('StoreOrderCar')->where(array('id' => $prot['id']))->setField('status', 2);
                        }

                        //更新库存与销量
                        $tmpParams = json_decode($product_info['params'], true);
                        $tmpStr = $prot['param'] . "_split_store";
                        $tmpParams[$tmpStr] = $tmpParams[$tmpStr] - $prot['num'];
                        $tmpParams = json_encode($tmpParams);
                        $r3 = M('StoreProduct')->where(array('id' => $prot['cid']))->setInc('sale', $prot['num']);
                        $r4 = M("StoreProduct")->where(array('id' => $prot['cid']))->setField('params', $tmpParams);

                        if (!$r1['status'] or $r2 === FALSE or $r3 === FALSE or $r4 === FALSE) {
                            $result_list = false;
                            break;
                        }
                    }

                    if ($result_list) {
                        M()->commit();
                        $this->success('订单提交成功', U('/shop/pay/order_' . $order_id));
                        die();
                    }
                }
            }
            M()->rollback();
            $this->error('订单提交失败，请稍候再试！');
        } else {
            $order_id = I('get.order_id', 0, 'intval');
            //1、获取订单信息
            $orderInfo = M("StoreOrder")->where(array('id' => $order_id))->find();
            $orderInfo['payprice'] = intval(round($orderInfo['order_amount'] + $orderInfo['pay_freight'] - $orderInfo['promotions'], 2) * 100);
            $this->assign("orderInfo", $orderInfo);

            //2、获取产品快照
            $productInfo = M("StoreOrderProduct")->where(array('order_id' => $order_id))->select();
            $this->assign("productInfo", $productInfo);
            !$order_id && $this->redirect('Shop/Index/index');

            //微信支付处理
            $notify_url = to_domain(U('Wap/Notity/index'));
            $this->assign('paydata', json_encode($data));
            $this->assign('notify_url', $notify_url);

            $this->assign("ptitle", "订单详情");
            $this->display();
        }
    }

    /**
     * 未支付请求的参数信息
     * 
     * @author tanglinjun
     * @date 2015-02-010
     */
    public function payInfo() {
        if (IS_POST) {
            $order_no = I("post.id", 0, "intval");
            if (!$order_no) {
                $this->error("数据错误");
            }
            //判断支付订单的类型 
            $check = intval(substr($order_no, 0, 1));

            if ($check == 2) {
                //***************积分订单支付************//
                //1、获取订单信息
                $creditInfo = M("StoreCredit")->where(array('credit_no' => $order_no))->find();
                //支付总价
                $creditInfo['payprice'] = intval(round($creditInfo['order_amount'] + $creditInfo['pay_freight'] - $creditInfo['promotions'], 2) * 100);

                //微信支付处理
                $products = M('StoreCreditProduct')->where(array('id' => $creditInfo['product_id']))->find();
                $out_trade_no = $creditInfo['credit_no'];         //订单号
                $body = $products['name'];           //body
                $total_fee = $creditInfo['payprice'];            //支付总价
            } else if ($check == 1) {
                //***************普通订单支付************//
                //1、获取订单信息
                $orderInfo = M("StoreOrder")->where(array('order_no' => $order_no))->find();
                //支付总价
                $orderInfo['payprice'] = intval(round($orderInfo['order_amount'] + $orderInfo['pay_freight'] - $orderInfo['promotions'], 2) * 100);

                //微信支付处理
                $products = M('StoreOrderProduct')->where(array('order_id' => $orderInfo['id']))->select();
                $out_trade_no = $orderInfo['order_no'];         //订单号
                $body = $products[0]['product_name'];           //body
                $total_fee = $orderInfo['payprice'];            //支付总价
            }

            //2、获取发起支付的参数
            $wechatPay = $this->getInstanceWechatPay();
            $notify_url = U('Wap/Notify/index', '', true, true); //支付回调通知url
            $prepay_id = $wechatPay->getPrepayId($this->openid, $body, $out_trade_no, $total_fee, $notify_url, "JSAPI");
            if (empty($prepay_id)) {
                $this->error('支付调用失败，' . $wechatPay->errMsg);
            }
            $payParams = $wechatPay->createMchPay($prepay_id);
            $payParams['status'] = 1;
            $this->ajaxReturn($payParams, 'JSON');
        }
    }

    /**
     * 取消订单，status置1
     * @author Zoe<tanglinjun>
     * @date 2014-12-19
     */
    public function cancel() {
        //获取要删除的id
        if (IS_POST) {
            $id = I('post.id', 0, "intval");
            if (empty($id)) {
                $this->error('数据参数错误');
            }

            M()->startTrans();
            //更新快照表状态
            $r3 = M("StoreOrderProduct")->where(array("order_id" => $id))->setField("is_pay", 2);
            //更新库存与销量
            $order_products = M("StoreOrderProduct")->field("id,product_id,product_nums,params")->where(array('order_id' => $id))->select();
            foreach ($order_products as $val) {
                //1、解析json格式的属性参数
                $tmpParams = M("StoreProduct")->where(array('id' => $val['product_id']))->getField("params");
                $tmpParams = json_decode($tmpParams, true);
                if (!empty($tmpParams)) {
                    //2、根据产品快照里的params与product_nums修改产品库存吧
                    $str = $val['params'] . "_split_store";
                    $tmpParams[$str] = $tmpParams[$str] + $val['product_nums'];
                    //3、然后根据产品Id更新产品的params参数
                    $tmpParams = json_encode($tmpParams);
                    $r2 = M("StoreProduct")->where(array('id' => $val['product_id']))->setField("params", $tmpParams);
                }
                if ($r2 === false) {
                    break;
                }
            }

            //获取商城自动退款配置
            $refund = M("Store")->where(array("id" => 1))->getField("is_refund");
            if (!empty($refund)) {
                //退钱
                $r1 = D('Store/StoreOrder')->refund($id, $this->getInstanceWechatPay());
            } else {
                $r1 = false;
            }
            //更新订单状态
            if (empty($r1)) {
                $data = array();
                $data['cancel_date'] = get_now_date();
                $data['id'] = $id;
                $data['status'] = '3';
                $r1 = M("StoreOrder")->save($data);
            }

            if (false !== $r1 && $r3 !== false && $r2 !== false) {
                M()->commit();
                $this->success("取消订单成功！", U("Shop/MyOrder/index"));
            } else {
                M()->rollback();
                $this->error("取消订单失败，请稍候再试");
            }
        }
    }

}
