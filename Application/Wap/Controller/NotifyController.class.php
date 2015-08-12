<?php

namespace Wap\Controller;

use Think\Controller;

class NotifyController extends Controller {

    /**
     * 通知管理
     * @var type 
     */
    public $ptitle = '通知管理';

    /**
     * 定义可访问的操作
     * @var type 
     */
    public $access = array(
        'index' => '订单通知',
    );

    /**
     * 通知管理
     */
    public function index() {
        $postStr = file_get_contents("php://input");
        $notifyInfo = (array) simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
        if ($notifyInfo['result_code'] == 'SUCCESS' && $notifyInfo['return_code'] == 'SUCCESS') {
            $data = array();
            $data['OpenId'] = $notifyInfo['openid'];                //用户openid
            $data['partner'] = $notifyInfo['mch_id'];               //商户ID
            $data['AppId'] = $notifyInfo['appid'];                  //公众号id
            $data['IsSubscribe'] = $notifyInfo['is_subscribe'];     //是否关注
            $data['NonceStr'] = $notifyInfo['nonce_str'];           //随机串
            $data['sign'] = $notifyInfo['sign'];                    //签名

            $data['out_trade_no'] = $notifyInfo['out_trade_no'];        //商户订单号
            $data['transaction_id'] = $notifyInfo['transaction_id'];    //微信订单号
            $data['bank_type'] = $notifyInfo['bank_type'];              //支付银行
            $data['total_fee'] = $notifyInfo['total_fee'];              //总价格
            $data['product_fee'] = $notifyInfo['crash_fee'];            //现金价

            $data['add_time'] = date("Y-m-d H:i:s");                //添加时间
            $data['time_end'] = $notifyInfo['time_end'];            //最后支付时间

            header('Content-Type:text/xml; charset=utf-8');

            M()->startTrans();
            if (false === M('StoreNotify')->add($data)) {
                $return = array();
                $return['return_code'] = 'ERROR';
                $return['return_msg'] = 'ADD DATA ERROR';
                exit(xml_encode($return));
            }

            /**
             * 判断支付订单的类型 
             * 2 开头的为积分订单 
             * 1 开头的是普通订单
             */
            $order_data = array();
            $order_data['status'] = 2;
            $order_data['total_fee'] = $notifyInfo['total_fee'];
            $order_data['trade_no'] = $notifyInfo['transaction_id'];
            $order_data['pay_status'] = 1;
            $order_data['real_amount'] = $notifyInfo['total_fee'] / 100;
            $order_data['pay_date'] = get_now_date();

            $order_type = intval(substr($data['out_trade_no'], 0, 1));
            if ($order_type === 2) {
                $result = M('StoreCredit')->where(array('credit_no' => $notifyInfo['out_trade_no']))->save($order_data);
            } else if ($order_type == 1) {
                $result = M('StoreOrder')->where(array('order_no' => $notifyInfo['out_trade_no']))->save($order_data);
            }
            if ($result !== false) {
                M()->commit();
                $return = array();
                $return['return_code'] = 'SUCCESS';
                $return['return_msg'] = '';
                exit(xml_encode($return));
            }
            M()->rollback();
        }
    }

}
