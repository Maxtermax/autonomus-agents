import TextBox from './components/TextBox.js';
import Explotion from './Explotion.js';
import Grid from './components/Grid.js';
import Vector from './components/Vector.js';
import { isOverLapping, guid, coordidatesToDeg, calcCartesiano } from './utils/index.js';

export default class SpaceShip {
  constructor({ ctx, width, canvas, mass, height, vectors = [], x, y, angle = 0, velocity = 1, acceleration = 0, color = 'white', id = guid(), display = true }) {
    this.width = width;
    this.height = height;
    this.x = x - width/2;
    this.y = y - height/2;
    this.ctx = ctx;
    this.color = color;
    this.id = id;
    this.angle = angle;
    this.display = display;
    this.acceleration = new Vector({
      ctx, 
      magnitude:0, 
      direction:0,
      canvas,
      id: 'acceleration',
      color: 'red'
    })          
    this.velocity = new Vector({
      ctx, 
      magnitude: 0, 
      direction: 0,
      canvas,
      id: 'velocity',
      color: 'blue'
    })          
    this.vectors = vectors;
    this.mass = mass;
    this.canvas = canvas;
    this.grid = new Grid({ctx,x:0,y:0,width: 200, height: 200, padding: 10, color: 'red'})
    //this.info = new TextBox(ctx, x, y, 'deg: 0, x:0, y:0', '12px arial', true, id = 'info');
  }

  drawShip() {
    let { angle, mass, width, height, x, y, ctx, color, acceleration, velocity } = this;
    ctx.save();//save angle
    ctx.beginPath();
    ctx.scale(1, -1);  
    ctx.fillStyle = color;   
    ctx.strokeStyle = color; 
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.lineWidth = 2;
    ctx.lineTo(-(width/2), height/2);
    ctx.lineTo(width/2, -(height/2)+height/2);
    ctx.lineTo(-(width/2)+2, -height/2);
    ctx.lineTo(-(width/2)+5, (height/2)/height);
    ctx.lineTo(-(width/2)+1, (height/2));
    //ctx.fillStyle = `rgba(255, 255, 255, ${ Math.cos(orbit)*0.8 })`;  
    ctx.stroke();
    ctx.closePath();
        
    ctx.beginPath();  
    ctx.arc(-(width/2)+(width/2), -(height/2)+(height/2), width+height, 0, 360*Math.PI/180);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();  
    acceleration.render();
    velocity.render();
  }

  moveSpaceShip() {
    let { vectors, mass, acceleration, velocity, canvas } = this;   
    for(let vector of vectors) {
      let { x, y, magnitude, direction } = vector;      
      this.angle = direction;
      let deg = direction/(Math.PI/180);
      let right = (deg <= 90 && deg >= 0) || (deg <= 0 && deg >= -90);
      let left = (deg >= 90 && deg <= 180) || deg >= -180 && deg <= -90;
      let up = deg > 0;
      let down = deg < 0;
      //if(left) console.log('left ');
      //if(right) console.log('right')
      //if(up) console.log('up')
      //if(down) console.log('down')
      /*

      this.acceleration = magnitude/mass;   
      if(right) this.velocityX += this.acceleration;
      if(left) this.velocityX -= this.acceleration;
      if(up) this.velocityY += magnitude/mass;
      if(down) this.velocityY -= magnitude/mass;
      this.x = this.velocityX;
      this.y = this.velocityY;
      vector.translateX = this.x;
      vector.translateY = this.y;
      */
    }
  }

  update() {
    this.moveSpaceShip();
    
    /* 
    for(let vector of vectors) {      
      let vectorX = vector.x;      
      let vectorY = vector.y;      
      //this.x = Math.round(vector.magnitude * Math.cos(vector.direction));
      //this.y = Math.round(vector.magnitude * Math.sin(vector.direction));           
        this.accelerationX = Math.round(vectorX.magnitude * Math.cos(vectorX.direction)) / mass;   
        this.x += this.accelerationX;
        vectorX.translateX = this.x;
        vectorX.translateY = this.y;

        this.accelerationY = Math.round(vectorY.magnitude * Math.sin(vectorY.direction)) / mass;                 
        this.y += this.accelerationY;          

        vectorY.translateX = this.x;
        vectorY.translateY = this.y;
      
      //this.angle = -50//Math.sqrt(Math.pow(vectorX.magnitude, 2) + Math.pow(vectorY.magnitude, 2));
      //console.log(this.angle)
    }
    */
  }

  render() {
    let { width, height, x, y, ctx, color } = this;
    this.update();
    this.drawShip();
  }
}