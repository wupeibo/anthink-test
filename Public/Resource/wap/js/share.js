/**
 * 微信分享组件
 * @returns {undefined}
 */
(function ($) {
    var _share = function () {
        this.version = '2.0';
        this.author = 'zoujingli';
        this._data = {};
        this._RES_ = window._RES_ || function () {
            var a = document.scripts, b = a[a.length - 1].src;
            return  b.substring(0, b.lastIndexOf("/") - 6);
        }();
        this._eventHandler();
    };

    /**
     * 对象标签规则进行监听
     * @returns {undefined}
     */
    _share.prototype._eventHandler = function () {
        var self = this;
        var share = {type: 'link'};
        $('[data-share]').on('click', function () {
            share.title = $(this).attr('data-title');
            share.desc = $(this).attr('data-desc');
            share.link = $(this).attr('data-link');
            share.imgUrl = $(this).attr('data-imgUrl') || $(this).attr('data-img');
            share.title = $(this).attr('data-title');
            self.show(share);
        });
        if (typeof wx === 'undefined') {
            return alert('微信分享组件加载失败');
        }
        wx.ready(function () {
            wx.hideAllNonBaseMenuItem();
            wx.showMenuItems({
                menuList: [
                    'menuItem:share:appMessage',
                    'menuItem:share:timeline',
                    'menuItem:favorite',
                    'menuItem:copyUrl',
                    'menuItem:profile',
                    'menuItem:addContact'
                ]
            });
        });
    };

    /**
     * 设置分享数据
     * @param {type} data
     * @returns {unresolved}
     */
    _share.prototype.data = function (data) {
        this._data = data;
        if (typeof data.success !== 'function') {
            data.success = function () {
                layer.closeAll();
            };
        }
        var self = this;
        wx.ready(function () {
            wx.onMenuShareTimeline(self._data);
            wx.onMenuShareAppMessage(self._data);
        });
    };

    /**
     * 显示分享弹出层
     * @param {type} data
     * @param {type} success
     * @returns {undefined}
     */
    _share.prototype.show = function (data, success) {
        if (typeof data === 'object') {
            if (typeof success === 'function') {
                data.success = success;
            }
            this.data(data);
        }
        var index = layer.open({
            type: 1, content: '',
            style: 'width:100%; height:110%;background:rgba(0,0,0,.8) url(' + this._RES_ + '/img/share.png) top right no-repeat no-repeat;border:none;',
            success: function (ele) {
                $(ele).on('click', function () {
                    layer.close(index);
                });
                wx.showOptionMenu();
            },
            end: function () {
                wx.hideOptionMenu();
            }
        });
    };

    $.extend({share: new _share()});

})(jQuery);
