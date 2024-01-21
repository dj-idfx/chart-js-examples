/**
 * Bubble chart example,
 * using data from an api and implementing custom plugins.
 */
import Chart from 'chart.js/auto';
import { getDimensions } from '../api/api';
import { chartAreaBorder, canvasBackgroundColor } from '../plugins/plugins';

(async function() {
    const bubbleChart = document.getElementById('bubbleChart');

    const bubbleChartData = await getDimensions();

    new Chart(bubbleChart,{
        type: 'bubble',
        plugins: [ chartAreaBorder, canvasBackgroundColor ],
        options: {
            plugins: {
                chartAreaBorder: {
                    borderColor: 'red',
                    borderWidth: 2,
                    borderDash: [ 5, 5 ],
                    borderDashOffset: 2,
                },
                canvasBackgroundColor: {
                    color: '#fafafa',
                }
            },
            aspectRatio: 1,
            scales: {
                x: {
                    min: 0,
                    max: 500,
                    ticks: {
                        callback: value => `${value / 100} m`
                    },
                },
                y: {
                    min: 0,
                    max: 500,
                    ticks: {
                        callback: value => `${value / 100} m`
                    }
                }
            },
            layout: {
                padding: 25
            }
        },
        data: {
            labels: bubbleChartData.map(x => x.year),
            datasets: [
                {
                    label: 'width < height',
                    data: bubbleChartData
                        .filter(row => row.width < row.height)
                        .map(row => ({
                            x: row.width,
                            y: row.height,
                            r: row.count
                        })),
                    backgroundColor: '#e18c8c',
                    borderColor: '#a20e0e',
                },
                {
                    label: 'width = height',
                    data: bubbleChartData
                        .filter(row => row.width === row.height)
                        .map(row => ({
                            x: row.width,
                            y: row.height,
                            r: row.count
                        })),
                    backgroundColor: '#8cbbe1',
                    borderColor: '#1266a1',
                },
                {
                    label: 'width > height',
                    data: bubbleChartData
                        .filter(row => row.width > row.height)
                        .map(row => ({
                            x: row.width,
                            y: row.height,
                            r: row.count
                        })),
                    backgroundColor: '#aaf38d',
                    borderColor: '#3ba60e',

                }
            ]
        }
    });
})();
