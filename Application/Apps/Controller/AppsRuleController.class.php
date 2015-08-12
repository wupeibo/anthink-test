<?php

namespace Apps\Controller;

/**
 * 抽奖逻辑控制器
 *
 * @author wupeibo<wupeibo@163.com>
 */
class AppsRuleController extends AppsController {

    /**
     * 获取该用户的所有中奖数据
     */
    public function init() {
        $myrecord = array();
        //获取中奖名单
        $myrecord = M('GameRecord')->field('id, game_type, gift_id, gift_name, create_date, status')->
                        where(array('member_id' => $this->member['id'], 'type' => 1))->order('create_date DESC')->select();
        foreach ($myrecord as &$value) {
            $value['game_type'] = $this->transform($value['game_type']);
        }
        $this->ajaxReturn($myrecord, 'JSON');
    }

    /**
     * 转换
     * 
     * @param type $str
     * @return string
     */
    private function transform($str) {
        switch ($str) {
            case 'sign':
                $str = "签到抽奖";
                break;
            case 'lottery':
                $str = "大转盘";
                break;
            case 'eggs':
                $str = "砸金蛋";
                break;
            case 'box':
                $str = "开宝箱";
                break;
            case 'lottery-false':
                $str = "大转盘";
                break;
            case 'eggs-false':
                $str = "砸金蛋";
                break;
            case 'box-false':
                $str = "开宝箱";
                break;
        }
        return $str;
    }

    /**
     * 通用抽奖接口
     * @post type $app
     */
    public function func() {
        $app = I('post.app');

        $data = array();
        $appinfo = M('GameApps')->where(array('game_type' => $app, 'status' => 2))->order('create_date desc')->find();
        //检测活动状态
        if (!$appinfo) {
            $result = array('status' => 0, 'msg' => "您来晚了，【{$this->transform($app)}】抽奖活动已经停止~");
            $this->ajaxReturn($result, 'JSON');
        }
        //奖品数量
        $nums = array($appinfo['fistnums'], $appinfo['secondnums'], $appinfo['thirdnums'],
            $appinfo['fournums'], $appinfo['fivenums'], $appinfo['sixnums']);

        $sum = 0;
        $maxpoint = 0;
        $down_rid = 0;
        //1·查找奖项对应的中奖人数  2·减少该奖项的中奖率
        for ($i = 0; $i < 6; $i++) {
            $hit = M('GameRecord')->where(array('awards' => $i + 1, 'type' => 1, 'game_type' => $app))->count();
            $maxpoint += $nums[$i]; //商总
            $nums[$i] -= $hit;  // 单商余
            if ($nums[$i] > 0) {
                $down_rid = $i + 1;
            }
            $sum += $nums[$i];  //  商余
        }
        //检测剩余抽奖次数，为0则返回提示
        $count = M('GameRecord')->where(array('game_type' => array('LIKE', $app . '%'), 'member_id' => $this->member['id'], 'type' => 1, 'create_date' => array('LIKE', date('Y-m-d') . '%')))->count();
        if ($count >= $appinfo['aginfo'] && $appinfo['aginfo'] > 0) {
            $result = array('status' => 0, 'msg' => "您今天的抽奖次数已使用完毕，明天再来吧^_^,每人每天可以参与【{$this->transform($app)}】{$appinfo['aginfo']}次");
            $this->ajaxReturn($result, 'JSON');
        }
        //检测剩余奖品，为0则终止抽奖
        if ($sum <= 0) {
            $time = date('Y-m-d H:i:s');
            M('GameApps')->where(array('game_type' => $app, 'status' => 2))->save(array('status' => 1, 'info' => "[ {$time} ] 奖品已发放完毕，活动停止"));
            $result = array('status' => 0, 'msg' => "您来晚了，【{$this->transform($app)}】抽奖活动已经停止~");
            $this->ajaxReturn($result, 'JSON');
        }
        //检测用户积分是否足够并扣除积分
        if (!($this->checkTotal($appinfo['jifen'], false, $app))) {
            $result = array('status' => 0, 'msg' => '您的积分不足，不能参与积分抽奖活动');
            $this->ajaxReturn($result, 'JSON');
        }
        //判断中奖模式：1概率；2百分百中奖
        if ($appinfo['crazy'] == 1) {
            if ($appinfo['maxpoint'] > $sum) {
                //概余 = 概总 - 商总 +商余
                $sum = $appinfo['maxpoint'] - $maxpoint + $sum;
            }
        } else {
            $sum = 0;
        }
        //奖品数组 array ： id|奖品ID min|转盘角度最小值 max|转盘角度最大值 prize|奖品名称 v|中奖概率
        //最后一项为不中奖的概率：maxpoint - ( v1 + v2 + v3 + ... )
        $prize_arr = array(
            '0' => array('id' => 1, 'min' => -20, 'max' => 20, 'gift_id' => $appinfo['fistid'], 'prize' => $appinfo['fist'], 'v' => $nums[0]),
            '1' => array('id' => 2, 'min' => 250, 'max' => 290, 'gift_id' => $appinfo['secondid'], 'prize' => $appinfo['second'], 'v' => $nums[1]),
            '2' => array('id' => 3, 'min' => 205, 'max' => 245, 'gift_id' => $appinfo['thirdid'], 'prize' => $appinfo['third'], 'v' => $nums[2]),
            '3' => array('id' => 4, 'min' => 295, 'max' => 335, 'gift_id' => $appinfo['fourid'], 'prize' => $appinfo['four'], 'v' => $nums[3]),
            '4' => array('id' => 5, 'min' => 115, 'max' => 155, 'gift_id' => $appinfo['fiveid'], 'prize' => $appinfo['five'], 'v' => $nums[4]),
            '5' => array('id' => 6, 'min' => 70, 'max' => 110, 'gift_id' => $appinfo['sixid'], 'prize' => $appinfo['six'], 'v' => $nums[5]),
            '6' => array('id' => 7, 'min' => array(25, 160),
                'max' => array(65, 200), 'gift_id' => -1, 'prize' => '未中奖', 'v' => $sum)
        );
        foreach ($prize_arr as $key => $val) {
            $arr[$val['id']] = $val['v'];
        }
        //奖项过滤器$down_rid = 最低的奖项,crazy == 2 100%中奖模式
        if ($appinfo['crazy'] == 1) {
            $rid = $this->randfalter($appinfo['lmt'], $appinfo['need'], $arr);
        } else {
            $rid = $this->randfalter($appinfo['lmt'], $appinfo['need'], $arr, $down_rid);
        }
        $res = $prize_arr[$rid - 1]; //中奖项
        $min = $res['min'];
        $max = $res['max'];
        if ($res['id'] == 7) { //没中奖
            //此处设置不中奖
            $i = mt_rand(0, 1);
            $result['angle'] = mt_rand($min[$i], $max[$i]);
            $result['name'] = $res['prize'];
            $app .= '-false';
            $gift = array('id' => 0, 'name' => '未中奖');
            $result['awards'] = $rid;
            $result['status'] = 1;
            $gift = array('id' => 0, 'name' => '未中奖', 'cate_id' => 0);
        } else {
            $result['angle'] = mt_rand($min, $max); //随机生成一个角度 
            $result['name'] = $res['prize'];

            $result['status'] = 3;
            $result['awards'] = $rid;
            $result['gift'] = $gift = M('GameAwards')->where(array('id' => $res['gift_id']))->find();
            if ($gift['cate_id'] == 2) { //积分奖项
                $result['status'] = 2;
                $this->checkTotal($gift['jifen'], TRUE, $app);
//                $this->ajaxReturn($result, 'JSON');
            }
        }
        $result['rid'] = $this->setRecord($app, $rid, $gift);
        $this->ajaxReturn($result, 'JSON');
    }

