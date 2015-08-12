<?php

namespace Apps\Controller;

/**
 * 积分抽奖
 *
 * @author wupeibo <wupeibo@163.com>
 * @date 2015-3-11 19:51:54
 */
class LuckdrawController extends AppsController {

        /**
     * 设置模块标题
     * @var type 
     */
    public $ptitle = '积分抽奖活动';

    /**
     * 设定可访问的操作
     * @var type 
     */
    public $access = array(
        'index' => '抽奖活动列表',
        'add' => '添加活动',
        'edit' => '编辑活动',
        'del' => '删除活动',
        'resume' => '启用活动',
        'forbid' => '禁用活动',
    );

    /**
     * 设定可设置为菜单的节点
     * @var type 
     */
    public $menu = array(
        'index' => '抽奖活动列表',
    );

    /**
     * 绑定操作模型
     * @var type 
     */
    protected $_bind_model = 'GameApps';

    /**
     * 列表查询过滤方法
     */
    protected function _filter(&$map, &$model) {
        
    }

    /**
     * 列表数据过滤方法
     */
    protected function _data_filter(&$data, &$model) {
        
    }

    /**
     * 表单前置方法
     */
    protected function _form_filter($data, $model) {
        $awardslist = M('GameAwards')->where(array('status' => 2))->select();
        $this->assign('awardslist', $awardslist);
        //库存还原
//		M('GameAwards')->where(array('id' => $data['fistid']))->setInc('nums', $data['fistnums']);
//		M('GameAwards')->where(array('id' => $data['secondid']))->setInc('nums', $data['secondnums']);
//		M('GameAwards')->where(array('id' => $data['thirdid']))->setInc('nums', $data['thirdnums']);
//		M('GameAwards')->where(array('id' => $data['fourid']))->setInc('nums', $data['fournums']);
//		M('GameAwards')->where(array('id' => $data['fiveid']))->setInc('nums', $data['fivenums']);
//		M('GameAwards')->where(array('id' => $data['sixid']))->setInc('nums', $data['sixnums']);
    }

    /**
     * 表单后置方法
     * @param type $model
     * @param type $data
     */
    protected function _form_success($model, $data) {
        //开启事务
//        M()->startTrans();
        $gtype = array(1 => 'lottery', 2 => 'eggs', 3 => 'box');
        $etc = array();
        $time = date('Y-m-d H:i:s');
        $msg = "[ {$time} ] 修改配置";
        //活动类型
        if ($data['type'] > 0) {
            $msg = "[ {$time} ] 活动初始化成功";
            $etc['game_type'] = $gtype[$data['type']];
        }
        //通过奖品ID获取奖品名称
        $etc['fist'] = M('GameAwards')->where(array('id' => $data['fistid']))->getField('name');
        $etc['second'] = M('GameAwards')->where(array('id' => $data['secondid']))->getField('name');
        $etc['third'] = M('GameAwards')->where(array('id' => $data['thirdid']))->getField('name');
        $etc['four'] = M('GameAwards')->where(array('id' => $data['fourid']))->getField('name');
        $etc['five'] = M('GameAwards')->where(array('id' => $data['fiveid']))->getField('name');
        $etc['six'] = M('GameAwards')->where(array('id' => $data['sixid']))->getField('name');
        $res1 = M('GameApps')->where(array('id' => $data['id']))->save($etc);
        //对应减少库存
//		M('GameAwards')->where(array('id' => $data['fistid']))->setDec('nums', $data['fistnums']);
//		M('GameAwards')->where(array('id' => $data['secondid']))->setDec('nums', $data['secondnums']);
//		M('GameAwards')->where(array('id' => $data['thirdid']))->setDec('nums', $data['thirdnums']);
//		M('GameAwards')->where(array('id' => $data['fourid']))->setDec('nums', $data['fournums']);
//		M('GameAwards')->where(array('id' => $data['fiveid']))->setDec('nums', $data['fivenums']);
//		M('GameAwards')->where(array('id' => $data['sixid']))->setDec('nums', $data['sixnums']);
        if ($res1 !== FALSE) {
//            M()->commit();
            M('GameApps')->where(array('id' => $data['id']))->save(array('info' => $msg));
        } else {
//            M()->rollback();
            M('GameApps')->where(array('id' => $data['id']))->save(array('status' => 1, 'info' => "[ {$time} ] 活动初始化失败"));
        }
    }

    /**
     * 活动重置接口
     */
    public function reset() {
        $id = I('get.id');
//        M()->startTrans();
        $result1 = M('GameApps')->where(array('id' => $id))->getField('game_type');
        $list = M('GameRecord')->where(array('game_type' => $result1))->select();
        $result2 = $this->_saveAll($list, M('GameRecordBack'));
        $result3 = M('GameRecord')->where(array('game_type' => array('LIKE', $result1)))->delete();
        if ($result1 !== false && count($result2) !== FALSE && $result3 !== false) {
//            M()->commit();
            $this->ajaxReturn(array('status' => 2, 'msg' => '数据重置成功'));
        } else {
//            M()->rollback();
            $this->ajaxReturn(array('status' => 1, 'msg' => '数据重置失败，请稍候再试。'));
        }
    }

}
