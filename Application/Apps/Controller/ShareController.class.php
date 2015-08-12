<?php

namespace Apps\Controller;

/**
 * Description of ShareController
 *
 * @author Administrator
 */
class ShareController extends AppsController {

    public $ptitle = '分享记录';
    protected $_bind_model = 'PageShare';

    /**
     * 定义可访问的操作
     * @var type 
     */
    public $access = array(
        'index' => '列表',
        'del' => '删除',
        'exoutput' => '导出Excel',
    );

    /**
     * 查询过滤
     * @param \Think\Model $model
     * @param array $map
     */
    protected function _list_filter(&$model, &$map) {
        if (I('get.action') == 'export') {
            $this->exoutput($_GET);
            die();
        }
        $map = array();
        $map2 = array();
        $page = I("get._page", '');
        if ($page) {
            $map['page'] = $page;
        }
        $time = I("get._time", '');
        if ($time) {
            $map['create_date'] = array("LIKE", "$time%");
        }
        $keys = I("get._keys", '');
        if ($keys) {
            $map2["real_name|nickname|phone"] = array("LIKE", "%$keys%");
        }
        if ($map2) {
            $member_id = M('Member')->where($map2)->getField('id', TRUE);
            $map['member_id'] = array('IN', $member_id);
        }
    }

    /**
     * 
     * @param type $data
     * @param \Think\Model $model
     */
    protected function _data_filter(&$data, &$model) {
        $plist = M('PageConfig')->select();
        $this->assign('plist', $plist);
        foreach ($data as &$val) {
            $val['nickname'] = M('Member')->where(array('id' => $val['member_id']))->getField('nickname');
        }
    }

    /**
     * 导出Excel
     */
    public function exoutput($get) {
        P($get);
        $game_type = $get['gametype'];
        $map = array();
        $data = array();
        //
        $month = $get['_month'];
        if ($month) {
            $map['g.create_date'] = array("LIKE", "$month%");
        }
        $keys = $get['_keys'];
        if ($keys) {
            $map["o.accept_name|o.phone|g.phone"] = array("LIKE", "%$keys%");
        }

        $map['g.type'] = 1; //真实中奖
        $map['g.awards'] = array('LT', 7);
        $map['g.game_type'] = $game_type;
        $t_style = 'size:12;width:20;font:宋体;text-align:center;font-weight:bold;vertical-align:center;type:string;full:87cefa;color:ffffff';
        $title = array('参与通道', '抽奖时间', '中奖等级', '奖品编号', '奖品', '电子礼券序号',
            '扣减积分', '发货人', '发货时间', '快递方式', '物流单号', '收货人', '收货人电话', '省', '市', '区', '街道', '订单状态', '操作', '备注');
        $STable = M("OrderStatus")->getTableName();
        $OTable = M("Order")->getTableName();
        $res = M("GameRecord")->alias("g")
                ->field('g.create_date,g.awards,g.gift_id,g.gift_name,g.phone as gphone,g.name,o.send_date,o.freight,o.freight_num,o.accept_name,o.phone,'
                        . 'o.province,o.city,o.area,o.address,s.status_name,s.status_desc')
                ->join("LEFT JOIN {$OTable} o on o.id = g.order_id")
                ->join("LEFT JOIN {$STable} s on s.order_id = o.id")
                ->where($map)
                ->select();
        foreach ($title as $val) {
            $data[0][] = array($val, $t_style);
        }
        foreach ($res as $val) {
            $jifen = M("GameApps")->where(array("id" => $get['id']))->getField("jifen");
            $data[] = array('爱睿惠网站', $val['create_date'], $val['awards'], $val['gift_id'], $val['gift_name'], '', $jifen . '积分'
                , '', $val['send_date'], $val['freight'], $val['freight_num'], empty($val['accept_name']) ? $val['name'] : $val['accept_name'], empty($val['phone']) ? $val['gphone'] : $val['phone'], $val['province']
                , $val['city'], $val['area'], $val['address'], $val['status_name'], $val['status_name'],
                $game_type == "lottery" ? "大转盘抽奖" : ($game_type == "eggs" ? "砸金蛋抽奖" : ($game_type == "sign" ? "签到有礼抽奖" : ($game_type == "box" ? "开罐有奖抽奖" : "未中奖"))));
        }
//        var_dump($data);
        $excel = new \Wx\Api\Excel();
        $excel->renderData($data)->download('积分抽奖中奖名单');
    }

}
