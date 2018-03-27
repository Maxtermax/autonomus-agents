import TextBox from './components/TextBox.js';
import Explotion from './Explotion.js';
import { isOverLapping } from './utils/index.js';
const Shoot = document.getElementById('shoot');

export default class SpaceShip {
  constructor({ctx, width, height, x, y, color = 'white', id}) {
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
    this.angle = 0;
    this.translateOnce = false;
  }

  drawShip() {
    let { width, height, x, y, ctx, color } = this;    
    ctx.save();
    if(this.translateOnce === false) {
      
      console.log("Once")
    } 
    if(this.bound) {
      //this.angle++
      //ctx.translate(x+(width/2), y+(height/2));
      //ctx.rotate(this.angle * Math.PI / 180);
    }   

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.closePath();//ship    
    
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;    
    ctx.arc(x+(width/2), y+(height/2), width*1.5, 0, 2 * Math.PI);  
    ctx.stroke();
    ctx.closePath();//arc bound 

    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;    
    ctx.arc(x+(width/2), y-width, 5, 0, 2 * Math.PI);  
    ctx.fill();
    ctx.closePath();//orientation
    ctx.restore();

    if(this.bound) {            
      if(this.prevX < this.x) this.x += this.momentum/100;              
      if(this.prevX > this.x) this.x -= this.momentum/100;
      if(this.prevY < this.y) this.y += this.momentum/100;
      if(this.prevY > this.y) this.y -= this.momentum/100;     
      this.momentum -= 1;      
    }
    if(this.momentum <= 0) {
      this.bound = false;
      this.momentum = 100;
      //this.angle = 0;
      this.prevX = this.x;
      this.prevY = this.y;      
    }
    this.translateOnce = true;
  }

  render() {
    let { width, height, x, y, ctx, color } = this;
    this.drawShip();
  }
}