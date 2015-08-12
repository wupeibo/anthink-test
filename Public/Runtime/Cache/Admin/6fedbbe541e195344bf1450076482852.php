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
            window._CUR_ = "/anthink/index.php/Admin/Index/<?php echo (ACTION_NAME); ?>";
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
            
            <?php echo W('Admin/Menu/topMenu');?>
        </div>
        <!-- 页面主体 -->
        <div class="container-fluid pb20">
            
    <div class="panel panel-default animated bounceIn">
        <div class="panel-heading title">登录信息</div>
        <div class="panel-body content" >
            <div  class=" pt20 pb20 pl20 main-color">
                <span class="glyphicon glyphicon-user pr10" ></span>亲爱的 <?php echo session('user.username');?> 用户，您好：
            </div>
            <div class='box-content pb20 pl20 col-lg-4 col-md-5'>
                <p>
                    <strong>这是您第 <?php echo ($user["login_num"]); ?> 次登录本系统：</strong>
                </p>
                <p>
                    当前登录时间：<?php echo ($user["login_date"]); ?>
                </p>
                <p>
                <?php $info = get_ip_location($user['login_ip']); ?>
                当前登录地点： <?php echo ((isset($info["address"]) && ($info["address"] !== ""))?($info["address"]):'未知'); ?> <?php echo ($info['supplier']); ?> (IP：<?php echo ($user["login_ip"]); ?>)
                </p>
            </div>
            <div class='box-content pb20 pl20 col-lg-4 col-md-5'>
                <p>
                    <strong>您上次的登录信息如下：</strong>
                </p>
                <p>
                    登录时间： <?php echo session('user.login_date');?>
                </p>
                <p>
                <?php $info = get_ip_location(session('user.login_ip')); ?>
                登录地点： <?php echo ((isset($info["address"]) && ($info["address"] !== ""))?($info["address"]):'未知'); ?> <?php echo ($info['supplier']); ?> (IP：<?php echo session('user.login_ip');?>)
                </p>
            </div>
        </div>
    </div>

    <?php if(!empty($list)): ?><div class="panel panel-default animated bounceIn">
            <div class="panel-heading title">系统信息</div>
            <div class="panel-body content">
                <div class='box-content'>
                    <div class="row m0 p0">
                        <div class='list-group'>
                            <?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><div class="col-sm-6">
                                    <div class='row list-group-item b0'>
                                        <div class='col-xs-5'><?php echo ($key); ?></div>
                                        <div class='col-xs-6'><?php echo ($vo); ?></div>
                                    </div>
                                </div><?php endforeach; endif; else: echo "" ;endif; ?>
                        </div>

                    </div>
                </div>
            </div>
        </div><?php endif; ?>


            
                <!-- 页面脚部 -->
                <div class="row tc mr0 ml0 navbar-fixed-bottom copyright default-heading animated fadeInUp">
                    Copyright © <?php echo date('Y');?> <?php echo ($site["site_company"]); ?> 版权所有 
                </div>
            
        </div>
        <!-- 脚本代码 -->
        <div class='hidden'>
            <script src="/anthink/index.php/plugin/ueditor.js"></script>
            <script src="http://localhost/anthink/Public/Plugins/qiniuue/ueditor.config.js"></script>
            <script src="http://localhost/anthink/Public/Plugins/qiniuue/ueditor.all.min.js"></script>
            <script src="http://localhost/anthink/Public/Plugins/qiniuue/lang/zh-cn/zh-cn.js"></script>
            
            <img alt="百度统计CODE" src="http://hm.baidu.com/hm.gif?si=df31b90409cbd7237728ca1a770d72e6&amp;et=0&amp;nv=0&amp;st=4&amp;lt=1438362430&amp;su=http%3A%2F%2Flocalhost%2Fanthink%2Findex.php%2FAdmin%2FPublic%2Flogin.j8sp&amp;v=wap-0-0.2&amp;rnd=1087111368" width="0" height="0" />

        </div>
    </body>
</html>