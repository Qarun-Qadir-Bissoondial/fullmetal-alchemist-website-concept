$(function () { 
    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'What people think about Fullmetal Alchemist Brotherhood'
        },
        xAxis: {
            categories: ['MyAnimeList.net', "IMDb", 'Common Sense Media']
        },
        series: [{
            name: 'Ratings',
            data: [9.2, 8, 9.1]
        }]
    });
});

/* */