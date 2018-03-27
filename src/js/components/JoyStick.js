import { calcCenter, isOverLapping } from '../utils/index.js';

export default class JoyStick {
  constructor({ctx, x, y, height, width, left,rigth, fire}) {
    this.ctx = ctx;    
    this.x = x;
    this.y = y;
    this.fire = fire;
    this.rigth = rigth;
    this.left = left;
    this.height = height;
    this.width = width;
    let data = calcCenter({x,y,width,height}, {width: 60, height: 40, x:0, y:0});
    let pullX = 10;
    let pushX = 10;
    this.fireData = {
      x: data.x+10,
      y:  y+15,
      height: 40,
      width: 40
    }
    this.rigthData = {
      x: x+(width-60)-pullX, 
      y: y+15, 
      width: 60, 
      height: 40
    }
    this.leftData = {
      x: x+pushX, 
      y: y+15, 
      width: 60, 
      height: 40
    }
  }
   
  arrowLeft() {
   let { ctx, x, y, width, height, leftData } = this;
   let pushX = 10;
   ctx.beginPath();
   //ctx.strokeRect(x+pushX, y+15, 60, 40);
   ctx.fillStyle = 'white';
   ctx.lineTo(x+pushX+60, y+15, 4, 4);
   ctx.lineTo(x+pushX+10, y+15+(20), 4, 4);
   ctx.lineTo(x+pushX+60, y+15+(40), 4, 4);
   ctx.fillStyle = leftData.color || 'white';
   ctx.fill();
   ctx.closePath();  
  }

  arrowRigth() {
   let { ctx, x, y, width, height, rigthData } = this;
   let pullX = 10;
   ctx.beginPath();
   //ctx.strokeRect(x+(width-60)-pullX, y+15, 60, 40);
   ctx.lineTo(x+(width-60)-pullX, y+15, 4, 4);
   ctx.lineTo(x+(width-60)-pullX+60-15, y+15+20, 4, 4);
   ctx.lineTo(x+(width-60)-pullX, y+15+40, 4, 4);
   ctx.fillStyle = rigthData.color || 'white';
   ctx.fill();
   ctx.closePath();        
  }

  fireButton() {
   let { ctx, x, y, width, height, fireData } = this; 
   ctx.beginPath();
   //ctx.strokeRect(fireData.x, fireData.y, fireData.width, fireData.height);
   ctx.fillStyle = fireData.color || 'white';
   ctx.arc(fireData.x+20, fireData.y+20, 20, 0, 2 * Math.PI);   
   ctx.fill();
   ctx.closePath();            
  }

  render() {
    let { ctx, x, y, width, height, fire, left, rigth } = this;
    ctx.beginPath();
   // ctx.strokeStyle = 'white';
    //ctx.strokeRect(x, y, width, height);     
    ctx.closePath();
    this.arrowLeft();   
    this.arrowRigth();   
    this.fireButton();
  }
}