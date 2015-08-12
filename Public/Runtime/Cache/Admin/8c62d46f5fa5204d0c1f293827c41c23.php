<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<!--欢迎使用MP平台-->
<html lang="zh-CN">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="renderer" content="webkit" />
        <meta name="google" value="notranslate" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title><?php echo ($ptitle); ?> 【<?php echo ($site["site_name"]); ?>】</title>
        <meta name="keywords" content='<?php echo ($site["site_keywords"]); ?>' />
        <meta name="description" content="<?php echo ($site["site_desc"]); ?>" />
        <link rel="stylesheet" href="http://localhost/anthink/Public/Plugins/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="http://localhost/anthink/Public/Resource/css/animate.min.css" />
        <link rel="stylesheet" href="http://localhost/anthink/Public/Resource/css/green.css" />
        <link rel="stylesheet" href="http://localhost/anthink/Public/Resource/css/common.css" />
        <link rel="stylesheet" href="http://localhost/anthink/Public/Resource/css/admin.css" />
        <link rel="shortcut icon" href="<?php echo ((isset($site["site_icon"]) && ($site["site_icon"] !== ""))?($site["site_icon"]):'http://localhost/anthink/Public/Resource/favicon.ico'); ?>" />
        <!--[if lt IE 9]>
            <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
        <script>
            window._APP_ = '/anthink/index.php';
            window._RES_ = 'http://localhost/anthink/Public/Resource';
            window._LIB_ = 'http://localhost/anthink/Public/Plugins';
            window._URI_ = "<?php echo url_filter();?>";
            window._CUR_ = "/anthink/index.php/Admin/Public/<?php echo (ACTION_NAME); ?>";
        </script>
        <script src="http://localhost/anthink/Public/Resource/js/global.js"></script>
        <script src="http://localhost/anthink/Public/Plugins/jquery/jquery-1.11.1.min.js"></script>
        <script src="http://localhost/anthink/Public/Plugins/json/json2.js" type="text/javascript"></script>
        <script src="http://localhost/anthink/Public/Plugins/bootstrap/js/bootstrap.min.js"></script>
        <script src="http://localhost/anthink/Public/Plugins/layui/layer.m/layer.m.js"></script>
        <script src="http://localhost/anthink/Public/Plugins/jquery/jquery.validate.js"></script>    
        <script src="http://localhost/anthink/Public/Resource/js/common.js"></script>
        <script src="http://localhost/anthink/Public/Resource/js/admin.js"></script>
    </head>
    <body>
        <div>
            
            
        </div>
        <!-- 页面主体 -->
        <div class="container-fluid pb20">
            
    <div class="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 shadow bgwhite wrap_box bdr4 pb20 animated bounceInUp login-mt">
        <div class="row mb20">
            <div class=" col-sm-8 col-sm-offset-2 mb20">
                <form onsubmit="return false" data-tip='正在尝试登录，请稍后...' action="<?php echo U('Admin/Public/login');?>" data-timeout="hide" data-ajax="true" method="post">
                    <h3 class="mt20 mb40 main-color fn text-center">
                        <span class="db fm mt2"><?php echo ($site["app_name"]); ?></span>
                    </h3>
                    <input class="form-control dib bdd login-input login-input-username mb4" type="text" required="required" title='请输入四位或以上的字母或数字' pattern="^[a-zA-Z0-9]{4,}$" autocomplete="off" name="username"/>
                    <input class="form-control dib bdd login-input login-input-password mb4 mt20" type="password" required="required" title="请输入四位或以上的字母或数字" pattern="^.{4,}$" name="password"/>

                    <div class="text-center mb20 mt20 pct100">
                        <button class="btn btn-blue btn-lg sp3 wb100 main_btn">登录</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class=" clearfix "></div>
    <div class="login-copyright text-center mt40">
        Copyright © <?php echo date('Y');?> <?php echo ($site["site_company"]); ?> 版权所有
    </div>

            
        </div>
        <!-- 脚本代码 -->
        <div class='hidden'>
            <script src="/anthink/index.php/plugin/ueditor.js"></script>
            <script src="http://localhost/anthink/Public/Plugins/qiniuue/ueditor.config.js"></script>
            <script src="http://localhost/anthink/Public/Plugins/qiniuue/ueditor.all.min.js"></script>
            <script src="http://localhost/anthink/Public/Plugins/qiniuue/lang/zh-cn/zh-cn.js"></script>
            
    <script>
        $(function () {
            $('.login-input').on('focus', function () {
                $(this).removeClass('login-input');
            }).on('change blur', function () {
                this.value.length < 1 ?
                        $(this).addClass('login-input') :
                        $(this).removeClass('login-input');
            }).trigger('change');
        });
    </script>

            <img alt="百度统计CODE" src="http://hm.baidu.com/hm.gif?si=df31b90409cbd7237728ca1a770d72e6&amp;et=0&amp;nv=1&amp;st=1&amp;su=http%3A%2F%2Flocalhost%2Fanthink%2Findex.php%2Fadmin&amp;v=wap-0-0.2&amp;rnd=1294233944" width="0" height="0" />

        </div>
    </body>
</html>