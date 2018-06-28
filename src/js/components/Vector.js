import Grid from './Grid.js'

export default class Vector {
  constructor({ctx, x, y, canvas, magnitude, direction = 0, id, display = true, refs = []}) {
    this.ctx = ctx;
    //this.x = magnitude * Math.cos(direction);
    //this.y = magnitude * Math.sin(direction);
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.magnitude = magnitude;
    this.direction = direction //* 180 / Math.PI;
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
    let { ctx, magnitude, direction, x, y, canvas } = this;
    //let calcCart = calcCartesiano(x, y, canvas);     
    ctx.save();
    ctx.beginPath();
    ctx.translate(200, 200)
    //ctx.rotate(direction * Math.PI / 180);
    //this.grid.render();

    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, 10, 10);//ancla 
    ctx.lineTo(x, y);

    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'red';
    
    //this.y = magnitude * Math.sin(direction);
    let convertX = Math.round(magnitude * Math.cos(direction));
    let convertY = Math.round(magnitude * Math.sin(direction));
    this.convertX = convertX;
    this.convertY = convertY;
    ctx.fillRect(convertX, convertY, 10, 10);//head 
    ctx.lineTo(convertX, convertY);//head 
    ctx.stroke();
    //ctx.fillRect(x, y, 10, 10);
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