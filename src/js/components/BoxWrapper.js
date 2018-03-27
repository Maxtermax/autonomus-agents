export default class BoxWrapper {
  constructor(ctx, x, y, width, height, display = true, style = 'stroke', color = 'red') {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.display = display;
    this.style = style;
    this.color = color;
  }
  updateTextBoxes() {
    
  }
  render() {
    let { ctx, x, y, width, height, display, style, color } = this;
    if (display) {
      ctx.beginPath();
      ctx.save();
      if(style === 'stroke') {
        ctx.strokeStyle = color;
        ctx.strokeRect(x, y, width, height);
      } else {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
      }
      ctx.restore();
      ctx.closePath();
    }
  }
}