<?php

/**
 * 签到状态
 * @author wupeibo<wupeibo@163.com>
 */
function show_sign_status($sign) {
    switch ($sign) {
        case 1:
            return '<div class="signdiv sign1"><div class="signtext">已签</div></div>';
        case 2:
            return '<div class="signdiv sign2"><div class="signtext">补签</div></div>';
        default :
            return '<div class="signdiv sign0"><div class="signtext">未签</div></div>';
    }
}

function game_status($vo) {

    switch ($vo['status']) {
        case 1:
            return '<span class="blue zhi" onclick="adsShow(' . $vo['id'] . ')" >选择收货地址</span>';
        case 2:
            return '<span class="yellow">待领取</span>';
        case 3:
            if ($vo['awards'] != 7)
                return "<span class='green'>已领取</span>";
            else
                return "";
        case 4:
            return "<span class='red'>已过期</span>";
    }
}

/**
 * 获取页面分享的配置
 * @param type $page
 */
function getShare($page = "none") {
    $data = M("PageConfig")->where(array('page' => $page))->find();
    if (empty($data)) {
        $data = M("PageConfig")->where(array('page' => 'default'))->find();
    }
    return $data;
}