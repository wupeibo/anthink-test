<?php

namespace Api\Service;

use Library\Controller\Controller;
use Library\Util\Api\Wechat;

/**
 * 微信接口具体实现操作
 * 
 * @author zoujingli <zoujingli@qq.com>
 * @date 2015/04/24 11:30
 */
class WechatService extends Controller {

    /**
     * 接口操作对象
     * @var type 
     */
    protected $wechat = null;

    /**
     * 接口配置信息
     * @var type 
     */
    protected $config = null;

    /**
     * 微信用户OPENID
     * @var type 
     */
    protected $openid = null;

    /**
     * 配置文件过滤
     * 
     * @param type $config
     * @return type
     */
    protected function _filterConfig($config) {
        return $this->config = array(
            'token'          => $config['token'], //填写你设定的key
            'appid'          => $config['appid'], //填写高级调用功能的app id
            'appsecret'      => $config['appsecret'], //填写高级调用功能的密钥
            'partnerid'      => $config['partnerid'], //财付通商户身份标识
            'partnerkey'     => $config['partnerkey'], //财付通商户权限密钥Key
            'paysignkey'     => $config['paysignkey'], //商户签名密钥Key
            'encodingaeskey' => $config['encodingaeskey'], //加密秘钥
            'reply'          => $config['reply'], //关注时的自动回复消息
        );
    }

    /**
     * 微信接口初始化方法
     */
    public function __construct($config = array()) {
        parent::__construct();

        /* 创建接口操作对象 */
        $this->wechat = new Wechat($this->_filterConfig($config));

        /* 验证接口 */
        $this->wechat->valid();

        /**
         * 获取openid
         */
        $this->openid = $this->wechat->getRev()->getRevFrom();

        /* 记录接口日志 */
        $this->_logs();

        /* 分别执行对应类型的操作 */
        switch ($this->wechat->getRev()->getRevType()) {
            case Wechat::MSGTYPE_TEXT:
                $this->_text();
                break;
            case Wechat::MSGTYPE_EVENT:
                $this->_event();
                break;
            case Wechat::MSGTYPE_IMAGE:
                $this->_image();
                break;
            case Wechat::MSGTYPE_LOCATION:
                $this->_location();
                break;
            default:
                $this->_default();
        }
    }

    /**
     * 微信关键字处理
     * @param type $keys
     */
    protected function _keys($keys) {

        $data = array();

        /**
         * 获取关键字对应的内容
         */
        $map = array();
        $map['keys'] = trim($keys);
        $list = M('WechatKeys')->where($map)->select();

        /**
         * 根据关键字记录的类型做出应答
         * 1、文件消息
         * 2、图文消息
         * 3、默认消息 @todo 需要根据项目订制
         */
        foreach ($list as $vo) {
            switch ($vo['type']) {
                /* 文本消息 */
                case 'text':
                    if (empty($vo['url'])) {
                        $data['text'].="{$vo['content']}\n";
                    } else {
                        $data['text'].="<a href='{$vo['url']}'>{$vo['content']}</a>";
                    }
                    break;
                /* 图文消息 */
                case 'news':
                    $row = array(
                        'Title'       => $vo['title'],
                        'Description' => str_replace(array(' ', '&nbsp;'), '', $vo['content']),
                    );
                    empty($vo['link']) or $row['PicUrl'] = to_domain($vo['link']);
                    empty($vo['url']) or $row['Url'] = to_domain($vo['url']);
                    $data['news'][] = $row;
                    break;
                /* 默认消息 */
                default :
            }
        }
        /**
         * 返回消息结果
         * 1、如果存在图文消息，优先回复图文消息
         * 2、如果不存在图文消息，回复文件类型消息
         * 3、消息转发给客服处理
         */
        if (!empty($data['news'])) {
            $this->wechat->news($data['news'])->reply();
        } elseif (!empty($data['text'])) {
            $this->wechat->text($data['text'])->reply();
        } else {
            $this->wechat->transfer_customer_service()->reply();
        }
    }

    /**
     * 文本类型消息
     * 1、直接作为关键字处理
     */
    protected function _text() {
        $this->_keys($this->wechat->getRevContent());
    }

