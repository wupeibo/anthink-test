<?php

namespace Wap\Controller;

/**
 * 二维码登录控制器
 *
 * @author wupeibo <wupeibo@163.com> 
 * @date 2015-01-13
 */
class LoginController extends WapController {

    /**
     * 二维码登录
     * @var type 
     */
    public $ptitle = '授权管理';

    /**
     * 定义可访问的操作
     * @var type 
     */
    public $access = array(
        'index' => '授权登录',
    );

    public function _initialize() {
        parent::_initialize();
        if (empty($this->member)) {
            $this->getMember($this->openid);
        }
    }

    /**
     * 授权登录
     */
    public function index() {
        //分享配置
        $conname = strrchr(__CONTROLLER__, "/");
        $conname = substr($conname, 1);
        $pageName = $conname . '-' . __FUNCTION__;
        $page = getShare(strtolower($pageName));
        $this->assign('share', $page);

        $this->assign('uuid', I('get.uuid', ''));
        $this->assign('ptitle', '授权登录');
        $this->display();
    }

    /**
     * 公共登录接口
     * POST
     */
    public function login() {
        if (IS_POST) {
            $data['openid'] = $this->openid;
            $data['utime'] = time();
            $res = M('Quicklogin')->where(array('uuid' => I('post.uuid')))->save($data);
            if ($res) {
                $this->success('授权成功，等待页面刷新~');
            } else {
                $this->error('授权失败！');
            }
        }
    }

}
