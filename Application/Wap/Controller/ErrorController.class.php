<?php

namespace Wap\Controller;

use Think\Controller;

/**
 * 模块默认控制器
 */
class ErrorController extends Controller {

    /**
     * 错误处理
     * @var type 
     */
    public $ptitle = '错误处理';

    /**
     * 定义可访问的操作
     * @var type 
     */
    public $access = array(
        'show' => '显示错误页面',
        'wechat' => '引入用户关注',
    );

    /**
     * 显示错误页面
     */
    public function show($title = '抱歉', $info = '您要访问的内容被怪兽<br />吃掉了') {

        //分享配置
        $conname = strrchr(__CONTROLLER__, "/");
        $conname = substr($conname, 1);
        $pageName = $conname . '-' . __FUNCTION__;
        $page = getShare(strtolower($pageName));
        $this->assign('share', $page);

        $msg = array();
        $msg['status'] = 0;
        $msg['ptitle'] = '系统提示';
        $msg['title'] = I('get.title', $title, 'trim');
        $msg['info'] = I('get.info', $info, 'trim');
        $this->assign($msg);
        $this->display(T('Wap@Empty:error'));
        die();
    }

    /**
     * 引入用户关注
     */
    public function wechat() {
        
        //分享配置
        $conname = strrchr(__CONTROLLER__, "/");
        $conname = substr($conname, 1);
        $pageName = $conname . '-' . __FUNCTION__;
        $page = getShare(strtolower($pageName));
        $this->assign('share', $page);

        $this->assign('config', M('WechatConfig')->find(1));
        $this->assign('ptitle', '关注');
        $this->display(T('Wap@Empty:wechat'));
        die();
    }

}
