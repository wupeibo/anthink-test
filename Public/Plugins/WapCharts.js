

function DrawPie(data, id, title) {

    var option = ECharts.ChartOptionTemplates.Pie(data, title);
    var container = document.getElementById(id);
    opt = ECharts.ChartConfig(container, option);
    ECharts.Charts.RenderChart(opt);

}


function DrawBar(data, id, title) {

    var option = ECharts.ChartOptionTemplates.Bars(data, title);
    var container = document.getElementById(id);
    opt = ECharts.ChartConfig(container, option);
    ECharts.Charts.RenderChart(opt);

}

function DrawLines(data, id, title) {

    var option = ECharts.ChartOptionTemplates.Lines(data, title);
    var container = document.getElementById(id);
    opt = ECharts.ChartConfig(container, option);
    ECharts.Charts.RenderChart(opt);

}

function DrawPMap(data, id, title) {

    var option = ECharts.ChartOptionTemplates.PMap(data, title);
    var container = document.getElementById(id);
    opt = ECharts.ChartConfig(container, option);
    ECharts.Charts.RenderChart(opt);

}

function DrawLineBar(data, id, title) {

    var option = ECharts.ChartOptionTemplates.LineBar(data, title);
    var container = document.getElementById(id);
    opt = ECharts.ChartConfig(container, option);
    ECharts.Charts.RenderChart(opt);

}