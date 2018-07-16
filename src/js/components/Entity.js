import TextBox from './TextBox.js';
import Grid from './Grid.js';
import Vector from './Vector.js';
import { isOverLapping, guid, coordidatesToDeg, calcCartesiano } from '../utils/index.js';

export default class Entity {
  constructor({ ctx, width, canvas, mass = 0.04, height, forces = [], x, y, angle = 0, velocity = 1, acceleration = 0, color = 'white', id = guid(), display = true }) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.color = color;
    this.id = id;
    this.sp = 0;
    this.up = Math.random() > 0.5; 
    this.angle = angle;
    this.display = display;
    this.mass = mass;
    let mag = Math.sqrt( Math.pow(x, 2), Math.pow(y, 2));
    this.position = new Vector({
      ctx, 
      magnitude: x < 0 ? -mag : mag , 
      direction: coordidatesToDeg(x, y) * Math.PI / 180,
      canvas,
      id: 'position',
      color: 'orange'      
    })
    this.acceleration = new Vector({
      ctx, 
      magnitude:25, 
      direction: 0,
      canvas,
      id: 'acceleration',
      color: 'green',
      display: false
    })          
    this.velocity = new Vector({
      ctx, 
      magnitude: 25, 
      direction: 180,
      canvas,
      id: 'velocity',
      color: 'blue',
      display: false
    })          
    this.forces = forces;
    this.canvas = canvas;
    this.grid = new Grid({ctx,x:0,y:0,width: 200, height: 200, padding: 10, color: 'red'})
    this.info = new TextBox({
      ctx, 
      x, 
      y, 
      data: `deg: ${this.position.direction}, x: ${this.position.x}, y: ${this.position.y}`, 
      id: 'info'
    });
  }

  senoidal() {

  }

  drawFire({size, x, y}) {
    let { ctx, canvas, width, height } = this;
    let r = size*0.2;
    ctx.save();
    ctx.beginPath();
    let gradient = ctx.createRadialGradient(x+(size/2), y+(size/2), r*0.5, x+(size/2), y+(size/2), r*2);
    gradient.addColorStop(0, `rgba(255, 0, 0, ${Math.cos(x)})`);
    gradient.addColorStop(1, 'rgba(0, 0, 24, 0.5)');
    ctx.fillStyle = gradient;
    
    ctx.fillRect(x, y, size, size);
    ctx.fillStyle = 'white';
    ctx.arc(x + (size / 2), y + (size / 2), r, 0, 360 * Math.PI / 180);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  drawShip() {
    let { angle, mass, width, height, position, ctx, color, acceleration, velocity } = this;
    let { x, y } = position;
    ctx.save();//save angle
    ctx.beginPath();
    ctx.scale(1, -1);  
    ctx.fillStyle = color;   
    ctx.strokeStyle = color; 
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.lineWidth = 8;
    ctx.lineCap = 'round'; 
    /*
    ctx.lineTo(-(width/2), height/2);
    ctx.lineTo(width/2, -(height/2)+height/2);
    ctx.lineTo(-(width/2), -height/2);
    */
    /*
    ctx.lineTo(-(width/2), height/2);
    ctx.lineTo(width/2, -(height/2)+height/2);
    ctx.lineTo(-(width/2), -height/2);    
    ctx.lineTo(-width, -(height/2)+height/2);
    ctx.lineTo(-(width/2), height/2);
    */

    ctx.lineTo(-(width/2), height/2);
    ctx.lineTo(width/2, -(height/2)+height/2);
    ctx.lineTo(-(width/2), -height/2);    
    ctx.lineTo(-(width/8), (-(height/2)+height/2));
    ctx.moveTo(-(width/2), height/2);
    ctx.lineTo(-(width/8), (-(height/2)+height/2));    
    ctx.fill();
    

    ctx.closePath();
    /*    
    ctx.beginPath();  
    ctx.shadowBlur = 0;
    ctx.lineWidth = 2;
    ctx.arc(-(width/2)+(width/2), -(height/2)+(height/2), width+height, 0, 360*Math.PI/180);
    ctx.stroke();
    ctx.closePath();
    */
    ctx.restore();  
    acceleration.render();
    velocity.render();
  }

  computeForce(force, scale) {
    let { x, y } = force;    
    if(scale !== 0) {
      return {
        x: x / scale,
        y: y / scale      
      }      
    }
    return { x, y };
  }

  applayForces() {
    let { forces = [], mass, acceleration, position, velocity, canvas, up } = this;   
    let average = forces.reduce((a, b, index, vectors) => {
      a.add(b);
      vectors[index].translateX = position.x;
      vectors[index].translateY = position.y;
      return a;
    })

    let { x, y, magnitude, direction } = average;      
    this.angle = direction;
    acceleration.add(this.computeForce(average, mass));
    velocity.add(acceleration);      
    position.add(velocity); 
    acceleration.translateX = position.x;
    acceleration.translateY = position.y;
    velocity.translateX = position.x;
    velocity.translateY = position.y;
    average.translateX = position.x;
    average.translateY = position.y;
  }

  updateInfo() {
    let { position, info, angle, vectors } = this;
    info.data = `x: ${ Math.floor(position.x) }, y: ${ Math.floor(position.y) }`;
    info.x = position.x-50;
    info.y = -position.y+50;
    info.render();
  }

  update() {
    if(this.forces.length) {
      this.applayForces();
    }
  }

  render() {
    let { width, height, x, y, ctx, angle, color } = this;
    this.update();
    this.senoidal();
    this.drawShip();
    //this.updateInfo();
  }
}