    /**
     * 位置类事情回复
     */
    protected function _location() {
        $vo = $this->wechat->getRevData();
        $url = "http://apis.map.qq.com/ws/geocoder/v1/?location={$vo['Location_X']},{$vo['Location_Y']}&key=ZBHBZ-CHQ2G-RDXQF-I5TUX-SAK53-A5BZT";
        $data = json_decode(file_get_contents($url), true);
        if (!empty($data) && intval($data['status']) == 0) {
            $msg = $data['result']['formatted_addresses']['recommend'];
        } else {
            $msg = "{$vo['Location_X']},{$vo['Location_Y']}";
        }
        $this->wechat->text($msg)->reply();
    }

    /**
     * 事件处理
     */
    protected function _event() {
        $event = $this->wechat->getRevEvent();
        switch ($event['event']) {
            /**
             * 用户关注的行为事件处理
             * 1、创建用户记录
             * 2、判断是否有设置自动回复
             */
            case 'subscribe': //关注事件
                $user = $this->wechat->getUserInfo($this->openid);
                if ($user === false) {
                    $user = array('openid' => $this->openid);
                    $user['create_date'] = date('Y-m-d H:i:s', $user['subscribe_time']);
                    $user['sex'] = '3';
                }
                $sex = array('1' => '男', '2' => '女', '3' => '保密');
                $user['status'] = '2';
                $user['sex'] = isset($sex["{$user['sex']}"]) ? $sex["{$user['sex']}"] : '未知';
                $user['update_date'] = get_now_date();
                $this->_save($user, M('WechatMember'), array('openid' => $this->openid));
                if (!empty($this->config['reply'])) {
                    $this->_keys($this->config['reply']);
                }
                break;
            /**
             * 用户取消关注的行为事件处理
             * 1、更新微信会员的状态
             */
            case 'unsubscribe': //取消关注
                $user = array();
                $user['openid'] = $this->wechat->getRevFrom();
                $user['status'] = '1';
                $user['update_date'] = get_now_date();
                $this->_save($user, M('WechatMember'), array('openid' => $this->openid));
                break;
            /**
             * 微信菜单点击事件
             * 1、获取完整的菜单配置信息
             * 2、根据菜单的类型读取数据并应答
             */
            case 'CLICK':
                $id = str_ltrim($event['key'], 'mid');
                $menu = M('WechatMenu')->find($id);
                switch ($menu['type']) {
                    case 'text':
                        $this->wechat->text($menu['content'])->reply();
                        break;
                    case 'keys':
                    case 'image':
                        $this->_keys($menu['keys']);
                        break;
                }
                break;
            /**
             * 扫码推事件的事件推送
             */
            case 'scancode_push':
            case 'scancode_waitmsg':
                $scanInfo = $this->wechat->getRev()->getRevScanInfo();
                $this->_keys($scanInfo['ScanResult']);
                break;
            case 'SCAN':
                $keys = $this->wechat->getRevEvent();
                if (!empty($keys['key'])) {
                    $this->_keys($keys['key']);
                } else {
                    $this->wechat->transfer_customer_service()->reply();
                }
                break;
            default :
            //其它操作
        }
    }

    /**
     * 图片事件处理
     */
    protected function _image() {
        
    }

    /**
     * 默认事件处理
     */
    protected function _default() {
        $this->wechat->text("help info")->reply();
    }

    /**
     * 记录接口日志
     */
    protected function _logs() {
        $data = $this->wechat->getRev()->getRevData();
        $data['ReceivedTime'] = time();
        if (in_array($data['Event'], array('scancode_push', 'scancode_waitmsg'))) {
            $scanInfo = $this->wechat->getRev()->getRevScanInfo();
            $data = array_merge($data, $scanInfo);
        }
        if (in_array($data['Event'], array('location_select'))) {
            $locationInfo = $this->wechat->getRev()->getRevSendGeoInfo();
            $data = array_merge($data, $locationInfo);
        }
        $WechatMsgModel = M('WechatMsg');
        $WechatMsgModel->create(array_change_key_case($data, CASE_LOWER));
        $WechatMsgModel->add();
    }

}
