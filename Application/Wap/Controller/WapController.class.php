<?php

namespace Wap\Controller;

use Library\Controller\Controller;
use Library\Util\Api\Wechat;
use Library\Util\Api\WechatPay;
use Library\Util\Baidu;

/**
 * 官网基础控制器
 */
class WapController extends Controller {

    /**
     * 设置分组名称
     * @var type
     */
    public $gtitle = '微信模块';

    /**
     * 设置分页样式
     * @var type 
     */
    protected $_page_style = array(
        'header' => '',
        'prev' => '上一页',
        'next' => '下一页',
        'theme' => '%UP_PAGE% %DOWN_PAGE%',
    );

    /**
     * 用户的OPENID
     * @需要调整oauth方法
     * @var type 
     */
    protected $openid = null;

    /**
     * 会员资料
     * @需要调用getMember方法
     * @var type 
     */
    protected $member = null;

    /**
     * 微信公众号操作对象
     * @需要调用getInstanceWechat方法
     * @var Wechet 
     */
    protected $wechat = null;

    /**
     * 微信支付操作对象
     * @var type 
     */
    protected $wechatPay = null;

    /**
     * 微信公众号配置信息
     * @需要调用需要调用getInstanceWechat方法
     * @var array 
     */
    protected $wechat_config = null;

    /**
     * 网站配置信息
     * @var type 
     */
    protected $wapsite = null;

    /**
     * 初始化方法
     */
    public function _initialize() {
        $this->wapsite = M('SiteConfig')->find(1);
        /**
         * 网站状态检测
         */
        if (intval($this->wapsite['is_disable']) !== 2 && !val('close_lock')) {
            val('close_lock', true);
            R('Wap/Error/show', array('抱歉，网站已经关闭', $this->wapsite['disabled_msg']));
        }
        val('close_lock', false);
        /**
         * 百度统计对象实例
         */
        if (!empty($this->wapsite['baidu_tongji_key'])) {
            $baidu = new Baidu($this->wapsite['baidu_tongji_key']);
            $this->assign('baidu_tongji_src', $baidu->trackPageView());
        }
        /**
         * 自动进行Oauth授权，获取用户openid
         */
        $this->openid = session('openid');
//        $this->openid = 'oa2n8joGqoxHaSG9DoQpUf79c88k';
        if (empty($this->openid)) {
            if (intval($this->wapsite['is_wechat_auth']) === 2) {
                empty($this->openid) && $this->openid = $this->oauth();
            }
        }

        $this->assign('site', $this->wapsite);

        $_getcode_ = I('get._getcode_', '', 'trim');
        if (!empty($_getcode_)) {
            $this->_bind_map = (array) unserialize(decode($_getcode_));
        }
    }

    /**
     * 读取微信配置信息
     */
    private function _applyWechatConfig() {
        $map = array();
        $map['id'] = '1';
        $map['status'] = '2';
        $this->wechat_config = M('WechatConfig')->where($map)->find();
        empty($this->wechat_config) && R('Wap/Error/show', '公众号参数未配置', '请到系统后台进行操作!');
    }

    /**
     * 获取微信SDK操作对象
     * @return Wechat
     */
    protected function getInstanceWechat() {
        if (is_null($this->wechat)) {
            empty($this->wechat_config) && $this->_applyWechatConfig();
            $this->wechat = new Wechat($this->wechat_config);
        }
        return $this->wechat;
    }

    /**
     * 获取微信支付SDK操作对象
     * @return WechatPay
     */
    protected function getInstanceWechatPay() {
        if (is_null($this->wechatPay)) {
            empty($this->wechat_config) && $this->_applyWechatConfig();
            $this->wechatPay = new WechatPay($this->wechat_config);
        }
        return $this->wechatPay;
    }

    /**
     * 微信网页授权Oauth
     * @return type
     */
    public function oauth() {
        if (!empty($this->openid)) {
            $this->assign('openid', $this->openid);
            return $this->openid;
        }
        $wechat = $this->getInstanceWechat();
        if (I('get.code', false, 'trim')) {
            $result = $wechat->getOauthAccessToken();
            if ($result !== false) {
                session('openid', $result['openid']);
                $result['expires_in'] = intval($result['expires_in']) + time() - 200;
                $this->_save($result, M('WechatMember'), array('openid' => $result['openid']));
                redirect(session('oauth_referer'));
            } else {
                R('Wap/Error/show', array('微信网页授权失败', $wechat->errMsg));
            }
        } else {
            session('oauth_referer', get_domain() . url_filter());
            redirect($wechat->getOauthRedirect(U('Wap/Wap/oauth', '', true, true), '', 'snsapi_base'));
        }
    }

