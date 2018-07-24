export default class BarChart {
  constructor({ ctx, x, y, width, height, angle = 90, percentage = 1, display = true, color = 'rgb(233, 30, 99)', sense = 'horizontal' }) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.display = display;
    this.color = color;
    this.percentage = percentage;
    this.angle = angle;
  }

  drawBar() {
    let { angle, horizontal, color, style, width, height, x, y, ctx, percentage } = this;
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.rect(x, y, width, height);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();

    ctx.fillStyle = color;
    ctx.rect(x, y, width * percentage, height);
    ctx.fill();
    ctx.closePath();


    ctx.restore();
  }

  render() {
    let { ctx, x, y, width, height, display, style, color } = this;
    if (display) {
      this.drawBar();
    }
  }
}