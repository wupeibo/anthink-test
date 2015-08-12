var ECharts = {
    ChartConfig: function(container, option) {

        var chart_path = "/pretty/Static/Resource/lib/echarts/echarts";
        var map_path = "/pretty/Static/Resource/lib/echarts/echarts-map"; //配置地图的请求路径 

        require.config({//引入常用的图表类型的配置
            paths: {
                echarts: chart_path,
                'echarts/chart/bar': chart_path,
                'echarts/chart/pie': chart_path,
                'echarts/chart/line': chart_path,
                'echarts/chart/k': chart_path,
                'echarts/chart/scatter': chart_path,
                'echarts/chart/radar': chart_path,
                'echarts/chart/chord': chart_path,
                'echarts/chart/force': chart_path,
                'echarts/chart/map': map_path
            }
        });

        this.option = {chart: {}, option: option, container: container};
        return this.option;

    },
    ChartDataFormate: {
        FormateNOGroupData: function(data) {
            //data的格式如上的Result1，这种格式的数据，多用于饼图、单一的柱形图的数据源
            var categories = [];
            var datas = [];
            for (var i = 0; i < data.length; i++) {
                categories.push(data[i].name || "");
                datas.push({name: data[i].name, value: data[i].value || 0});
            }
            return {category: categories, data: datas};
        },
        FormateGroupData: function(data, type, is_stack) {
            //data的格式如上的Result2，type为要渲染的图表类型：可以为line，bar，is_stack表示为是否是堆积图，这种格式的数据多用于展示多条折线图、分组的柱图
            var chart_type = 'line';
            if (type)
                chart_type = type || 'line';

            var xAxis = [];
            var group = [];
            var series = [];

            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < xAxis.length && xAxis[j] != data[i].name; j++)
                    ;
                if (j == xAxis.length)
                    xAxis.push(data[i].name);

                for (var k = 0; k < group.length && group[k] != data[i].group; k++)
                    ;
                if (k == group.length)
                    group.push(data[i].group);
            }


            for (var i = 0; i < group.length; i++) {
                var temp = [];
                for (var j = 0; j < data.length; j++) {
                    if (group[i] == data[j].group) {
                        if (type == "map") {
                            temp.push({name: data[j].name, value: data[i].value});
                        } else {
                            temp.push(data[j].value);
                        }
                    }

                }



                switch (type) {
                    case 'bar':
                        var series_temp = {name: group[i], data: temp, type: chart_type};
                        if (is_stack)
                            series_temp = $.extend({}, {stack: 'stack'}, series_temp);
                        break;

                    case 'map':
                        var series_temp = {
                            name: group[i], type: chart_type, mapType: 'china', selectedMode: 'single',
                            itemStyle: {
                                normal: {label: {show: true}},
                                emphasis: {label: {show: true}}
                            },
                            data: temp
                        };
                        break;

                    case 'line':
                        var series_temp = {name: group[i], data: temp, type: chart_type};
                        if (is_stack)
                            series_temp = $.extend({}, {stack: 'stack'}, series_temp);
                        break;

                    default:
                        var series_temp = {name: group[i], data: temp, type: chart_type};
                }
                series.push(series_temp);
            }
            return {category: group, xAxis: xAxis, series: series};
        }
    }
    ,
    ChartOptionTemplates: {
        CommonOption: {
            //通用的图表基本配置 
            tooltip: {
                trigger: 'axis'//tooltip触发方式:axis以X轴线触发,item以每一个数据项触发 
            },
            toolbox: {
                show: true, //是否显示工具栏 
                feature: {
                    mark: true,
                    dataView: {readOnly: false}, //数据预览 
                    restore: true, //复原 
                    saveAsImage: true //是否保存图片 
                }
            }
        },
        CommonLineOption: {//通用的折线图表的基本配置 
            tooltip: {
                trigger: 'axis'
            },
            calculable: true,
            toolbox: {
                show: true,
                feature: {
                    dataView: {readOnly: false}, //数据预览
                    restore: true, //复原
                    saveAsImage: true, //是否保存图片
                    magicType: ['line', 'bar']//支持柱形图和折线图的切换 
                }
            }
        },
        Pie: function(data, name) {
            //data:数据格式：{name：xxx,value:xxx}...
            var pie_datas = ECharts.ChartDataFormate.FormateNOGroupData(data);

            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{b} : {c} ({d}/%)',
                    show: true
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: pie_datas.category
                },
                calculable: true,
                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: true},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                series: [
                    {
                        name: name || "",
                        type: 'pie',
                        radius: '65%',
                        center: ['50%', '50%'],
                        data: pie_datas.data
                    }
                ]
            };
            return $.extend({}, ECharts.ChartOptionTemplates.CommonOption, option);
        },
        Lines: function(data, name, is_stack) {
            //data:数据格式：{name：xxx,group:xxx,value:xxx}...
            var bars_dates = ECharts.ChartDataFormate.FormateGroupData(data.data, 'line', is_stack);
            var option = {
                title: {
                    x: 'center',
                    text: data.title,
                    subtext: data.sub,
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    x: 'left',
                    data: bars_dates.category
                },
                toolbox: {
                    show: true,
                    x: 'right',
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['bar', 'line']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                xAxis: [{
                        type: 'category',
                        data: bars_dates.xAxis,
                        axisLabel: {
                            show: true,
                            interval: 'auto',
                            rotate: 0,
                            margion: 8
                        }
                    }],
                yAxis: [{
                        type: 'value',
                        name: data.y || '',
                        splitArea: {show: true}
                    }],
                series: bars_dates.series
            };
            return $.extend({}, ECharts.ChartOptionTemplates.CommonLineOption, option);
        },
        Bars: function(data, name, is_stack) {
            //data:数据格式：{name：xxx,group:xxx,value:xxx}...
            var bars_dates = ECharts.ChartDataFormate.FormateGroupData(data.data, 'bar', is_stack);
            var option = {
                title: {
                    x: 'center',
                    text: data.title,
                    subtext: data.sub,
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    x: 'left',
                    data: bars_dates.category
                },
                toolbox: {
                    show: true,
                    x: 'right',
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                xAxis: [{
                        type: 'category',
                        data: bars_dates.xAxis,
                        axisLabel: {
                            show: true,
                            interval: 'auto',
                            rotate: 0,
                            margion: 8
                        }
                    }],
                yAxis: [{
                        type: 'value',
                        name: data.y || '',
                        splitArea: {show: true}
                    }],
                series: bars_dates.series
            };
            return $.extend({}, ECharts.ChartOptionTemplates.CommonLineOption, option);
        },
        LineBar: function(data, name, is_stack) {
            var option = {
                title: {
                    text: data.title,
                    subtext: data.sub,
                    sublink: '',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                legend: {
                    x: 'left',
                    data: data.data.grupe    //['导购员分销数量', '导购员销售额', '导购员提成', '推广员分销数量', '推广员销售额', '推广员提成']//
                },
                xAxis: [
                    {
                        type: 'category',
                        data: data.data.x_val    //['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']//
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '分销数量（笔）',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    {
                        type: 'value',
                        name: '销售额与提成（元）',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    }
                ],
                series: data.data.data
            };
            return option;
        },
        PMap: function(data, name, is_stack) {
            //data:数据格式：data1[{name: "海门", value: 9},{name: "鄂尔多斯", value: 12}]  data2 {"海门": [121.15, 31.89],"鄂尔多斯": [109.781327, 39.608266]}
//            var map_dates = ECharts.ChartDataFormate.FormateGroupData(data, 'map', is_stack);
            var option = {
                title: {
                    text: data.title,
                    subtext: data.sub,
                    sublink: '',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: data.grupe
                },
                dataRange: {
                    min: 0,
                    max: data.max,
                    calculable: true,
                    color: ['red', 'orange', 'yellow', 'lightgreen', 'lightblue', 'white']
                },
                toolbox: {
                    show: true,
                    padding: '2',
                    orient: 'vertical',
                    x: 'right',
                    y: 'center',
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                series: data.data
            };
//            console.log(option.series);
            return option;
        }
    }
    ,
    Charts: {
        RenderChart: function(option) {
            require([
                'echarts',
                'echarts/chart/line',
                'echarts/chart/bar',
                'echarts/chart/pie',
                'echarts/chart/k',
                'echarts/chart/scatter',
                'echarts/chart/radar',
                'echarts/chart/chord',
                'echarts/chart/force',
                'echarts/chart/map'
            ],
                    function(ec) {
                        echarts = ec;
                        if (option.chart && option.chart.dispose)
                            option.chart.dispose();

                        option.chart = echarts.init(option.container);
                        window.onresize = option.chart.resize;
                        option.chart.setOption(option.option, true);
                    });
        }
    }
    ,
    RenderMap: function(option) {
    }


};
  