    /**
     * 获取微信会员用户信息
     * @param type $openid 用户的OPENID
     * @param type $field 指定字段值
     * @param type $check 是否检测资料完成信息
     * @return type
     */
    protected function getMember($openid, $field = null, $check = false) {
        $map = array('openid' => $openid, 'status' => "2");
        $member = M('WechatMember')->where($map)->find();
        if (empty($member) || empty($member['nickname']) || $member['expires_in'] <= time()) {
            if (intval($member['expires_in']) <= time()) {
                session('openid', null);
                $this->oauth();
            }
            $this->saveUserInfo($openid);
            $member = $this->saveUserInfo($openid);
        }
        $member2 = M('Member')->where($map)->find();
        if (empty($member) && empty($member2)) {
            return null;
        }
        if ($member && empty($member2)) {
            M('Member')->add($member);
            $member2 = M('Member')->where($map)->find();
        }
        $result = array_merge($member, $member2);
        $this->member = $result;
        $this->assign('member', $this->member);
        if ($check !== false && (empty($this->member['name']) || empty($this->member['phone']))) {
            is_bool($check) && $check = '完善个人资料后才能使用此功能！';
            IS_AJAX || R('Wap/Member/info', array($check, $this->member));
        }
        if (empty($field)) {
            return $result;
        }
        if (isset($result[$field])) {
            return $result[$field];
        }
        return null;
    }

    /**
     * 更新用户的详细信息
     * @param type $openid
     * @return array
     */
    protected function saveUserInfo($openid) {
        is_null($this->wechat) && $this->getInstanceWechat();
        $where = array();
        $where['openid'] = $openid;
        $member = $this->wechat->getUserInfo($openid);
        if ($member === false) { /* 获取用户详细信息 */
            R('Wap/Error/show', array('抱歉', '获取用户信息失败<br/>' . $this->wechat->errMsg));
        }
        if (empty($member['subscribe'])) { /* 未关注的用户 */
            R('Wap/Error/wechat');
        }
        $member['group_id'] = $this->wechat->getUserGroup($openid);
        if ($member['group_id'] === false) {
            R('Wap/Error/show', array('抱歉', '获取用户分组信息失败<br/>' . $this->wechat->errMsg));
        }
        $_sex = array(1 => '男', 2 => '女');
        $member['sex'] = isset($_sex[$member['sex']]) ? $_sex[$member['sex']] : '保密';
        $member['update_date'] = get_now_date();
        $member['create_date'] = to_date($member['subscribe_time']);
        $member['status'] = 2;
        $result = $this->_save($member, D('WechatMember'), $where);
        if (empty($result['status'])) {
            R('Wap/Error/show', array('抱歉', '更新用户信息失败，请稍候再来访问...'));
        }
        return $member;
    }

    /**
     * 设置添加分享积分
     */
    public function setshare() {
        $model = I('post.model', '', 'trim');
        $id = I('post.id', '0', 'trim,intval');
        $num = I('post.num', '0', 'trim,intval'); //每天可以分享的次数
        if (!empty($id) && !empty($model)) {
            $info = M($model)->find($id);
            if (empty($info)) {
                exit('');
            }
            $data = array();
            $data['table'] = M($model)->getTableName();
            $data['table_id'] = $id;
            $data['openid'] = $this->oauth();
            $data['title'] = I('post.title', $info['title']);
            $data['img'] = I('post.img', $info['link']);
            $data['desc'] = I('post.desc', $info['content']);
            $data['type'] = I('post.type', 'null');
            $data['link'] = I('post.link', 'null');
            $data['integral'] = intval($info['integral']);
            if (empty($data['integral'])) {
                exit('');
            }
            $map = array();
            $map['table'] = $data['table'];
            $map['table_id'] = $id;
            $map['openid'] = $data['openid'];
            $map['_string'] = "DATE_FORMAT(create_date,'%Y-%m-%d') = DATE_FORMAT(NOW(),'%Y-%m-%d')"; //查询同一天的记录
            $r1 = false;
            if (M('SiteShareRecord')->where($map)->count() < $num) {
                M()->startTrans();
                if (false !== M('SiteShareRecord')->add($data)) {
                    $r1 = D('Shop/MemberIntegral')->changeIntegral($this->openid, intval($info['integral']), '分享有礼', FALSE);
                }
                if ($r1 !== false) {
                    M()->commit();
                    $this->success('人品不错哦，获得了' . intval($info['integral']) . '个分享积分。');
                    die();
                }
                M()->rollback();
            } else {
                $this->error('分享每天不得超过' . intval($num) . '次哟！');
            }
        }
    }

}
