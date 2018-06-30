export default class Spot {
  constructor({ctx, x = 0, y = 0, size = 10, color  = 'green', id = '', display = true}) {
    this.ctx = ctx;
    this.size = size;
    this.x = x;
    this.y = y;
    this.id = id;
    this.color = color;
    this.display = display;
  }

  render() {
    let { ctx, x, y, color = 'green', display, size= 25 } = this;
    if (display) {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
  }
}
