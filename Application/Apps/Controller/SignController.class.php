<?php

namespace Apps\Controller;

/**
 * 后台签到有礼控制器
 *
 * @author wupeibo<wupeibo@163.com>
 */
class SignController extends AppsController {

    /**
     * 设置模块标题
     * @var string 
     */
    public $ptitle = '签到有礼';

    /**
     * 设定可访问的操作
     * @var type 
     */
    public $access = array(
        'index' => '签到有礼',
        'add' => '添加签到配置',
        'edit' => '编辑签到配置',
        'del' => '删除签到配置',
        'resume' => '启用签到',
        'forbid' => '禁用签到',
    );

    /**
     * 设定可设置为菜单的节点
     * @var type 
     */
    public $menu = array(
        'index' => '签到有礼',
    );

    /**
     * 绑定操作模型
     * @var type 
     */
    protected $_bind_model = 'GameSignConfig';

}
