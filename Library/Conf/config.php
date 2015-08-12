<?php

/**
 * 系统默认配置文件
 * 注意，请不要在这里配置SAE的数据库，配置你本地的数据库就可以了。
 * 
 * @author wubobo
 * @date 2015/07/14 15:38:22
 * @return array Config
 */
/* 配置自动加载名称空间 */
C('AUTOLOAD_NAMESPACE', array('Library' => COMMON_PATH));
return array(
    'DB_TYPE' => 'mysql', //数据库默认连接方式
    'DB_HOST' => 'localhost', //数据库服务器默认地址
    'DB_NAME' => 'luoyan', //数据库默认名称
    'DB_USER' => 'root', //数据库默认用户名
    'DB_PWD' => '123456', //数据库默认密码
    'DB_PORT' => '3306', //数据库默认连接端口
    'DB_PREFIX' => 'wx_', //数据表默认前缀
    /* 开发异常调试 */
    'SHOW_ERROR_MSG' => !!APP_DEBUG, // 显示错误信息
    'SHOW_PAGE_TRACE' => !!APP_DEBUG, // 显示页面Trace信息
    'ERROR_PAGE' => '?s=admin/public/error', //系统错误页

    /* 设置对称加密方式 */
    'DATA_CRYPT_TYPE' => 'Think', // Think,Des,Base64,Crypt,Xxtea

    /* 设定URL模式 */
    'URL_MODEL' => 1, // URL访问模式
    'URL_HTML_SUFFIX' => '.j8sp', // URL静态化后缀
    'URL_PATHINFO_DEPR' => '/', // PATHINFO模式下，各参数之间的分割符号
    'URL_CASE_INSENSITIVE' => true, // url统一小写

    /* 模板配置 */
    'DEFAULT_THEME' => '', // 默认模板主题名称
    'TMPL_FILE_DEPR' => '_', //模块链接符

    /* 指定默认模块 */
    'DEFAULT_MODULE' => 'Home', //系统默认进入模块

    /* 加载扩展配置 */
    'LOAD_EXT_CONFIG' => 'db', //加载配置文件

    /* 缓存配置 */
    'DATA_CACHE_TYPE' => 'Db', //使用MySQl来存储数据
    'DATA_CACHE_TABLE' => 'think_cache', //设置缓存表名

    /* 设置SESSON存储方式 */
//    'SESSION_TYPE' => 'Db', //使用MySQL来存储数据
//    'SESSION_TABLE' => 'think_session', //设置session存储表
//    'SESSION_EXPIRE' => 72000, //SESSION有效时间

    /* 模板变量 */
    'TMPL_PARSE_STRING' => array(
        '__STATIC__' => get_domain() . __ROOT__ . '/Public',
        '__RES__' => get_domain() . __ROOT__ . '/Public/Resource',
        '__LIB__' => get_domain() . __ROOT__ . '/Public/Plugins',
    )
);
