import Vector from '../components/Vector.js'
import { guid, coordinatesToDeg, calcCartesiano, computeForce, vectorSubtraction } from '../utils/index.js'

export default class Motion {
  constructor({ ctx, speedUp = true, segments = [], id = guid(), maxForce, targets = [], maxVelocity = 5, canvas, debug = false, mass = 40, forces = [], x = 0, y = 0, angle = 0, velocity = 0, acceleration = 0 }) {
    this.speedUp = speedUp;
    this.maxVelocity = maxVelocity;
    this.maxForce = maxForce;
    this.ctx = ctx;
    this.angle = angle * Math.PI / 180;
    this.originalAngle = angle;
    this.debug = debug;
    this.segments = [];
    this.targets = targets;
    this.id = id;
    this.mass = mass;
    //console.log('x: ', x, ' y: ', y)
    let mag = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    //console.log('maginutude: ', mag)
    let direction = coordinatesToDeg(x, y);
    //console.log('direction: ', direction)
    this.position = new Vector({
      ctx,
      magnitude: mag,
      direction,
      canvas,
      id: 'position',
      color: 'olive',
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
    //console.log(this.targets)
    this.generateSegments();
    //console.log(this.segments)
  }



  setAngle(angle) {
    this.angle = angle * Math.PI / 180;
  }

  getTargetIndex(id) {
    let result;
    this.targets.filter((item, index) => item.id === id ? result = index : null);
    return result;
  }

  getSegmentIndex(id) {
    let result;
    this.segments.filter((item, index) => item.id === id ? result = index : null);
    return result;
  }

  getTarget(id) {
    let { targets } = this;
    return targets.find(item => item.id === id)
  }

  getSegment(id) {
    let { segments } = this;
    return segments.find(item => item.id === id)
  }

  isCollide(target) {
    let { targets, size, segments } = this;
    let circle = targets.find(item => item.id === target.id);
    let segment = segments.find(item => item.id === target.id);
    if (circle && segment) {
      return (segment.magnitude < target.size + size);
    }
    return false;
  }

  applayForces() {
    let { forces = [], mass, acceleration, maxVelocity, speedUp, position, velocity, canvas, debug } = this;
    for (let force of forces) {
      this.move(force);
      force.translateX = position.x;
      force.translateY = position.y;
      if (debug) force.render();
    }
  }

  updateMotion() {
    let { targets, segments, debug, position, forces } = this;
    if (forces.length) {
      this.applayForces();
    }
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
  }

  addTarget(target) {
    this.joinCircles(target);
    this.targets.push(target);
  }

  joinCircles(target, spot = null, color = 'white') {
    let { ctx, position, canvas, debug } = this;
    let segment = this.calculateSegment(target, spot);
    let link = new Vector({ ...segment, ctx, display: debug, color, canvas, id: target.id });
    this.segments.push(link);
  }

  calculateSegment(target, spot = null) {
    let { ctx } = this;
    let position;
    if(spot) {
      //console.log('spot: ', spot)
      position = spot;
    } else {
      position = this.position;
    }   
    let { x, y, magnitude, direction } = vectorSubtraction(target.position, position);
    let translateX = position.x;
    let translateY = position.y;
    return { direction, magnitude, x, y, translateX, translateY };
  }

  generateSegments() {
    let { targets } = this;
    for (let target of targets) {
      this.joinCircles(target);
    }
  }

  move(force) {
    let { acceleration, velocity, position, mass, speedUp, maxVelocity } = this;
    let computed = computeForce(force, mass);
    if (speedUp) {
      //console.log(velocity.getMagnitude(), ' ', maxVelocity);
      if (velocity.getMagnitude() > maxVelocity) {
        position.add(computed);
      } else {
        acceleration.add(computed);
        velocity.add(acceleration);
        position.add(velocity);
      }
    } else {
      position.add(computed);
    }
  }
}