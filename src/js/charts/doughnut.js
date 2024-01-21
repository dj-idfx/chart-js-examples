/**
 * Doughnut chart example with a background image.
 * This way of giving the chart a background is only necessary if you want to export the chart with that specific background.
 * For normal use you can set the background more easily with CSS
 */
import Chart from 'chart.js/auto';
import { canvasBackgroundImage } from '../plugins/plugins';

const bgImage = new Image();
bgImage.src = 'https://www.chartjs.org/img/chartjs-logo.svg';

(async function() {
    const doughnutChart = document.getElementById('doughnutChart');

    /* Example dataset defined here */
    const doughnutChartData = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My Doughnut Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };

    new Chart(doughnutChart,{
        type: 'doughnut',
        options: {
            plugins: {
                canvasBackgroundImage: {
                    image: bgImage,
                },
                subtitle: {
                    display: true,
                    text: 'Custom Chart Subtitle',
                    color: 'gray',
                    font: {
                        size: 16
                    }
                },
                title: {
                    display: true,
                    text: 'Custom Chart Title',
                    color: 'black',
                    font: {
                        size: 20
                    }
                }
            }
        },
        data: doughnutChartData,
        plugins: [canvasBackgroundImage],
    });
})();
