
// barchart1
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart1_1);
google.charts.setOnLoadCallback(drawChart1_2);
google.charts.setOnLoadCallback(drawChart1_3);
google.charts.setOnLoadCallback(drawChart1_4);

google.charts.setOnLoadCallback(drawChart2_1);
google.charts.setOnLoadCallback(drawChart2_2);
google.charts.setOnLoadCallback(drawChart2_3);
google.charts.setOnLoadCallback(drawChart2_4);

google.charts.setOnLoadCallback(drawChart3_1);
google.charts.setOnLoadCallback(drawChart3_2);
google.charts.setOnLoadCallback(drawChart3_3);
google.charts.setOnLoadCallback(drawChart3_4);
google.charts.setOnLoadCallback(drawChart3_5);

google.charts.setOnLoadCallback(drawChart4_1);
google.charts.setOnLoadCallback(drawChart4_2);

// 1. Barchart
// barchart1
function drawChart1_1() {

    var data = google.visualization.arrayToDataTable([
        ['Element', 'Density', { role: 'style' }, { role: 'annotation' }],
        ['Copper', 8.94, '#b87333', 'Cu'],            // RGB value
        ['Silver', 10.49, 'silver', 'Ag'],            // English color name
        ['Gold', 19.30, 'gold', 'Au'],
        ['PlatinumPlatinumPlatinumPlatinumPlatinum', 21.45, 'color: #e5e4e2', 'tP'], // CSS-style declaration
    ]);

    var options = {
        width: 800,
        height: 400,
        title: 'Bar Chart',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    };

    var chart = new google.visualization.BarChart(document.getElementById('barchart1'));

    chart.draw(data, options);

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

    var options = {
        width: 800,
        height: 400,
        title: 'Bar Chart - Color, Border',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    };

    var chart = new google.visualization.BarChart(document.getElementById('barchart2'));

    chart.draw(data, options);

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

    var options = {
        width: 800,
        height: 400,
        title: 'Bar Chart - Column',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('columnchart1'));

    chart.draw(data, options);

}

// barchart_material
function drawChart1_4() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
    ]);

    var options = {
        chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
        bars: 'horizontal' // Required for Material Bar Charts.
    };

    var chart = new google.charts.Bar(document.getElementById('barchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
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
        width: 500,
        height: 200,
        title: 'Pie Chart',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: '#efefef',
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
        width: 500,
        height: 200,
        title: 'Doughnut Chart',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: '#efefef',
        pieHole: 0.4,
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
        width: 500,
        height: 200,
        title: 'Pie Chart - 3D',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: '#efefef',
        is3D: true,
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
        width: 500,
        height: 200,
        title: 'Pie Chart - Slice',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: '#efefef',
        slices: { 3: { offset: 0.2 }, },
    };

    var chart = new google.visualization.PieChart(document.getElementById('pie_slice'));

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
        width: 500,
        height: 200,
        title: 'Pie Chart - 연결선',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: '#efefef',
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
        width: 500,
        height: 200,
        title: 'Pie Chart - 범례위치 (Top)',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: '#efefef',
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
        width: 500,
        height: 200,
        title: 'Pie Chart - 범례위치 (Bottom)',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: '#efefef',
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
        width: 500,
        height: 200,
        title: 'Pie Chart - 범례위치 (Right)',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: '#efefef',
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
        width: 500,
        height: 200,
        title: 'Pie Chart - 범례위치 (Left)',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        backgroundColor: '#efefef',
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
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}

// curve_chart_line
function drawChart4_2() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]
    ]);

    var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' },
        series: {
            0: { lineWidth: 1 },
            1: { lineWidth: 4, lineDashStyle: [4, 4] }
        },
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart_line'));

    chart.draw(data, options);
}