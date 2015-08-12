<?php

namespace Apps\Controller;

use Library\Util\Node;

/**
 * 页面分享配置
 *
 * @author Administrator
 */
class PageController extends AppsController {

    public $ptitle = '分享配置';
    protected $_bind_model = 'PageConfig';

    /**
     * 定义可访问的操作
     * @var type 
     */
    public $access = array(
        'index' => '列表',
        'del' => '删除',
        'clean_recond' => '清除记录',
    );

    /**
     * 
     * @param type $data
     * @param type $model
     */
    protected function _data_filter(&$data, &$model) {
        foreach ($data as &$val) {
            $val['count'] = M('PageShare')->where(array('page' => $val['page']))->count();
        }
    }

    public function clean_recond() {
        $res = M('PageShare')->where(array('page' => I('get.page')))->delete();
        $this->success('清除分享记录成功');
    }

    /**
     * 表单操作过滤函数
     */
    protected function _form_filter(&$data) {
        if (!IS_POST) {
            if (I('get.action') === 'getNodeTree') {
                $list = Node::getNodeArrayTree('Wap');
                $this->ajaxReturn($list);
            }
        }
    }

}
