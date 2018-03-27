import { calcCenter, isCollide, touchEvents } from './utils/index.js';

export default class Controls {
  constructor({stage, canvas, onMove}, debug = false) {
    this.debug = debug;
    this.onMove = onMove;
    this.ctx = canvas.getContext('2d');
    this.x = stage.x;
    this.y = stage.y+stage.height;
    this.width = stage.width;
    this.height = 80;      
    this.events(canvas);
    this.xCenter = this.width/2;
    this.yCenter = this.height/2;
    this.handle = { 
      color: 'white', 
      x : this.x+(this.xCenter/2),
      y : this.y+this.yCenter,
      right: 0,
      pivot: {
        x: this.x+(this.xCenter/2), 
        y: this.y+this.yCenter,
        bound: 60
      },
      hang: false,
      r : 25
    }    
  }  

  checkHangHandle(e, type = '') {
    let { handle, ctx } = this;
    let r = 40, x, y;    
    if(type === 'end') {
      handle.hang = false;
      return;
    }
    if(type === 'start' || type === 'move') {
      x = e.clientX; 
      y = e.clientY;            
    }
    if(type === 'move' && handle.hang) {
      let boundX = x > handle.pivot.x + handle.pivot.bound || x < handle.pivot.x-handle.pivot.bound;
      let boundY = y < handle.pivot.y - handle.pivot.bound || y > handle.pivot.y + handle.pivot.bound
      if(boundY || boundX) {        
        return
        handle.hang = false;
      }
      handle.x = x;
      handle.y = y;
      //console.log(handle.x - handle.pivot.x);
      return;
    }
    let boundX = x > handle.pivot.x + handle.pivot.bound || x < handle.pivot.x-handle.pivot.bound;
    let boundY = y < handle.pivot.y - handle.pivot.bound || y > handle.pivot.y + handle.pivot.bound
    if(boundY || boundX) {      
      return 
      handle.hang = false;
    }

    let overlap = isCollide('circle',{x,y,r}, handle);  
    if(overlap) {
      handle.x = x;
      handle.y = y;      
    }    
    handle.hang = overlap;
  }

  events(canvas) {    
    canvas.addEventListener("touchstart", e => this.checkHangHandle(
      e.targetTouches[0], 'start')
    );
    canvas.addEventListener("touchmove", e => this.checkHangHandle(
      e.targetTouches[0], 'move')
    );
    canvas.addEventListener("touchend", e => 
      this.checkHangHandle(null, 'end')
    );
    //touchEvents(canvas, 'drag', this.checkHangHandle.bind(this))
  }

  joystick(angle = 0) {
    let { debug, ctx, width, height, x, y, xCenter, yCenter, handle } = this;
    let r = height/2;
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5;    
    ctx.arc(x+(xCenter/2), y+yCenter, handle.pivot.bound, 0, 2 * Math.PI);  
    ctx.stroke();
    ctx.closePath();//arc bound            

    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.lineTo(handle.pivot.x, handle.pivot.y);
    ctx.lineTo(handle.x, handle.y);
    ctx.stroke();
    ctx.restore();
    ctx.closePath();//arc line join

    ctx.beginPath();
    ctx.arc(handle.x, handle.y, handle.r , 0, 2 * Math.PI);
    /*
    if(handle.hang) {
      handle.color = 'red';
    } else {
      handle.color = 'white';
    }
    */
    ctx.fillStyle = handle.color;
    ctx.fill();
    ctx.closePath();//arc handle
  }

  render() {
    let { debug, ctx, width, height, x, y, handle } = this;    
    if(debug) {
      ctx.beginPath();
      ctx.strokeStyle = 'red';
      ctx.strokeRect(x, y, width, height);
      ctx.closePath();      
    }
    this.joystick();
    if(handle.hang) this.onMove.bind(this)(handle);
   // handle.angle += 0.51;
  }
}