import TextBox from './components/TextBox.js';
import Explotion from './Explotion.js';
import Vector from './components/Vector.js';
import { isOverLapping } from './utils/index.js';
const Shoot = document.getElementById('shoot');
let now = Date.now();

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
    this.dtAngle = 0;
    this.translateOnce = false;
    this.info = new TextBox(ctx, x, y, 'deg: 0, x:0, y:0', '12px arial', true, id = 'info');
    this.vector = new Vector({ctx, x: 0, y:0, magnitude: -45, direction: 0});
  }

  drawShip() {
    let { angle, width, height, x, y, ctx, color, viewRange = 80, viewAmplitude = 50 } = this;  

    ctx.save();//save angle
    ctx.translate(x+(width/2), y+(height/2));
    if(this.angle) {    
      if(this.dtAngle <= this.angle) this.dtAngle += 4;      
      if(this.dtAngle >= this.angle) this.dtAngle -= 4;         
      ctx.rotate(this.dtAngle * Math.PI / 180);               
    } 
    /*
    let dt = Date.now() - now;
    if(dt >= 1000) {
      //console.log("segundo")
      now = Date.now();
    }
    */

    //ctx.beginPath();
    //ctx.fillStyle = 'blue';
    //ctx.fillRect(0, 0, 100, 100);
    //ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(-(width/2), -(height/2), width, height);
    ctx.closePath();//ship    

    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;    
    ctx.arc(0, 0, width*1.5, 0, 2 * Math.PI);  
    ctx.stroke();
    ctx.closePath();//arc bound 

    /* 
    ctx.beginPath();    
    ctx.moveTo(0, 0);
    ctx.lineTo(viewAmplitude, -viewRange);
    ctx.moveTo(0, 0);
    ctx.lineTo(-viewAmplitude, -viewRange);
    ctx.strokeStyle = 'white';
    ctx.stroke();
    ctx.closePath();
    */
    if(this.bound) {
      //this.angle++
      //ctx.translate(x+(width/2), y+(height/2));
      //ctx.rotate(this.angle * Math.PI / 180);
    }   

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
    this.vector.render();
    ctx.restore();//restore angle
    
    this.info.x = this.x+(this.width/2);
    this.info.y = this.y+(this.height);  
    this.info.data = `deg: ${ Math.floor(this.dtAngle) }, x: ${ Math.floor(this.x)-this.width }, y: ${ Math.floor(this.y) }`;       
    this.info.render(); 
  }

  render() {
    let { width, height, x, y, ctx, color } = this;
    this.drawShip();
  }
}