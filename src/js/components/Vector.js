import Grid from './Grid.js'

export default class Vector {
  constructor({ctx, magnitude, direction = 0, id, display = true, refs = []}) {
    this.ctx = ctx;
    this.x = magnitude * Math.cos(direction);
    this.y = magnitude * Math.sin(direction);;
    this.magnitude = magnitude;
    this.direction = direction;
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
    let { ctx, magnitude, direction, x, y } = this;
    ctx.fillStyle = 'red';
    let size = 5;
    ctx.beginPath();
    ctx.lineWidth = 1;    
    ctx.lineTo(x-size, y+(magnitude));
    ctx.lineTo(x+size, y+(magnitude));
    ctx.lineTo(x, y+(magnitude)-(size*2));//right close 
    ctx.lineTo(x-size, y+(magnitude));//left close
    ctx.fill();
    ctx.closePath();
  }

  render() {
    let { ctx, magnitude, direction, x, y } = this;
    ctx.save();
    ctx.beginPath();
    //ctx.rotate(direction * Math.PI / 180);
    this.grid.render();
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 10, 10);
    ctx.fillRect(x, y, 10, 10);
    //ctx.lineTo(x, y);  
    //ctx.lineTo(x, y+(magnitude));  
    //ctx.strokeStyle = 'red';
    //ctx.lineCap="round";
    //ctx.lineWidth = 2;
    //ctx.stroke();
    //this.drawHead();
    ctx.closePath();
    ctx.restore();

  }
}