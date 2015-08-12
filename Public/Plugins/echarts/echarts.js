// (c) 2010-2013 Thomas Fuchs

// Zepto.js may be freely distributed under the MIT license.

// Copyright 2006 Google Inc.

//   http://www.apache.org/licenses/LICENSE-2.0

/*!
 * ZRender, a lightweight canvas library with a MVC architecture, data-driven 
 * and provides an event model like DOM.
 *  
 * Copyright (c) 2013, Baidu Inc.
 * All rights reserved.
 * 
 * LICENSE
 * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
 */

/*!
 * ECharts, a javascript interactive chart library.
 *  
 * Copyright (c) 2013, Baidu Inc.
 * All rights reserved.
 * 
 * LICENSE
 * https://github.com/ecomfe/echarts/blob/master/LICENSE.txt
 */

define("zrender/tool/env", [], function() {
    function e(e) {
        var t = this.os = {}, n = this.browser = {}, r = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/), i = e.match(/(Android);?[\s\/]+([\d.]+)?/), s = e.match(/(iPad).*OS\s([\d_]+)/), o = e.match(/(iPod)(.*OS\s([\d_]+))?/), u = !s && e.match(/(iPhone\sOS)\s([\d_]+)/), a = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/), f = a && e.match(/TouchPad/), l = e.match(/Kindle\/([\d.]+)/), c = e.match(/Silk\/([\d._]+)/), h = e.match(/(BlackBerry).*Version\/([\d.]+)/), p = e.match(/(BB10).*Version\/([\d.]+)/), d = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/), v = e.match(/PlayBook/), m = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/), g = e.match(/Firefox\/([\d.]+)/), y = e.match(/MSIE ([\d.]+)/), b = r && e.match(/Mobile\//) && !m, w = e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && !m, y = e.match(/MSIE\s([\d.]+)/);
        if (n.webkit = !!r)
            n.version = r[1];
        return i && (t.android = !0, t.version = i[2]), u && !o && (t.ios = t.iphone = !0, t.version = u[2].replace(/_/g, ".")), s && (t.ios = t.ipad = !0, t.version = s[2].replace(/_/g, ".")), o && (t.ios = t.ipod = !0, t.version = o[3] ? o[3].replace(/_/g, ".") : null), a && (t.webos = !0, t.version = a[2]), f && (t.touchpad = !0), h && (t.blackberry = !0, t.version = h[2]), p && (t.bb10 = !0, t.version = p[2]), d && (t.rimtabletos = !0, t.version = d[2]), v && (n.playbook = !0), l && (t.kindle = !0, t.version = l[1]), c && (n.silk = !0, n.version = c[1]), !c && t.android && e.match(/Kindle Fire/) && (n.silk = !0), m && (n.chrome = !0, n.version = m[1]), g && (n.firefox = !0, n.version = g[1]), y && (n.ie = !0, n.version = y[1]), b && (e.match(/Safari/) || !!t.ios) && (n.safari = !0), w && (n.webview = !0), y && (n.ie = !0, n.version = y[1]), t.tablet = !!(s || v || i && !e.match(/Mobile/) || g && e.match(/Tablet/) || y && !e.match(/Phone/) && e.match(/Touch/)), t.phone = !!(!t.tablet && !t.ipod && (i || u || a || h || p || m && e.match(/Android/) || m && e.match(/CriOS\/([\d.]+)/) || g && e.match(/Mobile/) || y && e.match(/Touch/))), {browser: n, os: t, canvasSupported: document.createElement("canvas").getContext ? !0 : !1}
    }
    return e(navigator.userAgent)
}), define("echarts/config", [], function() {
    var e = {CHART_TYPE_LINE: "line", CHART_TYPE_BAR: "bar", CHART_TYPE_SCATTER: "scatter", CHART_TYPE_PIE: "pie", CHART_TYPE_RADAR: "radar", CHART_TYPE_MAP: "map", CHART_TYPE_K: "k", CHART_TYPE_ISLAND: "island", CHART_TYPE_FORCE: "force", CHART_TYPE_CHORD: "chord", COMPONENT_TYPE_TITLE: "title", COMPONENT_TYPE_LEGEND: "legend", COMPONENT_TYPE_DATARANGE: "dataRange", COMPONENT_TYPE_DATAVIEW: "dataView", COMPONENT_TYPE_DATAZOOM: "dataZoom", COMPONENT_TYPE_TOOLBOX: "toolbox", COMPONENT_TYPE_TOOLTIP: "tooltip", COMPONENT_TYPE_GRID: "grid", COMPONENT_TYPE_AXIS: "axis", COMPONENT_TYPE_POLAR: "polar", COMPONENT_TYPE_X_AXIS: "xAxis", COMPONENT_TYPE_Y_AXIS: "yAxis", COMPONENT_TYPE_AXIS_CATEGORY: "categoryAxis", COMPONENT_TYPE_AXIS_VALUE: "valueAxis", color: ["#ff7f50", "#87cefa", "#da70d6", "#32cd32", "#6495ed", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa500", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "#ffd700", "#6699FF", "#ff6666", "#3cb371", "#b8860b", "#30e0e0"], title: {text: "", subtext: "", x: "left", y: "top", backgroundColor: "rgba(0,0,0,0)", borderColor: "#ccc", borderWidth: 0, padding: 5, itemGap: 10, textStyle: {fontSize: 18, fontWeight: "bolder", color: "#333"}, subtextStyle: {color: "#aaa"}}, legend: {orient: "horizontal", x: "center", y: "top", backgroundColor: "rgba(0,0,0,0)", borderColor: "#ccc", borderWidth: 0, padding: 5, itemGap: 10, itemWidth: 20, itemHeight: 14, textStyle: {color: "#333"}, selectedMode: !0}, dataRange: {orient: "vertical", x: "left", y: "bottom", backgroundColor: "rgba(0,0,0,0)", borderColor: "#ccc", borderWidth: 0, padding: 5, itemGap: 10, itemWidth: 20, itemHeight: 14, precision: 0, splitNumber: 5, calculable: !1, realtime: !0, color: ["#006edd", "#e0ffff"], textStyle: {color: "#333"}}, toolbox: {show: !1, orient: "horizontal", x: "right", y: "top", color: ["#1e90ff", "#22bb22", "#4b0082", "#d2691e"], backgroundColor: "rgba(0,0,0,0)", borderColor: "#ccc", borderWidth: 0, padding: 5, itemGap: 10, itemSize: 16, showTitle: !0, feature: {mark: {show: !1, title: {mark: "辅助线开关", markUndo: "删除辅助线", markClear: "清空辅助线"}, lineStyle: {width: 1, color: "#1e90ff", type: "dashed"}}, dataZoom: {show: !1, title: {dataZoom: "区域缩放", dataZoomReset: "区域缩放后退"}}, dataView: {show: !1, title: "数据视图", readOnly: !1, lang: ["Data View", "close", "refresh"]}, magicType: {show: !1, title: {line: "折线图切换", bar: "柱形图切换", stack: "堆叠", tiled: "平铺"}, type: []}, restore: {show: !1, title: "还原"}, saveAsImage: {show: !1, title: "保存为图片", type: "png", lang: ["点击保存"]}}}, tooltip: {show: !0, showContent: !0, trigger: "item", islandFormatter: "{a} <br/>{b} : {c}", showDelay: 20, hideDelay: 100, transitionDuration: .4, backgroundColor: "rgba(0,0,0,0.7)", borderColor: "#333", borderRadius: 4, borderWidth: 0, padding: 5, axisPointer: {type: "line", lineStyle: {color: "#48b", width: 2, type: "solid"}, areaStyle: {size: "auto", color: "rgba(150,150,150,0.3)"}}, textStyle: {color: "#fff"}}, dataZoom: {show: !1, orient: "horizontal", backgroundColor: "rgba(0,0,0,0)", dataBackgroundColor: "#eee", fillerColor: "rgba(144,197,237,0.2)", handleColor: "rgba(70,130,180,0.8)", realtime: !0}, grid: {x: 80, y: 60, x2: 80, y2: 60, backgroundColor: "rgba(0,0,0,0)", borderWidth: 1, borderColor: "#ccc"}, categoryAxis: {position: "bottom", name: "", nameLocation: "end", nameTextStyle: {}, boundaryGap: !0, axisLine: {show: !0, lineStyle: {color: "#48b", width: 2, type: "solid"}}, axisTick: {show: !0, interval: "auto", inside: !1, length: 5, lineStyle: {color: "#333", width: 1}}, axisLabel: {show: !0, interval: "auto", rotate: 0, margin: 8, textStyle: {color: "#333"}}, splitLine: {show: !0, lineStyle: {color: ["#ccc"], width: 1, type: "solid"}}, splitArea: {show: !1, areaStyle: {color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]}}}, valueAxis: {position: "left", name: "", nameLocation: "end", nameTextStyle: {}, boundaryGap: [0, 0], precision: 0, power: 100, splitNumber: 5, axisLine: {show: !0, lineStyle: {color: "#48b", width: 2, type: "solid"}}, axisTick: {show: !1, inside: !1, length: 5, lineStyle: {color: "#333", width: 1}}, axisLabel: {show: !0, rotate: 0, margin: 8, textStyle: {color: "#333"}}, splitLine: {show: !0, lineStyle: {color: ["#ccc"], width: 1, type: "solid"}}, splitArea: {show: !1, areaStyle: {color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]}}}, polar: {center: ["50%", "50%"], radius: "75%", startAngle: 90, splitNumber: 5, name: {show: !0, textStyle: {color: "#333"}}, axisLine: {show: !0, lineStyle: {color: "#ccc", width: 1, type: "solid"}}, axisLabel: {show: !1, textStyle: {color: "#333"}}, splitArea: {show: !0, areaStyle: {color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]}}, splitLine: {show: !0, lineStyle: {width: 1, color: "#ccc"}}}, bar: {xAxisIndex: 0, yAxisIndex: 0, barMinHeight: 0, barGap: "30%", barCategoryGap: "20%", itemStyle: {normal: {borderColor: "#fff", borderRadius: 0, borderWidth: 0, label: {show: !1}}, emphasis: {borderColor: "#fff", borderRadius: 0, borderWidth: 0, label: {show: !1}}}}, line: {xAxisIndex: 0, yAxisIndex: 0, itemStyle: {normal: {label: {show: !1}, lineStyle: {width: 2, type: "solid", shadowColor: "rgba(0,0,0,0)", shadowBlur: 0, shadowOffsetX: 0, shadowOffsetY: 0}}, emphasis: {label: {show: !1}}}, symbolSize: 2, showAllSymbol: !1}, k: {xAxisIndex: 0, yAxisIndex: 0, itemStyle: {normal: {color: "#fff", color0: "#00aa11", lineStyle: {width: 1, color: "#ff3200", color0: "#00aa11"}}, emphasis: {}}}, scatter: {xAxisIndex: 0, yAxisIndex: 0, symbolSize: 4, large: !1, largeThreshold: 2e3, itemStyle: {normal: {label: {show: !1, formatter: function(e, t, n) {
                            return typeof n[2] != "undefined" ? n[2] : n[0] + " , " + n[1]
                        }}}, emphasis: {label: {show: !1, formatter: function(e, t, n) {
                            return typeof n[2] != "undefined" ? n[2] : n[0] + " , " + n[1]
                        }}}}}, radar: {polarIndex: 0, itemStyle: {normal: {label: {show: !1}, lineStyle: {width: 2, type: "solid"}}, emphasis: {label: {show: !1}}}, symbolSize: 2}, pie: {center: ["50%", "50%"], radius: [0, "75%"], clockWise: !0, startAngle: 90, minAngle: 0, selectedOffset: 10, itemStyle: {normal: {borderColor: "#fff", borderWidth: 1, label: {show: !0, position: "outer"}, labelLine: {show: !0, length: 20, lineStyle: {width: 1, type: "solid"}}}, emphasis: {borderColor: "rgba(0,0,0,0)", borderWidth: 1, label: {show: !1}, labelLine: {show: !1, length: 20, lineStyle: {width: 1, type: "solid"}}}}}, map: {mapType: "china", mapLocation: {x: "center", y: "center"}, mapValuePrecision: 0, showLegendSymbol: !0, hoverable: !0, itemStyle: {normal: {borderColor: "#fff", borderWidth: 1, areaStyle: {color: "#ccc"}, label: {show: !1, textStyle: {color: "rgb(139,69,19)"}}}, emphasis: {borderColor: "rgba(0,0,0,0)", borderWidth: 1, areaStyle: {color: "rgba(255,215,0,0.8)"}, label: {show: !1, textStyle: {color: "rgb(100,0,0)"}}}}}, force: {minRadius: 10, maxRadius: 20, density: 1, attractiveness: 1, initSize: 300, centripetal: 1, coolDown: .99, categories: [], itemStyle: {normal: {label: {show: !1}, nodeStyle: {brushType: "both", color: "#f08c2e", strokeColor: "#5182ab"}, linkStyle: {strokeColor: "#5182ab"}}, emphasis: {label: {show: !1}, nodeStyle: {}, linkStyle: {}}}}, chord: {radius: ["65%", "75%"], center: ["50%", "50%"], padding: 2, sort: "none", sortSub: "none", startAngle: 90, clockWise: !1, showScale: !1, showScaleText: !1, itemStyle: {normal: {label: {show: !0}, lineStyle: {width: 0, color: "#000"}, chordStyle: {lineStyle: {width: 1, color: "#666"}}}, emphasis: {lineStyle: {width: 0, color: "#000"}, chordStyle: {lineStyle: {width: 2, color: "#333"}}}}, matrix: []}, island: {r: 15, calculateStep: .1}, markPoint: {symbol: "pin", symbolSize: 10, effect: {show: !1, period: 15, scaleSize: 2}, itemStyle: {normal: {borderWidth: 2, label: {show: !0, position: "inside"}}, emphasis: {label: {show: !0}}}}, markLine: {symbol: ["circle", "arrow"], symbolSize: [2, 4], effect: {show: !1, period: 15, scaleSize: 2}, itemStyle: {normal: {borderWidth: 1.5, label: {show: !0, position: "end"}, lineStyle: {type: "dashed", shadowColor: "rgba(0,0,0,0)", shadowBlur: 0, shadowOffsetX: 0, shadowOffsetY: 0}}, emphasis: {label: {show: !1}, lineStyle: {}}}}, textStyle: {decoration: "none", fontFamily: "Arial, Verdana, sans-serif", fontFamily2: "微软雅黑", fontSize: 12, fontStyle: "normal", fontWeight: "normal"}, EVENT: {REFRESH: "refresh", RESTORE: "restore", RESIZE: "resize", CLICK: "click", HOVER: "hover", DATA_CHANGED: "dataChanged", DATA_ZOOM: "dataZoom", DATA_RANGE: "dataRange", LEGEND_SELECTED: "legendSelected", MAP_SELECTED: "mapSelected", PIE_SELECTED: "pieSelected", MAGIC_TYPE_CHANGED: "magicTypeChanged", DATA_VIEW_CHANGED: "dataViewChanged", MAP_ROAM: "mapRoam", TOOLTIP_HOVER: "tooltipHover", TOOLTIP_IN_GRID: "tooltipInGrid", TOOLTIP_OUT_GRID: "tooltipOutGrid"}, DRAG_ENABLE_TIME: 150, symbolList: ["circle", "rectangle", "triangle", "diamond", "emptyCircle", "emptyRectangle", "emptyTriangle", "emptyDiamond"], loadingText: "Loading...", calculable: !1, calculableColor: "rgba(255,165,0,0.6)", calculableHolderColor: "#ccc", nameConnector: " & ", valueConnector: " : ", animation: !0, addDataAnimation: !0, animationThreshold: 2500, animationDuration: 2e3, animationEasing: "ExponentialOut"};
    return e
}), define("zrender/tool/vector", [], function() {
    var e = typeof Float32Array == "undefined" ? Array : Float32Array, t = {create: function(t, n) {
            var r = new e(2);
            return r[0] = t || 0, r[1] = n || 0, r
        }, copy: function(e, t) {
            e[0] = t[0], e[1] = t[1]
        }, set: function(e, t, n) {
            e[0] = t, e[1] = n
        }, add: function(e, t, n) {
            return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e
        }, scaleAndAdd: function(e, t, n, r) {
            return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e
        }, sub: function(e, t, n) {
            return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e
        }, length: function(e) {
            return Math.sqrt(this.lengthSquare(e))
        }, lengthSquare: function(e) {
            return e[0] * e[0] + e[1] * e[1]
        }, mul: function(e, t, n) {
            return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e
        }, dot: function(e, t) {
            return e[0] * t[0] + e[1] * t[1]
        }, scale: function(e, t, n) {
            return e[0] = t[0] * n, e[1] = t[1] * n, e
        }, normalize: function(e, n) {
            var r = t.length(n);
            return r === 0 ? (e[0] = 0, e[1] = 0) : (e[0] = n[0] / r, e[1] = n[1] / r), e
        }, distance: function(e, t) {
            return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]))
        }, negate: function(e, t) {
            e[0] = -t[0], e[1] = -t[1]
        }, middle: function(e, t, n) {
            return e[0] = (t[0] + n[0]) / 2, e[1] = (t[1] + n[1]) / 2, e
        }};
    return t
}), define("zrender/lib/excanvas", ["require"], function(e) {
    return document.createElement("canvas").getContext ? G_vmlCanvasManager = !1 : function() {
        function f() {
            return this.context_ || (this.context_ = new I(this))
        }
        function c(e, t, n) {
            var r = l.call(arguments, 2);
            return function() {
                return e.apply(t, r.concat(l.call(arguments)))
            }
        }
        function h(e) {
            return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
        }
        function p(e, t, n) {
            e.namespaces[t] || e.namespaces.add(t, n, "#default#VML")
        }
        function d(e) {
            p(e, "g_vml_", "urn:schemas-microsoft-com:vml"), p(e, "g_o_", "urn:schemas-microsoft-com:office:office");
            if (!e.styleSheets.ex_canvas_) {
                var t = e.createStyleSheet();
                t.owningElement.id = "ex_canvas_", t.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"
            }
        }
        function m(e) {
            var t = e.srcElement;
            switch (e.propertyName) {
                case"width":
                    t.getContext().clearRect(), t.style.width = t.attributes.width.nodeValue + "px", t.firstChild.style.width = t.clientWidth + "px";
                    break;
                case"height":
                    t.getContext().clearRect(), t.style.height = t.attributes.height.nodeValue + "px", t.firstChild.style.height = t.clientHeight + "px"
                }
        }
        function g(e) {
            var t = e.srcElement;
            t.firstChild && (t.firstChild.style.width = t.clientWidth + "px", t.firstChild.style.height = t.clientHeight + "px")
        }
        function E() {
            return[[1, 0, 0], [0, 1, 0], [0, 0, 1]]
        }
        function S(e, t) {
            var n = E();
            for (var r = 0; r < 3; r++)
                for (var i = 0; i < 3; i++) {
                    var s = 0;
                    for (var o = 0; o < 3; o++)
                        s += e[r][o] * t[o][i];
                    n[r][i] = s
                }
            return n
        }
        function x(e, t) {
            t.fillStyle = e.fillStyle, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.lineWidth = e.lineWidth, t.miterLimit = e.miterLimit, t.shadowBlur = e.shadowBlur, t.shadowColor = e.shadowColor, t.shadowOffsetX = e.shadowOffsetX, t.shadowOffsetY = e.shadowOffsetY, t.strokeStyle = e.strokeStyle, t.globalAlpha = e.globalAlpha, t.font = e.font, t.textAlign = e.textAlign, t.textBaseline = e.textBaseline, t.arcScaleX_ = e.arcScaleX_, t.arcScaleY_ = e.arcScaleY_, t.lineScale_ = e.lineScale_
        }
        function N(e) {
            var t = e.indexOf("(", 3), n = e.indexOf(")", t + 1), r = e.substring(t + 1, n).split(",");
            if (r.length != 4 || e.charAt(3) != "a")
                r[3] = 1;
            return r
        }
        function C(e) {
            return parseFloat(e) / 100
        }
        function k(e, t, n) {
            return Math.min(n, Math.max(t, e))
        }
        function L(e) {
            var t, n, r, i, s, o;
            i = parseFloat(e[0]) / 360 % 360, i < 0 && i++, s = k(C(e[1]), 0, 1), o = k(C(e[2]), 0, 1);
            if (s == 0)
                t = n = r = o;
            else {
                var u = o < .5 ? o * (1 + s) : o + s - o * s, a = 2 * o - u;
                t = A(a, u, i + 1 / 3), n = A(a, u, i), r = A(a, u, i - 1 / 3)
            }
            return"#" + y[Math.floor(t * 255)] + y[Math.floor(n * 255)] + y[Math.floor(r * 255)]
        }
        function A(e, t, n) {
            return n < 0 && n++, n > 1 && n--, 6 * n < 1 ? e + (t - e) * 6 * n : 2 * n < 1 ? t : 3 * n < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }
        function M(e) {
            if (e in O)
                return O[e];
            var t, n = 1;
            e = String(e);
            if (e.charAt(0) == "#")
                t = e;
            else if (/^rgb/.test(e)) {
                var r = N(e), t = "#", i;
                for (var s = 0; s < 3; s++)
                    r[s].indexOf("%") != -1 ? i = Math.floor(C(r[s]) * 255) : i = +r[s], t += y[k(i, 0, 255)];
                n = +r[3]
            } else if (/^hsl/.test(e)) {
                var r = N(e);
                t = L(r), n = r[3]
            } else
                t = T[e] || e;
            return O[e] = {color: t, alpha: n}
        }
        function P(e) {
            if (D[e])
                return D[e];
            var t = document.createElement("div"), n = t.style, r;
            try {
                n.font = e, r = n.fontFamily.split(",")[0]
            } catch (i) {
            }
            return D[e] = {style: n.fontStyle || _.style, variant: n.fontVariant || _.variant, weight: n.fontWeight || _.weight, size: n.fontSize || _.size, family: r || _.family}
        }
        function H(e, t) {
            var n = {};
            for (var r in e)
                n[r] = e[r];
            var i = parseFloat(t.currentStyle.fontSize), s = parseFloat(e.size);
            return typeof e.size == "number" ? n.size = e.size : e.size.indexOf("px") != -1 ? n.size = s : e.size.indexOf("em") != -1 ? n.size = i * s : e.size.indexOf("%") != -1 ? n.size = i / 100 * s : e.size.indexOf("pt") != -1 ? n.size = s / .75 : n.size = i, n
        }
        function B(e) {
            return e.style + " " + e.variant + " " + e.weight + " " + e.size + "px '" + e.family + "'"
        }
        function F(e) {
            return j[e] || "square"
        }
        function I(e) {
            this.m_ = E(), this.mStack_ = [], this.aStack_ = [], this.currentPath_ = [], this.strokeStyle = "#000", this.fillStyle = "#000", this.lineWidth = 1, this.lineJoin = "miter", this.lineCap = "butt", this.miterLimit = o * 1, this.globalAlpha = 1, this.font = "12px 微软雅黑", this.textAlign = "left", this.textBaseline = "alphabetic", this.canvas = e;
            var t = "width:" + e.clientWidth + "px;height:" + e.clientHeight + "px;overflow:hidden;position:absolute", n = e.ownerDocument.createElement("div");
            n.style.cssText = t, e.appendChild(n);
            var r = n.cloneNode(!1);
            r.style.backgroundColor = "#fff", r.style.filter = "alpha(opacity=0)", e.appendChild(r), this.element_ = n, this.arcScaleX_ = 1, this.arcScaleY_ = 1, this.lineScale_ = 1
        }
        function R(e, t, n, r) {
            e.currentPath_.push({type: "bezierCurveTo", cp1x: t.x, cp1y: t.y, cp2x: n.x, cp2y: n.y, x: r.x, y: r.y}), e.currentX_ = r.x, e.currentY_ = r.y
        }
        function U(e, t) {
            var n = M(e.strokeStyle), r = n.color, i = n.alpha * e.globalAlpha, s = e.lineScale_ * e.lineWidth;
            s < 1 && (i *= s), t.push("<g_vml_:stroke", ' opacity="', i, '"', ' joinstyle="', e.lineJoin, '"', ' miterlimit="', e.miterLimit, '"', ' endcap="', F(e.lineCap), '"', ' weight="', s, 'px"', ' color="', r, '" />')
        }
        function z(t, n, r, i) {
            var s = t.fillStyle, u = t.arcScaleX_, a = t.arcScaleY_, f = i.x - r.x, l = i.y - r.y;
            if (s instanceof $) {
                var c = 0, h = {x: 0, y: 0}, p = 0, d = 1;
                if (s.type_ == "gradient") {
                    var v = s.x0_ / u, m = s.y0_ / a, g = s.x1_ / u, y = s.y1_ / a, b = W(t, v, m), w = W(t, g, y), E = w.x - b.x, S = w.y - b.y;
                    c = Math.atan2(E, S) * 180 / Math.PI, c < 0 && (c += 360), c < 1e-6 && (c = 0)
                } else {
                    var b = W(t, s.x0_, s.y0_);
                    h = {x: (b.x - r.x) / f, y: (b.y - r.y) / l}, f /= u * o, l /= a * o;
                    var x = e.max(f, l);
                    p = 2 * s.r0_ / x, d = 2 * s.r1_ / x - p
                }
                var T = s.colors_;
                T.sort(function(e, t) {
                    return e.offset - t.offset
                });
                var N = T.length, C = T[0].color, k = T[N - 1].color, L = T[0].alpha * t.globalAlpha, A = T[N - 1].alpha * t.globalAlpha, O = [];
                for (var _ = 0; _ < N; _++) {
                    var D = T[_];
                    O.push(D.offset * d + p + " " + D.color)
                }
                n.push('<g_vml_:fill type="', s.type_, '"', ' method="none" focus="100%"', ' color="', C, '"', ' color2="', k, '"', ' colors="', O.join(","), '"', ' opacity="', A, '"', ' g_o_:opacity2="', L, '"', ' angle="', c, '"', ' focusposition="', h.x, ",", h.y, '" />')
            } else if (s instanceof J) {
                if (f && l) {
                    var P = -r.x, H = -r.y;
                    n.push("<g_vml_:fill", ' position="', P / f * u * u, ",", H / l * a * a, '"', ' type="tile"', ' src="', s.src_, '" />')
                }
            } else {
                var B = M(t.fillStyle), j = B.color, F = B.alpha * t.globalAlpha;
                n.push('<g_vml_:fill color="', j, '" opacity="', F, '" />')
            }
        }
        function W(e, t, n) {
            var r = e.m_;
            return{x: o * (t * r[0][0] + n * r[1][0] + r[2][0]) - u, y: o * (t * r[0][1] + n * r[1][1] + r[2][1]) - u}
        }
        function X(e) {
            return isFinite(e[0][0]) && isFinite(e[0][1]) && isFinite(e[1][0]) && isFinite(e[1][1]) && isFinite(e[2][0]) && isFinite(e[2][1])
        }
        function V(e, t, n) {
            if (!X(t))
                return;
            e.m_ = t;
            if (n) {
                var r = t[0][0] * t[1][1] - t[0][1] * t[1][0];
                e.lineScale_ = s(i(r))
            }
        }
        function $(e) {
            this.type_ = e, this.x0_ = 0, this.y0_ = 0, this.r0_ = 0, this.x1_ = 0, this.y1_ = 0, this.r1_ = 0, this.colors_ = []
        }
        function J(e, t) {
            Q(e);
            switch (t) {
                case"repeat":
                case null:
                case"":
                    this.repetition_ = "repeat";
                    break;
                case"repeat-x":
                case"repeat-y":
                case"no-repeat":
                    this.repetition_ = t;
                    break;
                default:
                    K("SYNTAX_ERR")
            }
            this.src_ = e.src, this.width_ = e.width, this.height_ = e.height
        }
        function K(e) {
            throw new G(e)
        }
        function Q(e) {
            (!e || e.nodeType != 1 || e.tagName != "IMG") && K("TYPE_MISMATCH_ERR"), e.readyState != "complete" && K("INVALID_STATE_ERR")
        }
        function G(e) {
            this.code = this[e], this.message = e + ": DOM Exception " + this.code
        }
        var e = Math, t = e.round, n = e.sin, r = e.cos, i = e.abs, s = e.sqrt, o = 10, u = o / 2, a = +navigator.userAgent.match(/MSIE ([\d.]+)?/)[1], l = Array.prototype.slice;
        d(document);
        var v = {init: function(e) {
                var t = e || document;
                t.createElement("canvas"), t.attachEvent("onreadystatechange", c(this.init_, this, t))
            }, init_: function(e) {
                var t = e.getElementsByTagName("canvas");
                for (var n = 0; n < t.length; n++)
                    this.initElement(t[n])
            }, initElement: function(e) {
                if (!e.getContext) {
                    e.getContext = f, d(e.ownerDocument), e.innerHTML = "", e.attachEvent("onpropertychange", m), e.attachEvent("onresize", g);
                    var t = e.attributes;
                    t.width && t.width.specified ? e.style.width = t.width.nodeValue + "px" : e.width = e.clientWidth, t.height && t.height.specified ? e.style.height = t.height.nodeValue + "px" : e.height = e.clientHeight
                }
                return e
            }};
        v.init();
        var y = [];
        for (var b = 0; b < 16; b++)
            for (var w = 0; w < 16; w++)
                y[b * 16 + w] = b.toString(16) + w.toString(16);
        var T = {aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000000", blanchedalmond: "#FFEBCD", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#00FFFF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgreen: "#006400", darkgrey: "#A9A9A9", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", grey: "#808080", greenyellow: "#ADFF2F", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgreen: "#90EE90", lightgrey: "#D3D3D3", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#FF00FF", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", oldlace: "#FDF5E6", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", whitesmoke: "#F5F5F5", yellowgreen: "#9ACD32"}, O = {}, _ = {style: "normal", variant: "normal", weight: "normal", size: 12, family: "微软雅黑"}, D = {}, j = {butt: "flat", round: "round"}, q = I.prototype;
        q.clearRect = function() {
            this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null), this.element_.innerHTML = ""
        }, q.beginPath = function() {
            this.currentPath_ = []
        }, q.moveTo = function(e, t) {
            var n = W(this, e, t);
            this.currentPath_.push({type: "moveTo", x: n.x, y: n.y}), this.currentX_ = n.x, this.currentY_ = n.y
        }, q.lineTo = function(e, t) {
            var n = W(this, e, t);
            this.currentPath_.push({type: "lineTo", x: n.x, y: n.y}), this.currentX_ = n.x, this.currentY_ = n.y
        }, q.bezierCurveTo = function(e, t, n, r, i, s) {
            var o = W(this, i, s), u = W(this, e, t), a = W(this, n, r);
            R(this, u, a, o)
        }, q.quadraticCurveTo = function(e, t, n, r) {
            var i = W(this, e, t), s = W(this, n, r), o = {x: this.currentX_ + 2 / 3 * (i.x - this.currentX_), y: this.currentY_ + 2 / 3 * (i.y - this.currentY_)}, u = {x: o.x + (s.x - this.currentX_) / 3, y: o.y + (s.y - this.currentY_) / 3};
            R(this, o, u, s)
        }, q.arc = function(e, t, i, s, a, f) {
            i *= o;
            var l = f ? "at" : "wa", c = e + r(s) * i - u, h = t + n(s) * i - u, p = e + r(a) * i - u, d = t + n(a) * i - u;
            c == p && !f && (c += .125);
            var v = W(this, e, t), m = W(this, c, h), g = W(this, p, d);
            this.currentPath_.push({type: l, x: v.x, y: v.y, radius: i, xStart: m.x, yStart: m.y, xEnd: g.x, yEnd: g.y})
        }, q.rect = function(e, t, n, r) {
            this.moveTo(e, t), this.lineTo(e + n, t), this.lineTo(e + n, t + r), this.lineTo(e, t + r), this.closePath()
        }, q.strokeRect = function(e, t, n, r) {
            var i = this.currentPath_;
            this.beginPath(), this.moveTo(e, t), this.lineTo(e + n, t), this.lineTo(e + n, t + r), this.lineTo(e, t + r), this.closePath(), this.stroke(), this.currentPath_ = i
        }, q.fillRect = function(e, t, n, r) {
            var i = this.currentPath_;
            this.beginPath(), this.moveTo(e, t), this.lineTo(e + n, t), this.lineTo(e + n, t + r), this.lineTo(e, t + r), this.closePath(), this.fill(), this.currentPath_ = i
        }, q.createLinearGradient = function(e, t, n, r) {
            var i = new $("gradient");
            return i.x0_ = e, i.y0_ = t, i.x1_ = n, i.y1_ = r, i
        }, q.createRadialGradient = function(e, t, n, r, i, s) {
            var o = new $("gradientradial");
            return o.x0_ = e, o.y0_ = t, o.r0_ = n, o.x1_ = r, o.y1_ = i, o.r1_ = s, o
        }, q.drawImage = function(n, r) {
            var i, s, u, a, f, l, c, h, p = n.runtimeStyle.width, d = n.runtimeStyle.height;
            n.runtimeStyle.width = "auto", n.runtimeStyle.height = "auto";
            var v = n.width, m = n.height;
            n.runtimeStyle.width = p, n.runtimeStyle.height = d;
            if (arguments.length == 3)
                i = arguments[1], s = arguments[2], f = l = 0, c = u = v, h = a = m;
            else if (arguments.length == 5)
                i = arguments[1], s = arguments[2], u = arguments[3], a = arguments[4], f = l = 0, c = v, h = m;
            else {
                if (arguments.length != 9)
                    throw Error("Invalid number of arguments");
                f = arguments[1], l = arguments[2], c = arguments[3], h = arguments[4], i = arguments[5], s = arguments[6], u = arguments[7], a = arguments[8]
            }
            var g = W(this, i, s), y = c / 2, b = h / 2, w = [], E = 10, S = 10, x = scaleY = 1;
            w.push(" <g_vml_:group", ' coordsize="', o * E, ",", o * S, '"', ' coordorigin="0,0"', ' style="width:', E, "px;height:", S, "px;position:absolute;");
            if (this.m_[0][0] != 1 || this.m_[0][1] || this.m_[1][1] != 1 || this.m_[1][0]) {
                var T = [];
                x = Math.sqrt(this.m_[0][0] * this.m_[0][0] + this.m_[0][1] * this.m_[0][1]), scaleY = Math.sqrt(this.m_[1][0] * this.m_[1][0] + this.m_[1][1] * this.m_[1][1]), T.push("M11=", this.m_[0][0] / x, ",", "M12=", this.m_[1][0] / scaleY, ",", "M21=", this.m_[0][1] / x, ",", "M22=", this.m_[1][1] / scaleY, ",", "Dx=", t(g.x / o), ",", "Dy=", t(g.y / o), "");
                var N = g, C = W(this, i + u, s), k = W(this, i, s + a), L = W(this, i + u, s + a);
                N.x = e.max(N.x, C.x, k.x, L.x), N.y = e.max(N.y, C.y, k.y, L.y), w.push("padding:0 ", t(N.x / o), "px ", t(N.y / o), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", T.join(""), ", sizingmethod='clip');")
            } else
                w.push("top:", t(g.y / o), "px;left:", t(g.x / o), "px;");
            w.push(' ">'), (f || l) && w.push('<div style="overflow: hidden; width:', Math.ceil((u + f * u / c) * x), "px;", " height:", Math.ceil((a + l * a / h) * scaleY), "px;", " filter:progid:DxImageTransform.Microsoft.Matrix(Dx=", -f * u / c * x, ",Dy=", -l * a / h * scaleY, ');">'), w.push('<div style="width:', Math.round(x * v * u / c), "px;", " height:", Math.round(scaleY * m * a / h), "px;", " filter:"), this.globalAlpha < 1 && w.push(" progid:DXImageTransform.Microsoft.Alpha(opacity=" + this.globalAlpha * 100 + ")"), w.push(" progid:DXImageTransform.Microsoft.AlphaImageLoader(src=", n.src, ',sizingMethod=scale)">'), (f || l) && w.push("</div>"), w.push("</div></div>"), this.element_.insertAdjacentHTML("BeforeEnd", w.join(""))
        }, q.stroke = function(e) {
            var n = [], r = !1, i = 10, s = 10;
            n.push("<g_vml_:shape", ' filled="', !!e, '"', ' style="position:absolute;width:', i, "px;height:", s, 'px;"', ' coordorigin="0,0"', ' coordsize="', o * i, ",", o * s, '"', ' stroked="', !e, '"', ' path="');
            var u = !1, a = {x: null, y: null}, f = {x: null, y: null};
            for (var l = 0; l < this.currentPath_.length; l++) {
                var c = this.currentPath_[l], h;
                switch (c.type) {
                    case"moveTo":
                        h = c, n.push(" m ", t(c.x), ",", t(c.y));
                        break;
                    case"lineTo":
                        n.push(" l ", t(c.x), ",", t(c.y));
                        break;
                    case"close":
                        n.push(" x "), c = null;
                        break;
                    case"bezierCurveTo":
                        n.push(" c ", t(c.cp1x), ",", t(c.cp1y), ",", t(c.cp2x), ",", t(c.cp2y), ",", t(c.x), ",", t(c.y));
                        break;
                    case"at":
                    case"wa":
                        n.push(" ", c.type, " ", t(c.x - this.arcScaleX_ * c.radius), ",", t(c.y - this.arcScaleY_ * c.radius), " ", t(c.x + this.arcScaleX_ * c.radius), ",", t(c.y + this.arcScaleY_ * c.radius), " ", t(c.xStart), ",", t(c.yStart), " ", t(c.xEnd), ",", t(c.yEnd))
                }
                if (c) {
                    if (a.x == null || c.x < a.x)
                        a.x = c.x;
                    if (f.x == null || c.x > f.x)
                        f.x = c.x;
                    if (a.y == null || c.y < a.y)
                        a.y = c.y;
                    if (f.y == null || c.y > f.y)
                        f.y = c.y
                }
            }
            n.push(' ">'), e ? z(this, n, a, f) : U(this, n), n.push("</g_vml_:shape>"), this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
        }, q.fill = function() {
            this.stroke(!0)
        }, q.closePath = function() {
            this.currentPath_.push({type: "close"})
        }, q.save = function() {
            var e = {};
            x(this, e), this.aStack_.push(e), this.mStack_.push(this.m_), this.m_ = S(E(), this.m_)
        }, q.restore = function() {
            this.aStack_.length && (x(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
        }, q.translate = function(e, t) {
            var n = [[1, 0, 0], [0, 1, 0], [e, t, 1]];
            V(this, S(n, this.m_), !1)
        }, q.rotate = function(e) {
            var t = r(e), i = n(e), s = [[t, i, 0], [-i, t, 0], [0, 0, 1]];
            V(this, S(s, this.m_), !1)
        }, q.scale = function(e, t) {
            this.arcScaleX_ *= e, this.arcScaleY_ *= t;
            var n = [[e, 0, 0], [0, t, 0], [0, 0, 1]];
            V(this, S(n, this.m_), !0)
        }, q.transform = function(e, t, n, r, i, s) {
            var o = [[e, t, 0], [n, r, 0], [i, s, 1]];
            V(this, S(o, this.m_), !0)
        }, q.setTransform = function(e, t, n, r, i, s) {
            var o = [[e, t, 0], [n, r, 0], [i, s, 1]];
            V(this, o, !0)
        }, q.drawText_ = function(e, n, r, i, s) {
            var u = this.m_, a = 1e3, f = 0, l = a, c = {x: 0, y: 0}, p = [], d = H(P(this.font), this.element_), v = B(d), m = this.element_.currentStyle, g = this.textAlign.toLowerCase();
            switch (g) {
                case"left":
                case"center":
                case"right":
                    break;
                case"end":
                    g = m.direction == "ltr" ? "right" : "left";
                    break;
                case"start":
                    g = m.direction == "rtl" ? "right" : "left";
                    break;
                default:
                    g = "left"
            }
            switch (this.textBaseline) {
                case"hanging":
                case"top":
                    c.y = d.size / 1.75;
                    break;
                case"middle":
                    break;
                default:
                case null:
                case"alphabetic":
                case"ideographic":
                case"bottom":
                    c.y = -d.size / 2.25
            }
            switch (g) {
                case"right":
                    f = a, l = .05;
                    break;
                case"center":
                    f = l = a / 2
            }
            var y = W(this, n + c.x, r + c.y);
            p.push('<g_vml_:line from="', -f, ' 0" to="', l, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !s, '" stroked="', !!s, '" style="position:absolute;width:1px;height:1px;">'), s ? U(this, p) : z(this, p, {x: -f, y: 0}, {x: l, y: d.size});
            var b = u[0][0].toFixed(3) + "," + u[1][0].toFixed(3) + "," + u[0][1].toFixed(3) + "," + u[1][1].toFixed(3) + ",0,0", w = t(y.x / o) + "," + t(y.y / o);
            p.push('<g_vml_:skew on="t" matrix="', b, '" ', ' offset="', w, '" origin="', f, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', h(e), '" style="v-text-align:', g, ";font:", h(v), '" /></g_vml_:line>'), this.element_.insertAdjacentHTML("beforeEnd", p.join(""))
        }, q.fillText = function(e, t, n, r) {
            this.drawText_(e, t, n, r, !1)
        }, q.strokeText = function(e, t, n, r) {
            this.drawText_(e, t, n, r, !0)
        }, q.measureText = function(e) {
            if (!this.textMeasureEl_) {
                var t = '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';
                this.element_.insertAdjacentHTML("beforeEnd", t), this.textMeasureEl_ = this.element_.lastChild
            }
            var n = this.element_.ownerDocument;
            return this.textMeasureEl_.innerHTML = "", this.textMeasureEl_.style.font = this.font, this.textMeasureEl_.appendChild(n.createTextNode(e)), {width: this.textMeasureEl_.offsetWidth}
        }, q.clip = function() {
        }, q.arcTo = function() {
        }, q.createPattern = function(e, t) {
            return new J(e, t)
        }, $.prototype.addColorStop = function(e, t) {
            t = M(t), this.colors_.push({offset: e, color: t.color, alpha: t.alpha})
        };
        var Y = G.prototype = new Error;
        Y.INDEX_SIZE_ERR = 1, Y.DOMSTRING_SIZE_ERR = 2, Y.HIERARCHY_REQUEST_ERR = 3, Y.WRONG_DOCUMENT_ERR = 4, Y.INVALID_CHARACTER_ERR = 5, Y.NO_DATA_ALLOWED_ERR = 6, Y.NO_MODIFICATION_ALLOWED_ERR = 7, Y.NOT_FOUND_ERR = 8, Y.NOT_SUPPORTED_ERR = 9, Y.INUSE_ATTRIBUTE_ERR = 10, Y.INVALID_STATE_ERR = 11, Y.SYNTAX_ERR = 12, Y.INVALID_MODIFICATION_ERR = 13, Y.NAMESPACE_ERR = 14, Y.INVALID_ACCESS_ERR = 15, Y.VALIDATION_ERR = 16, Y.TYPE_MISMATCH_ERR = 17, G_vmlCanvasManager = v, CanvasRenderingContext2D = I, CanvasGradient = $, CanvasPattern = J, DOMException = G
    }(), G_vmlCanvasManager
}), define("zrender/tool/util", ["require", "./vector", "../lib/excanvas"], function(e) {
    function n(e) {
        var t = {"[object Function]": 1, "[object RegExp]": 1, "[object Date]": 1, "[object Error]": 1, "[object CanvasGradient]": 1}, n = e, r, i;
        if (!e || e instanceof Number || e instanceof String || e instanceof Boolean)
            return n;
        if (e instanceof Array) {
            n = [];
            var s = 0;
            for (r = 0, i = e.length; r < i; r++)
                n[s++] = this.clone(e[r])
        } else if ("object" == typeof e) {
            if (t[Object.prototype.toString.call(e)] || e.__nonRecursion)
                return n;
            n = {};
            for (r in e)
                e.hasOwnProperty(r) && (n[r] = this.clone(e[r]))
        }
        return n
    }
    function i(e, t, n, r) {
        if (!e || !t)
            return;
        if (t instanceof Object)
            for (var s in t)
                if (t.hasOwnProperty(s))
                    if (t[s]instanceof Object && r && e[s])
                        i(e[s], t[s], n, r);
                    else if (n || !e.hasOwnProperty(s))
                        e[s] = t[s]
    }
    function o() {
        if (!s) {
            e("../lib/excanvas");
            if (G_vmlCanvasManager) {
                var t = document.createElement("div");
                t.style.position = "absolute", t.style.top = "-1000px", document.body.appendChild(t), s = G_vmlCanvasManager.initElement(t).getContext("2d")
            } else
                s = document.createElement("canvas").getContext("2d")
        }
        return s
    }
    function p() {
        return a || (u = document.createElement("canvas"), f = u.width, l = u.height, a = u.getContext("2d")), a
    }
    function d(e, t) {
        var n = 100, r = !1;
        e + c > f && (f = e + c + n, u.width = f, r = !0), t + h > l && (l = t + h + n, u.height = l, r = !0), e < -c && (c = Math.ceil(-e / n) * n, f += c, u.width = f, r = !0), t < -h && (h = Math.ceil(-t / n) * n, l += h, u.height = l, r = !0), r && a.translate(c, h)
    }
    function v() {
        return{x: c, y: h}
    }
    function m(e, t) {
        if (e.indexOf)
            return e.indexOf(t);
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t)
                return n;
        return-1
    }
    function g(e, t, n) {
        if (e.length === 0)
            return;
        var r = e[0][0], i = e[0][0], s = e[0][1], o = e[0][1];
        for (var u = 1; u < e.length; u++) {
            var a = e[u];
            a[0] < r && (r = a[0]), a[0] > i && (i = a[0]), a[1] < s && (s = a[1]), a[1] > o && (o = a[1])
        }
        t[0] = r, t[1] = s, n[0] = i, n[1] = o
    }
    function y(e, t, n, r, i, s) {
        var o = b(e[0], t[0], n[0], r[0]), u = b(e[1], t[1], n[1], r[1]);
        o.push(e[0], r[0]), u.push(e[1], r[1]);
        var a = Math.min.apply(null, o), f = Math.max.apply(null, o), l = Math.min.apply(null, u), c = Math.max.apply(null, u);
        i[0] = a, i[1] = l, s[0] = f, s[1] = c
    }
    function b(e, t, n, r) {
        var i = [], s = 6 * n - 12 * t + 6 * e, o = 9 * t + 3 * r - 3 * e - 9 * n, u = 3 * t - 3 * e, a = s * s - 4 * o * u;
        if (a > 0) {
            var f = Math.sqrt(a), l = (-s + f) / (2 * o), c = (-s - f) / (2 * o);
            i.push(l, c)
        } else
            a === 0 && i.push(-s / (2 * o));
        var h = [];
        for (var p = 0; p < i.length; p++) {
            var d = i[p];
            if (Math.abs(2 * o * d + s) > 1e-4 && d < 1 && d > 0) {
                var v = 1 - d, m = v * v * v * e + 3 * v * v * d * t + 3 * v * d * d * n + d * d * d * r;
                h.push(m)
            }
        }
        return h
    }
    function w(e, t, n, r, i) {
        var s = e[0] + n[0] - 2 * t[0], o;
        s === 0 ? o = .5 : o = (e[0] - t[0]) / s, s = e[1] + n[1] - 2 * t[1];
        var u;
        s === 0 ? u = .5 : u = (e[1] - t[1]) / s, o = Math.max(Math.min(o, 1), 0), u = Math.max(Math.min(u, 1), 0);
        var a = 1 - o, f = 1 - u, l = a * a * e[0] + 2 * a * o * t[0] + o * o * n[0], c = a * a * e[1] + 2 * a * o * t[1] + o * o * n[1], h = f * f * e[0] + 2 * f * u * t[0] + u * u * n[0], p = f * f * e[1] + 2 * f * u * t[1] + u * u * n[1];
        return g([e.slice(), n.slice(), [l, c], [h, p]], r, i)
    }
    var t = e("./vector"), r = function() {
        function t(t, n, i, s, o) {
            if (n.hasOwnProperty(i))
                if (o && typeof t[i] == "object" && e[Object.prototype.toString.call(t[i])] != 1)
                    r(t[i], n[i], {overwrite: s, recursive: o});
                else if (s || !(i in t))
                    t[i] = n[i]
        }
        var e = {"[object Function]": 1, "[object RegExp]": 1, "[object Date]": 1, "[object Error]": 1, "[object CanvasGradient]": 1};
        return function(e, n, r) {
            var i = 0, s = r || {}, o = s.overwrite, u = s.whiteList, a = s.recursive, f;
            if (u && u.length) {
                f = u.length;
                for (; i < f; ++i)
                    t(e, n, u[i], o, a)
            } else
                for (i in n)
                    t(e, n, i, o, a);
            return e
        }
    }(), s, u, a, f, l, c = 0, h = 0, E = function() {
        var e = [], n = [], r = [[], [], [], []];
        return function(i, s, o, u, a, f, l) {
            a = a ? 1 : -1, e[0] = Math.cos(o), e[1] = Math.sin(o) * a, t.scale(e, e, s), t.add(e, e, i), n[0] = Math.cos(u), n[1] = Math.sin(u) * a, t.scale(n, n, s), t.add(n, n, i), o %= Math.PI * 2, o < 0 && (o += Math.PI * 2), u %= Math.PI * 2, u < 0 && (u += Math.PI * 2), o > u && (u += Math.PI * 2);
            var c = 0;
            for (var h = 0; h < u; h += Math.PI / 2)
                if (h > o) {
                    var p = r[c++];
                    p[0] = Math.cos(h), p[1] = Math.sin(h) * a, t.scale(p, p, s), t.add(p, p, i)
                }
            var d = r.slice(0, c);
            d.push(e, n), g(d, f, l)
        }
    }();
    return{clone: n, merge: r, mergeFast: i, getContext: o, getPixelContext: p, getPixelOffset: v, adjustCanvasSize: d, computeBoundingBox: g, computeCubeBezierBoundingBox: y, computeQuadraticBezierBoundingBox: w, computeArcBoundingBox: E, indexOf: m}
}), define("zrender/shape", [], function() {
    var e = {}, t = {};
    return e.define = function(n, r) {
        return t[n] = r, e
    }, e.get = function(e) {
        return t[e]
    }, e
}), define("zrender/tool/area", ["require", "../tool/util", "../shape"], function(e) {
    function r(e, r, u, a) {
        if (!r || !e)
            return!1;
        var f = e.type;
        n || (n = t.getContext());
        if (!h(r.__rect || e.getRect(r), u, a))
            return!1;
        var l = i(f, r, u, a);
        if (typeof l != "undefined")
            return l;
        if (f != "beziercurve" && e.buildPath && n.isPointInPath)
            return s(e, n, r, u, a);
        if (n.getImageData)
            return o(e, r, u, a);
        switch (f) {
            case"heart":
                return!0;
            case"droplet":
                return!0;
            case"ellipse":
                return!0;
            case"trochoid":
                var c = r.location == "out" ? r.r1 + r.r2 + r.d : r.r1 - r.r2 + r.d;
                return p(r, u, a, c);
            case"rose":
                return p(r, u, a, r.maxr);
            default:
                return!1
            }
    }
    function i(e, t, n, r) {
        switch (e) {
            case"line":
                return f(t, n, r);
            case"brokenLine":
                return l(t, n, r);
            case"text":
                return!0;
            case"ring":
                return c(t, n, r);
            case"rectangle":
                return!0;
            case"circle":
                return p(t, n, r, t.r);
            case"sector":
                return d(t, n, r);
            case"path":
                return m(t, n, r);
            case"polygon":
            case"star":
            case"isogon":
                return v(t, n, r);
            case"image":
                return!0
            }
    }
    function s(e, t, n, r, i) {
        return t.beginPath(), e.buildPath(t, n), t.closePath(), t.isPointInPath(r, i)
    }
    function o(e, n, r, i) {
        var s = n.__rect || e.getRect(n), o = t.getPixelContext(), a = t.getPixelOffset();
        return t.adjustCanvasSize(r, i), o.clearRect(s.x, s.y, s.width, s.height), o.beginPath(), e.brush(o, {style: n}), o.closePath(), u(o, r + a.x, i + a.y)
    }
    function u(e, t, n, r) {
        var i;
        typeof r != "undefined" ? (r = Math.floor((r || 1) / 2), i = e.getImageData(t - r, n - r, r + r, r + r).data) : i = e.getImageData(t, n, 1, 1).data;
        var s = i.length;
        while (s--)
            if (i[s] !== 0)
                return!0;
        return!1
    }
    function a(e, t, n, i) {
        return!r(e, t, n, i)
    }
    function f(e, t, n) {
        var r = e.xStart, i = e.yStart, s = e.xEnd, o = e.yEnd, u = Math.max(e.lineWidth, 5), a = 0, f = r;
        if (r === s)
            return Math.abs(t - r) <= u / 2;
        a = (i - o) / (r - s), f = (r * o - s * i) / (r - s);
        var l = (a * t - n + f) * (a * t - n + f) / (a * a + 1);
        return l <= u / 2 * u / 2
    }
    function l(e, t, n) {
        var r = e.pointList, i, s = !1;
        for (var o = 0, u = r.length - 1; o < u; o++) {
            i = {xStart: r[o][0], yStart: r[o][1], xEnd: r[o + 1][0], yEnd: r[o + 1][1], lineWidth: Math.max(e.lineWidth, 10)};
            if (!h({x: Math.min(i.xStart, i.xEnd) - i.lineWidth, y: Math.min(i.yStart, i.yEnd) - i.lineWidth, width: Math.abs(i.xStart - i.xEnd) + i.lineWidth, height: Math.abs(i.yStart - i.yEnd) + i.lineWidth}, t, n))
                continue;
            s = f(i, t, n);
            if (s)
                break
        }
        return s
    }
    function c(e, t, n) {
        return p(e, t, n, e.r) && !p({x: e.x, y: e.y}, t, n, e.r0 || 0) ? !0 : !1
    }
    function h(e, t, n) {
        return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height ? !0 : !1
    }
    function p(e, t, n, r) {
        return(t - e.x) * (t - e.x) + (n - e.y) * (n - e.y) < r * r
    }
    function d(e, t, n) {
        if (!p(e, t, n, e.r) || e.r0 > 0 && p({x: e.x, y: e.y}, t, n, e.r0))
            return!1;
        if (Math.abs(e.endAngle - e.startAngle) >= 360)
            return!0;
        var r = (360 - Math.atan2(n - e.y, t - e.x) / Math.PI * 180) % 360, i = (360 + e.endAngle) % 360, s = (360 + e.startAngle) % 360;
        return i > s ? r >= s && r <= i : !(r >= i && r <= s)
    }
    function v(e, t, n) {
        var r, i, s = e.pointList, o = s.length, u = !1, a = !0, f;
        for (r = 0; r < o; ++r)
            if (s[r][0] == t && s[r][1] == n) {
                a = !1, u = !0;
                break
            }
        if (a) {
            a = !1, u = !1;
            for (r = 0, i = o - 1; r < o; i = r++)
                if (s[r][1] < n && n < s[i][1] || s[i][1] < n && n < s[r][1]) {
                    if (t <= s[r][0] || t <= s[i][0]) {
                        f = (n - s[r][1]) * (s[i][0] - s[r][0]) / (s[i][1] - s[r][1]) + s[r][0];
                        if (t < f)
                            u = !u;
                        else if (t == f) {
                            u = !0;
                            break
                        }
                    }
                } else if (n == s[r][1]) {
                    if (t < s[r][0]) {
                        s[r][1] > s[i][1] ? --n : ++n;
                        break
                    }
                } else if (s[r][1] == s[i][1] && n == s[r][1] && (s[r][0] < t && t < s[i][0] || s[i][0] < t && t < s[r][0])) {
                    u = !0;
                    break
                }
        }
        return u
    }
    function m(t, r, i) {
        t.pointList || e("../shape").get("path").buildPath(n, t);
        var s = t.pointList, o = !1;
        for (var u = 0, a = s.length; u < a; u++) {
            o = v({pointList: s[u]}, r, i);
            if (o)
                break
        }
        return o
    }
    function g(e, r) {
        n || (n = t.getContext()), n.save(), r && (n.font = r), e = (e + "").split("\n");
        var i = 0;
        for (var s = 0, o = e.length; s < o; s++)
            i = Math.max(n.measureText(e[s]).width, i);
        return n.restore(), i
    }
    function y(e, r) {
        n || (n = t.getContext()), n.save(), r && (n.font = r), e = (e + "").split("\n");
        var i = (n.measureText("国").width + 2) * e.length;
        return n.restore(), i
    }
    var t = e("../tool/util"), n;
    return{isInside: r, isOutside: a, getTextWidth: g, getTextHeight: y}
}), define("zrender/tool/matrix", [], function() {
    var e = {create: function() {
            return[1, 0, 0, 1, 0, 0]
        }, identity: function(e) {
            e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0
        }, mul: function(e, t, n) {
            return e[0] = t[0] * n[0] + t[2] * n[1], e[1] = t[1] * n[0] + t[3] * n[1], e[2] = t[0] * n[2] + t[2] * n[3], e[3] = t[1] * n[2] + t[3] * n[3], e[4] = t[0] * n[4] + t[2] * n[5] + t[4], e[5] = t[1] * n[4] + t[3] * n[5] + t[5], e
        }, translate: function(e, t, n) {
            return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4] + n[0], e[5] = t[5] + n[1], e
        }, rotate: function(e, t, n) {
            var r = t[0], i = t[2], s = t[4], o = t[1], u = t[3], a = t[5], f = Math.sin(n), l = Math.cos(n);
            return e[0] = r * l + o * f, e[1] = -r * f + o * l, e[2] = i * l + u * f, e[3] = -i * f + l * u, e[4] = l * s + f * a, e[5] = l * a - f * s, e
        }, scale: function(e, t, n) {
            var r = n[0], i = n[1];
            return e[0] = t[0] * r, e[1] = t[1] * i, e[2] = t[2] * r, e[3] = t[3] * i, e[4] = t[4] * r, e[5] = t[5] * i, e
        }, invert: function(e, t) {
            var n = t[0], r = t[2], i = t[4], s = t[1], o = t[3], u = t[5], a = n * o - s * r;
            return a ? (a = 1 / a, e[0] = o * a, e[1] = -s * a, e[2] = -r * a, e[3] = n * a, e[4] = (r * u - o * i) * a, e[5] = (s * i - n * u) * a, e) : null
        }, mulVector: function(e, t, n) {
            var r = t[0], i = t[2], s = t[4], o = t[1], u = t[3], a = t[5];
            return e[0] = n[0] * r + n[1] * i + s, e[1] = n[0] * o + n[1] * u + a, e
        }};
    return e
}), define("zrender/tool/color", ["require", "../tool/util"], function(e) {
    function f(e) {
        r = e
    }
    function l() {
        r = i
    }
    function c(e, t) {
        return e = +e || 0, t = t || r, t[e % t.length]
    }
    function h(e) {
        s = e
    }
    function p() {
        o = s
    }
    function d() {
        return s
    }
    function v(e, r, i, s, o, u, a) {
        n || (n = t.getContext());
        var f = n.createRadialGradient(e, r, i, s, o, u);
        for (var l = 0, c = a.length; l < c; l++)
            f.addColorStop(a[l][0], a[l][1]);
        return f.__nonRecursion = !0, f
    }
    function m(e, r, i, s, o) {
        n || (n = t.getContext());
        var u = n.createLinearGradient(e, r, i, s);
        for (var a = 0, f = o.length; a < f; a++)
            u.addColorStop(o[a][0], o[a][1]);
        return u.__nonRecursion = !0, u
    }
    function g(e, t, n) {
        e = S(e), t = S(t), e = F(e), t = F(t);
        var r = [], i = (t[0] - e[0]) / n, s = (t[1] - e[1]) / n, o = (t[2] - e[2]) / n;
        for (var u = 0, a = e[0], f = e[1], l = e[2]; u < n; u++)
            r[u] = b([R(Math.floor(a), [0, 255]), R(Math.floor(f), [0, 255]), R(Math.floor(l), [0, 255])]), a += i, f += s, l += o;
        return a = t[0], f = t[1], l = t[2], r[u] = b([a, f, l]), r
    }
    function y(e, t) {
        var n = [], r = e.length;
        t === undefined && (t = 20);
        if (r === 1)
            n = g(e[0], e[0], t);
        else if (r > 1)
            for (var i = 0, s = r - 1; i < s; i++) {
                var o = g(e[i], e[i + 1], t);
                i < s - 1 && o.pop(), n = n.concat(o)
            }
        return n
    }
    function b(e, t) {
        t = t || "rgb";
        if (e && (e.length === 3 || e.length === 4)) {
            e = q(e, function(e) {
                return e > 1 ? Math.ceil(e) : e
            });
            if (t.indexOf("hex") > -1)
                return e = q(e.slice(0, 3), function(e) {
                    return e = Number(e).toString(16), e.length === 1 ? "0" + e : e
                }), "#" + e.join("");
            if (t.indexOf("hs") > -1) {
                var n = q(e.slice(1, 3), function(e) {
                    return e + "%"
                });
                e[1] = n[0], e[2] = n[1]
            }
            return t.indexOf("a") > -1 ? (e.length === 3 && e.push(1), e[3] = R(e[3], [0, 1]), t + "(" + e.slice(0, 4).join(",") + ")") : t + "(" + e.slice(0, 3).join(",") + ")"
        }
    }
    function w(e) {
        e = _(e), e.indexOf("#") > -1 && (e = x(e));
        var t = e.replace(/[rgbahsvl%\(\)]/ig, "").split(",");
        return t = q(t, function(e) {
            return Number(e)
        }), t
    }
    function E(e, t) {
        var n = F(e), r = n[3];
        return typeof r == "undefined" && (r = 1), e.indexOf("hsb") > -1 ? n = U(n) : e.indexOf("hsl") > -1 && (n = z(n)), t.indexOf("hsb") > -1 || t.indexOf("hsv") > -1 ? n = X(n) : t.indexOf("hsl") > -1 && (n = V(n)), n[3] = r, b(n, t)
    }
    function S(e) {
        return E(e, "rgba")
    }
    function x(e) {
        return E(e, "rgb")
    }
    function T(e) {
        return E(e, "hex")
    }
    function N(e) {
        return E(e, "hsva")
    }
    function C(e) {
        return E(e, "hsv")
    }
    function k(e) {
        return E(e, "hsba")
    }
    function L(e) {
        return E(e, "hsb")
    }
    function A(e) {
        return E(e, "hsla")
    }
    function O(e) {
        return E(e, "hsl")
    }
    function M(e) {
        for (var t in a)
            if (T(a[t]) === T(e))
                return t;
        return null
    }
    function _(e) {
        return e = String(e), e = e.replace(/(^\s*)|(\s*$)/g, ""), /^[^#]*?$/i.test(e) && (e = e.replace(/\s/g, "")), e
    }
    function D(e) {
        a[e] && (e = a[e]), e = _(e), e = e.replace(/hsv/i, "hsb");
        if (/^#[0-9a-f]{3}$/i.test(e)) {
            var t = e.replace("#", "").split("");
            e = "#" + t[0] + t[0] + t[1] + t[1] + t[2] + t[2]
        }
        return e
    }
    function P(e, t) {
        var n = t > 0 ? 1 : -1;
        typeof t == "undefined" && (t = 0), t = Math.abs(t) > 1 ? 1 : Math.abs(t), e = x(e);
        var r = F(e);
        for (var i = 0; i < 3; i++)
            n === 1 ? r[i] = Math.floor(r[i] * (1 - t)) : r[i] = Math.floor((255 - r[i]) * t + r[i]);
        return"rgb(" + r.join(",") + ")"
    }
    function H(e) {
        var t = F(S(e));
        return t = q(t, function(e) {
            return 255 - e
        }), b(t, "rgb")
    }
    function B(e, t, n) {
        typeof n == "undefined" && (n = .5), n = 1 - R(n, [0, 1]);
        var r = n * 2 - 1, i = F(S(e)), s = F(S(t)), o = i[3] - s[3], u = ((r * o === -1 ? r : (r + o) / (1 + r * o)) + 1) / 2, a = 1 - u, f = [];
        for (var l = 0; l < 3; l++)
            f[l] = i[l] * u + s[l] * a;
        var c = i[3] * n + s[3] * (1 - n);
        return c = Math.max(0, Math.min(1, c)), i[3] === 1 && s[3] === 1 ? b(f, "rgb") : (f[3] = c, b(f, "rgba"))
    }
    function j() {
        return T("rgb(" + Math.round(Math.random() * 256) + "," + Math.round(Math.random() * 256) + "," + Math.round(Math.random() * 256) + ")")
    }
    function F(e) {
        e = D(e);
        var t = e.match(u);
        if (t === null)
            throw new Error("The color format error");
        var n, r, i = [], s;
        if (t[2])
            n = t[2].replace("#", "").split(""), s = [n[0] + n[1], n[2] + n[3], n[4] + n[5]], i = q(s, function(e) {
                return R(parseInt(e, 16), [0, 255])
            });
        else if (t[4]) {
            var o = t[4].split(",");
            r = o[3], s = o.slice(0, 3), i = q(s, function(e) {
                return e = Math.floor(e.indexOf("%") > 0 ? parseInt(e, 0) * 2.55 : e), R(e, [0, 255])
            }), typeof r != "undefined" && i.push(R(parseFloat(r), [0, 1]))
        } else if (t[5] || t[6]) {
            var a = (t[5] || t[6]).split(","), f = parseInt(a[0], 0) / 360, l = a[1], c = a[2];
            r = a[3], i = q([l, c], function(e) {
                return R(parseFloat(e) / 100, [0, 1])
            }), i.unshift(f), typeof r != "undefined" && i.push(R(parseFloat(r), [0, 1]))
        }
        return i
    }
    function I(e, t) {
        t === null && (t = 1);
        var n = F(S(e));
        return n[3] = R(Number(t).toFixed(4), [0, 1]), b(n, "rgba")
    }
    function q(e, t) {
        if (typeof t != "function")
            throw new TypeError;
        var n = e ? e.length : 0;
        for (var r = 0; r < n; r++)
            e[r] = t(e[r]);
        return e
    }
    function R(e, t) {
        return e <= t[0] ? e = t[0] : e >= t[1] && (e = t[1]), e
    }
    function U(e) {
        var t = e[0], n = e[1], r = e[2], i, s, o;
        if (n === 0)
            i = r * 255, s = r * 255, o = r * 255;
        else {
            var u = t * 6;
            u === 6 && (u = 0);
            var a = Math.floor(u), f = r * (1 - n), l = r * (1 - n * (u - a)), c = r * (1 - n * (1 - (u - a))), h = 0, p = 0, d = 0;
            a === 0 ? (h = r, p = c, d = f) : a === 1 ? (h = l, p = r, d = f) : a === 2 ? (h = f, p = r, d = c) : a === 3 ? (h = f, p = l, d = r) : a === 4 ? (h = c, p = f, d = r) : (h = r, p = f, d = l), i = h * 255, s = p * 255, o = d * 255
        }
        return[i, s, o]
    }
    function z(e) {
        var t = e[0], n = e[1], r = e[2], i, s, o;
        if (n === 0)
            i = r * 255, s = r * 255, o = r * 255;
        else {
            var u;
            r < .5 ? u = r * (1 + n) : u = r + n - n * r;
            var a = 2 * r - u;
            i = 255 * W(a, u, t + 1 / 3), s = 255 * W(a, u, t), o = 255 * W(a, u, t - 1 / 3)
        }
        return[i, s, o]
    }
    function W(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), 6 * n < 1 ? e + (t - e) * 6 * n : 2 * n < 1 ? t : 3 * n < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
    }
    function X(e) {
        var t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, i = Math.min(t, n, r), s = Math.max(t, n, r), o = s - i, u = s, a, f;
        if (o === 0)
            a = 0, f = 0;
        else {
            f = o / s;
            var l = ((s - t) / 6 + o / 2) / o, c = ((s - n) / 6 + o / 2) / o, h = ((s - r) / 6 + o / 2) / o;
            t === s ? a = h - c : n === s ? a = 1 / 3 + l - h : r === s && (a = 2 / 3 + c - l), a < 0 && (a += 1), a > 1 && (a -= 1)
        }
        return a *= 360, f *= 100, u *= 100, [a, f, u]
    }
    function V(e) {
        var t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, i = Math.min(t, n, r), s = Math.max(t, n, r), o = s - i, u = (s + i) / 2, a, f;
        if (o === 0)
            a = 0, f = 0;
        else {
            u < .5 ? f = o / (s + i) : f = o / (2 - s - i);
            var l = ((s - t) / 6 + o / 2) / o, c = ((s - n) / 6 + o / 2) / o, h = ((s - r) / 6 + o / 2) / o;
            t === s ? a = h - c : n === s ? a = 1 / 3 + l - h : r === s && (a = 2 / 3 + c - l), a < 0 && (a += 1), a > 1 && (a -= 1)
        }
        return a *= 360, f *= 100, u *= 100, [a, f, u]
    }
    var t = e("../tool/util"), n, r = ["#ff9277", " #dddd00", " #ffc877", " #bbe3ff", " #d5ffbb", "#bbbbff", " #ddb000", " #b0dd00", " #e2bbff", " #ffbbe3", "#ff7777", " #ff9900", " #83dd00", " #77e3ff", " #778fff", "#c877ff", " #ff77ab", " #ff6600", " #aa8800", " #77c7ff", "#ad77ff", " #ff77ff", " #dd0083", " #777700", " #00aa00", "#0088aa", " #8400dd", " #aa0088", " #dd0000", " #772e00"], i = r, s = "rgba(255,255,0,0.5)", o = s, u = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i, a = {aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#0ff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000", blanchedalmond: "#ffebcd", blue: "#00f", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#0ff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgrey: "#a9a9a9", darkgreen: "#006400", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#f0f", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#adff2f", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgrey: "#d3d3d3", lightgreen: "#90ee90", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#789", lightslategrey: "#789", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#0f0", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#f0f", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370d8", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#d87093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", red: "#f00", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#fff", whitesmoke: "#f5f5f5", yellow: "#ff0", yellowgreen: "#9acd32"};
    return{customPalette: f, resetPalette: l, getColor: c, getHighlightColor: d, customHighlight: h, resetHighlight: p, getRadialGradient: v, getLinearGradient: m, getGradientColors: y, getStepColors: g, reverse: H, mix: B, lift: P, trim: _, random: j, toRGB: x, toRGBA: S, toHex: T, toHSL: O, toHSLA: A, toHSB: L, toHSBA: k, toHSV: C, toHSVA: N, toName: M, toColor: b, toArray: w, alpha: I, getData: F}
}), define("zrender/shape/base", ["require", "../tool/area", "../tool/matrix", "../tool/vector", "../tool/color"], function(e) {
    function s(e) {
        var n = ["brush", "setContext", "dashedLineTo", "smoothBezier", "smoothSpline", "drawText", "getHighlightStyle", "getHighlightZoom", "drift", "isCover", "updateTransform"], r = n.length, i = e.prototype, s = 0, o;
        for (; s < r; s++)
            o = n[s], i[o] || (i[o] = t[o])
    }
    function o(e, t, n) {
        var r = t.style || {};
        this.brushTypeOnly && (r.brushType = this.brushTypeOnly), n && (r = this.getHighlightStyle(r, t.highlightStyle || {}, this.brushTypeOnly)), this.brushTypeOnly == "stroke" && (r.strokeColor = r.strokeColor || r.color), e.save(), this.setContext(e, r), t.__needTransform && e.transform.apply(e, this.updateTransform(t)), e.beginPath(), this.buildPath(e, r), this.brushTypeOnly != "stroke" && e.closePath();
        switch (r.brushType) {
            case"fill":
                e.fill();
                break;
            case"stroke":
                r.lineWidth > 0 && e.stroke();
                break;
            case"both":
                e.fill(), r.lineWidth > 0 && e.stroke();
                break;
            default:
                e.fill()
        }
        typeof r.text != "undefined" && this.drawText(e, r, t.style), e.restore();
        return
    }
    function u(e, t) {
        t.color && (e.fillStyle = t.color), t.strokeColor && (e.strokeStyle = t.strokeColor), typeof t.opacity != "undefined" && (e.globalAlpha = t.opacity), t.lineCap && (e.lineCap = t.lineCap), t.lineJoin && (e.lineJoin = t.lineJoin), t.miterLimit && (e.miterLimit = t.miterLimit), typeof t.lineWidth != "undefined" && (e.lineWidth = t.lineWidth), typeof t.shadowBlur != "undefined" && (e.shadowBlur = t.shadowBlur), t.shadowColor && (e.shadowColor = t.shadowColor), typeof t.shadowOffsetX != "undefined" && (e.shadowOffsetX = t.shadowOffsetX), typeof t.shadowOffsetY != "undefined" && (e.shadowOffsetY = t.shadowOffsetY)
    }
    function a(e, t, n, r, i, s) {
        s = typeof s == "undefined" ? 5 : s;
        var o = r - t, u = i - n, a = Math.floor(Math.sqrt(o * o + u * u) / s);
        for (var f = 0; f < a; ++f)
            e[f % 2 === 0 ? "moveTo" : "lineTo"](t + o / a * f, n + u / a * f)
    }
    function f(e, t, n) {
        var r = e.length, s = [], o = [], u = [], a = [], f, l;
        for (var c = 0; c < r; c++) {
            var h = e[c], f, l;
            if (n)
                f = e[c === 0 ? r - 1 : c - 1], l = e[(c + 1) % r];
            else {
                if (c === 0 || c === r - 1) {
                    s.push(e[c]);
                    continue
                }
                f = e[c - 1], l = e[c + 1]
            }
            i.sub(o, l, f), i.scale(o, o, t);
            var p = i.distance(h, f), d = i.distance(h, l), v = p + d;
            p /= v, d /= v, i.scale(u, o, -p), i.scale(a, o, d), s.push(i.add([], h, u)), s.push(i.add([], h, a))
        }
        return n && s.push(s.shift()), s
    }
    function l(e, t) {
        var n = e.length, r = [], s = 0;
        for (var o = 1; o < n; o++)
            s += i.distance(e[o - 1], e[o]);
        var u = s / 5;
        u = u < n ? n : u;
        for (var o = 0; o < u; o++) {
            var a;
            t ? a = o / (u - 1) * n : a = o / (u - 1) * (n - 1);
            var f = Math.floor(a), l = a - f, h, p = e[f % n], d, v;
            t ? (h = e[(f - 1 + n) % n], d = e[(f + 1) % n], v = e[(f + 2) % n]) : (h = e[f === 0 ? f : f - 1], d = e[f > n - 2 ? n - 1 : f + 1], v = e[f > n - 3 ? n - 1 : f + 2]);
            var m = l * l, g = l * m;
            r.push([c(h[0], p[0], d[0], v[0], l, m, g), c(h[1], p[1], d[1], v[1], l, m, g)])
        }
        return r
    }
    function c(e, t, n, r, i, s, o) {
        var u = (n - e) * .5, a = (r - t) * .5;
        return(2 * (t - n) + u + a) * o + (-3 * (t - n) - 2 * u - a) * s + u * i + t
    }
    function h(e, t, n) {
        t.textColor = t.textColor || t.color || t.strokeColor, e.fillStyle = t.textColor, t.textPosition == "inside" && (e.shadowColor = "rgba(0,0,0,0)");
        var r = 10, i, s, o, u, a = t.textPosition || this.textPosition || "top";
        if (a != "inside" && a != "top" && a != "bottom" && a != "left" && a != "right" || !this.getRect)
            if (a == "start" || a == "end") {
                var l, c, h, d;
                if (typeof t.pointList != "undefined") {
                    var v = t.pointList;
                    if (v.length < 2)
                        return;
                    var m = v.length;
                    switch (a) {
                        case"start":
                            l = v[0][0], c = v[1][0], h = v[0][1], d = v[1][1];
                            break;
                        case"end":
                            l = v[m - 2][0], c = v[m - 1][0], h = v[m - 2][1], d = v[m - 1][1]
                        }
                } else
                    l = t.xStart || 0, c = t.xEnd || 0, h = t.yStart || 0, d = t.yEnd || 0;
                switch (a) {
                    case"start":
                        i = l < c ? "end" : "start", s = h < d ? "bottom" : "top", o = l, u = h;
                        break;
                    case"end":
                        i = l < c ? "start" : "end", s = h < d ? "top" : "bottom", o = c, u = d
                }
                r -= 4, l != c ? o -= i == "end" ? r : -r : i = "center", h != d ? u -= s == "bottom" ? r : -r : s = "middle"
            } else
                a == "specific" && (o = t.textX || 0, u = t.textY || 0, i = "start", s = "middle");
        else {
            var f = (n || t).__rect || this.getRect(n || t);
            switch (a) {
                case"inside":
                    o = f.x + f.width / 2, u = f.y + f.height / 2, i = "center", s = "middle", t.brushType != "stroke" && t.textColor == t.color && (e.fillStyle = "#fff");
                    break;
                case"left":
                    o = f.x - r, u = f.y + f.height / 2, i = "end", s = "middle";
                    break;
                case"right":
                    o = f.x + f.width + r, u = f.y + f.height / 2, i = "start", s = "middle";
                    break;
                case"top":
                    o = f.x + f.width / 2, u = f.y - r, i = "center", s = "bottom";
                    break;
                case"bottom":
                    o = f.x + f.width / 2, u = f.y + f.height + r, i = "center", s = "top"
                }
        }
        typeof o != "undefined" && typeof u != "undefined" && p(e, t.text, o, u, t.textFont, t.textAlign || i, t.textBaseline || s)
    }
    function p(e, t, r, i, s, o, u) {
        s && (e.font = s), e.textAlign = o, e.textBaseline = u;
        var a = d(t, r, i, s, o, u);
        t = (t + "").split("\n");
        var f = n.getTextHeight("国", s), r = r, i;
        u == "top" ? i = a.y : u == "bottom" ? i = a.y + f : i = a.y + f / 2;
        for (var l = 0, c = t.length; l < c; l++)
            e.fillText(t[l], r, i), i += f
    }
    function d(e, t, r, i, s, o) {
        var u = n.getTextWidth(e, i), a = n.getTextHeight("国", i);
        e = (e + "").split("\n");
        var f = t;
        s == "end" || s == "right" ? f -= u : s == "center" && (f -= u / 2);
        var l;
        return o == "top" ? l = r : o == "bottom" ? l = r - a * e.length : l = r - a * e.length / 2, {x: f, y: l, width: u, height: a * e.length}
    }
    function v(t, n, r) {
        var i = {};
        for (var s in t)
            i[s] = t[s];
        var o = e("../tool/color"), u = o.getHighlightColor();
        t.brushType != "stroke" ? (i.strokeColor = u, i.lineWidth = (t.lineWidth || 1) + this.getHighlightZoom(), i.brushType = "both") : r != "stroke" ? (i.strokeColor = u, i.lineWidth = (t.lineWidth || 1) + this.getHighlightZoom()) : i.strokeColor = n.strokeColor || o.mix(t.strokeColor, o.toRGB(u));
        for (var s in n)
            typeof n[s] != "undefined" && (i[s] = n[s]);
        return i
    }
    function m() {
        return this.type != "text" ? 6 : 2
    }
    function g(e, t, n) {
        e.position[0] += t, e.position[1] += n
    }
    function y(e, t, i) {
        if (e.__needTransform && e._transform) {
            var s = [];
            r.invert(s, e._transform);
            var o = [t, i];
            r.mulVector(o, s, [t, i, 1]), t == o[0] && i == o[1] && (Math.abs(e.rotation[0]) > 1e-4 || Math.abs(e.position[0]) > 1e-4 || Math.abs(e.position[1]) > 1e-4 || Math.abs(e.scale[0] - 1) > 1e-4 || Math.abs(e.scale[1] - 1) > 1e-4 ? e.__needTransform = !0 : e.__needTransform = !1), t = o[0], i = o[1]
        }
        var u;
        return e.style.__rect ? u = e.style.__rect : (u = this.getRect(e.style), e.style.__rect = u), t >= u.x && t <= u.x + u.width && i >= u.y && i <= u.y + u.height ? n.isInside(this, e.style, t, i) : !1
    }
    function b(e) {
        var t = e._transform || r.create();
        r.identity(t);
        if (e.scale && (e.scale[0] !== 1 || e.scale[1] !== 1)) {
            var n = e.scale[2] || 0, i = e.scale[3] || 0;
            (n || i) && r.translate(t, t, [-n, -i]), r.scale(t, t, e.scale), (n || i) && r.translate(t, t, [n, i])
        }
        if (e.rotation)
            if (e.rotation instanceof Array) {
                if (e.rotation[0] !== 0) {
                    var n = e.rotation[1] || 0, i = e.rotation[2] || 0;
                    (n || i) && r.translate(t, t, [-n, -i]), r.rotate(t, t, e.rotation[0]), (n || i) && r.translate(t, t, [n, i])
                }
            } else
                e.rotation !== 0 && r.rotate(t, t, e.rotation);
        return e.position && (e.position[0] !== 0 || e.position[1] !== 0) && r.translate(t, t, e.position), e._transform = t, t
    }
    var t, n = e("../tool/area"), r = e("../tool/matrix"), i = e("../tool/vector");
    return t = {derive: s, brush: o, setContext: u, dashedLineTo: a, smoothBezier: f, smoothSpline: l, drawText: h, getHighlightStyle: v, getHighlightZoom: m, drift: g, isCover: y, updateTransform: b}, t
}), define("zrender/shape/circle", ["require", "./base", "../shape"], function(e) {
    function t() {
        this.type = "circle"
    }
    t.prototype = {buildPath: function(e, t) {
            e.arc(t.x, t.y, t.r, 0, Math.PI * 2, !0);
            return
        }, getRect: function(e) {
            var t;
            return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, {x: Math.round(e.x - e.r - t / 2), y: Math.round(e.y - e.r - t / 2), width: e.r * 2 + t, height: e.r * 2 + t}
        }};
    var n = e("./base");
    n.derive(t);
    var r = e("../shape");
    return r.define("circle", new t), t
}), define("zrender/shape/ellipse", ["require", "./base", "../shape"], function(e) {
    function t() {
        this.type = "ellipse"
    }
    t.prototype = {buildPath: function(e, t) {
            var n = .5522848, r = t.x, i = t.y, s = t.a, o = t.b, u = s * n, a = o * n;
            e.moveTo(r - s, i), e.bezierCurveTo(r - s, i - a, r - u, i - o, r, i - o), e.bezierCurveTo(r + u, i - o, r + s, i - a, r + s, i), e.bezierCurveTo(r + s, i + a, r + u, i + o, r, i + o), e.bezierCurveTo(r - u, i + o, r - s, i + a, r - s, i);
            return
        }, getRect: function(e) {
            var t;
            return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, {x: Math.round(e.x - e.a - t / 2), y: Math.round(e.y - e.b - t / 2), width: e.a * 2 + t, height: e.b * 2 + t}
        }};
    var n = e("./base");
    n.derive(t);
    var r = e("../shape");
    return r.define("ellipse", new t), t
}), define("zrender/shape/line", ["require", "./base", "../shape"], function(e) {
    function t() {
        this.type = "line", this.brushTypeOnly = "stroke", this.textPosition = "end"
    }
    t.prototype = {buildPath: function(e, t) {
            if (!t.lineType || t.lineType == "solid")
                e.moveTo(t.xStart, t.yStart), e.lineTo(t.xEnd, t.yEnd);
            else if (t.lineType == "dashed" || t.lineType == "dotted") {
                var n = (t.lineWidth || 1) * (t.lineType == "dashed" ? 5 : 1);
                this.dashedLineTo(e, t.xStart, t.yStart, t.xEnd, t.yEnd, n)
            }
        }, getRect: function(e) {
            var t = e.lineWidth || 1;
            return{x: Math.min(e.xStart, e.xEnd) - t, y: Math.min(e.yStart, e.yEnd) - t, width: Math.abs(e.xStart - e.xEnd) + t, height: Math.abs(e.yStart - e.yEnd) + t}
        }};
    var n = e("./base");
    n.derive(t);
    var r = e("../shape");
    return r.define("line", new t), t
}), define("zrender/shape/polygon", ["require", "./base", "../shape"], function(e) {
    function t() {
        this.type = "polygon"
    }
    t.prototype = {brush: function(e, t, n) {
            var r = t.style || {};
            n && (r = this.getHighlightStyle(r, t.highlightStyle || {})), e.save(), this.setContext(e, r), t.__needTransform && e.transform.apply(e, this.updateTransform(t));
            var i = !1;
            if (r.brushType == "fill" || r.brushType == "both" || typeof r.brushType == "undefined")
                e.beginPath(), r.lineType == "dashed" || r.lineType == "dotted" ? (this.buildPath(e, {lineType: "solid", lineWidth: r.lineWidth, pointList: r.pointList}), i = !1) : (this.buildPath(e, r), i = !0), e.closePath(), e.fill();
            r.lineWidth > 0 && (r.brushType == "stroke" || r.brushType == "both") && (i || (e.beginPath(), this.buildPath(e, r), e.closePath()), e.stroke()), r.text && this.drawText(e, r, t.style), e.restore();
            return
        }, buildPath: function(e, t) {
            var n = t.pointList, r = n[0], i = n[n.length - 1];
            r && i && r[0] == i[0] && r[1] == i[1] && n.pop();
            if (n.length < 2)
                return;
            if (t.smooth && t.smooth !== "spline") {
                var s = this.smoothBezier(n, t.smooth, !0);
                e.moveTo(n[0][0], n[0][1]);
                var o, u, a, f = n.length;
                for (var l = 0; l < f; l++)
                    o = s[l * 2], u = s[l * 2 + 1], a = n[(l + 1) % f], e.bezierCurveTo(o[0], o[1], u[0], u[1], a[0], a[1])
            } else {
                t.smooth === "spline" && (n = this.smoothSpline(n, !0));
                if (!t.lineType || t.lineType == "solid") {
                    e.moveTo(n[0][0], n[0][1]);
                    for (var l = 1, c = n.length; l < c; l++)
                        e.lineTo(n[l][0], n[l][1]);
                    e.lineTo(n[0][0], n[0][1])
                } else if (t.lineType == "dashed" || t.lineType == "dotted") {
                    var h = t._dashLength || (t.lineWidth || 1) * (t.lineType == "dashed" ? 5 : 1);
                    t._dashLength = h, e.moveTo(n[0][0], n[0][1]);
                    for (var l = 1, c = n.length; l < c; l++)
                        this.dashedLineTo(e, n[l - 1][0], n[l - 1][1], n[l][0], n[l][1], h);
                    this.dashedLineTo(e, n[n.length - 1][0], n[n.length - 1][1], n[0][0], n[0][1], h)
                }
            }
            return
        }, getRect: function(e) {
            var t = Number.MAX_VALUE, n = Number.MIN_VALUE, r = Number.MAX_VALUE, i = Number.MIN_VALUE, s = e.pointList;
            for (var o = 0, u = s.length; o < u; o++)
                s[o][0] < t && (t = s[o][0]), s[o][0] > n && (n = s[o][0]), s[o][1] < r && (r = s[o][1]), s[o][1] > i && (i = s[o][1]);
            var a;
            return e.brushType == "stroke" || e.brushType == "fill" ? a = e.lineWidth || 1 : a = 0, {x: Math.round(t - a / 2), y: Math.round(r - a / 2), width: n - t + a, height: i - r + a}
        }};
    var n = e("./base");
    n.derive(t);
    var r = e("../shape");
    return r.define("polygon", new t), t
}), define("zrender/shape/brokenLine", ["require", "../shape", "./base", "../shape"], function(e) {
    function t() {
        this.type = "brokenLine", this.brushTypeOnly = "stroke", this.textPosition = "end"
    }
    t.prototype = {buildPath: function(e, t) {
            var n = t.pointList;
            if (n.length < 2)
                return;
            if (t.smooth && t.smooth !== "spline") {
                var r = this.smoothBezier(n, t.smooth, !1);
                e.moveTo(n[0][0], n[0][1]);
                var i, s, o;
                for (var u = 0, a = n.length; u < a - 1; u++)
                    i = r[u * 2], s = r[u * 2 + 1], o = n[u + 1], e.bezierCurveTo(i[0], i[1], s[0], s[1], o[0], o[1])
            } else {
                t.smooth === "spline" && (n = this.smoothSpline(n, !1));
                if (!t.lineType || t.lineType == "solid") {
                    e.moveTo(n[0][0], n[0][1]);
                    for (var u = 1, a = n.length; u < a; u++)
                        e.lineTo(n[u][0], n[u][1])
                } else if (t.lineType == "dashed" || t.lineType == "dotted") {
                    var f = (t.lineWidth || 1) * (t.lineType == "dashed" ? 5 : 1);
                    e.moveTo(n[0][0], n[0][1]);
                    for (var u = 1, a = n.length; u < a; u++)
                        this.dashedLineTo(e, n[u - 1][0], n[u - 1][1], n[u][0], n[u][1], f)
                }
            }
            return
        }, getRect: function(t) {
            var n = e("../shape");
            return n.get("polygon").getRect(t)
        }};
    var n = e("./base");
    n.derive(t);
    var r = e("../shape");
    return r.define("brokenLine", new t), t
}), define("zrender/shape/rectangle", ["require", "./base", "../shape"], function(e) {
    function t() {
        this.type = "rectangle"
    }
    t.prototype = {_buildRadiusPath: function(e, t) {
            var n = t.x, r = t.y, i = t.width, s = t.height, o = t.radius, u, a, f, l;
            typeof o == "number" ? u = a = f = l = o : o instanceof Array ? o.length === 1 ? u = a = f = l = o[0] : o.length === 2 ? (u = f = o[0], a = l = o[1]) : o.length === 3 ? (u = o[0], a = l = o[1], f = o[2]) : (u = o[0], a = o[1], f = o[2], l = o[3]) : u = a = f = l = 0, e.moveTo(n + u, r), e.lineTo(n + i - a, r), a !== 0 && e.quadraticCurveTo(n + i, r, n + i, r + a), e.lineTo(n + i, r + s - f), f !== 0 && e.quadraticCurveTo(n + i, r + s, n + i - f, r + s), e.lineTo(n + l, r + s), l !== 0 && e.quadraticCurveTo(n, r + s, n, r + s - l), e.lineTo(n, r + u), u !== 0 && e.quadraticCurveTo(n, r, n + u, r)
        }, buildPath: function(e, t) {
            t.radius ? this._buildRadiusPath(e, t) : (e.moveTo(t.x, t.y), e.lineTo(t.x + t.width, t.y), e.lineTo(t.x + t.width, t.y + t.height), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x, t.y));
            return
        }, getRect: function(e) {
            var t;
            return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, {x: Math.round(e.x - t / 2), y: Math.round(e.y - t / 2), width: e.width + t, height: e.height + t}
        }};
    var n = e("./base");
    n.derive(t);
    var r = e("../shape");
    return r.define("rectangle", new t), t
}), define("zrender/shape/ring", ["require", "./base", "../shape"], function(e) {
    function t() {
        this.type = "ring"
    }
    t.prototype = {buildPath: function(e, t) {
            e.arc(t.x, t.y, t.r, 0, Math.PI * 2, !1), e.moveTo(t.x + t.r0, t.y), e.arc(t.x, t.y, t.r0, 0, Math.PI * 2, !0);
            return
        }, getRect: function(e) {
            var t;
            return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, {x: Math.round(e.x - e.r - t / 2), y: Math.round(e.y - e.r - t / 2), width: e.r * 2 + t, height: e.r * 2 + t}
        }};
    var n = e("./base");
    n.derive(t);
    var r = e("../shape");
    return r.define("ring", new t), t
}), define("zrender/tool/math", [], function() {
    function t(t, n) {
        return Math.sin(n ? t * e : t)
    }
    function n(t, n) {
        return Math.cos(n ? t * e : t)
    }
    function r(t) {
        return t * e
    }
    function i(t) {
        return t / e
    }
    var e = Math.PI / 180;
    return{sin: t, cos: n, degreeToRadian: r, radianToDegree: i}
}), define("zrender/shape/sector", ["require", "../tool/math", "../shape", "./base", "../shape"], function(e) {
    function n() {
        this.type = "sector"
    }
    var t = e("../tool/math");
    n.prototype = {buildPath: function(e, n) {
            var r = n.x, i = n.y, s = typeof n.r0 == "undefined" ? 0 : n.r0, o = n.r, u = n.startAngle, a = n.endAngle;
            if (Math.abs(a - u) >= 360) {
                e.arc(r, i, o, 0, Math.PI * 2, !1), s !== 0 && (e.moveTo(r + s, i), e.arc(r, i, s, 0, Math.PI * 2, !0));
                return
            }
            u = t.degreeToRadian(u), a = t.degreeToRadian(a);
            var f = Math.PI * 2, l = t.cos(u), c = t.sin(u);
            e.moveTo(l * s + r, i - c * s), e.lineTo(l * o + r, i - c * o), e.arc(r, i, o, f - u, f - a, !0), e.lineTo(t.cos(a) * s + r, i - t.sin(a) * s), s !== 0 && e.arc(r, i, s, f - a, f - u, !1);
            return
        }, getRect: function(n) {
            var r = e("../shape"), i = n.x, s = n.y, o = typeof n.r0 == "undefined" ? 0 : n.r0, u = n.r, a = n.startAngle, f = n.endAngle;
            if (Math.abs(f - a) >= 360)
                return r.get("ring").getRect(n);
            a = (720 + a) % 360, f = (720 + f) % 360, f <= a && (f += 360);
            var l = [];
            return a <= 90 && f >= 90 && l.push([i, s - u]), a <= 180 && f >= 180 && l.push([i - u, s]), a <= 270 && f >= 270 && l.push([i, s + u]), a <= 360 && f >= 360 && l.push([i + u, s]), a = t.degreeToRadian(a), f = t.degreeToRadian(f), l.push([t.cos(a) * o + i, s - t.sin(a) * o]), l.push([t.cos(a) * u + i, s - t.sin(a) * u]), l.push([t.cos(f) * u + i, s - t.sin(f) * u]), l.push([t.cos(f) * o + i, s - t.sin(f) * o]), r.get("polygon").getRect({brushType: n.brushType, lineWidth: n.lineWidth, pointList: l})
        }};
    var r = e("./base");
    r.derive(n);
    var i = e("../shape");
    return i.define("sector", new n), n
}), define("zrender/shape/text", ["require", "../tool/area", "./base", "../shape"], function(e) {
    function n() {
        this.type = "text"
    }
    var t = e("../tool/area");
    n.prototype = {brush: function(e, n, r) {
            var i = n.style || {};
            r && (i = this.getHighlightStyle(i, n.highlightStyle || {}));
            if (typeof i.text == "undefined")
                return;
            e.save(), this.setContext(e, i), n.__needTransform && e.transform.apply(e, this.updateTransform(n)), i.textFont && (e.font = i.textFont), e.textAlign = i.textAlign || "start", e.textBaseline = i.textBaseline || "middle";
            var s = (i.text + "").split("\n"), o = t.getTextHeight("国", i.textFont), u = this.getRect(i), a = i.x, f;
            i.textBaseline == "top" ? f = u.y : i.textBaseline == "bottom" ? f = u.y + o : f = u.y + o / 2;
            for (var l = 0, c = s.length; l < c; l++) {
                if (i.maxWidth)
                    switch (i.brushType) {
                        case"fill":
                            e.fillText(s[l], a, f, i.maxWidth);
                            break;
                        case"stroke":
                            e.strokeText(s[l], a, f, i.maxWidth);
                            break;
                        case"both":
                            e.fillText(s[l], a, f, i.maxWidth), e.strokeText(s[l], a, f, i.maxWidth);
                            break;
                        default:
                            e.fillText(s[l], a, f, i.maxWidth)
                    }
                else
                    switch (i.brushType) {
                        case"fill":
                            e.fillText(s[l], a, f);
                            break;
                        case"stroke":
                            e.strokeText(s[l], a, f);
                            break;
                        case"both":
                            e.fillText(s[l], a, f), e.strokeText(s[l], a, f);
                            break;
                        default:
                            e.fillText(s[l], a, f)
                    }
                f += o
            }
            e.restore();
            return
        }, getRect: function(e) {
            var n = t.getTextWidth(e.text, e.textFont), r = t.getTextHeight(e.text, e.textFont), i = e.x;
            e.textAlign == "end" || e.textAlign == "right" ? i -= n : e.textAlign == "center" && (i -= n / 2);
            var s;
            return e.textBaseline == "top" ? s = e.y : e.textBaseline == "bottom" ? s = e.y - r : s = e.y - r / 2, {x: i, y: s, width: n, height: r}
        }};
    var r = e("./base");
    r.derive(n);
    var i = e("../shape");
    return i.define("text", new n), n
}), define("zrender/shape/heart", ["require", "./base", "../shape"], function(e) {
    function t() {
        this.type = "heart"
    }
    t.prototype = {buildPath: function(e, t) {
            e.moveTo(t.x, t.y), e.bezierCurveTo(t.x + t.a / 2, t.y - t.b * 2 / 3, t.x + t.a * 2, t.y + t.b / 3, t.x, t.y + t.b), e.bezierCurveTo(t.x - t.a * 2, t.y + t.b / 3, t.x - t.a / 2, t.y - t.b * 2 / 3, t.x, t.y);
            return
        }, getRect: function(e) {
            var t;
            return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, {x: Math.round(e.x - e.a - t / 2), y: Math.round(e.y - e.b / 4 - t / 2), width: e.a * 2 + t, height: e.b * 5 / 4 + t}
        }};
    var n = e("./base");
    n.derive(t);
    var r = e("../shape");
    return r.define("heart", new t), t
}), define("zrender/shape/droplet", ["require", "./base", "../shape"], function(e) {
    function t() {
        this.type = "droplet"
    }
    t.prototype = {buildPath: function(e, t) {
            e.moveTo(t.x, t.y + t.a), e.bezierCurveTo(t.x + t.a, t.y + t.a, t.x + t.a * 3 / 2, t.y - t.a / 3, t.x, t.y - t.b), e.bezierCurveTo(t.x - t.a * 3 / 2, t.y - t.a / 3, t.x - t.a, t.y + t.a, t.x, t.y + t.a);
            return
        }, getRect: function(e) {
            var t;
            return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, {x: Math.round(e.x - e.a - t / 2), y: Math.round(e.y - e.b - t / 2), width: e.a * 2 + t, height: e.a + e.b + t}
        }};
    var n = e("./base");
    n.derive(t);
    var r = e("../shape");
    return r.define("droplet", new t), t
}), define("zrender/shape/path", ["require", "./base", "../shape"], function(e) {
    function t() {
        this.type = "path"
    }
    t.prototype = {_parsePathData: function(e) {
            if (!e)
                return[];
            var t = e, n = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"];
            t = t.replace(/-/g, " -"), t = t.replace(/  /g, " "), t = t.replace(/ /g, ","), t = t.replace(/,,/g, ",");
            var r;
            for (r = 0; r < n.length; r++)
                t = t.replace(new RegExp(n[r], "g"), "|" + n[r]);
            var i = t.split("|"), s = [], o = 0, u = 0;
            for (r = 1; r < i.length; r++) {
                var a = i[r], f = a.charAt(0);
                a = a.slice(1), a = a.replace(new RegExp("e,-", "g"), "e-");
                var l = a.split(",");
                l.length > 0 && l[0] === "" && l.shift();
                for (var c = 0; c < l.length; c++)
                    l[c] = parseFloat(l[c]);
                while (l.length > 0) {
                    if (isNaN(l[0]))
                        break;
                    var h = null, p = [], d, v, m, g, y, b, w, E, S = o, x = u;
                    switch (f) {
                        case"l":
                            o += l.shift(), u += l.shift(), h = "L", p.push(o, u);
                            break;
                        case"L":
                            o = l.shift(), u = l.shift(), p.push(o, u);
                            break;
                        case"m":
                            o += l.shift(), u += l.shift(), h = "M", p.push(o, u), f = "l";
                            break;
                        case"M":
                            o = l.shift(), u = l.shift(), h = "M", p.push(o, u), f = "L";
                            break;
                        case"h":
                            o += l.shift(), h = "L", p.push(o, u);
                            break;
                        case"H":
                            o = l.shift(), h = "L", p.push(o, u);
                            break;
                        case"v":
                            u += l.shift(), h = "L", p.push(o, u);
                            break;
                        case"V":
                            u = l.shift(), h = "L", p.push(o, u);
                            break;
                        case"C":
                            p.push(l.shift(), l.shift(), l.shift(), l.shift()), o = l.shift(), u = l.shift(), p.push(o, u);
                            break;
                        case"c":
                            p.push(o + l.shift(), u + l.shift(), o + l.shift(), u + l.shift()), o += l.shift(), u += l.shift(), h = "C", p.push(o, u);
                            break;
                        case"S":
                            d = o, v = u, m = s[s.length - 1], m.command === "C" && (d = o + (o - m.points[2]), v = u + (u - m.points[3])), p.push(d, v, l.shift(), l.shift()), o = l.shift(), u = l.shift(), h = "C", p.push(o, u);
                            break;
                        case"s":
                            d = o, v = u, m = s[s.length - 1], m.command === "C" && (d = o + (o - m.points[2]), v = u + (u - m.points[3])), p.push(d, v, o + l.shift(), u + l.shift()), o += l.shift(), u += l.shift(), h = "C", p.push(o, u);
                            break;
                        case"Q":
                            p.push(l.shift(), l.shift()), o = l.shift(), u = l.shift(), p.push(o, u);
                            break;
                        case"q":
                            p.push(o + l.shift(), u + l.shift()), o += l.shift(), u += l.shift(), h = "Q", p.push(o, u);
                            break;
                        case"T":
                            d = o, v = u, m = s[s.length - 1], m.command === "Q" && (d = o + (o - m.points[0]), v = u + (u - m.points[1])), o = l.shift(), u = l.shift(), h = "Q", p.push(d, v, o, u);
                            break;
                        case"t":
                            d = o, v = u, m = s[s.length - 1], m.command === "Q" && (d = o + (o - m.points[0]), v = u + (u - m.points[1])), o += l.shift(), u += l.shift(), h = "Q", p.push(d, v, o, u);
                            break;
                        case"A":
                            g = l.shift(), y = l.shift(), b = l.shift(), w = l.shift(), E = l.shift(), S = o, x = u, o = l.shift(), u = l.shift(), h = "A", p = this._convertPoint(S, x, o, u, w, E, g, y, b);
                            break;
                        case"a":
                            g = l.shift(), y = l.shift(), b = l.shift(), w = l.shift(), E = l.shift(), S = o, x = u, o += l.shift(), u += l.shift(), h = "A", p = this._convertPoint(S, x, o, u, w, E, g, y, b)
                    }
                    s.push({command: h || f, points: p})
                }
                (f === "z" || f === "Z") && s.push({command: "z", points: []})
            }
            return s
        }, _convertPoint: function(e, t, n, r, i, s, o, u, a) {
            var f = a * (Math.PI / 180), l = Math.cos(f) * (e - n) / 2 + Math.sin(f) * (t - r) / 2, c = -1 * Math.sin(f) * (e - n) / 2 + Math.cos(f) * (t - r) / 2, h = l * l / (o * o) + c * c / (u * u);
            h > 1 && (o *= Math.sqrt(h), u *= Math.sqrt(h));
            var p = Math.sqrt((o * o * u * u - o * o * c * c - u * u * l * l) / (o * o * c * c + u * u * l * l));
            i === s && (p *= -1), isNaN(p) && (p = 0);
            var d = p * o * c / u, v = p * -u * l / o, m = (e + n) / 2 + Math.cos(f) * d - Math.sin(f) * v, g = (t + r) / 2 + Math.sin(f) * d + Math.cos(f) * v, y = function(e) {
                return Math.sqrt(e[0] * e[0] + e[1] * e[1])
            }, b = function(e, t) {
                return(e[0] * t[0] + e[1] * t[1]) / (y(e) * y(t))
            }, w = function(e, t) {
                return(e[0] * t[1] < e[1] * t[0] ? -1 : 1) * Math.acos(b(e, t))
            }, E = w([1, 0], [(l - d) / o, (c - v) / u]), S = [(l - d) / o, (c - v) / u], x = [(-1 * l - d) / o, (-1 * c - v) / u], T = w(S, x);
            return b(S, x) <= -1 && (T = Math.PI), b(S, x) >= 1 && (T = 0), s === 0 && T > 0 && (T -= 2 * Math.PI), s === 1 && T < 0 && (T += 2 * Math.PI), [m, g, o, u, E, T, f, s]
        }, buildPath: function(e, t) {
            var n = t.path, r = this._parsePathData(n), i = t.x || 0, s = t.y || 0, o, u = t.pointList = [], a = [];
            for (var f = 0, l = r.length; f < l; f++) {
                r[f].command.toUpperCase() == "M" && (a.length > 0 && u.push(a), a = []), o = r[f].points;
                for (var c = 0, h = o.length; c < h; c += 2)
                    a.push([o[c] + i, o[c + 1] + s])
            }
            a.length > 0 && u.push(a);
            var p;
            for (var f = 0, l = r.length; f < l; f++) {
                p = r[f].command, o = r[f].points;
                for (var c = 0, h = o.length; c < h; c++)
                    c % 2 === 0 ? o[c] += i : o[c] += s;
                switch (p) {
                    case"L":
                        e.lineTo(o[0], o[1]);
                        break;
                    case"M":
                        e.moveTo(o[0], o[1]);
                        break;
                    case"C":
                        e.bezierCurveTo(o[0], o[1], o[2], o[3], o[4], o[5]);
                        break;
                    case"Q":
                        e.quadraticCurveTo(o[0], o[1], o[2], o[3]);
                        break;
                    case"A":
                        var d = o[0], v = o[1], m = o[2], g = o[3], y = o[4], b = o[5], w = o[6], E = o[7], S = m > g ? m : g, x = m > g ? 1 : m / g, T = m > g ? g / m : 1;
                        e.translate(d, v), e.rotate(w), e.scale(x, T), e.arc(0, 0, S, y, y + b, 1 - E), e.scale(1 / x, 1 / T), e.rotate(-w), e.translate(-d, -v);
                        break;
                    case"z":
                        e.closePath()
                    }
            }
            return
        }, getRect: function(e) {
            var t;
            e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0;
            var n = Number.MAX_VALUE, r = Number.MIN_VALUE, i = Number.MAX_VALUE, s = Number.MIN_VALUE, o = e.x || 0, u = e.y || 0, a = this._parsePathData(e.path);
            for (var f = 0; f < a.length; f++) {
                var l = a[f].points;
                for (var c = 0; c < l.length; c++)
                    c % 2 === 0 ? (l[c] + o < n && (n = l[c] + o), l[c] + o > r && (r = l[c] + o)) : (l[c] + u < i && (i = l[c] + u), l[c] + u > s && (s = l[c] + u))
            }
            var h;
            return n === Number.MAX_VALUE || r === Number.MIN_VALUE || i === Number.MAX_VALUE || s === Number.MIN_VALUE ? h = {x: 0, y: 0, width: 0, height: 0} : h = {x: Math.round(n - t / 2), y: Math.round(i - t / 2), width: r - n + t, height: s - i + t}, h
        }};
    var n = e("./base");
    n.derive(t);
    var r = e("../shape");
    return r.define("path", new t), t
}), define("zrender/shape/image", ["require", "./base", "../shape"], function(e) {
    function i() {
        this.type = "image"
    }
    var t = {}, n = [], r;
    i.prototype = {brush: function(e, i, s, o) {
            var u = i.style || {};
            s && (u = this.getHighlightStyle(u, i.highlightStyle || {}));
            var a = u.image;
            if (typeof a == "string") {
                var f = a;
                t[f] ? a = t[f] : (a = new Image, a.onload = function() {
                    a.onload = null, clearTimeout(r), n.push(i), r = setTimeout(function() {
                        o(n), n = []
                    }, 10)
                }, t[f] = a, a.src = f)
            }
            if (a) {
                if (window.ActiveXObject) {
                    if (a.readyState != "complete")
                        return
                } else if (!a.complete)
                    return;
                e.save(), this.setContext(e, u), i.__needTransform && e.transform.apply(e, this.updateTransform(i));
                var l = u.width || a.width, c = u.height || a.height, h = u.x, p = u.y;
                if (u.sWidth && u.sHeight) {
                    var d = u.sx || 0, v = u.sy || 0;
                    e.drawImage(a, d, v, u.sWidth, u.sHeight, h, p, l, c)
                } else if (u.sx && u.sy) {
                    var d = u.sx, v = u.sy, m = l - d, g = c - v;
                    e.drawImage(a, d, v, m, g, h, p, l, c)
                } else
                    e.drawImage(a, h, p, l, c);
                u.width = l, u.height = c, i.style.width = l, i.style.height = c, u.text && this.drawText(e, u, i.style), e.restore()
            }
            return
        }, buildPath: function(e, t) {
            e.rect(t.x, t.y, t.width, t.height);
            return
        }, getRect: function(e) {
            return{x: e.x, y: e.y, width: e.width, height: e.height}
        }};
    var s = e("./base");
    s.derive(i);
    var o = e("../shape");
    return o.define("image", new i), i
}), define("zrender/shape/beziercurve", ["require", "./base", "../shape"], function(e) {
    function t() {
        this.type = "beziercurve", this.brushTypeOnly = "stroke", this.textPosition = "end"
    }
    t.prototype = {buildPath: function(e, t) {
            e.moveTo(t.xStart, t.yStart), typeof t.cpX2 != "undefined" && typeof t.cpY2 != "undefined" ? e.bezierCurveTo(t.cpX1, t.cpY1, t.cpX2, t.cpY2, t.xEnd, t.yEnd) : e.quadraticCurveTo(t.cpX1, t.cpY1, t.xEnd, t.yEnd)
        }, getRect: function(e) {
            var t = Math.min(e.xStart, e.xEnd, e.cpX1), n = Math.min(e.yStart, e.yEnd, e.cpY1), r = Math.max(e.xStart, e.xEnd, e.cpX1), i = Math.max(e.yStart, e.yEnd, e.cpY1), s = e.cpX2, o = e.cpY2;
            typeof s != "undefined" && typeof o != "undefined" && (t = Math.min(t, s), n = Math.min(n, o), r = Math.max(r, s), i = Math.max(i, o));
            var u = e.lineWidth || 1;
            return{x: t - u, y: n - u, width: r - t + u, height: i - n + u}
        }};
    var n = e("./base");
    n.derive(t);
    var r = e("../shape");
    return r.define("beziercurve", new t), t
}), define("zrender/shape/star", ["require", "../tool/math", "./base", "../shape"], function(e) {
    function s() {
        this.type = "heart"
    }
    var t = e("../tool/math"), n = t.sin, r = t.cos, i = Math.PI;
    s.prototype = {buildPath: function(e, t) {
            var s = t.n;
            if (!s || s < 2)
                return;
            var o = t.x, u = t.y, a = t.r, f = t.r0;
            f == null && (f = s > 4 ? a * r(2 * i / s) / r(i / s) : a / 3);
            var l = i / s, c = -i / 2, h = o + a * r(c), p = u + a * n(c);
            c += l;
            var d = t.pointList = [];
            d.push([h, p]);
            for (var v = 0, m = s * 2 - 1, g; v < m; v++)
                g = v % 2 === 0 ? f : a, d.push([o + g * r(c), u + g * n(c)]), c += l;
            d.push([h, p]), e.moveTo(d[0][0], d[0][1]);
            for (var v = 0; v < d.length; v++)
                e.lineTo(d[v][0], d[v][1]);
            return
        }, getRect: function(e) {
            var t;
            return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, {x: Math.round(e.x - e.r - t / 2), y: Math.round(e.y - e.r - t / 2), width: e.r * 2 + t, height: e.r * 2 + t}
        }};
    var o = e("./base");
    o.derive(s);
    var u = e("../shape");
    return u.define("star", new s), s
}), define("zrender/shape/isogon", ["require", "../tool/math", "./base", "../shape"], function(e) {
    function s() {
        this.type = "isogon"
    }
    var t = e("../tool/math"), n = t.sin, r = t.cos, i = Math.PI;
    s.prototype = {buildPath: function(e, t) {
            var s = t.n;
            if (!s || s < 2)
                return;
            var o = t.x, u = t.y, a = t.r, f = 2 * i / s, l = -i / 2, c = o + a * r(l), h = u + a * n(l);
            l += f;
            var p = t.pointList = [];
            p.push([c, h]);
            for (var d = 0, v = s - 1; d < v; d++)
                p.push([o + a * r(l), u + a * n(l)]), l += f;
            p.push([c, h]), e.moveTo(p[0][0], p[0][1]);
            for (var d = 0; d < p.length; d++)
                e.lineTo(p[d][0], p[d][1]);
            return
        }, getRect: function(e) {
            var t;
            return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, {x: Math.round(e.x - e.r - t / 2), y: Math.round(e.y - e.r - t / 2), width: e.r * 2 + t, height: e.r * 2 + t}
        }};
    var o = e("./base");
    o.derive(s);
    var u = e("../shape");
    return u.define("isogon", new s), s
}), define("zrender/animation/easing", [], function() {
    var e = {Linear: function(e) {
            return e
        }, QuadraticIn: function(e) {
            return e * e
        }, QuadraticOut: function(e) {
            return e * (2 - e)
        }, QuadraticInOut: function(e) {
            return(e *= 2) < 1 ? .5 * e * e : -0.5 * (--e * (e - 2) - 1)
        }, CubicIn: function(e) {
            return e * e * e
        }, CubicOut: function(e) {
            return--e * e * e + 1
        }, CubicInOut: function(e) {
            return(e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
        }, QuarticIn: function(e) {
            return e * e * e * e
        }, QuarticOut: function(e) {
            return 1 - --e * e * e * e
        }, QuarticInOut: function(e) {
            return(e *= 2) < 1 ? .5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2)
        }, QuinticIn: function(e) {
            return e * e * e * e * e
        }, QuinticOut: function(e) {
            return--e * e * e * e * e + 1
        }, QuinticInOut: function(e) {
            return(e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
        }, SinusoidalIn: function(e) {
            return 1 - Math.cos(e * Math.PI / 2)
        }, SinusoidalOut: function(e) {
            return Math.sin(e * Math.PI / 2)
        }, SinusoidalInOut: function(e) {
            return.5 * (1 - Math.cos(Math.PI * e))
        }, ExponentialIn: function(e) {
            return e === 0 ? 0 : Math.pow(1024, e - 1)
        }, ExponentialOut: function(e) {
            return e === 1 ? 1 : 1 - Math.pow(2, -10 * e)
        }, ExponentialInOut: function(e) {
            return e === 0 ? 0 : e === 1 ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(2, -10 * (e - 1)) + 2)
        }, CircularIn: function(e) {
            return 1 - Math.sqrt(1 - e * e)
        }, CircularOut: function(e) {
            return Math.sqrt(1 - --e * e)
        }, CircularInOut: function(e) {
            return(e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }, ElasticIn: function(e) {
            var t, n = .1, r = .4;
            return e === 0 ? 0 : e === 1 ? 1 : (!n || n < 1 ? (n = 1, t = r / 4) : t = r * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * 2 * Math.PI / r)))
        }, ElasticOut: function(e) {
            var t, n = .1, r = .4;
            return e === 0 ? 0 : e === 1 ? 1 : (!n || n < 1 ? (n = 1, t = r / 4) : t = r * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * e) * Math.sin((e - t) * 2 * Math.PI / r) + 1)
        }, ElasticInOut: function(e) {
            var t, n = .1, r = .4;
            return e === 0 ? 0 : e === 1 ? 1 : (!n || n < 1 ? (n = 1, t = r / 4) : t = r * Math.asin(1 / n) / (2 * Math.PI), (e *= 2) < 1 ? -0.5 * n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * 2 * Math.PI / r) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * 2 * Math.PI / r) * .5 + 1)
        }, BackIn: function(e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t)
        }, BackOut: function(e) {
            var t = 1.70158;
            return--e * e * ((t + 1) * e + t) + 1
        }, BackInOut: function(e) {
            var t = 2.5949095;
            return(e *= 2) < 1 ? .5 * e * e * ((t + 1) * e - t) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
        }, BounceIn: function(t) {
            return 1 - e.BounceOut(1 - t)
        }, BounceOut: function(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }, BounceInOut: function(t) {
            return t < .5 ? e.BounceIn(t * 2) * .5 : e.BounceOut(t * 2 - 1) * .5 + .5
        }};
    return e
}), define("zrender/animation/clip", ["require", "./easing"], function(e) {
    var t = e("./easing"), n = function(e) {
        this._targetPool = e.target || {}, this._targetPool.constructor != Array && (this._targetPool = [this._targetPool]), this._life = e.life || 1e3, this._delay = e.delay || 0, this._startTime = (new Date).getTime() + this._delay, this._endTime = this._startTime + this._life * 1e3, this.loop = typeof e.loop == "undefined" ? !1 : e.loop, this.gap = e.gap || 0, this.easing = e.easing || "Linear", this.onframe = e.onframe || null, this.ondestroy = e.ondestroy || null, this.onrestart = e.onrestart || null
    };
    return n.prototype = {step: function(e) {
            var n = (e - this._startTime) / this._life;
            if (n < 0)
                return;
            n = Math.min(n, 1);
            var r = typeof this.easing == "string" ? t[this.easing] : this.easing, i;
            return typeof r == "function" ? i = r(n) : i = n, this.fire("frame", i), n == 1 ? this.loop ? (this.restart(), "restart") : (this._needsRemove = !0, "destroy") : null
        }, restart: function() {
            this._startTime = (new Date).getTime() + this.gap
        }, fire: function(e, t) {
            for (var n = 0, r = this._targetPool.length; n < r; n++)
                this["on" + e] && this["on" + e](this._targetPool[n], t)
        }}, n.prototype.constructor = n, n
}), define("zrender/animation/animation", ["require", "./clip"], function(e) {
    function s(e, t) {
        return e[t]
    }
    function o(e, t, n) {
        e[t] = n
    }
    function u(e, t, n) {
        return(t - e) * n + e
    }
    function a(e, t, n, r, i) {
        var s = e.length;
        if (i == 1)
            for (var o = 0; o < s; o++)
                r[o] = u(e[o], t[o], n);
        else {
            var a = e[0].length;
            for (var o = 0; o < s; o++)
                for (var f = 0; f < a; f++)
                    r[o][f] = u(e[o][f], t[o][f], n)
        }
    }
    function f(e) {
        return typeof e == "undefined" ? !1 : typeof e == "string" ? !1 : typeof e.length != "undefined"
    }
    function l(e, t, n, r, i, s, o, u, a) {
        var f = e.length;
        if (a == 1)
            for (var l = 0; l < f; l++)
                u[l] = c(e[l], t[l], n[l], r[l], i, s, o);
        else {
            var h = e[0].length;
            for (var l = 0; l < f; l++)
                for (var p = 0; p < h; p++)
                    u[l][p] = c(e[l][p], t[l][p], n[l][p], r[l][p], i, s, o)
        }
    }
    function c(e, t, n, r, i, s, o) {
        var u = (n - e) * .5, a = (r - t) * .5;
        return(2 * (t - n) + u + a) * o + (-3 * (t - n) - 2 * u - a) * s + u * i + t
    }
    function h(e, t, n, r) {
        this._tracks = {}, this._target = e, this._loop = t || !1, this._getter = n || s, this._setter = r || o, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
    }
    var t = e("./clip"), n = window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
        setTimeout(e, 16)
    }, r = Array.prototype.slice, i = function(e) {
        e = e || {}, this.stage = e.stage || {}, this.onframe = e.onframe || function() {
        }, this._clips = [], this._running = !1, this._time = 0
    };
    return i.prototype = {add: function(e) {
            this._clips.push(e)
        }, remove: function(e) {
            var t = this._clips.indexOf(e);
            t >= 0 && this._clips.splice(t, 1)
        }, update: function() {
            var e = (new Date).getTime(), t = this._clips, n = t.length, r = [], i = [];
            for (var s = 0; s < n; s++) {
                var o = t[s], u = o.step(e);
                u && (r.push(u), i.push(o))
            }
            this.stage && this.stage.update && this._clips.length && this.stage.update();
            for (var s = 0; s < n; )
                t[s]._needsRemove ? (t[s] = t[n - 1], t.pop(), n--) : s++;
            n = r.length;
            for (var s = 0; s < n; s++)
                i[s].fire(r[s]);
            this._time = e, this.onframe()
        }, start: function() {
            function t() {
                e._running && (e.update(), n(t))
            }
            var e = this;
            this._running = !0, n(t)
        }, stop: function() {
            this._running = !1
        }, clear: function() {
            this._clips = []
        }, animate: function(e, t) {
            t = t || {};
            var n = new h(e, t.loop, t.getter, t.setter);
            return n.animation = this, n
        }}, i.prototype.constructor = i, h.prototype = {when: function(e, t) {
            for (var n in t)
                this._tracks[n] || (this._tracks[n] = [], this._tracks[n].push({time: 0, value: this._getter(this._target, n)})), this._tracks[n].push({time: parseInt(e, 10), value: t[n]});
            return this
        }, during: function(e) {
            return this._onframeList.push(e), this
        }, start: function(e) {
            var n = this, i = this._setter, s = this._getter, o = n._onframeList.length, h = e === "spline", p = function() {
                n._clipCount--;
                if (n._clipCount === 0) {
                    n._tracks = {};
                    var e = n._doneList.length;
                    for (var t = 0; t < e; t++)
                        n._doneList[t].call(n)
                }
            }, d = function(d, v) {
                var m = d.length;
                if (!m)
                    return;
                var g = d[0].value, y = f(g), b = y && f(g[0]) ? 2 : 1;
                d.sort(function(e, t) {
                    return e.time - t.time
                });
                var w;
                if (!m)
                    return;
                w = d[m - 1].time;
                var E = [], S = [];
                for (var x = 0; x < m; x++) {
                    E.push(d[x].time / w);
                    if (y)
                        if (b == 2) {
                            S[x] = [];
                            for (var T = 0; T < g.length; T++)
                                S[x].push(r.call(d[x].value[T]))
                        } else
                            S.push(r.call(d[x].value));
                    else
                        S.push(d[x].value)
                }
                var N = 0, C = 0, k, x, L, A, O, M, _, D = function(e, t) {
                    if (t < C) {
                        k = Math.min(N + 1, m - 1);
                        for (x = k; x >= 0; x--)
                            if (E[x] <= t)
                                break;
                        x = Math.min(x, m - 2)
                    } else {
                        for (x = N; x < m; x++)
                            if (E[x] > t)
                                break;
                        x = Math.min(x - 1, m - 2)
                    }
                    N = x, C = t;
                    var r = E[x + 1] - E[x];
                    if (r === 0)
                        return;
                    L = (t - E[x]) / r, L < 0 && console.log(L), h ? (O = S[x], A = S[x === 0 ? x : x - 1], M = S[x > m - 2 ? m - 1 : x + 1], _ = S[x > m - 3 ? m - 1 : x + 2], y ? l(A, O, M, _, L, L * L, L * L * L, s(e, v), b) : i(e, v, c(A, O, M, _, L, L * L, L * L * L))) : y ? a(S[x], S[x + 1], L, s(e, v), b) : i(e, v, u(S[x], S[x + 1], L));
                    for (x = 0; x < o; x++)
                        n._onframeList[x](e, t)
                }, P = new t({target: n._target, life: w, loop: n._loop, delay: n._delay, onframe: D, ondestroy: p});
                e && e !== "spline" && (P.easing = e), n._clipList.push(P), n._clipCount++, n.animation.add(P)
            };
            for (var v in this._tracks)
                d(this._tracks[v], v);
            return this
        }, stop: function() {
            for (var e = 0; e < this._clipList.length; e++) {
                var t = this._clipList[e];
                this.animation.remove(t)
            }
            this._clipList = []
        }, delay: function(e) {
            return this._delay = e, this
        }, done: function(e) {
            return this._doneList.push(e), this
        }}, i
}), define("zrender/config", {loadingEffect: "spin", EVENT: {RESIZE: "resize", CLICK: "click", MOUSEWHEEL: "mousewheel", MOUSEMOVE: "mousemove", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEDOWN: "mousedown", MOUSEUP: "mouseup", GLOBALOUT: "globalout", DRAGSTART: "dragstart", DRAGEND: "dragend", DRAGENTER: "dragenter", DRAGOVER: "dragover", DRAGLEAVE: "dragleave", DROP: "drop", touchClickDelay: 300}}), define("zrender/tool/loadingEffect", ["require", "./util", "./color", "./color", "./color", "./color", "./color", "./math"], function(e) {
    function u(e, t) {
        n[e] = t
    }
    function a(e) {
        return{shape: "text", highlightStyle: t.merge({x: s / 2, y: o / 2, text: r, textAlign: "center", textBaseline: "middle", textFont: i, color: "#333", brushType: "fill"}, e, {overwrite: !0, recursive: !0})}
    }
    function f(e) {
        return{shape: "rectangle", highlightStyle: {x: 0, y: 0, width: s, height: o, brushType: "fill", color: e}}
    }
    function l(e, t) {
        return e <= t[0] ? e = t[0] : e >= t[1] && (e = t[1]), e
    }
    function c(n, r, i) {
        var u = e("./color");
        n = t.merge(n, {textStyle: {color: "#888"}, backgroundColor: "rgba(250, 250, 250, 0.8)", effectOption: {x: 0, y: o / 2 - 30, width: s, height: 5, brushType: "fill", timeInterval: 100}}, {overwrite: !1, recursive: !0});
        var c = a(n.textStyle), h = f(n.backgroundColor), p = n.effectOption, d = {shape: "rectangle", highlightStyle: t.clone(p)};
        d.highlightStyle.color = p.color || u.getLinearGradient(p.x, p.y, p.x + p.width, p.y + p.height, [[0, "#ff6400"], [.5, "#ffe100"], [1, "#b1ff00"]]);
        if (typeof n.progress != "undefined") {
            r(h), d.highlightStyle.width = l(n.progress, [0, 1]) * n.effectOption.width, r(d), r(c), i();
            return
        }
        return d.highlightStyle.width = 0, setInterval(function() {
            r(h), d.highlightStyle.width < n.effectOption.width ? d.highlightStyle.width += 8 : d.highlightStyle.width = 0, r(d), r(c), i()
        }, p.timeInterval)
    }
    function h(e, n, r) {
        e.effectOption = t.merge(e.effectOption || {}, {x: s / 2 - 80, y: o / 2, r: 18, colorIn: "#fff", colorOut: "#555", colorWhirl: "#6cf", timeInterval: 50});
        var i = e.effectOption;
        e = t.merge(e, {textStyle: {color: "#888", x: i.x + i.r + 10, y: i.y, textAlign: "start"}, backgroundColor: "rgba(250, 250, 250, 0.8)"}, {overwrite: !1, recursive: !0});
        var u = a(e.textStyle), l = f(e.backgroundColor), c = {shape: "droplet", highlightStyle: {a: Math.round(i.r / 2), b: Math.round(i.r - i.r / 6), brushType: "fill", color: i.colorWhirl}}, h = {shape: "circle", highlightStyle: {r: Math.round(i.r / 6), brushType: "fill", color: i.colorIn}}, p = {shape: "ring", highlightStyle: {r0: Math.round(i.r - i.r / 3), r: i.r, brushType: "fill", color: i.colorOut}}, d = [0, i.x, i.y];
        return c.highlightStyle.x = h.highlightStyle.x = p.highlightStyle.x = d[1], c.highlightStyle.y = h.highlightStyle.y = p.highlightStyle.y = d[2], setInterval(function() {
            n(l), n(p), d[0] -= .3, c.rotation = d, n(c), n(h), n(u), r()
        }, i.timeInterval)
    }
    function p(n, r, i) {
        var u = e("./color");
        n = t.merge(n, {textStyle: {color: "#fff"}, backgroundColor: "rgba(0, 0, 0, 0.8)", effectOption: {n: 30, lineWidth: 1, color: "random", timeInterval: 100}}, {overwrite: !1, recursive: !0});
        var l = a(n.textStyle), c = f(n.backgroundColor), h = n.effectOption, p = h.n, d = h.lineWidth, v = [], m, g, y, b;
        for (var w = 0; w < p; w++)
            y = -Math.ceil(Math.random() * 1e3), g = Math.ceil(Math.random() * 400), m = Math.ceil(Math.random() * o), h.color == "random" ? b = u.random() : b = h.color, v[w] = {shape: "line", highlightStyle: {xStart: y, yStart: m, xEnd: y + g, yEnd: m, strokeColor: b, lineWidth: d}, animationX: Math.ceil(Math.random() * 100), len: g};
        return setInterval(function() {
            r(c);
            var e;
            for (var t = 0; t < p; t++)
                e = v[t].highlightStyle, e.xStart >= s && (v[t].len = Math.ceil(Math.random() * 400), v[t].highlightStyle.xStart = -400, v[t].highlightStyle.xEnd = -400 + v[t].len, v[t].highlightStyle.yStart = Math.ceil(Math.random() * o), v[t].highlightStyle.yEnd = v[t].highlightStyle.yStart), v[t].highlightStyle.xStart += v[t].animationX, v[t].highlightStyle.xEnd += v[t].animationX, r(v[t]);
            r(l), i()
        }, h.timeInterval)
    }
    function d(n, r, i) {
        var u = e("./color");
        n = t.merge(n, {textStyle: {color: "#888"}, backgroundColor: "rgba(250, 250, 250, 0.8)", effectOption: {n: 50, lineWidth: 2, brushType: "stroke", color: "random", timeInterval: 100}}, {overwrite: !1, recursive: !0});
        var l = a(n.textStyle), c = f(n.backgroundColor), h = n.effectOption, p = h.n, d = h.brushType, v = h.lineWidth, m = [], g;
        for (var y = 0; y < p; y++)
            h.color == "random" ? g = u.alpha(u.random(), .3) : g = h.color, m[y] = {shape: "circle", highlightStyle: {x: Math.ceil(Math.random() * s), y: Math.ceil(Math.random() * o), r: Math.ceil(Math.random() * 40), brushType: d, color: g, strokeColor: g, lineWidth: v}, animationY: Math.ceil(Math.random() * 20)};
        return setInterval(function() {
            r(c);
            var e;
            for (var t = 0; t < p; t++)
                e = m[t].highlightStyle, e.y - m[t].animationY + e.r <= 0 && (m[t].highlightStyle.y = o + e.r, m[t].highlightStyle.x = Math.ceil(Math.random() * s)), m[t].highlightStyle.y -= m[t].animationY, r(m[t]);
            r(l), i()
        }, h.timeInterval)
    }
    function v(n, r, i) {
        var u = e("./color");
        n.effectOption = t.merge(n.effectOption || {}, {x: s / 2 - 80, y: o / 2, r0: 9, r: 15, n: 18, color: "#fff", timeInterval: 100});
        var l = n.effectOption;
        n = t.merge(n, {textStyle: {color: "#fff", x: l.x + l.r + 10, y: l.y, textAlign: "start"}, backgroundColor: "rgba(0, 0, 0, 0.8)"}, {overwrite: !1, recursive: !0});
        var c = a(n.textStyle), h = f(n.backgroundColor), p = l.n, d = l.x, v = l.y, m = l.r0, g = l.r, y = l.color, b = [], w = Math.round(180 / p);
        for (var E = 0; E < p; E++)
            b[E] = {shape: "sector", highlightStyle: {x: d, y: v, r0: m, r: g, startAngle: w * E * 2, endAngle: w * E * 2 + w, color: u.alpha(y, (E + 1) / p), brushType: "fill"}};
        var S = [0, d, v];
        return setInterval(function() {
            r(h), S[0] -= .3;
            for (var e = 0; e < p; e++)
                b[e].rotation = S, r(b[e]);
            r(c), i()
        }, l.timeInterval)
    }
    function m(n, r, i) {
        var u = e("./color"), c = e("./math");
        n = t.merge(n, {textStyle: {color: "#07a"}, backgroundColor: "rgba(250, 250, 250, 0.8)", effectOption: {x: s / 2, y: o / 2, r0: 60, r: 100, color: "#bbdcff", brushType: "fill", textPosition: "inside", textFont: "normal 30px verdana", textColor: "rgba(30, 144, 255, 0.6)", timeInterval: 100}}, {overwrite: !1, recursive: !0});
        var h = n.effectOption, p = n.textStyle;
        p.x = typeof p.x != "undefined" ? p.x : h.x, p.y = typeof p.y != "undefined" ? p.y : h.y + (h.r0 + h.r) / 2 - 5;
        var d = a(n.textStyle), v = f(n.backgroundColor), m = h.x, g = h.y, y = h.r0 + 6, b = h.r - 6, w = h.color, E = u.lift(w, .1), S = {shape: "ring", highlightStyle: t.clone(h)}, x = [], T = u.getGradientColors(["#ff6400", "#ffe100", "#97ff00"], 25), N = 15, C = 240;
        for (var k = 0; k < 16; k++)
            x.push({shape: "sector", highlightStyle: {x: m, y: g, r0: y, r: b, startAngle: C - N, endAngle: C, brushType: "fill", color: E}, _color: u.getLinearGradient(m + y * c.cos(C, !0), g - y * c.sin(C, !0), m + y * c.cos(C - N, !0), g - y * c.sin(C - N, !0), [[0, T[k * 2]], [1, T[k * 2 + 1]]])}), C -= N;
        C = 360;
        for (var k = 0; k < 4; k++)
            x.push({shape: "sector", highlightStyle: {x: m, y: g, r0: y, r: b, startAngle: C - N, endAngle: C, brushType: "fill", color: E}, _color: u.getLinearGradient(m + y * c.cos(C, !0), g - y * c.sin(C, !0), m + y * c.cos(C - N, !0), g - y * c.sin(C - N, !0), [[0, T[k * 2 + 32]], [1, T[k * 2 + 33]]])}), C -= N;
        var L = 0;
        if (typeof n.progress != "undefined") {
            r(v), L = l(n.progress, [0, 1]).toFixed(2) * 100 / 5, S.highlightStyle.text = L * 5 + "%", r(S);
            for (var k = 0; k < 20; k++)
                x[k].highlightStyle.color = k < L ? x[k]._color : E, r(x[k]);
            r(d), i();
            return
        }
        return setInterval(function() {
            r(v), L += L >= 20 ? -20 : 1, r(S);
            for (var e = 0; e < 20; e++)
                x[e].highlightStyle.color = e < L ? x[e]._color : E, r(x[e]);
            r(d), i()
        }, h.timeInterval)
    }
    function g(e, t, r) {
        var i = n.ring;
        return typeof e.effect == "function" ? i = e.effect : typeof n[e.effect] == "function" && (i = n[e.effect]), s = e.canvasSize.width, o = e.canvasSize.height, i(e, t, r)
    }
    function y(e) {
        clearInterval(e)
    }
    var t = e("./util"), n, r = "Loading...", i = "normal 16px Arial", s, o;
    return n = {getBackgroundShape: f, getTextShape: a, define: u, bar: c, whirling: h, dynamicLine: p, bubble: d, spin: v, ring: m, start: g, stop: y}, n
}), define("zrender/tool/event", [], function() {
    function e(e) {
        return typeof e.zrenderX != "undefined" && e.zrenderX || typeof e.offsetX != "undefined" && e.offsetX || typeof e.layerX != "undefined" && e.layerX || typeof e.clientX != "undefined" && e.clientX
    }
    function t(e) {
        return typeof e.zrenderY != "undefined" && e.zrenderY || typeof e.offsetY != "undefined" && e.offsetY || typeof e.layerY != "undefined" && e.layerY || typeof e.clientY != "undefined" && e.clientY
    }
    function n(e) {
        return typeof e.wheelDelta != "undefined" && e.wheelDelta || typeof e.detail != "undefined" && -e.detail
    }
    function r(e) {
        e.preventDefault ? (e.preventDefault(), e.stopPropagation()) : (e.returnValue = !1, e.cancelBubble = !0)
    }
    function i() {
        function n(n, r) {
            return!r || !n ? e : (t[n] || (t[n] = []), t[n].push({h: r, one: !0}), e)
        }
        function r(n, r) {
            return!r || !n ? e : (t[n] || (t[n] = []), t[n].push({h: r, one: !1}), e)
        }
        function i(n, r) {
            if (!n)
                return t = {}, e;
            if (r) {
                if (t[n]) {
                    var i = [];
                    for (var s = 0, o = t[n].length; s < o; s++)
                        t[n][s]["h"] != r && i.push(t[n][s]);
                    t[n] = i
                }
                t[n] && t[n].length === 0 && delete t[n]
            } else
                delete t[n];
            return e
        }
        function s(n, r, i) {
            if (t[n]) {
                var s = [], o = i || {};
                o.type = n, o.event = r;
                for (var u = 0, a = t[n].length; u < a; u++)
                    t[n][u].h(o), t[n][u].one || s.push(t[n][u]);
                s.length != t[n].length && (t[n] = s)
            }
            return e
        }
        var e = this, t = {};
        e.one = n, e.bind = r, e.unbind = i, e.dispatch = s
    }
    return{getX: e, getY: t, getDelta: n, stop: r, Dispatcher: i}
}), define("zrender/zrender", ["require", "./lib/excanvas", "./tool/util", "./tool/env", "./shape", "./shape/circle", "./shape/ellipse", "./shape/line", "./shape/polygon", "./shape/brokenLine", "./shape/rectangle", "./shape/ring", "./shape/sector", "./shape/text", "./shape/heart", "./shape/droplet", "./shape/path", "./shape/image", "./shape/beziercurve", "./shape/star", "./shape/isogon", "./animation/animation", "./config", "./tool/loadingEffect", "./tool/loadingEffect", "./config", "./tool/env", "./tool/event"], function(e) {
    function o(n, i, s) {
        var o = this;
        o.env = e("./tool/env");
        var l = e("./shape");
        e("./shape/circle"), e("./shape/ellipse"), e("./shape/line"), e("./shape/polygon"), e("./shape/brokenLine"), e("./shape/rectangle"), e("./shape/ring"), e("./shape/sector"), e("./shape/text"), e("./shape/heart"), e("./shape/droplet"), e("./shape/path"), e("./shape/image"), e("./shape/beziercurve"), e("./shape/star"), e("./shape/isogon");
        var c;
        if (typeof s.shape == "undefined")
            c = l;
        else {
            c = {};
            for (var h in s.shape)
                c[h] = s.shape[h];
            c.get = function(e) {
                return c[e] || l.get(e)
            }
        }
        var p = new u(c), d = new a(i, p, c), v = new f(i, p, d, c), m = e("./animation/animation"), g = [], y = new m({stage: {update: function() {
                    var e = g;
                    for (var t = 0, n = e.length; t < n; t++)
                        p.mod(e[t].id);
                    e.length > 0 && d.refresh()
                }}});
        y.start(), o.getId = function() {
            return n
        }, o.addShape = function(e) {
            return p.add(e), o
        }, o.delShape = function(e) {
            return p.del(e), o
        }, o.modShape = function(e, t, n) {
            return p.mod(e, t, n), o
        }, o.modLayer = function(e, t) {
            d.modLayer(e, t)
        }, o.addHoverShape = function(e) {
            return p.addHover(e), o
        }, o.render = function(e) {
            return d.render(e), o
        }, o.refresh = function(e) {
            return d.refresh(e), o
        }, o.refreshHover = function(e) {
            return d.refreshHover(e), o
        }, o.update = function(e, t) {
            return d.update(e, t), o
        }, o.resize = function() {
            return d.resize(), o
        }, o.animate = function(e, n, i) {
            var s = p.get(e);
            if (s) {
                var o;
                if (n) {
                    var u = n.split("."), a = s;
                    for (var f = 0, l = u.length; f < l; f++) {
                        if (!a)
                            continue;
                        a = a[u[f]]
                    }
                    a && (o = a)
                } else
                    o = s;
                if (!o) {
                    r.log('Property "' + n + '" is not existed in shape ' + e);
                    return
                }
                return typeof s.__aniCount == "undefined" && (s.__aniCount = 0), s.__aniCount === 0 && g.push(s), s.__aniCount++, y.animate(o, {loop: i}).done(function() {
                    s.__aniCount--;
                    if (s.__aniCount === 0) {
                        var e = t.indexOf(g, s);
                        g.splice(e, 1)
                    }
                })
            }
            r.log('Shape "' + e + '" not existed')
        }, o.clearAnimation = function() {
            y.clear()
        }, o.showLoading = function(e) {
            return d.showLoading(e), o
        }, o.hideLoading = function() {
            return d.hideLoading(), o
        }, o.newShapeId = function(e) {
            return p.newShapeId(e)
        }, o.getWidth = function() {
            return d.getWidth()
        }, o.getHeight = function() {
            return d.getHeight()
        }, o.toDataURL = function(e, t, n) {
            return d.toDataURL(e, t, n)
        }, o.shapeToImage = function(e, t, n) {
            var r = o.newShapeId("image");
            return d.shapeToImage(r, e, t, n)
        }, o.on = function(e, t) {
            return v.on(e, t), o
        }, o.un = function(e, t) {
            return v.un(e, t), o
        }, o.trigger = function(e, t) {
            return v.trigger(e, t), o
        }, o.clear = function() {
            return p.del(), d.clear(), o
        }, o.dispose = function() {
            y.stop(), y = null, g = null, o.clear(), o = null, p.dispose(), p = null, d.dispose(), d = null, v.dispose(), v = null, r.delInstance(n);
            return
        }
    }
    function u(e) {
        function l(e) {
            e.hoverable || e.onclick || e.draggable || e.onmousemove || e.onmouseover || e.onmouseout || e.onmousedown || e.onmouseup || e.ondragenter || e.ondragover || e.ondragleave || e.ondrop ? e.__silent = !1 : e.__silent = !0, Math.abs(e.rotation[0]) > 1e-4 || Math.abs(e.position[0]) > 1e-4 || Math.abs(e.position[1]) > 1e-4 || Math.abs(e.scale[0] - 1) > 1e-4 || Math.abs(e.scale[1] - 1) > 1e-4 ? e.__needTransform = !0 : e.__needTransform = !1, e.style = e.style || {}, e.style.__rect = null
        }
        function c(e) {
            return(e || "") + ++i
        }
        function h(e) {
            var r = {shape: "circle", id: e.id || n.newShapeId(), zlevel: 0, draggable: !1, clickable: !1, hoverable: !0, position: [0, 0], rotation: [0, 0, 0], scale: [1, 1, 0, 0]};
            return t.merge(r, e, {overwrite: !0, recursive: !0}), l(r), s[r.id] = r, o[r.zlevel] = o[r.zlevel] || [], o[r.zlevel].push(r), a = Math.max(a, r.zlevel), f[r.zlevel] = !0, n
        }
        function p(e) {
            return s[e]
        }
        function d(e) {
            if (typeof e != "undefined") {
                var t = {};
                if (e instanceof Array) {
                    if (e.lenth < 1)
                        return;
                    for (var r = 0, i = e.length; r < i; r++)
                        t[e[r].id] = !0
                } else
                    t[e] = !0;
                var l, c, h, p = {};
                for (var d in t)
                    if (s[d]) {
                        h = s[d].zlevel, f[h] = !0;
                        if (!p[h]) {
                            c = o[h], l = [];
                            for (var r = 0, i = c.length; r < i; r++)
                                t[c[r].id] || l.push(c[r]);
                            o[h] = l, p[h] = !0
                        }
                        delete s[d]
                    }
            } else
                s = {}, o = [], u = [], a = 0, f = {all: !0};
            return n
        }
        function v(e, r, i) {
            var o = s[e];
            return o && (f[o.zlevel] = !0, r && (i ? t.mergeFast(o, r, !0, !0) : t.merge(o, r, {overwrite: !0, recursive: !0})), l(o), f[o.zlevel] = !0, a = Math.max(a, o.zlevel)), n
        }
        function m(t, i, o) {
            var u = s[t];
            if (!u)
                return;
            u.__needTransform = !0;
            if (!u.ondrift || u.ondrift && !u.ondrift(u, i, o))
                if (r.catchBrushException)
                    try {
                        e.get(u.shape).drift(u, i, o)
                    } catch (a) {
                        r.log(a, "drift error of " + u.shape, u)
                    }
                else
                    e.get(u.shape).drift(u, i, o);
            return f[u.zlevel] = !0, n
        }
        function g(e) {
            return e.rotation && Math.abs(e.rotation[0]) > 1e-4 || e.position && (Math.abs(e.position[0]) > 1e-4 || Math.abs(e.position[1]) > 1e-4) || e.scale && (Math.abs(e.scale[0] - 1) > 1e-4 || Math.abs(e.scale[1] - 1) > 1e-4) ? e.__needTransform = !0 : e.__needTransform = !1, u.push(e), n
        }
        function y() {
            return u = [], n
        }
        function b() {
            return u.length > 0
        }
        function w(e, t) {
            t || (t = {hover: !1, normal: "down"});
            if (t.hover)
                for (var r = 0, i = u.length; r < i; r++)
                    if (e(u[r]))
                        return n;
            var a, f;
            if (typeof t.normal != "undefined")
                switch (t.normal) {
                    case"down":
                        for (var i = o.length - 1; i >= 0; i--) {
                            a = o[i];
                            if (a) {
                                f = a.length;
                                while (f--)
                                    if (e(a[f]))
                                        return n
                            }
                        }
                        break;
                    case"up":
                        for (var r = 0, i = o.length; r < i; r++) {
                            a = o[r];
                            if (a) {
                                f = a.length;
                                for (var l = 0; l < f; l++)
                                    if (e(a[l]))
                                        return n
                            }
                        }
                        break;
                    default:
                        for (var r in s)
                            if (e(s[r]))
                                return n
                }
            return n
        }
        function E() {
            return a
        }
        function S() {
            return f
        }
        function x() {
            return f = {}, n
        }
        function T(e) {
            return f[e] = !0, n
        }
        function N() {
            s = null, o = null, u = null, n = null;
            return
        }
        var n = this, i = 0, s = {}, o = [], u = [], a = 0, f = {};
        n.newShapeId = c, n.add = h, n.get = p, n.del = d, n.addHover = g, n.delHover = y, n.hasHoverShape = b, n.mod = v, n.drift = m, n.iterShape = w, n.getMaxZlevel = E, n.getChangedZlevel = S, n.clearChangedZlevel = x, n.setChangedZlevle = T, n.dispose = N
    }
    function a(n, i, s) {
        function b() {
            var e = n.currentStyle || document.defaultView.getComputedStyle(n);
            return((n.clientWidth || parseInt(e.width, 10)) - parseInt(e.paddingLeft, 10) - parseInt(e.paddingRight, 10)).toFixed(0) - 0
        }
        function w() {
            var e = n.currentStyle || document.defaultView.getComputedStyle(n);
            return((n.clientHeight || parseInt(e.height, 10)) - parseInt(e.paddingTop, 10) - parseInt(e.paddingBottom, 10)).toFixed(0) - 0
        }
        function E() {
            v.innerHTML = "", n.innerHTML = "", m = b(), g = w(), v.style.position = "relative", v.style.overflow = "hidden", v.style.width = m + "px", v.style.height = g + "px", n.appendChild(v), a = {}, f = {}, l = {}, c = {}, p = i.getMaxZlevel(), a.bg = x("bg", "div"), v.appendChild(a.bg);
            for (var e = 0; e <= p; e++)
                a[e] = x(e, "canvas"), v.appendChild(a[e]), G_vmlCanvasManager && G_vmlCanvasManager.initElement(a[e]), f[e] = a[e].getContext("2d"), y != 1 && f[e].scale(y, y);
            a.hover = x("hover", "canvas"), a.hover.id = "_zrender_hover_", v.appendChild(a.hover), G_vmlCanvasManager && G_vmlCanvasManager.initElement(a.hover), f.hover = a.hover.getContext("2d"), y != 1 && f.hover.scale(y, y)
        }
        function S() {
            var e = i.getMaxZlevel();
            if (p < e) {
                for (var t = p + 1; t <= e; t++)
                    a[t] = x(t, "canvas"), v.insertBefore(a[t], a.hover), G_vmlCanvasManager && G_vmlCanvasManager.initElement(a[t]), f[t] = a[t].getContext("2d"), y != 1 && f[t].scale(y, y);
                p = e
            }
        }
        function x(e, t) {
            var n = document.createElement(t);
            return n.style.position = "absolute", n.style.left = 0, n.style.top = 0, n.style.width = m + "px", n.style.height = g + "px", n.setAttribute("width", m * y), n.setAttribute("height", g * y), n.setAttribute("data-id", e), n
        }
        function T(e) {
            return function(t) {
                if ((e.all || e[t.zlevel]) && !t.invisible) {
                    var n = f[t.zlevel];
                    if (n) {
                        if (!t.onbrush || t.onbrush && !t.onbrush(n, t, !1))
                            if (r.catchBrushException)
                                try {
                                    s.get(t.shape).brush(n, t, !1, L)
                                } catch (i) {
                                    r.log(i, "brush error of " + t.shape, t)
                                }
                            else
                                s.get(t.shape).brush(n, t, !1, L)
                    } else
                        r.log("can not find the specific zlevel canvas!")
                }
            }
        }
        function N(e) {
            var t = f.hover;
            if (!e.onbrush || e.onbrush && !e.onbrush(t, e, !0))
                if (r.catchBrushException)
                    try {
                        s.get(e.shape).brush(t, e, !0, L)
                    } catch (n) {
                        r.log(n, "hoverBrush error of " + e.shape, e)
                    }
                else
                    s.get(e.shape).brush(t, e, !0, L)
        }
        function C(e) {
            return B() && H(), S(), A(), i.iterShape(T({all: !0}), {normal: "up"}), i.clearChangedZlevel(), typeof e == "function" && e(), u
        }
        function k(e) {
            S();
            var t = i.getChangedZlevel();
            if (t.all)
                A();
            else
                for (var n in t)
                    f[n] && O(n);
            return i.iterShape(T(t), {normal: "up"}), i.clearChangedZlevel(), typeof e == "function" && e(), u
        }
        function L(e, t) {
            var n;
            for (var r = 0, s = e.length; r < s; r++)
                n = e[r], i.mod(n.id, n);
            return k(t), u
        }
        function A() {
            for (var e in f) {
                if (e == "hover")
                    continue;
                O(e)
            }
            return u
        }
        function O(e) {
            if (h[e]) {
                var t = typeof h[e].clearColor != "undefined", n = h[e].motionBlur, r = h[e].lastFrameAlpha;
                typeof r == "undefined" && (r = .7);
                if (n) {
                    if (typeof l[e] == "undefined") {
                        var i = x("back-" + e, "canvas");
                        i.width = a[e].width, i.height = a[e].height, i.style.width = a[e].style.width, i.style.height = a[e].style.height, l[e] = i, c[e] = i.getContext("2d"), y != 1 && c[e].scale(y, y)
                    }
                    c[e].globalCompositeOperation = "copy", c[e].drawImage(a[e], 0, 0, a[e].width / y, a[e].height / y)
                }
                t ? (f[e].save(), f[e].fillStyle = h[e].clearColor, f[e].fillRect(0, 0, m * y, g * y), f[e].restore()) : f[e].clearRect(0, 0, m * y, g * y);
                if (n) {
                    var i = l[e], s = f[e];
                    s.save(), s.globalAlpha = r, s.drawImage(i, 0, 0, i.width / y, i.height / y), s.restore()
                }
            } else
                f[e].clearRect(0, 0, m * y, g * y)
        }
        function M(e, n) {
            n && (typeof h[e] == "undefined" && (h[e] = {}), t.merge(h[e], n, {recursive: !0, overwrite: !0}))
        }
        function _() {
            return D(), i.iterShape(N, {hover: !0}), i.delHover(), u
        }
        function D() {
            return f && f.hover && f.hover.clearRect(0, 0, m * y, g * y), u
        }
        function P(t) {
            var n = e("./tool/loadingEffect");
            return n.stop(d), t = t || {}, t.effect = t.effect || o.loadingEffect, t.canvasSize = {width: m, height: g}, d = n.start(t, i.addHover, _), u.loading = !0, u
        }
        function H() {
            var t = e("./tool/loadingEffect");
            return t.stop(d), D(), u.loading = !1, u
        }
        function B() {
            return u.loading
        }
        function j() {
            return m
        }
        function F() {
            return g
        }
        function I() {
            var e, t, n;
            v.style.display = "none", e = b(), t = w(), v.style.display = "";
            if (m != e || t != g) {
                m = e, g = t, v.style.width = m + "px", v.style.height = g + "px";
                for (var r in a)
                    n = a[r], n.setAttribute("width", m), n.setAttribute("height", g), n.style.width = m + "px", n.style.height = g + "px";
                i.setChangedZlevle("all"), k()
            }
            return u
        }
        function q() {
            B() && H(), n.innerHTML = "", n = null, i = null, s = null, v = null, a = null, f = null, c = null, l = null, u = null;
            return
        }
        function R() {
            return a.hover
        }
        function U(e, t, n) {
            if (G_vmlCanvasManager)
                return null;
            var o = x("image", "canvas");
            a.bg.appendChild(o);
            var u = o.getContext("2d");
            y != 1 && u.scale(y, y), u.fillStyle = t || "#fff", u.rect(0, 0, m * y, g * y), u.fill(), i.iterShape(function(e) {
                if (!e.invisible)
                    if (!e.onbrush || e.onbrush && !e.onbrush(u, e, !1))
                        if (r.catchBrushException)
                            try {
                                s.get(e.shape).brush(u, e, !1, L)
                            } catch (t) {
                                r.log(t, "brush error of " + e.shape, e)
                            }
                        else
                            s.get(e.shape).brush(u, e, !1, L)
            }, {normal: "up"});
            var f = o.toDataURL(e, n);
            return u = null, a.bg.removeChild(o), f
        }
        var o = e("./config"), u = this, a = {}, f = {}, l = {}, c = {}, h = {}, p = 0, d, v = document.createElement("div");
        v.onselectstart = function() {
            return!1
        };
        var m, g, y = window.devicePixelRatio || 1, z = function() {
            if (G_vmlCanvasManager)
                return function() {
                };
            var e = document.createElement("canvas"), t = e.getContext("2d"), n = window.devicePixelRatio || 1;
            return function(r, i, o, u) {
                e.style.width = o + "px", e.style.height = u + "px", e.setAttribute("width", o * n), e.setAttribute("height", u * n), t.clearRect(0, 0, o * n, u * n);
                var a = s.get(i.shape), f = {position: i.position, rotation: i.rotation, scale: i.scale};
                i.position = [0, 0, 0], i.rotation = 0, i.scale = [1, 1], a && a.brush(t, i, !1);
                var l = {shape: "image", id: r, style: {x: 0, y: 0, image: e.toDataURL()}};
                return typeof f.position != "undefined" && (l.position = i.position = f.position), typeof f.rotation != "undefined" && (l.rotation = i.rotation = f.rotation), typeof f.scale != "undefined" && (l.scale = i.scale = f.scale), l
            }
        }();
        u.render = C, u.refresh = k, u.update = L, u.clear = A, u.modLayer = M, u.refreshHover = _, u.clearHover = D, u.showLoading = P, u.hideLoading = H, u.isLoading = B, u.getWidth = j, u.getHeight = F, u.resize = I, u.dispose = q, u.getDomHover = R, u.toDataURL = U, u.shapeToImage = z, E()
    }
    function f(t, n, r, i) {
        function C() {
            window.addEventListener ? (window.addEventListener("resize", k), !o.os.tablet && !o.os.phone ? (t.addEventListener("click", L), t.addEventListener("mousewheel", A), t.addEventListener("mousemove", O), t.addEventListener("mousedown", P), t.addEventListener("mouseup", H)) : (t.addEventListener("touchstart", B), t.addEventListener("touchmove", j), t.addEventListener("touchend", F)), t.addEventListener("DOMMouseScroll", A), t.addEventListener("mouseout", M)) : (window.attachEvent("onresize", k), t.attachEvent("onclick", L), t.attachEvent("onmousewheel", A), t.attachEvent("onmousemove", O), t.attachEvent("onmouseout", M), t.attachEvent("onmousedown", P), t.attachEvent("onmouseup", H))
        }
        function k(e) {
            c = e || window.event, p = null, m = !1, a.dispatch(s.EVENT.RESIZE, c)
        }
        function L(e) {
            c = J(e), p ? p && p.clickable && X(p, s.EVENT.CLICK) : X(p, s.EVENT.CLICK), O(c)
        }
        function A(e) {
            c = J(e), X(p, s.EVENT.MOUSEWHEEL), O(c)
        }
        function O(e) {
            if (r.isLoading())
                return;
            c = J(e), E = x, S = T, x = f(c), T = l(c), I(), h = !1, n.iterShape($, {normal: "down"});
            if (!h) {
                if (!v || p && p.id != v.id)
                    D(), U();
                p = null, n.delHover(), r.clearHover()
            }
            v && (n.drift(v.id, x - E, T - S), n.addHover(v)), v || h && p.draggable ? t.style.cursor = "move" : h && p.clickable ? t.style.cursor = "pointer" : t.style.cursor = "default", X(p, s.EVENT.MOUSEMOVE), (v || h || n.hasHoverShape()) && r.refreshHover()
        }
        function M(e) {
            c = J(e);
            var n = c.toElement || c.relatedTarget;
            if (n != t)
                while (n && n.nodeType != 9) {
                    if (n == t) {
                        O(e);
                        return
                    }
                    n = n.parentNode
                }
            c.zrenderX = E, c.zrenderY = S, t.style.cursor = "default", m = !1, D(), z(), W(), r.isLoading() || r.refreshHover(), a.dispatch(s.EVENT.GLOBALOUT, c)
        }
        function _() {
            X(p, s.EVENT.MOUSEOVER)
        }
        function D() {
            X(p, s.EVENT.MOUSEOUT)
        }
        function P(e) {
            if (w == 2) {
                w = e.button, d = null;
                return
            }
            y = new Date, c = J(e), m = !0, d = p, X(p, s.EVENT.MOUSEDOWN), w = e.button
        }
        function H(e) {
            c = J(e), t.style.cursor = "default", m = !1, d = null, X(p, s.EVENT.MOUSEUP), z(), W()
        }
        function B(e) {
            c = J(e, !0), b = new Date, V(), P(c)
        }
        function j(e) {
            c = J(e, !0), O(c), g && u.stop(e)
        }
        function F(e) {
            c = J(e, !0), H(c), new Date - b < s.EVENT.touchClickDelay && (V(), L(c)), r.clearHover()
        }
        function I() {
            if (m && p && p.draggable && !v && d == p) {
                if (p.dragEnableTime && new Date - y < p.dragEnableTime)
                    return;
                v = p, g = !0, v.invisible = !0, n.mod(v.id, v), X(v, s.EVENT.DRAGSTART), r.refresh()
            }
        }
        function q() {
            v && X(p, s.EVENT.DRAGENTER, v)
        }
        function R() {
            v && X(p, s.EVENT.DRAGOVER, v)
        }
        function U() {
            v && X(p, s.EVENT.DRAGLEAVE, v)
        }
        function z() {
            v && (v.invisible = !1, n.mod(v.id, v), r.refresh(), X(p, s.EVENT.DROP, v))
        }
        function W() {
            v && (X(v, s.EVENT.DRAGEND), p = null), g = !1, v = null
        }
        function X(e, t, n) {
            var r = "on" + t, i = {type: t, event: c, target: e};
            n && (i.dragged = n), e ? (!e[r] || !e[r](i)) && a.dispatch(t, c, i) : n || a.dispatch(t, c)
        }
        function V() {
            p = null, x = c.zrenderX, T = c.zrenderY, n.iterShape($, {normal: "down"}), p || (x += 10, n.iterShape($, {normal: "down"})), p || (x -= 20, n.iterShape($, {normal: "down"})), p || (x += 10, T += 10, n.iterShape($, {normal: "down"})), p || (T -= 20, n.iterShape($, {normal: "down"})), p && (c.zrenderX = x, c.zrenderY = T)
        }
        function $(e) {
            if (v && v.id == e.id)
                return!1;
            if (e.__silent)
                return!1;
            var t = i.get(e.shape);
            return t.isCover(e, x, T) ? (e.hoverable && n.addHover(e), p != e && (D(), U(), p = e, q()), _(), R(), h = !0, !0) : !1
        }
        function J(e, n) {
            if (!n) {
                c = e || window.event;
                var r = c.toElement || c.relatedTarget || c.srcElement || c.target;
                r && r != N && (c.zrenderX = (typeof c.offsetX != "undefined" ? c.offsetX : c.layerX) + r.offsetLeft, c.zrenderY = (typeof c.offsetY != "undefined" ? c.offsetY : c.layerY) + r.offsetTop)
            } else {
                c = e;
                var i = c.type != "touchend" ? c.targetTouches[0] : c.changedTouches[0];
                i && (c.zrenderX = i.clientX - t.offsetLeft + document.body.scrollLeft, c.zrenderY = i.clientY - t.offsetTop + document.body.scrollTop)
            }
            return c
        }
        function K(e, t) {
            return a.bind(e, t), a
        }
        function Q(e, t) {
            return a.unbind(e, t), a
        }
        function G(e, t) {
            switch (e) {
                case s.EVENT.RESIZE:
                    k(t);
                    break;
                case s.EVENT.CLICK:
                    L(t);
                    break;
                case s.EVENT.MOUSEWHEEL:
                    A(t);
                    break;
                case s.EVENT.MOUSEMOVE:
                    O(t);
                    break;
                case s.EVENT.MOUSEDOWN:
                    P(t);
                    break;
                case s.EVENT.MOUSEUP:
                    _mouseUpHandleru(t);
                    break;
                case s.EVENT.MOUSEOUT:
                    M(t)
                }
        }
        function Y() {
            window.removeEventListener ? (window.removeEventListener("resize", k), !o.os.tablet && !o.os.phone ? (t.removeEventListener("click", L), t.removeEventListener("mousewheel", A), t.removeEventListener("mousemove", O), t.removeEventListener("mousedown", P), t.removeEventListener("mouseup", H)) : (t.removeEventListener("touchstart", B), t.removeEventListener("touchmove", j), t.removeEventListener("touchend", F)), t.removeEventListener("DOMMouseScroll", A), t.removeEventListener("mouseout", M)) : (window.detachEvent("onresize", k), t.detachEvent("onclick", L), t.detachEvent("onmousewheel", A), t.detachEvent("onmousemove", O), t.detachEvent("onmouseout", M), t.detachEvent("onmousedown", P), t.detachEvent("onmouseup", H)), t = null, N = null, n = null, r = null, i = null, Q(), a = null;
            return
        }
        var s = e("./config"), o = e("./tool/env"), u = e("./tool/event");
        u.Dispatcher.call(this);
        var a = this, f = u.getX, l = u.getY, c, h = !1, p = null, d = null, v = null, m = !1, g = !1, y, b, w, E = 0, S = 0, x = 0, T = 0, N = r.getDomHover();
        a.on = K, a.un = Q, a.trigger = G, a.dispose = Y, C()
    }
    e("./lib/excanvas");
    var t = e("./tool/util"), n = {}, r = n, i = 0, s = {};
    return n.version = "1.1.2", n.init = function(e, t) {
        var n = new o(++i + "", e, t || {});
        return s[i] = n, n
    }, n.dispose = function(e) {
        if (e)
            e.dispose();
        else {
            for (var t in s)
                s[t].dispose();
            s = {}
        }
        return n
    }, n.getInstance = function(e) {
        return s[e]
    }, n.delInstance = function(e) {
        return s[e] && (s[e] = null, delete s[e]), n
    }, n.catchBrushException = !1, n.debugMode = 0, n.log = function() {
        if (n.debugMode === 0)
            return;
        if (n.debugMode == 1)
            for (var e in arguments)
                throw new Error(arguments[e]);
        else if (n.debugMode > 1)
            for (var e in arguments)
                console.log(arguments[e]);
        return n
    }, n
}), define("zrender", ["zrender/zrender"], function(e) {
    return e
}), define("echarts/util/shape/icon", ["require", "zrender/tool/matrix", "zrender/shape", "zrender/shape", "zrender/shape", "zrender/shape", "zrender/shape/base", "zrender/shape"], function(e) {
    function n() {
        this.type = "icon", this._iconLibrary = {mark: r, markUndo: i, markClear: s, dataZoom: o, dataZoomReset: u, restore: a, lineChart: f, barChart: l, stackChart: c, tiledChart: h, dataView: p, saveAsImage: d, cross: v, circle: m, rectangle: g, triangle: y, diamond: b, arrow: w, star: E, heart: S, droplet: x, pin: T, image: N}
    }
    function r(e, t) {
        var n = t.width / 16, r = t.height / 16;
        e.moveTo(t.x, t.y + t.height), e.lineTo(t.x + 5 * n, t.y + 14 * r), e.lineTo(t.x + t.width, t.y + 3 * r), e.lineTo(t.x + 13 * n, t.y), e.lineTo(t.x + 2 * n, t.y + 11 * r), e.lineTo(t.x, t.y + t.height), e.moveTo(t.x + 6 * n, t.y + 10 * r), e.lineTo(t.x + 14 * n, t.y + 2 * r), e.moveTo(t.x + 10 * n, t.y + 13 * r), e.lineTo(t.x + t.width, t.y + 13 * r), e.moveTo(t.x + 13 * n, t.y + 10 * r), e.lineTo(t.x + 13 * n, t.y + t.height)
    }
    function i(e, t) {
        var n = t.width / 16, r = t.height / 16;
        e.moveTo(t.x, t.y + t.height), e.lineTo(t.x + 5 * n, t.y + 14 * r), e.lineTo(t.x + t.width, t.y + 3 * r), e.lineTo(t.x + 13 * n, t.y), e.lineTo(t.x + 2 * n, t.y + 11 * r), e.lineTo(t.x, t.y + t.height), e.moveTo(t.x + 6 * n, t.y + 10 * r), e.lineTo(t.x + 14 * n, t.y + 2 * r), e.moveTo(t.x + 10 * n, t.y + 13 * r), e.lineTo(t.x + t.width, t.y + 13 * r)
    }
    function s(e, t) {
        var n = t.width / 16, r = t.height / 16;
        e.moveTo(t.x + 4 * n, t.y + 15 * r), e.lineTo(t.x + 9 * n, t.y + 13 * r), e.lineTo(t.x + 14 * n, t.y + 8 * r), e.lineTo(t.x + 11 * n, t.y + 5 * r), e.lineTo(t.x + 6 * n, t.y + 10 * r), e.lineTo(t.x + 4 * n, t.y + 15 * r), e.moveTo(t.x + 5 * n, t.y), e.lineTo(t.x + 11 * n, t.y), e.moveTo(t.x + 5 * n, t.y + r), e.lineTo(t.x + 11 * n, t.y + r), e.moveTo(t.x, t.y + 2 * r), e.lineTo(t.x + t.width, t.y + 2 * r), e.moveTo(t.x, t.y + 5 * r), e.lineTo(t.x + 3 * n, t.y + t.height), e.lineTo(t.x + 13 * n, t.y + t.height), e.lineTo(t.x + t.width, t.y + 5 * r)
    }
    function o(e, t) {
        var n = t.width / 16, r = t.height / 16;
        e.moveTo(t.x, t.y + 3 * r), e.lineTo(t.x + 6 * n, t.y + 3 * r), e.moveTo(t.x + 3 * n, t.y), e.lineTo(t.x + 3 * n, t.y + 6 * r), e.moveTo(t.x + 3 * n, t.y + 8 * r), e.lineTo(t.x + 3 * n, t.y + t.height), e.lineTo(t.x + t.width, t.y + t.height), e.lineTo(t.x + t.width, t.y + 3 * r), e.lineTo(t.x + 8 * n, t.y + 3 * r), e.moveTo(t.x, t.y), e.lineTo(t.x, t.y)
    }
    function u(e, t) {
        var n = t.width / 16, r = t.height / 16;
        e.moveTo(t.x + 6 * n, t.y), e.lineTo(t.x + 2 * n, t.y + 3 * r), e.lineTo(t.x + 6 * n, t.y + 6 * r), e.moveTo(t.x + 2 * n, t.y + 3 * r), e.lineTo(t.x + 14 * n, t.y + 3 * r), e.lineTo(t.x + 14 * n, t.y + 11 * r), e.moveTo(t.x + 2 * n, t.y + 5 * r), e.lineTo(t.x + 2 * n, t.y + 13 * r), e.lineTo(t.x + 14 * n, t.y + 13 * r), e.moveTo(t.x + 10 * n, t.y + 10 * r), e.lineTo(t.x + 14 * n, t.y + 13 * r), e.lineTo(t.x + 10 * n, t.y + t.height), e.moveTo(t.x, t.y), e.lineTo(t.x, t.y)
    }
    function a(e, t) {
        var n = t.width / 16, r = t.height / 16, i = t.width / 2;
        e.lineWidth = 1.5, e.arc(t.x + i, t.y + i, i - n, 0, Math.PI * 2 / 3), e.moveTo(t.x + 3 * n, t.y + t.height), e.lineTo(t.x + 0 * n, t.y + 12 * r), e.lineTo(t.x + 5 * n, t.y + 11 * r), e.moveTo(t.x, t.y + 8 * r), e.arc(t.x + i, t.y + i, i - n, Math.PI, Math.PI * 5 / 3), e.moveTo(t.x + 13 * n, t.y), e.lineTo(t.x + t.width, t.y + 4 * r), e.lineTo(t.x + 11 * n, t.y + 5 * r), e.moveTo(t.x, t.y), e.lineTo(t.x, t.y)
    }
    function f(e, t) {
        var n = t.width / 16, r = t.height / 16;
        e.moveTo(t.x, t.y), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x + t.width, t.y + t.height), e.moveTo(t.x + 2 * n, t.y + 14 * r), e.lineTo(t.x + 7 * n, t.y + 6 * r), e.lineTo(t.x + 11 * n, t.y + 11 * r), e.lineTo(t.x + 15 * n, t.y + 2 * r), e.moveTo(t.x, t.y), e.lineTo(t.x, t.y)
    }
    function l(e, t) {
        var n = t.width / 16, r = t.height / 16;
        e.moveTo(t.x, t.y), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x + t.width, t.y + t.height), e.moveTo(t.x + 3 * n, t.y + 14 * r), e.lineTo(t.x + 3 * n, t.y + 6 * r), e.lineTo(t.x + 4 * n, t.y + 6 * r), e.lineTo(t.x + 4 * n, t.y + 14 * r), e.moveTo(t.x + 7 * n, t.y + 14 * r), e.lineTo(t.x + 7 * n, t.y + 2 * r), e.lineTo(t.x + 8 * n, t.y + 2 * r), e.lineTo(t.x + 8 * n, t.y + 14 * r), e.moveTo(t.x + 11 * n, t.y + 14 * r), e.lineTo(t.x + 11 * n, t.y + 9 * r), e.lineTo(t.x + 12 * n, t.y + 9 * r), e.lineTo(t.x + 12 * n, t.y + 14 * r)
    }
    function c(e, t) {
        var n = t.x, r = t.y, i = t.width, s = t.height, o = Math.round(s / 3), u = 3;
        while (u--)
            e.rect(n, r + o * u + 2, i, 2)
    }
    function h(e, t) {
        var n = t.x, r = t.y, i = t.width, s = t.height, o = Math.round(i / 3), u = 3;
        while (u--)
            e.rect(n + o * u, r, 2, s)
    }
    function p(e, t) {
        var n = t.width / 16;
        e.moveTo(t.x + n, t.y), e.lineTo(t.x + n, t.y + t.height), e.lineTo(t.x + 15 * n, t.y + t.height), e.lineTo(t.x + 15 * n, t.y), e.lineTo(t.x + n, t.y), e.moveTo(t.x + 3 * n, t.y + 3 * n), e.lineTo(t.x + 13 * n, t.y + 3 * n), e.moveTo(t.x + 3 * n, t.y + 6 * n), e.lineTo(t.x + 13 * n, t.y + 6 * n), e.moveTo(t.x + 3 * n, t.y + 9 * n), e.lineTo(t.x + 13 * n, t.y + 9 * n), e.moveTo(t.x + 3 * n, t.y + 12 * n), e.lineTo(t.x + 9 * n, t.y + 12 * n)
    }
    function d(e, t) {
        var n = t.width / 16, r = t.height / 16;
        e.moveTo(t.x, t.y), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x + t.width, t.y + t.height), e.lineTo(t.x + t.width, t.y), e.lineTo(t.x, t.y), e.moveTo(t.x + 4 * n, t.y), e.lineTo(t.x + 4 * n, t.y + 8 * r), e.lineTo(t.x + 12 * n, t.y + 8 * r), e.lineTo(t.x + 12 * n, t.y), e.moveTo(t.x + 6 * n, t.y + 11 * r), e.lineTo(t.x + 6 * n, t.y + 13 * r), e.lineTo(t.x + 10 * n, t.y + 13 * r), e.lineTo(t.x + 10 * n, t.y + 11 * r), e.lineTo(t.x + 6 * n, t.y + 11 * r), e.moveTo(t.x, t.y), e.lineTo(t.x, t.y)
    }
    function v(e, t) {
        var n = t.x, r = t.y, i = t.width, s = t.height;
        e.moveTo(n, r + s / 2), e.lineTo(n + i, r + s / 2), e.moveTo(n + i / 2, r), e.lineTo(n + i / 2, r + s)
    }
    function m(e, t) {
        var n = t.width / 2, r = t.height / 2, i = Math.min(n, r);
        e.moveTo(t.x + n + i, t.y + r), e.arc(t.x + n, t.y + r, i, 0, Math.PI * 2)
    }
    function g(e, t) {
        e.rect(t.x, t.y, t.width, t.height)
    }
    function y(e, t) {
        var n = t.width / 2, r = t.height / 2, i = t.x + n, s = t.y + r, o = Math.min(n, r);
        e.moveTo(i, s - o), e.lineTo(i + o, s + o), e.lineTo(i - o, s + o), e.lineTo(i, s - o)
    }
    function b(e, t) {
        var n = t.width / 2, r = t.height / 2, i = t.x + n, s = t.y + r, o = Math.min(n, r);
        e.moveTo(i, s - o), e.lineTo(i + o, s), e.lineTo(i, s + o), e.lineTo(i - o, s), e.lineTo(i, s - o)
    }
    function w(e, t) {
        var n = t.x, r = t.y, i = t.width / 16;
        e.moveTo(n + 8 * i, r), e.lineTo(n + i, r + t.height), e.lineTo(n + 8 * i, r + t.height / 4 * 3), e.lineTo(n + 15 * i, r + t.height), e.lineTo(n + 8 * i, r)
    }
    function E(t, n) {
        var r = n.width / 2, i = n.height / 2, s = e("zrender/shape").get("star");
        s.buildPath(t, {x: n.x + r, y: n.y + i, r: Math.min(r, i), n: n.n || 5})
    }
    function S(t, n) {
        var r = e("zrender/shape").get("heart");
        r.buildPath(t, {x: n.x + n.width / 2, y: n.y + n.height * .2, a: n.width / 2, b: n.height * .8})
    }
    function x(t, n) {
        var r = e("zrender/shape").get("droplet");
        r.buildPath(t, {x: n.x + n.width * .5, y: n.y + n.height * .5, a: n.width * .5, b: n.height * .8})
    }
    function T(e, t) {
        var n = t.x, r = t.y - t.height / 2 * 1.5, i = t.width / 2, s = t.height / 2, o = Math.min(i, s);
        e.arc(n + i, r + s, o, Math.PI / 5 * 4, Math.PI / 5), e.lineTo(n + i, r + s + o * 1.5)
    }
    function N(t, n) {
        setTimeout(function() {
            e("zrender/shape").get("image").brush(t, {style: n})
        }, 100)
    }
    var t = e("zrender/tool/matrix");
    return n.prototype = {buildPath: function(e, t) {
            this._iconLibrary[t.iconType] ? this._iconLibrary[t.iconType](e, t) : (e.moveTo(t.x, t.y), e.lineTo(t.x + t.width, t.y), e.lineTo(t.x + t.width, t.y + t.height), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x, t.y));
            return
        }, getRect: function(e) {
            return{x: Math.round(e.x), y: Math.round(e.y - (e.iconType == "pin" ? e.height / 2 * 1.5 : 0)), width: e.width, height: e.height}
        }, isCover: function(e, n, r) {
            if (e.__needTransform && e._transform) {
                var i = [];
                t.invert(i, e._transform);
                var s = [n, r];
                t.mulVector(s, i, [n, r, 1]), n == s[0] && r == s[1] && (Math.abs(e.rotation[0]) > 1e-4 || Math.abs(e.position[0]) > 1e-4 || Math.abs(e.position[1]) > 1e-4 || Math.abs(e.scale[0] - 1) > 1e-4 || Math.abs(e.scale[1] - 1) > 1e-4 ? e.__needTransform = !0 : e.__needTransform = !1), n = s[0], r = s[1]
            }
            var o;
            e.style.__rect ? o = e.style.__rect : (o = this.getRect(e.style), e.style.__rect = o);
            var u = o.height < 8 || o.width < 8 ? 4 : 0;
            return n >= o.x - u && n <= o.x + o.width + u && r >= o.y - u && r <= o.y + o.height + u ? !0 : !1
        }, define: function(e, t) {
            this._iconLibrary[e] = t
        }, get: function(e) {
            return this._iconLibrary[e]
        }}, e("zrender/shape/base").derive(n), e("zrender/shape").define("icon", new n), n
}), define("echarts/util/shape/markLine", ["require", "zrender/tool/matrix", "zrender/shape", "zrender/shape", "zrender/shape/base", "zrender/shape"], function(e) {
    function n() {
        this.type = "markLine"
    }
    var t = e("zrender/tool/matrix");
    return n.prototype = {brush: function(e, t, n) {
            var r = t.style || {};
            n && (r = this.getHighlightStyle(r, t.highlightStyle || {})), e.save(), this.setContext(e, r), t.__needTransform && e.transform.apply(e, this.updateTransform(t)), e.beginPath(), this.buildLinePath(e, r), e.stroke(), this.brushSymbol(t, e, r, 0), this.brushSymbol(t, e, r, 1), typeof r.text != "undefined" && this.drawText(e, r, t.style), e.restore();
            return
        }, buildLinePath: function(e, t) {
            var n = t.pointList || this.getPointList(t);
            t.pointList = n, typeof t.pointListLength == "undefined" && (t.pointListLength = n.length);
            var r = Math.round(t.pointListLength);
            if (!t.lineType || t.lineType == "solid") {
                e.moveTo(n[0][0], n[0][1]);
                for (var i = 1; i < r; i++)
                    e.lineTo(n[i][0], n[i][1])
            } else if (t.lineType == "dashed" || t.lineType == "dotted")
                if (t.smooth !== "spline") {
                    var s = (t.lineWidth || 1) * (t.lineType == "dashed" ? 5 : 1);
                    e.moveTo(n[0][0], n[0][1]);
                    for (var i = 1; i < r; i++)
                        this.dashedLineTo(e, n[i - 1][0], n[i - 1][1], n[i][0], n[i][1], s)
                } else
                    for (var i = 0; i < r - 1; i += 2)
                        e.moveTo(n[i][0], n[i][1]), e.lineTo(n[i + 1][0], n[i + 1][1])
        }, brushSymbol: function(n, r, i, s) {
            if (i.symbol[s] == "none")
                return;
            r.save(), r.beginPath(), r.lineWidth = i.symbolBorder, r.strokeStyle = i.symbolBorderColor, i.iconType = i.symbol[s].replace("empty", "").toLowerCase(), i.symbol[s].match("empty") && (r.fillStyle = "#fff");
            var o = Math.round(i.pointListLength || i.pointList.length), u = s === 0 ? i.pointList[0][0] : i.pointList[o - 1][0], a = s === 0 ? i.pointList[0][1] : i.pointList[o - 1][1], f = typeof i.symbolRotate[s] != "undefined" ? i.symbolRotate[s] - 0 : 0, l;
            f !== 0 && (l = t.create(), t.identity(l), (u || a) && t.translate(l, l, [-u, -a]), t.rotate(l, l, f * Math.PI / 180), (u || a) && t.translate(l, l, [u, a]), r.transform.apply(r, l));
            if (i.iconType == "arrow" && f === 0)
                this.buildArrawPath(r, i, s);
            else {
                var c = i.symbolSize[s];
                i.x = u - c, i.y = a - c, i.width = c * 2, i.height = c * 2, e("zrender/shape").get("icon").buildPath(r, i)
            }
            r.closePath(), r.fill(), r.stroke(), r.restore()
        }, buildArrawPath: function(e, t, n) {
            var r = Math.round(t.pointListLength || t.pointList.length), i = t.symbolSize[n] * 2, s = t.pointList[0][0], o = t.pointList[r - 1][0], u = t.pointList[0][1], a = t.pointList[r - 1][1], f = 0;
            t.smooth === "spline" && (f = .2);
            var l = Math.atan(Math.abs((a - u) / (s - o)));
            n === 0 ? o > s ? a > u ? l = Math.PI * 2 - l + f : l += f : a > u ? l += Math.PI - f : l = Math.PI - l - f : s > o ? u > a ? l = Math.PI * 2 - l + f : l += f : u > a ? l += Math.PI - f : l = Math.PI - l - f;
            var c = Math.PI / 8, h = n === 0 ? s : o, p = n === 0 ? u : a, d = [[h + i * Math.cos(l - c), p - i * Math.sin(l - c)], [h + i * .6 * Math.cos(l), p - i * .6 * Math.sin(l)], [h + i * Math.cos(l + c), p - i * Math.sin(l + c)]];
            e.moveTo(h, p);
            for (var v = 0, m = d.length; v < m; v++)
                e.lineTo(d[v][0], d[v][1]);
            e.lineTo(h, p)
        }, getPointList: function(e) {
            var t = [[e.xStart, e.yStart], [e.xEnd, e.yEnd]];
            if (e.smooth === "spline") {
                var n = t[1][0], r = t[1][1];
                t[3] = [n, r], t[1] = this.getOffetPoint(t[0], t[3]), t[2] = this.getOffetPoint(t[3], t[0]), t = this.smoothSpline(t, !1), t[t.length - 1] = [n, r]
            }
            return t
        }, getOffetPoint: function(e, t) {
            var n = Math.sqrt(Math.round((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]))) / 3, r = [e[0], e[1]], i, s = .2;
            if (e[0] != t[0] && e[1] != t[1]) {
                var o = (t[1] - e[1]) / (t[0] - e[0]);
                i = Math.atan(o)
            } else
                e[0] == t[0] ? i = (e[1] <= t[1] ? 1 : -1) * Math.PI / 2 : i = 0;
            var u, a;
            return e[0] <= t[0] ? (i -= s, u = Math.round(Math.cos(i) * n), a = Math.round(Math.sin(i) * n), r[0] += u, r[1] += a) : (i += s, u = Math.round(Math.cos(i) * n), a = Math.round(Math.sin(i) * n), r[0] -= u, r[1] -= a), r
        }, getRect: function(e) {
            var t = e.lineWidth || 1;
            return{x: Math.min(e.xStart, e.xEnd) - t, y: Math.min(e.yStart, e.yEnd) - t, width: Math.abs(e.xStart - e.xEnd) + t, height: Math.abs(e.yStart - e.yEnd) + t}
        }, isCover: function(t, n, r) {
            return e("zrender/shape").get(t.style.smooth !== "spline" ? "line" : "brokenLine").isCover(t, n, r)
        }}, e("zrender/shape/base").derive(n), e("zrender/shape").define("markLine", new n), n
}), define("echarts/chart", [], function() {
    var e = {}, t = {};
    return e.define = function(n, r) {
        return t[n] = r, e
    }, e.get = function(e) {
        return t[e]
    }, e
}), define("echarts/util/ecData", [], function() {
    function e(e, t, n, r, i, s, o, u) {
        var a;
        return typeof r != "undefined" && (typeof r.value != "undefined" ? a = r.value : a = r), e._echartsData = {_series: t, _seriesIndex: n, _data: r, _dataIndex: i, _name: s, _value: a, _special: o, _special2: u}, e._echartsData
    }
    function t(e, t) {
        var n = e._echartsData;
        if (!t)
            return n;
        switch (t) {
            case"series":
                return n && n._series;
            case"seriesIndex":
                return n && n._seriesIndex;
            case"data":
                return n && n._data;
            case"dataIndex":
                return n && n._dataIndex;
            case"name":
                return n && n._name;
            case"value":
                return n && n._value;
            case"special":
                return n && n._special;
            case"special2":
                return n && n._special2
        }
        return null
    }
    function n(e, t, n) {
        e._echartsData = e._echartsData || {};
        switch (t) {
            case"series":
                e._echartsData._series = n;
                break;
            case"seriesIndex":
                e._echartsData._seriesIndex = n;
                break;
            case"data":
                e._echartsData._data = n;
                break;
            case"dataIndex":
                e._echartsData._dataIndex = n;
                break;
            case"name":
                e._echartsData._name = n;
                break;
            case"value":
                e._echartsData._value = n;
                break;
            case"special":
                e._echartsData._special = n;
                break;
            case"special2":
                e._echartsData._special2 = n
            }
    }
    return{pack: e, set: n, get: t}
}), define("echarts/util/ecQuery", ["zrender/tool/util"], function() {
    function t(e, t) {
        if (typeof e == "undefined")
            return undefined;
        if (!t)
            return e;
        t = t.split(".");
        var n = t.length, r = 0;
        while (r < n) {
            e = e[t[r]];
            if (typeof e == "undefined")
                return undefined;
            r++
        }
        return e
    }
    function n(e, n) {
        var r;
        for (var i = 0, s = e.length; i < s; i++) {
            r = t(e[i], n);
            if (typeof r != "undefined")
                return r
        }
        return undefined
    }
    function r(n, r) {
        var i, s, o = n.length;
        while (o--)
            s = t(n[o], r), typeof s != "undefined" && (typeof i == "undefined" ? i = e.clone(s) : e.merge(i, s, {overwrite: !0, recursive: !0}));
        return i
    }
    var e = require("zrender/tool/util");
    return{query: t, deepQuery: n, deepMerge: r}
}), define("echarts/util/number", [], function() {
    function e(e) {
        return e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }
    function t(t, n) {
        return typeof t == "string" ? e(t).match(/%$/) ? parseFloat(t) / 100 * n : parseFloat(t) : t
    }
    function n(e, n) {
        return[t(n[0], e.getWidth()), t(n[1], e.getHeight())]
    }
    function r(e, n) {
        n instanceof Array || (n = [0, n]);
        var r = Math.min(e.getWidth(), e.getHeight()) / 2;
        return[t(n[0], r), t(n[1], r)]
    }
    function i(e) {
        return isNaN(e) ? "-" : (e = (e + "").split("."), e[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (e.length > 1 ? "." + e[1] : ""))
    }
    return{parsePercent: t, parseCenter: n, parseRadius: r, addCommas: i}
}), define("echarts/component/base", ["require", "../util/ecData", "../util/ecQuery", "../util/number", "zrender/tool/util", "zrender/tool/area", "zrender/tool/env"], function(e) {
    function t(t, n) {
        function h(e) {
            e = e || a.type + "";
            switch (e) {
                case t.COMPONENT_TYPE_GRID:
                case t.COMPONENT_TYPE_AXIS_CATEGORY:
                case t.COMPONENT_TYPE_AXIS_VALUE:
                    return 0;
                case t.CHART_TYPE_LINE:
                case t.CHART_TYPE_BAR:
                case t.CHART_TYPE_SCATTER:
                case t.CHART_TYPE_PIE:
                case t.CHART_TYPE_RADAR:
                case t.CHART_TYPE_MAP:
                case t.CHART_TYPE_K:
                case t.CHART_TYPE_CHORD:
                    return 2;
                case t.COMPONENT_TYPE_LEGEND:
                case t.COMPONENT_TYPE_DATARANGE:
                case t.COMPONENT_TYPE_DATAZOOM:
                    return 4;
                case t.CHART_TYPE_ISLAND:
                    return 5;
                case t.COMPONENT_TYPE_TOOLBOX:
                case t.COMPONENT_TYPE_TITLE:
                    return 6;
                case t.COMPONENT_TYPE_TOOLTIP:
                    return 8;
                default:
                    return 0
                }
        }
        function p(e) {
            return o.merge(e || {}, o.clone(t[a.type] || {}), {overwrite: !1, recursive: !0})
        }
        function d(e) {
            if (!(e instanceof Array))
                return[e, e, e, e];
            switch (e.length + "") {
                case"4":
                    return e;
                case"3":
                    return[e[0], e[1], e[2], e[1]];
                case"2":
                    return[e[0], e[1], e[0], e[1]];
                case"1":
                    return[e[0], e[0], e[0], e[0]];
                case"0":
                    return[0, 0, 0, 0]
                }
        }
        function v(e) {
            var n = o.merge(o.clone(e) || {}, t.textStyle, {overwrite: !1});
            return n.fontStyle + " " + n.fontWeight + " " + n.fontSize + "px " + n.fontFamily
        }
        function m(e, t, n, r, i) {
            var s = [n, t], o = a.deepMerge(s, "itemStyle.normal.label"), u = a.deepMerge(s, "itemStyle.emphasis.label"), f = o.textStyle || {}, l = u.textStyle || {};
            return o.show && (e.style.text = g(t, n, r, "normal"), e.style.textPosition = typeof o.position == "undefined" ? i == "horizontal" ? "right" : "top" : o.position, e.style.textColor = f.color, e.style.textFont = a.getFont(f)), u.show && (e.highlightStyle.text = g(t, n, r, "emphasis"), e.highlightStyle.textPosition = o.show ? e.style.textPosition : typeof u.position == "undefined" ? i == "horizontal" ? "right" : "top" : u.position, e.highlightStyle.textColor = l.color, e.highlightStyle.textFont = a.getFont(l)), e
        }
        function g(e, t, n, r) {
            var i = a.deepQuery([t, e], "itemStyle." + r + ".label.formatter");
            !i && r == "emphasis" && (i = a.deepQuery([t, e], "itemStyle.normal.label.formatter"));
            var s = typeof t != "undefined" ? typeof t.value != "undefined" ? t.value : t : "-";
            if (!i)
                return s;
            if (typeof i == "function")
                return i(e.name, n, s);
            if (typeof i == "string")
                return i = i.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}"), i = i.replace("{a0}", e.name).replace("{b0}", n).replace("{c0}", s), i
        }
        function y(e, t, n, r, i) {
            a.selectedMap[e.name] && (e.markPoint && b(e, t, n, r, i), e.markLine && w(e, t, n, r, i))
        }
        function b(e, n, r, i, s) {
            var f = a.getZlevelBase(), l, c, h = o.clone(e.markPoint);
            for (var p = 0, d = h.data.length; p < d; p++)
                l = h.data[p], c = a.getMarkCoord(e, n, l, i), h.data[p].x = typeof l.x != "undefined" ? l.x : c[0], h.data[p].y = typeof l.y != "undefined" ? l.y : c[1], l.type && (l.type == "max" || l.type == "min") && (h.data[p].value = c[3], h.data[p].name = l.name || l.type, h.data[p].symbolSize = h.data[p].symbolSize || u.getTextWidth(c[3], a.getFont()) / 2 + 5);
            var v = E(e, n, h, r);
            for (var p = 0, d = v.length; p < d; p++) {
                v[p].zlevel = f + 1;
                for (var m in s)
                    v[p][m] = s[m];
                a.shapeList.push(v[p])
            }
            if (a.type == t.CHART_TYPE_FORCE || a.type == t.CHART_TYPE_CHORD)
                for (var p = 0, d = v.length; p < d; p++)
                    v[p].id = a.zr.newShapeId(a.type), a.zr.addShape(v[p])
        }
        function w(e, n, r, i, s) {
            var u = a.getZlevelBase(), f, l, c = o.clone(e.markLine);
            for (var h = 0, p = c.data.length; h < p; h++)
                f = c.data[h], !f.type || f.type != "max" && f.type != "min" && f.type != "average" ? l = [a.getMarkCoord(e, n, f[0], i), a.getMarkCoord(e, n, f[1], i)] : (l = a.getMarkCoord(e, n, f, i), c.data[h] = [o.clone(f), {}], c.data[h][0].name = f.name || f.type, c.data[h][0].value = l[3], l = l[2], f = [{}, {}]), c.data[h][0].x = typeof f[0].x != "undefined" ? f[0].x : l[0][0], c.data[h][0].y = typeof f[0].y != "undefined" ? f[0].y : l[0][1], c.data[h][1].x = typeof f[1].x != "undefined" ? f[1].x : l[1][0], c.data[h][1].y = typeof f[1].y != "undefined" ? f[1].y : l[1][1];
            var d = S(e, n, c, r);
            for (var h = 0, p = d.length; h < p; h++) {
                d[h].zlevel = u + 1;
                for (var v in s)
                    d[h][v] = s[v];
                a.shapeList.push(d[h])
            }
            if (a.type == t.CHART_TYPE_FORCE || a.type == t.CHART_TYPE_CHORD)
                for (var h = 0, p = d.length; h < p; h++)
                    d[h].id = a.zr.newShapeId(a.type), a.zr.addShape(d[h])
        }
        function E(e, n, i, s) {
            o.merge(i, t.markPoint, {overwrite: !1, recursive: !0}), i.name = e.name;
            var u = [], f = i.data, l, c = s.dataRange, h = s.legend, p, d, v, m, g, y, b = a.zr.getWidth(), w = a.zr.getHeight();
            for (var E = 0, S = f.length; E < S; E++) {
                h && (p = h.getColor(e.name));
                if (c) {
                    d = typeof f[E] != "undefined" ? typeof f[E].value != "undefined" ? f[E].value : f[E] : "-", p = isNaN(d) ? p : c.getColor(d), v = [f[E], i], m = a.deepQuery(v, "itemStyle.normal.color") || p, g = a.deepQuery(v, "itemStyle.emphasis.color") || m;
                    if (m == null && g == null)
                        continue
                }
                f[E].tooltip = f[E].tooltip || {trigger: "item"}, f[E].name = typeof f[E].name != "undefined" ? f[E].name : "", f[E].value = typeof f[E].value != "undefined" ? f[E].value : "", l = T(i, n, f[E], E, f[E].name, a.parsePercent(f[E].x, b), a.parsePercent(f[E].y, w), "pin", p, "rgba(0,0,0,0)", "horizontal"), y = a.deepMerge([f[E], i], "effect"), y.show && (l.effect = y), r.pack(l, e, n, f[E], 0, f[E].name), u.push(l)
            }
            return u
        }
        function S(e, n, i, s) {
            o.merge(i, t.markLine, {overwrite: !1, recursive: !0}), i.symbol = i.symbol instanceof Array ? i.symbol.length > 1 ? i.symbol : [i.symbol[0], i.symbol[0]] : [i.symbol, i.symbol], i.symbolSize = i.symbolSize instanceof Array ? i.symbolSize.length > 1 ? i.symbolSize : [i.symbolSize[0], i.symbolSize[0]] : [i.symbolSize, i.symbolSize], i.symbolRotate = i.symbolRotate instanceof Array ? i.symbolRotate.length > 1 ? i.symbolRotate : [i.symbolRotate[0], i.symbolRotate[0]] : [i.symbolRotate, i.symbolRotate], i.name = e.name;
            var u = [], f = i.data, l, c = s.dataRange, h = s.legend, p, d, v, m, g, y, b = a.zr.getWidth(), w = a.zr.getHeight(), E;
            for (var S = 0, x = f.length; S < x; S++) {
                h && (p = h.getColor(e.name)), E = a.deepMerge(f[S]);
                if (c) {
                    d = typeof E != "undefined" ? typeof E.value != "undefined" ? E.value : E : "-", p = isNaN(d) ? p : c.getColor(d), v = [E, i], m = a.deepQuery(v, "itemStyle.normal.color") || p, g = a.deepQuery(v, "itemStyle.emphasis.color") || m;
                    if (m == null && g == null)
                        continue
                }
                f[S][0].tooltip = E.tooltip || {trigger: "item"}, f[S][0].name = typeof f[S][0].name != "undefined" ? f[S][0].name : "", f[S][1].name = typeof f[S][1].name != "undefined" ? f[S][1].name : "", f[S][0].value = typeof f[S][0].value != "undefined" ? f[S][0].value : "", l = N(i, n, f[S], S, a.parsePercent(f[S][0].x, b), a.parsePercent(f[S][0].y, w), a.parsePercent(f[S][1].x, b), a.parsePercent(f[S][1].y, w), p), y = a.deepMerge([E, i], "effect"), y.show && (l.effect = y), r.pack(l, e, n, f[S][0], 0, f[S][0].name + (f[S][1].name !== "" ? " > " + f[S][1].name : "")), u.push(l)
            }
            return u
        }
        function x() {
            return[0, 0]
        }
        function T(e, t, n, i, s, o, u, f, l, c, h) {
            var p = [n, e], d = typeof n != "undefined" ? typeof n.value != "undefined" ? n.value : n : "-";
            f = a.deepQuery(p, "symbol") || f;
            var v = a.deepQuery(p, "symbolSize");
            v = typeof v == "function" ? v(d) : v;
            var m = a.deepQuery(p, "symbolRotate"), g = a.deepMerge(p, "itemStyle.normal"), y = a.deepMerge(p, "itemStyle.emphasis"), b = typeof g.borderWidth != "undefined" ? g.borderWidth : g.lineStyle && g.lineStyle.width;
            typeof b == "undefined" && (b = 0);
            var w = typeof y.borderWidth != "undefined" ? y.borderWidth : y.lineStyle && y.lineStyle.width;
            typeof w == "undefined" && (w = b + 2);
            var E = {shape: "icon", style: {iconType: f.replace("empty", "").toLowerCase(), x: o - v, y: u - v, width: v * 2, height: v * 2, brushType: "both", color: f.match("empty") ? c : a.getItemStyleColor(g.color, t, i, n) || l, strokeColor: g.borderColor || a.getItemStyleColor(g.color, t, i, n) || l, lineWidth: b}, highlightStyle: {color: f.match("empty") ? c : a.getItemStyleColor(y.color, t, i, n), strokeColor: y.borderColor || g.borderColor || a.getItemStyleColor(g.color, t, i, n) || l, lineWidth: w}, clickable: !0};
            return f.match("image") && (E.style.image = f.replace(new RegExp("^image:\\/\\/"), ""), E.shape = "image"), typeof m != "undefined" && (E.rotation = [m * Math.PI / 180, o, u]), f.match("star") && (E.style.iconType = "star", E.style.n = f.replace("empty", "").replace("star", "") - 0 || 5), f == "none" && (E.invisible = !0, E.hoverable = !1), E = a.addLabel(E, e, n, s, h), f.match("empty") && (typeof E.style.textColor == "undefined" && (E.style.textColor = E.style.strokeColor), typeof E.highlightStyle.textColor == "undefined" && (E.highlightStyle.textColor = E.highlightStyle.strokeColor)), r.pack(E, e, t, n, i, s), E._mark = "point", E._x = o, E._y = u, E._dataIndex = i, E._seriesIndex = t, E
        }
        function N(e, t, n, r, i, s, o, u, f) {
            var l = typeof n[0] != "undefined" ? typeof n[0].value != "undefined" ? n[0].value : n[0] : "-", c = typeof n[1] != "undefined" ? typeof n[1].value != "undefined" ? n[1].value : n[1] : "-", h = [a.query(n[0], "symbol") || e.symbol[0], a.query(n[1], "symbol") || e.symbol[1]], p = [a.query(n[0], "symbolSize") || e.symbolSize[0], a.query(n[1], "symbolSize") || e.symbolSize[1]];
            p[0] = typeof p[0] == "function" ? p[0](l) : p[0], p[1] = typeof p[1] == "function" ? p[1](c) : p[1];
            var d = [a.query(n[0], "symbolRotate") || e.symbolRotate[0], a.query(n[1], "symbolRotate") || e.symbolRotate[1]], v = [n[0], e], m = a.deepMerge(v, "itemStyle.normal");
            m.color = a.getItemStyleColor(m.color, t, r, n);
            var g = a.deepMerge(v, "itemStyle.emphasis");
            g.color = a.getItemStyleColor(g.color, t, r, n);
            var y = m.lineStyle, b = g.lineStyle, w = y.width;
            typeof w == "undefined" && (w = m.borderWidth);
            var E = b.width;
            typeof E == "undefined" && (typeof g.borderWidth != "undefined" ? E = g.borderWidth : E = w + 2);
            var S = {shape: "markLine", style: {smooth: e.smooth ? "spline" : !1, symbol: h, symbolSize: p, symbolRotate: d, xStart: i, yStart: s, xEnd: o, yEnd: u, brushType: "both", lineType: y.type, shadowColor: y.shadowColor, shadowBlur: y.shadowBlur, shadowOffsetX: y.shadowOffsetX, shadowOffsetY: y.shadowOffsetY, color: m.color || f, strokeColor: y.color || m.borderColor || m.color || f, lineWidth: w, symbolBorderColor: m.borderColor || m.color || f, symbolBorder: m.borderWidth}, highlightStyle: {shadowColor: b.shadowColor, shadowBlur: b.shadowBlur, shadowOffsetX: b.shadowOffsetX, shadowOffsetY: b.shadowOffsetY, color: g.color || m.color || f, strokeColor: b.color || y.color || g.borderColor || m.borderColor || g.color || m.color || f, lineWidth: E, symbolBorderColor: g.borderColor || m.borderColor || g.color || m.color || f, symbolBorder: typeof g.borderWidth == "undefined" ? m.borderWidth + 2 : g.borderWidth}, clickable: !0};
            return S = a.addLabel(S, e, n[0], n[0].name + " : " + n[1].name), S._mark = "line", S._x = o, S._y = u, S
        }
        function C(e, t, n, r) {
            return typeof e == "function" ? e(t, n, r) : e
        }
        function k(e, t) {
            return t % 2 == 1 ? e = Math.floor(e) + .5 : e = Math.round(e), e
        }
        function L() {
            c[a.type] ? a.animationMark(t.animationDuration) : a.animationEffect()
        }
        function A(e, t) {
            var r, i;
            for (var s = 0, o = a.shapeList.length; s < o; s++) {
                if (!a.shapeList[s]._mark)
                    continue;
                r = a.shapeList[s]._x || 0, i = a.shapeList[s]._y || 0, a.shapeList[s]._mark == "point" ? (n.modShape(a.shapeList[s].id, {scale: [0, 0, r, i]}, !0), n.animate(a.shapeList[s].id, "").when(e, {scale: [1, 1, r, i]}).start(t || "QuinticOut")) : a.shapeList[s]._mark == "line" && (a.shapeList[s].style.smooth ? (n.modShape(a.shapeList[s].id, {style: {pointListLength: 1}}, !0), n.animate(a.shapeList[s].id, "style").when(e, {pointListLength: a.shapeList[s].style.pointList.length}).start(t || "QuinticOut")) : (n.modShape(a.shapeList[s].id, {style: {pointList: [[a.shapeList[s].style.xStart, a.shapeList[s].style.yStart], [a.shapeList[s].style.xStart, a.shapeList[s].style.yStart]]}}, !0), n.animate(a.shapeList[s].id, "style").when(e, {pointList: [[a.shapeList[s].style.xStart, a.shapeList[s].style.yStart], [r, i]]}).start(t || "QuinticOut")))
            }
            a.animationEffect()
        }
        function O() {
            _();
            var e = f;
            l && n.modLayer(e, {motionBlur: !0, lastFrameAlpha: .95});
            var t, r, i, s;
            for (var o = 0, u = a.shapeList.length; o < u; o++) {
                shape = a.shapeList[o];
                if (!shape._mark || !shape.effect || !shape.effect.show)
                    continue;
                s = shape.effect, t = s.color || shape.style.strokeColor || shape.style.color, r = s.shadowColor || t;
                var c, h;
                switch (shape._mark) {
                    case"point":
                        i = s.scaleSize, shadowBlur = typeof s.shadowBlur != "undefined" ? s.shadowBlur : i, c = {shape: shape.shape, id: n.newShapeId(), zlevel: e, style: {brushType: "stroke", iconType: shape.style.iconType != "pin" && shape.style.iconType != "droplet" ? shape.style.iconType : "circle", x: shadowBlur + 1, y: shadowBlur + 1, n: shape.style.n, width: shape.style.width * i, height: shape.style.height * i, lineWidth: 1, strokeColor: t, shadowColor: r, shadowBlur: shadowBlur}, draggable: !1, hoverable: !1}, l && (c.style.image = n.shapeToImage(c, c.style.width + shadowBlur * 2 + 2, c.style.height + shadowBlur * 2 + 2).style.image, c.shape = "image"), h = (c.style.width - shape.style.width) / 2;
                        break;
                    case"line":
                        i = shape.style.lineWidth * s.scaleSize, shadowBlur = typeof s.shadowBlur != "undefined" ? s.shadowBlur : i, c = {shape: "circle", id: n.newShapeId(), zlevel: e, style: {x: shadowBlur, y: shadowBlur, r: i, color: t, shadowColor: r, shadowBlur: shadowBlur}, draggable: !1, hoverable: !1}, l ? (c.style.image = n.shapeToImage(c, (i + shadowBlur) * 2, (i + shadowBlur) * 2).style.image, c.shape = "image", h = shadowBlur) : h = 0
                }
                var p;
                c.position = shape.position;
                if (shape._mark === "point")
                    c.style.x = shape.style.x - h, c.style.y = shape.style.y - h, p = (s.period + Math.random() * 10) * 100;
                else if (shape._mark === "line") {
                    c.style.x = shape.style.xStart - h, c.style.y = shape.style.yStart - h;
                    var d = (shape.style.xStart - shape._x) * (shape.style.xStart - shape._x) + (shape.style.yStart - shape._y) * (shape.style.yStart - shape._y);
                    p = Math.round(Math.sqrt(Math.round(d * s.period * s.period)))
                }
                a.effectList.push(c), n.addShape(c);
                if (shape._mark === "point") {
                    n.modShape(shape.id, {invisible: !0}, !0);
                    var v = c.style.x + c.style.width / 2, m = c.style.y + c.style.height / 2;
                    n.modShape(c.id, {scale: [.1, .1, v, m]}, !0), n.animate(c.id, "", !0).when(p, {scale: [1, 1, v, m]}).start()
                } else if (shape._mark === "line")
                    if (!shape.style.smooth)
                        n.animate(c.id, "style", !0).when(p, {x: shape._x - h, y: shape._y - h}).start();
                    else {
                        var g = shape.style.pointList, y = g.length;
                        p = Math.round(p / y);
                        var b = n.animate(c.id, "style", !0);
                        for (var w = 0; w < y; w++)
                            b.when(p * (w + 1), {x: g[w][0] - h, y: g[w][1] - h});
                        b.start()
                    }
            }
        }
        function M() {
            a.refresh && a.refresh()
        }
        function _() {
            a.zr && a.effectList.length > 0 && (a.zr.modLayer(f, {motionBlur: !1}), a.zr.delShape(a.effectList)), a.effectList = []
        }
        function D() {
            _(), a.zr && a.zr.delShape(a.shapeList), a.shapeList = []
        }
        function P() {
            a.clear(), a.shapeList = null, a.effectList = null, a = null
        }
        var r = e("../util/ecData"), i = e("../util/ecQuery"), s = e("../util/number"), o = e("zrender/tool/util"), u = e("zrender/tool/area"), a = this;
        a.zr = n, a.shapeList = [], a.effectList = [];
        var f = 7, l = e("zrender/tool/env").canvasSupported, c = {};
        c[t.CHART_TYPE_LINE] = !0, c[t.CHART_TYPE_BAR] = !0, c[t.CHART_TYPE_SCATTER] = !0, c[t.CHART_TYPE_PIE] = !0, c[t.CHART_TYPE_RADAR] = !0, c[t.CHART_TYPE_MAP] = !0, c[t.CHART_TYPE_K] = !0, c[t.CHART_TYPE_CHORD] = !0, a.getZlevelBase = h, a.reformOption = p, a.reformCssArray = d, a.query = i.query, a.deepQuery = i.deepQuery, a.deepMerge = i.deepMerge, a.getFont = v, a.addLabel = m, a.buildMark = y, a.getMarkCoord = x, a.getSymbolShape = T, a.parsePercent = s.parsePercent, a.parseCenter = s.parseCenter, a.parseRadius = s.parseRadius, a.numAddCommas = s.addCommas, a.getItemStyleColor = C, a.subPixelOptimize = k, a.animation = L, a.animationMark = A, a.animationEffect = O, a.resize = M, a.clearAnimationShape = _, a.clear = D, a.dispose = P
    }
    return t
}), define("echarts/util/accMath", [], function() {
    function e(e, n) {
        return t(e, 1 / n)
    }
    function t(e, t) {
        var n = 0, r = e.toString(), i = t.toString();
        try {
            n += r.split(".")[1].length
        } catch (s) {
        }
        try {
            n += i.split(".")[1].length
        } catch (s) {
        }
        return Number(r.replace(".", "")) * Number(i.replace(".", "")) / Math.pow(10, n)
    }
    function n(e, t) {
        var n, r, i;
        try {
            n = e.toString().split(".")[1].length
        } catch (s) {
            n = 0
        }
        try {
            r = t.toString().split(".")[1].length
        } catch (s) {
            r = 0
        }
        return i = Math.pow(10, Math.max(n, r)), (Math.round(e * i) + Math.round(t * i)) / i
    }
    function r(e, t) {
        return n(e, -t)
    }
    return{accDiv: e, accMul: t, accAdd: n, accSub: r}
}), define("echarts/chart/calculableBase", ["require", "../util/ecData", "../util/accMath", "zrender/tool/util"], function(e) {
    function t(t, n) {
        function u(e) {
            return e.dragEnableTime = n.DRAG_ENABLE_TIME, e.ondragover = o.shapeHandler.ondragover, e.ondragend = o.shapeHandler.ondragend, e.ondrop = o.shapeHandler.ondrop, e
        }
        function a(e, t) {
            if (!o.isDrop || !e.target)
                return;
            var s = e.target, u = e.dragged, a = r.get(s, "seriesIndex"), f = r.get(s, "dataIndex"), l = n.series[a].data[f] || "-";
            l.value ? l.value != "-" ? n.series[a].data[f].value = i.accAdd(n.series[a].data[f].value, r.get(u, "value")) : n.series[a].data[f].value = r.get(u, "value") : l != "-" ? n.series[a].data[f] = i.accAdd(n.series[a].data[f], r.get(u, "value")) : n.series[a].data[f] = r.get(u, "value"), t.dragIn = t.dragIn || !0, o.isDrop = !1;
            return
        }
        function f(e, t) {
            if (!o.isDragend || !e.target)
                return;
            var i = e.target, s = r.get(i, "seriesIndex"), u = r.get(i, "dataIndex");
            n.series[s].data[u] = "-", t.dragOut = !0, t.needRefresh = !0, o.isDragend = !1;
            return
        }
        function l(e, t) {
            var n = e.selected;
            for (var r in o.selectedMap)
                o.selectedMap[r] != n[r] && (t.needRefresh = !0), o.selectedMap[r] = n[r];
            return
        }
        var r = e("../util/ecData"), i = e("../util/accMath"), s = e("zrender/tool/util"), o = this;
        o.selectedMap = {}, o.shapeHandler = {onclick: function() {
                o.isClick = !0
            }, ondragover: function(e) {
                var t = s.clone(e.target);
                t.highlightStyle = {text: "", r: t.style.r + 5, brushType: "stroke", strokeColor: n.calculableColor, lineWidth: (t.style.lineWidth || 1) + 12}, o.zr.addHoverShape(t)
            }, ondrop: function(e) {
                typeof r.get(e.dragged, "data") != "undefined" && (o.isDrop = !0)
            }, ondragend: function() {
                o.isDragend = !0
            }}, o.setCalculable = u, o.ondrop = a, o.ondragend = f, o.onlegendSelected = l
    }
    return t
}), define("echarts/chart/island", ["require", "../component/base", "./calculableBase", "../util/ecData", "zrender/tool/event", "zrender/tool/color", "../util/accMath", "../chart"], function(e) {
    function t(t, n, r) {
        function v(t, n) {
            var r = e("zrender/tool/color"), i = e("../util/accMath"), s = i.accAdd(o.get(t, "value"), o.get(n, "value")), u = o.get(t, "name") + c + o.get(n, "name");
            t.style.text = u + h + s, o.set(t, "value", s), o.set(t, "name", u), t.style.r = f.island.r, t.style.color = r.mix(t.style.color, n.style.color)
        }
        function m(e) {
            e && (e.island = a.reformOption(e.island), f = e, c = f.nameConnector, h = f.valueConnector)
        }
        function g(e) {
            m(e);
            for (var t = 0, n = a.shapeList.length; t < n; t++)
                r.addShape(a.shapeList[t])
        }
        function y() {
            return f
        }
        function b() {
            var e = r.getWidth(), t = r.getHeight(), n = e / (d || e), i = t / (p || t);
            if (n == 1 && i == 1)
                return;
            d = e, p = t;
            for (var s = 0, o = a.shapeList.length; s < o; s++)
                r.modShape(a.shapeList[s].id, {style: {x: Math.round(a.shapeList[s].style.x * n), y: Math.round(a.shapeList[s].style.y * i)}}, !0)
        }
        function w(e) {
            var t = o.get(e, "name"), n = o.get(e, "value"), i = typeof o.get(e, "series") != "undefined" ? o.get(e, "series").name : "", s = a.getFont(f.island.textStyle), u = {shape: "circle", id: r.newShapeId(a.type), zlevel: l, style: {x: e.style.x, y: e.style.y, r: f.island.r, color: e.style.color || e.style.strokeColor, text: t + h + n, textFont: s}, draggable: !0, hoverable: !0, onmousewheel: a.shapeHandler.onmousewheel, _type: "island"};
            u.style.color == "#fff" && (u.style.color = e.style.strokeColor), a.setCalculable(u), u.dragEnableTime = 0, o.pack(u, {name: i}, -1, n, -1, t), a.shapeList.push(u), r.addShape(u)
        }
        function E(e) {
            r.delShape(e.id);
            var t = [];
            for (var n = 0, i = a.shapeList.length; n < i; n++)
                a.shapeList[n].id != e.id && t.push(a.shapeList[n]);
            a.shapeList = t
        }
        function S(e, t) {
            if (!a.isDrop || !e.target)
                return;
            var n = e.target, i = e.dragged;
            v(n, i), r.modShape(n.id, n), t.dragIn = !0, a.isDrop = !1;
            return
        }
        function x(e, t) {
            var n = e.target;
            a.isDragend ? t.dragIn && (E(n), t.needRefresh = !0) : t.dragIn || (n.style.x = u.getX(e.event), n.style.y = u.getY(e.event), w(n), t.needRefresh = !0), a.isDragend = !1;
            return
        }
        var i = e("../component/base");
        i.call(this, t, r);
        var s = e("./calculableBase");
        s.call(this, r, t);
        var o = e("../util/ecData"), u = e("zrender/tool/event"), a = this;
        a.type = t.CHART_TYPE_ISLAND;
        var f, l = a.getZlevelBase(), c, h, p = r.getHeight(), d = r.getWidth();
        a.shapeHandler.onmousewheel = function(e) {
            var t = e.target, n = e.event, i = u.getDelta(n);
            i = i > 0 ? -1 : 1, t.style.r -= i, t.style.r = t.style.r < 5 ? 5 : t.style.r;
            var s = o.get(t, "value"), a = s * f.island.calculateStep;
            a > 1 ? s = Math.round(s - a * i) : s = (s - a * i).toFixed(2) - 0;
            var l = o.get(t, "name");
            t.style.text = l + ":" + s, o.set(t, "value", s), o.set(t, "name", l), r.modShape(t.id, t), r.refresh(), u.stop(n)
        }, a.refresh = m, a.render = g, a.resize = b, a.getOption = y, a.add = w, a.del = E, a.ondrop = S, a.ondragend = x
    }
    return e("../chart").define("island", t), t
}), define("echarts/component", [], function() {
    var e = {}, t = {};
    return e.define = function(n, r) {
        return t[n] = r, e
    }, e.get = function(e) {
        return t[e]
    }, e
}), define("echarts/component/title", ["require", "./base", "zrender/tool/area", "zrender/tool/util", "../component"], function(e) {
    function t(t, n, r, i) {
        function h() {
            c = v(), d(), p();
            for (var e = 0, t = a.shapeList.length; e < t; e++)
                a.shapeList[e].id = r.newShapeId(a.type), r.addShape(a.shapeList[e])
        }
        function p() {
            var e = f.text, t = f.link, n = f.subtext, r = f.sublink, i = a.getFont(f.textStyle), s = a.getFont(f.subtextStyle), o = c.x, u = c.y, h = c.width, p = c.height, d = {shape: "text", zlevel: l, style: {y: u, color: f.textStyle.color, text: e, textFont: i, textBaseline: "top"}, highlightStyle: {brushType: "fill"}, hoverable: !1};
            t && (d.hoverable = !0, d.clickable = !0, d.onclick = function() {
                window.open(t)
            });
            var v = {shape: "text", zlevel: l, style: {y: u + p, color: f.subtextStyle.color, text: n, textFont: s, textBaseline: "bottom"}, highlightStyle: {brushType: "fill"}, hoverable: !1};
            r && (v.hoverable = !0, v.clickable = !0, v.onclick = function() {
                window.open(r)
            });
            switch (f.x) {
                case"center":
                    d.style.x = v.style.x = o + h / 2, d.style.textAlign = v.style.textAlign = "center";
                    break;
                case"left":
                    d.style.x = v.style.x = o, d.style.textAlign = v.style.textAlign = "left";
                    break;
                case"right":
                    d.style.x = v.style.x = o + h, d.style.textAlign = v.style.textAlign = "right";
                    break;
                default:
                    o = f.x - 0, o = isNaN(o) ? 0 : o, d.style.x = v.style.x = o
            }
            f.textAlign && (d.style.textAlign = v.style.textAlign = f.textAlign), a.shapeList.push(d), n !== "" && a.shapeList.push(v)
        }
        function d() {
            var e = f.padding[0], t = f.padding[1], n = f.padding[2], r = f.padding[3];
            a.shapeList.push({shape: "rectangle", zlevel: l, hoverable: !1, style: {x: c.x - r, y: c.y - e, width: c.width + r + t, height: c.height + e + n, brushType: f.borderWidth === 0 ? "fill" : "both", color: f.backgroundColor, strokeColor: f.borderColor, lineWidth: f.borderWidth}})
        }
        function v() {
            var e = f.text, t = f.subtext, n = a.getFont(f.textStyle), i = a.getFont(f.subtextStyle), s = Math.max(o.getTextWidth(e, n), o.getTextWidth(t, i)), u = o.getTextHeight(e, n) + (t === "" ? 0 : f.itemGap + o.getTextHeight(t, i)), l, c = r.getWidth();
            switch (f.x) {
                case"center":
                    l = Math.floor((c - s) / 2);
                    break;
                case"left":
                    l = f.padding[3] + f.borderWidth;
                    break;
                case"right":
                    l = c - s - f.padding[1] - f.borderWidth;
                    break;
                default:
                    l = f.x - 0, l = isNaN(l) ? 0 : l
            }
            var h, p = r.getHeight();
            switch (f.y) {
                case"top":
                    h = f.padding[0] + f.borderWidth;
                    break;
                case"bottom":
                    h = p - u - f.padding[2] - f.borderWidth;
                    break;
                case"center":
                    h = Math.floor((p - u) / 2);
                    break;
                default:
                    h = f.y - 0, h = isNaN(h) ? 0 : h
            }
            return{x: l, y: h, width: s, height: u}
        }
        function m(e) {
            g(e)
        }
        function g(e) {
            e && (i = e, i.title = a.reformOption(i.title), i.title.padding = a.reformCssArray(i.title.padding), f = i.title, f.textStyle = u.merge(f.textStyle, t.textStyle, {overwrite: !1, recursive: !1}), f.subtextStyle = u.merge(f.subtextStyle, t.textStyle, {overwrite: !1, recursive: !1}), a.clear(), h())
        }
        function y() {
            a.clear(), h()
        }
        var s = e("./base");
        s.call(this, t, r);
        var o = e("zrender/tool/area"), u = e("zrender/tool/util"), a = this;
        a.type = t.COMPONENT_TYPE_TITLE;
        var f, l = a.getZlevelBase(), c = {};
        a.init = m, a.refresh = g, a.resize = y, m(i)
    }
    return e("../component").define("title", t), t
}), define("echarts/component/categoryAxis", ["require", "./base", "zrender/tool/util", "zrender/tool/area", "../component"], function(e) {
    function t(t, n, r, i, s) {
        function d() {
            var e = u.clone(i.data), t = i.axisLabel.formatter, n;
            for (var r = 0, s = e.length; r < s; r++)
                n = e[r].formatter || t, n && (typeof n == "function" ? typeof e[r].value != "undefined" ? e[r].value = n(e[r].value) : e[r] = n(e[r]) : typeof n == "string" && (typeof e[r].value != "undefined" ? e[r].value = n.replace("{value}", e[r].value) : e[r] = n.replace("{value}", e[r])));
            return e
        }
        function v() {
            var e = i.axisLabel.interval;
            if (e == "auto") {
                var t = i.axisLabel.textStyle.fontSize, n = f.getFont(i.axisLabel.textStyle), r = i.data, s = i.data.length;
                if (i.position == "bottom" || i.position == "top")
                    if (s > 3) {
                        var o = T(), l = !1, c, h;
                        e = 0;
                        while (!l && e < s) {
                            e++, l = !0, c = o * e - 10;
                            for (var d = 0; d < s; d += e) {
                                i.axisLabel.rotate !== 0 ? h = t : r[d].textStyle ? h = a.getTextWidth(p[d].value || p[d], f.getFont(u.merge(r[d].textStyle, i.axisLabel.textStyle, {overwrite: !1, recursive: !0}))) : h = a.getTextWidth(p[d].value || p[d], n);
                                if (c < h) {
                                    l = !1;
                                    break
                                }
                            }
                        }
                    } else
                        e = 1;
                else if (s > 3) {
                    var o = T();
                    e = 1;
                    while (o * e - 6 < t && e < s)
                        e++
                } else
                    e = 1
            } else
                e += 1;
            return e
        }
        function m() {
            p = d(), h = v(), i.splitArea.show && E(), i.splitLine.show && w(), i.axisLine.show && g(), i.axisTick.show && y(), i.axisLabel.show && b();
            for (var e = 0, t = f.shapeList.length; e < t; e++)
                f.shapeList[e].id = r.newShapeId(f.type), r.addShape(f.shapeList[e])
        }
        function g() {
            var e = i.axisLine.lineStyle.width, t = e / 2, n = {shape: "line", zlevel: c + 1, hoverable: !1};
            switch (i.position) {
                case"left":
                    n.style = {xStart: l.getX() - t, yStart: l.getYend() + t, xEnd: l.getX() - t, yEnd: l.getY() - t};
                    break;
                case"right":
                    n.style = {xStart: l.getXend() + t, yStart: l.getYend() + t, xEnd: l.getXend() + t, yEnd: l.getY() - t};
                    break;
                case"bottom":
                    n.style = {xStart: l.getX() - t, yStart: l.getYend() + t, xEnd: l.getXend() + t, yEnd: l.getYend() + t};
                    break;
                case"top":
                    n.style = {xStart: l.getX() - t, yStart: l.getY() - t, xEnd: l.getXend() + t, yEnd: l.getY() - t}
            }
            i.name !== "" && (n.style.text = i.name, n.style.textPosition = i.nameLocation, n.style.textFont = f.getFont(i.nameTextStyle), i.nameTextStyle.align && (n.style.textAlign = i.nameTextStyle.align), i.nameTextStyle.baseline && (n.style.textBaseline = i.nameTextStyle.baseline), i.nameTextStyle.color && (n.style.textColor = i.nameTextStyle.color)), n.style.strokeColor = i.axisLine.lineStyle.color, n.style.lineWidth = e, i.position == "left" || i.position == "right" ? n.style.xStart = n.style.xEnd = f.subPixelOptimize(n.style.xEnd, e) : n.style.yStart = n.style.yEnd = f.subPixelOptimize(n.style.yEnd, e), n.style.lineType = i.axisLine.lineStyle.type, f.shapeList.push(n)
        }
        function y() {
            var e, t = i.data.length, n = i.axisTick, r = n.length, s = n.lineStyle.color, o = n.lineStyle.width, u = n.interval == "auto" ? h : n.interval - 0 + 1, a = n.onGap, p = a ? T() / 2 : typeof a == "undefined" ? i.boundaryGap ? T() / 2 : 0 : 0, d = p > 0 ? -u : 0;
            if (i.position == "bottom" || i.position == "top") {
                var v = i.position == "bottom" ? n.inside ? l.getYend() - r : l.getYend() : n.inside ? l.getY() : l.getY() - r, m;
                for (var g = d; g < t; g += u)
                    m = f.subPixelOptimize(C(g) + (g >= 0 ? p : 0), o), e = {shape: "line", zlevel: c, hoverable: !1, style: {xStart: m, yStart: v, xEnd: m, yEnd: v + r, strokeColor: s, lineWidth: o}}, f.shapeList.push(e)
            } else {
                var y = i.position == "left" ? n.inside ? l.getX() : l.getX() - r : n.inside ? l.getXend() - r : l.getXend(), b;
                for (var g = d; g < t; g += u)
                    b = f.subPixelOptimize(C(g) - (g >= 0 ? p : 0), o), e = {shape: "line", zlevel: c, hoverable: !1, style: {xStart: y, yStart: b, xEnd: y + r, yEnd: b, strokeColor: s, lineWidth: o}}, f.shapeList.push(e)
            }
        }
        function b() {
            var e, t = i.data, n = i.data.length, r = i.axisLabel.rotate, s = i.axisLabel.margin, o = i.axisLabel.textStyle, a;
            if (i.position == "bottom" || i.position == "top") {
                var d, v;
                i.position == "bottom" ? (d = l.getYend() + s, v = "top") : (d = l.getY() - s, v = "bottom");
                for (var m = 0; m < n; m += h) {
                    if ((p[m].value || p[m]) === "")
                        continue;
                    a = u.merge(t[m].textStyle || {}, o, {overwrite: !1}), e = {shape: "text", zlevel: c, hoverable: !1, style: {x: C(m), y: d, color: a.color, text: p[m].value || p[m], textFont: f.getFont(a), textAlign: "center", textBaseline: v}}, r && (e.style.textAlign = r > 0 ? i.position == "bottom" ? "right" : "left" : i.position == "bottom" ? "left" : "right", e.rotation = [r * Math.PI / 180, e.style.x, e.style.y]), f.shapeList.push(e)
                }
            } else {
                var g, y;
                i.position == "left" ? (g = l.getX() - s, y = "right") : (g = l.getXend() + s, y = "left");
                for (var m = 0; m < n; m += h) {
                    if ((p[m].value || p[m]) === "")
                        continue;
                    a = u.merge(t[m].textStyle || {}, o, {overwrite: !1}), e = {shape: "text", zlevel: c, hoverable: !1, style: {x: g, y: C(m), color: a.color, text: p[m].value || p[m], textFont: f.getFont(a), textAlign: y, textBaseline: m === 0 && i.name !== "" ? "bottom" : m == n - 1 && i.name !== "" ? "top" : "middle"}}, r && (e.rotation = [r * Math.PI / 180, e.style.x, e.style.y]), f.shapeList.push(e)
                }
            }
        }
        function w() {
            var e, t = i.data.length, n = i.splitLine, r = n.lineStyle.type, s = n.lineStyle.width, o = n.lineStyle.color;
            o = o instanceof Array ? o : [o];
            var u = o.length, a = n.onGap, p = a ? T() / 2 : typeof a == "undefined" ? i.boundaryGap ? T() / 2 : 0 : 0;
            t -= a || typeof a == "undefined" && i.boundaryGap ? 1 : 0;
            if (i.position == "bottom" || i.position == "top") {
                var d = l.getY(), v = l.getYend(), m;
                for (var g = 0; g < t; g += h)
                    m = f.subPixelOptimize(C(g) + p, s), e = {shape: "line", zlevel: c, hoverable: !1, style: {xStart: m, yStart: d, xEnd: m, yEnd: v, strokeColor: o[g / h % u], lineType: r, lineWidth: s}}, f.shapeList.push(e)
            } else {
                var y = l.getX(), b = l.getXend(), w;
                for (var g = 0; g < t; g += h)
                    w = f.subPixelOptimize(C(g) - p, s), e = {shape: "line", zlevel: c, hoverable: !1, style: {xStart: y, yStart: w, xEnd: b, yEnd: w, strokeColor: o[g / h % u], linetype: r, lineWidth: s}}, f.shapeList.push(e)
            }
        }
        function E() {
            var e, t = i.splitArea, n = t.areaStyle.color;
            if (n instanceof Array) {
                var r = n.length, s = i.data.length, o = t.onGap, u = o ? T() / 2 : typeof o == "undefined" ? i.boundaryGap ? T() / 2 : 0 : 0;
                if (i.position == "bottom" || i.position == "top") {
                    var a = l.getY(), p = l.getHeight(), d = l.getX(), v;
                    for (var m = 0; m <= s; m += h)
                        v = m < s ? C(m) + u : l.getXend(), e = {shape: "rectangle", zlevel: c, hoverable: !1, style: {x: d, y: a, width: v - d, height: p, color: n[m / h % r]}}, f.shapeList.push(e), d = v
                } else {
                    var g = l.getX(), y = l.getWidth(), b = l.getYend(), w;
                    for (var m = 0; m <= s; m += h)
                        w = m < s ? C(m) - u : l.getY(), e = {shape: "rectangle", zlevel: c, hoverable: !1, style: {x: g, y: w, width: y, height: b - w, color: n[m / h % r]}}, f.shapeList.push(e), b = w
                }
            } else
                e = {shape: "rectangle", zlevel: c, hoverable: !1, style: {x: l.getX(), y: l.getY(), width: l.getWidth(), height: l.getHeight(), color: n}}, f.shapeList.push(e)
        }
        function S(e, t) {
            if (e.data.length < 1)
                return;
            l = t, x(e)
        }
        function x(e) {
            e && (i = f.reformOption(e), i.axisLabel.textStyle = u.merge(i.axisLabel.textStyle || {}, t.textStyle, {overwrite: !1, recursive: !0}), i.axisLabel.textStyle = u.merge(i.axisLabel.textStyle || {}, t.textStyle, {overwrite: !1, recursive: !0})), f.clear(), m()
        }
        function T() {
            var e = i.data.length, t = i.position == "bottom" || i.position == "top" ? l.getWidth() : l.getHeight();
            return i.boundaryGap ? t / e : t / (e > 1 ? e - 1 : 1)
        }
        function N(e) {
            var t = i.data, n = t.length, r = T(), s = i.boundaryGap ? r / 2 : 0;
            for (var o = 0; o < n; o++) {
                if (t[o] == e || typeof t[o].value != "undefined" && t[o].value == e)
                    return i.position == "bottom" || i.position == "top" ? s = l.getX() + s : s = l.getYend() - s, s;
                s += r
            }
        }
        function C(e) {
            if (e < 0)
                return i.position == "bottom" || i.position == "top" ? l.getX() : l.getYend();
            if (e > i.data.length - 1)
                return i.position == "bottom" || i.position == "top" ? l.getXend() : l.getY();
            var t = T(), n = i.boundaryGap ? t / 2 : 0;
            return n += e * t, i.position == "bottom" || i.position == "top" ? n = l.getX() + n : n = l.getYend() - n, n
        }
        function k(e) {
            var t = i.data[e];
            return typeof t != "undefined" && typeof t.value != "undefined" ? t.value : t
        }
        function L(e) {
            var t = i.data, n = t.length;
            for (var r = 0; r < n; r++)
                if (t[r] == e || typeof t[r].value != "undefined" && t[r].value == e)
                    return r
        }
        function A(e) {
            return e % h === 0
        }
        function O() {
            return i.position
        }
        var o = e("./base");
        o.call(this, t, r);
        var u = e("zrender/tool/util"), a = e("zrender/tool/area"), f = this;
        f.type = t.COMPONENT_TYPE_AXIS_CATEGORY;
        var l = s.grid, c = f.getZlevelBase(), h, p;
        f.init = S, f.refresh = x, f.getGap = T, f.getCoord = N, f.getCoordByIndex = C, f.getNameByIndex = k, f.getIndexByName = L, f.isMainAxis = A, f.getPosition = O, S(i, l)
    }
    return e("../component").define("categoryAxis", t), t
}), define("echarts/component/valueAxis", ["require", "./base", "zrender/tool/util", "../component"], function(e) {
    function t(t, n, r, i, s, o) {
        function g() {
            d = !1, x();
            if (!d)
                return;
            i.splitArea.show && S(), i.splitLine.show && E(), i.axisLine.show && y(), i.axisTick.show && b(), i.axisLabel.show && w();
            for (var e = 0, t = f.shapeList.length; e < t; e++)
                f.shapeList[e].id = r.newShapeId(f.type), r.addShape(f.shapeList[e])
        }
        function y() {
            var e = i.axisLine.lineStyle.width, t = e / 2, n = {shape: "line", zlevel: c + 1, hoverable: !1};
            switch (i.position) {
                case"left":
                    n.style = {xStart: l.getX() - t, yStart: l.getYend() + t, xEnd: l.getX() - t, yEnd: l.getY() - t};
                    break;
                case"right":
                    n.style = {xStart: l.getXend() + t, yStart: l.getYend() + t, xEnd: l.getXend() + t, yEnd: l.getY() - t};
                    break;
                case"bottom":
                    n.style = {xStart: l.getX() - t, yStart: l.getYend() + t, xEnd: l.getXend() + t, yEnd: l.getYend() + t};
                    break;
                case"top":
                    n.style = {xStart: l.getX() - t, yStart: l.getY() - t, xEnd: l.getXend() + t, yEnd: l.getY() - t}
            }
            i.name !== "" && (n.style.text = i.name, n.style.textPosition = i.nameLocation, n.style.textFont = f.getFont(i.nameTextStyle), i.nameTextStyle.align && (n.style.textAlign = i.nameTextStyle.align), i.nameTextStyle.baseline && (n.style.textBaseline = i.nameTextStyle.baseline), i.nameTextStyle.color && (n.style.textColor = i.nameTextStyle.color)), n.style.strokeColor = i.axisLine.lineStyle.color;
            var e = i.axisLine.lineStyle.width;
            n.style.lineWidth = e, i.position == "left" || i.position == "right" ? n.style.xStart = n.style.xEnd = f.subPixelOptimize(n.style.xEnd, e) : n.style.yStart = n.style.yEnd = f.subPixelOptimize(n.style.yEnd, e), n.style.lineType = i.axisLine.lineStyle.type, f.shapeList.push(n)
        }
        function b() {
            var e, t = v, n = v.length, r = i.axisTick, s = r.length, o = r.lineStyle.color, u = r.lineStyle.width;
            if (i.position == "bottom" || i.position == "top") {
                var a = i.position == "bottom" ? r.inside ? l.getYend() - s : l.getYend() : r.inside ? l.getY() : l.getY() - s, h;
                for (var p = 0; p < n; p++)
                    h = f.subPixelOptimize(O(t[p]), u), e = {shape: "line", zlevel: c, hoverable: !1, style: {xStart: h, yStart: a, xEnd: h, yEnd: a + s, strokeColor: o, lineWidth: u}}, f.shapeList.push(e)
            } else {
                var d = i.position == "left" ? r.inside ? l.getX() : l.getX() - s : r.inside ? l.getXend() - s : l.getXend(), m;
                for (var p = 0; p < n; p++)
                    m = f.subPixelOptimize(O(t[p]), u), e = {shape: "line", zlevel: c, hoverable: !1, style: {xStart: d, yStart: m, xEnd: d + s, yEnd: m, strokeColor: o, lineWidth: u}}, f.shapeList.push(e)
            }
        }
        function w() {
            var e, t = v, n = v.length, r = i.axisLabel.rotate, s = i.axisLabel.margin, o = i.axisLabel.textStyle;
            if (i.position == "bottom" || i.position == "top") {
                var u, a;
                i.position == "bottom" ? (u = l.getYend() + s, a = "top") : (u = l.getY() - s, a = "bottom");
                for (var h = 0; h < n; h++)
                    e = {shape: "text", zlevel: c, hoverable: !1, style: {x: O(t[h]), y: u, color: typeof o.color == "function" ? o.color(t[h]) : o.color, text: m[h], textFont: f.getFont(o), textAlign: "center", textBaseline: a}}, r && (e.style.textAlign = r > 0 ? i.position == "bottom" ? "right" : "left" : i.position == "bottom" ? "left" : "right", e.rotation = [r * Math.PI / 180, e.style.x, e.style.y]), f.shapeList.push(e)
            } else {
                var p, d;
                i.position == "left" ? (p = l.getX() - s, d = "right") : (p = l.getXend() + s, d = "left");
                for (var h = 0; h < n; h++)
                    e = {shape: "text", zlevel: c, hoverable: !1, style: {x: p, y: O(t[h]), color: typeof o.color == "function" ? o.color(t[h]) : o.color, text: m[h], textFont: f.getFont(o), textAlign: d, textBaseline: h === 0 && i.name !== "" ? "bottom" : h == n - 1 && i.name !== "" ? "top" : "middle"}}, r && (e.rotation = [r * Math.PI / 180, e.style.x, e.style.y]), f.shapeList.push(e)
            }
        }
        function E() {
            var e, t = v, n = v.length, r = i.splitLine, s = r.lineStyle.type, o = r.lineStyle.width, u = r.lineStyle.color;
            u = u instanceof Array ? u : [u];
            var a = u.length;
            if (i.position == "bottom" || i.position == "top") {
                var h = l.getY(), p = l.getYend(), d;
                for (var m = 1; m < n - 1; m++)
                    d = f.subPixelOptimize(O(t[m]), o), e = {shape: "line", zlevel: c, hoverable: !1, style: {xStart: d, yStart: h, xEnd: d, yEnd: p, strokeColor: u[m % a], lineType: s, lineWidth: o}}, f.shapeList.push(e)
            } else {
                var g = l.getX(), y = l.getXend(), b;
                for (var m = 1; m < n - 1; m++)
                    b = f.subPixelOptimize(O(t[m]), o), e = {shape: "line", zlevel: c, hoverable: !1, style: {xStart: g, yStart: b, xEnd: y, yEnd: b, strokeColor: u[m % a], lineType: s, lineWidth: o}}, f.shapeList.push(e)
            }
        }
        function S() {
            var e, t = i.splitArea.areaStyle.color;
            if (t instanceof Array) {
                var n = t.length, r = v, s = v.length;
                if (i.position == "bottom" || i.position == "top") {
                    var o = l.getY(), u = l.getHeight(), a = l.getX(), h;
                    for (var p = 0; p <= s; p++)
                        h = p < s ? O(r[p]) : l.getXend(), e = {shape: "rectangle", zlevel: c, hoverable: !1, style: {x: a, y: o, width: h - a, height: u, color: t[p % n]}}, f.shapeList.push(e), a = h
                } else {
                    var d = l.getX(), m = l.getWidth(), g = l.getYend(), y;
                    for (var p = 0; p <= s; p++)
                        y = p < s ? O(r[p]) : l.getY(), e = {shape: "rectangle", zlevel: c, hoverable: !1, style: {x: d, y: y, width: m, height: g - y, color: t[p % n]}}, f.shapeList.push(e), g = y
                }
            } else
                e = {shape: "rectangle", zlevel: c, hoverable: !1, style: {x: l.getX(), y: l.getY(), width: l.getWidth(), height: l.getHeight(), color: t}}, f.shapeList.push(e)
        }
        function x() {
            if (isNaN(i.min - 0) || isNaN(i.max - 0)) {
                var e, n = {}, r, u, a, f = s.legend;
                for (var l = 0, c = o.length; l < c; l++) {
                    if (o[l].type != t.CHART_TYPE_LINE && o[l].type != t.CHART_TYPE_BAR && o[l].type != t.CHART_TYPE_SCATTER && o[l].type != t.CHART_TYPE_K)
                        continue;
                    if (f && !f.isSelected(o[l].name))
                        continue;
                    u = o[l].xAxisIndex || 0, a = o[l].yAxisIndex || 0;
                    if (i.xAxisIndex != u && i.yAxisIndex != a)
                        continue;
                    var v = o[l].name || "kener";
                    if (!o[l].stack) {
                        n[v] = n[v] || [], e = o[l].data;
                        for (var m = 0, g = e.length; m < g; m++)
                            r = typeof e[m].value != "undefined" ? e[m].value : e[m], o[l].type == t.CHART_TYPE_SCATTER ? (i.xAxisIndex != -1 && n[v].push(r[0]), i.yAxisIndex != -1 && n[v].push(r[1])) : o[l].type == t.CHART_TYPE_K ? (n[v].push(r[0]), n[v].push(r[1]), n[v].push(r[2]), n[v].push(r[3])) : n[v].push(r)
                    } else {
                        var y = "__Magic_Key_Positive__" + o[l].stack, b = "__Magic_Key_Negative__" + o[l].stack;
                        n[y] = n[y] || [], n[b] = n[b] || [], n[v] = n[v] || [], e = o[l].data;
                        for (var m = 0, g = e.length; m < g; m++) {
                            r = typeof e[m].value != "undefined" ? e[m].value : e[m];
                            if (r == "-")
                                continue;
                            r -= 0, r >= 0 ? typeof n[y][m] != "undefined" ? n[y][m] += r : n[y][m] = r : typeof n[b][m] != "undefined" ? n[b][m] += r : n[b][m] = r, i.scale && n[v].push(r)
                        }
                    }
                }
                for (var l in n) {
                    e = n[l];
                    for (var m = 0, g = e.length; m < g; m++)
                        if (!isNaN(e[m])) {
                            d = !0, h = e[m], p = e[m];
                            break
                        }
                    if (d)
                        break
                }
                for (var l in n) {
                    e = n[l];
                    for (var m = 0, g = e.length; m < g; m++)
                        isNaN(e[m]) || (h = Math.min(h, e[m]), p = Math.max(p, e[m]))
                }
                h = isNaN(i.min - 0) ? h - Math.abs(h * i.boundaryGap[0]) : i.min - 0, p = isNaN(i.max - 0) ? p + Math.abs(p * i.boundaryGap[1]) : i.max - 0, h == p && (p === 0 ? p = i.power > 0 ? i.power : 1 : p > 0 ? h = p / i.splitNumber : p /= i.splitNumber), T(i.scale)
            } else
                d = !0, h = i.min - 0, p = i.max - 0, customerDefine = !0, N()
        }
        function T(e) {
            var t = i.splitNumber, n = i.precision, r, s;
            n === 0 ? s = i.power > 1 ? i.power : 1 : (s = Math.pow(10, n), h *= s, p *= s, s = i.power);
            var o;
            if (h >= 0 && p >= 0) {
                if (!e) {
                    while (p / s < t && s != 1)
                        s /= 10;
                    h = 0
                } else {
                    while (h < s && s != 1)
                        s /= 10;
                    n === 0 && (h = Math.floor(h / s) * s, p = Math.ceil(p / s) * s)
                }
                s = s > 1 ? s / 10 : 1, o = p - h, r = Math.ceil(o / t / s) * s, p = h + r * t
            } else if (h <= 0 && p <= 0) {
                s = -s;
                if (!e) {
                    while (h / s < t && s != - 1)
                        s /= 10;
                    p = 0
                } else {
                    while (p > s && s != - 1)
                        s /= 10;
                    n === 0 && (h = Math.ceil(h / s) * s, p = Math.floor(p / s) * s)
                }
                s = s < -1 ? s / 10 : -1, o = h - p, r = -Math.ceil(o / t / s) * s, h = -r * t + p
            } else {
                o = p - h;
                while (o / s < t && s != 1)
                    s /= 10;
                var u = Math.round(p / o * t);
                u -= u == t ? 1 : 0, u += u === 0 ? 1 : 0, r = Math.ceil(Math.max(p / u, h / (u - t)) / s) * s, p = r * u, h = r * (u - t)
            }
            v = [];
            for (var a = 0; a <= t; a++)
                v.push(h + r * a);
            if (n !== 0) {
                s = Math.pow(10, n), h = (h / s).toFixed(n) - 0, p = (p / s).toFixed(n) - 0;
                for (var a = 0; a <= t; a++)
                    v[a] = (v[a] / s).toFixed(n) - 0
            }
            C()
        }
        function N() {
            var e = i.splitNumber, t = i.precision, n = (p - h) / e;
            v = [];
            for (var r = 0; r <= e; r++)
                v.push((h + n * r).toFixed(t) - 0);
            C()
        }
        function C() {
            m = [];
            var e = i.axisLabel.formatter;
            if (e)
                for (var t = 0, n = v.length; t < n; t++)
                    typeof e == "function" ? m.push(e(v[t])) : typeof e == "string" && m.push(e.replace("{value}", v[t]));
            else
                for (var t = 0, n = v.length; t < n; t++)
                    m.push(f.numAddCommas(v[t]))
        }
        function k() {
            return x(), {min: h, max: p}
        }
        function L(e, t, n) {
            if (!n || n.length === 0)
                return;
            l = t, A(e, n)
        }
        function A(e, n) {
            e && (i = f.reformOption(e), i.axisLabel.textStyle = a.merge(i.axisLabel.textStyle || {}, t.textStyle, {overwrite: !1, recursive: !0}), i.axisLabel.textStyle = a.merge(i.axisLabel.textStyle || {}, t.textStyle, {overwrite: !1, recursive: !0}), o = n), r && (f.clear(), g())
        }
        function O(e) {
            e = e < h ? h : e, e = e > p ? p : e;
            var t = p - h, n, r;
            return i.position == "left" || i.position == "right" ? (n = l.getHeight(), r = l.getYend() - (e - h) / t * n) : (n = l.getWidth(), r = (e - h) / t * n + l.getX()), r
        }
        function M(e) {
            return i.position == "left" || i.position == "right" ? Math.abs(e / (p - h) * l.getHeight()) : Math.abs(e / (p - h) * l.getWidth())
        }
        function _() {
            return i.position
        }
        var u = e("./base");
        u.call(this, t, r);
        var a = e("zrender/tool/util"), f = this;
        f.type = t.COMPONENT_TYPE_AXIS_VALUE;
        var l = s.grid, c = f.getZlevelBase(), h, p, d, v, m;
        f.init = L, f.refresh = A, f.getExtremum = k, f.getCoord = O, f.getCoordSize = M, f.getPosition = _, L(i, l, o)
    }
    return e("../component").define("valueAxis", t), t
}), define("echarts/component/axis", ["require", "./base", "./categoryAxis", "./valueAxis", "../component"], function(e) {
    function t(t, n, r, i, s, o) {
        function l(e) {
            !e || e instanceof Array && e.length === 0 ? e = [{type: t.COMPONENT_TYPE_AXIS_VALUE}] : e instanceof Array || (e = [e]), e.length > 2 && (e = [e[0], e[1]]);
            if (o == "xAxis") {
                if (!e[0].position || e[0].position != "bottom" && e[0].position != "top")
                    e[0].position = "bottom";
                e.length > 1 && (e[1].position = e[0].position == "bottom" ? "top" : "bottom");
                for (var n = 0, r = e.length; n < r; n++)
                    e[n].type = e[n].type || "category", e[n].xAxisIndex = n, e[n].yAxisIndex = -1
            } else {
                if (!e[0].position || e[0].position != "left" && e[0].position != "right")
                    e[0].position = "left";
                e.length > 1 && (e[1].position = e[0].position == "left" ? "right" : "left");
                for (var n = 0, r = e.length; n < r; n++)
                    e[n].type = e[n].type || "value", e[n].xAxisIndex = -1, e[n].yAxisIndex = n
            }
            return e
        }
        function c(u, l, c) {
            s = l, o = c, a.clear();
            var h;
            o == "xAxis" ? (i.xAxis = a.reformOption(u.xAxis), h = i.xAxis) : (i.yAxis = a.reformOption(u.yAxis), h = i.yAxis);
            var p = e("./categoryAxis"), d = e("./valueAxis");
            for (var v = 0, m = h.length; v < m; v++)
                f.push(h[v].type == "category" ? new p(t, n, r, h[v], s) : new d(t, n, r, h[v], s, i.series))
        }
        function h(e) {
            var t, n;
            e && (o == "xAxis" ? (i.xAxis = a.reformOption(e.xAxis), t = i.xAxis) : (i.yAxis = l(e.yAxis), t = i.yAxis), n = e.series);
            for (var r = 0, s = f.length; r < s; r++)
                f[r].refresh && f[r].refresh(t ? t[r] : !1, n)
        }
        function p(e) {
            return f[e]
        }
        function d() {
            for (var e = 0, t = f.length; e < t; e++)
                f[e].dispose && f[e].dispose();
            f = []
        }
        var u = e("./base");
        u.call(this, t, r);
        var a = this;
        a.type = t.COMPONENT_TYPE_AXIS;
        var f = [];
        a.clear = d, a.reformOption = l, a.init = c, a.refresh = h, a.getAxis = p, c(i, s, o)
    }
    return e("../component").define("axis", t), t
}), define("echarts/component/grid", ["require", "./base", "../component"], function(e) {
    function t(t, n, r, i) {
        function d(e) {
            i = e, i.grid = o.reformOption(i.grid);
            var t = i.grid;
            h = r.getWidth(), p = r.getHeight(), a = o.parsePercent(t.x, h), f = o.parsePercent(t.y, p);
            var n = o.parsePercent(t.x2, h), s = o.parsePercent(t.y2, p);
            typeof t.width == "undefined" ? l = h - a - n : l = o.parsePercent(t.width, h), typeof t.height == "undefined" ? c = p - f - s : c = o.parsePercent(t.height, p), a = o.subPixelOptimize(a, t.borderWidth), f = o.subPixelOptimize(f, t.borderWidth), o.shapeList.push({shape: "rectangle", id: r.newShapeId("grid"), zlevel: u, hoverable: !1, style: {x: a, y: f, width: l, height: c, brushType: t.borderWidth > 0 ? "both" : "fill", color: t.backgroundColor, strokeColor: t.borderColor, lineWidth: t.borderWidth}}), r.addShape(o.shapeList[0])
        }
        function v() {
            return a
        }
        function m() {
            return f
        }
        function g() {
            return l
        }
        function y() {
            return c
        }
        function b() {
            return a + l
        }
        function w() {
            return f + c
        }
        function E() {
            return{x: a, y: f, width: l, height: c}
        }
        function S(e) {
            if (h != r.getWidth() || p != r.getHeight() || e)
                o.clear(), d(e || i)
        }
        var s = e("./base");
        s.call(this, t, r);
        var o = this;
        o.type = t.COMPONENT_TYPE_GRID;
        var u = o.getZlevelBase(), a, f, l, c, h, p;
        o.init = d, o.getX = v, o.getY = m, o.getWidth = g, o.getHeight = y, o.getXend = b, o.getYend = w, o.getArea = E, o.refresh = S, d(i)
    }
    return e("../component").define("grid", t), t
}), define("echarts/component/dataZoom", ["require", "./base", "../component", "zrender/tool/util", "zrender/tool/util", "zrender/tool/util", "../component"], function(e) {
    function t(t, n, r, i, s) {
        function S() {
            k(), L(), A(), O();
            for (var e = 0, t = u.shapeList.length; e < t; e++)
                u.shapeList[e].id = r.newShapeId(u.type), r.addShape(u.shapeList[e]);
            P()
        }
        function x() {
            var e, t, n, i, o = s.grid;
            return f.orient == "horizontal" ? (n = f.width || o.getWidth(), i = f.height || l, e = typeof f.x != "undefined" ? f.x : o.getX(), t = typeof f.y != "undefined" ? f.y : r.getHeight() - i - 2) : (n = f.width || l, i = f.height || o.getHeight(), e = typeof f.x != "undefined" ? f.x : 2, t = typeof f.y != "undefined" ? f.y : o.getY()), {x: e, y: t, width: n, height: i}
        }
        function T() {
            var e = i.series, n = i.xAxis;
            n && !(n instanceof Array) && (n = [n], i.xAxis = n);
            var r = i.yAxis;
            r && !(r instanceof Array) && (r = [r], i.yAxis = r);
            var s = [], o, u, a = f.xAxisIndex;
            if (n && typeof a == "undefined") {
                o = [];
                for (var l = 0, c = n.length; l < c; l++)
                    (n[l].type == "category" || typeof n[l].type == "undefined") && o.push(l)
            } else
                a instanceof Array ? o = a : typeof a != "undefined" ? o = [a] : o = [];
            a = f.yAxisIndex;
            if (r && typeof a == "undefined") {
                u = [];
                for (var l = 0, c = r.length; l < c; l++)
                    r[l].type == "category" && u.push(l)
            } else
                a instanceof Array ? u = a : typeof a != "undefined" ? u = [a] : u = [];
            for (var l = 0, c = e.length; l < c; l++) {
                if (e[l].type != t.CHART_TYPE_LINE && e[l].type != t.CHART_TYPE_BAR && e[l].type != t.CHART_TYPE_SCATTER && e[l].type != t.CHART_TYPE_K)
                    continue;
                for (var p = 0, d = o.length; p < d; p++)
                    if (o[p] == (e[l].xAxisIndex || 0)) {
                        s.push(l);
                        break
                    }
                for (var p = 0, d = u.length; p < d; p++)
                    if (u[p] == (e[l].yAxisIndex || 0)) {
                        s.push(l);
                        break
                    }
                e[l].type == t.CHART_TYPE_SCATTER && typeof f.xAxisIndex == "undefined" && typeof f.yAxisIndex == "undefined" && s.push(l)
            }
            var v = typeof f.start != "undefined" && f.start >= 0 && f.start <= 100 ? f.start : 0, m = typeof f.end != "undefined" && f.end >= 0 && f.end <= 100 ? f.end : 100;
            v > m && (v += m, m = v - m, v -= m);
            var g = Math.round((m - v) / 100 * (f.orient == "horizontal" ? h.width : h.height));
            return{start: v, end: m, start2: 0, end2: 100, size: g, xAxisIndex: o, yAxisIndex: u, seriesIndex: s}
        }
        function N() {
            E = {xAxis: {}, yAxis: {}, series: {}};
            var e = i.xAxis, n = p.xAxisIndex;
            for (var r = 0, s = n.length; r < s; r++)
                E.xAxis[n[r]] = e[n[r]].data;
            var o = i.yAxis, u = p.yAxisIndex;
            for (var r = 0, s = u.length; r < s; r++)
                E.yAxis[u[r]] = o[u[r]].data;
            var a = i.series, f = p.seriesIndex, l;
            for (var r = 0, s = f.length; r < s; r++)
                l = a[f[r]], E.series[f[r]] = l.data, l.type == t.CHART_TYPE_SCATTER && C(f[r])
        }
        function C(n) {
            p.scatterMap = p.scatterMap || {}, p.scatterMap[n] = p.scatterMap[n] || {};
            var r = e("../component"), o = e("zrender/tool/util"), u = r.get("axis"), a = o.clone(i.xAxis);
            a instanceof Array ? (a[0].type = "value", a[1] && (a[1].type = "value")) : a.type = "value";
            var f = new u(t, null, !1, {xAxis: a, series: i.series}, s, "xAxis"), l = i.series[n].xAxisIndex || 0;
            p.scatterMap[n].x = f.getAxis(l).getExtremum(), f.dispose(), a = o.clone(i.yAxis), a instanceof Array ? (a[0].type = "value", a[1] && (a[1].type = "value")) : a.type = "value", f = new u(t, null, !1, {yAxis: a, series: i.series}, s, "yAxis"), l = i.series[n].yAxisIndex || 0, p.scatterMap[n].y = f.getAxis(l).getExtremum(), f.dispose()
        }
        function k() {
            u.shapeList.push({shape: "rectangle", zlevel: a, hoverable: !1, style: {x: h.x, y: h.y, width: h.width, height: h.height, color: f.backgroundColor}});
            var e = 0, n = E.xAxis, r = p.xAxisIndex;
            for (var s = 0, o = r.length; s < o; s++)
                e = Math.max(e, n[r[s]].length);
            var l = E.yAxis, c = p.yAxisIndex;
            for (var s = 0, o = c.length; s < o; s++)
                e = Math.max(e, l[c[s]].length);
            var d = p.seriesIndex[0], v = E.series[d], m = Number.MIN_VALUE, g = Number.MAX_VALUE, y;
            for (var s = 0, o = v.length; s < o; s++)
                y = typeof v[s] != "undefined" ? typeof v[s].value != "undefined" ? v[s].value : v[s] : 0, i.series[d].type == t.CHART_TYPE_K && (y = y[1]), isNaN(y) && (y = 0), m = Math.max(m, y), g = Math.min(g, y);
            var b = [], w = h.width / (e - (e > 1 ? 1 : 0)), S = h.height / (e - (e > 1 ? 1 : 0));
            for (var s = 0, o = e; s < o; s++)
                y = typeof v[s] != "undefined" ? typeof v[s].value != "undefined" ? v[s].value : v[s] : 0, i.series[d].type == t.CHART_TYPE_K && (y = y[1]), isNaN(y) && (y = 0), f.orient == "horizontal" ? b.push([h.x + w * s, h.y + h.height - 5 - Math.round((y - g) / (m - g) * (h.height - 10))]) : b.push([h.x + 5 + Math.round((y - g) / (m - g) * (h.width - 10)), h.y + S * s]);
            f.orient == "horizontal" ? (b.push([h.x + h.width, h.y + h.height]), b.push([h.x, h.y + h.height])) : (b.push([h.x, h.y + h.height]), b.push([h.x, h.y])), u.shapeList.push({shape: "polygon", zlevel: a, style: {pointList: b, color: f.dataBackgroundColor}, hoverable: !1})
        }
        function L() {
            d = {shape: "rectangle", zlevel: a, draggable: !0, ondrift: M, ondragend: F, _type: "filler"}, f.orient == "horizontal" ? d.style = {x: h.x + Math.round(p.start / 100 * h.width) + c, y: h.y, width: p.size - c * 2, height: h.height, color: f.fillerColor, text: ":::", textPosition: "inside"} : d.style = {x: h.x, y: h.y + Math.round(p.start / 100 * h.height) + c, width: h.width, height: p.size - c * 2, color: f.fillerColor, text: "::", textPosition: "inside"}, d.highlightStyle = {brushType: "fill", color: "rgba(0,0,0,0)"}, u.shapeList.push(d)
        }
        function A() {
            var t = e("zrender/tool/util");
            v = {shape: "icon", zlevel: a, draggable: !0, style: {iconType: "rectangle", x: h.x, y: h.y, width: c, height: c, color: f.handleColor, text: "=", textPosition: "inside"}, highlightStyle: {brushType: "fill"}, ondrift: M, ondragend: F}, f.orient == "horizontal" ? (v.style.height = h.height, m = t.clone(v), v.style.x = d.style.x - c, m.style.x = d.style.x + d.style.width) : (v.style.width = h.width, m = t.clone(v), v.style.y = d.style.y - c, m.style.y = d.style.y + d.style.height), u.shapeList.push(v), u.shapeList.push(m)
        }
        function O() {
            var t = e("zrender/tool/util"), n = u.subPixelOptimize(h.x, 1), r = u.subPixelOptimize(h.y, 1);
            g = {shape: "rectangle", zlevel: a, hoverable: !1, style: {x: n, y: r, width: h.width - (n > h.x ? 1 : 0), height: h.height - (r > h.y ? 1 : 0), lineWidth: 1, brushType: "stroke", strokeColor: f.handleColor}}, y = t.clone(g), u.shapeList.push(g), u.shapeList.push(y);
            return
        }
        function M(e, t, n) {
            f.zoomLock && (e = d);
            var r = e._type == "filler" ? c : 0;
            return f.orient == "horizontal" ? e.style.x + t - r <= h.x ? e.style.x = h.x + r : e.style.x + t + e.style.width + r >= h.x + h.width ? e.style.x = h.x + h.width - e.style.width - r : e.style.x += t : e.style.y + n - r <= h.y ? e.style.y = h.y + r : e.style.y + n + e.style.height + r >= h.y + h.height ? e.style.y = h.y + h.height - e.style.height - r : e.style.y += n, e._type == "filler" ? _() : D(), f.realtime ? B() : (clearTimeout(b), b = setTimeout(B, 200)), !0
        }
        function _() {
            f.orient == "horizontal" ? (v.style.x = d.style.x - c, m.style.x = d.style.x + d.style.width, p.start = Math.floor((v.style.x - h.x) / h.width * 100), p.end = Math.ceil((m.style.x + c - h.x) / h.width * 100)) : (v.style.y = d.style.y - c, m.style.y = d.style.y + d.style.height, p.start = Math.floor((v.style.y - h.y) / h.height * 100), p.end = Math.ceil((m.style.y + c - h.y) / h.height * 100)), r.modShape(v.id, v), r.modShape(m.id, m), P(), r.refresh()
        }
        function D() {
            var e, t;
            f.orient == "horizontal" ? (e = v.style.x, t = m.style.x, d.style.x = Math.min(e, t) + c, d.style.width = Math.abs(e - t) - c, p.start = Math.floor((Math.min(e, t) - h.x) / h.width * 100), p.end = Math.ceil((Math.max(e, t) + c - h.x) / h.width * 100)) : (e = v.style.y, t = m.style.y, d.style.y = Math.min(e, t) + c, d.style.height = Math.abs(e - t) - c, p.start = Math.floor((Math.min(e, t) - h.y) / h.height * 100), p.end = Math.ceil((Math.max(e, t) + c - h.y) / h.height * 100)), r.modShape(d.id, d), P(), r.refresh()
        }
        function P() {
            f.orient == "horizontal" ? (g.style.width = d.style.x - h.x, y.style.x = d.style.x + d.style.width, y.style.width = h.x + h.width - y.style.x) : (g.style.height = d.style.y - h.y, y.style.y = d.style.y + d.style.height, y.style.height = h.y + h.height - y.style.y), r.modShape(g.id, g), r.modShape(y.id, y)
        }
        function H() {
            if (!f.show)
                return;
            f.orient == "horizontal" ? (v.style.x = h.x + p.start / 100 * h.width, m.style.x = h.x + p.end / 100 * h.width - c, d.style.x = v.style.x + c, d.style.width = m.style.x - v.style.x - c) : (v.style.y = h.y + p.start / 100 * h.height, m.style.y = h.y + p.end / 100 * h.height - c, d.style.y = v.style.y + c, d.style.height = m.style.y - v.style.y - c), r.modShape(v.id, v), r.modShape(m.id, m), r.modShape(d.id, d), P(), r.refresh()
        }
        function B(e) {
            var r, s, o, u, a;
            for (var l in E) {
                r = E[l];
                for (var c in r)
                    a = r[c], u = a.length, s = Math.floor(p.start / 100 * u), o = Math.ceil(p.end / 100 * u), i[l][c].type != t.CHART_TYPE_SCATTER ? i[l][c].data = a.slice(s, o) : i[l][c].data = j(c, a)
            }
            !w && (f.realtime || e) && n.dispatch(t.EVENT.DATA_ZOOM, null, {zoom: p}), f.start = p.start, f.end = p.end
        }
        function j(e, t) {
            var n = [], r = p.scatterMap[e], i, s, o, u, a;
            f.orient == "horizontal" ? (i = r.x.max - r.x.min, s = p.start / 100 * i + r.x.min, o = p.end / 100 * i + r.x.min, i = r.y.max - r.y.min, u = p.start2 / 100 * i + r.y.min, a = p.end2 / 100 * i + r.y.min) : (i = r.x.max - r.x.min, s = p.start2 / 100 * i + r.x.min, o = p.end2 / 100 * i + r.x.min, i = r.y.max - r.y.min, u = p.start / 100 * i + r.y.min, a = p.end / 100 * i + r.y.min);
            var l;
            for (var c = 0, h = t.length; c < h; c++)
                l = t[c].value || t[c], l[0] >= s && l[0] <= o && l[1] >= u && l[1] <= a && n.push(t[c]);
            return n
        }
        function F() {
            u.isDragend = !0
        }
        function I(e, r) {
            if (!u.isDragend || !e.target)
                return;
            B(), r.dragOut = !0, r.dragIn = !0, !w && !f.realtime && n.dispatch(t.EVENT.DATA_ZOOM, null, {zoom: p}), r.needRefresh = !1, u.isDragend = !1;
            return
        }
        function q(e, t) {
            t.needRefresh = !0;
            return
        }
        function R(e) {
            f.start = p.start = e.start, f.end = p.end = e.end, f.start2 = p.start2 = e.start2, f.end2 = p.end2 = e.end2, H(), B(!0);
            return
        }
        function U(e) {
            if (!e)
                return f.start = f.start2 = p.start = p.start2 = 0, f.end = f.end2 = p.end = p.end2 = 100, H(), B(!0), p;
            var t = s.grid.getArea(), n = {x: e.x, y: e.y, width: e.width, height: e.height};
            n.width < 0 && (n.x += n.width, n.width = -n.width), n.height < 0 && (n.y += n.height, n.height = -n.height);
            if (n.x > t.x + t.width || n.y > t.y + t.height)
                return!1;
            n.x < t.x && (n.x = t.x), n.x + n.width > t.x + t.width && (n.width = t.x + t.width - n.x), n.y + n.height > t.y + t.height && (n.height = t.y + t.height - n.y);
            var r, i = (n.x - t.x) / t.width, o = 1 - (n.x + n.width - t.x) / t.width, u = 1 - (n.y + n.height - t.y) / t.height, a = (n.y - t.y) / t.height;
            return f.orient == "horizontal" ? (r = p.end - p.start, p.start += r * i, p.end -= r * o, r = p.end2 - p.start2, p.start2 += r * u, p.end2 -= r * a) : (r = p.end - p.start, p.start += r * u, p.end -= r * a, r = p.end2 - p.start2, p.start2 += r * i, p.end2 -= r * o), f.start = p.start, f.end = p.end, f.start2 = p.start2, f.end2 = p.end2, H(), B(!0), p
        }
        function z(e, t) {
            var n, r = E.series, i = e.series, s;
            for (var o = 0, u = i.length; o < u; o++) {
                s = i[o].data, r[o] ? n = Math.floor(p.start / 100 * r[o].length) : n = 0;
                for (var a = 0, f = s.length; a < f; a++)
                    t.series[o].data[a + n] = s[a], r[o] && (r[o][a + n] = s[a])
            }
        }
        function W(e) {
            w = e
        }
        function X(e, t) {
            if (!E)
                return t;
            var n = E.series;
            return n[e] ? Math.floor(p.start / 100 * n[e].length) + t : -1
        }
        function V(e) {
            i = e, i.dataZoom = u.reformOption(i.dataZoom), f = i.dataZoom, u.clear();
            if (i.dataZoom.show || u.query(i, "toolbox.show") && u.query(i, "toolbox.feature.dataZoom.show"))
                h = x(), p = T(), N();
            i.dataZoom.show && (S(), B())
        }
        function $() {
            u.clear();
            if (i.dataZoom.show || u.query(i, "toolbox.show") && u.query(i, "toolbox.feature.dataZoom.show"))
                h = x(), p = T();
            i.dataZoom.show && S()
        }
        var o = e("./base");
        o.call(this, t, r);
        var u = this;
        u.type = t.COMPONENT_TYPE_DATAZOOM;
        var a = u.getZlevelBase(), f, l = 28, c = 8, h, p, d, v, m, g, y, b, w = !1, E;
        u.init = V, u.resize = $, u.syncBackupData = z, u.absoluteZoom = R, u.rectZoom = U, u.ondragend = I, u.ondataZoom = q, u.silence = W, u.getRealDataIndex = X, V(i)
    }
    return e("../component").define("dataZoom", t), t
}), define("echarts/component/legend", ["require", "./base", "zrender/tool/util", "zrender/tool/area", "zrender/tool/color", "zrender/shape", "zrender/shape", "zrender/shape", "zrender/shape", "zrender/shape", "../component"], function(e) {
    function t(t, r, i, s, o) {
        function w() {
            d = T(), x(), E();
            for (var e = 0, t = c.shapeList.length; e < t; e++)
                c.shapeList[e].id = i.newShapeId(c.type), i.addShape(c.shapeList[e])
        }
        function E() {
            var e = h.data, t = e.length, n, r, s, o, u = h.textStyle, l, v, m = i.getWidth(), y = i.getHeight(), b = d.x, w = d.y, E = h.itemWidth, x = h.itemHeight, T = h.itemGap, L;
            h.orient == "vertical" && h.x == "right" && (b = d.x + d.width - E);
            for (var A = 0; A < t; A++) {
                l = a.merge(e[A].textStyle || {}, u, {overwrite: !1}), v = c.getFont(l), n = e[A].name || e[A];
                if (n === "") {
                    h.orient == "horizontal" ? (b = d.x, w += x + T) : (h.x == "right" ? b -= d.maxWidth + T : b += d.maxWidth + T, w = d.y);
                    continue
                }
                r = N(n).type, L = M(n), h.orient == "horizontal" ? m - b < 200 && E + 5 + f.getTextWidth(n, v) + (A == t - 1 || e[A + 1] === "" ? 0 : T) >= m - b && (b = d.x, w += x + T) : y - w < 200 && x + (A == t - 1 || e[A + 1] === "" ? 0 : T) >= y - w && (h.x == "right" ? b -= d.maxWidth + T : b += d.maxWidth + T, w = d.y), s = C(b, w, E, x, g[n] ? L : "#ccc", r, L), s._name = n, h.selectedMode && (s.onclick = k), c.shapeList.push(s), o = {shape: "text", zlevel: p, style: {x: b + E + 5, y: w, color: g[n] ? l.color === "auto" ? L : l.color : "#ccc", text: n, textFont: v, textBaseline: "top"}, highlightStyle: {color: L, brushType: "fill"}, hoverable: !!h.selectedMode, clickable: !!h.selectedMode}, h.orient == "vertical" && h.x == "right" && (o.style.x -= E + 10, o.style.textAlign = "right"), o._name = n, h.selectedMode && (o.onclick = k), c.shapeList.push(o), h.orient == "horizontal" ? b += E + 5 + f.getTextWidth(n, v) + T : w += x + T
            }
            h.orient == "horizontal" && h.x == "center" && w != d.y && S()
        }
        function S() {
            var e = [], t = d.x;
            for (var n = 2, r = c.shapeList.length; n < r; n++)
                c.shapeList[n].style.x == t ? e.push((d.width - (c.shapeList[n - 1].style.x + f.getTextWidth(c.shapeList[n - 1].style.text, c.shapeList[n - 1].style.textFont) - t)) / 2) : n == r - 1 && e.push((d.width - (c.shapeList[n].style.x + f.getTextWidth(c.shapeList[n].style.text, c.shapeList[n].style.textFont) - t)) / 2);
            var i = -1;
            for (var n = 1, r = c.shapeList.length; n < r; n++) {
                c.shapeList[n].style.x == t && i++;
                if (e[i] === 0)
                    continue;
                c.shapeList[n].style.x += e[i]
            }
        }
        function x() {
            var e = h.padding[0], t = h.padding[1], n = h.padding[2], r = h.padding[3];
            c.shapeList.push({shape: "rectangle", zlevel: p, hoverable: !1, style: {x: d.x - r, y: d.y - e, width: d.width + r + t, height: d.height + e + n, brushType: h.borderWidth === 0 ? "fill" : "both", color: h.backgroundColor, strokeColor: h.borderColor, lineWidth: h.borderWidth}})
        }
        function T() {
            var e = h.data, t = e.length, n = h.itemGap, r = h.itemWidth + 5, s = h.itemHeight, o = h.textStyle, u = c.getFont(o), l = 0, p = 0, d = h.padding, v = i.getWidth() - d[1] - d[3], m = i.getHeight() - d[0] - d[2], g = 0, y = 0;
            if (h.orient == "horizontal") {
                p = s;
                for (var b = 0; b < t; b++) {
                    if (e[b] === "") {
                        g -= n, g > v ? (l = v, p += s + n) : l = Math.max(l, g), p += s + n, g = 0;
                        continue
                    }
                    dataTextStyle = a.merge(e[b].textStyle || {}, o, {overwrite: !1}), g += r + f.getTextWidth(e[b].name || e[b], e[b].textStyle ? c.getFont(a.merge(e[b].textStyle || {}, o, {overwrite: !1})) : u) + n
                }
                p = Math.max(p, s), g -= n, g > v ? (l = v, p += s + n) : l = Math.max(l, g)
            } else {
                for (var b = 0; b < t; b++)
                    y = Math.max(y, f.getTextWidth(e[b].name || e[b], e[b].textStyle ? c.getFont(a.merge(e[b].textStyle || {}, o, {overwrite: !1})) : u));
                y += r, l = y;
                for (var b = 0; b < t; b++) {
                    if (e[b] === "") {
                        g -= n, g > m ? (p = m, l += y + n) : p = Math.max(p, g), l += y + n, g = 0;
                        continue
                    }
                    g += s + n
                }
                l = Math.max(l, y), g -= n, g > m ? (p = m, l += y + n) : p = Math.max(p, g)
            }
            v = i.getWidth(), m = i.getHeight();
            var w;
            switch (h.x) {
                case"center":
                    w = Math.floor((v - l) / 2);
                    break;
                case"left":
                    w = h.padding[3] + h.borderWidth;
                    break;
                case"right":
                    w = v - l - h.padding[1] - h.padding[3] - h.borderWidth * 2;
                    break;
                default:
                    w = h.x - 0, w = isNaN(w) ? 0 : w
            }
            var E;
            switch (h.y) {
                case"top":
                    E = h.padding[0] + h.borderWidth;
                    break;
                case"bottom":
                    E = m - p - h.padding[0] - h.padding[2] - h.borderWidth * 2;
                    break;
                case"center":
                    E = Math.floor((m - p) / 2);
                    break;
                default:
                    E = h.y - 0, E = isNaN(E) ? 0 : E
            }
            return{x: w, y: E, width: l, height: p, maxWidth: y}
        }
        function N(e) {
            var n = s.series, r;
            for (var i = 0, o = n.length; i < o; i++) {
                if (n[i].name == e)
                    return{type: n[i].type, series: n[i], seriesIndex: i, data: null, dataIndex: -1};
                if (n[i].type == t.CHART_TYPE_PIE || n[i].type == t.CHART_TYPE_RADAR || n[i].type == t.CHART_TYPE_CHORD || n[i].type == t.CHART_TYPE_FORCE) {
                    r = n[i].type != t.CHART_TYPE_FORCE ? n[i].data : n[i].categories;
                    for (var u = 0, a = r.length; u < a; u++)
                        if (r[u].name == e)
                            return{type: n[i].type, series: n[i], seriesIndex: i, data: r[u], dataIndex: u}
                }
            }
            return{type: "bar", series: null, seriesIndex: -1, data: null, dataIndex: -1}
        }
        function C(e, n, r, i, s, o, u) {
            var a = s === "#ccc" ? u : typeof s == "string" && s != "#ccc" ? l.lift(s, -0.3) : s, f = {shape: "icon", zlevel: p, style: {iconType: "legendicon" + (o != t.CHART_TYPE_CHORD ? o : t.CHART_TYPE_PIE), x: e, y: n, width: r, height: i, color: s, strokeColor: s, lineWidth: 2}, highlightStyle: {color: a, strokeColor: a, lineWidth: 1}, hoverable: h.selectedMode, clickable: h.selectedMode};
            switch (o) {
                case"line":
                    f.style.brushType = "stroke", f.highlightStyle.lineWidth = 3;
                    break;
                case"radar":
                case"scatter":
                    f.highlightStyle.lineWidth = 3;
                    break;
                case"k":
                    f.style.brushType = "both", f.highlightStyle.lineWidth = 3, f.highlightStyle.color = f.style.color = c.query(t, "k.itemStyle.normal.color") || "#fff", f.style.strokeColor = s != "#ccc" ? c.query(t, "k.itemStyle.normal.lineStyle.color") || "#ff3200" : s
            }
            return f
        }
        function k(e) {
            var n = e.target._name;
            if (h.selectedMode === "single")
                for (var i in g)
                    g[i] = !1;
            g[n] = !g[n], r.dispatch(t.EVENT.LEGEND_SELECTED, e.event, {selected: g, target: n})
        }
        function L(e) {
            if (!c.query(e, "legend.data"))
                return;
            s = e, s.legend = c.reformOption(s.legend), s.legend.padding = c.reformCssArray(s.legend.padding), h = s.legend, c.clear(), g = {};
            var n = h.data || [], r, i, u, a;
            for (var f = 0, l = n.length; f < l; f++) {
                r = n[f].name || n[f];
                if (r === "")
                    continue;
                i = N(r), i.series ? (!i.data || i.type != t.CHART_TYPE_PIE && i.type != t.CHART_TYPE_FORCE ? a = [i.series] : a = [i.data, i.series], u = c.getItemStyleColor(c.deepQuery(a, "itemStyle.normal.color"), i.seriesIndex, i.dataIndex, i.data), u && i.type != t.CHART_TYPE_K && O(r, u), g[r] = !0) : g[r] = !1
            }
            if (o)
                for (var p in o)
                    g[p] = o[p];
            w()
        }
        function A(e) {
            if (e) {
                s = e, s.legend = c.reformOption(s.legend), s.legend.padding = c.reformCssArray(s.legend.padding);
                if (s.legend.selected)
                    for (var t in s.legend.selected)
                        g[t] = s.legend.selected[t]
            }
            h = s.legend, c.clear(), w()
        }
        function O(e, t) {
            m[e] = t
        }
        function M(e) {
            return m[e] || (m[e] = i.getColor(v++)), m[e]
        }
        function _(e) {
            return m[e] ? m[e] : !1
        }
        function D(e, t) {
            h.data.push(e), O(e, t), g[e] = !0
        }
        function P(e) {
            var t = h.data, n = [], r = !1;
            for (var i = 0, s = t.length; i < s; i++) {
                if (!r && t[i] == e) {
                    r = !0;
                    continue
                }
                n.push(t[i])
            }
            h.data = n
        }
        function H(e) {
            if (typeof e == "undefined")
                return;
            var t;
            for (var n = 0, r = c.shapeList.length; n < r; n++) {
                t = c.shapeList[n];
                if (t._name == e && t.shape != "text")
                    return t
            }
        }
        function B(e, t) {
            var n;
            for (var r = 0, s = c.shapeList.length; r < s; r++)
                n = c.shapeList[r], n._name == e && n.shape != "text" && (g[e] || (t.style.color = "#ccc", t.style.strokeColor = "#ccc"), i.modShape(n.id, t))
        }
        function j(e) {
            return typeof g[e] != "undefined" ? g[e] : !0
        }
        function F() {
            return g
        }
        function I(e, t) {
            var n = e.selected;
            for (var r in g)
                g[r] != n[r] && (t.needRefresh = !0), g[r] = n[r];
            return
        }
        var u = e("./base");
        u.call(this, t, i);
        var a = e("zrender/tool/util"), f = e("zrender/tool/area"), l = e("zrender/tool/color"), c = this;
        c.type = t.COMPONENT_TYPE_LEGEND;
        var h, p = c.getZlevelBase(), d = {}, v = 0, m = {}, g = {}, y = e("zrender/shape").get("icon");
        for (var b in n)
            y.define("legendicon" + b, n[b]);
        c.init = L, c.refresh = A, c.setColor = O, c.getColor = M, c.hasColor = _, c.add = D, c.del = P, c.getItemShape = H, c.setItemShape = B, c.isSelected = j, c.getSelectedMap = F, c.onlegendSelected = I, L(s)
    }
    var n = {line: function(e, t) {
            var n = t.height / 2;
            e.moveTo(t.x, t.y + n), e.lineTo(t.x + t.width, t.y + n)
        }, pie: function(t, n) {
            var r = n.x, i = n.y, s = n.width, o = n.height, u = e("zrender/shape").get("sector");
            u.buildPath(t, {x: r + s / 2, y: i + o + 2, r: o + 2, r0: 6, startAngle: 45, endAngle: 135})
        }, chord: function(t, n) {
            var r = n.x, i = n.y, s = n.width, o = n.height, u = e("zrender/shape").get("beziercurve");
            t.moveTo(r, i + o), u.buildPath(t, {xStart: r, yStart: i + o, cpX1: r + s, cpY1: i + o, cpX2: r, cpY2: i + 4, xEnd: r + s, yEnd: i + 4}), t.lineTo(r + s, i), u.buildPath(t, {xStart: r + s, yStart: i, cpX1: r, cpY1: i, cpX2: r + s, cpY2: i + o - 4, xEnd: r, yEnd: i + o - 4}), t.lineTo(r, i + o)
        }, k: function(t, n) {
            var r = n.x, i = n.y, s = n.width, o = n.height, u = e("zrender/shape").get("candle");
            u.buildPath(t, {x: r + s / 2, y: [i + 1, i + 1, i + o - 6, i + o], width: s - 6})
        }, bar: function(e, t) {
            var n = t.x, r = t.y + 1, i = t.width, s = t.height - 2, o = 3;
            e.moveTo(n + o, r), e.lineTo(n + i - o, r), e.quadraticCurveTo(n + i, r, n + i, r + o), e.lineTo(n + i, r + s - o), e.quadraticCurveTo(n + i, r + s, n + i - o, r + s), e.lineTo(n + o, r + s), e.quadraticCurveTo(n, r + s, n, r + s - o), e.lineTo(n, r + o), e.quadraticCurveTo(n, r, n + o, r)
        }, force: function(t, n) {
            e("zrender/shape").get("icon").get("circle")(t, n)
        }, radar: function(e, t) {
            var n = 6, r = t.x + t.width / 2, i = t.y + t.height / 2, s = t.height / 2, o = 2 * Math.PI / n, u = -Math.PI / 2, a = r + s * Math.cos(u), f = i + s * Math.sin(u);
            e.moveTo(a, f), u += o;
            for (var l = 0, c = n - 1; l < c; l++)
                e.lineTo(r + s * Math.cos(u), i + s * Math.sin(u)), u += o;
            e.lineTo(a, f)
        }};
    return e("../component").define("legend", t), t
}), define("echarts/util/shape/handlePolygon", ["require", "zrender/tool/matrix", "zrender/shape", "zrender/shape/base", "zrender/shape"], function(e) {
    function n() {
        this.type = "handlePolygon"
    }
    var t = e("zrender/tool/matrix");
    return n.prototype = {buildPath: function(t, n) {
            e("zrender/shape").get("polygon").buildPath(t, n);
            return
        }, isCover: function(e, n, r) {
            if (e.__needTransform && e._transform) {
                var i = [];
                t.invert(i, e._transform);
                var s = [n, r];
                t.mulVector(s, i, [n, r, 1]), n == s[0] && r == s[1] && (Math.abs(e.rotation[0]) > 1e-4 || Math.abs(e.position[0]) > 1e-4 || Math.abs(e.position[1]) > 1e-4 || Math.abs(e.scale[0] - 1) > 1e-4 || Math.abs(e.scale[1] - 1) > 1e-4 ? e.__needTransform = !0 : e.__needTransform = !1), n = s[0], r = s[1]
            }
            var o = e.style.rect;
            return n >= o.x && n <= o.x + o.width && r >= o.y && r <= o.y + o.height ? !0 : !1
        }}, e("zrender/shape/base").derive(n), e("zrender/shape").define("handlePolygon", new n), n
}), define("echarts/component/dataRange", ["require", "./base", "zrender/tool/area", "zrender/tool/color", "zrender/tool/color", "../util/shape/handlePolygon", "../component"], function(e) {
    function t(t, n, r, i) {
        function T() {
            l = M(), O(), a.splitNumber <= 0 || a.calculable ? C() : N();
            for (var e = 0, t = u.shapeList.length; e < t; e++)
                u.shapeList[e].id = r.newShapeId(u.type), r.addShape(u.shapeList[e]);
            j()
        }
        function N() {
            var e = S, t = e.length, n, r, i, s = u.getFont(a.textStyle), c = l.x, h = l.y, p = a.itemWidth, d = a.itemHeight, v = a.itemGap, m = o.getTextHeight("国", s), g;
            a.orient == "vertical" && a.x == "right" && (c = l.x + l.width - p);
            var y = !0;
            a.text && (y = !1, a.text[0] && (i = _(c, h, a.text[0]), a.orient == "horizontal" ? c += o.getTextWidth(a.text[0], s) + b : (h += m + b, i.style.y += m / 2 + b, i.style.textBaseline = "bottom"), u.shapeList.push(i)));
            for (var E = 0; E < t; E++)
                n = e[E], g = X((t - E) * w + a.min), r = D(c, h, p, d, x[E] ? g : "#ccc"), r._idx = E, r.onclick = U, u.shapeList.push(r), y && (i = {shape: "text", zlevel: f, style: {x: c + p + 5, y: h, color: x[E] ? a.textStyle.color : "#ccc", text: e[E], textFont: s, textBaseline: "top"}, highlightStyle: {brushType: "fill"}, clickable: !0}, a.orient == "vertical" && a.x == "right" && (i.style.x -= p + 10, i.style.textAlign = "right"), i._idx = E, i.onclick = U, u.shapeList.push(i)), a.orient == "horizontal" ? c += p + (y ? 5 : 0) + (y ? o.getTextWidth(n, s) : 0) + v : h += d + v;
            !y && a.text[1] && (a.orient == "horizontal" ? c = c - v + b : h = h - v + b, i = _(c, h, a.text[1]), a.orient != "horizontal" && (i.style.y -= 5, i.style.textBaseline = "top"), u.shapeList.push(i))
        }
        function C() {
            var t, n, r = u.getFont(a.textStyle), i = l.x, s = l.y, h = a.itemWidth, p = a.itemHeight, d = o.getTextHeight("国", r), v = !0;
            a.text && (v = !1, a.text[0] && (n = _(i, s, a.text[0]), a.orient == "horizontal" ? i += o.getTextWidth(a.text[0], r) + b : (s += d + b, n.style.y += d / 2 + b, n.style.textBaseline = "bottom"), u.shapeList.push(n)));
            var m = e("zrender/tool/color"), g = 1 / (a.color.length - 1), y = [];
            for (var w = 0, E = a.color.length; w < E; w++)
                y.push([w * g, a.color[w]]);
            a.orient == "horizontal" ? (t = {shape: "rectangle", zlevel: f, style: {x: i, y: s, width: h * 10, height: p, color: m.getLinearGradient(i, s, i + h * 10, s, y)}, hoverable: !1}, i += h * 10 + b) : (t = {shape: "rectangle", zlevel: f, style: {x: i, y: s, width: h, height: p * 10, color: m.getLinearGradient(i, s, i, s + p * 10, y)}, hoverable: !1}, s += p * 10 + b), u.shapeList.push(t), a.calculable && (c = t.style, k(), A(), L()), !v && a.text[1] && (n = _(i, s, a.text[1]), u.shapeList.push(n))
        }
        function k() {
            m = {shape: "rectangle", zlevel: f + 1, style: {x: c.x, y: c.y, width: c.width, height: c.height, color: "rgba(255,255,255,0)"}, highlightStyle: {strokeColor: "rgba(255,255,255,0.5)", lineWidth: 1}, draggable: !0, ondrift: P, ondragend: H, _type: "filler"}, u.shapeList.push(m)
        }
        function L() {
            var e = c.x, t = c.y, n = c.width, r = c.height, i = u.getFont(a.textStyle), s = o.getTextHeight("国", i), l = Math.max(o.getTextWidth(a.max.toFixed(a.precision), i), o.getTextWidth(a.min.toFixed(a.precision), i)) + 2, p, v, m, g, y, b, w, E;
            a.orient == "horizontal" ? a.y != "bottom" ? (p = [[e, t], [e, t + r + s], [e - s, t + r + s], [e - 1, t + r], [e - 1, t]], v = e - l / 2 - s, m = t + r + s / 2 + 2, g = {x: e - l - s, y: t + r, width: l + s, height: s}, y = [[e + n, t], [e + n, t + r + s], [e + n + s, t + r + s], [e + n + 1, t + r], [e + n + 1, t]], b = e + n + l / 2 + s, w = m, E = {x: e + n, y: t + r, width: l + s, height: s}) : (p = [[e, t + r], [e, t - s], [e - s, t - s], [e - 1, t], [e - 1, t + r]], v = e - l / 2 - s, m = t - s / 2 - 2, g = {x: e - l - s, y: t - s, width: l + s, height: s}, y = [[e + n, t + r], [e + n, t - s], [e + n + s, t - s], [e + n + 1, t], [e + n + 1, t + r]], b = e + n + l / 2 + s, w = m, E = {x: e + n, y: t - s, width: l + s, height: s}) : (l += s, a.x != "right" ? (p = [[e, t], [e + n + s, t], [e + n + s, t - s], [e + n, t - 1], [e, t - 1]], v = e + n + l / 2 + s / 2, m = t - s / 2, g = {x: e + n, y: t - s, width: l + s, height: s}, y = [[e, t + r], [e + n + s, t + r], [e + n + s, t + s + r], [e + n, t + 1 + r], [e, t + r + 1]], b = v, w = t + r + s / 2, E = {x: e + n, y: t + r, width: l + s, height: s}) : (p = [[e + n, t], [e - s, t], [e - s, t - s], [e, t - 1], [e + n, t - 1]], v = e - l / 2 - s / 2, m = t - s / 2, g = {x: e - l - s, y: t - s, width: l + s, height: s}, y = [[e + n, t + r], [e - s, t + r], [e - s, t + s + r], [e, t + 1 + r], [e + n, t + r + 1]], b = v, w = t + r + s / 2, E = {x: e - l - s, y: t + r, width: l + s, height: s})), h = {shape: "handlePolygon", style: {pointList: p, text: a.max.toFixed(a.precision), textX: v, textY: m, color: X(a.max), rect: g, x: p[0][0], y: p[0][1], _x: p[0][0], _y: p[0][1]}}, h.highlightStyle = {strokeColor: h.style.color, lineWidth: 1}, d = {shape: "handlePolygon", style: {pointList: y, text: a.min.toFixed(a.precision), textX: b, textY: w, color: X(a.min), rect: E, x: y[0][0], y: y[0][1], _x: y[0][0], _y: y[0][1]}}, d.highlightStyle = {strokeColor: d.style.color, lineWidth: 1}, h.zlevel = d.zlevel = f + 1, h.draggable = d.draggable = !0, h.ondrift = d.ondrift = P, h.ondragend = d.ondragend = H, h.style.textColor = d.style.textColor = a.textStyle.color, h.style.textAlign = d.style.textAlign = "center", h.style.textPosition = d.style.textPosition = "specific", h.style.textBaseline = d.style.textBaseline = "middle", h.style.width = d.style.width = 0, h.style.height = d.style.height = 0, h.style.textPosition = d.style.textPosition = "specific", u.shapeList.push(h), u.shapeList.push(d)
        }
        function A() {
            var e = c.x, t = c.y, n = c.width, r = c.height;
            p = {shape: "rectangle", zlevel: f + 1, style: {x: e, y: t, width: a.orient == "horizontal" ? 0 : n, height: a.orient == "horizontal" ? r : 0, color: "#ccc"}, hoverable: !1}, v = {shape: "rectangle", zlevel: f + 1, style: {x: a.orient == "horizontal" ? e + n : e, y: a.orient == "horizontal" ? t : t + r, width: a.orient == "horizontal" ? 0 : n, height: a.orient == "horizontal" ? r : 0, color: "#ccc"}, hoverable: !1}, u.shapeList.push(p), u.shapeList.push(v)
        }
        function O() {
            var e = a.padding[0], t = a.padding[1], n = a.padding[2], r = a.padding[3];
            u.shapeList.push({shape: "rectangle", zlevel: f, hoverable: !1, style: {x: l.x - r, y: l.y - e, width: l.width + r + t, height: l.height + e + n, brushType: a.borderWidth === 0 ? "fill" : "both", color: a.backgroundColor, strokeColor: a.borderColor, lineWidth: a.borderWidth}})
        }
        function M() {
            var e = S, t = e.length, n = a.itemGap, i = a.itemWidth, s = a.itemHeight, f = 0, l = 0, c = u.getFont(a.textStyle), h = o.getTextHeight("国", c);
            if (a.orient == "horizontal") {
                if (a.text || a.splitNumber <= 0 || a.calculable)
                    f = (a.splitNumber <= 0 || a.calculable ? i * 10 + n : t * (i + n)) + (a.text && typeof a.text[0] != "undefined" ? o.getTextWidth(a.text[0], c) + b : 0) + (a.text && typeof a.text[1] != "undefined" ? o.getTextWidth(a.text[1], c) + b : 0);
                else {
                    i += 5;
                    for (var p = 0; p < t; p++)
                        f += i + o.getTextWidth(e[p], c) + n
                }
                f -= n, l = Math.max(h, s)
            } else {
                var d;
                if (a.text || a.splitNumber <= 0 || a.calculable)
                    l = (a.splitNumber <= 0 || a.calculable ? s * 10 + n : t * (s + n)) + (a.text && typeof a.text[0] != "undefined" ? b + h : 0) + (a.text && typeof a.text[1] != "undefined" ? b + h : 0), d = Math.max(o.getTextWidth(a.text && a.text[0] || "", c), o.getTextWidth(a.text && a.text[1] || "", c)), f = Math.max(i, d);
                else {
                    l = (s + n) * t, i += 5, d = 0;
                    for (var p = 0; p < t; p++)
                        d = Math.max(d, o.getTextWidth(e[p], c));
                    f = i + d
                }
                l -= n
            }
            var v, m = r.getWidth();
            switch (a.x) {
                case"center":
                    v = Math.floor((m - f) / 2);
                    break;
                case"left":
                    v = a.padding[3] + a.borderWidth;
                    break;
                case"right":
                    v = m - f - a.padding[1] - a.borderWidth;
                    break;
                default:
                    v = u.parsePercent(a.x, m), v = isNaN(v) ? 0 : v
            }
            var g, y = r.getHeight();
            switch (a.y) {
                case"top":
                    g = a.padding[0] + a.borderWidth;
                    break;
                case"bottom":
                    g = y - l - a.padding[2] - a.borderWidth;
                    break;
                case"center":
                    g = Math.floor((y - l) / 2);
                    break;
                default:
                    g = u.parsePercent(a.y, y), g = isNaN(g) ? 0 : g
            }
            if (a.calculable) {
                var w = Math.max(o.getTextWidth(a.max, c), o.getTextWidth(a.min, c)) + h;
                a.orient == "horizontal" ? (v < w && (v = w), v + f + w > m && (v -= w)) : (g < h && (g = h), g + l + h > y && (g -= h))
            }
            return{x: v, y: g, width: f, height: l}
        }
        function _(e, t, n) {
            return{shape: "text", zlevel: f, style: {x: a.orient == "horizontal" ? e : l.x + l.width / 2, y: a.orient == "horizontal" ? l.y + l.height / 2 : t, color: a.textStyle.color, text: n, textFont: u.getFont(a.textStyle), textBaseline: a.orient == "horizontal" ? "middle" : "top", textAlign: a.orient == "horizontal" ? "left" : "center"}, hoverable: !1}
        }
        function D(e, t, n, r, i) {
            return{shape: "rectangle", zlevel: f, style: {x: e, y: t + 1, width: n, height: r - 2, color: i}, highlightStyle: {strokeColor: i, lineWidth: 1}, clickable: !0}
        }
        function P(e, t, n) {
            var r = c.x, i = c.y, s = c.width, o = c.height;
            return a.orient == "horizontal" ? e.style.x + t <= r ? e.style.x = r : e.style.x + t + e.style.width >= r + s ? e.style.x = r + s - e.style.width : e.style.x += t : e.style.y + n <= i ? e.style.y = i : e.style.y + n + e.style.height >= i + o ? e.style.y = i + o - e.style.height : e.style.y += n, e._type == "filler" ? F() : I(e), a.realtime ? R() : (clearTimeout(y), y = setTimeout(R, 200)), !0
        }
        function H() {
            u.isDragend = !0
        }
        function B(e, r) {
            if (!u.isDragend || !e.target)
                return;
            R(), r.dragOut = !0, r.dragIn = !0, a.realtime || n.dispatch(t.EVENT.DATA_RANGE, null, {range: {start: g.end, end: g.start}}), r.needRefresh = !1, u.isDragend = !1;
            return
        }
        function j() {
            if (a.range) {
                typeof a.range.start != "undefined" && (g.end = a.range.start), typeof a.range.end != "undefined" && (g.start = a.range.end);
                if (g.start != 100 || g.end !== 0) {
                    if (a.orient == "horizontal") {
                        var e = m.style.width;
                        m.style.x += e * (100 - g.start) / 100, m.style.width = e * (g.start - g.end) / 100
                    } else {
                        var t = m.style.height;
                        m.style.y += t * (100 - g.start) / 100, m.style.height = t * (g.start - g.end) / 100
                    }
                    r.modShape(m.id, m), F()
                }
            }
        }
        function F() {
            var e = c.x, t = c.y, n = c.width, r = c.height;
            a.orient == "horizontal" ? (h.style.x = m.style.x, p.style.width = h.style.x - e, d.style.x = m.style.x + m.style.width, v.style.x = d.style.x, v.style.width = e + n - d.style.x, g.start = Math.ceil(100 - (h.style.x - e) / n * 100), g.end = Math.floor(100 - (d.style.x - e) / n * 100)) : (h.style.y = m.style.y, p.style.height = h.style.y - t, d.style.y = m.style.y + m.style.height, v.style.y = d.style.y, v.style.height = t + r - d.style.y, g.start = Math.ceil(100 - (h.style.y - t) / r * 100), g.end = Math.floor(100 - (d.style.y - t) / r * 100)), q(!1)
        }
        function I(e) {
            var t = c.x, n = c.y, r = c.width, i = c.height, s, o;
            a.orient == "horizontal" ? (s = h.style.x, o = d.style.x, e.id == h.id && s >= o ? (o = s, d.style.x = s) : e.id == d.id && s >= o && (s = o, h.style.x = s), m.style.x = s, m.style.width = o - s, p.style.width = s - t, v.style.x = o, v.style.width = t + r - o, g.start = Math.ceil(100 - (s - t) / r * 100), g.end = Math.floor(100 - (o - t) / r * 100)) : (s = h.style.y, o = d.style.y, e.id == h.id && s >= o ? (o = s, d.style.y = s) : e.id == d.id && s >= o && (s = o, h.style.y = s), m.style.y = s, m.style.height = o - s, p.style.height = s - n, v.style.y = o, v.style.height = n + i - o, g.start = Math.ceil(100 - (s - n) / i * 100), g.end = Math.floor(100 - (o - n) / i * 100)), q(!0)
        }
        function q(e) {
            h.position = [h.style.x - h.style._x, h.style.y - h.style._y], a.precision === 0 ? h.style.text = Math.round(w * g.start + a.min) + "" : h.style.text = (w * g.start + a.min).toFixed(a.precision), h.style.color = h.highlightStyle.strokeColor = X(w * g.start + a.min), r.modShape(h.id, h), d.position = [d.style.x - d.style._x, d.style.y - d.style._y], a.precision === 0 ? d.style.text = Math.round(w * g.end + a.min) + "" : d.style.text = (w * g.end + a.min).toFixed(a.precision), d.style.color = d.highlightStyle.strokeColor = X(w * g.end + a.min), r.modShape(d.id, d), r.modShape(p.id, p), r.modShape(v.id, v), e && r.modShape(m.id, m), r.refresh()
        }
        function R() {
            a.realtime && n.dispatch(t.EVENT.DATA_RANGE, null, {range: {start: g.end, end: g.start}})
        }
        function U(e) {
            var r = e.target._idx;
            x[r] = !x[r], n.dispatch(t.EVENT.REFRESH)
        }
        function z(t) {
            if (typeof u.query(t, "dataRange.min") == "undefined" || typeof u.query(t, "dataRange.max") == "undefined")
                return;
            i = t, i.dataRange = u.reformOption(i.dataRange), i.dataRange.padding = u.reformCssArray(i.dataRange.padding), a = i.dataRange, u.clear(), x = {};
            var n = e("zrender/tool/color"), r = a.splitNumber <= 0 || a.calculable ? 100 : a.splitNumber;
            E = n.getGradientColors(a.color, Math.max((r - a.color.length) / (a.color.length - 1), 0) + 1);
            if (E.length > r) {
                var s = E.length, o = [E[0]], f = s / (r - 1);
                for (var l = 1; l < r - 1; l++)
                    o.push(E[Math.floor(l * f)]);
                o.push(E[s - 1]), E = o
            }
            a.precision === 0 ? w = Math.round((a.max - a.min) / r) || 1 : (w = (a.max - a.min) / r, w = w.toFixed(a.precision) - 0), S = [];
            for (var l = 0; l < r; l++)
                x[l] = !0, S.unshift((l * w + a.min).toFixed(a.precision) + " - " + ((l + 1) * w + a.min).toFixed(a.precision));
            g = {start: 100, end: 0}, T()
        }
        function W(e) {
            e && (i = e, i.dataRange = u.reformOption(i.dataRange), i.dataRange.padding = u.reformCssArray(i.dataRange.padding)), a = i.dataRange, a.range = {start: g.end, end: g.start}, u.clear(), T()
        }
        function X(e) {
            if (isNaN(e))
                return null;
            e < a.min ? e = a.min : e > a.max && (e = a.max);
            if (a.calculable)
                if (e > w * g.start + a.min || e < w * g.end + a.min)
                    return null;
            var t = E.length - Math.ceil((e - a.min) / (a.max - a.min) * E.length);
            return t == E.length && t--, x[t] ? E[t] : null
        }
        var s = e("./base");
        s.call(this, t, r);
        var o = e("zrender/tool/area"), u = this;
        u.type = t.COMPONENT_TYPE_DATARANGE;
        var a, f = u.getZlevelBase(), l = {}, c, h, p, d, v, m, g, y, b = 10, w, E, S, x = {};
        u.init = z, u.refresh = W, u.getColor = X, u.ondragend = B, z(i)
    }
    return e("../util/shape/handlePolygon"), e("../component").define("dataRange", t), t
}), define("echarts/component/tooltip", ["require", "./base", "../util/ecData", "zrender/config", "zrender/shape", "zrender/tool/event", "zrender/tool/area", "zrender/tool/color", "zrender/tool/util", "zrender/shape/base", "../component"], function(e) {
    function t(t, n, r, i, s, o) {
        function U(e) {
            if (!e)
                return"";
            var t = [];
            if (e.transitionDuration) {
                var n = "left " + e.transitionDuration + "s," + "top " + e.transitionDuration + "s";
                t.push("transition:" + n), t.push("-moz-transition:" + n), t.push("-webkit-transition:" + n), t.push("-o-transition:" + n)
            }
            e.backgroundColor && (t.push("background-Color:" + p.toHex(e.backgroundColor)), t.push("filter:alpha(opacity=70)"), t.push("background-Color:" + e.backgroundColor)), typeof e.borderWidth != "undefined" && t.push("border-width:" + e.borderWidth + "px"), typeof e.borderColor != "undefined" && t.push("border-color:" + e.borderColor), typeof e.borderRadius != "undefined" && (t.push("border-radius:" + e.borderRadius + "px"), t.push("-moz-border-radius:" + e.borderRadius + "px"), t.push("-webkit-border-radius:" + e.borderRadius + "px"), t.push("-o-border-radius:" + e.borderRadius + "px"));
            var r = e.textStyle;
            r && (r.color && t.push("color:" + r.color), r.decoration && t.push("text-decoration:" + r.decoration), r.align && t.push("text-align:" + r.align), r.fontFamily && t.push("font-family:" + r.fontFamily), r.fontSize && t.push("font-size:" + r.fontSize + "px"), r.fontSize && t.push("line-height:" + Math.round(r.fontSize * 3 / 2) + "px"), r.fontStyle && t.push("font-style:" + r.fontStyle), r.fontWeight && t.push("font-weight:" + r.fontWeight));
            var i = e.padding;
            return typeof i != "undefined" && (i = g.reformCssArray(i), t.push("padding:" + i[0] + "px " + i[1] + "px " + i[2] + "px " + i[3] + "px")), t = t.join(";") + ";", t
        }
        function z() {
            N && (N.style.display = "none");
            var e = !1;
            q.invisible || (q.invisible = !0, r.modShape(q.id, q), e = !0), R.invisible || (R.invisible = !0, r.modShape(R.id, R), e = !0), F && F.tipShape.length > 0 && (r.delShape(F.tipShape), F = !1), e && r.refresh()
        }
        function W(e, t, n) {
            var r = N.offsetHeight, i = N.offsetWidth;
            e + i > j && (e -= i + 40), t + r > B && (t -= r - 20), t < 20 && (t = 0), N.style.cssText = C + k + (n ? n : "") + "left:" + e + "px;top:" + t + "px;", (r < 10 || i < 10) && setTimeout(X, 20)
        }
        function X() {
            if (N) {
                var e = "", t = N.offsetHeight, n = N.offsetWidth;
                N.offsetLeft + n > j && (e += "left:" + (j - n - 20) + "px;"), N.offsetTop + t > B && (e += "top:" + (B - t - 10) + "px;"), e !== "" && (N.style.cssText += e)
            }
        }
        function V() {
            var e, t;
            if (!D)
                J() || $();
            else {
                if (D._type == "island" && i.tooltip.show) {
                    Y();
                    return
                }
                var n = a.get(D, "series"), r = a.get(D, "data");
                e = g.deepQuery([r, n, i], "tooltip.show"), typeof n == "undefined" || typeof r == "undefined" || e === !1 ? (clearTimeout(A), clearTimeout(M), A = setTimeout(z, O)) : (t = g.deepQuery([r, n, i], "tooltip.trigger"), t == "axis" ? Q(n.xAxisIndex, n.yAxisIndex, a.get(D, "dataIndex")) : Y())
            }
        }
        function $() {
            if (!E || !S) {
                A = setTimeout(z, O);
                return
            }
            var e = i.series, n, r;
            for (var s = 0, o = e.length; s < o; s++)
                if (g.deepQuery([e[s], i], "tooltip.trigger") == "axis") {
                    n = e[s].xAxisIndex || 0, r = e[s].yAxisIndex || 0;
                    if (E.getAxis(n) && E.getAxis(n).type == t.COMPONENT_TYPE_AXIS_CATEGORY) {
                        Q(n, r, K("x", E.getAxis(n)));
                        return
                    }
                    if (S.getAxis(r) && S.getAxis(r).type == t.COMPONENT_TYPE_AXIS_CATEGORY) {
                        Q(n, r, K("y", S.getAxis(r)));
                        return
                    }
                }
        }
        function J() {
            if (!x)
                return!1;
            var e = c.getX(P), t = c.getY(P), n = x.getNearestIndex([e, t]), r;
            return n ? (r = n.valueIndex, n = n.polarIndex) : n = -1, n != -1 ? G(n, r) : !1
        }
        function K(e, t) {
            var n = -1, r = c.getX(P), i = c.getY(P);
            if (e == "x") {
                var s, o, u = w.getXend(), a = t.getCoordByIndex(n);
                while (a < u) {
                    a <= r && (s = a);
                    if (a >= r)
                        break;
                    a = t.getCoordByIndex(++n), o = a
                }
                return r - s < o - r ? n -= n !== 0 ? 1 : 0 : typeof t.getNameByIndex(n) == "undefined" && (n -= 1), n
            }
            var f, l, h = w.getY(), a = t.getCoordByIndex(n);
            while (a > h) {
                a >= i && (l = a);
                if (a <= i)
                    break;
                a = t.getCoordByIndex(++n), f = a
            }
            return i - f > l - i ? n -= n !== 0 ? 1 : 0 : typeof t.getNameByIndex(n) == "undefined" && (n -= 1), n
        }
        function Q(e, r, o) {
            !P.connectTrigger && n.dispatch(t.EVENT.TOOLTIP_IN_GRID, P);
            if (typeof E == "undefined" || typeof S == "undefined" || typeof e == "undefined" || typeof r == "undefined" || o < 0) {
                clearTimeout(A), clearTimeout(M), A = setTimeout(z, O);
                return
            }
            var u = i.series, a = [], f = [], l, h, p, d, v, m = "";
            if (i.tooltip.trigger == "axis") {
                if (i.tooltip.show === !1)
                    return;
                d = i.tooltip.formatter
            }
            if (e != -1 && E.getAxis(e).type == t.COMPONENT_TYPE_AXIS_CATEGORY) {
                l = E.getAxis(e);
                for (var y = 0, x = u.length; y < x; y++) {
                    if (!at(u[y].name))
                        continue;
                    u[y].xAxisIndex == e && g.deepQuery([u[y], i], "tooltip.trigger") == "axis" && (v = g.query(u[y], "tooltip.showContent") || v, d = g.query(u[y], "tooltip.formatter") || d, m += U(g.query(u[y], "tooltip")), a.push(u[y]), f.push(y))
                }
                n.dispatch(t.EVENT.TOOLTIP_HOVER, P, {seriesIndex: f, dataIndex: b.dataZoom ? b.dataZoom.getRealDataIndex(f, o) : o}), p = c.getY(P) + 10, h = g.subPixelOptimize(l.getCoordByIndex(o), I), Z(a, h, w.getY(), h, w.getYend(), l.getGap()), h += 10
            } else if (r != -1 && S.getAxis(r).type == t.COMPONENT_TYPE_AXIS_CATEGORY) {
                l = S.getAxis(r);
                for (var y = 0, x = u.length; y < x; y++) {
                    if (!at(u[y].name))
                        continue;
                    u[y].yAxisIndex == r && g.deepQuery([u[y], i], "tooltip.trigger") == "axis" && (v = g.query(u[y], "tooltip.showContent") || v, d = g.query(u[y], "tooltip.formatter") || d, m += U(g.query(u[y], "tooltip")), a.push(u[y]), f.push(y))
                }
                n.dispatch(t.EVENT.TOOLTIP_HOVER, P, {seriesIndex: f, dataIndex: b.dataZoom ? b.dataZoom.getRealDataIndex(f, o) : o}), h = c.getX(P) + 10, p = g.subPixelOptimize(l.getCoordByIndex(o), I), Z(a, w.getX(), p, w.getXend(), p, l.getGap()), p += 10
            }
            if (a.length > 0) {
                var T;
                if (typeof d == "function") {
                    var C = [];
                    for (var y = 0, x = a.length; y < x; y++)
                        T = a[y].data[o], T = typeof T != "undefined" ? typeof T.value != "undefined" ? T.value : T : "-", C.push([a[y].name || "", l.getNameByIndex(o), T]);
                    H = "axis:" + o, N.innerHTML = d(C, H, nt)
                } else if (typeof d == "string") {
                    H = NaN, d = d.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}");
                    for (var y = 0, x = a.length; y < x; y++)
                        d = d.replace("{a" + y + "}", vt(a[y].name || "")), d = d.replace("{b" + y + "}", vt(l.getNameByIndex(o))), T = a[y].data[o], T = typeof T != "undefined" ? typeof T.value != "undefined" ? T.value : T : "-", d = d.replace("{c" + y + "}", T instanceof Array ? T : g.numAddCommas(T));
                    N.innerHTML = d
                } else {
                    H = NaN, d = vt(l.getNameByIndex(o));
                    for (var y = 0, x = a.length; y < x; y++)
                        d += "<br/>" + vt(a[y].name || "") + " : ", T = a[y].data[o], T = typeof T != "undefined" ? typeof T.value != "undefined" ? T.value : T : "-", d += T instanceof Array ? T : g.numAddCommas(T);
                    N.innerHTML = d
                }
                if (v === !1 || !i.tooltip.showContent)
                    return;
                g.hasAppend || (N.style.left = j / 2 + "px", N.style.top = B / 2 + "px", s.firstChild.appendChild(N), g.hasAppend = !0), W(h, p, m)
            }
        }
        function G(e, t) {
            if (typeof x == "undefined" || typeof e == "undefined" || typeof t == "undefined" || t < 0)
                return!1;
            var n = i.series, r = [], o, u, a = "";
            if (i.tooltip.trigger == "axis") {
                if (i.tooltip.show === !1)
                    return!1;
                o = i.tooltip.formatter
            }
            var f = i.polar[e].indicator[t].text;
            for (var l = 0, h = n.length; l < h; l++) {
                if (!at(n[l].name))
                    continue;
                n[l].polarIndex == e && g.deepQuery([n[l], i], "tooltip.trigger") == "axis" && (u = g.query(n[l], "tooltip.showContent") || u, o = g.query(n[l], "tooltip.formatter") || o, a += U(g.query(n[l], "tooltip")), r.push(n[l]))
            }
            if (r.length > 0) {
                var p, d, v = [];
                for (var l = 0, h = r.length; l < h; l++) {
                    p = r[l].data;
                    for (var m = 0, y = p.length; m < y; m++) {
                        d = p[m];
                        if (!at(d.name))
                            continue;
                        d = typeof d != "undefined" ? d : {name: "", value: {dataIndex: "-"}}, v.push([r[l].name || "", d.name, d.value[t], f])
                    }
                }
                if (v.length <= 0)
                    return;
                if (typeof o == "function")
                    H = "axis:" + t, N.innerHTML = o(v, H, nt);
                else if (typeof o == "string") {
                    o = o.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}").replace("{d}", "{d0}");
                    for (var l = 0, h = v.length; l < h; l++)
                        o = o.replace("{a" + l + "}", vt(v[l][0])), o = o.replace("{b" + l + "}", vt(v[l][1])), o = o.replace("{c" + l + "}", g.numAddCommas(v[l][2])), o = o.replace("{d" + l + "}", vt(v[l][3]));
                    N.innerHTML = o
                } else {
                    o = vt(v[0][1]) + "<br/>" + vt(v[0][3]) + " : " + g.numAddCommas(v[0][2]);
                    for (var l = 1, h = v.length; l < h; l++)
                        o += "<br/>" + vt(v[l][1]) + "<br/>", o += vt(v[l][3]) + " : " + g.numAddCommas(v[l][2]);
                    N.innerHTML = o
                }
                if (u === !1 || !i.tooltip.showContent)
                    return;
                return g.hasAppend || (N.style.left = j / 2 + "px", N.style.top = B / 2 + "px", s.firstChild.appendChild(N), g.hasAppend = !0), W(c.getX(P), c.getY(P), a), !0
            }
        }
        function Y() {
            var e = a.get(D, "series"), n = a.get(D, "data"), o = a.get(D, "name"), u = a.get(D, "value"), f = a.get(D, "special"), l = a.get(D, "special2"), h, p, d = "", v, m = "";
            D._type != "island" ? (i.tooltip.trigger == "item" && (h = i.tooltip.formatter), g.query(e, "tooltip.trigger") == "item" && (p = g.query(e, "tooltip.showContent") || p, h = g.query(e, "tooltip.formatter") || h, d += U(g.query(e, "tooltip"))), p = g.query(n, "tooltip.showContent") || p, h = g.query(n, "tooltip.formatter") || h, d += U(g.query(n, "tooltip"))) : (p = g.deepQuery([n, e, i], "tooltip.showContent"), h = g.deepQuery([n, e, i], "tooltip.islandFormatter"));
            if (typeof h == "function")
                H = (e.name || "") + ":" + a.get(D, "dataIndex"), N.innerHTML = h([e.name || "", o, u, f, l], H, nt);
            else if (typeof h == "string")
                H = NaN, h = h.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}"), h = h.replace("{a0}", vt(e.name || "")).replace("{b0}", vt(o)).replace("{c0}", u instanceof Array ? u : g.numAddCommas(u)), h = h.replace("{d}", "{d0}").replace("{d0}", f || ""), h = h.replace("{e}", "{e0}").replace("{e0}", a.get(D, "special2") || ""), N.innerHTML = h;
            else {
                H = NaN;
                if (e.type == t.CHART_TYPE_SCATTER)
                    N.innerHTML = (typeof e.name != "undefined" ? vt(e.name) + "<br/>" : "") + (o === "" ? "" : vt(o) + " : ") + u + (typeof f == "undefined" ? "" : " (" + f + ")");
                else if (e.type == t.CHART_TYPE_RADAR && f) {
                    v = f, m += vt(o === "" ? e.name || "" : o), m += m === "" ? "" : "<br />";
                    for (var y = 0; y < v.length; y++)
                        m += vt(v[y].text) + " : " + g.numAddCommas(u[y]) + "<br />";
                    N.innerHTML = m
                } else if (e.type == t.CHART_TYPE_CHORD)
                    if (typeof l == "undefined")
                        N.innerHTML = vt(o) + " (" + g.numAddCommas(u) + ")";
                    else {
                        var b = vt(o), w = vt(f);
                        N.innerHTML = (typeof e.name != "undefined" ? vt(e.name) + "<br/>" : "") + b + " -> " + w + " (" + g.numAddCommas(u) + ")" + "<br />" + w + " -> " + b + " (" + g.numAddCommas(l) + ")"
                    }
                else
                    N.innerHTML = (typeof e.name != "undefined" ? vt(e.name) + "<br/>" : "") + vt(o) + " : " + g.numAddCommas(u) + (typeof f == "undefined" ? "" : " (" + g.numAddCommas(f) + ")")
            }
            q.invisible || (q.invisible = !0, r.modShape(q.id, q), r.refresh());
            if (p === !1 || !i.tooltip.showContent)
                return;
            g.hasAppend || (N.style.left = j / 2 + "px", N.style.top = B / 2 + "px", s.firstChild.appendChild(N), g.hasAppend = !0), W(c.getX(P) + 20, c.getY(P) - 20, d)
        }
        function Z(e, t, n, s, o, u) {
            if (e.length > 0) {
                var a, f, l = i.tooltip.axisPointer, c = l.type, h = l.lineStyle.color, p = l.lineStyle.width, d = l.lineStyle.type, v = l.areaStyle.size, m = l.areaStyle.color;
                for (var y = 0, b = e.length; y < b; y++)
                    g.deepQuery([e[y], i], "tooltip.trigger") == "axis" && (a = e[y], f = g.query(a, "tooltip.axisPointer.type"), c = f || c, f == "line" ? (h = g.query(a, "tooltip.axisPointer.lineStyle.color") || h, p = g.query(a, "tooltip.axisPointer.lineStyle.width") || p, d = g.query(a, "tooltip.axisPointer.lineStyle.type") || d) : f == "shadow" && (v = g.query(a, "tooltip.axisPointer.areaStyle.size") || v, m = g.query(a, "tooltip.axisPointer.areaStyle.color") || m));
                c == "line" ? (q.style = {xStart: t, yStart: n, xEnd: s, yEnd: o, strokeColor: h, lineWidth: p, lineType: d}, q.invisible = !1, r.modShape(q.id, q)) : c == "shadow" && (typeof v == "undefined" || v == "auto" || isNaN(v) ? p = u : p = v, t == s ? Math.abs(w.getX() - t) < 2 ? (p /= 2, t = s += p / 2) : Math.abs(w.getXend() - t) < 2 && (p /= 2, t = s -= p / 2) : n == o && (Math.abs(w.getY() - n) < 2 ? (p /= 2, n = o += p / 2) : Math.abs(w.getYend() - n) < 2 && (p /= 2, n = o -= p / 2)), R.style = {xStart: t, yStart: n, xEnd: s, yEnd: o, strokeColor: m, lineWidth: p}, R.invisible = !1, r.modShape(R.id, R)), r.refresh()
            }
        }
        function et(e) {
            clearTimeout(A), clearTimeout(M);
            var r = e.target, s = c.getX(e.event), o = c.getY(e.event);
            if (!r)
                D = !1, P = e.event, P._target = P.target || P.toElement, P.zrenderX = s, P.zrenderY = o, L && w && h.isInside(m, w.getArea(), s, o) ? M = setTimeout(V, _) : L && x && x.isInside([s, o]) != -1 ? M = setTimeout(V, _) : (!P.connectTrigger && n.dispatch(t.EVENT.TOOLTIP_OUT_GRID, P), A = setTimeout(z, O));
            else {
                D = r, P = e.event, P._target = P.target || P.toElement, P.zrenderX = s, P.zrenderY = o;
                var u;
                if (L && x && (u = x.isInside([s, o])) != -1) {
                    var a = i.series;
                    for (var f = 0, l = a.length; f < l; f++)
                        if (a[f].polarIndex == u && g.deepQuery([a[f], i], "tooltip.trigger") == "axis") {
                            D = null;
                            break
                        }
                }
                M = setTimeout(V, _)
            }
        }
        function tt() {
            clearTimeout(A), clearTimeout(M), A = setTimeout(z, O)
        }
        function nt(e, t) {
            if (!N)
                return;
            e == H && (N.innerHTML = t), setTimeout(X, 20)
        }
        function rt() {
            b = o.component, w = b.grid, E = b.xAxis, S = b.yAxis, x = b.polar
        }
        function it(e, t) {
            if (!F || F && F.dataIndex != e.dataIndex) {
                F && F.tipShape.length > 0 && r.delShape(F.tipShape);
                for (var n = 0, i = t.length; n < i; n++)
                    t[n].id = r.newShapeId("tooltip"), t[n].zlevel = y, t[n].style = v.getHighlightStyle(t[n].style, t[n].highlightStyle), t[n].draggable = !1, t[n].hoverable = !1, t[n].clickable = !1, t[n].ondragend = null, t[n].ondragover = null, t[n].ondrop = null, r.addShape(t[n]);
                F = {dataIndex: e.dataIndex, tipShape: t}
            }
        }
        function st() {
            z()
        }
        function ot(e) {
            T = e.selected
        }
        function ut() {
            i.legend && i.legend.selected ? T = i.legend.selected : T = {}
        }
        function at(e) {
            return typeof T[e] != "undefined" ? T[e] : !0
        }
        function ft(e) {
            if (!e)
                return;
            var n, s = i.series;
            if (typeof e.seriesIndex != "undefined")
                n = e.seriesIndex;
            else {
                var u = e.seriesName;
                for (var l = 0, c = s.length; l < c; l++)
                    if (s[l].name == u) {
                        n = l;
                        break
                    }
            }
            var h = s[n];
            if (typeof h == "undefined")
                return;
            var p = o.chart[h.type], d = g.deepQuery([h, i], "tooltip.trigger") == "axis";
            if (!p)
                return;
            if (d) {
                var v = e.dataIndex;
                switch (p.type) {
                    case t.CHART_TYPE_LINE:
                    case t.CHART_TYPE_BAR:
                    case t.CHART_TYPE_K:
                        if (typeof E == "undefined" || typeof S == "undefined" || h.data.length <= v)
                            return;
                        var m = h.xAxisIndex || 0, y = h.yAxisIndex || 0;
                        E.getAxis(m).type == t.COMPONENT_TYPE_AXIS_CATEGORY ? P = {zrenderX: E.getAxis(m).getCoordByIndex(v), zrenderY: w.getY() + (w.getYend() - w.getY()) / 4} : P = {zrenderX: w.getX() + (w.getXend() - w.getX()) / 4, zrenderY: S.getAxis(y).getCoordByIndex(v)}, Q(m, y, v);
                        break;
                    case t.CHART_TYPE_RADAR:
                        if (typeof x == "undefined" || h.data[0].value.length <= v)
                            return;
                        var b = h.polarIndex || 0, T = x.getVector(b, v, "max");
                        P = {zrenderX: T[0], zrenderY: T[1]}, G(b, v)
                    }
            } else {
                var N = p.shapeList, C, k;
                switch (p.type) {
                    case t.CHART_TYPE_LINE:
                    case t.CHART_TYPE_BAR:
                    case t.CHART_TYPE_K:
                    case t.CHART_TYPE_SCATTER:
                        var v = e.dataIndex;
                        for (var l = 0, c = N.length; l < c; l++)
                            if (a.get(N[l], "seriesIndex") == n && a.get(N[l], "dataIndex") == v) {
                                D = N[l], C = N[l].style.x, k = p.type != t.CHART_TYPE_K ? N[l].style.y : N[l].style.y[0];
                                break
                            }
                        break;
                    case t.CHART_TYPE_RADAR:
                        var v = e.dataIndex;
                        for (var l = 0, c = N.length; l < c; l++)
                            if (N[l].shape == "polygon" && a.get(N[l], "seriesIndex") == n && a.get(N[l], "dataIndex") == v) {
                                D = N[l];
                                var T = x.getCenter(h.polarIndex || 0);
                                C = T[0], k = T[1];
                                break
                            }
                        break;
                    case t.CHART_TYPE_PIE:
                        var L = e.name;
                        for (var l = 0, c = N.length; l < c; l++)
                            if (N[l].shape == "sector" && a.get(N[l], "seriesIndex") == n && a.get(N[l], "name") == L) {
                                D = N[l];
                                var A = D.style, O = (A.startAngle + A.endAngle) / 2 * Math.PI / 180;
                                C = D.style.x + Math.cos(O) * A.r / 1.5, k = D.style.y - Math.sin(O) * A.r / 1.5;
                                break
                            }
                        break;
                    case t.CHART_TYPE_MAP:
                        var L = e.name, M = h.mapType;
                        for (var l = 0, c = N.length; l < c; l++)
                            if (N[l].shape == "text" && N[l]._mapType == M && N[l].style._text == L) {
                                D = N[l], C = D.style.x + D.position[0], k = D.style.y + D.position[1];
                                break
                            }
                        break;
                    case t.CHART_TYPE_CHORD:
                        var L = e.name;
                        for (var l = 0, c = N.length; l < c; l++)
                            if (N[l].shape == "sector" && a.get(N[l], "name") == L) {
                                D = N[l];
                                var A = D.style, O = (A.startAngle + A.endAngle) / 2 * Math.PI / 180;
                                C = D.style.x + Math.cos(O) * (A.r - 2), k = D.style.y - Math.sin(O) * (A.r - 2), r.trigger(f.EVENT.MOUSEMOVE, {zrenderX: C, zrenderY: k});
                                return
                            }
                        break;
                    case t.CHART_TYPE_FORCE:
                        var L = e.name;
                        for (var l = 0, c = N.length; l < c; l++)
                            if (N[l].shape == "circle" && a.get(N[l], "name") == L) {
                                D = N[l], C = D.position[0], k = D.position[1];
                                break
                            }
                }
                typeof C != "undefined" && typeof k != "undefined" && (P = {zrenderX: C, zrenderY: k}, r.addHoverShape(D), r.refreshHover(), Y())
            }
        }
        function lt() {
            z()
        }
        function ct(e, n) {
            i = e, s = n, i.tooltip = g.reformOption(i.tooltip), i.tooltip.textStyle = d.merge(i.tooltip.textStyle, t.textStyle, {overwrite: !1, recursive: !0}), i.tooltip.padding = g.reformCssArray(i.tooltip.padding), L = !1, i.tooltip.trigger == "axis" && (L = !0);
            var r = i.series;
            for (var o = 0, u = r.length; o < u; o++)
                if (g.query(r[o], "tooltip.trigger") == "axis") {
                    L = !0;
                    break
                }
            _ = i.tooltip.showDelay, O = i.tooltip.hideDelay, k = U(i.tooltip), N.style.position = "absolute", g.hasAppend = !1, ut(), I = i.tooltip.axisPointer.lineStyle.width
        }
        function ht(e) {
            e && (i = e, i.tooltip = g.reformOption(i.tooltip), i.tooltip.textStyle = d.merge(i.tooltip.textStyle, t.textStyle, {overwrite: !1, recursive: !0}), i.tooltip.padding = g.reformCssArray(i.tooltip.padding), ut(), I = i.tooltip.axisPointer.lineStyle.width)
        }
        function pt() {
            B = r.getHeight(), j = r.getWidth()
        }
        function dt() {
            clearTimeout(A), clearTimeout(M), r.un(f.EVENT.MOUSEMOVE, et), r.un(f.EVENT.GLOBALOUT, tt), g.hasAppend && s.firstChild.removeChild(N), N = null, g.shapeList = null, g = null
        }
        function vt(e) {
            return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        }
        var u = e("./base");
        u.call(this, t, r);
        var a = e("../util/ecData"), f = e("zrender/config"), l = e("zrender/shape"), c = e("zrender/tool/event"), h = e("zrender/tool/area"), p = e("zrender/tool/color"), d = e("zrender/tool/util"), v = e("zrender/shape/base"), m = l.get("rectangle"), g = this;
        g.type = t.COMPONENT_TYPE_TOOLTIP;
        var y = g.getZlevelBase(), b = {}, w, E, S, x, T = {}, N = document.createElement("div"), C = "position:absolute;display:block;border-style:solid;white-space:nowrap;", k, L, A, O, M, _, D, P, H, B = r.getHeight(), j = r.getWidth(), F = !1, I = 0, q = {shape: "line", id: r.newShapeId("tooltip"), zlevel: y, invisible: !0, hoverable: !1, style: {}}, R = {shape: "line", id: r.newShapeId("tooltip"), zlevel: 1, invisible: !0, hoverable: !1, style: {}};
        r.addShape(q), r.addShape(R), r.on(f.EVENT.MOUSEMOVE, et), r.on(f.EVENT.GLOBALOUT, tt), g.dispose = dt, g.init = ct, g.refresh = ht, g.resize = pt, g.setComponent = rt, g.ontooltipHover = it, g.ondragend = st, g.onlegendSelected = ot, g.showTip = ft, g.hideTip = lt, ct(i, s)
    }
    return e("../component").define("tooltip", t), t
}), define("echarts/component/toolbox", ["require", "./base", "zrender/config", "zrender/tool/util", "zrender/tool/event", "zrender/tool/env", "../component", "../component"], function(e) {
    function t(t, n, r, i, s) {
        function B() {
            y = [];
            var e = l.toolbox.feature, t = [];
            for (var n in e)
                if (e[n].show)
                    switch (n) {
                        case"mark":
                            t.push({key: n, name: "mark"}), t.push({key: n, name: "markUndo"}), t.push({key: n, name: "markClear"});
                            break;
                        case"magicType":
                            for (var i = 0, s = e[n].type.length; i < s; i++)
                                e[n].title[e[n].type[i] + "Chart"] = e[n].title[e[n].type[i]], t.push({key: n, name: e[n].type[i] + "Chart"});
                            break;
                        case"dataZoom":
                            t.push({key: n, name: "dataZoom"}), t.push({key: n, name: "dataZoomReset"});
                            break;
                        case"saveAsImage":
                            p && t.push({key: n, name: "saveAsImage"});
                            break;
                        default:
                            t.push({key: n, name: n})
                    }
            if (t.length > 0) {
                var o, n;
                for (var i = 0, s = t.length; i < s; i++)
                    o = t[i].name, n = t[i].key, y.push(o), E[o] = e[n].title[o] || e[n].title, e[n].icon && (S[o] = e[n].icon[o] || e[n].icon), e[n].color && (x[o] = e[n].color[o] || e[n].color);
                w = I(), F(), j();
                for (var i = 0, s = h.shapeList.length; i < s; i++)
                    h.shapeList[i].id = r.newShapeId(h.type), r.addShape(h.shapeList[i]);
                b.mark && (G(b.markUndo), G(b.markClear)), b.dataZoomReset && _.length === 0 && G(b.dataZoomReset)
            }
        }
        function j() {
            var s = l.toolbox, o = y.length, u = w.x, a = w.y, f = s.itemSize, c = s.itemGap, p, m = s.color instanceof Array ? s.color : [s.color], g = h.getFont(s.textStyle), N, C, k;
            s.orient == "horizontal" ? (N = w.y / r.getHeight() < .5 ? "bottom" : "top", C = w.x / r.getWidth() < .5 ? "left" : "right", k = w.y / r.getHeight() < .5 ? "top" : "bottom") : N = w.x / r.getWidth() < .5 ? "right" : "left", b = {};
            for (var L = 0; L < o; L++) {
                p = {shape: "icon", zlevel: d, style: {x: u, y: a, width: f, height: f, iconType: y[L], lineWidth: 1, strokeColor: x[y[L]] || m[L % m.length], brushType: "stroke"}, highlightStyle: {lineWidth: 2, text: s.showTitle ? E[y[L]] : undefined, textFont: g, textPosition: N, strokeColor: x[y[L]] || m[L % m.length]}, hoverable: !0, clickable: !0}, S[y[L]] && (p.style.image = S[y[L]].replace(new RegExp("^image:\\/\\/"), ""), p.style.opacity = .8, p.highlightStyle.opacity = 1, p.shape = "image"), s.orient == "horizontal" && (L === 0 && C == "left" && (p.highlightStyle.textPosition = "specific", p.highlightStyle.textAlign = C, p.highlightStyle.textBaseline = k, p.highlightStyle.textX = u, p.highlightStyle.textY = k == "top" ? a + f + 10 : a - 10), L == o - 1 && C == "right" && (p.highlightStyle.textPosition = "specific", p.highlightStyle.textAlign = C, p.highlightStyle.textBaseline = k, p.highlightStyle.textX = u + f, p.highlightStyle.textY = k == "top" ? a + f + 10 : a - 10));
                switch (y[L]) {
                    case"mark":
                        p.onclick = q;
                        break;
                    case"markUndo":
                        p.onclick = V;
                        break;
                    case"markClear":
                        p.onclick = $;
                        break;
                    case"dataZoom":
                        p.onclick = R;
                        break;
                    case"dataZoomReset":
                        p.onclick = J;
                        break;
                    case"dataView":
                        if (!D) {
                            var A = e("../component"), O = A.get("dataView");
                            D = new O(t, n, r, l, i)
                        }
                        p.onclick = Z;
                        break;
                    case"restore":
                        p.onclick = et;
                        break;
                    case"saveAsImage":
                        p.onclick = tt;
                        break;
                    default:
                        y[L].match("Chart") ? (p._name = y[L].replace("Chart", ""), v[p._name] && (p.style.strokeColor = T), p.onclick = nt) : p.onclick = it
                }
                h.shapeList.push(p), b[y[L]] = p, s.orient == "horizontal" ? u += f + c : a += f + c
            }
        }
        function F() {
            var e = l.toolbox, t = e.padding[0], n = e.padding[1], r = e.padding[2], i = e.padding[3];
            h.shapeList.push({shape: "rectangle", zlevel: d, hoverable: !1, style: {x: w.x - i, y: w.y - t, width: w.width + i + n, height: w.height + t + r, brushType: e.borderWidth === 0 ? "fill" : "both", color: e.backgroundColor, strokeColor: e.borderColor, lineWidth: e.borderWidth}})
        }
        function I() {
            var e = l.toolbox, t = y.length, n = e.itemGap, i = e.itemSize, s = 0, o = 0;
            e.orient == "horizontal" ? (s = (i + n) * t - n, o = i) : (o = (i + n) * t - n, s = i);
            var u, a = r.getWidth();
            switch (e.x) {
                case"center":
                    u = Math.floor((a - s) / 2);
                    break;
                case"left":
                    u = e.padding[3] + e.borderWidth;
                    break;
                case"right":
                    u = a - s - e.padding[1] - e.borderWidth;
                    break;
                default:
                    u = e.x - 0, u = isNaN(u) ? 0 : u
            }
            var f, c = r.getHeight();
            switch (e.y) {
                case"top":
                    f = e.padding[0] + e.borderWidth;
                    break;
                case"bottom":
                    f = c - o - e.padding[2] - e.borderWidth;
                    break;
                case"center":
                    f = Math.floor((c - o) / 2);
                    break;
                default:
                    f = e.y - 0, f = isNaN(f) ? 0 : f
            }
            return{x: u, y: f, width: s, height: o}
        }
        function q(e) {
            var t = e.target;
            return k || C ? (K(), r.refresh()) : (Q(), r.modShape(t.id, {style: {strokeColor: T}}), r.refresh(), C = !0, setTimeout(function() {
                r && r.on(u.EVENT.CLICK, X) && r.on(u.EVENT.MOUSEMOVE, U)
            }, 10)), !0
        }
        function R(e) {
            var t = e.target;
            return O || A ? (Q(), r.refresh(), i.style.cursor = "default") : (K(), r.modShape(t.id, {style: {strokeColor: T}}), r.refresh(), A = !0, setTimeout(function() {
                r && r.on(u.EVENT.MOUSEDOWN, z) && r.on(u.EVENT.MOUSEUP, W) && r.on(u.EVENT.MOUSEMOVE, U)
            }, 10), i.style.cursor = "crosshair"), !0
        }
        function U(e) {
            k && (L.style.xEnd = f.getX(e.event), L.style.yEnd = f.getY(e.event), r.addHoverShape(L)), O && (M.style.width = f.getX(e.event) - M.style.x, M.style.height = f.getY(e.event) - M.style.y, r.addHoverShape(M), i.style.cursor = "crosshair"), A && i.style.cursor != "pointer" && i.style.cursor != "move" && (i.style.cursor = "crosshair")
        }
        function z(e) {
            if (e.target)
                return;
            O = !0;
            var n = f.getX(e.event), i = f.getY(e.event), s = l.dataZoom || {};
            return M = {shape: "rectangle", id: r.newShapeId("zoom"), zlevel: d, style: {x: n, y: i, width: 1, height: 1, brushType: "both"}, highlightStyle: {lineWidth: 2, color: s.fillerColor || t.dataZoom.fillerColor, strokeColor: s.handleColor || t.dataZoom.handleColor, brushType: "both"}}, r.addHoverShape(M), !0
        }
        function W() {
            if (!M || Math.abs(M.style.width) < 10 || Math.abs(M.style.height) < 10)
                return O = !1, !0;
            if (O && c.dataZoom) {
                O = !1;
                var e = c.dataZoom.rectZoom(M.style);
                e && (_.push({start: e.start, end: e.end, start2: e.start2, end2: e.end2}), Y(b.dataZoomReset), r.refresh())
            }
            return!0
        }
        function X(e) {
            if (k)
                k = !1, h.shapeList.push(L), Y(b.markUndo), Y(b.markClear), r.addShape(L), r.refresh();
            else if (C) {
                k = !0;
                var t = f.getX(e.event), n = f.getY(e.event);
                L = {shape: "line", id: r.newShapeId("mark"), zlevel: d, style: {xStart: t, yStart: n, xEnd: t, yEnd: n, lineWidth: h.query(l, "toolbox.feature.mark.lineStyle.width"), strokeColor: h.query(l, "toolbox.feature.mark.lineStyle.color"), lineType: h.query(l, "toolbox.feature.mark.lineStyle.type")}}, r.addHoverShape(L)
            }
        }
        function V() {
            if (k)
                k = !1;
            else {
                var e = h.shapeList.length - 1;
                y.length == e - 1 && (G(b.markUndo), G(b.markClear));
                if (y.length < e) {
                    var t = h.shapeList[h.shapeList.length - 1];
                    r.delShape(t.id), r.refresh(), h.shapeList.pop()
                }
            }
            return!0
        }
        function $() {
            k && (k = !1);
            var e = h.shapeList.length - y.length - 1, t = !1;
            while (e--)
                r.delShape(h.shapeList.pop().id), t = !0;
            return t && (G(b.markUndo), G(b.markClear), r.refresh()), !0
        }
        function J() {
            return O && (O = !1), _.pop(), _.length > 0 ? c.dataZoom.absoluteZoom(_[_.length - 1]) : (c.dataZoom.rectZoom(), G(b.dataZoomReset), r.refresh()), !0
        }
        function K() {
            k = !1, C && (C = !1, b.mark && r.modShape(b.mark.id, {style: {strokeColor: b.mark.highlightStyle.strokeColor}}), r.un(u.EVENT.CLICK, X), r.un(u.EVENT.MOUSEMOVE, U))
        }
        function Q() {
            O = !1, A && (A = !1, b.dataZoom && r.modShape(b.dataZoom.id, {style: {strokeColor: b.dataZoom.highlightStyle.strokeColor}}), r.un(u.EVENT.MOUSEDOWN, z), r.un(u.EVENT.MOUSEUP, W), r.un(u.EVENT.MOUSEMOVE, U))
        }
        function G(e) {
            e.shape != "image" ? r.modShape(e.id, {hoverable: !1, clickable: !1, style: {strokeColor: N}}) : r.modShape(e.id, {hoverable: !1, clickable: !1, style: {opacity: .3}})
        }
        function Y(e) {
            e.shape != "image" ? r.modShape(e.id, {hoverable: !0, clickable: !0, style: {strokeColor: e.highlightStyle.strokeColor}}) : r.modShape(e.id, {hoverable: !0, clickable: !0, style: {opacity: .8}})
        }
        function Z() {
            return D.show(l), !0
        }
        function et() {
            return K(), Q(), n.dispatch(t.EVENT.RESTORE), !0
        }
        function tt() {
            var e = l.toolbox.feature.saveAsImage, t = e.type || "png";
            t != "png" && t != "jpeg" && (t = "png");
            var n;
            s.isConnected() ? n = s.getConnectedDataURL(t) : n = r.toDataURL("image/" + t, l.backgroundColor && l.backgroundColor.replace(" ", "") == "rgba(0,0,0,0)" ? "#fff" : l.backgroundColor);
            var i = document.createElement("div");
            i.id = "__echarts_download_wrap__", i.style.cssText = "position:fixed;z-index:99999;display:block;top:0;left:0;background-color:rgba(33,33,33,0.5);text-align:center;width:100%;height:100%;line-height:" + document.documentElement.clientHeight + "px;";
            var o = document.createElement("a");
            o.href = n, o.setAttribute("download", (e.name ? e.name : l.title && (l.title.text || l.title.subtext) ? l.title.text || l.title.subtext : "ECharts") + "." + t), o.innerHTML = '<img style="vertical-align:middle" src="' + n + '" title="' + (!window.attachEvent || navigator.userAgent.indexOf("Opera") !== -1 ? e.lang ? e.lang[0] : "点击保存" : "右键->图片另存为") + '"/>', i.appendChild(o), document.body.appendChild(i), o = null, i = null, setTimeout(function() {
                var e = document.getElementById("__echarts_download_wrap__");
                e && (e.onclick = function() {
                    var e = document.getElementById("__echarts_download_wrap__");
                    e.onclick = null, e.innerHTML = "", document.body.removeChild(e), e = null
                }, e = null)
            }, 500);
            return
        }
        function nt(e) {
            K();
            var r = e.target._name;
            return v[r] ? v[r] = !1 : (v[r] = !0, r == t.CHART_TYPE_LINE ? v[t.CHART_TYPE_BAR] = !1 : r == t.CHART_TYPE_BAR && (v[t.CHART_TYPE_LINE] = !1), r == P ? v[H] = !1 : r == H && (v[P] = !1)), n.dispatch(t.EVENT.MAGIC_TYPE_CHANGED, e.event, {magicType: v}), !0
        }
        function rt(e) {
            K(), v = e, !g && n.dispatch(t.EVENT.MAGIC_TYPE_CHANGED, null, {magicType: v})
        }
        function it(e) {
            var t = e.target.style.iconType, n = l.toolbox.feature[t].onclick;
            typeof n == "function" && n(l)
        }
        function st(e) {
            if (h.query(e, "toolbox.show") && h.query(e, "toolbox.feature.magicType.show")) {
                var t = e.toolbox.feature.magicType.type, n = t.length;
                m = {};
                while (n--)
                    m[t[n]] = !0;
                n = e.series.length;
                var r, i;
                while (n--) {
                    r = e.series[n].type, m[r] && (i = e.xAxis instanceof Array ? e.xAxis[e.series[n].xAxisIndex || 0] : e.xAxis, i && (i.type || "category") == "category" && (i.__boundaryGap = typeof i.boundaryGap != "undefined" ? i.boundaryGap : !0), i = e.yAxis instanceof Array ? e.yAxis[e.series[n].yAxisIndex || 0] : e.yAxis, i && i.type == "category" && (i.__boundaryGap = typeof i.boundaryGap != "undefined" ? i.boundaryGap : !0), e.series[n].__type = r, e.series[n].__itemStyle = e.series[n].itemStyle ? a.clone(e.series[n].itemStyle) : {});
                    if (m[P] || m[H])
                        e.series[n].__stack = e.series[n].stack
                }
            }
            v = {};
            var s = e.dataZoom;
            if (s && s.show) {
                var o = typeof s.start != "undefined" && s.start >= 0 && s.start <= 100 ? s.start : 0, u = typeof s.end != "undefined" && s.end >= 0 && s.end <= 100 ? s.end : 100;
                o > u && (o += u, u = o - u, o -= u), _ = [{start: o, end: u, start2: 0, end2: 100}]
            } else
                _ = []
        }
        function ot() {
            var e;
            if (v[t.CHART_TYPE_LINE] || v[t.CHART_TYPE_BAR]) {
                var n = v[t.CHART_TYPE_LINE] ? !1 : !0;
                for (var r = 0, i = l.series.length; r < i; r++)
                    m[l.series[r].type] && (l.series[r].type = v[t.CHART_TYPE_LINE] ? t.CHART_TYPE_LINE : t.CHART_TYPE_BAR, l.series[r].itemStyle = a.clone(l.series[r].__itemStyle), e = l.xAxis instanceof Array ? l.xAxis[l.series[r].xAxisIndex || 0] : l.xAxis, e && (e.type || "category") == "category" && (e.boundaryGap = n ? !0 : e.__boundaryGap), e = l.yAxis instanceof Array ? l.yAxis[l.series[r].yAxisIndex || 0] : l.yAxis, e && e.type == "category" && (e.boundaryGap = n ? !0 : e.__boundaryGap))
            } else
                for (var r = 0, i = l.series.length; r < i; r++)
                    m[l.series[r].type] && (l.series[r].type = l.series[r].__type, l.series[r].itemStyle = l.series[r].__itemStyle, e = l.xAxis instanceof Array ? l.xAxis[l.series[r].xAxisIndex || 0] : l.xAxis, e && (e.type || "category") == "category" && (e.boundaryGap = e.__boundaryGap), e = l.yAxis instanceof Array ? l.yAxis[l.series[r].yAxisIndex || 0] : l.yAxis, e && e.type == "category" && (e.boundaryGap = e.__boundaryGap));
            if (v[P] || v[H])
                for (var r = 0, i = l.series.length; r < i; r++)
                    v[P] ? l.series[r].stack = "_ECHARTS_STACK_KENER_2014_" : v[H] && (l.series[r].stack = null);
            else
                for (var r = 0, i = l.series.length; r < i; r++)
                    l.series[r].stack = l.series[r].__stack;
            return l
        }
        function ut(e) {
            g = e
        }
        function at(e, t) {
            K(), Q(), e.toolbox = h.reformOption(e.toolbox), e.toolbox.padding = h.reformCssArray(e.toolbox.padding), l = e, c = t, h.shapeList = [], e.toolbox.show && B(), lt()
        }
        function ft() {
            K(), h.clear(), l && l.toolbox && l.toolbox.show && B(), D && D.resize()
        }
        function lt() {
            D && D.hide()
        }
        function ct() {
            D && (D.dispose(), D = null), h.clear(), h.shapeList = null, h = null
        }
        function ht(e) {
            e && (e.toolbox = h.reformOption(e.toolbox), e.toolbox.padding = h.reformCssArray(e.toolbox.padding), l = e)
        }
        var o = e("./base");
        o.call(this, t, r);
        var u = e("zrender/config"), a = e("zrender/tool/util"), f = e("zrender/tool/event"), l, c, h = this;
        h.type = t.COMPONENT_TYPE_TOOLBOX;
        var p = e("zrender/tool/env").canvasSupported, d = h.getZlevelBase(), v = {}, m, g = !1, y, b = {}, w, E = {}, S = {}, x = {}, T = "red", N = "#ccc", C, k, L, A, O, M, _, D, P = "stack", H = "tiled";
        h.dispose = ct, h.render = at, h.resize = ft, h.hideDataView = lt, h.getMagicOption = ot, h.silence = ut, h.setMagicType = rt, h.reset = st, h.refresh = ht
    }
    return e("../component").define("toolbox", t), t
}), define("echarts/component/dataView", ["require", "./base", "zrender/tool/env", "../component"], function(e) {
    function t(t, n, r, i, s) {
        function w() {
            m = "width:" + b + "px;" + "height:" + 0 + "px;" + "background-color:#f0ffff;", l.style.cssText = v + m, s.onselectstart = function() {
                return!1
            }
        }
        function E(e) {
            d = !0;
            var t = u.query(i, "toolbox.feature.dataView.lang") || a;
            i = e, l.innerHTML = '<p style="padding:8px 0;margin:0 0 10px 0;border-bottom:1px solid #eee">' + (t[0] || a[0]) + "</p>", c.style.cssText = "display:block;margin:0 0 8px 0;padding:4px 6px;overflow:auto;width:" + (b - 15) + "px;" + "height:" + (y - 100) + "px;";
            var n = u.query(i, "toolbox.feature.dataView.optionToContent");
            typeof n != "function" ? c.value = S() : c.value = n(i), l.appendChild(c), p.style.cssText = "float:right;padding:1px 6px;", p.innerHTML = t[1] || a[1], p.onclick = w, l.appendChild(p), u.query(i, "toolbox.feature.dataView.readOnly") === !1 ? (h.style.cssText = "float:right;margin-right:10px;padding:1px 6px;", h.innerHTML = t[2] || a[2], h.onclick = x, l.appendChild(h), c.readOnly = !1, c.style.cursor = "default") : (c.readOnly = !0, c.style.cursor = "text"), m = "width:" + b + "px;" + "height:" + y + "px;" + "background-color:#fff;", l.style.cssText = v + m, s.onselectstart = function() {
                return!0
            }
        }
        function S() {
            var e, n, r, s, o, u, a = [], f = "";
            if (i.xAxis) {
                i.xAxis instanceof Array ? a = i.xAxis : a = [i.xAxis];
                for (e = 0, s = a.length; e < s; e++)
                    if ((a[e].type || "category") == "category") {
                        u = [];
                        for (n = 0, r = a[e].data.length; n < r; n++)
                            o = a[e].data[n], u.push(typeof o.value != "undefined" ? o.value : o);
                        f += u.join(", ") + "\n\n"
                    }
            }
            if (i.yAxis) {
                i.yAxis instanceof Array ? a = i.yAxis : a = [i.yAxis];
                for (e = 0, s = a.length; e < s; e++)
                    if (a[e].type == "category") {
                        u = [];
                        for (n = 0, r = a[e].data.length; n < r; n++)
                            o = a[e].data[n], u.push(typeof o.value != "undefined" ? o.value : o);
                        f += u.join(", ") + "\n\n"
                    }
            }
            var l = i.series, c;
            for (e = 0, s = l.length; e < s; e++) {
                u = [];
                for (n = 0, r = l[e].data.length; n < r; n++)
                    o = l[e].data[n], l[e].type == t.CHART_TYPE_PIE || l[e].type == t.CHART_TYPE_MAP ? c = (o.name || "-") + ":" : c = "", l[e].type == t.CHART_TYPE_SCATTER && (o = typeof o.value != "undefined" ? o.value : o, o = o.join(", ")), u.push(c + (typeof o.value != "undefined" ? o.value : o));
                f += (l[e].name || "-") + " : \n", f += u.join(l[e].type == t.CHART_TYPE_SCATTER ? "\n" : ", "), f += "\n\n"
            }
            return f
        }
        function x() {
            var e = c.value, r = u.query(i, "toolbox.feature.dataView.contentToOption");
            if (typeof r != "function") {
                e = e.split("\n");
                var s = [];
                for (var o = 0, a = e.length; o < a; o++)
                    e[o] = N(e[o]), e[o] !== "" && s.push(e[o]);
                T(s)
            } else
                r(e, i);
            w(), setTimeout(function() {
                n && n.dispatch(t.EVENT.DATA_VIEW_CHANGED, null, {option: i})
            }, f ? 800 : 100)
        }
        function T(e) {
            var n, r, s, o, u, a = [], f = 0, l, c;
            if (i.xAxis) {
                i.xAxis instanceof Array ? a = i.xAxis : a = [i.xAxis];
                for (n = 0, o = a.length; n < o; n++)
                    if ((a[n].type || "category") == "category") {
                        l = e[f].split(",");
                        for (r = 0, s = a[n].data.length; r < s; r++)
                            c = N(l[r] || ""), u = a[n].data[r], typeof a[n].data[r].value != "undefined" ? a[n].data[r].value = c : a[n].data[r] = c;
                        f++
                    }
            }
            if (i.yAxis) {
                i.yAxis instanceof Array ? a = i.yAxis : a = [i.yAxis];
                for (n = 0, o = a.length; n < o; n++)
                    if (a[n].type == "category") {
                        l = e[f].split(",");
                        for (r = 0, s = a[n].data.length; r < s; r++)
                            c = N(l[r] || ""), u = a[n].data[r], typeof a[n].data[r].value != "undefined" ? a[n].data[r].value = c : a[n].data[r] = c;
                        f++
                    }
            }
            var h = i.series;
            for (n = 0, o = h.length; n < o; n++) {
                f++;
                if (h[n].type == t.CHART_TYPE_SCATTER)
                    for (var r = 0, s = h[n].data.length; r < s; r++)
                        l = e[f], c = l.replace(" ", "").split(","), typeof h[n].data[r].value != "undefined" ? h[n].data[r].value = c : h[n].data[r] = c, f++;
                else {
                    l = e[f].split(",");
                    for (var r = 0, s = h[n].data.length; r < s; r++)
                        c = (l[r] || "").replace(/.*:/, ""), c = N(c), c = c != "-" && c !== "" ? c - 0 : "-", typeof h[n].data[r].value != "undefined" ? h[n].data[r].value = c : h[n].data[r] = c;
                    f++
                }
            }
        }
        function N(e) {
            var t = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
            return e.replace(t, "")
        }
        function C(e) {
            e = e || window.event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
        }
        function k() {
            l.className = g, w(), s.firstChild.appendChild(l), window.addEventListener ? (l.addEventListener("click", C), l.addEventListener("mousewheel", C), l.addEventListener("mousemove", C), l.addEventListener("mousedown", C), l.addEventListener("mouseup", C), l.addEventListener("touchstart", C), l.addEventListener("touchmove", C), l.addEventListener("touchend", C)) : (l.attachEvent("onclick", C), l.attachEvent("onmousewheel", C), l.attachEvent("onmousemove", C), l.attachEvent("onmousedown", C), l.attachEvent("onmouseup", C))
        }
        function L() {
            y = r.getHeight(), b = r.getWidth(), l.offsetHeight > 10 && (m = "width:" + b + "px;" + "height:" + y + "px;" + "background-color:#fff;", l.style.cssText = v + m, c.style.cssText = "display:block;margin:0 0 8px 0;padding:4px 6px;overflow:auto;width:" + (b - 15) + "px;" + "height:" + (y - 100) + "px;")
        }
        function A() {
            window.removeEventListener ? (l.removeEventListener("click", C), l.removeEventListener("mousewheel", C), l.removeEventListener("mousemove", C), l.removeEventListener("mousedown", C), l.removeEventListener("mouseup", C), l.removeEventListener("touchstart", C), l.removeEventListener("touchmove", C), l.removeEventListener("touchend", C)) : (l.detachEvent("onclick", C), l.detachEvent("onmousewheel", C), l.detachEvent("onmousemove", C), l.detachEvent("onmousedown", C), l.detachEvent("onmouseup", C)), h.onclick = null, p.onclick = null, d && (l.removeChild(c), l.removeChild(h), l.removeChild(p)), c = null, h = null, p = null, s.firstChild.removeChild(l), l = null, u = null
        }
        var o = e("./base");
        o.call(this, t, r);
        var u = this;
        u.type = t.COMPONENT_TYPE_DATAVIEW;
        var a = ["Data View", "close", "refresh"], f = e("zrender/tool/env").canvasSupported, l = document.createElement("div"), c = document.createElement("textArea"), h = document.createElement("button"), p = document.createElement("button"), d = !1, v = "position:absolute;display:block;overflow:hidden;transition:height 0.8s,background-color 1s;-moz-transition:height 0.8s,background-color 1s;-webkit-transition:height 0.8s,background-color 1s;-o-transition:height 0.8s,background-color 1s;z-index:1;left:0;top:0;", m, g = "echarts-dataview", y = r.getHeight(), b = r.getWidth();
        u.dispose = A, u.resize = L, u.show = E, u.hide = w, k()
    }
    return e("../component").define("dataView", t), t
}), define("echarts/util/coordinates", ["require", "zrender/tool/math"], function(e) {
    function n(e, n) {
        return[e * t.sin(n), e * t.cos(n)]
    }
    function r(e, t) {
        return[Math.sqrt(e * e + t * t), Math.atan(t / e)]
    }
    var t = e("zrender/tool/math");
    return{polar2cartesian: n, cartesian2polar: r}
}), define("echarts/component/polar", ["require", "./base", "../util/coordinates", "zrender/tool/util", "../component"], function(e) {
    function t(t, n, r, i, s) {
        function p(e, t) {
            s = t, B(e)
        }
        function d() {
            for (var e = 0; e < l.length; e++)
                f.reformOption(l[e]), h = [l[e], i], v(e), m(e), y(e), L(e), g(e);
            for (var e = 0; e < f.shapeList.length; e++)
                f.shapeList[e].id = r.newShapeId(f.type), r.addShape(f.shapeList[e])
        }
        function v(e) {
            var t = l[e], n = f.deepQuery(h, "indicator"), i = n.length, s = t.startAngle, o = 2 * Math.PI / i, a = f.parsePercent(t.radius, Math.min(r.getWidth(), r.getHeight()) / 2), c = t.__ecIndicator = [], p;
            for (var d = 0; d < i; d++)
                p = u.polar2cartesian(a, s * Math.PI / 180 + o * d), c.push({vector: [p[1], -p[0]]})
        }
        function m(e) {
            var t = l[e], n = t.__ecIndicator, r = t.splitArea, i = t.splitLine, s = N(e), o = t.splitNumber, u = i.lineStyle.color, a = i.lineStyle.width, c = i.show, p = f.deepQuery(h, "axisLine");
            w(n, o, s, r, u, a, c), C(n, s, p)
        }
        function g(e) {
            var t = l[e], n = f.deepQuery(h, "indicator"), r = t.__ecIndicator, s, o, u, c, p = f.deepQuery(h, "splitNumber"), d = N(e), o, v, m, g, y, b = f.deepQuery(h, "precision");
            for (var w = 0; w < n.length; w++) {
                s = f.deepQuery([n[w], t, i], "axisLabel");
                if (s.show) {
                    u = {}, u.textFont = f.getFont(), u = a.merge(u, s), u.lineWidth = u.width, o = r[w].vector, v = r[w].value, g = w / n.length * 2 * Math.PI, y = s.offset || 10;
                    for (var E = 1; E <= p; E++)
                        c = a.merge({}, u), m = E * (v.max - v.min) / p + v.min, b && (m = m.toFixed(b)), c.text = f.numAddCommas(m), c.x = E * o[0] / p + Math.cos(g) * y + d[0], c.y = E * o[1] / p + Math.sin(g) * y + d[1], f.shapeList.push({shape: "text", style: c, draggable: !1, hoverable: !1})
                }
            }
        }
        function y(e) {
            var t = l[e], n = t.__ecIndicator, r, s = f.deepQuery(h, "indicator"), o = N(e), u, a, c, p, d = 0, v = 0, m, g;
            for (var y = 0; y < s.length; y++) {
                c = f.deepQuery([s[y], t, i], "name");
                if (!c.show)
                    continue;
                g = f.deepQuery([c, t, i], "textStyle"), u = {}, u.textFont = f.getFont(g), u.color = g.color, typeof c.formatter == "function" ? u.text = c.formatter(s[y].text, y) : typeof c.formatter == "string" ? u.text = c.formatter.replace("{value}", s[y].text) : u.text = s[y].text, r = n[y].vector, Math.round(r[0]) > 0 ? a = "left" : Math.round(r[0]) < 0 ? a = "right" : a = "center", c.margin ? (m = c.margin, d = r[0] > 0 ? m : -m, v = r[1] > 0 ? m : -m, d = r[0] === 0 ? 0 : d, v = r[1] === 0 ? 0 : v, r = T(r, o, 1)) : r = T(r, o, 1.2), u.textAlign = a, u.x = r[0] + d, u.y = r[1] + v, c.rotate && (p = [c.rotate / 180 * Math.PI, r[0], r[1]]), f.shapeList.push({shape: "text", style: u, draggable: !1, hoverable: !1, rotation: p})
            }
        }
        function b(e) {
            var e = e || 0, t = l[e], n = N(e), r = t.__ecIndicator, i = r.length, s = [], o, u;
            for (var a = 0; a < i; a++)
                o = r[a].vector, s.push(T(o, n, 1.2));
            return u = S(s, "fill", "rgba(0,0,0,0)", "", 1), u
        }
        function w(e, t, n, r, i, s, o) {
            var u, a, l, c;
            for (var h = 0; h < t; h++)
                a = (t - h) / t, c = E(e, a, n), o && (u = S(c, "stroke", "", i, s), f.shapeList.push(u)), r.show && (l = (t - h - 1) / t, x(e, r, a, l, n, h))
        }
        function E(e, t, n) {
            var r = [], i = e.length, s;
            for (var o = 0; o < i; o++)
                s = e[o].vector, r.push(T(s, n, t));
            return r
        }
        function S(e, t, n, r, i, s, o) {
            return{shape: "polygon", style: {pointList: e, brushType: t, color: n, strokeColor: r, lineWidth: i}, hoverable: s || !1, draggable: o || !1}
        }
        function x(e, t, n, r, i, s) {
            var o = e.length, u, a = t.areaStyle.color, l, c, h, p = [], o = e.length, d;
            typeof a == "string" && (a = [a]), l = a.length, u = a[s % l];
            for (var v = 0; v < o; v++)
                p = [], c = e[v].vector, h = e[(v + 1) % o].vector, p.push(T(c, i, n)), p.push(T(c, i, r)), p.push(T(h, i, r)), p.push(T(h, i, n)), d = S(p, "fill", u, "", 1), f.shapeList.push(d)
        }
        function T(e, t, n) {
            return[e[0] * n + t[0], e[1] * n + t[1]]
        }
        function N(e) {
            var e = e || 0;
            return f.parseCenter(r, l[e].center)
        }
        function C(e, t, n) {
            var r = e.length, i, s, o = n.lineStyle, u = o.color, a = o.width, l = o.type;
            for (var c = 0; c < r; c++)
                s = e[c].vector, i = k(t[0], t[1], s[0] + t[0], s[1] + t[1], u, a, l), f.shapeList.push(i)
        }
        function k(e, t, n, r, i, s, o) {
            return{shape: "line", style: {xStart: e, yStart: t, xEnd: n, yEnd: r, strokeColor: i, lineWidth: s, lineType: o}, hoverable: !1}
        }
        function L(e) {
            var t = l[e], n = f.deepQuery(h, "indicator"), r = n.length, i = t.__ecIndicator, s, o, u, a = A(e), c = t.splitNumber, p = f.deepQuery(h, "boundaryGap"), d = f.deepQuery(h, "precision"), v = f.deepQuery(h, "power"), m = f.deepQuery(h, "scale");
            for (var g = 0; g < r; g++)
                typeof n[g].max == "number" ? (o = n[g].max, u = n[g].min || 0, s = {max: o, min: u}) : s = O(a, g, c, p, d, v, m), i[g].value = s
        }
        function A(e) {
            var n = [], r, o, u = s.legend;
            for (var a = 0; a < c.length; a++) {
                r = c[a];
                if (r.type != t.CHART_TYPE_RADAR)
                    continue;
                o = r.data || [];
                for (var l = 0; l < o.length; l++)
                    polarIndex = f.deepQuery([o[l], r, i], "polarIndex") || 0, polarIndex == e && (!u || u.isSelected(o[l].name)) && n.push(o[l])
            }
            return n
        }
        function O(e, t, n, r, i, s, o) {
            function m(e) {
                (e > u || u === undefined) && (u = e), (e < a || a === undefined) && (a = e)
            }
            var u, a, f, l, c, h = 0, p, d, v;
            if (!e || e.length === 0)
                return;
            e.length == 1 && (a = 0);
            if (e.length != 1)
                for (var g = 0; g < e.length; g++)
                    f = e[g].value[t], m(f);
            else {
                v = e[0];
                for (var g = 0; g < v.value.length; g++)
                    m(v.value[g])
            }
            if (e.length != 1)
                if (o) {
                    l = M(u, a, n, i, s);
                    if (l >= 1)
                        a = Math.floor(a / l) * l - l;
                    else {
                        if (l === 0)
                            return u > 0 ? (d = 0, p = 2 * u) : u === 0 ? (d = 0, p = 100) : (p = 0, d = 2 * a), {max: p, min: d};
                        c = (l + "").split(".")[1], h = c.length, a = Math.floor(a * Math.pow(10, h)) / Math.pow(10, h) - l
                    }
                    Math.abs(a) <= l && (a = 0), u = a + Math.floor(l * Math.pow(10, h) * (n + 1)) / Math.pow(10, h)
                } else
                    a = a > 0 ? 0 : a;
            return r && (u = u > 0 ? u * 1.2 : u * .8, a = a > 0 ? a * .8 : a * 1.2), {max: u, min: a}
        }
        function M(e, t, n, r, i) {
            var s = (e - t) / n, o, u;
            if (s > 1)
                return i ? (s = Math.ceil(s), s % i > 0 ? (Math.ceil(s / i) + 1) * i : s) : (o = (s + "").split(".")[0], u = o.length, o.charAt(0) >= 5 ? Math.pow(10, u) : (o.charAt(0) - 0 + 1) * Math.pow(10, u - 1));
            if (s == 1)
                return 1;
            if (s === 0)
                return 0;
            if (!r) {
                o = (s + "").split(".")[1], u = 0;
                while (o[u] == "0")
                    u++;
                return o[u] >= 5 ? "0." + o.substring(0, u + 1) - 0 + 1 / Math.pow(10, u) : "0." + o.substring(0, u + 1) - 0 + 1 / Math.pow(10, u + 1)
            }
            return Math.ceil(s * Math.pow(10, r)) / Math.pow(10, r)
        }
        function _(e, t, n) {
            e = e || 0, t = t || 0;
            var r = l[e].__ecIndicator;
            if (t >= r.length)
                return;
            var i = l[e].__ecIndicator[t], s = N(e), o = i.vector, u = i.value.max, a = i.value.min, f;
            if (typeof n == "undefined")
                return s;
            switch (n) {
                case"min":
                    n = a;
                    break;
                case"max":
                    n = u;
                    break;
                case"center":
                    n = (u + a) / 2
            }
            return u != a ? f = (n - a) / (u - a) : f = .5, T(o, s, f)
        }
        function D(e) {
            var t = P(e);
            return t ? t.polarIndex : -1
        }
        function P(e) {
            var t, n, i, s, o, a, c, h, p, d = Math.min(r.getWidth(), r.getHeight()) / 2;
            for (var v = 0; v < l.length; v++) {
                t = l[v], n = N(v);
                if (e[0] == n[0] && e[1] == n[1])
                    return{polarIndex: v, valueIndex: 0};
                i = f.parsePercent(t.radius, d), o = t.startAngle, a = t.indicator, c = a.length, h = 2 * Math.PI / c, s = u.cartesian2polar(e[0] - n[0], n[1] - e[1]), e[0] - n[0] < 0 && (s[1] += Math.PI), s[1] < 0 && (s[1] += 2 * Math.PI), p = s[1] - o / 180 * Math.PI + Math.PI * 2;
                if (Math.abs(Math.cos(p % (h / 2))) * i > s[0])
                    return{polarIndex: v, valueIndex: Math.floor((p + h / 2) / h) % c}
            }
        }
        function H(e) {
            var e = e || 0;
            return l[e].indicator
        }
        function B(e) {
            e && (i = e, l = i.polar, c = i.series), f.clear(), d()
        }
        var o = e("./base");
        o.call(this, t, r);
        var u = e("../util/coordinates"), a = e("zrender/tool/util"), f = this;
        f.type = t.COMPONENT_TYPE_POLAR;
        var l, c, h;
        f.refresh = B, f.getVector = _, f.getDropBox = b, f.getCenter = N, f.getIndicator = H, f.isInside = D, f.getNearestIndex = P, p(i, s)
    }
    return e("../component").define("polar", t), t
}), define("echarts/theme/default", [], function() {
    var e = {};
    return e
}), define("echarts/echarts", ["require", "zrender/tool/env", "./config", "zrender/tool/util", "zrender", "zrender/tool/event", "zrender/config", "./util/shape/icon", "./util/shape/markLine", "./chart", "./chart/island", "./component", "./component/title", "./component/axis", "./component/categoryAxis", "./component/valueAxis", "./component/grid", "./component/dataZoom", "./component/legend", "./component/dataRange", "./component/tooltip", "./component/toolbox", "./component/dataView", "./component/polar", "./util/ecQuery", "./util/ecData", "./chart", "./component", "zrender/tool/util", "./util/ecQuery", "zrender/tool/util", "zrender/tool/color", "zrender/tool/util", "./util/ecQuery", "zrender/tool/util", "./util/ecQuery", "zrender/tool/util", "zrender", "zrender/tool/util", "zrender/tool/util", "./theme/default", "./theme/default"], function(e) {
    function u(t) {
        function E() {
            var r = e("zrender");
            (r.version || "1.0.3").replace(".", "") - 0 < n.dependencies.zrender.replace(".", "") - 0 && console.error("ZRender " + (r.version || "1.0.3-") + " is too old for ECharts " + n.version + ". Current version need ZRender " + n.dependencies.zrender + "+"), f = r.init(t), l = {}, p = [], d = {};
            var s = e("zrender/tool/event");
            s.Dispatcher.call(d);
            for (var o in i.EVENT)
                o != "CLICK" && o != "HOVER" && o != "MAP_ROAM" && d.bind(i.EVENT[o], x);
            var c = e("zrender/config");
            f.on(c.EVENT.CLICK, T), f.on(c.EVENT.MOUSEOVER, N), f.on(c.EVENT.DRAGSTART, C), f.on(c.EVENT.DRAGEND, M), f.on(c.EVENT.DRAGENTER, k), f.on(c.EVENT.DRAGOVER, L), f.on(c.EVENT.DRAGLEAVE, A), f.on(c.EVENT.DROP, O), e("./util/shape/icon"), e("./util/shape/markLine");
            var h = e("./chart");
            e("./chart/island");
            var v = h.get("island");
            y = new v(u, d, f);
            var m = e("./component");
            e("./component/title"), e("./component/axis"), e("./component/categoryAxis"), e("./component/valueAxis"), e("./component/grid"), e("./component/dataZoom"), e("./component/legend"), e("./component/dataRange"), e("./component/tooltip"), e("./component/toolbox"), e("./component/dataView"), e("./component/polar");
            var g = m.get("toolbox");
            b = new g(u, d, f, t, a), V()
        }
        function x(e) {
            e.__echartsId = e.__echartsId || a.id;
            var t = !0;
            e.__echartsId != a.id && (t = !1), S || (S = e.type);
            switch (e.type) {
                case i.EVENT.LEGEND_SELECTED:
                    _(e);
                    break;
                case i.EVENT.DATA_ZOOM:
                    if (!t) {
                        var n = a.component.dataZoom;
                        n && (n.silence(!0), n.absoluteZoom(e.zoom), n.silence(!1))
                    }
                    D(e);
                    break;
                case i.EVENT.DATA_RANGE:
                    t && P(e);
                    break;
                case i.EVENT.MAGIC_TYPE_CHANGED:
                    if (!t) {
                        var r = a.component.toolbox;
                        r && (r.silence(!0), r.setMagicType(e.magicType), r.silence(!1))
                    }
                    H(e);
                    break;
                case i.EVENT.DATA_VIEW_CHANGED:
                    t && B(e);
                    break;
                case i.EVENT.TOOLTIP_HOVER:
                    t && j(e);
                    break;
                case i.EVENT.RESTORE:
                    F();
                    break;
                case i.EVENT.REFRESH:
                    t && I(e);
                    break;
                case i.EVENT.TOOLTIP_IN_GRID:
                case i.EVENT.TOOLTIP_OUT_GRID:
                    if (!t) {
                        var s = a.component.grid;
                        s && f.trigger("mousemove", {connectTrigger: !0, zrenderX: s.getX() + e.x * s.getWidth(), zrenderY: s.getY() + e.y * s.getHeight()})
                    } else if (v) {
                        var s = a.component.grid;
                        s && (e.x = (e.event.zrenderX - s.getX()) / s.getWidth(), e.y = (e.event.zrenderY - s.getY()) / s.getHeight())
                    }
            }
            if (v && t && S == e.type) {
                for (var o in v)
                    v[o].connectedEventHandler(e);
                S = null
            }
            if (!t || !v && t)
                S = null
        }
        function T(e) {
            var t = p.length;
            while (t--)
                p[t] && p[t].onclick && p[t].onclick(e);
            if (e.target) {
                var n = U(e.target);
                n && typeof n.seriesIndex != "undefined" && d.dispatch(i.EVENT.CLICK, e.event, n)
            }
        }
        function N(e) {
            if (e.target) {
                var t = U(e.target);
                t && typeof t.seriesIndex != "undefined" && d.dispatch(i.EVENT.HOVER, e.event, t)
            }
        }
        function C(e) {
            m = {dragIn: !1, dragOut: !1, needRefresh: !1};
            var t = p.length;
            while (t--)
                p[t] && p[t].ondragstart && p[t].ondragstart(e)
        }
        function k(e) {
            var t = p.length;
            while (t--)
                p[t] && p[t].ondragenter && p[t].ondragenter(e)
        }
        function L(e) {
            var t = p.length;
            while (t--)
                p[t] && p[t].ondragover && p[t].ondragover(e)
        }
        function A(e) {
            var t = p.length;
            while (t--)
                p[t] && p[t].ondragleave && p[t].ondragleave(e)
        }
        function O(e) {
            var t = p.length;
            while (t--)
                p[t] && p[t].ondrop && p[t].ondrop(e, m);
            y.ondrop(e, m)
        }
        function M(e) {
            var t = p.length;
            while (t--)
                p[t] && p[t].ondragend && p[t].ondragend(e, m);
            y.ondragend(e, m), m.needRefresh && (R(y.getOption()), d.dispatch(i.EVENT.DATA_CHANGED, e.event, U(e.target)), d.dispatch(i.EVENT.REFRESH))
        }
        function _(e) {
            m.needRefresh = !1;
            var t = p.length;
            while (t--)
                p[t] && p[t].onlegendSelected && p[t].onlegendSelected(e, m);
            g = e.selected, m.needRefresh && d.dispatch(i.EVENT.REFRESH)
        }
        function D(e) {
            m.needRefresh = !1;
            var t = p.length;
            while (t--)
                p[t] && p[t].ondataZoom && p[t].ondataZoom(e, m);
            m.needRefresh && d.dispatch(i.EVENT.REFRESH)
        }
        function P(e) {
            m.needRefresh = !1;
            var t = p.length;
            while (t--)
                p[t] && p[t].ondataRange && p[t].ondataRange(e, m);
            m.needRefresh && f.refresh()
        }
        function H() {
            z(q())
        }
        function B(e) {
            R(e.option), d.dispatch(i.EVENT.DATA_CHANGED, null, e), d.dispatch(i.EVENT.REFRESH)
        }
        function j(e) {
            var t = p.length, n = [];
            while (t--)
                p[t] && p[t].ontooltipHover && p[t].ontooltipHover(e, n)
        }
        function F() {
            a.restore()
        }
        function I(e) {
            w = !0, a.refresh(e), w = !1
        }
        function q(e) {
            var t = e || b.getMagicOption(), n;
            if (c.xAxis)
                if (c.xAxis instanceof Array) {
                    n = c.xAxis.length;
                    while (n--)
                        t.xAxis[n].data = c.xAxis[n].data
                } else
                    t.xAxis.data = c.xAxis.data;
            if (c.yAxis)
                if (c.yAxis instanceof Array) {
                    n = c.yAxis.length;
                    while (n--)
                        t.yAxis[n].data = c.yAxis[n].data
                } else
                    t.yAxis.data = c.yAxis.data;
            n = t.series.length;
            while (n--)
                t.series[n].data = c.series[n].data;
            return t
        }
        function R(t) {
            var n = e("./util/ecQuery");
            if (n.query(t, "dataZoom.show") || n.query(t, "toolbox.show") && n.query(t, "toolbox.feature.dataZoom.show")) {
                for (var r = 0, s = p.length; r < s; r++)
                    if (p[r].type == i.COMPONENT_TYPE_DATAZOOM) {
                        p[r].syncBackupData(t, c);
                        return
                    }
            } else {
                var o = t.series, u;
                for (var r = 0, s = o.length; r < s; r++) {
                    u = o[r].data;
                    for (var a = 0, f = u.length; a < f; a++)
                        c.series[r].data[a] = u[a]
                }
            }
        }
        function U(t) {
            if (t) {
                var n = e("./util/ecData"), r = n.get(t, "seriesIndex"), i = n.get(t, "dataIndex");
                return i = a.component.dataZoom ? a.component.dataZoom.getRealDataIndex(r, i) : i, {seriesIndex: r, dataIndex: i, data: n.get(t, "data"), name: n.get(t, "name"), value: n.get(t, "value")}
            }
            return
        }
        function z(n) {
            $(n);
            if (n.backgroundColor)
                if (!r && n.backgroundColor.indexOf("rgba") != -1) {
                    var i = n.backgroundColor.split(",");
                    t.style.filter = "alpha(opacity=" + i[3].substring(0, i[3].lastIndexOf(")")) * 100 + ")", i.length = 3, i[0] = i[0].replace("a", ""), t.style.backgroundColor = i.join(",") + ")"
                } else
                    t.style.backgroundColor = n.backgroundColor;
            V(), f.clear();
            var s = e("./chart"), o = e("./component"), l;
            if (n.title) {
                var c = o.get("title");
                l = new c(u, d, f, n), p.push(l), a.component.title = l
            }
            var h;
            if (n.tooltip) {
                var v = o.get("tooltip");
                h = new v(u, d, f, n, t, a), p.push(h), a.component.tooltip = h
            }
            var m;
            if (n.legend) {
                var w = o.get("legend");
                m = new w(u, d, f, n, g), p.push(m), a.component.legend = m
            }
            var E;
            if (n.dataRange) {
                var S = o.get("dataRange");
                E = new S(u, d, f, n), p.push(E), a.component.dataRange = E
            }
            var x, T, N, C;
            if (n.grid || n.xAxis || n.yAxis) {
                var k = o.get("grid");
                x = new k(u, d, f, n), p.push(x), a.component.grid = x;
                var L = o.get("dataZoom");
                T = new L(u, d, f, n, {legend: m, grid: x}), p.push(T), a.component.dataZoom = T;
                var A = o.get("axis");
                N = new A(u, d, f, n, {legend: m, grid: x}, "xAxis"), p.push(N), a.component.xAxis = N, C = new A(u, d, f, n, {legend: m, grid: x}, "yAxis"), p.push(C), a.component.yAxis = C
            }
            var O;
            if (n.polar) {
                var M = o.get("polar");
                O = new M(u, d, f, n, {legend: m}), p.push(O), a.component.polar = O
            }
            h && h.setComponent();
            var _, D, P, H = {};
            for (var B = 0, j = n.series.length; B < j; B++) {
                D = n.series[B].type;
                if (!D) {
                    console.error("series[" + B + "] chart type has not been defined.");
                    continue
                }
                H[D] || (H[D] = !0, _ = s.get(D), _ ? (P = new _(u, d, f, n, {tooltip: h, legend: m, dataRange: E, grid: x, xAxis: N, yAxis: C, polar: O}), p.push(P), a.chart[D] = P) : console.error(D + " has not been required."))
            }
            y.render(n), b.render(n, {dataZoom: T});
            if (n.animation && !n.renderAsImage) {
                var F = p.length;
                while (F--)
                    P = p[F], P && P.animation && P.shapeList && P.shapeList.length < n.animationThreshold && P.animation();
                f.refresh()
            } else
                f.render();
            var I = "IMG" + a.id, q = document.getElementById(I);
            n.renderAsImage && r ? (q ? q.src = tt(n.renderAsImage) : (q = nt(n.renderAsImage), q.id = I, q.style.position = "absolute", q.style.left = 0, q.style.top = 0, t.firstChild.appendChild(q)), ot(), f.un(), V(), f.clear()) : q && q.parentNode.removeChild(q), q = null
        }
        function W() {
            var t = e("zrender/tool/util");
            h.legend && h.legend.selected ? g = h.legend.selected : g = {}, c = t.clone(h), l = t.clone(h), y.clear(), b.reset(l), z(l)
        }
        function X(t) {
            t = t || {};
            var n = t.option;
            if (!w && t.option) {
                var r = e("./util/ecQuery");
                r.query(c, "toolbox.show") && r.query(c, "toolbox.feature.magicType.show") ? n = q() : n = q(y.getOption());
                var i = e("zrender/tool/util");
                i.merge(n, t.option, {overwrite: !0, recursive: !0}), i.merge(c, t.option, {overwrite: !0, recursive: !0}), i.merge(h, t.option, {overwrite: !0, recursive: !0}), y.refresh(n), b.refresh(n)
            }
            f.clearAnimation();
            for (var s = 0, o = p.length; s < o; s++)
                p[s].refresh && p[s].refresh(n);
            f.refresh()
        }
        function V() {
            f.clearAnimation();
            var e = p.length;
            while (e--)
                p[e] && p[e].dispose && p[e].dispose();
            p = [], a.chart = {island: y}, a.component = {toolbox: b}
        }
        function $(t) {
            typeof t.backgroundColor == "undefined" && (t.backgroundColor = u.backgroundColor), typeof t.calculable == "undefined" && (t.calculable = u.calculable), typeof t.calculableColor == "undefined" && (t.calculableColor = u.calculableColor), typeof t.calculableHolderColor == "undefined" && (t.calculableHolderColor = u.calculableHolderColor), typeof t.nameConnector == "undefined" && (t.nameConnector = u.nameConnector), typeof t.valueConnector == "undefined" && (t.valueConnector = u.valueConnector), typeof t.animation == "undefined" && (t.animation = u.animation), typeof t.animationThreshold == "undefined" && (t.animationThreshold = u.animationThreshold), typeof t.animationDuration == "undefined" && (t.animationDuration = u.animationDuration), typeof t.animationEasing == "undefined" && (t.animationEasing = u.animationEasing), typeof t.addDataAnimation == "undefined" && (t.addDataAnimation = u.addDataAnimation);
            var n = e("zrender/tool/color");
            t.color && t.color.length > 0 ? f.getColor = function(e) {
                return n.getColor(e, t.color)
            } : f.getColor = function(e) {
                return n.getColor(e, u.color)
            }, typeof t.DRAG_ENABLE_TIME == "undefined" && (t.DRAG_ENABLE_TIME = u.DRAG_ENABLE_TIME)
        }
        function J(t, n) {
            var r = e("zrender/tool/util");
            n ? l = r.clone(t) : r.merge(l, r.clone(t), {overwrite: !0, recursive: !0});
            if (!l.series || l.series.length === 0)
                return;
            return c = r.clone(l), h = r.clone(l), l.legend && l.legend.selected ? g = l.legend.selected : g = {}, y.clear(), b.reset(l), z(l), a
        }
        function K() {
            var t = e("./util/ecQuery"), n = e("zrender/tool/util");
            return t.query(c, "toolbox.show") && t.query(c, "toolbox.feature.magicType.show") ? n.clone(q()) : n.clone(q(y.getOption()))
        }
        function Q(e, t) {
            return t ? (l.series = e, a.setOption(l, t)) : a.setOption({series: e}), a
        }
        function G() {
            return K().series
        }
        function Y(t, n, r, s, o) {
            var u = e("./util/ecQuery"), f;
            u.query(c, "toolbox.show") && u.query(c, "toolbox.feature.magicType.show") ? f = q() : f = q(y.getOption());
            var l = e("zrender/tool/util"), v = t instanceof Array ? t : [[t, n, r, s, o]], m, w;
            for (var E = 0, S = v.length; E < S; E++) {
                t = v[E][0], n = v[E][1], r = v[E][2], s = v[E][3], o = v[E][4];
                if (h.series[t]) {
                    r ? (h.series[t].data.unshift(n), c.series[t].data.unshift(n), s || (h.series[t].data.pop(), n = c.series[t].data.pop())) : (h.series[t].data.push(n), c.series[t].data.push(n), s || (h.series[t].data.shift(), n = c.series[t].data.shift()));
                    if (typeof o != "undefined" && h.series[t].type == i.CHART_TYPE_PIE && c.legend && c.legend.data)
                        f.legend.data = c.legend.data, r ? (h.legend.data.unshift(o), c.legend.data.unshift(o)) : (h.legend.data.push(o), c.legend.data.push(o)), s || (w = l.indexOf(c.legend.data, n.name), w != -1 && (h.legend.data.splice(w, 1), c.legend.data.splice(w, 1))), g[o] = !0;
                    else if (typeof o != "undefined" && typeof h.xAxis != "undefined" && typeof h.yAxis != "undefined") {
                        m = h.series[t].xAxisIndex || 0;
                        if (typeof h.xAxis[m].type == "undefined" || h.xAxis[m].type == "category")
                            r ? (h.xAxis[m].data.unshift(o), c.xAxis[m].data.unshift(o), s || (h.xAxis[m].data.pop(), c.xAxis[m].data.pop())) : (h.xAxis[m].data.push(o), c.xAxis[m].data.push(o), s || (h.xAxis[m].data.shift(), c.xAxis[m].data.shift()));
                        m = h.series[t].yAxisIndex || 0, h.yAxis[m].type == "category" && (r ? (h.yAxis[m].data.unshift(o), c.yAxis[m].data.unshift(o), s || (h.yAxis[m].data.pop(), c.yAxis[m].data.pop())) : (h.yAxis[m].data.push(o), c.yAxis[m].data.push(o), s || (h.yAxis[m].data.shift(), c.yAxis[m].data.shift())))
                    }
                }
            }
            f.legend && (f.legend.selected = g);
            for (var E = 0, S = p.length; E < S; E++)
                f.addDataAnimation && p[E].addDataAnimation && p[E].addDataAnimation(v), p[E].type == i.COMPONENT_TYPE_DATAZOOM && (p[E].silence(!0), p[E].init(f), p[E].silence(!1));
            return y.refresh(f), b.refresh(f), setTimeout(function() {
                d.dispatch(i.EVENT.REFRESH, "", {option: f})
            }, f.addDataAnimation ? 500 : 0), a
        }
        function Z() {
            return t
        }
        function et() {
            return f
        }
        function tt(e) {
            if (!r)
                return"";
            if (p.length === 0) {
                var t = "IMG" + a.id, n = document.getElementById(t);
                if (n)
                    return n.src
            }
            a.component.tooltip && a.component.tooltip.hideTip(), e = e || "png", e != "png" && e != "jpeg" && (e = "png");
            var i = l.backgroundColor && l.backgroundColor.replace(" ", "") == "rgba(0,0,0,0)" ? "#fff" : l.backgroundColor;
            return f.toDataURL("image/" + e, i)
        }
        function nt(e) {
            var t = document.createElement("img");
            return t.src = tt(e), t.title = h.title && h.title.text || "ECharts", t
        }
        function rt(n) {
            if (!lt())
                return tt(n);
            var r, i = [t.offsetLeft, t.offsetTop, t.offsetWidth, t.offsetHeight], s = {self: {img: a.getDataURL(n), left: i[0], top: i[1], right: i[0] + i[2], bottom: i[1] + i[3]}}, o = s.self.left, u = s.self.top, f = s.self.right, c = s.self.bottom;
            for (var h in v)
                r = v[h].getDom(), i = [r.offsetLeft, r.offsetTop, r.offsetWidth, r.offsetHeight], s[h] = {img: v[h].getDataURL(n), left: i[0], top: i[1], right: i[0] + i[2], bottom: i[1] + i[3]}, o = Math.min(o, s[h].left), u = Math.min(u, s[h].top), f = Math.max(f, s[h].right), c = Math.max(c, s[h].bottom);
            var p = document.createElement("div");
            p.style.position = "absolute", p.style.left = "-4000px", p.style.width = f - o + "px", p.style.height = c - u + "px", document.body.appendChild(p);
            var d = e("zrender").init(p);
            for (var h in s)
                d.addShape({shape: "image", style: {x: s[h].left - o, y: s[h].top - u, image: s[h].img}});
            d.render();
            var m = l.backgroundColor && l.backgroundColor.replace(" ", "") == "rgba(0,0,0,0)" ? "#fff" : l.backgroundColor, g = d.toDataURL("image/png", m);
            return setTimeout(function() {
                d.dispose(), p.parentNode.removeChild(p), p = null
            }, 100), g
        }
        function it(e) {
            var t = document.createElement("img");
            return t.src = rt(e), t.title = h.title && h.title.text || "ECharts", t
        }
        function st(e, t) {
            return d.bind(e, t), a
        }
        function ot(e, t) {
            return d.unbind(e, t), a
        }
        function ut(e) {
            if (!e)
                return a;
            v || (v = {});
            if (e instanceof Array)
                for (var t = 0, n = e.length; t < n; t++)
                    v[e[t].id] = e[t];
            else
                v[e.id] = e;
            return a
        }
        function at(e) {
            if (!e || !v)
                return a;
            if (e instanceof Array)
                for (var t = 0, n = e.length; t < n; t++)
                    delete v[e[t].id];
            else
                delete v[e.id];
            for (var r in v)
                return r, a;
            return v = !1, a
        }
        function ft(e) {
            e.__echartsId != a.id && x(e)
        }
        function lt() {
            return!!v
        }
        function ct(t) {
            b.hideDataView();
            var n = e("zrender/tool/util");
            t = t || {}, t.textStyle = t.textStyle || {};
            var r = n.merge(n.clone(t.textStyle), u.textStyle, {overwrite: !1});
            return t.textStyle.textFont = r.fontStyle + " " + r.fontWeight + " " + r.fontSize + "px " + r.fontFamily, t.textStyle.text = t.text || u.loadingText, typeof t.x != "undefined" && (t.textStyle.x = t.x), typeof t.y != "undefined" && (t.textStyle.y = t.y), f.showLoading(t), a
        }
        function ht() {
            return f.hideLoading(), a
        }
        function pt(t) {
            var n = e("zrender/tool/util");
            if (t) {
                if (typeof t == "string")
                    switch (t) {
                        case"default":
                            t = e("./theme/default");
                            break;
                        default:
                            t = e("./theme/default")
                    }
                else
                    t = t || {};
                for (var s in u)
                    delete u[s];
                for (var s in i)
                    u[s] = n.clone(i[s]);
                t.color && (u.color = []), t.symbolList && (u.symbolList = []), n.merge(u, n.clone(t), {overwrite: !0, recursive: !0})
            }
            r || (u.textStyle.fontFamily = u.textStyle.fontFamily2), h && a.restore()
        }
        function dt() {
            f.resize();
            if (l.renderAsImage && r)
                return z(l), a;
            f.clearAnimation(), y.resize(), b.resize();
            for (var e = 0, t = p.length; e < t; e++)
                p[e].resize && p[e].resize();
            return f.refresh(), d.dispatch(i.EVENT.RESIZE), a
        }
        function vt() {
            return V(), f.clear(), l = {}, c = {}, h = {}, a
        }
        function mt() {
            var e = t.getAttribute(o);
            e && delete s[e], y.dispose(), b.dispose(), d.unbind(), a.clear(), f.dispose(), f = null, a = null;
            return
        }
        var i = e("./config"), u = e("zrender/tool/util").clone(i), a = this, f, l, c, h, p, d, v = !1, m = {dragIn: !1, dragOut: !1, needRefresh: !1}, g, y, b, w;
        E();
        var S = null;
        a.setOption = J, a.setSeries = Q, a.addData = Y, a.getOption = K, a.getSeries = G, a.getDom = Z, a.getZrender = et, a.getDataURL = tt, a.getImage = nt, a.getConnectedDataURL = rt, a.getConnectedImage = it, a.on = st, a.un = ot, a.connect = ut, a.disConnect = at, a.connectedEventHandler = ft, a.isConnected = lt, a.showLoading = ct, a.hideLoading = ht, a.setTheme = pt, a.resize = dt, a.refresh = X, a.restore = W, a.clear = vt, a.dispose = mt
    }
    var t = {}, n = t, r = e("zrender/tool/env").canvasSupported, i = new Date - 0, s = {}, o = "_echarts_instance_";
    return t.version = "1.4.1", t.dependencies = {zrender: "1.1.2"}, t.init = function(e, t) {
        e = e instanceof Array ? e[0] : e;
        var n = e.getAttribute(o);
        return n || (n = i++, e.setAttribute(o, n)), s[n] && s[n].dispose(), s[n] = new u(e), s[n].id = n, s[n].setTheme(t), s[n]
    }, t.getInstanceById = function(e) {
        return s[e]
    }, t
}), define("echarts", ["echarts/echarts"], function(e) {
    return e
}), define("echarts/util/shape/symbol", ["require", "zrender/tool/color", "zrender/shape", "zrender/shape/base", "zrender/shape"], function(e) {
    function t() {
        this.type = "symbol"
    }
    return t.prototype = {buildPath: function(t, n) {
            var r = n.pointList, i = this.getRect(n), s = window.devicePixelRatio || 1;
            i = {x: Math.floor(i.x), y: Math.floor(i.y), width: Math.floor(i.width), height: Math.floor(i.height)};
            var o = t.getImageData(i.x * s, i.y * s, i.width * s, i.height * s), u = o.data, a, f = e("zrender/tool/color"), l = f.toArray(n.color), c = l[0], h = l[1], p = l[2], d = i.width;
            for (var v = 1, m = r.length; v < m; v++)
                a = ((Math.floor(r[v][0]) - i.x) * s + (Math.floor(r[v][1]) - i.y) * d * s * s) * 4, u[a] = c, u[a + 1] = h, u[a + 2] = p, u[a + 3] = 255;
            t.putImageData(o, i.x * s, i.y * s);
            return
        }, getRect: function(t) {
            var n = e("zrender/shape");
            return n.get("polygon").getRect(t)
        }, isCover: function() {
            return!1
        }}, e("zrender/shape/base").derive(t), e("zrender/shape").define("symbol", new t), t
}), define("echarts/chart/scatter", ["require", "../component/base", "./calculableBase", "zrender/tool/color", "../util/shape/symbol", "../chart"], function(e) {
    function t(t, n, r, i, s) {
        function v() {
            f.selectedMap = {};
            var e = s.legend, n = [], i, o, u, c;
            for (var v = 0, g = l.length; v < g; v++) {
                i = l[v], o = i.name;
                if (i.type == t.CHART_TYPE_SCATTER) {
                    l[v] = f.reformOption(l[v]), d[v] = f.query(i, "symbol") || p[v % p.length];
                    if (e) {
                        f.selectedMap[o] = e.isSelected(o), h[v] = a.alpha(e.getColor(o), .5), u = e.getItemShape(o);
                        if (u) {
                            u.shape = "icon";
                            var c = d[v];
                            u.style.brushType = c.match("empty") ? "stroke" : "both", c = c.replace("empty", "").toLowerCase(), c.match("star") && (u.style.n = c.replace("star", "") - 0 || 5, c = "star"), c.match("image") && (u.style.image = c.replace(new RegExp("^image:\\/\\/"), ""), u.style.x += Math.round((u.style.width - u.style.height) / 2), u.style.width = u.style.height, c = "image"), u.style.iconType = c, e.setItemShape(o, u)
                        }
                    } else
                        f.selectedMap[o] = !0, h[v] = r.getColor(v);
                    f.selectedMap[o] && n.push(v)
                }
            }
            if (n.length === 0)
                return;
            m(n);
            for (var v = 0, g = f.shapeList.length; v < g; v++)
                f.shapeList[v].id = r.newShapeId(f.type), r.addShape(f.shapeList[v])
        }
        function m(e) {
            var t, n, r, i, o, u, a = {}, c, h;
            for (var p = 0, d = e.length; p < d; p++) {
                t = e[p], n = l[t];
                if (n.data.length === 0)
                    continue;
                o = s.xAxis.getAxis(n.xAxisIndex || 0), u = s.yAxis.getAxis(n.yAxisIndex || 0), a[t] = [];
                for (var v = 0, m = n.data.length; v < m; v++) {
                    r = n.data[v], i = typeof r != "undefined" ? typeof r.value != "undefined" ? r.value : r : "-";
                    if (i == "-" || i.length < 2)
                        continue;
                    c = o.getCoord(i[0]), h = u.getCoord(i[1]), a[t].push([c, h, v, r.name || ""])
                }
                y(o, u, n.data, a[t]), f.buildMark(n, t, s, {xMarkMap: g(t) ? y(o, u, n.data, a[t]) : {}})
            }
            b(a)
        }
        function g(e) {
            var t = l[e], n = [];
            t.markPoint && t.markPoint.data && n.push(t.markPoint.data), t.markLine && t.markLine.data && n.push(t.markLine.data);
            var r, i = n.length;
            while (i--) {
                r = n[i];
                for (var s = 0, o = r.length; s < o; s++)
                    if (r[s].type == "max" || r[s].type == "min" || r[s].type == "average")
                        return!0
            }
            return!1
        }
        function y(e, t, n, r) {
            var i = {min0: Number.POSITIVE_INFINITY, max0: Number.NEGATIVE_INFINITY, sum0: 0, counter0: 0, average0: 0, min1: Number.POSITIVE_INFINITY, max1: Number.NEGATIVE_INFINITY, sum1: 0, counter1: 0, average1: 0}, o;
            for (var u = 0, a = r.length; u < a; u++)
                o = n[r[u][2]].value || n[r[u][2]], i.min0 > o[0] && (i.min0 = o[0], i.minY0 = r[u][1], i.minX0 = r[u][0]), i.max0 < o[0] && (i.max0 = o[0], i.maxY0 = r[u][1], i.maxX0 = r[u][0]), i.sum0 += o[0], i.counter0++, i.min1 > o[1] && (i.min1 = o[1], i.minY1 = r[u][1], i.minX1 = r[u][0]), i.max1 < o[1] && (i.max1 = o[1], i.maxY1 = r[u][1], i.maxX1 = r[u][0]), i.sum1 += o[1], i.counter1++;
            var f = s.grid.getX(), l = s.grid.getXend(), c = s.grid.getY(), h = s.grid.getYend();
            i.average0 = (i.sum0 / i.counter0).toFixed(2) - 0;
            var p = e.getCoord(i.average0);
            i.averageLine0 = [[p, h], [p, c]], i.minLine0 = [[i.minX0, h], [i.minX0, c]], i.maxLine0 = [[i.maxX0, h], [i.maxX0, c]], i.average1 = (i.sum1 / i.counter1).toFixed(2) - 0;
            var d = t.getCoord(i.average1);
            return i.averageLine1 = [[f, d], [l, d]], i.minLine1 = [[f, i.minY1], [l, i.minY1]], i.maxLine1 = [[f, i.maxY1], [l, i.maxY1]], i
        }
        function b(e) {
            var t, n, r, i;
            for (var s in e) {
                t = l[s], n = e[s];
                if (t.large && t.data.length > t.largeThreshold) {
                    f.shapeList.push(E(n, f.getItemStyleColor(f.query(t, "itemStyle.normal.color"), s, -1) || h[s]));
                    continue
                }
                for (var o = 0, u = n.length; o < u; o++)
                    r = n[o], i = w(s, r[2], r[3], r[0], r[1]), i && f.shapeList.push(i)
            }
        }
        function w(e, t, n, r, i) {
            var o = l[e], u = o.data[t], a = s.dataRange, p;
            if (a) {
                p = isNaN(u[2]) ? h[e] : a.getColor(u[2]);
                if (!p)
                    return null
            } else
                p = h[e];
            var v = f.getSymbolShape(o, e, u, t, n, r, i, d[e], p, "rgba(0,0,0,0)", "vertical");
            return v.zlevel = c, v._mark = !1, v._main = !0, v
        }
        function E(e, t) {
            return{shape: "symbol", zlevel: c, _main: !0, hoverable: !1, style: {pointList: e, color: t, strokeColor: t}}
        }
        function S(e, t, n, r) {
            var i = s.xAxis.getAxis(e.xAxisIndex), o = s.yAxis.getAxis(e.yAxisIndex), u;
            if (!n.type || n.type != "max" && n.type != "min" && n.type != "average")
                u = [typeof n.xAxis != "string" && i.getCoordByIndex ? i.getCoordByIndex(n.xAxis || 0) : i.getCoord(n.xAxis || 0), typeof n.yAxis != "string" && o.getCoordByIndex ? o.getCoordByIndex(n.yAxis || 0) : o.getCoord(n.yAxis || 0)];
            else {
                var a = typeof n.valueIndex != "undefined" ? n.valueIndex : 1;
                u = [r.xMarkMap[n.type + "X" + a], r.xMarkMap[n.type + "Y" + a], r.xMarkMap[n.type + "Line" + a], r.xMarkMap[n.type + a]]
            }
            return u
        }
        function x(e, t) {
            s = t, T(e)
        }
        function T(e) {
            e && (i = e, l = i.series), f.clear(), v()
        }
        function N(e, t) {
            s.dataRange && (T(), t.needRefresh = !0);
            return
        }
        function C() {
            var e = f.query(i, "animationDuration"), t = f.query(i, "animationEasing"), n, s, o;
            for (var u = 0, a = f.shapeList.length; u < a; u++)
                if (f.shapeList[u]._main) {
                    if (f.shapeList[u].shape == "symbol")
                        continue;
                    o = l[f.shapeList[u]._seriesIndex], n = f.shapeList[u]._x || 0, s = f.shapeList[u]._y || 0, r.modShape(f.shapeList[u].id, {scale: [0, 0, n, s]}, !0), r.animate(f.shapeList[u].id, "").when(f.query(o, "animationDuration") || e, {scale: [1, 1, n, s]}).start(f.query(o, "animationEasing") || t)
                }
            f.animationMark(e, t)
        }
        var o = e("../component/base");
        o.call(this, t, r);
        var u = e("./calculableBase");
        u.call(this, r, i);
        var a = e("zrender/tool/color"), f = this;
        f.type = t.CHART_TYPE_SCATTER;
        var l, c = f.getZlevelBase(), h = {}, p = t.symbolList, d = {};
        f.getMarkCoord = S, f.animation = C, f.init = x, f.refresh = T, f.ondataRange = N, x(i, s)
    }
    return e("../util/shape/symbol"), e("../chart").define("scatter", t), t
}), define("echarts/util/shape/candle", ["require", "zrender/tool/matrix", "zrender/shape/base", "zrender/shape"], function(e) {
    function n() {
        this.type = "candle"
    }
    var t = e("zrender/tool/matrix");
    return n.prototype = {_numberOrder: function(e, t) {
            return t - e
        }, buildPath: function(e, t) {
            t.y.sort(this._numberOrder), e.moveTo(t.x, t.y[3]), e.lineTo(t.x, t.y[2]), e.moveTo(t.x - t.width / 2, t.y[2]), e.rect(t.x - t.width / 2, t.y[2], t.width, t.y[1] - t.y[2]), e.moveTo(t.x, t.y[1]), e.lineTo(t.x, t.y[0]);
            return
        }, getRect: function(e) {
            var t;
            return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, {x: Math.round(e.x - e.width / 2 - t / 2), y: Math.round(e.y[3] - t / 2), width: e.width + t, height: e.y[0] - e.y[3] + t}
        }, isCover: function(e, n, r) {
            if (e.__needTransform && e._transform) {
                var i = [];
                t.invert(i, e._transform);
                var s = [n, r];
                t.mulVector(s, i, [n, r, 1]), n == s[0] && r == s[1] && (Math.abs(e.rotation[0]) > 1e-4 || Math.abs(e.position[0]) > 1e-4 || Math.abs(e.position[1]) > 1e-4 || Math.abs(e.scale[0] - 1) > 1e-4 || Math.abs(e.scale[1] - 1) > 1e-4 ? e.__needTransform = !0 : e.__needTransform = !1), n = s[0], r = s[1]
            }
            var o;
            return e.style.__rect ? o = e.style.__rect : (o = this.getRect(e.style), o = [o.x, o.x + o.width, o.y, o.y + o.height], e.style.__rect = o), n >= o[0] && n <= o[1] && r >= o[2] && r <= o[3] ? !0 : !1
        }}, e("zrender/shape/base").derive(n), e("zrender/shape").define("candle", new n), n
}), define("echarts/chart/k", ["require", "../component/base", "./calculableBase", "../util/ecData", "../util/shape/candle", "../chart"], function(e) {
    function t(t, n, r, i, s) {
        function h() {
            f.selectedMap = {};
            var e = {top: [], bottom: []}, n;
            for (var i = 0, o = l.length; i < o; i++)
                l[i].type == t.CHART_TYPE_K && (l[i] = f.reformOption(l[i]), n = s.xAxis.getAxis(l[i].xAxisIndex), n.type == t.COMPONENT_TYPE_AXIS_CATEGORY && e[n.getPosition()].push(i));
            for (var u in e)
                e[u].length > 0 && p(u, e[u]);
            for (var i = 0, o = f.shapeList.length; i < o; i++)
                f.shapeList[i].id = r.newShapeId(f.type), r.addShape(f.shapeList[i])
        }
        function p(e, t) {
            var n = d(t), r = n.locationMap, i = n.maxDataLength;
            if (i === 0 || r.length === 0)
                return;
            v(i, r);
            for (var o = 0, u = t.length; o < u; o++)
                f.buildMark(l[t[o]], t[o], s)
        }
        function d(e) {
            var t, n, r = s.legend, i = [], o = 0;
            for (var u = 0, a = e.length; u < a; u++)
                t = l[e[u]], n = t.name, r ? f.selectedMap[n] = r.isSelected(n) : f.selectedMap[n] = !0, f.selectedMap[n] && i.push(e[u]), o = Math.max(o, t.data.length);
            return{locationMap: i, maxDataLength: o}
        }
        function v(e, t) {
            var n, r, i, o, u, a, f = {}, c, h, p, d;
            for (var v = 0, g = t.length; v < g; v++) {
                n = t[v], r = l[n], i = r.xAxisIndex || 0, o = s.xAxis.getAxis(i), c = r.barWidth || Math.floor(o.getGap() / 2), d = r.barMaxWidth, d && d < c && (c = d), u = r.yAxisIndex || 0, a = s.yAxis.getAxis(u), f[n] = [];
                for (var y = 0, b = e; y < b; y++) {
                    if (typeof o.getNameByIndex(y) == "undefined")
                        break;
                    h = r.data[y], p = typeof h != "undefined" ? typeof h.value != "undefined" ? h.value : h : "-";
                    if (p == "-" || p.length != 4)
                        continue;
                    f[n].push([o.getCoordByIndex(y), c, a.getCoord(p[0]), a.getCoord(p[1]), a.getCoord(p[2]), a.getCoord(p[3]), y, o.getNameByIndex(y)])
                }
            }
            m(f)
        }
        function m(e) {
            var n, r, i, s, o, u, a, c, h, p, d, v, m, y, b, w;
            for (var E = 0, S = l.length; E < S; E++) {
                d = l[E], y = e[E];
                if (d.type == t.CHART_TYPE_K && typeof y != "undefined") {
                    v = d, n = f.query(v, "itemStyle.normal.lineStyle.width"), r = f.query(v, "itemStyle.normal.lineStyle.color"), i = f.query(v, "itemStyle.normal.lineStyle.color0"), s = f.query(v, "itemStyle.normal.color"), o = f.query(v, "itemStyle.normal.color0"), u = f.query(v, "itemStyle.emphasis.lineStyle.width"), a = f.query(v, "itemStyle.emphasis.lineStyle.color"), c = f.query(v, "itemStyle.emphasis.lineStyle.color0"), h = f.query(v, "itemStyle.emphasis.color"), p = f.query(v, "itemStyle.emphasis.color0");
                    for (var x = 0, T = y.length; x < T; x++)
                        b = y[x], m = d.data[b[6]], v = m, w = b[3] < b[2], f.shapeList.push(g(E, b[6], b[7], b[0], b[1], b[2], b[3], b[4], b[5], w ? f.query(v, "itemStyle.normal.color") || s : f.query(v, "itemStyle.normal.color0") || o, f.query(v, "itemStyle.normal.lineStyle.width") || n, w ? f.query(v, "itemStyle.normal.lineStyle.color") || r : f.query(v, "itemStyle.normal.lineStyle.color0") || i, w ? f.query(v, "itemStyle.emphasis.color") || h || s : f.query(v, "itemStyle.emphasis.color0") || p || o, f.query(v, "itemStyle.emphasis.lineStyle.width") || u || n, w ? f.query(v, "itemStyle.emphasis.lineStyle.color") || a || r : f.query(v, "itemStyle.emphasis.lineStyle.color0") || c || i))
                }
            }
        }
        function g(e, t, n, r, i, s, o, u, f, h, p, d, v, m, g) {
            var y = {shape: "candle", zlevel: c, clickable: !0, style: {x: r, y: [s, o, u, f], width: i, color: h, strokeColor: d, lineWidth: p, brushType: "both"}, highlightStyle: {color: v, strokeColor: g, lineWidth: m}, _seriesIndex: e};
            return a.pack(y, l[e], e, l[e].data[t], t, n), y
        }
        function y(e, t, n) {
            var r = s.xAxis.getAxis(e.xAxisIndex), i = s.yAxis.getAxis(e.yAxisIndex);
            return[typeof n.xAxis != "string" && r.getCoordByIndex ? r.getCoordByIndex(n.xAxis || 0) : r.getCoord(n.xAxis || 0), typeof n.yAxis != "string" && i.getCoordByIndex ? i.getCoordByIndex(n.yAxis || 0) : i.getCoord(n.yAxis || 0)]
        }
        function b(e, t) {
            s = t, w(e)
        }
        function w(e) {
            e && (i = e, l = i.series), f.clear(), h()
        }
        function E(e) {
            var t = {};
            for (var n = 0, i = e.length; n < i; n++)
                t[e[n][0]] = e[n];
            var o, u, c, h, p, d;
            for (var n = 0, i = f.shapeList.length; n < i; n++) {
                p = f.shapeList[n]._seriesIndex;
                if (t[p] && !t[p][3] && f.shapeList[n].shape == "candle") {
                    d = a.get(f.shapeList[n], "dataIndex"), h = l[p];
                    if (t[p][2] && d == h.data.length - 1) {
                        r.delShape(f.shapeList[n].id);
                        continue
                    }
                    if (!t[p][2] && d === 0) {
                        r.delShape(f.shapeList[n].id);
                        continue
                    }
                    u = s.xAxis.getAxis(h.xAxisIndex || 0).getGap(), o = t[p][2] ? u : -u, c = 0, r.animate(f.shapeList[n].id, "").when(500, {position: [o, c]}).start()
                }
            }
        }
        function S() {
            var e = f.query(i, "animationDuration"), t = f.query(i, "animationEasing"), n, s, o;
            for (var u = 0, a = f.shapeList.length; u < a; u++)
                f.shapeList[u].shape == "candle" && (o = l[f.shapeList[u]._seriesIndex], n = f.shapeList[u].style.x, s = f.shapeList[u].style.y[0], r.modShape(f.shapeList[u].id, {scale: [1, 0, n, s]}, !0), r.animate(f.shapeList[u].id, "").when(f.query(o, "animationDuration") || e, {scale: [1, 1, n, s]}).start(f.query(o, "animationEasing") || t));
            f.animationMark(e, t)
        }
        var o = e("../component/base");
        o.call(this, t, r);
        var u = e("./calculableBase");
        u.call(this, r, i);
        var a = e("../util/ecData"), f = this;
        f.type = t.CHART_TYPE_K;
        var l, c = f.getZlevelBase();
        f.getMarkCoord = y, f.animation = S, f.init = b, f.refresh = w, f.addDataAnimation = E, b(i, s)
    }
    return e("../util/shape/candle"), e("../chart").define("k", t), t
}), define("echarts/chart/radar", ["require", "../component/base", "./calculableBase", "../util/ecData", "zrender/tool/color", "../util/accMath", "../chart"], function(e) {
    function t(t, n, r, i, s) {
        function y() {
            var e = s.legend;
            l.selectedMap = {}, v = [], g = 0;
            var n;
            for (var o = 0, u = c.length; o < u; o++)
                c[o].type == t.CHART_TYPE_RADAR && (h = l.reformOption(c[o]), n = h.name || "", l.selectedMap[n] = e ? e.isSelected(n) : !0, l.selectedMap[n] && (d = [h, i], l.deepQuery(d, "calculable") && x(o), b(o), l.buildMark(c[o], o, s)));
            for (var o = 0, u = l.shapeList.length; o < u; o++)
                l.shapeList[o].id = r.newShapeId(l.type), r.addShape(l.shapeList[o])
        }
        function b(e) {
            var t = s.legend, n, i = h.data, o, u, a, f = l.deepQuery(d, "calculable");
            for (var c = 0; c < i.length; c++) {
                u = i[c].name || "", l.selectedMap[u] = t ? t.isSelected(u) : !0;
                if (!l.selectedMap[u])
                    continue;
                t ? (o = t.getColor(u), n = t.getItemShape(u), n && (n.style.brushType = l.deepQuery([i[c], h], "itemStyle.normal.areaStyle") ? "both" : "stroke", t.setItemShape(u, n))) : o = r.getColor(c), a = w(h.polarIndex, i[c]), E(a, o, c, e), S(a, o, i[c], e, c, f), g++
            }
        }
        function w(e, t) {
            var n = [], r, i = s.polar;
            for (var o = 0, u = t.value.length; o < u; o++)
                r = i.getVector(e, o, t.value[o]), r && n.push(r);
            return n
        }
        function E(e, t, n, r) {
            var i;
            for (var s = 0, o = e.length; s < o; s++)
                i = l.getSymbolShape(c[r], r, c[r].data[n], n, "", e[s][0], e[s][1], m[g % m.length], t, "#fff", "vertical"), i.zlevel = p + 1, l.shapeList.push(i)
        }
        function S(e, t, n, r, i, o) {
            var u = [n, h], d = l.getItemStyleColor(l.deepQuery(u, "itemStyle.normal.color"), r, i, n), v = l.deepQuery(u, "itemStyle.normal.lineStyle.width"), m = l.deepQuery(u, "itemStyle.normal.lineStyle.type"), g = l.deepQuery(u, "itemStyle.normal.areaStyle.color"), y = l.deepQuery(u, "itemStyle.normal.areaStyle"), b = {shape: "polygon", zlevel: p, style: {pointList: e, brushType: y ? "both" : "stroke", color: g || d || f.alpha(t, .5), strokeColor: d || t, lineWidth: v, lineType: m}, highlightStyle: {brushType: l.deepQuery(u, "itemStyle.emphasis.areaStyle") || y ? "both" : "stroke", color: l.deepQuery(u, "itemStyle.emphasis.areaStyle.color") || g || d || f.alpha(t, .5), strokeColor: l.getItemStyleColor(l.deepQuery(u, "itemStyle.emphasis.color"), r, i, n) || d || t, lineWidth: l.deepQuery(u, "itemStyle.emphasis.lineStyle.width") || v, lineType: l.deepQuery(u, "itemStyle.emphasis.lineStyle.type") || m}};
            a.pack(b, c[r], r, n, i, n.name, s.polar.getIndicator(c[r].polarIndex)), o && (b.draggable = !0, l.setCalculable(b)), l.shapeList.push(b)
        }
        function x(e) {
            var t = l.deepQuery(d, "polarIndex");
            if (!v[t]) {
                var n = s.polar.getDropBox(t);
                n.zlevel = p, l.setCalculable(n), a.pack(n, c, e, undefined, -1), l.shapeList.push(n), v[t] = !0
            }
        }
        function T(e, t) {
            if (!l.isDragend || !e.target)
                return;
            var n = e.target, r = a.get(n, "seriesIndex"), i = a.get(n, "dataIndex");
            s.legend && s.legend.del(c[r].data[i].name), c[r].data.splice(i, 1), t.dragOut = !0, t.needRefresh = !0, l.isDragend = !1;
            return
        }
        function N(t, n) {
            if (!l.isDrop || !t.target)
                return;
            var r = t.target, o = t.dragged, u = a.get(r, "seriesIndex"), f = a.get(r, "dataIndex"), h, p = s.legend, d;
            if (f == -1)
                h = {value: a.get(o, "value"), name: a.get(o, "name")}, c[u].data.push(h), p && p.add(h.name, o.style.color || o.style.strokeColor);
            else {
                var v = e("../util/accMath");
                h = c[u].data[f], p && p.del(h.name), h.name += i.nameConnector + a.get(o, "name"), d = a.get(o, "value");
                for (var m = 0; m < d.length; m++)
                    h.value[m] = v.accAdd(h.value[m], d[m]);
                p && p.add(h.name, o.style.color || o.style.strokeColor)
            }
            n.dragIn = n.dragIn || !0, l.isDrop = !1;
            return
        }
        function C(e, t) {
            s = t, k(e)
        }
        function k(e) {
            e && (i = e, c = i.series), l.clear(), y()
        }
        function L() {
            var e = l.query(i, "animationDuration"), t = l.query(i, "animationEasing"), n, o, u, f, h, p = s.polar, d, v, m, g;
            for (var y = 0, b = l.shapeList.length; y < b; y++)
                l.shapeList[y].shape == "polygon" && (v = l.shapeList[y], o = a.get(v, "seriesIndex"), n = a.get(v, "dataIndex"), f = c[o], u = f.data[n], h = l.deepQuery([u, f, i], "polarIndex"), d = p.getCenter(h), m = d[0], g = d[1], r.modShape(l.shapeList[y].id, {scale: [.1, .1, m, g]}, !0), r.animate(v.id, "").when((l.query(f, "animationDuration") || e) + n * 100, {scale: [1, 1, m, g]}).start(l.query(f, "animationEasing") || t));
            l.animationMark(e, t)
        }
        var o = e("../component/base");
        o.call(this, t, r);
        var u = e("./calculableBase");
        u.call(this, r, i);
        var a = e("../util/ecData"), f = e("zrender/tool/color"), l = this;
        l.type = t.CHART_TYPE_RADAR;
        var c, h, p = l.getZlevelBase(), d, v, m = t.symbolList, g;
        l.animation = L, l.init = C, l.refresh = k, l.ondrop = N, l.ondragend = T, C(i, s)
    }
    return e("../chart").define("radar", t), t
}), define("echarts/util/shape/chord", ["require", "zrender/tool/util", "zrender/shape/base", "zrender/shape"], function(e) {
    function n() {
        this.type = "chord"
    }
    var t = e("zrender/tool/util"), r = t.getContext();
    return n.prototype = {buildPath: function(e, t) {
            var n = Math.PI * 2, r = t.center[0], i = t.center[1], s = t.r, o = t.source0 / 180 * Math.PI, u = t.source1 / 180 * Math.PI, a = t.target0 / 180 * Math.PI, f = t.target1 / 180 * Math.PI, l = r + Math.cos(n - o) * s, c = i - Math.sin(n - o) * s, h = r + Math.cos(n - u) * s, p = i - Math.sin(n - u) * s, d = r + Math.cos(n - a) * s, v = i - Math.sin(n - a) * s, m = r + Math.cos(n - f) * s, g = i - Math.sin(n - f) * s;
            e.moveTo(l, c), e.arc(r, i, t.r, o, u, !1), e.bezierCurveTo((r - h) * .7 + h, (i - p) * .7 + p, (r - d) * .7 + d, (i - v) * .7 + v, d, v);
            if (t.source0 === t.target0 && t.source1 === t.target1)
                return;
            e.arc(r, i, t.r, a, f, !1), e.bezierCurveTo((r - m) * .7 + m, (i - g) * .7 + g, (r - l) * .7 + l, (i - c) * .7 + c, l, c)
        }, getRect: function() {
            return{x: 0, y: 0, width: 0, height: 0}
        }, isCover: function(e, t, i) {
            if (!r.isPointInPath)
                return!1;
            if (e.__needTransform && e._transform) {
                var s = [];
                matrix.invert(s, e._transform);
                var o = [t, i];
                matrix.mulVector(o, s, [t, i, 1]), t == o[0] && i == o[1] && (Math.abs(e.rotation[0]) > 1e-4 || Math.abs(e.position[0]) > 1e-4 || Math.abs(e.position[1]) > 1e-4 || Math.abs(e.scale[0] - 1) > 1e-4 || Math.abs(e.scale[1] - 1) > 1e-4 ? e.__needTransform = !0 : e.__needTransform = !1), t = o[0], i = o[1]
            }
            return r.beginPath(), n.prototype.buildPath.call(null, r, e.style), r.closePath(), r.isPointInPath(t, i)
        }}, e("zrender/shape/base").derive(n), e("zrender/shape").define("chord", new n), n
}), define("echarts/util/kwargs", [], function() {
    function e(e, t) {
        var n = new RegExp("(\\/\\*[\\w\\'\\,\\(\\)\\s\\r\\n\\*]*\\*\\/)|(\\/\\/[\\w\\s\\'][^\\n\\r]*$)|(<![\\-\\-\\s\\w\\>\\/]*>)", "gim"), r = new RegExp("\\s+", "gim"), i = new RegExp("function.*?\\((.*?)\\)", "i"), s = e.toString().replace(n, "").replace(r, "").match(i)[1].split(",");
        return t !== Object(t) && (t = {}), function() {
            var n = Array.prototype.slice.call(arguments), r = n[n.length - 1];
            r && r.constructor === Object ? n.pop() : r = {};
            for (var i = 0; i < s.length; i++) {
                var o = s[i];
                o in r ? n[i] = r[o] : o in t && n[i] === undefined && (n[i] = t[o])
            }
            return e.apply(this, n)
        }
    }
    return e
}), define("echarts/util/ndarray", ["require", "./kwargs"], function(e) {
    function d(e) {
        if (typeof e == "undefined")
            return"number";
        switch (Object.prototype.toString.call(e)) {
            case"[object Int32Array]":
                return"int32";
            case"[object Int16Array]":
                return"int16";
            case"[object Int8Array]":
                return"int8";
            case"[object Uint32Array]":
                return"uint32";
            case"[object Uint16Array]":
                return"uint16";
            case"[object Uint8Array]":
                return"uint8";
            case"[object Uint8ClampedArray]":
                return"uint8c";
            case"[object Float32Array]":
                return"float32";
            case"[object Float64Array]":
                return"float64";
            default:
                return"number"
            }
    }
    function m(e, t) {
        if (e.indexOf(":") >= 0) {
            var n = e.split(/\s*:\s*/), r = parseInt(n[2] || 1, 10), i, s;
            if (r === 0)
                throw new Error("Slice step cannot be zero");
            return r > 0 ? (i = parseInt(n[0] || 0, 10), s = parseInt(n[1] || t, 10)) : (i = parseInt(n[0] || t - 1, 10), s = parseInt(n[1] || -1, 10)), i < 0 && (i = t + i), s < 0 && n[1] && (s = t + s), r > 0 ? (i = Math.max(Math.min(t, i), 0), s = Math.max(Math.min(t, s), 0)) : (i = Math.max(Math.min(t - 1, i), -1), s = Math.max(Math.min(t - 1, s), -1)), [i, s, r]
        }
        var i = parseInt(e, 10);
        i < 0 && (i = t + i);
        if (i < 0 || i > t)
            throw new Error(N(e));
        return i = Math.max(Math.min(t - 1, i), 0), [i, i + 1, 1]
    }
    function g(e) {
        var t = e[0];
        for (var n = 1; n < e.length; n++)
            t *= e[n];
        return t
    }
    function y(e) {
        var t = 1, n = e[0];
        while (n instanceof Array)
            n = n[0], t++;
        return t
    }
    function b(e) {
        var t = [e.length], n = e[0];
        while (n instanceof Array)
            t.push(n.length), n = n[0];
        return t
    }
    function w(e, t) {
        if (t == e.length - 1)
            return 1;
        var n = e[t + 1];
        for (var r = t + 2; r < e.length; r++)
            n *= e[r];
        return n
    }
    function E(e) {
        var t = [], n = 1, r = g(e);
        for (var i = 0; i < e.length; i++)
            n *= e[i], t.push(r / n);
        return t
    }
    function S(e, t) {
        if (e.length !== t.length)
            return!1;
        for (var n = 0; n < e.length; n++)
            if (e[n] !== t[n])
                return!1;
        return!0
    }
    function x(e, t) {
        return"Shape (" + e.toString() + ") (" + t.toString() + ") could not be broadcast together"
    }
    function T(e) {
        return"Axis " + e + " out of bounds"
    }
    function N(e) {
        return"Index " + e + " out of bounds"
    }
    var t = e("./kwargs"), n = Array.prototype.slice;
    this.Int32Array = window.Int32Array || Array, this.Int16Array = window.Int16Array || Array, this.Int8Array = window.Int8Array || Array, this.Uint32Array = window.Uint32Array || Array, this.Uint16Array = window.Uint16Array || Array, this.Uint8Array = window.Uint8Array || Array, this.Float32Array = window.Float32Array || Array, this.Float64Array = window.Float64Array || Array;
    var r = {int32: this.Int32Array, int16: this.Int16Array, int8: this.Int8Array, uint32: this.Uint32Array, uint16: this.Uint16Array, uint8: this.Uint8Array, uint8c: this.Uint8ClampedArray, float32: this.Float32Array, float64: this.Float64Array, number: Array}, i = {int32: 4, int16: 2, int8: 1, uint32: 4, uint16: 2, uint8: 1, uint8c: 1, float32: 4, float64: 8, number: 1}, s = 0, o = 1, u = 2, a = 3, f = 4, l = 5, c = 6, h = 7, p = 8, v = function(e) {
        var t = arguments[arguments.length - 1];
        typeof t == "string" ? this._dtype = t : this._dtype = d(e);
        if (e && typeof e != "string") {
            if (e instanceof v)
                return e._dtype = this._dtype, e;
            typeof e.length != "undefined" ? this.initFromArray(e) : typeof e == "number" && this.initFromShape.apply(this, arguments)
        } else
            this._array = new r[this._dtype], this._shape = [0], this._size = 0
    };
    return v.prototype = {initFromArray: function(e) {
            function i(e, r, s) {
                var o = s.length;
                for (var u = 0; u < o; u++)
                    e < t - 1 ? i(e + 1, r, s[u]) : r[n++] = s[u]
            }
            var t = y(e), n = 0, s = b(e), o = g(s);
            return this._array = new r[this._dtype](o), i(0, this._array, e), this._shape = s, this._size = o, this
        }, initFromShape: function(e) {
            typeof e == "number" && (e = Array.prototype.slice.call(arguments));
            if (e) {
                var t = g(e);
                if (this._dtype === "number") {
                    this._array = [];
                    var n = this._array;
                    for (var i = 0; i < t; i++)
                        n[i] = 0
                } else
                    this._array = new r[this._dtype](t)
            }
            return this._shape = e, this._size = g(e), this
        }, fill: function(e) {
            var t = this._array;
            for (var n = 0; n < t.length; n++)
                t[n] = e;
            return this
        }, shape: function() {
            return this._shape.slice()
        }, size: function() {
            return this._size
        }, dtype: function() {
            return this._dtype
        }, dimension: function() {
            return this._shape.length
        }, strides: function() {
            var e = E(this._shape), t = i[this._dtype];
            for (var n = 0; n < e.length; n++)
                e[n] *= t;
            return e
        }, reshape: function(e) {
            typeof e == "number" && (e = Array.prototype.slice.call(arguments));
            if (!this._isShapeValid(e))
                throw new Error("Total size of new array must be unchanged");
            return this._shape = e, this
        }, _isShapeValid: function(e) {
            return g(e) === this._size
        }, resize: function(e) {
            typeof e == "number" && (e = Array.prototype.slice.call(arguments));
            var t = g(e);
            if (t < this._size)
                this._dtype === "number" && (this._array.length = t);
            else if (this._dtype === "number")
                for (var n = this._array.length; n < t; n++)
                    this._array[n] = 0;
            else {
                var i = new r[this._dtype](t), s = this._array;
                for (var n = 0; n < s.length; n++)
                    i[n] = s[n];
                this._array = i
            }
            return this._shape = e, this._size = t, this
        }, transpose: t(function(e, t) {
            var n = [];
            for (var r = 0; r < this._shape.length; r++)
                n.push(r);
            typeof e == "undefined" && (e = n.slice());
            for (var r = 0; r < e.length; r++)
                if (e[r] >= this._shape.length)
                    throw new Error(T(e[r]));
            if (e.length <= 1)
                return this;
            var i = n.slice();
            for (var r = 0; r < Math.floor(e.length / 2); r++)
                for (var s = e.length - 1; s >= Math.ceil(e.length / 2); s--)
                    i[e[r]] = e[s], i[e[s]] = e[r];
            return this._transposelike(i, t)
        }), swapaxes: t(function(e, t, n) {
            return this.transpose([e, t], n)
        }), rollaxis: t(function(e, t, n) {
            if (e >= this._shape.length)
                throw new Error(T(e));
            var r = [];
            for (var i = 0; i < this._shape.length; i++)
                r.push(i);
            return r.splice(e, 1), r.splice(t, 0, e), this._transposelike(r, n)
        }, {start: 0}), _transposelike: function(e, t) {
            function p(e, t, r) {
                var u = i[e], a = s[e], f = c[e];
                if (e < o - 1)
                    for (var l = 0; l < u; l++)
                        p(e + 1, t + a * l, r + f * l);
                else
                    for (var l = 0; l < u; l++)
                        h[r + l] = n[t + a * l]
            }
            var n = this._array, i = this._shape.slice(), s = E(this._shape), o = i.length, u = [], a = [];
            for (var f = 0; f < e.length; f++) {
                var l = e[f];
                a[f] = i[l], u[f] = s[l]
            }
            s = u, i = a, this._shape = i;
            var c = E(this._shape);
            t || (t = new v, t._shape = this._shape.slice(), t._dtype = this._dtype, t._size = this._size);
            var h = new r[this._dtype](this._size);
            return t._array = h, p(0, 0, 0), t
        }, repeat: t(function(e, t, n) {
            var r;
            typeof t == "undefined" ? (r = [this._size], t = 0) : r = this._shape.slice();
            var i = r.slice();
            r[t] *= e;
            if (!n)
                n = new v(this._dtype), n.initFromShape(r);
            else if (!S(r, n._shape))
                throw new Error(x(r, n._shape));
            var s = n._array, o = w(i, t), u = i[t], a = this._array, f = o * u;
            for (var l = 0; l < this._size; l += f)
                for (var c = 0; c < o; c++) {
                    var h = l + c, p = l * e + c;
                    for (var d = 0; d < u; d++) {
                        for (var m = 0; m < e; m++)
                            s[p] = a[h], p += o;
                        h += o
                    }
                }
            return n
        }), choose: function() {
            console.warn("TODO")
        }, take: function() {
            console.warn("TODO")
        }, tile: function() {
            console.warn("TODO")
        }, _withPreprocess1: function(e, t, n, r) {
            var i = this._array;
            if (!this._size)
                return;
            if (typeof e != "undefined") {
                e < 0 && (e = this._shape.length + e);
                if (e >= this._shape.length || e < 0)
                    throw new Error(T(e));
                var s = this._shape.slice();
                s.splice(e, 1);
                if (t && !S(s, t._shape))
                    throw new Error(x(s, t._shape));
                t || (t = new v(this._dtype), t.initFromShape(s));
                var o = t._array, u = w(this._shape, e), a = this._shape[e], f = u * a;
                return n.call(this, o, i, f, a, u), t
            }
            return r.call(this, i)
        }, _withPreprocess2: function(e, t, n, r) {
            var i = this._array;
            if (!this._size)
                return;
            if (t && !S(this._shape, t._shape))
                throw new Error(x(this._shape, t._shape));
            t || (t = new v(this._dtype), t.initFromShape(this._shape));
            var s = t._array;
            if (typeof e != "undefined") {
                e < 0 && (e = this._shape.length + e);
                if (e >= this._shape.length || e < 0)
                    throw new Error(T(e));
                if (e >= this._shape.length)
                    throw new Error(T(e));
                var o = w(this._shape, e), u = this._shape[e], a = o * u;
                n.call(this, s, i, a, u, o)
            } else
                t.reshape([this._size]), r.call(this, s, i);
            return t
        }, max: t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = u + o, f = t[a];
                        for (var l = 0; l < r; l++) {
                            var c = t[a];
                            c > f && (f = c), a += i
                        }
                        e[s++] = f
                    }
            }
            function t(e) {
                var t = e[0];
                for (var n = 1; n < this._size; n++)
                    e[n] > t && (t = e[n]);
                return t
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()), min: t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = u + o, f = t[a];
                        for (var l = 0; l < r; l++) {
                            var c = t[a];
                            c < f && (f = c), a += i
                        }
                        e[s++] = f
                    }
            }
            function t(e) {
                var t = e[0];
                for (var n = 1; n < this._size; n++)
                    e[n] < t && (t = e[n]);
                return t
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()), argmax: t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = 0, f = u + o, l = t[f];
                        for (var c = 0; c < r; c++) {
                            var h = t[f];
                            h > l && (l = h, a = c), f += i
                        }
                        e[s++] = a
                    }
            }
            function t(e) {
                var t = e[0], n = 0;
                for (var r = 1; r < this._size; r++)
                    e[r] > t && (n = r, t = e[r]);
                return n
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()), argmin: t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = 0, f = u + o, l = t[f];
                        for (var c = 0; c < r; c++) {
                            var h = t[f];
                            h < l && (l = h, a = c), f += i
                        }
                        e[s++] = a
                    }
            }
            function t(e) {
                var t = e[0], n = 0;
                for (var r = 1; r < this._size; r++)
                    e[r] < t && (n = r, t = e[r]);
                return n
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()), sum: t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = 0, f = u + o;
                        for (var l = 0; l < r; l++)
                            a += t[f], f += i;
                        e[s++] = a
                    }
            }
            function t(e) {
                var t = 0;
                for (var n = 0; n < this._size; n++)
                    t += e[n];
                return t
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()), prod: t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = 1, f = u + o;
                        for (var l = 0; l < r; l++)
                            a *= t[f], f += i;
                        e[s++] = a
                    }
            }
            function t(e) {
                var t = 1;
                for (var n = 0; n < this._size; n++)
                    t *= e[n];
                return t
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()), mean: t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = 0, f = u + o;
                        for (var l = 0; l < r; l++)
                            a += t[f], f += i;
                        var c = a / r;
                        e[s++] = c
                    }
            }
            function t(e) {
                var t = 0, n = e.length;
                for (var r = 0; r < n; r++)
                    t += e[r];
                var i = t / n;
                return i
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()), "var": t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = 0, f = u + o;
                        for (var l = 0; l < r; l++)
                            a += t[f], f += i;
                        var c = a / r, h = 0;
                        f = u + o;
                        for (var l = 0; l < r; l++) {
                            var p = t[f] - c;
                            h += p * p, f += i
                        }
                        e[s++] = h / r
                    }
            }
            function t(e) {
                var t = 0, n = e.length;
                for (var r = 0; r < n; r++)
                    t += e[r];
                var i = t / n, s = 0;
                for (var r = 0; r < n; r++) {
                    var o = e[r] - i;
                    s += o * o
                }
                return s / n
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()), std: t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = 0, f = u + o;
                        for (var l = 0; l < r; l++)
                            a += t[f], f += i;
                        var c = a / r, h = 0;
                        f = u + o;
                        for (var l = 0; l < r; l++) {
                            var p = t[f] - c;
                            h += p * p, f += i
                        }
                        e[s++] = Math.sqrt(h / r)
                    }
            }
            function t(e) {
                var t = 0, n = e.length;
                for (var r = 0; r < n; r++)
                    t += e[r];
                var i = t / n, s = 0;
                for (var r = 0; r < n; r++) {
                    var o = e[r] - i;
                    s += o * o
                }
                return Math.sqrt(s / n)
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()), ptp: t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = o + u, f = t[a], l = t[a];
                        for (var c = 0; c < r; c++) {
                            var h = t[a];
                            h < f && (f = h), h > l && (l = h), a += i
                        }
                        e[s++] = l - f
                    }
            }
            function t(e) {
                var t = e[0], n = e[0];
                for (var r = 1; r < this._size; r++)
                    e[r] < t && (t = e[r]), e[r] > n && (n = e[r]);
                return n - t
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()), sort: t(function(e, t) {
            e < 0 && (e = this._shape.length + e);
            var n;
            t === "ascending" ? n = function(e, t) {
                return e - t
            } : t === "descending" && (n = function(e, t) {
                return t - e
            });
            var r = this._array, i = w(this._shape, e), s = this._shape[e], o = i * s, u = new Array(s);
            for (var a = 0; a < this._size; a += o)
                for (var f = 0; f < i; f++) {
                    var l = a + f;
                    for (var c = 0; c < s; c++)
                        u[c] = r[l], l += i;
                    u.sort(n);
                    var l = a + f;
                    for (var c = 0; c < s; c++)
                        r[l] = u[c], l += i
                }
            return this
        }, {axis: -1, order: "ascending"}), argsort: t(function(e, t, n) {
            e < 0 && (e = this._shape.length + e);
            if (!this._size)
                return;
            if (n && !S(this._shape, n._shape))
                throw new Error(x(this._shape, n._shape));
            n || (n = new v(this._dtype), n.initFromShape(this._shape));
            var r = n._array, i;
            t === "ascending" ? i = function(e, t) {
                return f[e] - f[t]
            } : t === "descending" && (i = function(e, t) {
                return f[t] - f[e]
            });
            var s = this._array, o = w(this._shape, e), u = this._shape[e], a = o * u, f = new Array(u), l = new Array(u);
            for (var c = 0; c < this._size; c += a)
                for (var h = 0; h < o; h++) {
                    var p = c + h;
                    for (var d = 0; d < u; d++)
                        f[d] = s[p], l[d] = d, p += o;
                    l.sort(i);
                    var p = c + h;
                    for (var d = 0; d < u; d++)
                        r[p] = l[d], p += o
                }
            return n
        }, {axis: -1, order: "ascending"}), cumsum: t(function() {
            function e(e, t, n, r, i) {
                for (var s = 0; s < this._size; s += n)
                    for (var o = 0; o < i; o++) {
                        var u = s + o, a = u;
                        e[u] = t[u];
                        for (var f = 1; f < r; f++)
                            a = u, u += i, e[u] = e[a] + t[u]
                    }
            }
            function t(e, t) {
                e[0] = t[0];
                for (var n = 1; n < e.length; n++)
                    e[n] = e[n - 1] + t[n]
            }
            return function(n, r) {
                return this._withPreprocess2(n, r, e, t)
            }
        }()), cumprod: t(function() {
            function e(e, t, n, r, i) {
                for (var s = 0; s < this._size; s += n)
                    for (var o = 0; o < i; o++) {
                        var u = s + o, a = u;
                        e[u] = t[u];
                        for (var f = 1; f < r; f++)
                            a = u, u += i, e[u] = e[a] * t[u]
                    }
            }
            function t(e, t) {
                e[0] = t[0];
                for (var n = 1; n < e.length; n++)
                    e[n] = e[n - 1] * t[n]
            }
            return function(n, r) {
                return this._withPreprocess2(n, r, e, t)
            }
        }()), dot: function() {
            console.warn("TODO")
        }, map: function(e, t) {
            var n = this._array, r = this._array, i = n[0], s = n[0], o = this._size;
            for (var u = 1; u < o; u++) {
                var a = n[u];
                a < i && (i = a), a > s && (s = a)
            }
            var f = s - i, l = t - e;
            for (var u = 0; u < o; u++)
                if (f === 0)
                    r[u] = e;
                else {
                    var a = n[u], c = (a - i) / f;
                    r[u] = l * c + e
                }
            return this
        }, add: function(e, t) {
            return this.binaryOperation(this, e, s, t)
        }, sub: function(e, t) {
            return this.binaryOperation(this, e, o, t)
        }, mul: function(e, t) {
            return this.binaryOperation(this, e, u, t)
        }, div: function(e, t) {
            return this.binaryOperation(this, e, a, t)
        }, mod: function(e, t) {
            return this.binaryOperation(this, e, f, t)
        }, and: function(e, t) {
            return this.binaryOperation(this, e, l, t)
        }, or: function(e, t) {
            return this.binaryOperation(this, e, c, t)
        }, xor: function(e, t) {
            return this.binaryOperation(this, e, h, t)
        }, equal: function(e) {
            return this.binaryOperation(this, e, p, out)
        }, binaryOperation: function(e, t, n, r) {
            var i = [], d = typeof e == "number", m = typeof t == "number";
            if (d)
                i = t._shape.slice();
            else if (m)
                i = e._shape.slice();
            else {
                var g = e._shape.length - 1, y = t._shape.length - 1, b = e, E = t;
                while (g >= 0 && y >= 0) {
                    if (e._shape[g] == 1)
                        i.unshift(t._shape[y]), b = e.repeat(t._shape[y], g);
                    else if (t._shape[y] == 1)
                        i.unshift(e._shape[g]), E = t.repeat(e._shape[g], y);
                    else {
                        if (t._shape[y] != e._shape[g])
                            throw new Error(x(e._shape, t._shape));
                        i.unshift(e._shape[g])
                    }
                    g--, y--
                }
                for (var T = g; T >= 0; T--)
                    i.unshift(e._shape[T]);
                for (var T = y; T >= 0; T--)
                    i.unshift(t._shape[T]);
                e = b, t = E
            }
            if (!r)
                r = new v(this._dtype), r.initFromShape(i);
            else if (!S(i, r._shape))
                throw new Error(x(i, r._shape));
            var N = r._array, C, k, L, A;
            d ? (C = t._shape.length - 1, k = !1, L = e, A = t._array) : m ? (C = e._shape.length - 1, k = !0, A = t, L = e._array) : (C = Math.abs(e._shape.length - t._shape.length), k = e._shape.length >= t._shape.length, L = e._array, A = t._array);
            var O = w(i, C), M = i[C], _ = O * M, D = r._size / _, P, H, B, j = 0;
            if (k)
                if (m)
                    for (var F = 0; F < D; F++)
                        for (var T = 0; T < _; T++) {
                            P = L[j], H = A;
                            switch (n) {
                                case s:
                                    B = P + H;
                                    break;
                                case o:
                                    B = P - H;
                                    break;
                                case u:
                                    B = P * H;
                                    break;
                                case a:
                                    B = P / H;
                                    break;
                                case f:
                                    B = P % H;
                                    break;
                                case l:
                                    B = P & H;
                                    break;
                                case c:
                                    B = P | H;
                                    break;
                                case h:
                                    B = P ^ H;
                                    break;
                                case p:
                                    B = P == H;
                                    break;
                                default:
                                    throw new Error("Unkown operation " + n)
                            }
                            N[j] = B, j++
                        }
                else
                    for (var F = 0; F < D; F++)
                        for (var T = 0; T < _; T++) {
                            P = L[j], H = A[T];
                            switch (n) {
                                case s:
                                    B = P + H;
                                    break;
                                case o:
                                    B = P - H;
                                    break;
                                case u:
                                    B = P * H;
                                    break;
                                case a:
                                    B = P / H;
                                    break;
                                case f:
                                    B = P % H;
                                    break;
                                case l:
                                    B = P & H;
                                    break;
                                case c:
                                    B = P | H;
                                    break;
                                case h:
                                    B = P ^ H;
                                    break;
                                case p:
                                    B = P == H;
                                    break;
                                default:
                                    throw new Error("Unkown operation " + n)
                            }
                            N[j] = B, j++
                        }
            else if (d)
                for (var F = 0; F < D; F++)
                    for (var T = 0; T < _; T++) {
                        P = L, H = A[j];
                        switch (n) {
                            case s:
                                B = P + H;
                                break;
                            case o:
                                B = P - H;
                                break;
                            case u:
                                B = P * H;
                                break;
                            case a:
                                B = P / H;
                                break;
                            case f:
                                B = P % H;
                                break;
                            case l:
                                B = P & H;
                                break;
                            case c:
                                B = P | H;
                                break;
                            case h:
                                B = P ^ H;
                                break;
                            case p:
                                B = P == H;
                                break;
                            default:
                                throw new Error("Unkown operation " + n)
                        }
                        N[j] = B, j++
                    }
            else
                for (var F = 0; F < D; F++)
                    for (var T = 0; T < _; T++) {
                        P = L[j], H = A[T];
                        switch (n) {
                            case s:
                                B = P + H;
                                break;
                            case o:
                                B = P - H;
                                break;
                            case u:
                                B = P * H;
                                break;
                            case a:
                                B = P / H;
                                break;
                            case f:
                                B = P % H;
                                break;
                            case l:
                                B = P & H;
                                break;
                            case c:
                                B = P | H;
                                break;
                            case h:
                                B = P ^ H;
                                break;
                            case p:
                                B = P == H;
                                break;
                            default:
                                throw new Error("Unkown operation " + n)
                        }
                        N[j] = B, j++
                    }
            return r
        }, neg: function() {
            var e = this._array;
            for (var t = 0; t < this._size; t++)
                e[t] = -e[t];
            return this
        }, sin: function() {
            return this._mathAdapter(Math.sin)
        }, cos: function() {
            return this._mathAdapter(Math.cos)
        }, tan: function() {
            return this._mathAdapter(Math.tan)
        }, abs: function() {
            return this._mathAdapter(Math.abs)
        }, log: function() {
            return this._mathAdapter(Math.log)
        }, sqrt: function() {
            return this._mathAdapter(Math.sqrt)
        }, ceil: function() {
            return this._mathAdapter(Math.ceil)
        }, floor: function() {
            return this._mathAdapter(Math.floor)
        }, pow: function(e) {
            var t = this._array;
            for (var n = 0; n < this._size; n++)
                t[n] = Math.pow(t[n], e);
            return this
        }, _mathAdapter: function(e) {
            var t = this._array;
            for (var n = 0; n < this._size; n++)
                t[n] = e(t[n]);
            return this
        }, round: function(e) {
            e = Math.floor(e || 0);
            var t = Math.pow(10, e), n = this._array;
            if (e === 0)
                for (var r = 0; r < this._size; r++)
                    n[r] = Math.round(n[r]);
            else
                for (var r = 0; r < this._size; r++)
                    n[r] = Math.round(n[r] * t) / t;
            return this
        }, clip: function(e, t) {
            var n = this._array;
            for (var r = 0; r < this._size; r++)
                n[r] = Math.max(Math.min(n[r], t), e);
            return this
        }, get: function(e, t) {
            function l(e, t) {
                var r = i[e], s = n[e];
                if (e < o - 1)
                    if (r[2] > 0)
                        for (var c = r[0]; c < r[1]; c += r[2])
                            l(e + 1, t + s * c);
                    else
                        for (var c = r[0]; c > r[1]; c += r[2])
                            l(e + 1, t + s * c);
                else if (r[2] > 0)
                    for (var c = r[0]; c < r[1]; c += r[2])
                        for (var h = 0; h < s; h++)
                            u[f++] = a[c * s + h + t];
                else
                    for (var c = r[0]; c > r[1]; c += r[2])
                        for (var h = 0; h < s; h++)
                            u[f++] = a[c * s + h + t]
            }
            typeof e == "number" && (e = e.toString());
            var n = E(this._shape), r = this._parseRanges(e), i = r[0], s = r[1];
            if (i.length > this._shape.length)
                throw new Error("Too many indices");
            var o = i.length, u;
            s.length ? (t = new v(this._dtype), t.initFromShape(s), u = t._array) : u = [];
            var a = this._array, f = 0;
            return l(0, 0), s.length ? t : u[0]
        }, set: function(e, t) {
            typeof e == "number" && (e = e.toString());
            var n = E(this._shape), r = this._parseRanges(e), i = r[0], s = r[1];
            if (i.length > this._shape.length)
                throw new Error("Too many indices");
            var o = typeof t == "number", u = i.length, a = this._array;
            if (o)
                var f = t;
            else {
                if (!S(s, t.shape()))
                    throw new Error(x(s, t.shape()));
                var f = t._array
            }
            var l = 0, c = function(e, t) {
                var r = i[e], s = n[e];
                if (e < u - 1)
                    if (r[2] > 0)
                        for (var h = r[0]; h < r[1]; h += r[2])
                            c(e + 1, t + s * h);
                    else
                        for (var h = r[0]; h > r[1]; h += r[2])
                            c(e + 1, t + s * h);
                else if (r[2] > 0)
                    for (var h = r[0]; h < r[1]; h += r[2])
                        for (var p = 0; p < s; p++)
                            o ? a[h * s + p + t] = f : a[h * s + p + t] = f[l++];
                else
                    for (var h = r[0]; h > r[1]; h += r[2])
                        for (var p = 0; p < s; p++)
                            o ? a[h * s + p + t] = f : a[h * s + p + t] = f[l++]
            };
            return c(0, 0), this
        }, insert: t(function(e, t, n) {
            var i = this._array, s = !1;
            typeof e == "number" && (e = [e], s = !0), typeof t == "number" ? t = new v([t]) : t instanceof Array && (t = new v(t)), typeof n == "undefined" && (this._shape = [this._size], n = 0);
            var o = e[0], u = this._shape[n];
            for (var a = 0; a < e.length; a++) {
                e[a] < 0 && (e[a] = u + e[a]);
                if (e[a] > u)
                    throw new Error(N(e[a]));
                if (e[a] < o)
                    throw new Error("Index must be in ascending order");
                o = e[a]
            }
            var f = this._shape.slice();
            s ? f.splice(n, 1) : f[n] = e.length;
            var l = t._shape, c = l.length - 1, h = f.length - 1, p = t;
            while (c >= 0 && h >= 0) {
                if (l[c] === 1)
                    p = t.repeat(f[h], c);
                else if (l[c] !== f[h])
                    throw new Error(x(l, f));
                c--, h--
            }
            t = p;
            var d = w(this._shape, n), u = this._shape[n], m = u * d, y = this._size / m, b = e.length, E = new Uint32Array(y * b), S = 0;
            for (var T = 0; T < this._size; T += m)
                for (var a = 0; a < b; a++) {
                    var C = e[a];
                    E[S++] = T + C * d
                }
            var k = this._shape.slice();
            k[n] += e.length;
            var L = g(k);
            if (this._array.length < L)
                var i = new r[this._dtype](L);
            else
                var i = this._array;
            var A = this._array, O = t._array, M = E.length - 1, _ = this._size, D = E[M], P = L - 1, H = t._size - 1;
            while (M >= 0) {
                for (var a = _ - 1; a >= D; a--)
                    i[P--] = A[a];
                _ = D, D = E[--M];
                for (var a = 0; a < d; a++)
                    H < 0 && (H = t._size - 1), i[P--] = O[H--]
            }
            for (var a = _ - 1; a >= 0; a--)
                i[P--] = A[a];
            return this._array = i, this._shape = k, this._size = L, this
        }), append: function() {
            console.warn("TODO")
        }, "delete": t(function(e, t) {
            var n = this._array;
            typeof e == "number" && (e = [e]);
            var r = this._size;
            typeof t == "undefined" && (this._shape = [r], t = 0);
            var i = w(this._shape, t), s = this._shape[t], o = i * s, u = 0;
            for (var a = 0; a < r; a += o) {
                var f = 0, l = e[0], c = 0;
                while (c < e.length) {
                    l < 0 && (l += s);
                    if (l > s)
                        throw new Error(N(l));
                    if (l < f)
                        throw new Error("Index must be in ascending order");
                    for (var h = f; h < l; h++)
                        for (var p = 0; p < i; p++)
                            n[u++] = n[h * i + p + a];
                    f = l + 1, l = e[++c]
                }
                for (var h = f; h < s; h++)
                    for (var p = 0; p < i; p++)
                        n[u++] = n[h * i + p + a]
            }
            return this._shape[t] -= e.length, this._size = g(this._shape), this
        }), _parseRanges: function(e) {
            var t = e.split(/\s*,\s*/), n = [], r = [], i = 0;
            for (var s = 0; s < t.length; s++)
                if (t[s] === "...") {
                    var o = this._shape.length - (t.length - s);
                    while (i <= o)
                        n.push([0, this._shape[i], 1]), r.push(this._shape[i]), i++
                } else {
                    var u = m(t[s], this._shape[i]);
                    n.push(u);
                    if (t[s].indexOf(":") >= 0) {
                        var a = Math.floor((u[1] - u[0]) / u[2]);
                        a = a < 0 ? 0 : a, r.push(a)
                    }
                    i++
                }
            for (; i < this._shape.length; i++)
                r.push(this._shape[i]);
            return[n, r]
        }, toArray: function() {
            function i(s, o) {
                var u = n[s];
                for (var a = 0; a < u; a++)
                    s < r - 1 ? i(s + 1, o[a] = []) : o[a] = e[t++]
            }
            var e = this._array, t = 0, n = this._shape, r = n.length, s = [];
            return i(0, s), s
        }, copy: function() {
            var e = new v;
            return e._array = n.call(this._array), e._shape = this._shape.slice(), e._dtype = this._dtype, e._size = this._size, e
        }, constructor: v}, v.range = t(function(e, t, i, s) {
        var o = n.call(arguments), u = o[o.length - 1];
        if (typeof u == "string") {
            var s = u;
            o.pop()
        }
        o.length === 1 ? (t = o[0], i = 1, e = 0) : o.length == 2 && (i = 1), s = s || "number";
        var a = new r[s](Math.ceil((t - e) / i)), f = 0;
        for (var l = e; l < t; l += i)
            a[f++] = l;
        var c = new v;
        return c._array = a, c._shape = [a.length], c._dtype = s, c._size = a.length, c
    }), v.zeros = t(function(e, t) {
        var n = new v(t);
        return n.initFromShape(e), n
    }), v
}), define("echarts/chart/chord", ["require", "../util/shape/chord", "../component/base", "./calculableBase", "../util/ecData", "zrender/tool/util", "zrender/tool/vector", "../util/ndarray", "../chart"], function(e) {
    function n(n, r, i, s, o) {
        function F() {
            u.selectedMap = {}, w = [], b = null;
            var e = [], n = 0;
            for (var r = 0, s = g.length; r < s; r++)
                if (g[r].type === u.type) {
                    b || (b = g[r], u.reformOption(b));
                    var a = m(g[r].name);
                    u.selectedMap[g[r].name] = a;
                    if (!a)
                        continue;
                    w.push(g[r]), u.buildMark(g[r], r, o), e.push(g[r].matrix), n++
                }
            if (!b)
                return;
            if (!w.length)
                return;
            var f = i.getWidth(), l = i.getHeight(), c = Math.min(f, l);
            E = b.data, S = b.startAngle, S %= 360, S < 0 && (S += 360), x = b.clockWise, T = u.parsePercent(b.radius[0], c / 2), N = u.parsePercent(b.radius[1], c / 2), C = b.padding, k = b.sort, L = b.sortSub, O = b.showScale, M = b.showScaleText, A = [u.parsePercent(b.center[0], f), u.parsePercent(b.center[1], l)];
            var h = b.itemStyle.normal.chordStyle.lineStyle.width - b.itemStyle.normal.lineStyle.width;
            _ = h / t / T / Math.PI * 180, D = new p(e), D = D._transposelike([1, 2, 0]);
            var d = I(D, E);
            D = d[0], E = d[1];
            var v = D.shape();
            if (v[0] !== v[1] || v[0] !== E.length)
                throw new Error("Data not valid");
            if (v[0] === 0 || v[2] === 0)
                return;
            D.reshape(v[0], v[1] * v[2]);
            var y = D.sum(1), B = y.mul(1 / y.sum()), j = v[0], F = v[1] * v[2], W = B.mul(360 - C * j), X = D.div(D.sum(1).reshape(j, 1));
            X = X.mul(W.sub(_ * 2).reshape(j, 1));
            switch (k) {
                case"ascending":
                case"descending":
                    var V = W.argsort(0, k);
                    W.sort(0, k), y.sort(0, k);
                    break;
                default:
                    var V = p.range(v[0])
            }
            switch (L) {
                case"ascending":
                case"descending":
                    var $ = X.argsort(1, L);
                    X.sort(1, L);
                    break;
                default:
                    var $ = p.range(F).reshape(1, F).repeat(j, 0)
            }
            var J = V.toArray(), K = W.toArray(), Q = $.toArray(), G = X.toArray(), Y = y.toArray(), Z = [], et = (new p(j, F)).toArray(), tt = [], nt = 0, rt = 0;
            for (var r = 0; r < j; r++) {
                var it = J[r];
                tt[it] = Y[r], rt = nt + K[r], Z[it] = [nt, rt];
                var st = nt + _, ot = st;
                for (var ut = 0; ut < F; ut++) {
                    ot = st + G[it][ut];
                    var at = Q[it][ut];
                    et[it][at] = [st, ot], st = ot
                }
                nt = rt + C
            }
            H = (new p(j, j, n)).toArray(), P = [], q(Z, tt), et = (new p(et)).reshape(j, j, n, 2).toArray(), R(et, D.reshape(v).toArray());
            var d = z(tt);
            O && U(d[0], d[1], Z, (new p(d[0])).sum() / (360 - C * j))
        }
        function I(e, t) {
            var n = [], r = [];
            for (var i = 0; i < t.length; i++) {
                var s = t[i].name;
                u.selectedMap[s] = m(s), u.selectedMap[s] ? r.push(t[i]) : n.push(i)
            }
            n.length && (e = e["delete"](n, 0), e = e["delete"](n, 1));
            if (!e.size())
                return[e, r];
            n = [];
            var o = [], a = e.shape();
            e.reshape(a[0], a[1] * a[2]);
            var f = e.sum(1).toArray();
            e.reshape(a);
            for (var i = 0; i < r.length; i++)
                f[i] === 0 ? n.push(i) : o.push(r[i]);
            return n.length && (e = e["delete"](n, 0), e = e["delete"](n, 1)), [e, o]
        }
        function q(e, t) {
            function f(e) {
                return function() {
                    s && clearTimeout(s), s = setTimeout(function() {
                        for (var t = 0; t < n; t++) {
                            P[t].style.opacity = t === e ? 1 : .1, i.modShape(P[t].id, P[t]);
                            for (var s = 0; s < n; s++)
                                for (var o = 0; o < r; o++) {
                                    var u = H[t][s][o];
                                    u && (u.style.opacity = t === e || s === e ? .5 : .03, i.modShape(u.id, u))
                                }
                        }
                        i.refresh()
                    }, 50)
                }
            }
            function c() {
                return function() {
                    s && clearTimeout(s), s = setTimeout(function() {
                        for (var e = 0; e < n; e++) {
                            P[e].style.opacity = 1, i.modShape(P[e].id, P[e]);
                            for (var t = 0; t < n; t++)
                                for (var s = 0; s < r; s++) {
                                    var o = H[e][t][s];
                                    o && (o.style.opacity = .5, i.modShape(o.id, o))
                                }
                        }
                        i.refresh()
                    }, 50)
                }
            }
            var n = E.length, r = w.length, s, o = u.query(b, "itemStyle.normal.label.show"), a = u.query(b, "itemStyle.normal.label.color");
            for (var p = 0; p < n; p++) {
                var d = E[p], m = e[p], g = (x ? 360 - m[1] : m[0]) + S, C = (x ? 360 - m[0] : m[1]) + S, k = {id: i.newShapeId(u.type), shape: "sector", zlevel: y, style: {x: A[0], y: A[1], r0: T, r: N, startAngle: g, endAngle: C, brushType: "fill", opacity: 1, color: v(d.name)}, highlightStyle: {brushType: "fill"}};
                k.style.lineWidth = u.deepQuery([d, b], "itemStyle.normal.lineStyle.width"), k.highlightStyle.lineWidth = u.deepQuery([d, b], "itemStyle.emphasis.lineStyle.width"), k.style.strokeColor = u.deepQuery([d, b], "itemStyle.normal.lineStyle.color"), k.highlightStyle.strokeColor = u.deepQuery([d, b], "itemStyle.emphasis.lineStyle.color"), k.style.lineWidth > 0 && (k.style.brushType = "both"), k.highlightStyle.lineWidth > 0 && (k.highlightStyle.brushType = "both"), l.pack(k, w[0], 0, t[p], 0, d.name);
                if (o) {
                    var L = [g + C] / 2;
                    L %= 360;
                    var O = L <= 90 || L >= 270;
                    L = L * Math.PI / 180;
                    var _ = [Math.cos(L), -Math.sin(L)], D = M ? 45 : 20, B = h.scale([], _, N + D);
                    h.add(B, B, A);
                    var j = {shape: "text", id: i.newShapeId(u.type), zlevel: y - 1, hoverable: !1, style: {x: B[0], y: B[1], text: d.name, textAlign: O ? "left" : "right", color: a}};
                    j.style.textColor = u.deepQuery([d, b], "itemStyle.normal.label.textStyle.color") || "#fff", j.style.textFont = u.getFont(u.deepQuery([d, b], "itemStyle.normal.label.textStyle")), i.addShape(j), u.shapeList.push(j)
                }
                k.onmouseover = f(p), k.onmouseout = c(), u.shapeList.push(k), P.push(k), i.addShape(k)
            }
        }
        function R(e, t) {
            var n = e.length;
            if (!n)
                return;
            var r = e[0][0].length, s = b.itemStyle.normal.chordStyle.lineStyle, o = b.itemStyle.emphasis.chordStyle.lineStyle;
            for (var a = 0; a < n; a++)
                for (var f = 0; f < n; f++)
                    for (var c = 0; c < r; c++) {
                        if (H[f][a][c])
                            continue;
                        var h = e[a][f][c][0], p = e[f][a][c][0], d = e[a][f][c][1], m = e[f][a][c][1];
                        if (h - m === 0 || p - m === 0) {
                            H[a][f][c] = null;
                            continue
                        }
                        var g;
                        r === 1 ? d - h <= m - p ? g = v(E[a].name) : g = v(E[f].name) : g = v(w[c].name);
                        var N = x ? h : 360 - d, C = x ? d : 360 - h, k = x ? p : 360 - m, L = x ? m : 360 - p, O = {id: i.newShapeId(u.type), shape: "chord", zlevel: y, style: {center: A, r: T, source0: N - S, source1: C - S, target0: k - S, target1: L - S, brushType: "both", opacity: .5, color: g, lineWidth: s.width, strokeColor: s.color}, highlightStyle: {brushType: "both", lineWidth: o.width, strokeColor: o.color}};
                        l.pack(O, w[c], c, t[a][f][c], 0, E[a].name, E[f].name, t[f][a][c]), H[a][f][c] = O, u.shapeList.push(O), i.addShape(O)
                    }
        }
        function U(e, t, n, r) {
            for (var s = 0; s < n.length; s++) {
                var o = n[s][0], a = n[s][1], f = o;
                while (f < a) {
                    var l = ((x ? 360 - f : f) + S) / 180 * Math.PI, c = [Math.cos(l), -Math.sin(l)], d = h.scale([], c, N + 1);
                    h.add(d, d, A);
                    var v = h.scale([], c, N + B);
                    h.add(v, v, A);
                    var m = {shape: "line", id: i.newShapeId(u.type), zlevel: y - 1, hoverable: !1, style: {xStart: d[0], yStart: d[1], xEnd: v[0], yEnd: v[1], lineCap: "round", brushType: "stroke", strokeColor: "#666"}};
                    u.shapeList.push(m), i.addShape(m), f += j
                }
                if (!M)
                    continue;
                var g = o, b = r * 5 * j, w = p.range(0, e[s], b).toArray();
                while (g < a) {
                    var l = x ? 360 - g : g;
                    l = (l + S) % 360;
                    var E = l <= 90 || l >= 270, T = {shape: "text", id: i.newShapeId(u.type), zlevel: y - 1, hoverable: !1, style: {x: E ? N + B + 4 : -N - B - 4, y: 0, text: Math.round(w.shift() * 10) / 10 + t, textAlign: E ? "left" : "right"}, position: A.slice(), rotation: E ? [l / 180 * Math.PI, 0, 0] : [(l + 180) / 180 * Math.PI, 0, 0]};
                    u.shapeList.push(T), i.addShape(T), g += j * 5
                }
            }
        }
        function z(e) {
            var t = [], n = (new p(e)).max(), r, i;
            n > 1e4 ? (r = "k", i = .001) : n > 1e7 ? (r = "m", i = 1e-6) : n > 1e10 ? (r = "b", i = 1e-9) : (r = "", i = 1);
            for (var s = 0; s < e.length; s++)
                t[s] = e[s] * i;
            return[t, r]
        }
        function W(e, t) {
            o = t, X(e)
        }
        function X(e) {
            e && (s = e, g = s.series), u.clear(), d = o.legend;
            if (d)
                v = d.getColor, m = d.isSelected;
            else {
                var t = {}, n = {}, r = 0;
                v = function(e) {
                    if (n[e])
                        return n[e];
                    t[e] === undefined && (t[e] = r++);
                    for (var s = 0; s < w.length; s++)
                        if (w[s].name === e) {
                            n[e] = u.query(w[s], "itemStyle.normal.color");
                            break
                        }
                    if (!n[e]) {
                        var o = E.length;
                        for (var s = 0; s < o; s++)
                            if (E[s].name === e) {
                                n[e] = u.query(E[s], "itemStyle.normal.color");
                                break
                            }
                    }
                    return n[e] || (n[e] = i.getColor(t[e])), n[e]
                }, m = function() {
                    return!0
                }
            }
            F()
        }
        function V(e) {
            var t = c.merge;
            e = t(e || {}, n.chord, {overwrite: !1, recursive: !0}), e.itemStyle.normal.label.textStyle = t(e.itemStyle.normal.label.textStyle || {}, n.textStyle, {overwrite: !1, recursive: !0})
        }
        var u = this, a = e("../component/base");
        a.call(this, n, i);
        var f = e("./calculableBase");
        f.call(this, i, s);
        var l = e("../util/ecData"), c = e("zrender/tool/util"), h = e("zrender/tool/vector"), p = e("../util/ndarray"), d, v, m, g;
        this.type = n.CHART_TYPE_CHORD;
        var y = u.getZlevelBase(), b, w = [], E, S, x, T, N, C, k, L, A, O, M, _ = 0, D, P = [], H = [], B = 4, j = 4;
        u.init = W, u.refresh = X, u.reformOption = V, W(s, o)
    }
    e("../util/shape/chord");
    var t = window.devicePixelRatio || 1;
    return e("../chart").define("chord", n), n
}), define("echarts/chart/force", ["require", "../component/base", "./calculableBase", "../util/ecData", "zrender/config", "zrender/tool/event", "zrender/tool/util", "zrender/tool/vector", "../util/ndarray", "../chart"], function(e) {
    function r(r, o, u, a, f) {
        function Y() {
            y = f.legend, I = 1, $ = u.getWidth(), J = u.getHeight(), K = [$ / 2, J / 2];
            var e;
            for (var t = 0, n = w.length; t < n; t++) {
                var i = w[t];
                if (i.type === r.CHART_TYPE_FORCE) {
                    w[t] = b.reformOption(w[t]), e = w[t].name || "", b.selectedMap[e] = y ? y.isSelected(e) : !0;
                    if (!b.selectedMap[e])
                        continue;
                    b.buildMark(w[t], t, f), E = i;
                    var s = b.query(i, "minRadius"), o = b.query(i, "maxRadius");
                    X = b.query(i, "attractiveness"), R = b.query(i, "density"), U = b.query(i, "initSize"), W = b.query(i, "centripetal"), z = b.query(i, "coolDown"), T = b.query(i, "categories");
                    for (var a = 0, l = T.length; a < l; a++)
                        T[a].name && (y ? b.selectedMap[a] = y.isSelected(T[a].name) : b.selectedMap[a] = !0);
                    k = b.query(i, "itemStyle.normal.linkStyle"), L = b.query(i, "itemStyle.emphasis.linkStyle"), N = b.query(i, "itemStyle.normal.nodeStyle"), C = b.query(i, "itemStyle.emphasis.nodeStyle"), A = b.query(i, "nodes"), O = v.clone(b.query(i, "links")), Z(A, O), B = [], j = [], F = [], D = [], P = [], F = [], S = [], x = [];
                    var c = $ * J;
                    q = .5 / X * Math.sqrt(c / M.length), tt(M, _), et(M, s, o)
                }
            }
        }
        function Z(e, t) {
            var n = [], r = 0;
            M = s(e, function(e, t) {
                if (!e)
                    return;
                if (e.ignore)
                    return;
                if (b.selectedMap[e.category])
                    return n[t] = r++, !0;
                n[t] = -1
            });
            var i, o, u;
            _ = s(t, function(e, t) {
                return i = e.source, o = e.target, u = !0, n[i] >= 0 ? e.source = n[i] : u = !1, n[o] >= 0 ? e.target = n[o] : u = !1, e.rawIndex = t, u
            })
        }
        function et(e, t, r) {
            var s = [], o = e.length;
            for (var a = 0; a < o; a++) {
                var f = e[a];
                f.value !== undefined ? s.push(f.value) : s.push(1)
            }
            var l = new g(s);
            s = l.map(t, r).toArray();
            var c = l.max();
            c !== 0 && (D = l.mul(1 / c, l).toArray());
            for (var a = 0; a < o; a++) {
                var f = e[a], p, d, w = s[a], x;
                f.initial !== undefined ? x = f.initial : n[f.name] !== undefined ? x = n[f.name] : x = i($ / 2, J / 2, U);
                var p = x[0], d = x[1];
                B[a] = m.create(p, d), j[a] = m.create(p, d), H[a] = m.create(0, 0), F[a] = w * w * R * .035;
                var k = {id: u.newShapeId(b.type), shape: "circle", style: {r: w, x: 0, y: 0}, clickable: !0, highlightStyle: {}, position: [p, d], __forceIndex: a}, L;
                b.query(E, "itemStyle.normal.label.show") && (k.style.text = f.name, k.style.textPosition = "inside", L = b.query(E, "itemStyle.normal.label.textStyle") || {}, k.style.textColor = L.color || "#fff", k.style.textAlign = L.align || "center", k.style.textBaseline = L.baseline || "middle", k.style.textFont = b.getFont(L)), b.query(E, "itemStyle.emphasis.label.show") && (k.highlightStyle.text = f.name, k.highlightStyle.textPosition = "inside", L = b.query(E, "itemStyle.emphasis.label.textStyle") || {}, k.highlightStyle.textColor = L.color || "#fff", k.highlightStyle.textAlign = L.align || "center", k.highlightStyle.textBaseline = L.baseline || "middle", k.highlightStyle.textFont = b.getFont(L)), v.merge(k.style, N), v.merge(k.highlightStyle, C);
                if (typeof f.category != "undefined") {
                    var O = T[f.category];
                    if (O) {
                        y && (k.style.color = y.getColor(O.name));
                        var M = O.itemStyle;
                        M && (M.normal && v.merge(k.style, M.normal, {overwrite: !0}), M.emphasis && v.merge(k.highlightStyle, M.emphasis, {overwrite: !0}))
                    }
                }
                if (typeof f.itemStyle != "undefined") {
                    var M = f.itemStyle;
                    M.normal && v.merge(k.style, M.normal, {overwrite: !0}), M.normal && v.merge(k.highlightStyle, M.emphasis, {overwrite: !0})
                }
                b.setCalculable(k), k.dragEnableTime = 0, k.ondragstart = b.shapeHandler.ondragstart, k.draggable = !0, S.push(k), b.shapeList.push(k);
                var _ = "";
                if (typeof f.category != "undefined") {
                    var O = T[f.category];
                    _ = O && O.name || ""
                }
                h.pack(k, {name: _}, 0, f, v.indexOf(A, f), f.name || "", f.value), u.addShape(k)
            }
        }
        function tt(e, t) {
            var n = t.length;
            for (var r = 0; r < n; r++) {
                var i = t[r];
                i.weight !== undefined ? P.push(i.weight) : P.push(1);
                var s = {id: u.newShapeId(b.type), shape: "line", style: {xStart: 0, yStart: 0, xEnd: 0, yEnd: 0, lineWidth: 1}, clickable: !0, highlightStyle: {}};
                v.merge(s.style, k), v.merge(s.highlightStyle, L), typeof i.itemStyle != "undefined" && (i.itemStyle.normal && v.merge(s.style, i.itemStyle.normal, {overwrite: !0}), i.itemStyle.emphasis && v.merge(s.highlightStyle, i.itemStyle.emphasis, {overwrite: !0})), x.push(s), b.shapeList.push(s);
                var o = M[i.source], a = M[i.target], i = O[i.rawIndex];
                h.pack(s, E, 0, {source: i.source, target: i.target, weight: i.weight || 0}, i.rawIndex, o.name + " - " + a.name, i.weight || 0, !0), u.addShape(s)
            }
            var f = new g(P), l = f.max();
            l !== 0 && (P = f.mul(1 / l, f).toArray())
        }
        function nt() {
            for (var e = 0, t = _.length; e < t; e++) {
                var n = _[e], r = x[e], i = S[n.source], s = S[n.target];
                r.style.xStart = i.position[0], r.style.yStart = i.position[1], r.style.xEnd = s.position[0], r.style.yEnd = s.position[1]
            }
        }
        function rt(e) {
            var t = B.length, r = [], i = q * q;
            for (var s = 0; s < t; s++)
                H[s][0] = 0, H[s][1] = 0;
            for (var s = 0; s < t; s++)
                for (var o = s + 1; o < t; o++) {
                    var u = D[s], a = D[o], f = B[s], l = B[o];
                    m.sub(r, l, f);
                    var c = m.length(r);
                    if (c > 500)
                        continue;
                    c < 5 && (c = 5), m.scale(r, r, 1 / c);
                    var h = 1 * (u + a) * i / c;
                    m.scaleAndAdd(H[s], H[s], r, -h), m.scaleAndAdd(H[o], H[o], r, h)
                }
            for (var s = 0, p = _.length; s < p; s++) {
                var d = _[s], v = P[s], g = d.source, y = d.target, f = B[g], l = B[y];
                m.sub(r, l, f);
                var b = m.lengthSquare(r);
                if (b === 0)
                    continue;
                var h = v * b / q / Math.sqrt(b);
                m.scaleAndAdd(H[g], H[g], r, h), m.scaleAndAdd(H[y], H[y], r, -h)
            }
            for (var s = 0, p = M.length; s < p; s++) {
                var w = B[s];
                m.sub(r, K, w);
                var b = m.lengthSquare(r), h = b * W / (100 * Math.sqrt(b));
                m.scaleAndAdd(H[s], H[s], r, h)
            }
            var E = [];
            for (var s = 0, p = B.length; s < p; s++) {
                var x = M[s].name;
                if (M[s].fixed) {
                    m.set(B[s], Q, G), m.set(j[s], Q, G), m.set(S[s].position, Q, G), M[s].initial !== undefined && m.set(M[s].initial, Q, G), n[x] !== undefined && m.set(n[x], Q, G);
                    continue
                }
                var w = B[s], T = j[s];
                m.sub(E, w, T), T[0] = w[0], T[1] = w[1], m.scaleAndAdd(E, E, H[s], e / F[s]), m.scale(E, E, I), E[0] = Math.max(Math.min(E[0], 100), -100), E[1] = Math.max(Math.min(E[1], 100), -100), m.add(w, w, E), m.copy(S[s].position, w), x ? (n[x] === undefined && (n[x] = m.create()), m.copy(n[x], w)) : (M[s].initial === undefined && (M[s].initial = m.create()), m.copy(M[s].initial, w))
            }
        }
        function it() {
            if (I < .01)
                return;
            rt(V), nt();
            var e = {};
            for (var t = 0; t < S.length; t++) {
                var n = S[t];
                e.position = n.position, u.modShape(n.id, e, !0)
            }
            e = {};
            for (var t = 0; t < x.length; t++) {
                var n = x[t];
                e.style = n.style, u.modShape(n.id, e, !0)
            }
            u.refresh(), I *= z
        }
        function ot(e, n) {
            function r() {
                st && (it(), t(r))
            }
            a = e, f = n, w = a.series, b.clear(), Y(), st = !0, t(r)
        }
        function ut(e) {
            e && (a = e, w = a.series), b.clear(), Y(), I = 1
        }
        function at() {
            st = !1
        }
        function ft() {
        }
        function lt(e) {
            if (!b.isDragstart || !e.target)
                return;
            var t = e.target, n = t.__forceIndex, r = M[n];
            r.fixed = !0, b.isDragstart = !1, u.on(p.EVENT.MOUSEMOVE, ht)
        }
        function ct(e, t) {
            if (!b.isDragend || !e.target)
                return;
            var n = e.target, r = n.__forceIndex, i = M[r];
            i.fixed = !1, t.dragIn = !0, t.needRefresh = !1, b.isDragend = !1, u.un(p.EVENT.MOUSEMOVE, ht)
        }
        function ht(e) {
            I = .8, Q = d.getX(e.event), G = d.getY(e.event)
        }
        var l = e("../component/base");
        l.call(this, r, u);
        var c = e("./calculableBase");
        c.call(this, u, a);
        var h = e("../util/ecData"), p = e("zrender/config"), d = e("zrender/tool/event"), v = e("zrender/tool/util"), m = e("zrender/tool/vector"), g = e("../util/ndarray"), y, b = this;
        b.type = r.CHART_TYPE_FORCE;
        var w, E, S = [], x = [], T = [], N, C, k, L, A, O, M = [], _ = [], D = [], P = [], H = [], B = [], j = [], F = [], I, q, R, U, z, W, X, V = 1 / 60, $, J, K = [], Q, G, st;
        b.shapeHandler.ondragstart = function() {
            b.isDragstart = !0
        }, b.init = ot, b.refresh = ut, b.ondragstart = lt, b.ondragend = ct, b.dispose = at, b.onclick = ft, ot(a, f)
    }
    function i(e, t, n) {
        return[(Math.random() - .5) * n + e, (Math.random() - .5) * n + t]
    }
    function s(e, t) {
        var n = e.length, r = [];
        for (var i = 0; i < n; i++)
            t(e[i], i) && r.push(e[i]);
        return r
    }
    var t = window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
        setTimeout(e, 16)
    }, n = {};
    return e("../chart").define("force", r), r
}), define("echarts/util/shape/halfSmoothPolygon", ["require", "zrender/shape", "zrender/shape/base", "zrender/shape"], function(e) {
    function t() {
        this.type = "halfSmoothPolygon"
    }
    return t.prototype = {buildPath: function(t, n) {
            var r = n.pointList;
            if (r.length < 2)
                return;
            if (n.smooth) {
                var i = this.smoothBezier(r.slice(0, -2), n.smooth);
                t.moveTo(r[0][0], r[0][1]);
                var s, o, u, a = r.length;
                for (var f = 0; f < a - 3; f++)
                    s = i[f * 2], o = i[f * 2 + 1], u = r[f + 1], t.bezierCurveTo(s[0], s[1], o[0], o[1], u[0], u[1]);
                t.lineTo(r[a - 2][0], r[a - 2][1]), t.lineTo(r[a - 1][0], r[a - 1][1]), t.lineTo(r[0][0], r[0][1])
            } else
                e("zrender/shape").get("polygon").buildPath(t, n);
            return
        }}, e("zrender/shape/base").derive(t), e("zrender/shape").define("halfSmoothPolygon", new t), t
}), define("echarts/chart/line", ["require", "../component/base", "./calculableBase", "zrender/tool/color", "zrender/shape", "zrender/shape", "../util/shape/halfSmoothPolygon", "../chart"], function(e) {
    function t(t, r, i, s, o) {
        function g() {
            p = {}, l.selectedMap = {};
            var e = {top: [], bottom: [], left: [], right: []}, n, r, s, u;
            for (var a = 0, f = c.length; a < f; a++)
                c[a].type == l.type && (c[a] = l.reformOption(c[a]), n = c[a].xAxisIndex, r = c[a].yAxisIndex, s = o.xAxis.getAxis(n), u = o.yAxis.getAxis(r), s.type == t.COMPONENT_TYPE_AXIS_CATEGORY ? e[s.getPosition()].push(a) : u.type == t.COMPONENT_TYPE_AXIS_CATEGORY && e[u.getPosition()].push(a));
            for (var h in e)
                e[h].length > 0 && y(h, e[h]);
            for (var a = 0, f = l.shapeList.length; a < f; a++)
                l.shapeList[a].id = i.newShapeId(l.type), i.addShape(l.shapeList[a])
        }
        function y(e, t) {
            var n = b(t), r = n.locationMap, i = n.maxDataLength;
            if (i === 0 || r.length === 0)
                return;
            var s = {};
            switch (e) {
                case"bottom":
                case"top":
                    w(i, r, s);
                    break;
                case"left":
                case"right":
                    E(i, r, s)
            }
            for (var u = 0, a = t.length; u < a; u++)
                l.buildMark(c[t[u]], t[u], o, {xMarkMap: s})
        }
        function b(e) {
            var t, n = 0, r = {}, s = "__kener__stack__", u, a, f = o.legend, h = [], p = 0, g;
            for (var y = 0, b = e.length; y < b; y++)
                t = c[e[y]], a = t.name, m[e[y]] = m[e[y]] || l.query(t, "symbol") || v[y % v.length], f ? (l.selectedMap[a] = f.isSelected(a), d[e[y]] = f.getColor(a), g = f.getItemShape(a), g && (g.shape = "icon", g.style.iconType = "legendLineIcon", g.style.symbol = m[e[y]], f.setItemShape(a, g))) : (l.selectedMap[a] = !0, d[e[y]] = i.getColor(e[y])), l.selectedMap[a] && (u = t.stack || s + e[y], typeof r[u] == "undefined" ? (r[u] = n, h[n] = [e[y]], n++) : h[r[u]].push(e[y])), p = Math.max(p, t.data.length);
            return{locationMap: h, maxDataLength: p}
        }
        function w(e, t, n) {
            var r = t[0][0], i = c[r], u = i.xAxisIndex, a = o.xAxis.getAxis(u), f, h, d, v, m, g, y, b, w = {}, E, x;
            for (var N = 0, C = e; N < C; N++) {
                if (typeof a.getNameByIndex(N) == "undefined")
                    break;
                d = a.getCoordByIndex(N);
                for (var k = 0, L = t.length; k < L; k++) {
                    f = c[t[k][0]].yAxisIndex || 0, h = o.yAxis.getAxis(f), g = m = b = y = h.getCoord(0);
                    for (var A = 0, O = t[k].length; A < O; A++) {
                        r = t[k][A], i = c[r], E = i.data[N], x = typeof E != "undefined" ? typeof E.value != "undefined" ? E.value : E : "-", w[r] = w[r] || [], n[r] = n[r] || {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY, sum: 0, counter: 0, average: 0};
                        if (x == "-") {
                            w[r].length > 0 && (p[r] = p[r] || [], p[r].push(w[r]), w[r] = []);
                            continue
                        }
                        x >= 0 ? (m -= A > 0 ? h.getCoordSize(x) : g - h.getCoord(x), v = m) : x < 0 && (y += A > 0 ? h.getCoordSize(x) : h.getCoord(x) - b, v = y), w[r].push([d, v, N, a.getNameByIndex(N), d, g]), n[r].min > x && (n[r].min = x, n[r].minY = v, n[r].minX = d), n[r].max < x && (n[r].max = x, n[r].maxY = v, n[r].maxX = d), n[r].sum += x, n[r].counter++
                    }
                }
                m = o.grid.getY();
                var M;
                for (var k = 0, L = t.length; k < L; k++)
                    for (var A = 0, O = t[k].length; A < O; A++) {
                        r = t[k][A], i = c[r], E = i.data[N], x = typeof E != "undefined" ? typeof E.value != "undefined" ? E.value : E : "-";
                        if (x != "-")
                            continue;
                        l.deepQuery([E, i, s], "calculable") && (M = l.deepQuery([E, i], "symbolSize"), m += M * 2 + 5, v = m, l.shapeList.push(T(r, N, a.getNameByIndex(N), d, v, "horizontal")))
                    }
            }
            for (var _ in w)
                w[_].length > 0 && (p[_] = p[_] || [], p[_].push(w[_]), w[_] = []);
            for (var k = 0, L = t.length; k < L; k++)
                for (var A = 0, O = t[k].length; A < O; A++)
                    r = t[k][A], n[r].counter > 0 && (n[r].average = (n[r].sum / n[r].counter).toFixed(2) - 0), v = o.yAxis.getAxis(c[r].yAxisIndex || 0).getCoord(n[r].average), n[r].averageLine = [[o.grid.getX(), v], [o.grid.getXend(), v]], n[r].minLine = [[o.grid.getX(), n[r].minY], [o.grid.getXend(), n[r].minY]], n[r].maxLine = [[o.grid.getX(), n[r].maxY], [o.grid.getXend(), n[r].maxY]];
            S(p, a, "horizontal")
        }
        function E(e, t, n) {
            var r = t[0][0], i = c[r], u = i.yAxisIndex, a = o.yAxis.getAxis(u), f, h, d, v, m, g, y, b, w = {}, E, x;
            for (var N = 0, C = e; N < C; N++) {
                if (typeof a.getNameByIndex(N) == "undefined")
                    break;
                v = a.getCoordByIndex(N);
                for (var k = 0, L = t.length; k < L; k++) {
                    f = c[t[k][0]].xAxisIndex || 0, h = o.xAxis.getAxis(f), g = m = b = y = h.getCoord(0);
                    for (var A = 0, O = t[k].length; A < O; A++) {
                        r = t[k][A], i = c[r], E = i.data[N], x = typeof E != "undefined" ? typeof E.value != "undefined" ? E.value : E : "-", w[r] = w[r] || [], n[r] = n[r] || {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY, sum: 0, counter: 0, average: 0};
                        if (x == "-") {
                            w[r].length > 0 && (p[r] = p[r] || [], p[r].push(w[r]), w[r] = []);
                            continue
                        }
                        x >= 0 ? (m += A > 0 ? h.getCoordSize(x) : h.getCoord(x) - g, d = m) : x < 0 && (y -= A > 0 ? h.getCoordSize(x) : b - h.getCoord(x), d = y), w[r].push([d, v, N, a.getNameByIndex(N), g, v]), n[r].min > x && (n[r].min = x, n[r].minX = d, n[r].minY = v), n[r].max < x && (n[r].max = x, n[r].maxX = d, n[r].maxY = v), n[r].sum += x, n[r].counter++
                    }
                }
                m = o.grid.getXend();
                var M;
                for (var k = 0, L = t.length; k < L; k++)
                    for (var A = 0, O = t[k].length; A < O; A++) {
                        r = t[k][A], i = c[r], E = i.data[N], x = typeof E != "undefined" ? typeof E.value != "undefined" ? E.value : E : "-";
                        if (x != "-")
                            continue;
                        l.deepQuery([E, i, s], "calculable") && (M = l.deepQuery([E, i], "symbolSize"), m -= M * 2 + 5, d = m, l.shapeList.push(T(r, N, a.getNameByIndex(N), d, v, "vertical")))
                    }
            }
            for (var _ in w)
                w[_].length > 0 && (p[_] = p[_] || [], p[_].push(w[_]), w[_] = []);
            for (var k = 0, L = t.length; k < L; k++)
                for (var A = 0, O = t[k].length; A < O; A++)
                    r = t[k][A], n[r].counter > 0 && (n[r].average = (n[r].sum / n[r].counter).toFixed(2) - 0), d = o.xAxis.getAxis(c[r].xAxisIndex || 0).getCoord(n[r].average), n[r].averageLine = [[d, o.grid.getYend()], [d, o.grid.getY()]], n[r].minLine = [[n[r].minX, o.grid.getYend()], [n[r].minX, o.grid.getY()]], n[r].maxLine = [[n[r].maxX, o.grid.getYend()], [n[r].maxX, o.grid.getY()]];
            S(p, a, "vertical")
        }
        function S(e, t, n) {
            var r, i, o, u, a, p, v, m, g, y, b;
            for (var w = c.length - 1; w >= 0; w--) {
                m = c[w], y = e[w];
                if (m.type == l.type && typeof y != "undefined") {
                    r = d[w], i = l.query(m, "itemStyle.normal.lineStyle.width"), o = l.query(m, "itemStyle.normal.lineStyle.type"), u = l.query(m, "itemStyle.normal.lineStyle.color"), a = l.getItemStyleColor(l.query(m, "itemStyle.normal.color"), w, -1), p = typeof l.query(m, "itemStyle.normal.areaStyle") != "undefined", v = l.query(m, "itemStyle.normal.areaStyle.color");
                    for (var E = 0, S = y.length; E < S; E++) {
                        b = y[E];
                        for (var T = 0, C = b.length; T < C; T++)
                            g = m.data[b[T][2]], (l.deepQuery([g, m], "showAllSymbol") || t.isMainAxis(b[T][2]) && l.deepQuery([g, m], "symbol") != "none" || l.deepQuery([g, m, s], "calculable")) && l.shapeList.push(N(w, b[T][2], b[T][3], b[T][0], b[T][1], n));
                        l.shapeList.push({shape: "brokenLine", zlevel: h, style: {miterLimit: i, pointList: b, strokeColor: u || a || r, lineWidth: i, lineType: o, smooth: x(m.smooth), shadowColor: l.query(m, "itemStyle.normal.lineStyle.shadowColor"), shadowBlur: l.query(m, "itemStyle.normal.lineStyle.shadowBlur"), shadowOffsetX: l.query(m, "itemStyle.normal.lineStyle.shadowOffsetX"), shadowOffsetY: l.query(m, "itemStyle.normal.lineStyle.shadowOffsetY")}, hoverable: !1, _main: !0, _seriesIndex: w, _orient: n}), p && l.shapeList.push({shape: "halfSmoothPolygon", zlevel: h, style: {miterLimit: i, pointList: b.concat([[b[b.length - 1][4], b[b.length - 1][5] - 2], [b[0][4], b[0][5] - 2]]), brushType: "fill", smooth: x(m.smooth), color: v ? v : f.alpha(r, .5)}, hoverable: !1, _main: !0, _seriesIndex: w, _orient: n})
                    }
                }
            }
        }
        function x(e) {
            return e ? .3 : 0
        }
        function T(e, n, r, i, s, o) {
            var u = c[e].calculableHolderColor || t.calculableHolderColor, a = N(e, n, r, i, s, o);
            return a.style.color = u, a.style.strokeColor = u, a.rotation = [0, 0], a.hoverable = !1, a.draggable = !1, a.style.text = undefined, a
        }
        function N(e, t, n, r, i, o) {
            var u = c[e], a = u.data[t], f = l.getSymbolShape(u, e, a, t, n, r, i, m[e], d[e], "#fff", o == "vertical" ? "horizontal" : "vertical");
            return f.zlevel = h + 1, l.deepQuery([a, u, s], "calculable") && (l.setCalculable(f), f.draggable = !0), f
        }
        function C(e, t, n, r) {
            var i = o.xAxis.getAxis(e.xAxisIndex), s = o.yAxis.getAxis(e.yAxisIndex);
            return!n.type || n.type != "max" && n.type != "min" && n.type != "average" ? [typeof n.xAxis != "string" && i.getCoordByIndex ? i.getCoordByIndex(n.xAxis || 0) : i.getCoord(n.xAxis || 0), typeof n.yAxis != "string" && s.getCoordByIndex ? s.getCoordByIndex(n.yAxis || 0) : s.getCoord(n.yAxis || 0)] : [r.xMarkMap[t][n.type + "X"], r.xMarkMap[t][n.type + "Y"], r.xMarkMap[t][n.type + "Line"], r.xMarkMap[t][n.type]]
        }
        function k(e, t) {
            o = t, L(e)
        }
        function L(e) {
            e && (s = e, c = s.series), l.clear(), g()
        }
        function A(e, t) {
            var n = e.seriesIndex, r = e.dataIndex, i, s, o = n.length;
            while (o--) {
                i = p[n[o]];
                if (i)
                    for (var u = 0, a = i.length; u < a; u++) {
                        s = i[u];
                        for (var f = 0, l = s.length; f < l; f++)
                            r == s[f][2] && t.push(N(n[o], s[f][2], s[f][3], s[f][0], s[f][1], "horizontal"))
                    }
            }
        }
        function O(e) {
            var t = {};
            for (var n = 0, r = e.length; n < r; n++)
                t[e[n][0]] = e[n];
            var s, o, u, a, f, h, p;
            for (var n = l.shapeList.length - 1; n >= 0; n--) {
                f = l.shapeList[n]._seriesIndex;
                if (t[f] && !t[f][3]) {
                    if (l.shapeList[n]._main) {
                        h = l.shapeList[n].style.pointList, o = Math.abs(h[0][0] - h[1][0]), a = Math.abs(h[0][1] - h[1][1]), p = l.shapeList[n]._orient == "horizontal";
                        if (t[f][2]) {
                            if (l.shapeList[n].shape == "polygon") {
                                var d = h.length;
                                l.shapeList[n].style.pointList[d - 3] = h[d - 2], p ? l.shapeList[n].style.pointList[d - 3][0] = h[d - 4][0] : l.shapeList[n].style.pointList[d - 3][1] = h[d - 4][1], l.shapeList[n].style.pointList[d - 2] = h[d - 1]
                            }
                            l.shapeList[n].style.pointList.pop(), p ? (s = o, u = 0) : (s = 0, u = -a)
                        } else {
                            l.shapeList[n].style.pointList.shift();
                            if (l.shapeList[n].shape == "polygon") {
                                var v = l.shapeList[n].style.pointList.pop();
                                p ? v[0] = h[0][0] : v[1] = h[0][1], l.shapeList[n].style.pointList.push(v)
                            }
                            p ? (s = -o, u = 0) : (s = 0, u = a)
                        }
                        i.modShape(l.shapeList[n].id, {style: {pointList: l.shapeList[n].style.pointList}}, !0)
                    } else {
                        if (t[f][2] && l.shapeList[n]._dataIndex == c[f].data.length - 1) {
                            i.delShape(l.shapeList[n].id);
                            continue
                        }
                        if (!t[f][2] && l.shapeList[n]._dataIndex === 0) {
                            i.delShape(l.shapeList[n].id);
                            continue
                        }
                    }
                    i.animate(l.shapeList[n].id, "").when(500, {position: [s, u]}).start()
                }
            }
        }
        function M() {
            var e = l.query(s, "animationDuration"), t = l.query(s, "animationEasing"), n, r, o, u = 0;
            for (var a = 0, f = l.shapeList.length; a < f; a++)
                l.shapeList[a]._main && (o = c[l.shapeList[a]._seriesIndex], u += 1, n = l.shapeList[a].style.pointList[0][0], r = l.shapeList[a].style.pointList[0][1], l.shapeList[a]._orient == "horizontal" ? i.modShape(l.shapeList[a].id, {scale: [0, 1, n, r]}, !0) : i.modShape(l.shapeList[a].id, {scale: [1, 0, n, r]}, !0), i.animate(l.shapeList[a].id, "").when((l.query(o, "animationDuration") || e) + u * 100, {scale: [1, 1, n, r]}).start(l.query(o, "animationEasing") || t));
            l.animationMark(e, t)
        }
        var u = e("../component/base");
        u.call(this, t, i);
        var a = e("./calculableBase");
        a.call(this, i, s);
        var f = e("zrender/tool/color"), l = this;
        l.type = t.CHART_TYPE_LINE;
        var c, h = l.getZlevelBase(), p = {}, d = {}, v = t.symbolList, m = {};
        e("zrender/shape").get("icon").define("legendLineIcon", n), l.getMarkCoord = C, l.animation = M, l.init = k, l.refresh = L, l.ontooltipHover = A, l.addDataAnimation = O, k(s, o)
    }
    function n(t, n) {
        var r = n.x, i = n.y, s = n.width, o = n.height, u = o / 2;
        n.symbol.match("empty") && (t.fillStyle = "#fff"), n.brushType = "both";
        var a = n.symbol.replace("empty", "").toLowerCase();
        if (a.match("star"))
            u = a.replace("star", "") - 0 || 5, i -= 1, a = "star";
        else if (a == "rectangle" || a == "arrow")
            r += (s - o) / 2, s = o;
        var f = "";
        a.match("image") && (f = a.replace(new RegExp("^image:\\/\\/"), ""), a = "image", r += Math.round((s - o) / 2) - 1, s = o += 2), a = e("zrender/shape").get("icon").get(a);
        if (a) {
            var l = n.x, c = n.y;
            t.moveTo(l, c + u), t.lineTo(l + 5, c + u), t.moveTo(l + n.width - 5, c + u), t.lineTo(l + n.width, c + u), a(t, {x: r + 4, y: i + 4, width: s - 8, height: o - 8, n: u, image: f})
        } else
            t.moveTo(r, i + u), t.lineTo(r + s, i + u)
    }
    return e("../util/shape/halfSmoothPolygon"), e("../chart").define("line", t), t
}), define("echarts/chart/bar", ["require", "../component/base", "./calculableBase", "../util/ecData", "zrender/tool/color", "../chart"], function(e) {
    function t(t, n, r, i, s) {
        function d() {
            l.selectedMap = {};
            var e = {top: [], bottom: [], left: [], right: []}, n, i, o, u;
            for (var a = 0, f = c.length; a < f; a++)
                c[a].type == t.CHART_TYPE_BAR && (c[a] = l.reformOption(c[a]), n = c[a].xAxisIndex, i = c[a].yAxisIndex, o = s.xAxis.getAxis(n), u = s.yAxis.getAxis(i), o.type == t.COMPONENT_TYPE_AXIS_CATEGORY ? e[o.getPosition()].push(a) : u.type == t.COMPONENT_TYPE_AXIS_CATEGORY && e[u.getPosition()].push(a));
            for (var h in e)
                e[h].length > 0 && v(h, e[h]);
            for (var a = 0, f = l.shapeList.length; a < f; a++)
                l.shapeList[a].id = r.newShapeId(l.type), r.addShape(l.shapeList[a])
        }
        function v(e, t) {
            var n = m(t), r = n.locationMap, i = n.maxDataLength;
            if (i === 0 || r.length === 0)
                return;
            switch (e) {
                case"bottom":
                case"top":
                    g(i, r, t);
                    break;
                case"left":
                case"right":
                    y(i, r, t)
                }
        }
        function m(e) {
            var t, n = 0, i = {}, o = "__kener__stack__", u, a, f = s.legend, h = [], d = 0, v;
            for (var m = 0, g = e.length; m < g; m++)
                t = c[e[m]], a = t.name, f ? (l.selectedMap[a] = f.isSelected(a), p[e[m]] = f.getColor(a), v = f.getItemShape(a), v && (t.itemStyle.normal.borderWidth > 0 && (v.style.x += 1, v.style.y += 1, v.style.width -= 2, v.style.height -= 2, v.style.strokeColor = v.highlightStyle.strokeColor = t.itemStyle.normal.borderColor, v.highlightStyle.lineWidth = 3, v.style.brushType = "both"), f.setItemShape(a, v))) : (l.selectedMap[a] = !0, p[e[m]] = r.getColor(e[m])), l.selectedMap[a] && (u = t.stack || o + e[m], typeof i[u] == "undefined" ? (i[u] = n, h[n] = [e[m]], n++) : h[i[u]].push(e[m])), d = Math.max(d, t.data.length);
            return{locationMap: h, maxDataLength: d}
        }
        function g(e, n, r) {
            var o = n[0][0], u = c[o], a = u.xAxisIndex, f = s.xAxis.getAxis(a), h, p, d = b(f, n), v = d.gap, m = d.barGap, g = d.barWidthMap, y = d.barWidth, S = d.barMinHeightMap, x, T = {}, N, C, k, L, A, O, M, _, D;
            for (var P = 0, H = e; P < H; P++) {
                if (typeof f.getNameByIndex(P) == "undefined")
                    break;
                N = f.getCoordByIndex(P) - v / 2;
                for (var B = 0, j = n.length; B < j; B++) {
                    h = c[n[B][0]].yAxisIndex || 0, p = s.yAxis.getAxis(h), L = k = O = A = p.getCoord(0);
                    for (var F = 0, I = n[B].length; F < I; F++) {
                        o = n[B][F], u = c[o], _ = u.data[P], D = typeof _ != "undefined" ? typeof _.value != "undefined" ? _.value : _ : "-", T[o] = T[o] || {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY, sum: 0, counter: 0, average: 0};
                        if (D == "-")
                            continue;
                        D > 0 ? (x = F > 0 ? p.getCoordSize(D) : L - p.getCoord(D), I == 1 && S[o] > x && (x = S[o]), k -= x, C = k) : D < 0 ? (x = F > 0 ? p.getCoordSize(D) : p.getCoord(D) - O, I == 1 && S[o] > x && (x = S[o]), C = A, A += x) : (x = 0, k -= x, C = k), M = w(o, P, f.getNameByIndex(P), N, C, g[o] || y, x, "vertical"), T[o][P] = N + (g[o] || y) / 2, T[o].min > D && (T[o].min = D, T[o].minY = C, T[o].minX = T[o][P]), T[o].max < D && (T[o].max = D, T[o].maxY = C, T[o].maxX = T[o][P]), T[o].sum += D, T[o].counter++, l.shapeList.push(M)
                    }
                    for (var F = 0, I = n[B].length; F < I; F++) {
                        o = n[B][F], u = c[o], _ = u.data[P], D = typeof _ != "undefined" ? typeof _.value != "undefined" ? _.value : _ : "-";
                        if (D != "-")
                            continue;
                        l.deepQuery([_, u, i], "calculable") && (k -= t.island.r, C = k, M = w(o, P, f.getNameByIndex(P), N + .5, C + .5, (g[o] || y) - 1, t.island.r - 1, "vertical"), M.hoverable = !1, M.draggable = !1, M.style.lineWidth = 1, M.style.brushType = "stroke", M.style.strokeColor = u.calculableHolderColor || t.calculableHolderColor, l.shapeList.push(M))
                    }
                    N += (g[o] || y) + m
                }
            }
            for (var B = 0, j = n.length; B < j; B++)
                for (var F = 0, I = n[B].length; F < I; F++)
                    o = n[B][F], T[o].counter > 0 && (T[o].average = (T[o].sum / T[o].counter).toFixed(2) - 0), C = s.yAxis.getAxis(c[o].yAxisIndex || 0).getCoord(T[o].average), T[o].averageLine = [[s.grid.getX(), C], [s.grid.getXend(), C]], T[o].minLine = [[s.grid.getX(), T[o].minY], [s.grid.getXend(), T[o].minY]], T[o].maxLine = [[s.grid.getX(), T[o].maxY], [s.grid.getXend(), T[o].maxY]];
            E(r, T, !0)
        }
        function y(e, n, r) {
            var o = n[0][0], u = c[o], a = u.yAxisIndex, f = s.yAxis.getAxis(a), h, p, d = b(f, n), v = d.gap, m = d.barGap, g = d.barWidthMap, y = d.barWidth, S = d.barMinHeightMap, x, T = {}, N, C, k, L, A, O, M, _, D;
            for (var P = 0, H = e; P < H; P++) {
                if (typeof f.getNameByIndex(P) == "undefined")
                    break;
                C = f.getCoordByIndex(P) + v / 2;
                for (var B = 0, j = n.length; B < j; B++) {
                    h = c[n[B][0]].xAxisIndex || 0, p = s.xAxis.getAxis(h), L = k = O = A = p.getCoord(0);
                    for (var F = 0, I = n[B].length; F < I; F++) {
                        o = n[B][F], u = c[o], _ = u.data[P], D = typeof _ != "undefined" ? typeof _.value != "undefined" ? _.value : _ : "-", T[o] = T[o] || {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY, sum: 0, counter: 0, average: 0};
                        if (D == "-")
                            continue;
                        D > 0 ? (x = F > 0 ? p.getCoordSize(D) : p.getCoord(D) - L, I == 1 && S[o] > x && (x = S[o]), N = k, k += x) : D < 0 ? (x = F > 0 ? p.getCoordSize(D) : O - p.getCoord(D), I == 1 && S[o] > x && (x = S[o]), A -= x, N = A) : (x = 0, N = k, k += x), M = w(o, P, f.getNameByIndex(P), N, C - (g[o] || y), x, g[o] || y, "horizontal"), T[o][P] = C - (g[o] || y) / 2, T[o].min > D && (T[o].min = D, T[o].minX = N + x, T[o].minY = T[o][P]), T[o].max < D && (T[o].max = D, T[o].maxX = N + x, T[o].maxY = T[o][P]), T[o].sum += D, T[o].counter++, l.shapeList.push(M)
                    }
                    for (var F = 0, I = n[B].length; F < I; F++) {
                        o = n[B][F], u = c[o], _ = u.data[P], D = typeof _ != "undefined" ? typeof _.value != "undefined" ? _.value : _ : "-";
                        if (D != "-")
                            continue;
                        l.deepQuery([_, u, i], "calculable") && (N = k, k += t.island.r, M = w(o, P, f.getNameByIndex(P), N + .5, C + .5 - (g[o] || y), t.island.r - 1, (g[o] || y) - 1, "horizontal"), M.hoverable = !1, M.draggable = !1, M.style.lineWidth = 1, M.style.brushType = "stroke", M.style.strokeColor = u.calculableHolderColor || t.calculableHolderColor, l.shapeList.push(M))
                    }
                    C -= (g[o] || y) + m
                }
            }
            for (var B = 0, j = n.length; B < j; B++)
                for (var F = 0, I = n[B].length; F < I; F++)
                    o = n[B][F], T[o].counter > 0 && (T[o].average = (T[o].sum / T[o].counter).toFixed(2) - 0), N = s.xAxis.getAxis(c[o].xAxisIndex || 0).getCoord(T[o].average), T[o].averageLine = [[N, s.grid.getYend()], [N, s.grid.getY()]], T[o].minLine = [[T[o].minX, s.grid.getYend()], [T[o].minX, s.grid.getY()]], T[o].maxLine = [[T[o].maxX, s.grid.getYend()], [T[o].maxX, s.grid.getY()]];
            E(r, T, !1)
        }
        function b(e, t, n) {
            var r = {}, i = {}, s, o = 0, u = 0, a, f, h, p;
            for (var d = 0, v = t.length; d < v; d++) {
                h = !1;
                for (var m = 0, g = t[d].length; m < g; m++) {
                    seriesIndex = t[d][m], p = c[seriesIndex];
                    if (!n)
                        if (!h) {
                            s = l.query(p, "barWidth");
                            if (typeof s != "undefined") {
                                r[seriesIndex] = s, u += s, o++, h = !0;
                                for (var y = 0, w = m; y < w; y++) {
                                    var E = t[d][y];
                                    r[E] = s
                                }
                            }
                        } else
                            r[seriesIndex] = s;
                    i[seriesIndex] = l.query(p, "barMinHeight"), a = typeof a != "undefined" ? a : l.query(p, "barGap"), f = typeof f != "undefined" ? f : l.query(p, "barCategoryGap")
                }
            }
            var S, x;
            if (t.length != o)
                if (!n) {
                    S = typeof f == "string" && f.match(/%$/) ? Math.floor(e.getGap() * (100 - parseFloat(f)) / 100) : e.getGap() - f, typeof a == "string" && a.match(/%$/) ? (a = parseFloat(a) / 100, x = Math.floor((S - u) / ((t.length - 1) * a + t.length - o)), a = Math.floor(x * a)) : (a = parseFloat(a), x = Math.floor((S - u - a * (t.length - 1)) / (t.length - o)));
                    if (x <= 0)
                        return b(e, t, !0)
                } else
                    S = e.getGap(), a = 0, x = Math.floor(S / t.length), x <= 0 && (x = 1);
            else {
                S = o > 1 ? typeof f == "string" && f.match(/%$/) ? Math.floor(e.getGap() * (100 - parseFloat(f)) / 100) : e.getGap() - f : u, x = 0, a = o > 1 ? Math.floor((S - u) / (o - 1)) : 0;
                if (a < 0)
                    return b(e, t, !0)
            }
            return{barWidthMap: r, barMinHeightMap: i, gap: S, barWidth: x, barGap: a}
        }
        function w(e, t, n, r, s, o, u, d) {
            var v, m = c[e], g = m.data[t], y = p[e], b = [g, m], w = l.deepQuery(b, "itemStyle.normal.color") || y, E = l.deepQuery(b, "itemStyle.emphasis.color"), S = l.deepMerge(b, "itemStyle.normal"), x = S.borderWidth, T = l.deepMerge(b, "itemStyle.emphasis");
            return v = {shape: "rectangle", zlevel: h, clickable: !0, style: {x: r, y: s, width: o, height: u, brushType: "both", color: l.getItemStyleColor(w, e, t, g), radius: S.borderRadius, lineWidth: x, strokeColor: S.borderColor}, highlightStyle: {color: l.getItemStyleColor(E, e, t, g), radius: T.borderRadius, lineWidth: T.borderWidth, strokeColor: T.borderColor}, _orient: d}, v.highlightStyle.color = v.highlightStyle.color || (typeof v.style.color == "string" ? f.lift(v.style.color, -0.3) : v.style.color), x > 0 && v.style.height > x && v.style.width > x ? (v.style.y += x / 2, v.style.height -= x, v.style.x += x / 2, v.style.width -= x) : v.style.brushType = "fill", v.highlightStyle.textColor = v.highlightStyle.color, v = l.addLabel(v, m, g, n, d), l.deepQuery([g, m, i], "calculable") && (l.setCalculable(v), v.draggable = !0), a.pack(v, c[e], e, c[e].data[t], t, n), v
        }
        function E(e, t, n) {
            for (var r = 0, i = e.length; r < i; r++)
                l.buildMark(c[e[r]], e[r], s, {isHorizontal: n, xMarkMap: t})
        }
        function S(e, t, n, r) {
            var i = s.xAxis.getAxis(e.xAxisIndex), o = s.yAxis.getAxis(e.yAxisIndex), u, a;
            return!n.type || n.type != "max" && n.type != "min" && n.type != "average" ? r.isHorizontal ? (u = typeof n.xAxis == "string" && i.getIndexByName ? i.getIndexByName(n.xAxis) : n.xAxis || 0, a = [r.xMarkMap[t][u], o.getCoord(n.yAxis || 0)]) : (u = typeof n.yAxis == "string" && o.getIndexByName ? o.getIndexByName(n.yAxis) : n.yAxis || 0, a = [i.getCoord(n.xAxis || 0), r.xMarkMap[t][u]]) : a = [r.xMarkMap[t][n.type + "X"], r.xMarkMap[t][n.type + "Y"], r.xMarkMap[t][n.type + "Line"], r.xMarkMap[t][n.type]], a
        }
        function x(e, t) {
            s = t, T(e)
        }
        function T(e) {
            e && (i = e, c = i.series), l.clear(), d()
        }
        function N(e) {
            var t = {};
            for (var n = 0, i = e.length; n < i; n++)
                t[e[n][0]] = e[n];
            var o, u, f, h, p, d, v;
            for (var n = l.shapeList.length - 1; n >= 0; n--) {
                d = a.get(l.shapeList[n], "seriesIndex");
                if (t[d] && !t[d][3] && l.shapeList[n].shape == "rectangle") {
                    v = a.get(l.shapeList[n], "dataIndex"), p = c[d];
                    if (t[d][2] && v == p.data.length - 1) {
                        r.delShape(l.shapeList[n].id);
                        continue
                    }
                    if (!t[d][2] && v === 0) {
                        r.delShape(l.shapeList[n].id);
                        continue
                    }
                    l.shapeList[n]._orient == "horizontal" ? (h = s.yAxis.getAxis(p.yAxisIndex || 0).getGap(), f = t[d][2] ? -h : h, o = 0) : (u = s.xAxis.getAxis(p.xAxisIndex || 0).getGap(), o = t[d][2] ? u : -u, f = 0), r.animate(l.shapeList[n].id, "").when(500, {position: [o, f]}).start()
                }
            }
        }
        function C() {
            var e, t, n, s, o, u, f, c, h;
            for (var p = 0, d = l.shapeList.length; p < d; p++)
                l.shapeList[p].shape == "rectangle" && (f = a.get(l.shapeList[p], "series"), c = a.get(l.shapeList[p], "dataIndex"), h = a.get(l.shapeList[p], "value"), e = l.deepQuery([f, i], "animationDuration"), t = l.deepQuery([f, i], "animationEasing"), l.shapeList[p]._orient == "horizontal" ? (n = l.shapeList[p].style.width, o = l.shapeList[p].style.x, h < 0 ? (r.modShape(l.shapeList[p].id, {style: {x: o + n, width: 0}}, !0), r.animate(l.shapeList[p].id, "style").when(e + c * 100, {x: o, width: n}).start(t)) : (r.modShape(l.shapeList[p].id, {style: {width: 0}}, !0), r.animate(l.shapeList[p].id, "style").when(e + c * 100, {width: n}).start(t))) : (s = l.shapeList[p].style.height, u = l.shapeList[p].style.y, h < 0 ? (r.modShape(l.shapeList[p].id, {style: {height: 0}}, !0), r.animate(l.shapeList[p].id, "style").when(e + c * 100, {height: s}).start(t)) : (r.modShape(l.shapeList[p].id, {style: {y: u + s, height: 0}}, !0), r.animate(l.shapeList[p].id, "style").when(e + c * 100, {y: u, height: s}).start(t))));
            l.animationMark(e, t)
        }
        var o = e("../component/base");
        o.call(this, t, r);
        var u = e("./calculableBase");
        u.call(this, r, i);
        var a = e("../util/ecData"), f = e("zrender/tool/color"), l = this;
        l.type = t.CHART_TYPE_BAR;
        var c, h = l.getZlevelBase(), p = {};
        l.getMarkCoord = S, l.animation = C, l.init = x, l.refresh = T, l.addDataAnimation = N, x(i, s)
    }
    return e("../chart").define("bar", t), t
}), define("echarts/chart/pie", ["require", "../component/base", "./calculableBase", "../util/ecData", "zrender/tool/math", "zrender/tool/util", "zrender/tool/color", "../util/accMath", "../chart"], function(e) {
    function t(t, n, r, i, s) {
        function g() {
            var e = s.legend;
            h.selectedMap = {}, m = {};
            var n, o, u;
            v = !1;
            var f;
            for (var l = 0, c = p.length; l < c; l++)
                if (p[l].type == t.CHART_TYPE_PIE) {
                    p[l] = h.reformOption(p[l]), f = p[l].name || "", h.selectedMap[f] = e ? e.isSelected(f) : !0;
                    if (!h.selectedMap[f])
                        continue;
                    n = h.parseCenter(r, p[l].center), o = h.parseRadius(r, p[l].radius), v = v || p[l].selectedMode, m[l] = [], h.deepQuery([p[l], i], "calculable") && (u = {shape: o[0] <= 10 ? "circle" : "ring", zlevel: d, hoverable: !1, style: {x: n[0], y: n[1], r0: o[0] <= 10 ? 0 : o[0] - 10, r: o[1] + 10, brushType: "stroke", lineWidth: 1, strokeColor: p[l].calculableHolderColor || t.calculableHolderColor}}, a.pack(u, p[l], l, undefined, -1), h.setCalculable(u), h.shapeList.push(u)), y(l), h.buildMark(p[l], l, s)
                }
            for (var l = 0, c = h.shapeList.length; l < c; l++)
                h.shapeList[l].id = r.newShapeId(h.type), r.addShape(h.shapeList[l])
        }
        function y(e) {
            var t = p[e], n = t.data, i = s.legend, o, u = 0, a = 0, f = 0, l = Number.NEGATIVE_INFINITY;
            for (var c = 0, d = n.length; c < d; c++)
                o = n[c].name, i ? h.selectedMap[o] = i.isSelected(o) : h.selectedMap[o] = !0, h.selectedMap[o] && !isNaN(n[c].value) && (+n[c].value !== 0 ? u++ : a++, f += +n[c].value, l = Math.max(l, +n[c].value));
            var v = 100, m, g = 0, y = t.clockWise, w = t.startAngle.toFixed(2) - 0, E, S = t.minAngle || .01, x = 360 - S * u - .01 * a, N, C = t.roseType, k, L, A;
            for (var c = 0, d = n.length; c < d; c++) {
                o = n[c].name;
                if (!h.selectedMap[o] || isNaN(n[c].value))
                    continue;
                i ? N = i.getColor(o) : N = r.getColor(c), m = v, v = n[c].value / f, C != "area" ? E = y ? w - v * x - (v !== 0 ? S : .01) : v * x + w + (v !== 0 ? S : .01) : E = y ? w - 360 / d : 360 / d + w, E = E.toFixed(2) - 0, v = (v * 100).toFixed(2), k = h.parseRadius(r, t.radius), L = +k[0], A = +k[1], C == "radius" ? A = n[c].value / l * (A - L) * .8 + (A - L) * .2 + L : C == "area" && (A = Math.sqrt(n[c].value / l) * (A - L) + L);
                if (y) {
                    var O;
                    O = w, w = E, E = O
                }
                c > 0 && v < 4 && m < 4 && T(t, n[c], !1) && h.deepQuery([n[c], t], "itemStyle.normal.label.position") != "center" ? g += v < 4 ? 20 : -20 : g = 0, b(e, c, v, g, n[c].selected, L, A, w, E, N), y || (w = E)
            }
        }
        function b(e, t, n, r, i, s, o, u, f, l) {
            var c = w(e, t, n, i, s, o, u, f, l);
            a.pack(c, p[e], e, p[e].data[t], t, p[e].data[t].name, n), c._lastAddRadius = r, h.shapeList.push(c);
            var d = E(e, t, n, r, u, f, l, !1);
            d && (d._dataIndex = t, h.shapeList.push(d));
            var v = x(e, t, r, s, o, u, f, l, !1);
            v && (v._dataIndex = t, h.shapeList.push(v))
        }
        function w(e, t, n, s, o, u, a, l, g) {
            var y = p[e], b = y.data[t], w = [b, y], E = h.parseCenter(r, y.center), S = h.deepMerge(w, "itemStyle.normal") || {}, x = h.deepMerge(w, "itemStyle.emphasis") || {}, C = h.getItemStyleColor(S.color, e, t, b) || g, k = h.getItemStyleColor(x.color, e, t, b) || (typeof C == "string" ? c.lift(C, -0.2) : C), L = {shape: "sector", zlevel: d, clickable: !0, style: {x: E[0], y: E[1], r0: o, r: u, startAngle: a, endAngle: l, brushType: "both", color: C, lineWidth: S.borderWidth, strokeColor: S.borderColor, lineJoin: "round"}, highlightStyle: {color: k, lineWidth: x.borderWidth, strokeColor: x.borderColor, lineJoin: "round"}, _seriesIndex: e, _dataIndex: t};
            if (s) {
                var A = ((L.style.startAngle + L.style.endAngle) / 2).toFixed(2) - 0;
                L.style._hasSelected = !0, L.style._x = L.style.x, L.style._y = L.style.y;
                var O = h.query(y, "selectedOffset");
                L.style.x += f.cos(A, !0) * O, L.style.y -= f.sin(A, !0) * O, m[e][t] = !0
            } else
                m[e][t] = !1;
            v && (L.onclick = h.shapeHandler.onclick), h.deepQuery([b, y, i], "calculable") && (h.setCalculable(L), L.draggable = !0);
            if (T(y, b, !0) || N(y, b, !0))
                L.onmouseover = h.shapeHandler.onmouseover;
            return L
        }
        function E(e, t, n, i, s, o, u, a) {
            var c = p[e], v = c.data[t];
            if (!T(c, v, a))
                return;
            var m = a ? "emphasis" : "normal", g = l.merge(l.clone(v.itemStyle) || {}, c.itemStyle, {overwrite: !1, recursive: !0}), y = g[m].label, b = y.textStyle || {}, w = h.parseCenter(r, c.center), E = w[0], x = w[1], N, C, k = ((o + s) / 2 + 360) % 360, L = h.parseRadius(r, c.radius), A, O = "middle";
            return y.position = y.position || g.normal.label.position, y.position == "center" ? (L = L[1], N = E, C = x, A = "center") : y.position == "inner" ? (L = (L[0] + L[1]) / 2 + i, N = Math.round(E + L * f.cos(k, !0)), C = Math.round(x - L * f.sin(k, !0)), u = "#fff", A = "center") : (L = L[1] - -g[m].labelLine.length + i, N = E + L * f.cos(k, !0), C = x - L * f.sin(k, !0), A = k >= 90 && k <= 270 ? "right" : "left"), y.position != "center" && y.position != "inner" && (N += A == "left" ? 20 : -20), v.__labelX = N - (A == "left" ? 5 : -5), v.__labelY = C, {shape: "text", zlevel: d + 1, hoverable: !1, style: {x: N, y: C, color: b.color || u, text: S(e, t, n, m), textAlign: b.align || A, textBaseline: b.baseline || O, textFont: h.getFont(b)}, highlightStyle: {brushType: "fill"}, _seriesIndex: e, _dataIndex: t}
        }
        function S(e, t, n, r) {
            var i = p[e], s = i.data[t], o = h.deepQuery([s, i], "itemStyle." + r + ".label.formatter");
            if (!o)
                return s.name;
            if (typeof o == "function")
                return o(i.name, s.name, s.value, n);
            if (typeof o == "string")
                return o = o.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}").replace("{d}", "{d0}"), o = o.replace("{a0}", i.name).replace("{b0}", s.name).replace("{c0}", s.value).replace("{d0}", n), o
        }
        function x(e, t, n, i, s, o, u, a, c) {
            var v = p[e], m = v.data[t];
            if (N(v, m, c)) {
                var g = c ? "emphasis" : "normal", y = l.merge(l.clone(m.itemStyle) || {}, v.itemStyle, {overwrite: !1, recursive: !0}), b = y[g].labelLine, w = b.lineStyle || {}, E = h.parseCenter(r, v.center), S = E[0], x = E[1], T = s, C = h.parseRadius(r, v.radius)[1] - -b.length + n, k = (u + o) / 2 % 360, L = f.cos(k, !0), A = f.sin(k, !0);
                return{shape: "brokenLine", zlevel: d + 1, hoverable: !1, style: {pointList: [[S + T * L, x - T * A], [S + C * L, x - C * A], [m.__labelX, m.__labelY]], strokeColor: w.color || a, lineType: w.type, lineWidth: w.width}, _seriesIndex: e, _dataIndex: t}
            }
            return
        }
        function T(e, t, n) {
            return h.deepQuery([t, e], "itemStyle." + (n ? "emphasis" : "normal") + ".label.show")
        }
        function N(e, t, n) {
            return h.deepQuery([t, e], "itemStyle." + (n ? "emphasis" : "normal") + ".labelLine.show")
        }
        function C(e) {
            var n = l.merge;
            return e = n(e || {}, t.pie, {overwrite: !1, recursive: !0}), e.itemStyle.normal.label.textStyle = n(e.itemStyle.normal.label.textStyle || {}, t.textStyle, {overwrite: !1, recursive: !0}), e.itemStyle.emphasis.label.textStyle = n(e.itemStyle.emphasis.label.textStyle || {}, t.textStyle, {overwrite: !1, recursive: !0}), e
        }
        function k(e, t) {
            s = t, L(e)
        }
        function L(e) {
            e && (i = e, p = i.series), h.clear(), g()
        }
        function A(e) {
            var n = {};
            for (var i = 0, s = e.length; i < s; i++)
                n[e[i][0]] = e[i];
            var o = {}, u = {}, a = {}, f = l.clone(h.shapeList);
            h.shapeList = [];
            var c, d, v, m = {};
            for (var i = 0, s = e.length; i < s; i++)
                c = e[i][0], d = e[i][2], v = e[i][3], p[c] && p[c].type == t.CHART_TYPE_PIE && (d ? (v || (o[c + "_" + p[c].data.length] = "delete"), m[c] = 1) : v ? m[c] = 0 : (o[c + "_-1"] = "delete", m[c] = -1), y(c));
            var g, b;
            for (var i = 0, s = h.shapeList.length; i < s; i++) {
                c = h.shapeList[i]._seriesIndex, g = h.shapeList[i]._dataIndex, b = c + "_" + g;
                switch (h.shapeList[i].shape) {
                    case"sector":
                        o[b] = h.shapeList[i];
                        break;
                    case"text":
                        u[b] = h.shapeList[i];
                        break;
                    case"line":
                        a[b] = h.shapeList[i]
                    }
            }
            h.shapeList = [];
            var w;
            for (var i = 0, s = f.length; i < s; i++) {
                c = f[i]._seriesIndex;
                if (n[c]) {
                    g = f[i]._dataIndex + m[c], b = c + "_" + g, w = o[b];
                    if (!w)
                        continue;
                    if (f[i].shape == "sector")
                        w != "delete" ? r.animate(f[i].id, "style").when(400, {startAngle: w.style.startAngle, endAngle: w.style.endAngle}).start() : r.animate(f[i].id, "style").when(400, m[c] < 0 ? {endAngle: f[i].style.startAngle} : {startAngle: f[i].style.endAngle}).start();
                    else if (f[i].shape == "text" || f[i].shape == "line")
                        if (w == "delete")
                            r.delShape(f[i].id);
                        else
                            switch (f[i].shape) {
                                case"text":
                                    w = u[b], r.animate(f[i].id, "style").when(400, {x: w.style.x, y: w.style.y}).start();
                                    break;
                                case"line":
                                    w = a[b], r.animate(f[i].id, "style").when(400, {xStart: w.style.xStart, yStart: w.style.yStart, xEnd: w.style.xEnd, yEnd: w.style.yEnd}).start()
                                }
                }
            }
            h.shapeList = f
        }
        function O() {
            var e = h.query(i, "animationDuration"), t = h.query(i, "animationEasing"), n, s, o, u, f, l;
            for (var c = 0, p = h.shapeList.length; c < p; c++)
                h.shapeList[c].shape == "sector" || h.shapeList[c].shape == "circle" || h.shapeList[c].shape == "ring" ? (n = h.shapeList[c].style.x, s = h.shapeList[c].style.y, o = h.shapeList[c].style.r0, u = h.shapeList[c].style.r, r.modShape(h.shapeList[c].id, {rotation: [Math.PI * 2, n, s], style: {r0: 0, r: 0}}, !0), f = a.get(h.shapeList[c], "series"), l = a.get(h.shapeList[c], "dataIndex"), r.animate(h.shapeList[c].id, "style").when((h.query(f, "animationDuration") || e) + l * 10, {r0: o, r: u}).start("QuinticOut"), r.animate(h.shapeList[c].id, "").when((h.query(f, "animationDuration") || e) + l * 100, {rotation: [0, n, s]}).start(h.query(f, "animationEasing") || t)) : h.shapeList[c]._mark || (l = h.shapeList[c]._dataIndex, r.modShape(h.shapeList[c].id, {scale: [0, 0, n, s]}, !0), r.animate(h.shapeList[c].id, "").when(e + l * 100, {scale: [1, 1, n, s]}).start("QuinticOut"));
            h.animationMark(e, t)
        }
        function M(e) {
            if (!h.isClick || !e.target)
                return;
            var i, s = e.target, o = s.style, u = a.get(s, "seriesIndex"), l = a.get(s, "dataIndex");
            for (var c = 0, d = h.shapeList.length; c < d; c++)
                if (h.shapeList[c].id == s.id) {
                    u = a.get(s, "seriesIndex"), l = a.get(s, "dataIndex");
                    if (!o._hasSelected) {
                        var g = ((o.startAngle + o.endAngle) / 2).toFixed(2) - 0;
                        s.style._hasSelected = !0, m[u][l] = !0, s.style._x = s.style.x, s.style._y = s.style.y, i = h.query(p[u], "selectedOffset"), s.style.x += f.cos(g, !0) * i, s.style.y -= f.sin(g, !0) * i
                    } else
                        s.style.x = s.style._x, s.style.y = s.style._y, s.style._hasSelected = !1, m[u][l] = !1;
                    r.modShape(s.id, s)
                } else
                    h.shapeList[c].style._hasSelected && v == "single" && (u = a.get(h.shapeList[c], "seriesIndex"), l = a.get(h.shapeList[c], "dataIndex"), h.shapeList[c].style.x = h.shapeList[c].style._x, h.shapeList[c].style.y = h.shapeList[c].style._y, h.shapeList[c].style._hasSelected = !1, m[u][l] = !1, r.modShape(h.shapeList[c].id, h.shapeList[c]));
            n.dispatch(t.EVENT.PIE_SELECTED, e.event, {selected: m}), r.refresh()
        }
        function _(t, n) {
            if (!h.isDrop || !t.target)
                return;
            var r = t.target, o = t.dragged, u = a.get(r, "seriesIndex"), f = a.get(r, "dataIndex"), l, c = s.legend;
            if (f == -1)
                l = {value: a.get(o, "value"), name: a.get(o, "name")}, l.value < 0 && (l.value = 0), p[u].data.push(l), c && c.add(l.name, o.style.color || o.style.strokeColor);
            else {
                var d = e("../util/accMath");
                l = p[u].data[f], c && c.del(l.name), l.name += i.nameConnector + a.get(o, "name"), l.value = d.accAdd(l.value, a.get(o, "value")), c && c.add(l.name, o.style.color || o.style.strokeColor)
            }
            n.dragIn = n.dragIn || !0, h.isDrop = !1;
            return
        }
        function D(e, t) {
            if (!h.isDragend || !e.target)
                return;
            var n = e.target, r = a.get(n, "seriesIndex"), i = a.get(n, "dataIndex");
            s.legend && s.legend.del(p[r].data[i].name), p[r].data.splice(i, 1), t.dragOut = !0, t.needRefresh = !0, h.isDragend = !1;
            return
        }
        var o = e("../component/base");
        o.call(this, t, r);
        var u = e("./calculableBase");
        u.call(this, r, i);
        var a = e("../util/ecData"), f = e("zrender/tool/math"), l = e("zrender/tool/util"), c = e("zrender/tool/color"), h = this;
        h.type = t.CHART_TYPE_PIE;
        var p, d = h.getZlevelBase(), v, m = {};
        h.shapeHandler.onmouseover = function(e) {
            var t = e.target, n = a.get(t, "seriesIndex"), i = a.get(t, "dataIndex"), s = a.get(t, "special"), o = t._lastAddRadius, u = t.style.startAngle, f = t.style.endAngle, l = t.highlightStyle.color, c = E(n, i, s, o, u, f, l, !0);
            c && r.addHoverShape(c);
            var h = x(n, i, o, t.style.r0, t.style.r, u, f, l, !0);
            h && r.addHoverShape(h)
        }, h.reformOption = C, h.animation = O, h.init = k, h.refresh = L, h.addDataAnimation = A, h.onclick = M, h.ondrop = _, h.ondragend = D, k(i, s)
    }
    return e("../chart").define("pie", t), t
}), define("_chart", ["require", "echarts/chart/scatter", "echarts/chart/k", "echarts/chart/radar", "echarts/chart/chord", "echarts/chart/force", "echarts/chart/line", "echarts/chart/bar", "echarts/chart/pie"], function(e) {
    e("echarts/chart/scatter"), e("echarts/chart/k"), e("echarts/chart/radar"), e("echarts/chart/chord"), e("echarts/chart/force"), e("echarts/chart/line"), e("echarts/chart/bar"), e("echarts/chart/pie")
});