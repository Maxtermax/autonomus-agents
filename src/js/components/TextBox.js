export default class TextBox {
  constructor(ctx, x, y, data = '', font = '12px arial', display = false) {
    this.ctx = ctx;
    this.font = font;
    this.x = x;
    this.y = y;
    this.data = data;
    this.display = display;
  }

  render() {
    this.rendered = false;
    let { ctx, font, x, y, data, display } = this;
    if (display) {
      ctx.beginPath();
      ctx.save();
      ctx.font = font;
      let measure = ctx.measureText(data);
      let txtHeight = parseFloat(ctx.font) * 2;
      const padding = 5;
      ctx.fillStyle = 'black';
      ctx.fillRect(x + padding, y - ((txtHeight - (txtHeight / 4)) - 1), measure.width + padding, txtHeight);
      ctx.fillStyle = 'white';
      ctx.fillText(data, x + padding, y);
      ctx.restore();
      ctx.closePath();
    }
    this.rendered = true;
  }
}