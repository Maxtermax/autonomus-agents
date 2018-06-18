export default class Vector {
  constructor({ctx, x, y, magnitude, direction = 0}) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.magnitude = magnitude;
    this.direction = direction;
  }

  drawHead() {
    let { ctx, magnitude, direction, x, y } = this;
    ctx.fillStyle = 'red';
    let size = 5;
    ctx.beginPath();
    ctx.lineWidth = 1;    
    ctx.lineTo(x-size, y+magnitude);
    ctx.lineTo(x+size, y+magnitude);
    ctx.lineTo(x, y+magnitude-(size*2));//right close 
    ctx.lineTo(x-size, y+magnitude);//left close
    ctx.fill();
    ctx.closePath();
  }

  render() {
    let { ctx, magnitude, direction, x, y } = this;
    ctx.save();
    ctx.beginPath();
    ctx.rotate(direction);
    ctx.lineTo(x, y);  
    ctx.lineTo(x, y+magnitude);  
    ctx.strokeStyle = 'red';
    ctx.lineCap="round";
    ctx.lineWidth = 2;
    ctx.stroke();
    this.drawHead();
    ctx.closePath();
    ctx.restore();

  }
}