<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2014 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用入口文件

// 检测PHP环境
if(version_compare(PHP_VERSION,'5.3.0','<'))  die('require PHP > 5.3.0 !');

// 开启调试模式 建议开发阶段开启 部署阶段注释或者设为false
/* 开启调试模式 */
define("APP_DEBUG", true);

/* 定义应该根目录 */
define('APP_ROOT', str_replace('\\', '/', getcwd()) . '/');

/* 定义基础核心组件路径 */
define('COMMON_PATH', APP_ROOT . 'Library/');

/* 安装检测 */
//if (!file_exists(COMMON_PATH . 'Conf/db.php')) {
//    $url = str_replace('//', '/', $_SERVER['HTTP_HOST'] . '/' . dirname($_SERVER['SCRIPT_NAME']) . '/Public/install');
//    header("Location: http://{$url}");
//    die();
//}

/* 定义第三方插件目录 */
define('VENDOR_PATH', COMMON_PATH . 'Vendor/');

/* 文件上传目录 */
define('UPLOAD_PATH', APP_ROOT . 'Public/Uploads/');

/* 定义缓存路径 */
define("RUNTIME_PATH", APP_ROOT . 'Public/Runtime/');

/* Nginx PHPINFO BUG */
$_SERVER['PHP_SELF'] = $_SERVER['SCRIPT_NAME'];

/* SESSION 会控制 */
session_name(md5(__FILE__));

/* 定义应用名称 */
define('APP_NAME','anthink');

/* 定义应用目录 */
define('APP_PATH','./Application/');

/* 引入ThinkPHP入口文件 */
define('THINK_PATH','./ThinkPHP/');
define('ENGINE_NAME','SAE');
require THINK_PATH . 'ThinkPHP.php';
//require THINK_PATH.'Extend/Engine/sae.php';//加载SAE引擎文件

// 亲^_^ 后面不需要任何代码了 就是如此简单