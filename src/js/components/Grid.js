export default class Grid {
  constructor({ ctx, x, y, color = 'white', display = true, width, height, padding = 10 }) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.rows = Math.round(width/padding);
    this.columns = Math.round(height/padding);
    this.display = display;
    this.color = color;
  }

  drawRows() {
    let { ctx, rows, columns, width, height, x, y, padding, color } = this;
    for(let row = 0; row < rows; row++) {
      ctx.rect(row*padding, 0, padding, height);
      ctx.stroke();
    }    
  }

  render() {
    let { ctx, rows, columns, width, height, x, y, padding, color } = this;
    ctx.save();
    ctx.translate(x, y);
    ctx.strokeStyle = color;

    for(let row = 0; row < rows; row++) {
      ctx.beginPath();
      ctx.rect((row*padding), 0, padding, height);
      ctx.stroke();
      ctx.closePath();      
    }

    
    for(let column = 0; column < columns; column++) {
      ctx.beginPath();
      ctx.rect(0, (column*padding), width, padding);
      ctx.stroke();
      ctx.closePath();      
    }
    
    ctx.restore();    
  }
}