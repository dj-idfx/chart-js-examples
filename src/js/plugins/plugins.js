/**
 * Chart area border
 * Example of a simple ad-hoc border plugin.
 * This is reusable by setting the options inside a new Chart
 */
export const chartAreaBorder = {
    id: 'chartAreaBorder',

    beforeDraw(chart, args, options) {
        const { ctx, chartArea: { left, top, width, height } } = chart;

        ctx.save();
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.setLineDash(options.borderDash || []);
        ctx.lineDashOffset = options.borderDashOffset;
        ctx.strokeRect(left, top, width, height);
        ctx.restore();
    }
};

/**
 * Canvas background color
 * In some use cases you would want a background image or color over the whole canvas.
 * There is no built-in support for this, the way you can achieve this is by using this custom plugin.
 */
export const canvasBackgroundColor = {
    id: 'canvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
        const { ctx } = chart;

        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = options.color || '#99ffff';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    }
};

/**
 * Canvas background image
 * Draw an image to the canvas as background.
 */
export const canvasBackgroundImage = {
    id: 'canvasBackgroundImage',
    beforeDraw: (chart, args, options) => {
        if (options.image.complete) {
            const ctx = chart.ctx;
            const {top, left, width, height} = chart.chartArea;
            const x = left + width / 2 - options.image.width / 2;
            const y = top + height / 2 - options.image.height / 2;
            ctx.drawImage(options.image, x, y);
        } else {
            options.image.onload = () => chart.draw();
        }
    }
};
