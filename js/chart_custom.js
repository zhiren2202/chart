// 1-1. Bar (basic)
var ctx = document.getElementById('barchart-1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    plugins: [ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Bar (basic)',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: function (value, context) {
                    var idx = context.dataIndex;
                    return context.chart.data.labels[idx] + value + '%';
                },
            },
            title: {
                display: true,
                text: 'Bar (basic)',
                position: 'top',
                font: {
                    size: '20px'
                }
            }
        }
    }
});

// 1-2. Bar (color, border, width)
var ctx = document.getElementById('barchart-2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Bar (color, border, width)',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 255, 0.2)',
                'rgba(54, 162, 5, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 255, 1)',
                'rgba(54, 162, 5, 1)',
                'rgba(10, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4,
            barPercentage : 0.5,
        }]
    },
    options: {
        plugins:{
            legend: {
                display: false
            },
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    weight: 'bold',
                    size: '16px',
                },
                color: '#333',
            },
            title: {
                display: true,
                text: 'Bar (color, border, width)',
                position: 'top',
                font: {
                    size: '20px'
                }
            },
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// 2-1. horizontal (basic)
var ctx = document.getElementById('horichart-1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Bar (basic)',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, )',
                'rgba(54, 162, 235, )',
                'rgba(255, 206, 86, )',
                'rgba(75, 192, 192, )',
                'rgba(153, 102, 255, )',
                'rgba(255, 159, 64, )'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: function (value, context) {
                    var idx = context.dataIndex;
                    return value;
                },
                color: '#333',
                font: {
                    size: '16px'
                },
            },
            title: {
                display: true,
                text: 'Horizontal (basic)',
                position: 'top',
                font: {
                    size: '20px'
                }
            },
        },
    }
});

// 2-2. horizontal (double)
var ctx = document.getElementById('horichart-2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [
            {
            label: 'Bar (basic)',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
        },
            {
            label: 'Bar (basic)',
            data: [15, 1, 13, 8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }
    ]
    },
    options: {
        indexAxis: 'y',
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: function (value, context) {
                    var idx = context.dataIndex;
                    return value;
                },
                color: '#333',
                font: {
                    size: '16px'
                },
            },
            title: {
                display: true,
                text: 'Horizontal (double)',
                position: 'top',
                font: {
                    size: '20px'
                }
            },
        },
    }
});

// 2-3. horizontal (border radius)
var ctx = document.getElementById('horichart-3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Bar (basic)',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            borderRadius: 30,
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: function (value, context) {
                    var idx = context.dataIndex;
                    return value;
                },
                align: 'center',
                color: '#fff'
            },
            title: {
                display: true,
                text: 'Horizontal (border radius)',
                position: 'top',
                font: {
                    size: '20px'
                }
            }
        },
    }
});

// 3-1. Pie (basic)
var ctx = document.getElementById('piechart-1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Bar (basic)',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    size: '16px',
                },
                color: '#333',
            },
            title: {
                display: true,
                text: 'Pie (basic)',
                position: 'top',
                font: {
                    size: '20px'
                }
            }
        }
    }
});

// 3-2. Pie (color, border)
var ctx = document.getElementById('piechart-2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Bar (basic)',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 255, 0.5)',
                'rgba(54, 162, 5, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    size: '16px',
                },
                color: '#333',
            },
            title: {
                display: true,
                text: 'Pie (color, border)',
                position: 'top',
                font: {
                    size: '20px'
                }
            }
        }
    }
});

// 3-3. Pie (doughnut)
var ctx = document.getElementById('piechart-3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'Bar (basic)',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    size: '18px',
                    weight: 'bold'
                },
                color: '#fff',
            },
            title: {
                display: true,
                text: 'Pie (doughnut)',
                position: 'top',
                font: {
                    size: '20px'
                }
            }
        }
    }
});

// 3-4. Pie (legend - bottom)
var ctx = document.getElementById('piechart-4').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'Bar (basic)',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    size: '18px',
                    weight: 'bold'
                },
                color: '#fff',
            },
            title: {
                display: true,
                text: 'Pie (legend - bottom)',
                position: 'top',
                font: {
                    size: '20px'
                }
            },
            legend: {
                position : 'bottom'
            }
        }
    }
});

// 3-5. Pie (legend - left)
var ctx = document.getElementById('piechart-5').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'Bar (basic)',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    size: '18px',
                    weight: 'bold'
                },
                color: '#fff',
            },
            title: {
                display: true,
                text: 'Pie (legend - left)',
                position: 'top',
                font: {
                    size: '20px'
                }
            },
            legend: {
                position : 'left'
            }
        }
    }
});

// 3-6. Pie (legend - right)
var ctx = document.getElementById('piechart-6').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'Bar (basic)',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    size: '18px',
                    weight: 'bold'
                },
                color: '#fff',
            },
            title: {
                display: true,
                text: 'Pie (legend - right)',
                position: 'top',
                font: {
                    size: '20px'
                }
            },
            legend: {
                position : 'right'
            }
        }
    }
});

// 3-7. Pie (legend - top left)
var ctx = document.getElementById('piechart-7').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'Bar (basic)',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    size: '18px',
                    weight: 'bold'
                },
                color: '#fff',
            },
            title: {
                display: true,
                text: 'Pie (legend - top left)',
                position: 'top',
                font: {
                    size: '20px'
                }
            },
            legend: {
                position : 'left',
                align: 'start'
            }
        }
    }
});

