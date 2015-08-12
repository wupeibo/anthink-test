<?php

namespace Wap\Widget;

use Wap\Controller\WapController;

/**
 * 系统菜单挂件
 * 
 * @author zoujingli <zoujingli@qq.com>
 */
class WechatWidget extends WapController {

    protected $load = false;

    /**
     * 生成JS签名
     * @param type $url
     * @return type
     */
    public function JsSign() {
//        if ($this->load) {
//            return;
//        }
        $wechat = $this->getInstanceWechat();
        $apis = array(
            "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo",
            "startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "pauseVoice", "stopVoice", "onVoicePlayEnd",
            "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "translateVoice", "getNetworkType",
            "hideOptionMenu", "showOptionMenu", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem",
            "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard"
        );
        $config = $wechat->getJsSign(get_domain() . __SELF__);
        $config['debug'] = false;
        $config['jsApiList'] = $apis;
        $string = "<script src='http://res.wx.qq.com/open/js/jweixin-1.0.0.js'></script>";
        $string .= "<script>";
        $string .= "wx.config(" . $this->json_encode($config) . ");";
        $string .= "wx.error(function(e){})";
        $string .= "</script>";
        echo $string;
        $this->load = true;
    }

    /**
     * 获取隐藏微信菜单的脚本
     */
    public function jsHideMenu() {
        $this->JsSign();
        echo "\n<script>\ntry{";
        echo "wx.ready(function(){wx.hideOptionMenu();});\n";
        echo "}catch(e){alert(JSON.stringify(e))}\n</script>\n";
    }

    /**
     * JS生成获取共享地址的脚本 
     * window.edit_address(res){}
     */
    public function JsAddress() {
        $wechat = $this->getInstanceWechat();
        $config = array();
        $config['appId'] = $this->wechat_config['appid'];
        $config['url'] = get_domain() . __SELF__;
        $config['timeStamp'] = "" . time();
        $config['nonceStr'] = $wechat->generateNonceStr();
        $config['accessToken'] = $this->getMember($this->oauth(), 'access_token');
        $config['addrSign'] = $wechat->getSignature(array_change_key_case($config, CASE_LOWER), 'SHA1');
        unset($config['accessToken'], $config['url']);
        $config['signType'] = 'sha1';
        $config['scope'] = 'jsapi_address';
        echo "\n<script>\n";
        echo "window.edit_address=function(callback){\ntry{\nWeixinJSBridge.invoke('editAddress'," . $this->json_encode($config) . ",callback);\n}catch(e){callback(e)}\n}\n";
        echo "</script>\n";
    }

    /**
     * 输出JSON参数
     * @param type $data
     * @return type
     */
    protected function json_encode($data) {
        return str_replace('\/', '/', json_encode($data));
    }

}
