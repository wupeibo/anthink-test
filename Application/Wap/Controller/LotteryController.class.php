<?php

namespace Wap\Controller;

/**
 * 抽奖控制器
 *
 * @author wupeibo<wupeibo@163.com>
 */
class LotteryController extends WapController {

    /**
     * 抽奖活动
     * @var type 
     */
    public $ptitle = '抽奖活动';

    /**
     * 定义可访问的操作
     * @var type 
     */
    public $access = array(
        'index' => '抽奖活动主页',
    );

    /**
     * 获取该用户的所有中奖数据
     */
    public function init() {
        $data = array();
        //获取中奖名单
        $data['myrecord'] = M('GameRecord')->field('id, game_type, gift_id, gift_name, create_date, status')->
                        where(array('member_id' => $this->member['id'], 'type' => 1))->order('create_date DESC')->select();
        $this->ajaxReturn($data, 'JSON');
    }

    public function index() {
        //分享配置
        $conname = strrchr(__CONTROLLER__, "/");
        $conname = substr($conname, 1);
        $pageName = $conname . '-' . __FUNCTION__;
        $page = getShare(strtolower($pageName));
        $this->assign('share', $page);

        // 检查用户登录
        $this->_checkLogin();
        //获奖名单
        $record = array();
        $records = M('GameRecord')->field('id, game_type, gift_id, gift_name, create_date, name')->where(array('awards' => array('LT', 7)))->limit(20)->order('create_date DESC')->select();
        foreach ($records as $va) {
            $record[$va['game_type']][] = $va;
        }
        $this->assign('record', $record);
//获取抽奖活动状态
        $game = M('GameApps')->select();
        $config = array();
        $config['sign']['rule'] = $signconfig['rule'];
        foreach ($game as &$val) {
            $time = time();
            $start = strtotime($val['statdate']);
            $end = strtotime($val['enddate']);
            if ($time < $start) {
//活动未开始
                $config[$val['game_type']]['msg'] = '活动未开始';
                $config[$val['game_type']]['status'] = 2;
                $config[$val['game_type']]['rule'] = $val['rule'];
            } elseif ($time > $end) {
//活动已结束
                $config[$val['game_type']]['msg'] = '活动已结束';
                $config[$val['game_type']]['status'] = 2;
                $config[$val['game_type']]['rule'] = $val['rule'];
            } else if ($val['status'] == 2) {
//活动进行
                $config[$val['game_type']]['msg'] = '活动进行';
                $config[$val['game_type']]['status'] = 1;
                $config[$val['game_type']]['rule'] = $val['rule'];
            } else {
                $config[$val['game_type']]['msg'] = '活动已停止';
                $config[$val['game_type']]['status'] = 2;
                $config[$val['game_type']]['rule'] = $val['rule'];
            }
        }
        $this->assign('gconfig', $config);
        $this->assign('member', $this->member);
        $address = M('MemberAddress')->where(array('member_id' => $this->member['id']))->select();
        $this->assign('address', $address);
        $this->display();
    }

    public function sendGift() {
        $aid = I('post.aid');
        $rid = I('post.rid');
        if (!$aid || $aid == -1) { //默认地址
            $address = M('MemberAddress')->where(array('member_id' => $this->member['id'], 'status' => 3))->find();
        } else {
            $address = M('MemberAddress')->where(array('id' => $aid))->find();
        }
        if (empty($address)) {
            $this->error('地址选择有误，请修改地址后到抽奖记录处重新选择~');
        }
        M()->startTrans();
        $record = M('GameRecord')->where(array('id' => $rid))->find();
        $gift = M('GameAwards')->where(array('id' => $record['gift_id']))->find();
        $data = array();
        $data['member_id'] = $this->member['id'];
        $data['status'] = 0;
        $data['accept_name'] = $address['accept_name'];
        $data['postcode'] = $address['postcode'];
        $data['phone'] = $address['phone'];
        $data['province'] = $address['province'];
        $data['city'] = $address['city'];
        $data['area'] = $address['area'];
        $data['address'] = $address['address'];
        $data['type'] = 5;
        $data['create_date'] = date('Y-m-d H:i:s');
        $data['product_type'] = 2;
        $data['code'] = time() . rand(10000, 99999);
        $order_id = M('Order')->add($data);
        $data = array();
        $data['order_id'] = $order_id;
        $data['goods_id'] = $gift['id'];
        $data['price'] = $gift['price'];
        $data['src'] = $gift['img'];
        $data['num'] = 1;
        $data['create_date'] = date('Y-m-d H:i:s');
        $good = M('OrderGoods')->add($data);
        $data = array();
        $data['order_id'] = $order_id;
        $data['status_value'] = 1;
        $data['status_name'] = '订单创建';
        $data['status_desc'] = '中奖自动生成订单';
        $data['member_id'] = $this->member['id'];
        $data['create_date'] = date('Y-m-d H:i:s');
        $status = M('OrderStatus')->add($data);
        M('GameRecord')->where(array('id' => $rid))->save(array('status' => 2, 'order_id' => $order_id));
        if ($gift && $order_id && $good && $status) {
            M()->commit();
            $this->ajaxReturn(array('status' => 2), 'JSON');
        } else {
            M()->rollback();
            $this->ajaxReturn(array('status' => 1), 'JSON');
        }
    }

}