// 3-8. Pie (legend - bottom right)
var ctx = document.getElementById('piechart-8').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'Bar (basic)',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    size: '18px',
                    weight: 'bold'
                },
                color: '#fff',
            },
            title: {
                display: true,
                text: 'Pie (legend - bottom right)',
                position: 'top',
                font: {
                    size: '20px'
                }
            },
            legend: {
                position : 'right',
                align: 'end'
            }
        }
    }
});

// 4-1. Line (Basic)
var ctx = document.getElementById('linechart-1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'LIne (basic)',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)'
                'rgba(255,255,255,1)'
            ],
            borderColor: [
            'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    size: '16px',
                },
                color: '#333',
            },
            title: {
                display: true,
                text: 'Line (Basic)',
                position: 'top',
                font: {
                    size: '20px'
                }
            }
        }
    }
});

// 4-2. Line (Curve)
var ctx = document.getElementById('linechart-2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'LIne (basic)',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)'
                'rgba(255,255,255,1)'
            ],
            borderColor: [
            'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
            tension: 0.4
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    size: '16px',
                },
                color: '#333',
            },
            title: {
                display: true,
                text: 'Line (Curve)',
                position: 'top',
                font: {
                    size: '20px'
                }
            }
        }
    }
});

// 4-3. Line (Color, Border)
var ctx = document.getElementById('linechart-3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'LIne (basic)',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 5,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    weight: 'bold',
                    size: '20px',
                },
                color: '#333',
            },
            title: {
                display: true,
                text: 'Line (Color, Border)',
                position: 'top',
                font: {
                    size: '20px'
                }
            }
        }
    }
});

// 4-4. Line (label position - top)
var ctx = document.getElementById('linechart-4').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'LIne (basic)',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderColor: [
            'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 5,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    weight: 'bold',
                    size: '20px',
                },
                color: '#333',
                align: 'end',
                offset: '2',
            },
            title: {
                display: true,
                text: 'Line (Label Position - Top)',
                position: 'top',
                font: {
                    size: '20px'
                }
            }
        }
    }
});

// 4-5. Line (label position - 45 degree)
var ctx = document.getElementById('linechart-5').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'LIne (basic)',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderColor: [
            'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 5,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    weight: 'bold',
                    size: '20px',
                },
                color: '#333',
                align: '-45',
                offset: '1'
            },
            title: {
                display: true,
                text: 'Line (Label Position - 45 degree)',
                position: 'top',
                font: {
                    size: '20px'
                }
            }
        }
    }
});

// 4-6. Line (Area)
var ctx = document.getElementById('linechart-6').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'LIne (basic)',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderColor: [
            'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 5,
            fill: {
                target: 'origin',
                above: 'rgba(255, 206, 86, 0.5)',
                below: 'rgb(0, 0, 255)'
            }
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    weight: 'bold',
                    size: '20px',
                },
                color: '#333',
            },
            title: {
                display: true,
                text: 'Line (Area)',
                position: 'top',
                font: {
                    size: '20px'
                }
            },
        }
    }
});

// 4-7. Line (Point Style - color)
var ctx = document.getElementById('linechart-7').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'LIne (basic)',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderColor: [
            'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 5,
            pointBorderWidth: 10,
            pointBorderColor:[
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 110, 10, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    weight: 'bold',
                    size: '20px',
                },
                color: '#333',
                align: '-45',
                offset: '1'
            },
            title: {
                display: true,
                text: 'Line (Point Style - color)',
                position: 'top',
                font: {
                    size: '20px'
                }
            }
        }
    }
});

// 4-8. Line (Point Style - rect)
var ctx = document.getElementById('linechart-8').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'LIne (basic)',
            data: [12, 19, 3, 5, 2],
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 5,
            pointStyle:'rect',
            pointBorderWidth: 10,
            pointBorderColor:'#d3687f'
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    weight: 'bold',
                    size: '20px',
                },
                color: '#333',
                align: '-45',
                offset: '1'
            },
            title: {
                display: true,
                text: 'Line (Point Style - rect)',
                position: 'top',
                font: {
                    size: '20px'
                }
            }
        }
    }
});

// 4-9. Line (Point Style - triangle)
var ctx = document.getElementById('linechart-9').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'LIne (basic)',
            data: [12, 19, 3, 5, 2],
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 5,
            pointStyle:'triangle',
            pointBorderWidth: 10,
            pointBorderColor:'#d3687f'
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    weight: 'bold',
                    size: '20px',
                },
                color: '#333',
                align: '-45',
                offset: '1'
            },
            title: {
                display: true,
                text: 'Line (Point Style - triangle)',
                position: 'top',
                font: {
                    size: '20px'
                }
            }
        }
    }
});

// 4-10. Line (Point Style - rectRot)
var ctx = document.getElementById('linechart-10').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    plugins:[ChartDataLabels],
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'LIne (basic)',
            data: [12, 19, 3, 5, 2],
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 5,
            pointStyle:'rectRot',
            pointBorderWidth: 10,
            pointBorderColor:'#d3687f'
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter : function(value,context) {
                    var idx = context.dataIndex;
                    return value;
                },
                font: {
                    weight: 'bold',
                    size: '20px',
                },
                color: '#333',
                align: '-45',
                offset: '1'
            },
            title: {
                display: true,
                text: 'Line (Point Style - rectRot)',
                position: 'top',
                font: {
                    size: '20px'
                }
            }
        }
    }
});