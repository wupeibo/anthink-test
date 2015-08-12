<?php if (!defined('THINK_PATH')) exit();?><!-- 顶部菜单 -->
<nav class="navbar navbar-default default-heading navbar-static-top mb10" role="navigation">
    <div class="container-fluid">
        <div class="navbar-header new-header" style="min-width:205px">
            <?php if(!empty($sys_menu)): ?><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                    <span class="sr-only">导航菜单</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button><?php endif; ?>
            <a class="navbar-brand" target='_blank' href="/anthink/index.php">
                <i class='<?php echo ((isset($site["app_logo"]) && ($site["app_logo"] !== ""))?($site["app_logo"]):"fa fa-life-ring"); ?> color_8b f15'></i> <?php echo ($site["app_name"]); ?> 
                <sup style="padding:0px 2px; letter-spacing: 0; font-weight: lighter;" class='f8 label label-danger p2'><?php echo ($site["app_version"]); ?></sup>
            </a>
        </div>

        <div class="collapse navbar-collapse" id="navbar-collapse">
            <!-- 响应式小菜单开始 -->
            <ul class="nav navbar-nav visible-xs">
                <?php if(is_array($sys_menu)): $i = 0; $__LIST__ = $sys_menu;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$_vo): $mod = ($i % 2 );++$i;?><!--<?php if(!empty($_vo["sub"])): ?>一级菜单开始 -->
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <span class="glyphicon glyphicon-align-justify"></span> <?php echo ($_vo["title"]); ?> <span class="caret"></span>
                        </a>
                        <!-- 二级子菜单开始 <?php if(!empty($_vo["sub"])): ?>-->
                        <ul class="dropdown-menu" role="menu">
                            <?php if(is_array($_vo["sub"])): $i = 0; $__LIST__ = $_vo["sub"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$sub_vo): $mod = ($i % 2 );++$i; if(empty($sub_vo["sub"])): ?><li><a target="<?php echo ($sub_vo["target"]); ?>" href="<?php echo ($sub_vo["url"]); ?>"><?php echo ($sub_vo["title"]); ?></a></li>
                                    <?php else: ?>
                                    <!-- 三级子菜单开始 <?php if(is_array($sub_vo["sub"])): $i = 0; $__LIST__ = $sub_vo["sub"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$sub_vo_sub): $mod = ($i % 2 );++$i;?>-->
                                    <li><a target="<?php echo ($sub_vo_sub["target"]); ?>" href="<?php echo ($sub_vo_sub["url"]); ?>"><?php echo ($sub_vo_sub["title"]); ?></a></li>
                                    <!--<?php endforeach; endif; else: echo "" ;endif; ?> 三级子菜单结束 --><?php endif; endforeach; endif; else: echo "" ;endif; ?> 
                        </ul>
                        <!--<?php endif; ?> 二级菜单结束 -->
                    </li>
                    <!-- 一级菜单结束<?php endif; ?>--><?php endforeach; endif; else: echo "" ;endif; ?>
            </ul>
            <!-- 响应式主菜单开始-->
            <ul class="nav navbar-nav top-nav-list hidden-xs" role="tablist">
                <?php if(is_array($sys_menu)): $i = 0; $__LIST__ = $sys_menu;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$_vo): $mod = ($i % 2 );++$i; if(($_vo["pid"]) == "0"): ?><li class="<?php echo ($_vo["_class"]); ?>">
                        <a data-id="<?php echo ($_vo["id"]); ?>" href="<?php echo ((isset($_vo["url"]) && ($_vo["url"] !== ""))?($_vo["url"]):'#'); ?>">
                            <?php if(!empty($_vo["ico"])): ?><i class='<?php echo ((isset($_vo["ico"]) && ($_vo["ico"] !== ""))?($_vo["ico"]):"glyphicon glyphicon-align-justify"); ?>'></i><?php endif; ?>
                            <?php echo ($_vo["title"]); ?>
                        </a>
                    </li><?php endif; endforeach; endif; else: echo "" ;endif; ?> 
            </ul>
            <!-- 响应式主菜单结束 -->

            <?php if(is_login()): ?><div class="navbar-right">
                    <?php if(!empty($apilist)): ?><ul class="nav navbar-nav">
                            <li class="dropdown">
                                <!--<?php if((count($apilist)) > "1"): ?>-->
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <?php if(is_array($apilist)): $i = 0; $__LIST__ = $apilist;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$_vo): $mod = ($i % 2 );++$i; if(($_vo["id"]) == $_SESSION['api']['id']): ?><img alt="" style='width:20px;height:20px;' src='<?php echo to_domain($_vo["api_img"]);?>' /> <?php echo ($_vo["api_title"]); endif; endforeach; endif; else: echo "" ;endif; ?>
                                    <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li class="dropdown-header">应用切换</li>
                                    <?php if(is_array($apilist)): $i = 0; $__LIST__ = $apilist;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$_vo): $mod = ($i % 2 );++$i;?><li>
                                            <a onclick="$.form.switchApi('<?php echo ($_vo["id"]); ?>')" href="javascript:void(0)">
                                                <img alt="" style='width:20px;height:20px;' src='<?php echo to_domain($_vo["api_img"]);?>' /> <?php echo ($_vo["api_title"]); ?>
                                            </a>
                                        </li><?php endforeach; endif; else: echo "" ;endif; ?>

                                    <?php if(auth('admin/Wechat/index')): ?><li class="divider"></li>
                                        <li><a href="<?php echo U('admin/Wechat/index');?>"><i class="glyphicon glyphicon-cog"></i> 应用配置管理</a></li><?php endif; ?>
                                </ul>
                                <!--<?php else: ?>-->
                                <!--<?php if(is_array($apilist)): $i = 0; $__LIST__ = $apilist;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$_vo): $mod = ($i % 2 );++$i;?>-->
                                <!--<?php if(($_vo["id"]) == $_SESSION['api']['id']): ?>-->
                                <!--<?php if(auth('User/Wechat/index')): ?>-->
                                <a href="<?php echo U('User/Wechat/index');?>">
                                    <img alt="" style='width:20px;height:20px;' src='/anthink<?php echo ($_vo["api_img"]); ?>' /> <?php echo ($_vo["api_title"]); ?>
                                </a>
                                <!--<?php else: ?>-->
                                <a href="javascript:void(0)">
                                    <img alt="" style='width:20px;height:20px;' src='/anthink<?php echo ($_vo["api_img"]); ?>' /> <?php echo ($_vo["api_title"]); ?>
                                </a>
                                <!--<?php endif; ?>-->
                                <!--<?php endif; ?>-->
                                <!--<?php endforeach; endif; else: echo "" ;endif; ?>-->
                                <!--<?php endif; ?>-->
                            </li>
                        </ul><?php endif; ?>

                    <ul class="nav navbar-nav">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class='glyphicon glyphicon-user'></i> <?php echo ($_SESSION['user']['username']); ?> <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <?php if(auth('admin/user/edit')): ?><li>
                                        <a data-load="<?php echo U('admin/user/edit',array('id'=>session('user.id')));?>" href="javascript:void(0)">
                                            <i class="glyphicon glyphicon-info-sign"></i> 修改资料
                                        </a>
                                    </li>
                                    <?php else: ?>
                                    <li><a data-load="<?php echo U('admin/user/edit',array('id'=>session('user.id')));?>" href="javascript:void(0)"><i class="glyphicon glyphicon-align-justify"></i> 修改资料</a></li><?php endif; ?>
                                <li><a data-logout href="javascript:void(0)"><i class="glyphicon glyphicon-log-out"></i> 退出登录</a></li>
                            </ul>
                        </li>
                    </ul>
                </div><?php endif; ?>
        </div>
    </div>
</nav>