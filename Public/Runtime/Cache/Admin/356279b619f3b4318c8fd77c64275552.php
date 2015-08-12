<?php if (!defined('THINK_PATH')) exit();?><!-- 左侧菜单 -->
<div class="tab-content left-panel animated fadeIn hidden-xs">
    <?php if(is_array($sys_menu)): $i = 0; $__LIST__ = $sys_menu;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$_vo): $mod = ($i % 2 );++$i; if(in_array(($_vo["_class"]), explode(',',"active,parent active,active sub"))): ?><div class="tab-pane active">
            <div class="list-group">
                <a class='list-group-item tc default-heading'><strong><?php echo ($_vo["title"]); ?></strong></a>
                <div class='left-panel-item'>
                    <?php if(is_array($_vo["sub"])): $i = 0; $__LIST__ = $_vo["sub"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$sub_vo): $mod = ($i % 2 );++$i;?><a class="list-group-item br0 <?php echo ($sub_vo["_class"]); ?>" target="<?php echo ($sub_vo["target"]); ?>" href="<?php echo ($sub_vo["url"]); ?>">
                            <span class="<?php echo ((isset($sub_vo["ico"]) && ($sub_vo["ico"] !== ""))?($sub_vo["ico"]):'glyphicon glyphicon-align-justify'); ?>"></span> <?php echo ($sub_vo["title"]); ?> <i class="pull-right glyphicon <?php if(in_array(($sub_vo["_class"]), explode(',',"parent,parent active"))): ?>glyphicon-chevron-right<?php endif; ?> <?php if(in_array(($sub_vo["_class"]), explode(',',"parent active"))): ?>glyphicon-chevron-down<?php endif; ?>"></i></a>
                        <?php if(!empty($sub_vo["sub"])): ?><div class="list-group sub-list-group <?php if(!in_array(($sub_vo["_class"]), explode(',',"parent active,active"))): ?>hide<?php endif; ?>">
                                <?php if(is_array($sub_vo["sub"])): $i = 0; $__LIST__ = $sub_vo["sub"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$sub_vo_sub): $mod = ($i % 2 );++$i;?><a target="<?php echo ($sub_vo_sub["target"]); ?>" href="<?php echo ($sub_vo_sub["url"]); ?>" class="list-group-item list-callout br0 <?php echo ($sub_vo_sub["_class"]); ?>">
                                        <span class="<?php echo ((isset($sub_vo_sub["ico"]) && ($sub_vo_sub["ico"] !== ""))?($sub_vo_sub["ico"]):'glyphicon glyphicon-indent-left'); ?>" ></span><span class=' dib pl5 pr5'></span> <?php echo ($sub_vo_sub["title"]); ?>
                                    </a><?php endforeach; endif; else: echo "" ;endif; ?>
                            </div><?php endif; endforeach; endif; else: echo "" ;endif; ?>
                </div>
            </div>
        </div><?php endif; endforeach; endif; else: echo "" ;endif; ?>
</div>