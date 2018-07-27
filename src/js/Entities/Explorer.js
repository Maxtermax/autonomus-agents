import TextBox from '../components/TextBox.js'
import Explotion from '../components/Explotion.js'
import Motion from '../utils/Motion.js'
import BarChart from '../components/BarChart.js'
import Grid from '../components/Grid.js'
import Circle from '../components/Circle.js'
import Vector from '../components/Vector.js'
import SpaceShip from './SpaceShip.js'
import { isOverLapping, guid, coordinatesToDeg, getRandomInt, calcCartesiano, vectorAddition, vectorSubtraction, computeForce } from '../utils/index.js'

export default class Explorer extends SpaceShip {
  constructor({ ctx, speedUp = true, hunters = [], stroke = true, size = 20, maxVelocity = 5, maxForce = 0.5, targets = [], width = 20, height = 20, canvas, debug = false, mass = 40, forces = [], x = 0, y = 0, angle = 0, velocity = 0, acceleration = 0, color = 'white', id = guid(), display = true }) {
    super({ ctx, speedUp, stroke, size, maxVelocity, maxForce, targets, width, height, canvas, debug, mass, forces, x, y, angle, velocity, acceleration, color, id, display });
    let { position } = this;
    let magnitude = size * 5;
    let direction = this.angle;
    this.virtualView = new Vector({ ctx, color: 'white', canvas, magnitude, direction, translateX: position.x, translateY: position.y });
    let sum = vectorAddition(position, this.virtualView);
    this.rangeView = new Circle({ ctx, debug, color: 'orange', stroke: true, size: size * 10, canvas, x: sum.x, y: sum.y });
    this.hunters = hunters;
    this.wave = 0;
    this.f = getRandomInt(1, 10) * 0.01;
  }

  moveSenoidal() {
    let { position } = this;
    let frec = 1.05;
    position.y += Math.cos(this.wave) * frec;
    position.x += Math.cos(this.wave) * frec;
    this.wave += this.f// 0.05;
  }

  runAway(hunter) {
    let { ctx, canvas, rangeView, maxForce } = this;
    let { x, y } = vectorAddition(hunter.position, this.position);
    let { magnitude } = vectorSubtraction(hunter.position, this.position);
    magnitude *= 1.5;
    //console.log(this.position.direction)
    let escape = new Vector({ ctx, canvas, direction: -(this.angle / Math.PI * 180), magnitude });
    let desired = escape;
    let calc = vectorSubtraction(desired, this.velocity);
    let direction = coordinatesToDeg(x, y);
    //console.log('x: ', x, ' y:', y);
    let steer = new Vector({ ctx, canvas, magnitude: calc.magnitude, direction, color: 'green' });
    steer.limit(escape.getMagnitude() * 0.5);
    escape.run = true;
    steer.run = true;
    this.forces[1] = escape;
    this.forces[2] = steer;
    let a = vectorAddition(escape, steer);
    this.angle = (coordinatesToDeg(a.x, a.y) * Math.PI / 180) //* 0.5;
    let m = Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2));
    this.forces[0].setDirection(Math.round(m * Math.cos(this.angle)), Math.round(m * Math.sin(this.angle)));
  }

  setSafeMove() {
    this.forces = this.forces.map((force, index) => {
      if (force.run) force.setMagnitude(force.getMagnitude() * 0.01);
      return force;
    }).filter(force => (Math.floor(force.getMagnitude()) !== 0))
  }

  updateMotion() {
    let { targets, segments, hunters, rangeView, size, debug, virtualView, position, forces } = this;
    this.moveSenoidal();
    if (forces.length) this.applayForces();
    position.display = debug;
    for (let i = 0; i < targets.length; i++) {
      let target = targets[i];
      let segment = segments[i];
      let calc = this.calculateSegment(target);
      segment.translateX = calc.translateX;
      segment.translateY = calc.translateY;
      segment.direction = calc.direction;
      segment.setMagnitude(calc.magnitude);
      if (debug) {
        segment.display = true;
        segment.render();
      }
    }

    for (let i = 0; i < hunters.length; i++) {
      let hunter = hunters[i];
      let segment = segments[i];
      let calc = rangeView.calculateSegment(hunter);
      segment.translateX = calc.translateX;
      segment.translateY = calc.translateY;
      segment.direction = calc.direction;

      segment.setMagnitude(calc.magnitude);
      if (debug) {
        segment.display = true;
        segment.render();
      }
    }
    virtualView.translateX = position.x;
    virtualView.translateY = position.y;
    let { x, y } = vectorAddition(position, virtualView);
    rangeView.position.x = x;
    rangeView.position.y = y;
  }

  addHunter(hunter) {
    this.joinCircles(hunter, this.rangeView.position, 'purple');
    this.hunters.push(hunter);
  }

  shouldRunFrom(hunter) {
    let { hunters, rangeView, segments } = this;
    let circle = hunters.find(item => item.id === hunter.id);
    let segment = segments.find(item => item.id === hunter.id);
    if (circle && segment) {
      let isCollide = (segment.getMagnitude() < hunter.size + rangeView.size);
      return isCollide;
    }
    return false;
  }

  render() {
    let { debug } = this;
    this.update();
    if (debug) {
      this.virtualView.render();
      this.rangeView.render();
      this.updateInfo();
    }
    this.draw();
  }

}

