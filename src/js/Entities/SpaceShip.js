import TextBox from '../components/TextBox.js';
import Explotion from '../components/Explotion.js';
import Grid from '../components/Grid.js';
import Vector from '../components/Vector.js';
import { isOverLapping, guid, coordidatesToDeg, calcCartesiano } from '../utils/index.js';

export default class SpaceShip {
  constructor({ ctx, width = 20, height = 20, canvas, debug = false, mass = 40, forces = [], x = 0, y = 0, angle = 0, velocity = 0, acceleration = 0, color = 'white', id = guid(), display = true }) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.color = color;
    this.id = id;
    this.up = Math.random() > 0.5;
    this.angle = angle * Math.PI/180;
    this.originalAngle = angle;
    this.display = display;
    this.debug = debug;
    this.mass = mass;
    let mag = Math.sqrt(Math.pow(x, 2), Math.pow(y, 2));
    let direction = coordidatesToDeg(x, y);
    this.position = new Vector({
      ctx,
      magnitude: mag,
      direction,
      canvas,
      id: 'position',
      color: 'orange',
      display: debug
    })
    this.acceleration = new Vector({
      ctx,
      magnitude: acceleration,
      direction: this.originalAngle,
      canvas,
      id: 'acceleration',
      color: 'green',
      translateX: this.position.x,
      translateY: this.position.y,
      display: false
    })
    this.velocity = new Vector({
      ctx,
      magnitude: velocity,
      direction: (angle - 90),
      canvas,
      id: 'velocity',
      color: 'blue',
      translateX: this.position.x,
      translateY: this.position.y,
      display: false
    })
    this.forces = forces;
    this.canvas = canvas;
    this.grid = new Grid({ ctx, x: 0, y: 0, width: 200, height: 200, padding: 10, color: 'red' })
    this.info = new TextBox({ctx, x, y, id: 'info', data: `deg: ${this.position.direction}, x: ${this.position.x}, y: ${this.position.y}`});
  }

  drawFire({ size, x, y }) {
    let { ctx, canvas, width, height } = this;
    let r = size * 0.2;
    ctx.save();
    ctx.beginPath();
    let gradient = ctx.createRadialGradient(x + (size / 2), y + (size / 2), r * 0.5, x + (size / 2), y + (size / 2), r * 2);
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
    let { angle, mass, width, height, position, ctx, color, acceleration, velocity, info, debug } = this;
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

    ctx.lineTo(-(width / 2), height / 2);
    ctx.lineTo(width / 2, -(height / 2) + height / 2);
    ctx.lineTo(-(width / 2), -height / 2);
    ctx.lineTo(-(width / 8), (-(height / 2) + height / 2));
    ctx.moveTo(-(width / 2), height / 2);
    ctx.lineTo(-(width / 8), (-(height / 2) + height / 2));
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
    position.render();
  }

  computeForce(force, scale) {
    let { x, y } = force;
    if (scale !== 0) {
      return {
        x: x / scale,
        y: y / scale
      }
    }
    return { x, y };
  }

  applayForces() {
    let { forces = [], mass, acceleration, position, velocity, canvas, debug } = this;
    //console.log(forces[0].magnitude)
    for(let force of forces) {
      position.add(force);
    }

    for (let force of forces) {
      force.translateX = position.x;
      force.translateY = position.y;
      if (debug) {
        force.render();
      }
    }



    /*
    let average = forces.reduce((a, b, index, vectors) => {
      a.add(b);
      vectors[index].translateX = position.x;
      vectors[index].translateY = position.y;
      return a;
    })

    let { x, y, magnitude, direction } = average;
    //this.angle = direction * Math.PI / 180;
    acceleration.add(this.computeForce(average, mass));
    velocity.add(acceleration);
    position.add(velocity);
    acceleration.translateX = position.x;
    acceleration.translateY = position.y;
    velocity.translateX = position.x;
    velocity.translateY = position.y;
    average.translateX = position.x;
    average.translateY = position.y;
    average.render();
    */
  }

  updateInfo() {
    let { position, info, angle, vectors } = this;
    info.data = `deg: ${ Math.floor(angle) }, x: ${Math.floor(position.x)}, y: ${Math.floor(position.y)}`;
    info.x = position.x - 50;
    info.y = -position.y + 50;
    info.render();
  }

  update() {
    let { acceleration, velocity, position, debug } = this;
    if (this.forces.length) {
      this.applayForces();
    }
    position.display = debug;
  }

  render() {
    let { width, height, x, y, ctx, angle, color, debug } = this;
    this.update();
    this.drawShip();
    if(debug) this.updateInfo();
  }
}