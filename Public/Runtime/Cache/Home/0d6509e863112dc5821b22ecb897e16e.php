<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title><?php echo ($ptitle); ?> <?php if(!empty($site["title"])): ?>- <?php echo ($site["title"]); endif; ?></title>
        <meta name="viewport" content="width=device-width,height=device-height,maximum-scale=1.0,user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no">
        <link href="http://localhost/anthink-test/Public/Plugins/icheck/skins/flat/grey.css" rel="stylesheet" type="text/css"/>
        <link href="http://localhost/anthink-test/Public/Plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="http://localhost/anthink-test/Public/Resource/wap/css/common.css" rel="stylesheet">
        <link href="http://localhost/anthink-test/Public/Resource/wap/css/style.css" rel="stylesheet">
        <link rel="shortcut icon" href="<?php echo ((isset($site["site_icon"]) && ($site["site_icon"] !== ""))?($site["site_icon"]):'http://localhost/anthink-test/Public/Resource/favicon.ico'); ?>" />
        <!--[if lt IE 9]>
          <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
        <script src="http://localhost/anthink-test/Public/Resource/js/newdiv.js" type="text/javascript"></script>
        <!--魔法效果-->
        <link href="http://localhost/anthink-test/Public/Plugins/magic-effect/css/normalize.css" rel="stylesheet">
        <link href="http://localhost/anthink-test/Public/Plugins/magic-effect/css/style.css" rel="stylesheet">
    
</head>
<body class='bg-ea'>
    <nav id="nav" class="navbar navbar-inverse" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                <a href="<?php echo U('Home/Index/index');?>"><button class="sparkley last">暗星 AnThink</button></a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <?php if(empty($info)): ?><li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">快速登录 <span class="caret"></span></a>
                            <ul class="dropdown-menu text-center" role="menu">
                                <li class="text-center">
                                    先关注我<b style="color: red;">❤</b><br/>
                                    <img width="100" src="http://anthink-atuser.stor.sinaapp.com/qrcode.png"/>
                                </li>
                                <li class="divider"></li>
                                <li><a href="#" id="qrlogin" onclick="getqrcode()" >微信扫码登录</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">登录/注册 <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#" onclick="loginDiv('login', '登录')">登录</a></li>
                                <li class="divider"></li>
                                <li><a href="#" onclick="registerDiv('register', '注册')">注册</a></li>
                            </ul>
                        </li>
                        <?php else: ?>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><?php echo ($info["nickname"]); ?><span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#" onclick="loginout()">退出登录</a></li>
                            </ul>
                        </li><?php endif; ?>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>


<div class="hidden">
    <script src="http://localhost/anthink-test/Public/Plugins/json/json2.js" type="text/javascript"></script>
    <script src="http://localhost/anthink-test/Public/Plugins/jquery/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="http://localhost/anthink-test/Public/Plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="http://localhost/anthink-test/Public/Plugins/jquery/jquery.validate.js" type="text/javascript"></script>
    <script src="http://localhost/anthink-test/Public/Plugins/layui/layer.m/layer.m.js" type="text/javascript"></script>
    <script src="http://localhost/anthink-test/Public/Resource/js/common.js" type="text/javascript"></script>
    <script src="http://localhost/anthink-test/Public/Plugins/icheck/icheck.min.js" type="text/javascript"></script>
    <!--魔法效果-->
    <script src="http://localhost/anthink-test/Public/Plugins/magic-effect/js/prefixfree.min.js"></script>
    <script src="http://localhost/anthink-test/Public/Plugins/magic-effect/js/modernizr.js"></script>
    <script src='http://localhost/anthink-test/Public/Plugins/magic-effect/js/rbeix.js'></script>
    <script src="http://localhost/anthink-test/Public/Plugins/magic-effect/js/index.js"></script>
    
    <?php if(!empty($baidu_tongji_src)): ?><img style='width: 1px;height:1px;overflow:hidden' src='<?php echo ($baidu_tongji_src); ?>' alt /><?php endif; ?>
    <script type="text/javascript">
        $(function () {
            $('body').bind('input.check.init', function () {
                $('input').iCheck({
                    checkboxClass: 'icheckbox_flat-grey',
                    radioClass: 'icheckbox_flat-grey',
                    increaseArea: '20%'
                });
            }).trigger('input.check.init');
        });
        //获取二维码    
        function getqrcode() {
            $.ajax({
                type: "POST",
                url: "<?php echo U('Home/Index/qrCode');?>",
                data: {
                    "timed": new Date().getTime()
                },
                dataType: "json",
                success: function (data, textStatus) {
//                    console.log(data.src + "请求成功");
                    qrcodeDiv('newDiv', '扫描二维码登录', data.src, "UUID:" + data.uuid19);
                    getLogin(data.uuid19);
                }
            });
        }
        //检测扫描状态，查找相同uuid
        var timeout = 0;
        function getLogin(uuid) {
            if (timeout < 12) {
                $.ajax({
                    type: "POST",
                    url: "<?php echo U('Home/Index/getLogin');?>",
                    data: {
                        "uuid": uuid,
                        "timed": new Date().getTime()
                    },
                    dataType: "json",
                    timeout: 5000,
                    success: function (data, textStatus) { // 请求成功
                        if (data.status == 1) {
                            console.log(data.user + "请求成功");
                            $.msg.success("用户：" + data.user.nickname + " 登录成功", false, 2, 'info');
                            setTimeout(function () {
                                location.reload(true);
                            }, 2000);
                        } else {
                            console.log(data.user + "请求失败");
                            getLogin(uuid);
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        if (textStatus == "timeout") { // 请求超时
                            getLogin(uuid); // 递归调用
                        } else {    // 其他错误，如网络错误等
                            $.msg.error('网络错误！', false, 2, 'info');
                        }
                    }
                });
                timeout++;
            } else {
                $.msg.error('二维码已过期，请重新打开！', false, 2, 'info');
                setTimeout(function () {
                    location.reload(true);
                }, 2000);
            }
        }
        function loginout() {
            $.post("<?php echo U('Home/Index/loginout');?>", {}, function (data) {
                $.msg.auto(data);
                setTimeout(function () {
                    location.reload(true);
                }, 2000);
            }, 'JSON');
        }
    </script>
</div>
</body>
</html>