<?php if (!defined('THINK_PATH')) exit();?><div class="modal fade" data-keyboard='false' data-backdrop='static' tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            
                <form onsubmit="return false" action="<?php echo url_filter();?>" data-ajax="true" method="post">
                    <div class="modal-header title">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title" id="myModalLabel"><?php echo ($ptitle); ?></h4>
                    </div>
                    <div class="modal-body">
                        <div class="panel-body form-horizontal">
                            

    <div class="form-group">
        <label for="menu_title" class="col-sm-2 control-label tr">上级菜单 <b class="required">*</b></label>
        <div class="col-sm-9">
            <select name="pid" class="form-control">
                <!--<?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$m): $mod = ($i % 2 );++$i;?>-->
                <option <?php if(($vo["pid"]) == $m["id"]): ?>selected<?php endif; ?> value="<?php echo ($m["id"]); ?>"><?php echo ($m["spl"]); echo ($m["title"]); ?></option>
                <!--<?php endforeach; endif; else: echo "" ;endif; ?>-->
            </select>        
        </div>
    </div>

    <div class="form-group">
        <label for="menu_title" class="col-sm-2 control-label tr">菜单名称 <b class="required">*</b></label>
        <div class="col-sm-9">
            <input autofocus required="" value="<?php echo ($vo["title"]); ?>" pattern="^.{2,}$" title="菜单至少2个字符！" type="text" name="title" class="form-control" id="menu_title" placeholder="输入菜单名称">
        </div>
    </div>

    <div class="form-group">
        <label for="menu_code" class="col-sm-2 control-label">节点代码</label>
        <div class="col-sm-9" id='menu_code_select'>
            <input class='form-control' readonly="readonly" id='menu_code' name='code' value='<?php echo ($vo["code"]); ?>' />
            <p class="help-block">用于RBAC权限控制，可以通过下面的选择器设置</p>
            <div style="white-space:nowrap">选择器：</div>
        </div>
    </div>

    <div class="form-group">
        <label for="menu_url" class="col-sm-2 control-label">链接地址 <b class="required">*</b></label>
        <div class="col-sm-9">
            <input type="text" value="<?php echo ((isset($vo["url"]) && ($vo["url"] !== ""))?($vo["url"]):'#'); ?>" required="" name="url" class="form-control" id="menu_url" placeholder="请输入链接地址">
            <p class="help-block">
                <a href='javascript:void(0)' onclick='$(this).parent("p").prev("input").val($("#menu_code").val() || "#")'>复制节点代码</a>
                可以填写完整URL地址或系统U函数的参数值
            </p>
        </div>
    </div>

    <div class="form-group">
        <label for="menu_url" class="col-sm-2 control-label">链接参数</label>
        <div class="col-sm-9">
            <input type="text" value="<?php echo ($vo["request"]); ?>" name="request" class="form-control" id="menu_url" placeholder="请输入链接参数">
            <p class="help-block">链接后所带的参数，格式如：a=1&b=2&c=3</p>
        </div>
    </div>

    <div class="form-group">
        <label for="menu_ico" class="col-sm-2 control-label">图标样式</label>
        <div class="col-sm-9">
            <input type="text" value="<?php echo ($vo["ico"]); ?>" name="ico" class="form-control" id="menu_ico">
        </div>
    </div>

    <div class="form-group">
        <label for="menu_sort" class="col-sm-2 control-label">排序 <b class="required">*</b></label>
        <div class="col-sm-9">
            <input type="text" value="<?php echo ((isset($vo["sort"]) && ($vo["sort"] !== ""))?($vo["sort"]):0); ?>" required="" name="sort" class="form-control" id="menu_sort" placeholder="请输入链接地址">
        </div>
    </div>

    <div class="form-group">
        <label for="menu_url" class="col-sm-2 control-label">打开方式</label>
        <div class="col-sm-9">
            <select name="target" class="form-control">
                <!--<?php if(is_array($target)): $i = 0; $__LIST__ = $target;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$t): $mod = ($i % 2 );++$i;?>-->
                <!--<?php if(($key) == $vo['target']): ?>-->
                <option selected="selected" value="<?php echo ($key); ?>"><?php echo ($t); ?></option>
                <!--<?php else: ?>-->
                <option  value="<?php echo ($key); ?>"><?php echo ($t); ?></option>
                <!--<?php endif; ?>-->
                <!--<?php endforeach; endif; else: echo "" ;endif; ?>-->
            </select>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">菜单状态</label>
        <div class="col-sm-9">
            <div class='form-control'>
                <label><input <?php if(($vo["status"]) != "1"): ?>checked<?php endif; ?> type="radio" name="status" value="2" /> 启用</label>
                <label><input <?php if(($vo["status"]) == "1"): ?>checked<?php endif; ?> type="radio" name="status" value="1" /> 禁用</label>
            </div>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">菜单描述</label>
        <div class="col-sm-9">
            <textarea class='form-control' name='desc'><?php echo ($vo["desc"]); ?></textarea>
        </div>
    </div>

    <?php if(!empty($vo)): ?><input type="hidden" value="<?php echo ((isset($vo["id"]) && ($vo["id"] !== ""))?($vo["id"]):0); ?>" name="id"/><?php endif; ?>


                        </div>
                    </div>
                    <div class="modal-footer">
                        <a class='btn btn-warning btn-sm mr20' onclick="confirm('确认要取消吗？') && $.form.close();" href='javascript:void(0);'>取消</a>
                        <button class="btn btn-success btn-sm mr10">保存</button>
                    </div>
                </form>
            
        </div>
    </div>
    
    <script>
        $(function () {
            function createSelect(data, selectValue, type) {
                var sm = document.createElement('select');
                var om = document.createElement('option');
                om.value = '';
                om.innerHTML = '请选择节点';
                sm.appendChild(om);
                for (var i in data) {
                    var om = document.createElement('option');
                    var value = i;
                    var title = i;
                    var tmp = data[i];
                    if (typeof (data[i]) === 'string') {
                        value = data[i];
                    }
                    switch (type) {
                        case 'm':
                            for (var _a in data[i]) {
                                for (var _b in data[i][_a]) {
                                    if (data[i][_a][_b]['gtitle']) {
                                        title = data[i][_a][_b]['gtitle'];
                                        break;
                                    }
                                }
                            }
                            break;
                        case 'c':
                            for (var _a in data[i]) {
                                if (data[i][_a]['ptitle']) {
                                    title = data[i][_a]['ptitle'];
                                    break;
                                }
                            }
                            break;
                        case 'a':
                            if (data[i]['title']) {
                                title = data[i]['title'];
                            }
                    }

                    if (selectValue === value) {
                        om.selected = 'selected';
                    }
                    om.value = value;
                    om.innerHTML = title;
                    sm.appendChild(om);
                }
                return sm;
            }

            $.get('/anthink/index.php/Admin/Menu/add/id/29.j8sp', {action: 'getNodeTree'}, function (data) {
                var d = $('#menu_code').val().split('/');
                var m = createSelect(data, d[0] || false, 'm');
                $('#menu_code_select div').append($(m));
                $(m).on('change', function () {
                    var mdata = $(this).val();
                    $('#menu_code').val(mdata);
                    $(this).nextAll('select').remove();
                    if (!mdata) {
                        return;
                    }
                    var c = createSelect(data[mdata], d[1] || false, 'c');
                    $(this).after($(c));
                    $(c).on('change', function () {
                        $(this).next('select').remove();
                        var cdata = $(this).val();
                        $('#menu_code').val(mdata + '/' + cdata);
                        if (!cdata) {
                            $('#menu_code').val(mdata);
                            return;
                        }
                        var a = createSelect(data[mdata][cdata], d[2] || false, 'a');
                        $(this).after($(a));
                        $(a).on('change', function () {
                            var adata = $(this).val();
                            $('#menu_code').val(mdata + '/' + cdata + '/' + adata);
                            if (!adata) {
                                $('#menu_code').val(mdata + '/' + cdata);
                            }
                        }).trigger('change');
                    }).trigger('change');
                }).trigger('change');
            });
        });
    </script>

</div>