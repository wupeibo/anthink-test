<?php

//
//　　 　　　┏┓　　┏┓+ +
//　　 　　┏┛┻━━━┛┻┓ + +
//　　 　　┃             ┃
//　　 　　┃　　 ━       ┃ ++ + + +
//　　 　 ████━████┃+
//　　 　　┃              ┃ +
//　　 　　┃　 　┻      　┃
//　　 　　┃            　┃ + +
//　　 　　┗━┓　　　┏━┛
//　　　　　　┃　　　┃
//　　　　　　┃　　　┃ + + + +
//　　　　　　┃　　　┃　　　　Code is far away from bug with the animal protecting
//　　　　　　┃　　　┃ + 　　　　神兽保佑,代码无bug
//　　　　　　┃　　　┃
//　　　　　　┃　　　┃　　+
//　　　　　　┃　　　┗━━━┓ + +
//　　　　　　┃             ┣┓
//　　　　　　┃             ┏┛
//　　　　　　┗┓┓┏━┳┓┏┛ + + + +
//　　　　　　　┃┫┫　┃┫┫
//　　　　　　　┗┻┛　┗┻┛+ + + +
//

namespace Home\Controller;

/**
 * 前台首页控制器
 *
 * @author wupeibo <wupeibo@163.com> 
 * @date 2015-01-13
 */
class IndexController extends HomeController {

    public function index() {
        $member = session('member');
        $this->assign('info', $member);
        $this->display();
    }

    public function getLogin() {
        $uuid = I('post.uuid', '', 'trim');

        // 设置超时
        $timeout = 0;
        // 死循环 查询有无数据变化
        while (true) {
            $ql = M('Quicklogin')->where(array('uuid' => $uuid))->find();
            if ($ql['openid']) {
                M('Quicklogin')->where(array('uuid' => $uuid))->delete();
                // 返回用户信息
                $map = array('openid' => $ql['openid'], 'status' => "2");
                $member = M('WechatMember')->where($map)->find();
                session('member', $member);
                $msg = array('status' => 1, 'user' => $member);
                $this->ajaxReturn($msg, 'JSON');
                exit; // 跳出循环，返回数据
            } else { // 没有数据变化，将休眠 hold住连接
                sleep(1);
            }
            //设置服务器超时4s < 浏览器超时
            if ($timeout >= 3) {
                $msg = array('status' => 0, 'user' => M()->_sql());
                $this->ajaxReturn($msg, 'JSON');
                exit;
            }
            $timeout++;
        }
    }

    public function qrCode() {
        $uuid19 = uuid19();
        $host = get_domain() . __ROOT__;
        //这张二维码图片的包含了参数背景颜色(bg)、前景颜色(fg)、渐变颜色(gc)、纠错等级(el)、图片宽度(w)、外边距(m)
        //$data['src'] = "http://qr.liantu.com/api.php?bg=ffffff&fg=000000&gc=222222&el=l&w=300&m=10&text=" . $uuid19;
        //$data['src'] = "http://qr.liantu.com/api.php?el=l&w=300&m=10&text=" . $uuid19;
        $data['src'] = "http://qr.liantu.com/api.php?el=l&w=300&m=10&text={$host}/wap/login/index/uuid/{$uuid19}";
        $data['uuid19'] = $uuid19;
        M('Quicklogin')->add(array('uuid' => $uuid19, 'utime' => time()));
        $this->ajaxReturn($data);
    }

    public function login() {
        $type = I('post.type');
        if ($type == 1) {
            $membername = I('post.username', '', 'trim');
            $password = I('post.password', '', 'md5');
            $member = M('Member')->where(array('username' => $membername, 'password' => $password))->find();
            if ($member) {
                session('member', $member);
                $msg = array('status' => 1, 'info' => $member['nickname'] . '登录成功');
                $this->ajaxReturn($msg, 'JSON');
            } else {
                $msg = array('status' => 0, 'info' => '用户名或密码不正确');
                $this->ajaxReturn($msg, 'JSON');
            }
        } else {
            $data['username'] = I('post.username', '', 'trim');
            $data['password'] = I('post.password', '', 'trim,md5');
            $data['nickname'] = I('post.nickname', '', 'trim');
            $data['email'] = I('post.email', '', 'trim');
            $data['headurl'] = '/Static/Resource/home/img/default.jpg';   //默认头像
            $res = M('Member')->where(array('username' => $data['username']))->count();
            if ($res) {
                $msg = array('status' => 2, 'info' => '用户名已存在');
                $this->ajaxReturn($msg, 'JSON');
            }
            $res = M('Member')->where(array('nickname' => $data['nickname']))->count();
            if ($res) {
                $msg = array('status' => 3, 'info' => '昵称已存在');
                $this->ajaxReturn($msg, 'JSON');
            }
            $id = M('Member')->add($data);
            if ($id) {
                $msg = array('status' => 1, 'info' => '注册成功');
                $member = M('Member')->where(array('id' => $id))->find();
                session('member', $member);
                $this->ajaxReturn($msg, 'JSON');
            } else {
                $msg = array('status' => 0, 'info' => '注册失败请稍候再试');
                $this->ajaxReturn($msg, 'JSON');
            }
        }
    }

    public function loginout() {
        session('member', NULL);
        $this->success('退出登录成功！');
    }

}
