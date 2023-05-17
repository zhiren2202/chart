
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart1_1);
google.charts.setOnLoadCallback(drawChart1_2);
google.charts.setOnLoadCallback(drawChart1_3);

google.charts.setOnLoadCallback(drawChart2_1);
google.charts.setOnLoadCallback(drawChart2_2);
google.charts.setOnLoadCallback(drawChart2_3);
google.charts.setOnLoadCallback(drawChart2_4);
google.charts.setOnLoadCallback(drawChart2_5);
google.charts.setOnLoadCallback(drawChart2_6);

google.charts.setOnLoadCallback(drawChart3_1);
google.charts.setOnLoadCallback(drawChart3_2);
google.charts.setOnLoadCallback(drawChart3_3);
google.charts.setOnLoadCallback(drawChart3_4);
google.charts.setOnLoadCallback(drawChart3_5);

google.charts.setOnLoadCallback(drawChart4_1);
google.charts.setOnLoadCallback(drawChart4_2);
google.charts.setOnLoadCallback(drawChart4_3);
google.charts.setOnLoadCallback(drawChart4_4);


// 1. Barchart
// barchart1
function drawChart1_1() {

    var data = google.visualization.arrayToDataTable([
        ['Element', 'Density', { role: 'style' }],
        ['Copper', 8.94, '#b87333'],
        ['Silver', 10.49, 'silver'],
        ['Gold', 19.30, 'gold'],
        ['PlatinumPlatinumPlatinumPlatinumPlatinum', 21.45, 'color: #e5e4e2'],
    ]);
    
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation",
        },
        2]);

    var options = {
        width: '100%',
        height: 'auto',
        title: 'Bar Chart',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        legend: { position: "none" },
    };

    var chart = new google.visualization.BarChart(document.getElementById('barchart1'));

    chart.draw(view, options);

}

// barchart2
function drawChart1_2() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Visitations', { role: 'style' }],
        ['2010', 10, 'color: gray'],
        ['2020', 14, 'color: #76A7FA'],
        ['2030', 16, 'opacity: 0.2'],
        ['2040', 22, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
        ['2050', 28, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2']
    ]);
    
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2]);

    var options = {
        width: '100%',
        height: 'auto',
        title: 'Bar Chart - Color, Border',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        legend: { position: "none" },
    };

    var chart = new google.visualization.BarChart(document.getElementById('barchart2'));

    chart.draw(view, options);

}

// columnchart1
function drawChart1_3() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Visitations', { role: 'style' }],
        ['2010', 10, 'color: gray'],
        ['2020', 14, 'color: #76A7FA'],
        ['2030', 16, 'opacity: 0.2'],
        ['2040', 22, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
        ['PlatinumPlatinumPlatinumPlatinumPlatinum', 28, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2']
    ]);
    
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2]);

    var options = {
        width: '100%',
        height: 'auto',
        title: 'Bar Chart - Column',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        legend: { position: "none" },
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('columnchart1'));

    chart.draw(view, options);

}



// 2. Piechart
// piechart
function drawChart2_1() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        width: '100%',
        height: 'auto',
        title: 'Pie Chart',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: 'none',
        chartArea:{
            width:'90%',
            height:'70%'
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);

}

// doughnutchart
function drawChart2_2() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        // width: 500,
        // height: 200,
        width: '100%',
        height: 'auto',
        title: 'Doughnut Chart',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: 'none',
        pieHole: 0.4,
        chartArea:{
            width:'100%',
            height:'100%'
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('doughnutchart'));

    chart.draw(data, options);

}

// pie_is3d
function drawChart2_3() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        width: '100%',
        height: 'auto',
        title: 'Pie Chart - 3D',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: 'none',
        is3D: true,
        chartArea:{
            width:'90%',
            height:'70%'
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('pie_is3d'));

    chart.draw(data, options);

}

// pie_slice
function drawChart2_4() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        width: '100%',
        height: 'auto',
        title: 'Pie Chart - Slice',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: 'none',
        slices: { 3: { offset: 0.2 }, },
        chartArea:{
            width:'90%',
            height:'70%'
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('pie_slice'));

    chart.draw(data, options);

}

// pie_slices
function drawChart2_5() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        width: '100%',
        height: 'auto',
        title: 'Pie Chart - Slices',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: 'none',
        slices: { 
            1: { offset: 0.4 },
            3: { offset: 0.2 }, },
        chartArea:{
            width:'90%',
            height:'70%'
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('pie_slices'));

    chart.draw(data, options);

}
// piechart_color
function drawChart2_6() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        width: '100%',
        height: 'auto',
        title: 'Pie Chart - Color',
        colors: ['#B9EDDD', '#87CBB9', '#569DAA', '#577D86', '#0A4D68'],
        backgroundColor: 'none',
        chartArea:{
            width:'90%',
            height:'70%'
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_color'));

    chart.draw(data, options);

}

// 3. Piechart - Legend
// piechart_legend_labeled
function drawChart3_1() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        width: '100%',
        height: 'auto',
        title: 'Pie Chart - 연결선',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: 'none',
        legend: 'labeled',
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_legend_labeled'));

    chart.draw(data, options);

}

// piechart_legend_position_top
function drawChart3_2() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        width: '100%',
        height: 'auto',
        title: 'Pie Chart - 범례위치 (Top)',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: 'none',
        legend: 'top',
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_legend_position_top'));

    chart.draw(data, options);

}

// piechart_legend_position_bottom
function drawChart3_3() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        width: '100%',
        height: 'auto',
        title: 'Pie Chart - 범례위치 (Bottom)',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: 'none',
        legend: 'bottom',
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_legend_position_bottom'));

    chart.draw(data, options);

}

//piechart_legend_position_right
function drawChart3_4() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        width: '100%',
        height: 'auto',
        title: 'Pie Chart - 범례위치 (Right)',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: 'none',
        legend: 'right',
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_legend_position_right'));

    chart.draw(data, options);

}

// piechart_legend_position_left
function drawChart3_5() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        width: '100%',
        height: 'auto',
        title: 'Pie Chart - 범례위치 (Left)',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: 'none',
        legend: 'left',
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_legend_position_left'));

    chart.draw(data, options);

}

// 4. Curvechart
// curve_chart
function drawChart4_1() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]
    ]);

    var options = {
        width: '100%',
        height: 'auto',
        title: 'Curve Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}

// curve_chart_dot
function drawChart4_2() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]
    ]);

    var options = {
        width: '100%',
        height: 'auto',
        title: 'Curve Chart (dot,color)',
        curveType: 'function',
        legend: { position: 'bottom' },
        series: {
            0: { lineWidth: 1 },
            1: { lineWidth: 4, lineDashStyle: [4, 4] }
        },
        colors : ['purple','orange'],
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart_dot'));

    chart.draw(data, options);
}

// line_chart
function drawChart4_3() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]
    ]);

    var options = {
        width: '100%',
        height: 'auto',
        title: 'Line Chart',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('line_chart'));

    chart.draw(data, options);
}

// area_chart
function drawChart4_4() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]
    ]);

    var options = {
        width: '100%',
        height: 'auto',
        title: 'Area Chart',
        hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0},
        legend: { position: 'bottom' },
        colors: ['orange','green']
    };

    var chart = new google.visualization.AreaChart(document.getElementById('area_chart'));

    chart.draw(data, options);
}