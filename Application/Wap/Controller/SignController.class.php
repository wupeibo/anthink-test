<?php

namespace Wap\Controller;

/**
 * 前台签到有礼控制器
 *
 * @author wupeibo<wupeibo@163.com>
 */
class SignController extends WapController {

    /**
     * 签到有礼
     * @var type 
     */
    public $ptitle = '签到有礼';

    /**
     * 定义可访问的操作
     * @var type 
     */
    public $access = array(
        'index' => '签到主页',
    );

    public function index() {
        //分享配置
        $conname = strrchr(__CONTROLLER__, "/");
        $conname = substr($conname, 1);
        $pageName = $conname . '-' . __FUNCTION__;
        $page = getShare(strtolower($pageName));
        $this->assign('share', $page);

        //检查用户登录
        $this->_checkLogin();

        $sum = (int) date('t'); //当月天数
        $today = (int) date('d'); //当天
//$dayModel = array('sign' => 0, 'date' => date('m-'.$now)); //日模型
        $monthModel = array(); //月模型
        $day = 1;
        $series = 0;
        $sign = 'false';
//当前月的签到记录
        $signarr = M('GameSign')->where(array('member_id' => $this->member['id'], 'create_date' => array('like', date('Y-m-') . "%")))->select();
        $signarr = $this->changearr($signarr);
        for ($w = 0; $w < 7; $w++) {
            for ($d = 0; $d < 5; $d++) {
                if ($day > $sum) {
                    break;
                } else {
                    if ($day < $today) {
                        ($signarr[$day] == 1) ? $series++ : $series = 0;
                        $monthModel[$w][$d] = array('sign' => ($signarr[$day] ? $signarr[$day] : 0), 'date' => date('m-' . $day++));
                    } elseif ($day == $today) {
                        ($signarr[$day] == 1) ? $series++ : '';
                        $sign = $signarr[$day];
                        $monthModel[$w][$d] = array('sign' => ($signarr[$day] ? $signarr[$day] : 0), 'date' => date('m-' . $day++));
                    } else {
                        $monthModel[$w][$d] = array('sign' => 0, 'date' => date('m-' . $day++));
                    }
                }
            }
        }
        //补签所需积分
        $signconfig = M('GameSignConfig')->where(array('id' => 1))->find();
        $func = M('GameRecord')->where(array('member_id' => $this->member['id'], 'game_type' => 'sign', 'status' => 1))->count();
        $info = array();
        $info['series'] = $series;
        $info['addup'] = count($signarr);
        $info['sign'] = $sign;
        $info['need'] = $signconfig['need'];
        $info['rule'] = $signconfig['rule'];
        $info['func'] = $func;
        $this->assign('info', $info);
        $this->assign('today', $today);
        $this->assign('month', $monthModel);
        $this->display();
    }

