/**
 * Line chart example with using the optional deferred plugin.
 * Once loaded, the plugin, available under the global ChartDeferred property, needs to be registered
 */
import ChatDeferred from 'chartjs-plugin-deferred';
import {
    Chart,
    Colors,
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend,
    Tooltip,
} from 'chart.js'

Chart.register(
    Colors,
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend,
    Tooltip,
);

(async function() {
    const deferredChart = document.getElementById('deferredChart');

    const deferredChartData = [
        { year: 2014, users: 3, interactions: 6 },
        { year: 2015, users: 8, interactions: 16 },
        { year: 2016, users: 13, interactions: 19 },
        { year: 2017, users: 18, interactions: 21 },
        { year: 2018, users: 17, interactions: 22 },
        { year: 2019, users: 15, interactions: 18 },
        { year: 2020, users: 14, interactions: 16 },
        { year: 2021, users: 19, interactions: 22 },
        { year: 2022, users: 23, interactions: 26 },
        { year: 2023, users: 28, interactions: 30 },
    ];

    new Chart(deferredChart,{
        type: 'line',
        plugins: [ ChatDeferred ],
        options: {
            plugins: {
                deferred: {
                    delay: 500,
                    yOffset: '50%'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 30,
                    ticks: {
                        callback: value => `${value * 1000}`
                    },
                }
            },
        },
        data: {
            labels: deferredChartData.map(row => row.year),
            datasets: [
                {
                    label: 'Users by year',
                    data: deferredChartData.map(row => row.users)
                },
                {
                    label: 'Interactions by year',
                    data: deferredChartData.map(row => row.interactions)
                }
            ]
        }
    });
})();
