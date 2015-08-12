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
            window._CUR_ = "/anthink/index.php/Admin/Menu/<?php echo (ACTION_NAME); ?>";
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
                        
                            <div class="panel panel-default" id="main-content-panel">
                                
                                    <div class="panel-heading title">
    <?php echo ($ptitle); ?>
    <span class='pull-right'>
        <?php if(auth('Admin/Menu/add')): ?><button data-load="<?php echo U('Admin/Menu/add');?>" class="btn btn-success btn-sm mr5">添加导航</button><?php endif; ?>
    </span>
</div>
                                    <div class="panel-body content">
                                        <div class='box-content'>
                                            
                                            
    <form onsubmit="return false;" data-ajax="true" data-progress="true" action="/anthink/index.php/Admin/Menu/index.j8sp?action=saveOrder" method="POST"><table id='table_55b8265db8840' class='table table-striped table-bordered table-hover table-center' cellpadding=0 cellspacing=0 ><thead><tr><th width="8"><button class="nowrap">排序</button></th><th style='text-algin:left'>菜单名称</th><th style='text-algin:center'>打开方式</th><th style='text-algin:center'>状态</th><th >操作</th></tr></thead><tbody><?php if(!empty($list)): if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr style='color:<?php echo (show_color($vo["status"])); ?>;'><td><input style='width:50px;text-align:center;border:1px solid #ccc' name='order_pk_<?php echo ($vo["id"]); ?>' value='<?php echo (intval($vo["sort"])); ?>' /></td><td style='text-align:left'><?php echo ($vo["title"]); ?></td><td style='text-align:center'><?php echo ($vo["target"]); ?></td><td style='text-align:center'><?php echo (show_status_text($vo["status"],$vo,'状态','')); ?></td><td class="tc nowrap"><?php echo (show_menu_button($vo["id"],$vo,'','null')); ?> </td></tr><?php endforeach; endif; else: echo "" ;endif; else: ?><tr><td style='text-align:center;padding:10px;' colspan='5'><?php echo ((isset($nodata) && ($nodata !== ""))?($nodata):'暂无数据'); ?></td></tr><?php endif; ?></tbody></table></form>

                                            
                                                <?php if(!empty($page)): ?><div class='pull-right mb20'><?php echo ($page); ?></div><?php endif; ?>
                                            
                                        </div>
                                    </div>
                                
                            </div>
                        
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
            
            <img alt="百度统计CODE" src="http://hm.baidu.com/hm.gif?si=df31b90409cbd7237728ca1a770d72e6&amp;et=0&amp;nv=0&amp;st=4&amp;lt=1438131802&amp;su=http%3A%2F%2Flocalhost%2Fanthink%2Findex.php%2FAdmin%2FIndex%2Findex.j8sp&amp;v=wap-0-0.2&amp;rnd=1192067990" width="0" height="0" />

        </div>
    </body>
</html>