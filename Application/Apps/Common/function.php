<?php

/**
 * 兼容低版本PHP的array_column
 */
if (!function_exists('array_column')) {

    function array_column($arr, $key) {
        return array_map(function($val) use ($key) {
            return $val[$key];
        }, $arr);
    }

}

/**
 * 显示积分变化颜色
 * @param int $integral
 */
function show_integral_color($integral) {
    return sprintf('<span class="%s">%+d</span>', $integral > 0 ? 'increase' : 'decrease', $integral);
}

/**
 * 标记领取状态
 * 
 * @param type $status
 * @return string
 */
function show_status_tip($status) {
    switch ($status) {
        case 1:
            return '<span class="label label-danger">未领取</span>';
        case 2:
            return '<span class="label label-danger">已发货</span>';
        case 3:
            return '<span class="label label-success">已领取</span>';
        case 4:
            return '<span class="label label-success">已过期</span>';
        default :
            return '<span class="label label-danger">未中奖</span>';
    }
}

/**
 * 生成中奖名单链接
 * @param type $id
 * @param type $vo
 * @return type
 */
function luckdraw_detail($gametype) {
    $url = U('Apps/Record/index', array('gametype' => $gametype));
    $act = '活动详情';
    if ($gametype == 'sign') {
        $act = '中奖详情';
    }
    return "<a class='btn btn-success btn-xs' data-open='{$url}'>{$act}</a>";
}

/**
 * 显示活动类型的名称
 */
function show_game_type($type) {
    switch ($type) {
        case 1:
            return '大转盘';
        case 2:
            return '砸金蛋';
        case 3:
            return '开宝箱';
        case 4:
            return '签到抽奖';
    }
}

/**
 * 显示优惠券状态文本
 * 
 * @param type $val
 * @return string
 */
function show_send_status_text($val) {
    switch ($val) {
        case 2:
            return '<span class="label label-success">已发放</span>';
        case 1:
            return '未发放';
    }
}

/**
 * 显示优惠券获取途径
 * 欢迎补充
 * 
 * @param type $type
 * @return string
 */
function show_coupon_type_name($type) {
    switch ($type) {
        case 1:
            return '签到有礼';
        case 2:
            return '积分抽奖';
        case 3:
            return '后台赠送';
        default :
            return '其他途径';
    }
}

/**
 * 显示优惠券发放状态
 * @param type $status
 * @return string
 */
function show_send_type($status) {
    switch ($status) {
        case 1:
            return '<span class="label label-success">已发放</span>';
        case 2:
            return '未发放';
        default :
            return '其他状态';
    }
}

/**
 * 生成中奖名单链接
 * @param type $id
 * @return type
 */
function sign_detail($id) {
    $url = U('Integral/SignLog/index');
    return "<a class='btn btn-success btn-xs' data-open='{$url}'>签到记录</a>";
}

/**
 * 生成中奖名单链接
 * @param type $id
 * @param type $vo
 * @return type
 */
function share_detail($id, $vo) {
    $url = U('Apps/Share/index', array('page' => $id));
    return "<a class='btn btn-success btn-xs' data-open='{$url}'>分享记录</a>";
}

/**
 * 显示活动类型的名称
 */
function show_page_name($type) {
    switch ($type) {
        case 'growth-index':
            return '成长爱计划主页';
        case 'babyphysique-index':
            return '体格测评';
        case 'babyintel-index':
            return '智能测评';
        case 'babynutrit-index':
            return '营养测评';
        case 'growth-product':
            return '产品介绍';
        case 'babyphysique-show':
            return '体格测评曲线分析';
        case 'lottery-lottery':
            return '大转盘';
        case 'lottery-eggs':
            return '砸金蛋';
        case 'lottery-box':
            return '开宝箱';
        default :
            return $type;
    }
}
