import TextBox from '../components/TextBox.js'
import Explotion from '../components/Explotion.js'
import Motion from '../utils/Motion.js'
import BarChart from '../components/BarChart.js'
import Grid from '../components/Grid.js'
import Circle from '../components/Circle.js'
import Vector from '../components/Vector.js'
import { isOverLapping, guid, coordinatesToDeg, calcCartesiano, vectorSubtraction, computeForce } from '../utils/index.js'

export default class SpaceShip extends Motion {
  constructor({ ctx, speedUp = true, stroke = true, skin = 'explorer', size = 20, maxVelocity = 5, maxForce = 0.5, targets = [], width = 20, height = 20, canvas, debug = false, mass = 40, forces = [], x = 0, y = 0, angle = 0, velocity = 0, acceleration = 0, color = 'white', id = guid(), display = true }) {
    super({ ctx, canvas, speedUp, mass, x, y, maxVelocity, maxForce, angle, id });
    this.width = width;
    this.height = height;
    this.color = color;
    this.display = display;
    this.debug = debug;
    this.size = size;
    this.forces = forces;
    this.stroke = stroke;
    this.canvas = canvas;
    this.skin = skin;
    this.info = new TextBox({ ctx, x, y, id: 'info', data: `deg: ${this.position.direction}, x: ${this.position.x}, y: ${this.position.y}` });
  }

  draw() {
    let { angle, mass, width, skin, height, position, ctx, color, acceleration, velocity, info, debug } = this;
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

    ctx.lineTo(-(width / 2), height / 2);
    ctx.lineTo(width / 2, -(height / 2) + height / 2);
    ctx.lineTo(-(width / 2), -height / 2);
    ctx.lineTo(-(width / 8), (-(height / 2) + height / 2));
    ctx.moveTo(-(width / 2), height / 2);
    ctx.lineTo(-(width / 8), (-(height / 2) + height / 2));
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    acceleration.render();
    velocity.render();
    position.render();
    if (debug) this.drawShildForce();
  }

  drawShildForce() {
    let { ctx, canvas, color, size, position, stroke, skin } = this;
    let { x, y } = position;
    ctx.save();
    ctx.beginPath();
    ctx.scale(1, -1);
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.arc(x, y, size, 0, 360 * Math.PI / 180);
    if (stroke) {
      ctx.stroke();
    } else {
      ctx.fill();
    }
    ctx.closePath();
    ctx.restore();
  }

  updateInfo() {
    let { position, info, mass, angle, vectors, acceleration } = this;
    if(info) {
      info.data = `mass: ${Math.floor(mass)}, x: ${Math.floor(position.x)}, y: ${Math.floor(position.y)}`;
      info.x = position.x;
      info.y = -position.y + 30;
      info.render();    
    }
  }

  stop(id) {
    this.forces = [];//this.forces.filter(force => force.id !== id);
  }

  update() {
    let { acceleration, velocity, position, debug } = this;
    this.updateMotion();
  }

  seek(id, done) {
    let { segments, targets } = this;
    let segment = this.getSegment(id);
    let target = this.getTarget(id);
    if (segment && target) {
      this.angle = segment.direction;
      if (this.isCollide(target)) {
        let segmentIndex = this.getSegmentIndex(id);
        let targetIndex = this.getTargetIndex(id);
        if (done) done(segmentIndex, targetIndex);
      } else {
        this.move(segment);
      }
    }
  }

  landSteering(id, result, done) {
    let { segments, targets, velocity, canvas, ctx, debug, maxForce } = this;
    let segment = this.getSegment(id);
    let target = this.getTarget(id);
    if (segment && target) {
      this.angle = segment.direction;
      if (this.isCollide(target)) {
        let segmentIndex = this.getSegmentIndex(id);
        let targetIndex = this.getTargetIndex(id);
        if (done) {
          done(segmentIndex, targetIndex);
        }
      } else {
        let desired = segment;
        let { magnitude, direction } = vectorSubtraction(desired, velocity);

        let steer = new Vector({ ctx, canvas, magnitude, direction: -direction, display: true, color: 'green' });
        steer.limit(desired.getMagnitude() * maxForce);
        if (result) result(steer, desired);
      }
    }
  }

  seekSteering(id, result, done) {
    let { segments, targets, velocity, canvas, ctx, debug, maxForce } = this;
    let segment = this.getSegment(id);
    let target = this.getTarget(id);
    if (segment && target) {
      this.angle = segment.direction;
      if (this.isCollide(target)) {
        let segmentIndex = this.getSegmentIndex(id);
        let targetIndex = this.getTargetIndex(id);
        if (done) done(segmentIndex, targetIndex);        
      } else {        
        let desired = segment;
        let { magnitude, direction } = vectorSubtraction(desired, velocity);
        let steer = new Vector({ ctx, canvas, magnitude, direction, color: 'green' });
        steer.limit(desired.getMagnitude() * maxForce);
        if (result) result(steer, desired);
      }
    }
  }

  steering(id, done) {
    let { segments, targets, velocity, canvas, ctx, debug } = this;
    let segment = this.getSegment(id);
    let target = this.getTarget(id);
    if (segment && target) {
      this.angle = segment.direction;
      if (this.isCollide(target)) {
        let segmentIndex = this.getSegmentIndex(id);
        let targetIndex = this.getTargetIndex(id);
        if (done) done(segmentIndex, targetIndex);
      } else {
        let desired = segment;
        let { magnitude, direction } = vectorSubtraction(desired, velocity);
        let steer = new Vector({ ctx, canvas, magnitude, direction, display: true, color: 'green' });
        this.move(steer);
      }
    }
  }

  render() {
    let { debug } = this;
    this.update();
    if (debug) this.updateInfo();
    this.draw();
  }
}