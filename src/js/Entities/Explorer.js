import TextBox from '../components/TextBox.js'
import Explotion from '../components/Explotion.js'
import Motion from '../utils/Motion.js'
import BarChart from '../components/BarChart.js'
import Grid from '../components/Grid.js'
import Circle from '../components/Circle.js'
import Vector from '../components/Vector.js'
import SpaceShip from './SpaceShip.js'
import { isOverLapping, guid, coordinatesToDeg, vectorDotProduct, getRandomInt, calcCartesiano, vectorAddition, vectorSubtraction, computeForce, degrees2rads, radians2deg } from '../utils/index.js'

export default class Explorer extends SpaceShip {
  constructor({ ctx, speedUp = true, hunters = [], stroke = true, size = 20, maxVelocity = 5, maxForce = 0.5, targets = [], width = 20, height = 20, canvas, debug = false, mass = 40, forces = [], x = 0, y = 0, angle = 0, velocity = 0, acceleration = 0, color = 'white', id = guid(), display = true }) {
    super({ ctx, speedUp, stroke, size, maxVelocity, maxForce, targets, width, height, canvas, debug, mass, forces, x, y, angle, velocity, acceleration, color, id, display });
    let { position } = this;
    let magnitude = size + 190;
    let direction = this.angle;
    this.virtualView = new Vector({ ctx, color: 'white', canvas, magnitude, direction, translateX: position.x, translateY: position.y });
    let sum = vectorAddition(position, this.virtualView);
    this.rangeView = new Circle({ ctx, angle: this.virtualView.direction, debug, color: 'orange', stroke: true, size: size * 20, canvas, x: sum.x, y: sum.y });
    this.hunters = hunters;
  }


  runAway(hunter) {
    let { ctx, canvas, rangeView, maxForce, id, position } = this;
    this.forces[1] = null;
    if (!!this.forces[1]) return;
    let { magnitude } = vectorSubtraction(hunter.position, this.position);
    let r = this.forces[0];
    let h = hunter.getSegment(id);
    let dot = vectorDotProduct(h, r);
    if (isNaN(dot)) return;
    let isOpposite = radians2deg(dot) >= 90 && radians2deg(dot) <= 270;
    //console.log('isOpposite: ', isOpposite);
    let oppositeSide = isOpposite ? radians2deg(this.angle) + 180 : radians2deg(this.angle);
    let escape = new Vector({ color: 'green', ctx, canvas, direction: oppositeSide, magnitude });
    this.velocity.setDirection(escape.x, escape.y);    
    let desired = escape;
    let calc = vectorSubtraction(desired, this.velocity);
    let steer = new Vector({ ctx, color: 'blue', canvas, magnitude: calc.magnitude, direction: calc.direction, color: 'green' });
    steer.limit(escape.getMagnitude() * 0.5);
    steer.run = true;
    
    escape.run = true;
    this.forces[1] = escape;
    this.angle = escape.direction;
    this.forces[0].setDirection(escape.x, escape.y);

    this.forces[2] = steer;
  }

  setSafeMove() {
    let less = 15;
    this.forces = this.forces.map((force, index) => {
      if (force.run) {
        force.setMagnitude(force.getMagnitude() - less);
      }
      return force;
    }).filter(force => force.getMagnitude() > less);
  }

  updateMotion() {
    let { angle, targets, segments, hunters, rangeView, size, debug, virtualView, position, forces } = this;
    this.moveSenoidal();
    let px = Math.round(virtualView.magnitude * Math.cos(angle));
    let py = Math.round(virtualView.magnitude * Math.sin(angle));
    virtualView.setDirection(px, py);
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

