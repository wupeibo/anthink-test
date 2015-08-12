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
            window._CUR_ = "/anthink/index.php/Site/Config/<?php echo (ACTION_NAME); ?>";
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
            
                <div class="row">
                    <?php echo W('Admin/Menu/leftMenu');?>
                    <!-- 页面内容 -->
                    <div class='right-panel animated fadeIn'>
                        
    <form onsubmit="return false" action="/anthink/index.php/Site/Config/index.j8sp" data-ajax="true" method="post"  class="form-horizontal mb40" role="form">
        <div class="panel panel-default mb10">
            <div class="panel-heading title">
                <?php echo ($ptitle); ?>
            </div>

            <div class="form-group mt20 pl10 pr10">
                <label class="col-sm-2 control-label tr">网站标题 <b class="required">*</b></label>
                <div class="col-sm-9">
                    <input autofocus required="" value="<?php echo ($vo["title"]); ?>" pattern="^.{2,}$" title="官网名称至少2个字符！" type="text"   name="title" class="form-control" placeholder="输入官网名称">
                </div>
            </div>

            <div class="form-group pl10 pr10">
                <label class="col-sm-2 control-label">微信网页授权</label>
                <div class="col-sm-9">
                    <div class='form-control'>
                        <label><input <?php if(($vo["is_wechat_auth"]) == "2"): ?>checked<?php endif; ?> type="radio" name="is_wechat_auth" value="2" /> 开启</label>
                        <label><input <?php if(($vo["is_wechat_auth"]) != "2"): ?>checked<?php endif; ?> type="radio" name="is_wechat_auth" value="1" /> 关闭</label>
                    </div>
                    <p class='help-block'>开启后全站必需在微信中访问，并自动进行微信网面授权，识别用户身份。</p>
                </div>
            </div>

            <div class="form-group pl10 pr10">
                <label class="col-sm-2 control-label">页面分享积分</label>
                <div class="col-sm-9">
                    <div class='form-control'>
                        <label><input <?php if(($vo["page_share_integral"]) == "2"): ?>checked<?php endif; ?> type="radio" name="page_share_integral" value="2" /> 开启</label>
                        <label><input <?php if(($vo["page_share_integral"]) != "2"): ?>checked<?php endif; ?> type="radio" name="page_share_integral" value="1" /> 关闭</label>
                    </div>
                    <p class='help-block'>具体积分数请到具体页面编辑填写，此功能需要进行微信网页授权。</p>
                </div>
            </div>
            
            <div class="form-group mt20 pl10 pr10">
                <label class="col-sm-2 control-label tr">页面每天分享次数 <b class="required">*</b></label>
                <div class="col-sm-9">
                    <input autofocus required="" value="<?php echo ($vo["page_share_num"]); ?>" pattern="number" title="请输入数字" type="text"   name="page_share_num" class="form-control" placeholder="输入次数">
                </div>
            </div>

            <div class="form-group pl10 pr10">
                <label class="col-sm-2 control-label">内容分享积分</label>
                <div class="col-sm-9">
                    <div class='form-control'>
                        <label><input <?php if(($vo["content_share_integral"]) == "2"): ?>checked<?php endif; ?> type="radio" name="content_share_integral" value="2" /> 开启</label>
                        <label><input <?php if(($vo["content_share_integral"]) != "2"): ?>checked<?php endif; ?> type="radio" name="content_share_integral" value="1" /> 关闭</label>
                    </div>
                    <p class='help-block'>具体积分数请到内容编辑填写，此功能需要进行微信网页授权。</p>
                </div>
            </div>
            
            <div class="form-group mt20 pl10 pr10">
                <label class="col-sm-2 control-label tr">内容每天分享次数 <b class="required">*</b></label>
                <div class="col-sm-9">
                    <input autofocus required="" value="<?php echo ($vo["content_share_num"]); ?>" pattern="number" title="请输入数字" type="text"   name="content_share_num" class="form-control" placeholder="输入次数">
                </div>
            </div>

            <div class="form-group pl10 pr10">
                <label class="col-sm-2 control-label">百度统计Key</label>
                <div class="col-sm-9">
                    <input class='form-control' name='baidu_tongji_key' value='<?php echo ($vo["baidu_tongji_key"]); ?>' />
                    <p class='help-block'>使用百度统计记录页面访问情况，了解详情<a href='http://tongji.baidu.com' target="_blank">点击这里</a>。</p>
                </div>
            </div>

            <div class="form-group pl10 pr10">
                <label class="col-sm-2 control-label">网站运行开关</label>
                <div class="col-sm-9">
                    <div class='form-control'>
                        <label><input <?php if(($vo["is_disable"]) != "1"): ?>checked<?php endif; ?> type="radio" name="is_disable" value="2" /> 开启</label>
                        <label><input <?php if(($vo["is_disable"]) == "1"): ?>checked<?php endif; ?> type="radio" name="is_disable" value="1" /> 关闭</label>
                    </div>
                    <p class='help-block red'>网站开放总开关设置，请谨慎操作此项配置。</p>
                </div>
            </div>

            <div class="form-group pl10 pr10">
                <label class="col-sm-2 control-label">网站关闭提示</label>
                <div class="col-sm-9">
                    <textarea class='form-control' name='disabled_msg'><?php echo ($vo["disabled_msg"]); ?></textarea>
                </div>
            </div>

            <input type="hidden" value="1" name="id"/>

            <?php if(auth('site/config/edit')): ?><div class="tc p20">
                    <button class="btn btn-success btn-sm"> 保 存 </button>
                </div><?php endif; ?>
        </div>
    </form>

                    </div>
                </div>
            
            
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
            
            <img alt="百度统计CODE" src="http://hm.baidu.com/hm.gif?si=df31b90409cbd7237728ca1a770d72e6&amp;et=0&amp;nv=0&amp;st=4&amp;lt=1438362435&amp;su=http%3A%2F%2Flocalhost%2Fanthink%2Findex.php%2FAdmin%2FIndex%2Findex.j8sp&amp;v=wap-0-0.2&amp;rnd=1389391945" width="0" height="0" />

        </div>
    </body>
</html>