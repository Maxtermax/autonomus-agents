import TextBox from './components/TextBox.js';
import Explotion from './Explotion.js';
import Grid from './components/Grid.js';
import { isOverLapping, guid } from './utils/index.js';
const Shoot = document.getElementById('shoot');
let now = Date.now();

export default class SpaceShip {
  constructor({ ctx, width, height, x, y, angle = 0, moveX = 0, moveY = 0, acceleration = 0, color = 'white', id = guid(), display = true }) {
    this.width = width;
    this.height = height;
    this.prevX = x;
    this.prevY = y;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.color = color;
    this.id = id;
    this.bound = false;
    this.momentum = 100;
    this.angle = angle;
    this.display = display;
    this.acceleration = acceleration;
    this.moveX = moveX;
    this.moveY = moveY;
    this.grid = new Grid({ctx,x:0,y:0,width: 100, height: 100, padding: 10, color: 'red'})
    //this.info = new TextBox(ctx, x, y, 'deg: 0, x:0, y:0', '12px arial', true, id = 'info');
  }

  drawShip() {
    let { angle, width, height, x, y, ctx, color, viewRange = 80, viewAmplitude = 50 } = this;
    ctx.save();//save angle

    ctx.beginPath();
    ctx.translate(x, y);
    ctx.rotate(this.angle* Math.PI / 180);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.closePath();//ship    

    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    ctx.arc(0, 0, width * 1.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();//arc bound 
    //this.grid.render();

    ctx.restore();//restore angle

    /*
    this.info.x = this.x+(this.width/2);
    this.info.y = this.y+(this.height);  
    this.info.data = `deg: ${ Math.floor(this.dtAngle) }, x: ${ Math.floor(this.x) }, y: ${ Math.floor(this.y) }`;           
    this.info.render(); 
    */
  }

  update() {

    this.x += this.acceleration;
    
    if (this.bound) {
      if (this.prevX < this.x) this.x += this.momentum / 100;
      if (this.prevX > this.x) this.x -= this.momentum / 100;
      if (this.prevY < this.y) this.y += this.momentum / 100;
      if (this.prevY > this.y) this.y -= this.momentum / 100;
      this.momentum -= 1;
    }

    if (this.momentum <= 0) {
      this.bound = false;
      this.momentum = 100;
      //this.angle = 0;
      this.prevX = this.x;
      this.prevY = this.y;
    }    
  }

  render() {
    let { width, height, x, y, ctx, color } = this;
    this.update();
    this.drawShip();
  }
}