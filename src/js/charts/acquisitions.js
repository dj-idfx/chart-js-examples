/**
 * Bar chart example with default options and plugins set to false.
 * Use data from an api or define a set in here.
 */
import Chart from 'chart.js/auto';
import { getAcquisitionsByYear } from '../api/api';

(async function() {
    const acquisitionsChart = document.getElementById('acquisitionsChart');

    /* Example dataset defined here */
    /*
    const acquisitionsChartData = [
        { year: 2014, count: 10 },
        { year: 2015, count: 20 },
        { year: 2016, count: 15 },
        { year: 2017, count: 25 },
        { year: 2018, count: 22 },
        { year: 2019, count: 21 },
        { year: 2020, count: 16 },
        { year: 2021, count: 21 },
        { year: 2022, count: 24 },
        { year: 2023, count: 28 },
    ];
    */

    /* Example dataset from api (import api.js is on top of this document) */
    const acquisitionsChartData = await getAcquisitionsByYear();

    new Chart(acquisitionsChart,{
        type: 'bar',
        options: {
            animation: false,
            plugins: {
                colors: {
                    enabled: false
                },
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        },
        data: {
            labels: acquisitionsChartData.map(row => row.year),
            datasets: [
                {
                    label: 'Acquisitions by year',
                    data: acquisitionsChartData.map(row => row.count)
                }
            ]
        }
    });
})();
