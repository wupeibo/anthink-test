<?php

namespace Apps\Controller;

/**
 * 兑换管理模块控制器
 *
 * @author wupeibo <wupeibo@163.com>
 * @date 2015-3-11 19:51:54
 */
class ExchangeController extends AppsController {

    /**
     * 设置模块标题
     * @var type 
     */
    public $ptitle = '兑换列表';

    /**
     * 设定可访问的操作
     * @var type 
     */
    public $access = array(
        'index' => '兑换列表',
    );

    /**
     * 设定可设置为菜单的节点
     * @var type 
     */
    public $menu = array(
        'index' => '兑换列表',
    );

    /**
     * 绑定操作模型
     * @var type 
     */
    protected $_bind_model = 'GameAwardsCate';

}
