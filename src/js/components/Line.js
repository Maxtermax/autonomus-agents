
export default class Line {
  constructor({ ctx, start, end, weight = 1, display = true, color = 'rgb(233, 30, 99)' }) {
    this.ctx = ctx;
    this.start = start;
    this.end = end;
    this.color = color;
    this.display = display;
    this.weight = weight;
  }

  drawMap() {
    let { color, start, end, ctx } = this;
    ctx.save();
    ctx.restore();
  }

  render() {
    let { ctx, x, y, width, height, display, style, color } = this;
    this.drawMap();
  }
}