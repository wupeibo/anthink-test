/**
 * Anthink 弹出层及对话框
 * @returns {undefined}
 */
(function ($) {
    var RES = "/anthink-test/Public/Resource";
    var _anbox = function () {
        this.version = '1.0';
        this.author = 'wupeibo';
        this.m = "mask";
        this._data = {};
        this._eventHandler();
    };

    /**
     * 对象标签规则进行监听
     * @returns {undefined}
     */
    _anbox.prototype._eventHandler = function () {
        var self = this;
        var data = {type: 'block'};
        $('[data-anbox]').on('click', function () {
            data.type = $(this).attr('data-type');   //login,register,alert,confirm,prompt,runbar,image,diy
            data.title = $(this).attr('data-title');
            data.mask = $(this).attr('data-mask');
            data.iamge = $(this).attr('data-iamge');
            data.text = $(this).attr('data-text');
            data.url = $(this).attr('data-url');
            self._init(data);
        });
    };
//居中弹出框

    _anbox.prototype._clean = function (id) {
        var dom = document.getElementById(id);
        dom && document.body.removeChild(dom);
    };

    /**
     * 初始化弹出层
     * @param {type} data
     * @returns {undefined}
     */
    _anbox.prototype._init = function (data) {
        var self = this;
        if (typeof data === 'object') {
            //清理弹出层
            self._clean(data.type);
            self._clean(self.m);
            // mask图层遮罩
            if (data.mask !== "false") {
                self._mask();
            }
            // 新激活图层 
            var frame = document.createElement("div");
            frame.id = data.type;
            frame.style.position = "absolute";
            frame.style.zIndex = "9999";
            frame.style.minWidth = "400px";
            frame.style.minHeight = "320px";
            frame.style.top = "300px";
            frame.style.left = (parseInt(document.body.scrollWidth) - 400) / 2 + "px"; // 屏幕居中 
            frame.style.background = "#FFFFFF";
            frame.style.padding = "5px";
            $(frame).css("box-shadow", "3px 3px 12px #74787c");
            document.body.appendChild(frame);
            // 关闭mask和新图层 
            frame.appendChild(self.alert(data));
            $(frame).hide();
            self.show(frame);
        }
    };

    _anbox.prototype.alert = function (data, time, mask, url) {
        var self = this;
        var timer;
        var frame = document.createElement("div");
        if (typeof data === 'object') {
            frame.id = "alert";
            frame.style.minWidth = "300px";
            frame.style.minHeight = "46px";
            frame.style.background = "#FFFFFF";
            frame.style.padding = "5px";
            frame.style.float = "right";
            frame.innerHTML = "<span style='font-size:16px;color:#333333;padding-top:8px;padding-left:8px;float:left;'>" + data.title + "</span>";    //标题
            document.body.appendChild(frame);
            // 关闭mask和新图层 
            var close = document.createElement("a");
            close.href = "#";
            close.innerHTML = "<img src='" + RES + "/images/tclose.png' width='36'/>";
            close.style.float = "right";
            close.onclick = function () {
                self.show(frame, true);
                setTimeout(function () {
                    self._clean(data.type);
                }, 400);
                data.mask === "true" && self._mask(true);
                return false;
            }
            frame.appendChild(close);
            return frame;
        } else {
            frame.id = "alert";
            frame.style.position = "absolute";
            frame.style.zIndex = "9999";
            frame.style.minWidth = "200px";
            frame.style.minHeight = "46px";
            frame.style.top = "400px";
            frame.style.left = (parseInt(document.body.scrollWidth) - 300) / 2 + "px"; // 屏幕居中 
            frame.style.background = "#FFFFFF";
            frame.style.padding = "5px";
            frame.innerHTML = "<span style='font-size:16px;color:#333333;padding-top:8px;padding-left:8px;float:left;'>" + data + "</span>";    //标题
            $(frame).css("box-shadow", "3px 3px 12px #74787c");
            document.body.appendChild(frame);
            // 关闭mask和新图层 
            var close = document.createElement("a");
            close.href = "#";
            close.innerHTML = "<img src='" + RES + "/images/tclose.png' width='36'/>";
            close.style.float = "right";
            close.onclick = function () {
                self.show(frame, true);
                mask === true && self._mask(true);
                clearTimeout(timer);
                return false;
            }
            frame.appendChild(close);
            $(frame).hide();
        }
        mask === true && self._mask();

        if (time > 0) {
            timer = setTimeout(function () {
                self.show(frame, true);
                mask === true && self._mask(true);
                if (url && url.length > 3) {
                    window.location.href = url;
                }
            }, parseInt(time + "000"));
        }
        self.show(frame);
    }
    /**
     * 遮罩层
     * @returns {undefined}
     */
    _anbox.prototype._mask = function (close) {
        var self = this;
        if (close === true) {
            var mask = document.getElementById(self.m);
            self.display(mask, true);
            setTimeout(function () {
                self._clean(self.m);
            }, 300);
        } else {
            var mask = document.createElement("div");
            mask.id = self.m;
            mask.style.position = "absolute";
            mask.style.zIndex = "1";
            mask.style.width = "100%";
            mask.style.height = "100%";
            mask.style.top = "0px";
            mask.style.left = "0px";
            mask.style.background = "#000";
            mask.style.filter = "alpha(opacity=40)";
            mask.style.opacity = "0";
            document.body.appendChild(mask);
            self.display(mask);
        }
        return true;
    }

    /**
     *  显示弹出层
     * @param {type} data
     * @param {type} success
     * @returns {undefined}
     */
    _anbox.prototype.show = function (frame, close) {
        var self = this;
        if (typeof frame === 'object') {
            if (close === true) {
                $(frame).slideUp(300);
            } else {
                $(frame).slideDown(300);
            }
        }
    };
    /**
     *  显示弹出层
     * @param {type} data
     * @param {type} success
     * @returns {undefined}
     */
    _anbox.prototype.display = function (frame, close) {
        var self = this;
        if (typeof frame === 'object') {
            var timer;
            if (close === true) {
                timer = setInterval(function () {
                    var fo = parseFloat(frame.style.opacity);
                    if (fo > 0) {
                        frame.style.opacity = fo - 0.1 + "";
                    }
                }, 100);
            } else {
                timer = setInterval(function () {
                    var fo = parseFloat(frame.style.opacity);
                    if (fo < 0.3) {
                        frame.style.opacity = fo + 0.05 + "";
                    }
                }, 50);
            }
            setTimeout(function () {
                clearInterval(timer);
            }, 300);
        }
    };
    $.extend({anbox: new _anbox()});
})(jQuery);