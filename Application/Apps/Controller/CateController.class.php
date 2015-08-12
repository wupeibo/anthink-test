<?php

namespace Apps\Controller;

/**
 * 奖品类型管理模块控制器
 *
 * @author wupeibo <wupeibo@163.com>
 * @date 2015-3-11 19:51:54
 */
class CateController extends AppsController {

    /**
     * 设置模块标题
     * @var type 
     */
    public $ptitle = '奖品类型';

    /**
     * 设定可访问的操作
     * @var type 
     */
    public $access = array(
        'index' => '奖品类型列表',
        'add' => '添加类型',
        'edit' => '编辑类型',
        'del' => '删除类型',
        'resume' => '启用类型',
        'forbid' => '禁用类型',
    );

    /**
     * 设定可设置为菜单的节点
     * @var type 
     */
    public $menu = array(
        'index' => '奖品类型列表',
    );

    /**
     * 绑定操作模型
     * @var type 
     */
    protected $_bind_model = 'GameAwardsCate';

}
