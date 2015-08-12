<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="utf-8">
        <title><?php echo ($ptitle); ?> <?php if(!empty($site["title"])): ?>- <?php echo ($site["title"]); endif; ?></title>
        <meta name="viewport" content="width=device-width,height=device-height,maximum-scale=1.0,user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no">
        <!--<link href="http://localhost/anthink/Public/Plugins/icheck/skins/flat/grey.css" rel="stylesheet" type="text/css"/>-->
        <link href="http://localhost/anthink/Public/Plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="http://localhost/anthink/Public/Resource/wap/css/common.css" rel="stylesheet">
        <link href="http://localhost/anthink/Public/Resource/wap/css/style.css" rel="stylesheet">
        <!--[if lt IE 9]>
          <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    
    <style>
        .text-title{
            color: #EEE;
            font-weight: 600;
            /*text-shadow: 0px 1px 1px rgba(0,0,0,.15)!important;*/
        }
    </style>

</head>
<body>

    <div class="height-180 padding-top-12 text-center personal-banner">
        <img class="center-block img-circle width-120 height-120" src="<?php echo ($member["headimgurl"]); ?>" alt=""/>
        <p class="padding-top-16"><span class="text-title"><?php echo ($member["nickname"]); ?></span></p>
    </div>
    <div class="container padding-top-12">
        <p>○ 此操作将使用本账号登录 PC 平台；</p>
        <p>○ 如非本人操作请勿点击登录，请妥善保管自己的账号。</p>
        <div class="padding-30 text-center">
            <button class="btn btn-success btn-block" onclick="login()" <?php if(empty($uuid)): ?>disabled<?php endif; ?>>授权登录</button>
            <p class="text-center"><?php if(empty($uuid)): ?>参数错误无法登录<?php endif; ?></p>
        </div>
    </div>

<div class="hidden">
    <script src="http://localhost/anthink/Public/Plugins/json/json2.js" type="text/javascript"></script>
    <script src="http://localhost/anthink/Public/Plugins/jquery/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="http://localhost/anthink/Public/Plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="http://localhost/anthink/Public/Plugins/jquery/jquery.validate.js" type="text/javascript"></script>
    <script src="http://localhost/anthink/Public/Plugins/layui/layer.m/layer.m.js" type="text/javascript"></script>
    <script src="http://localhost/anthink/Public/Resource/js/common.js" type="text/javascript"></script>
    <script src="http://localhost/anthink/Public/Plugins/icheck/icheck.min.js" type="text/javascript"></script>
    <script>
        $(function () {
            $('body').bind('input.check.init', function () {
                $('input').iCheck({
                    checkboxClass: 'icheckbox_flat-grey',
                    radioClass: 'icheckbox_flat-grey',
                    increaseArea: '20%'
                });
            }).trigger('input.check.init');
        });
    </script>
    
    <script>
        //模拟扫码登录
        function login() {
            var uuid = "<?php echo ($uuid); ?>";
            $.ajax({
                type: "POST",
                url: "<?php echo U('Wap/Login/login');?>",
                data: {
                    "uuid": uuid,
                    "timed": new Date().getTime()
                },
                dataType: "json",
                success: function (data, textStatus) {
                    $.msg.auto(data);
                    setTimeout(function () {
                        window.opener = null;//为了不出现提示框 
                        window.close();//关闭窗口
                    }, 2000);
                }
            });
        }
    </script>

    <?php if(!empty($baidu_tongji_src)): ?><img style='width: 1px;height:1px;overflow:hidden' src='<?php echo ($baidu_tongji_src); ?>' alt /><?php endif; ?>
</div>
</body>
</html>