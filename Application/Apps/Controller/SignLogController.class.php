<?php

namespace Apps\Controller;

/**
 * 签到记录统计
 *
 * @author wupeibo<wupeibo@163.com>
 */
class SignLogController extends AppsController {

    /**
     * 设置模块标题
     * @var string 
     */
    public $ptitle = '签到列表';

    /**
     * 设定可访问的操作
     * @var type 
     */
    public $access = array(
        'index' => '签到列表',
    );

    /**
     * 设定可设置为菜单的节点
     * @var type 
     */
    public $menu = array(
        'index' => '签到列表',
    );

    /**
     * 绑定操作模型
     * @var type 
     */
    protected $_bind_model = 'Member';

    /**
     * 查询过滤
     * @param \Think\Model $model
     * @param array $map
     */
    protected function _list_filter(&$model, &$map) {
        $keys = I("get._keys", '');
        if ($keys) {
            $map = array();
            $map["nickname|real_name|phone"] = array("LIKE", "%$keys%");
        }

        $data = M('Member')->where(array('status' => 1))->select();
        $sdate = I('get._month', '');
        if ($sdate) {
            $month = date('Y-m-', strtotime($sdate));
        } else {
            $month = date('Y-m-');
        }
        $mid = array();
        $ids = M()->query("SELECT member_id FROM wx_game_sign WHERE member_id IN (SELECT id FROM wx_member) AND DATE_FORMAT(create_date,'%Y-%m-') = '" . $month . "' GROUP BY member_id");
        foreach ($ids as $value) {
            $mid[] = $value['member_id'];
        }
        $map['id'] = array('IN', $mid);
    }

    /**
     * 列表查询过滤方法
     */
    protected function _filter(&$map, &$model) {
        
    }

    /**
     * 列表数据过滤方法
     */
    protected function _data_filter(&$data, &$model) {
        $sdate = I('get._month', '');
        if ($sdate) {
            $month = date('Y-m-', strtotime($sdate));
            $sst = strtotime(date('Y-m', strtotime($sdate)));
            $nnt = strtotime(date('Y-m'));
            if ($sst < $nnt) {
                $sum = (int) date('t', strtotime($sdate)); //当月天数
                $today = $sum; //当月最后一天
            } else {
                $sum = (int) date('t'); //当月天数
                $today = (int) date('d'); //当天
            }
        } else {
            $month = date('Y-m-');
            $sum = (int) date('t'); //当月天数
            $today = (int) date('d'); //当天
        }
        foreach ($data as $key => &$val) {
            $series = 0;    //连续签到
            $bu = 0;    //补签
            //当前月的签到记录
            $signarr = M('GameSign')->where(array('member_id' => $val['id'], 'create_date' => array('like', $month . "%")))->order('signday DESC')->select();
//            if (count($signarr) == 0) {
//                unset($data[$key]);
//                continue;
//            }
            $si = $this->changearr($signarr);
            for ($i = 0; $i < $sum; $i++) {
                if ($i < $today) {
                    ($si[$i] == 1) ? $series++ : $series = 0;
                } elseif ($i == $today) {
                    ($si[$i] == 1) ? $series++ : '';
                }
                if ($si[$i] == 2)
                    $bu++;
            }
            $val['nickname'] = ($val['nickname'] ? $val['nickname'] : $val['phone']);
            $val['lian'] = $series;
            $val['bu'] = $bu;
            $val['lei'] = count($si);
            $val['last_date'] = $signarr[0]['create_date'];
        }
        $data = array_values($data);
    }

    /**
     * 二维数组转换成一位数组并以签到日为索引
     * @param type $arr
     * @return type
     */
    public function changearr($arr) {
        $res = array();
        foreach ($arr as $val) {
            $res[$val['signday']] = $val['status'];
        }
        return $res;
    }

}
