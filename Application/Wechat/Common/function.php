<?php

/**
 * 微信菜单控制显示
 * 
 * @param type $id 菜单ID
 * @param type $vo 菜单记录
 * @return string
 */
function show_menu_button($id, $vo) {
    $button = array();
    if ($vo['type'] === 'null' && intval($vo['pid']) === 0 && count($vo['lower']) < 6) {
        $button[] = show_load_button($id, $vo, '添加子菜单', 'Wechat/Menu/add', array('pid' => $id));
    } else {
        $button[] = '<a class="btn btn-xs btn-link disabled">添加子菜单</a> ';
    }
    $button[] = show_status_button(join(',', $vo['lower']), $vo);
    $button[] = show_load_button($id, $vo, '编辑', 'Wechat/Menu/edit');
    $button[] = show_del_button(join(',', $vo['lower']), $vo, '删除');
    return join('', $button);
}

/**
 * 生成关键字二维码
 * @param type $keys
 * @return type
 */
function create_qrc($keys) {
    if (!empty($keys)) {
        $map = array();
        $map['keys'] = $keys;
        $map['qrc'] = array(array('neq', ''), array('exp', 'is not null'), 'and');
        $url = M('WechatKeys')->where($map)->getField('qrc');
        if (!empty($url)) {
            return $keys . " <img class='fancy' data-src='{$url}&_name=qrc.jpg' style='height:14px' src='{$url}&_name=qrc.jpg'/>";
        }
        if (auth('Wechat/Keys/createQrc')) {
            $url = U('Wechat/Keys/createQrc', array('keys' => $keys));
            return $keys . " <a class='fr' href='javascript:void(0)' title='生成二维码' data-load='{$url}'><i class='glyphicon glyphicon-qrcode'></i></a>";
        }
    }
    return $keys;
}
