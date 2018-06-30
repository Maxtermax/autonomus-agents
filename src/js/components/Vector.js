import Grid from './Grid.js'
export default class Vector {
  constructor({ctx, translateX = 0, translateY = 0, size = 5, canvas, magnitude, direction = 0, id, display = true, refs = [], color = 'red'}) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.color = color;
    this.magnitude = magnitude;
    this.direction = direction * Math.PI / 180;
    this.x = Math.round(magnitude * Math.cos(this.direction));
    this.y = Math.round(magnitude * Math.sin(this.direction));
    this.translateX = translateX;
    this.translateY = translateY;
    this.size = size;
    this.id = id;
    this.display = display;
    this.refs = refs;
    this.grid = new Grid({
      ctx,
      width: 100,
      height: 100,
      padding: 10,
      color: 'blue' 
    });
  }

  drawHead() {
    let { ctx, x, y, size, magnitude, translateX, translateY, direction, color } = this;
    ctx.save();    
    ctx.scale(1, -1);    
    ctx.translate(x + translateX, y + translateY);
    ctx.rotate(direction);
    
    ctx.beginPath();
    ctx.fillStyle = color;
    //ctx.strokeStyle = 'yellow';
    //ctx.strokeRect(0, -5, 10, 10);//head

    ctx.moveTo(0, size);
    ctx.lineTo(0, -size);
    ctx.lineTo(size, 0);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  drawTail() {
    let { ctx, magnitude, direction, x, y, translateX, translateY, canvas, color } = this;
    ctx.save();    
    ctx.scale(1, -1);    
    ctx.translate(translateX, translateY);
    ctx.beginPath();

    //ctx.fillStyle = color;
    //ctx.fillRect(0, 0, 10, 10);//ancla 
    ctx.lineTo(0, 0);
    ctx.lineTo(x , y);
    
    ctx.lineCap="round";
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();    
  }

  update() {
    let { magnitude, direction } = this;
    this.x = Math.round(magnitude * Math.cos(direction));
    this.y = Math.round(magnitude * Math.sin(direction));    
  }

  render() {
    let { ctx } = this;
    this.update();
    this.drawTail();
    this.drawHead();
  }
}