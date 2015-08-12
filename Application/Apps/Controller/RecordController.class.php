<?php

namespace Apps\Controller;

class RecordController extends AppsController {

        /**
     * 设置模块标题
     * @var type 
     */
    public $ptitle = '中奖列表';

    /**
     * 设定可访问的操作
     * @var type 
     */
    public $access = array(
        'index' => '中奖列表',
        'del' => '删除记录',
    );

    /**
     * 设定可设置为菜单的节点
     * @var type 
     */
    public $menu = array(
        'index' => '中奖列表',
    );

    /**
     * 绑定操作模型
     * @var type 
     */
    protected $_bind_model = 'GameRecord';

    /**
     * 查询过滤
     * @param \Think\Model $model
     * @param array $map
     */
    protected function _list_filter(&$model, &$map) {
        $map = array();
        $map['game_type'] = I("get.gametype", '');
        $map['type'] = 1;
        $month = I("get._month", '');
        if ($month) {
            $map['create_date'] = array("LIKE", "$month%");
        }
        $keys = I("get._keys", '');
        if ($keys) {
            $map2["real_name|nickname|phone"] = array("LIKE", "%$keys%");
        }
        $member_id = M('Member')->where($map2)->getField('id', TRUE);
        $map['member_id'] = array('IN', $member_id);
    }

    protected function _filter(&$map, &$model) {
        $map['type'] = 1; //真实中奖
        $map['game_type'] = I('get.gametype');
    }

    protected function _data_filter(&$data, &$model) {
        foreach ($data as &$val) {
            $member = M('Member')->where(array('id' => $val['member_id']))->field('nickname, phone')->find();
            $val['nickname'] = $member['nickname'];
            $val['phone'] = $member['phone'];
        }
    }

    public function mark() {
        $id = I('get.id');
        $res = M('GameRecord')->where(array('id' => $id))->save(array('status' => 3));
        if ($res) {
            $this->ajaxReturn(array('status' => 2, 'msg' => '标记领取成功'));
        } else {
            $this->ajaxReturn(array('status' => 1, 'msg' => '标记领取失败，请稍候再试。'));
        }
    }

    /**
     * 导出Excel
     */
    public function exoutput() {
        $game_type = I('get.game_type');
        $map = array();
        $data = array();
        $map['g.type'] = 1; //真实中奖
        $map['g.awards'] = array('LT', 7);
        $map['g.game_type'] = $game_type;
        $t_style = 'size:12;width:20;font:宋体;text-align:center;font-weight:bold;vertical-align:center;type:string;full:87cefa;color:ffffff';
        $title = array('参与通道', '抽奖时间', '中奖等级', '奖品编号', '奖品', '电子礼券序号',
            '扣减积分', '发货人', '发货时间', '快递方式', '物流单号', '收货人', '收货人电话', '省', '市', '区', '街道', '订单状态', '操作', '备注');
        $STable = M("OrderStatus")->getTableName();
        $OTable = M("Order")->getTableName();
        $res = M("GameRecord")->alias("g")
                ->field('g.create_date,g.awards,g.gift_id,g.gift_name,o.send_date,o.freight,o.freight_num,o.accept_name,o.phone,'
                        . 'o.province,o.city,o.area,o.address,s.status_name,s.status_desc')
                ->join("LEFT JOIN {$OTable} o on o.member_id = g.member_id")
                ->join("LEFT JOIN {$STable} s on s.order_id = o.id")
                ->where($map)
                ->select();
        foreach ($title as $val) {
            $data[0][] = array($val, $t_style);
        }
        foreach ($res as $val) {
            $data[] = array('爱睿惠网站', $val['create_date'], $val['awards'], $val['gift_id'], $val['gift_name'], '电子礼券序号', '扣减积分'
                , '发货人', $val['send_date'], $val['freight'], $val['freight_num'], $val['accept_name'], $val['phone'], $val['province']
                , $val['city'], $val['area'], $val['address'], $val['status_name'], $val['status_name'],
                $game_type == "lottery" ? "大转盘抽奖" : ($game_type == "eggs" ? "砸金蛋抽奖" : ($game_type == "sign" ? "签到有礼抽奖" : ($game_type == "box" ? "开罐有奖抽奖" : "未中奖"))));
        }
//        var_dump($data);
        $excel = new \Wx\Api\Excel();
        $excel->renderData($data)->download('积分抽奖中奖名单');
    }

}