    /**
     * 保存抽奖结果
     */
    public function setRecord($app, $rid, $gift) {
        $data = array();
        $data['member_id'] = $this->member['id'];
        $data['awards'] = $rid;
        $data['gift_id'] = $gift['id'];
        $data['gift_name'] = $gift['name'];
        $data['status'] = ($rid == 7) ? 4 : (($gift['cate_id'] == 1) ? 1 : 3);
        $data['create_date'] = date('Y-m-d H:i:s');
        $data['type'] = 1;  //1真实抽奖，0伪数据
        $data['game_type'] = $app;
        $data['name'] = $this->member['nickname'];
        $data['phone'] = $this->member['phone'];
        return M('GameRecord')->add($data);
    }

    /**
     * 积分操作方法	$status == TRUE 时给用户增加 $total 积分
     * 否则扣除 $total 积分
     * @param type $total
     * @return boolean
     */
    protected function checkTotal($total, $status = FALSE, $type = '') {
        $member = M('Member')->where(array('id' => $this->member['id']))->find();
        if ($status) {
            $types = ($type == "eggs") ? "eggs" : ($type == "lottery") ? "turntable" : "treasure";
            //积分同步
            D('Api/IntegralRule')->integralChange($this->member['id'], $types, $total, '');
            return TRUE;
        } else {
            if ($member['integral'] >= $total) {
                $types = "activity-r";
                //积分同步
                $result = D('Api/IntegralRule')->integralChange($this->member['id'], $types, -$total, '');
                if ($result['error']) {
                    return FALSE;
                } else {
                    return TRUE;
                }
            } else {
                return FALSE;
            }
        }
    }

    /**
     * 奖项过滤器
     * 1·根据概率获取的奖项id 
     * 2·所中奖项id在用户中奖限制的范围内
     * 3·判断用户的消费总金额
     * 4·符合条件=》输出大奖
     * 5·不符合则重新计算奖项
     * 
     * @param type $lmt		奖项限制
     * @param type $need	中大奖所需的消费金额
     * @param type $arr		奖项数据
     * @return type
     */
    protected function randfalter($lmt, $need, $arr, $down_rid = 7) {
        $rid = $this->getRand($arr);
        if ($rid <= $lmt) {
//            $total = M('Member')->where(array('id' => $this->member['id']))->getField('total_integral');  //累计积分
            $total = M('Member')->where(array('id' => $this->member['id']))->getField('total_buy_integral');  //购买积分
            if ($total >= $need) {
                return $rid;
            } else {
                //直接返回结果最低奖项或不中奖
                return $down_rid;
                //递归重新抽取
                //$this->randfalter($lmt, $need, $arr);
            }
        } else {
            return $rid;
        }
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
                $result = $key;
                break;
            } else {
                $proSum -= $proCur;
            }
        }
        unset($proArr);

        return $result;
    }

    public function getAwards() {
        $record = M('GameRecord')->where(array('id' => I('post.rid')))->find();
        $gift = M('GameAwards')->where(array('id' => $record['gift_id']))->find();
        $gift['rid'] = $record['id'];
        $this->ajaxReturn($gift, 'JSON');
    }

}
