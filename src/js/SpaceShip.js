import TextBox from './components/TextBox.js';
import Explotion from './Explotion.js';
import Grid from './components/Grid.js';
import { isOverLapping, guid } from './utils/index.js';
const Shoot = document.getElementById('shoot');
let now = Date.now();

export default class SpaceShip {
  constructor({ ctx, width, height, vectors = [], x, y, angle = 0, moveX = 0, moveY = 0, accelerationX = 0, accelerationY = 0, color = 'white', id = guid(), display = true }) {
    this.width = width;
    this.height = height;
    this.prevX = x;
    this.prevY = y;
    this.x = x - width/2;
    this.y = y - height/2;
    this.ctx = ctx;
    this.color = color;
    this.id = id;
    this.bound = false;
    this.momentum = 100;
    this.angle = angle;
    this.display = display;
    this.accelerationX = accelerationX;
    this.accelerationY = accelerationY;
    this.vectors = vectors;
    this.moveX = moveX;
    this.moveY = moveY;
    this.grid = new Grid({ctx,x:0,y:0,width: 200, height: 200, padding: 10, color: 'red'})
    //this.info = new TextBox(ctx, x, y, 'deg: 0, x:0, y:0', '12px arial', true, id = 'info');
  }

  drawShip() {
    let { angle, width, height, x, y, ctx, color, viewRange = 80, viewAmplitude = 50 } = this;
    ctx.save();//save angle
    ctx.beginPath();
    ctx.translate(0, 0);
    ctx.scale(1, -1);  
    ctx.rotate(angle);
    ctx.fillStyle = color;
    ctx.fillRect(x+(-(width/2)), y+(-(height/2)), width, height);
    //this.grid.render();
    ctx.closePath();//ship    
    ctx.restore();//restore angle

    /*
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    ctx.arc(x, -y, width * 1.5, 0, 2 * Math.PI);
    ctx.stroke();    
    ctx.closePath();//arc bound 
    ctx.restore();//restore angle
    */
  }

  update() {
    let { vectors } = this;    
    for(let vector of vectors) {      
      let vectorX = vector.x;      
      let vectorY = vector.y;      
      //this.x = Math.round(vector.magnitude * Math.cos(vector.direction));
      //this.y = Math.round(vector.magnitude * Math.sin(vector.direction));           
      let masa = this.width * this.height;
      this.accelerationX = Math.round(vectorX.magnitude * Math.cos(vectorX.direction)) / masa; 
      this.accelerationY = Math.round(vectorY.magnitude * Math.sin(vectorY.direction)) / masa;           
      this.x += this.accelerationX;
      this.y += this.accelerationY;
      //this.angle = -50//Math.sqrt(Math.pow(vectorX.magnitude, 2) + Math.pow(vectorY.magnitude, 2));
      //console.log(this.angle)
    }
    //this.angle += 0.5;
       
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