    /**
     * 签到接口
     */
    public function sign() {
        $signconfig = M('GameSignConfig')->where(array('id' => 1))->find();
        //保存记录
        $data = array();
        $data['member_id'] = $this->member['id'];
        $data['create_date'] = date('Y-m-d H:i:s');
        switch (I('post.type')) {
            case 1:
                $data['signday'] = date('d');
                $data['status'] = 1;
                M('GameSign')->add($data);
                break;
            case 2:
                if ($this->checkTotal($signconfig['need'], false, "retroactive")) {
                    $data['signday'] = I('post.signday');
                    $data['status'] = 2;
                    M('GameSign')->add($data);
                } else {
                    $res['status'] = 4;
                    $this->ajaxReturn($res, "JSON");
                }
                break;
        }

        $res = array();
        $type = I('post.type');
        $sum = (int) date('t'); //当月天数
        $today = (int) date('d'); //当天
        $monthModel = array(); //月模型
        $day = 1;
        $series = 1;
        $addup = 0;
        //当前月的签到记录
        $signarr = M('GameSign')->where(array('member_id' => $this->member['id'], 'create_date' => array('like', date('Y-m-') . "%")))->select();
        $signarr = $this->changearr($signarr);
        for ($w = 0; $w < 5; $w++) {
            for ($d = 0; $d < 7; $d++) {
                if ($day > $sum) {
                    break;
                } else {
                    if ($day < $today) {
                        ($signarr[$day] == 1) ? $series++ : $series = 1;
                        $monthModel[$w][$d] = array('sign' => ($signarr[$day] ? $signarr[$day] : 0), 'date' => date('m-' . $day++));
                    } elseif ($day == $today) {
                        $monthModel[$w][$d] = array('sign' => ($signarr[$day] ? $signarr[$day] : 0), 'date' => date('m-' . $day++));
                    } else {
                        $monthModel[$w][$d] = array('sign' => 0, 'date' => date('m-' . $day++));
                    }
                }
            }
        }
        //优惠券机会，一个月一次
        $fanlog = M('GameCouponRecord')->where(array('member_id' => $this->member['id'], 'type' => 1, 'create_date' => array('LIKE', date('Y-m-') . '%')))->count();
        //未使用的翻牌抽积分机会，签到一次+1，每累计7天+2
        $func = M('GameRecord')->where(array('member_id' => $this->member['id'], 'game_type' => 'sign', 'status' => 1))->count();
        $twice = 0;
        $addup = count($signarr);
        $res = array();
        $res['series'] = $series;
        $res['addup'] = $addup;
        # 签到
        if ($type == 1) {
            $res['jifen'] = 0;  //小气鬼一丢丢积分都不肯送
//            switch ($series) {
//                case 1:
//                    $res['jifen'] = $signconfig['one'];
//                    $this->checkTotal($res['jifen'], TRUE);
//                    break;
//                case 2:
//                    $res['jifen'] = $signconfig['two'];
//                    $this->checkTotal($res['jifen'], TRUE);
//                    break;
//                case 3:
//                    $res['jifen'] = $signconfig['three'];
//                    $this->checkTotal($res['jifen'], TRUE);
//                    break;
//                default :
//                    $res['jifen'] = $signconfig['four'];
//                    $this->checkTotal($res['jifen'], TRUE);
//            }
            if (($series % 7) == 0 && $addup == $sum) {
                //连续签到7天且累计签到满一个月
                $res['status'] = 4;
                //达成优惠券获赠条件
                if (!$fanlog)
                    saveCoupon($this->member['id'], '连续签到7天获赠优惠券1张');
                //抽奖机会+1
                $twice++;
                $this->saveRecord();
                $res['month'] = $signconfig['month'];
                $this->checkTotal($res['month'], TRUE, "month");
            } elseif (($series % 7) == 0) {
                //连续签到7天
                $res['status'] = 2;
                //达成优惠券获赠条件
                if (!$fanlog)
                    saveCoupon($this->member['id'], '连续签到7天获赠优惠券1张');
                //抽奖机会+1
                $twice++;
                $this->saveRecord();
            } elseif ($addup == $sum) {
                //累计签到满一个月
                $res['status'] = 3;
                $res['month'] = $signconfig['month'];
                $this->checkTotal($res['month'], TRUE, "month");
            } else {
                $res['status'] = 1;
            }
            $twice++;
            $res['func'] = $func + $twice;
            $res['twice'] = $twice;
            $this->saveRecord();
            $this->ajaxReturn($res, "JSON");
            # 补签
        } else {
            $twice++;
            $this->saveRecord();
            $res['func'] = $func + $twice;
            $res['twice'] = $twice;
            if ($addup == $sum) { //累计签到一个月
                $res['status'] = 3;
//                $res['month'] = $signconfig['month'];
                $this->ajaxReturn($res, "JSON");
            } else {
                $res['status'] = 1;
                $this->ajaxReturn($res, "JSON");
            }
        }
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

    /**
     * 签到有礼抽奖机会1次
     */
    protected function saveRecord() {
        $data = array();
        $data['member_id'] = $this->member['id'];
        $data['type'] = 3;    //奖项未使用
        $data['status'] = 1;
        $data['prize'] = '签到有礼抽奖机会1次';
        $data['create_date'] = date('Y-m-d H:i:s');
        $data['game_type'] = 'sign';
        $res = M('GameRecord')->add($data);
    }

    /**
     * 翻牌抽奖接口
     * @post type $app
     */
    public function func() {
        $i = I('post.index');
        $data = array();
        $prize_arr = array(
            '0' => array('id' => 1, 'prize' => 5, 'v' => 5),
            '1' => array('id' => 2, 'prize' => 10, 'v' => 30),
            '2' => array('id' => 3, 'prize' => 20, 'v' => 35),
            '3' => array('id' => 4, 'prize' => 30, 'v' => 25),
            '4' => array('id' => 5, 'prize' => 40, 'v' => 3),
            '5' => array('id' => 6, 'prize' => 50, 'v' => 2)
        );
        foreach ($prize_arr as $key => $val) {
            $arr[$val['id']] = $val['v'];
        }
        $rid = $this->getRand($arr);
        $jifen = $prize_arr[$rid]['prize'];

        $array = array(5, 10, 20, 30, 40, 50);
        foreach ($array as $nn => $v) {
            if ($v == $jifen)
                unset($array[$nn]);
        }
        $array = array_values($array);
        $card = array();
        for ($j = 0; $j < 5; $j++) {
            $index = rand(1, count($array)) - 1;
            $card[] = $array[$index];
            unset($array[$index]);
            $array = array_values($array);
        }
        array_splice($card, $i, 0, array($i => $jifen));
        $data['card'] = $card;
        $data['status'] = 2;
        $data['jifen'] = $jifen;
        $this->checkTotal($jifen, TRUE, 'sign');
        $log_id = M('GameRecord')->where(array('member_id' => $this->member['id'], 'status' => 1, 'game_type' => 'sign'))->getField('id');
        M('GameRecord')->where(array('id' => $log_id))->save(array('type' => 1, 'status' => 3, 'gift_name' => $jifen . '积分'));
        $data['func'] = M('GameRecord')->where(array('member_id' => $this->member['id'], 'game_type' => 'sign', 'status' => 1))->count();
        $this->ajaxReturn($data, 'JSON');
    }

    /**
     * 概率计算
     * @param type $proArr
     * @return type
     */
    protected function getRand($proArr) {
        $result = '';
        //概率数组的总概率精度 
        $proSum = array_sum($proArr);

        //概率数组循环 
        foreach ($proArr as $key => $proCur) {
            $randNum = mt_rand(1, $proSum);
            if ($randNum <= $proCur) {
                $result = $key - 1;
                break;
            } else {
                $proSum -= $proCur;
            }
        }
        unset($proArr);

        return $result;
    }

    /**
     * give_integral
     * 
     * @param type $total
     * @param type $status
     * @param type $type
     * @return boolean
     */
    protected function checkTotal($total, $status = FALSE, $type = '') {
        $member = M('Member')->where(array('id' => $this->member['id']))->find();
        if ($status) {
            //积分同步
            D('Api/IntegralRule')->integralChange($this->member['id'], $type, $total, '');
            return TRUE;
        } else {
            if ($member['integral'] >= $total) {
                //积分同步
                D('Api/IntegralRule')->integralChange($this->member['id'], $type, -$total, '');
                return TRUE;
            } else {
                return FALSE;
            }
        }
    }

}
