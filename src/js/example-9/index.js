import Explorer from '../Entities/Explorer.js'
import Hunter from '../Entities/Hunter.js'
import Circle from '../components/Circle.js'
import Vector from '../components/Vector.js'
import Timelaps from '../utils/Timelaps.js';
import { calcCartesiano, degrees2rads, getMousePos, vectorNormalization, vectorDotProduct, radians2deg, isCollide, vectorAddition, getRandomInt, coordinatesToDeg, vectorSubtraction } from '../utils/index.js'
let g = 0;
class Universe extends Timelaps {
  constructor({ canvas, ctx }) {
    super({ canvas, ctx });
    this.play(this.render.bind(this));
    this.debug = false;
    this.fps_ctrl = document.getElementById('fps_ctrl');
    this.show_fps = document.getElementById('show_fps');

    this.debug_ctrl = document.getElementById('debug');
    this.targets = [];
    this.fps_ctrl.onchange = (e) => {
      this.FPS = e.target.value;
      this.show_fps.innerHTML = `FPS: ${this.FPS}`;
    }
    this.debug_ctrl.onchange = e => this.debug = this.debug_ctrl.checked;
  }

  render() {
    let { canvas, ctx, debug, hunters, targets } = this;
    this.then = this.now - (this.delta % this.interval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.beginPath();
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    ctx.translate(x, y);
    //ctx.scale(1, -1);
    if (debug) this.drawCroos();
    /*
    let d = vectorDotProduct(this.va, this.vb);
    let opposite = radians2deg(d) >= 90 && radians2deg(d) <= 270;
    //console.log('opposite: ', opposite, ' dif', radians2deg(d));
    this.va.render();
    this.vb.render();
    */    
    this.update();        
    hunters.forEach(hunter => hunter.render());
    targets.forEach(target => {
      for (let hunter of this.hunters) {
        if (target.shouldRunFrom(hunter)) {         
          target.rangeView.color = 'red';
          target.runAway(hunter);
        } else {
          target.rangeView.color = 'orange';
          target.setSafeMove(hunter);
        }
      }
      target.render();
    });
    ctx.closePath();
    ctx.restore();
    //g -= 1;
  }

  drawCroos() {
    let { canvas, ctx } = this;
    ctx.strokeStyle = 'white';
    ctx.moveTo(0, -(canvas.height / 2));
    ctx.lineTo(0, (canvas.height / 2));
    ctx.moveTo(-(canvas.width / 2), 0);
    ctx.lineTo(canvas.width / 2, 0);
    ctx.stroke();
  }

  theNearerOne(hunter, targets) {
    let smaller = hunter.segments[0];
    let record = hunter.segments[0].getMagnitude();
    hunter.segments.forEach((segment, index) => {
      if (segment.getMagnitude() < record) {
        record = segment.getMagnitude();
        smaller = segment;
      }
    })
    return targets.find(target => target.id === smaller.id);
  }

  pullTarget(hunter, segmentIndex, targetIndex) {
    let { targets } = this;
    hunter.segments.splice(segmentIndex, 1);
    hunter.targets.splice(targetIndex, 1);
    hunter.forces = [];
    targets.splice(targetIndex, 1);
  }

  moveHunter(hunter, steer, desired) {
    let { targets } = this;
    hunter.forces[0] = steer;
    hunter.forces[1] = desired;
  }

  update() {
    let { canvas, ctx, debug, maxVelocity, targets, hunters } = this;
    targets.forEach(target => {
      target.debug = debug;
      target.color = 'white';
      if (target.position.x > canvas.width / 2) target.position.x += -canvas.width;
      if (target.position.x < -canvas.width / 2) target.position.x += canvas.width;
      if (target.position.y > canvas.height / 2) target.position.y += -canvas.height;
      if (target.position.y < -canvas.height / 2) target.position.y += canvas.height;
    })

    for (let hunter of hunters) {
      hunter.debug = debug;
      if (hunter.position.x > canvas.width / 2) hunter.position.x += -canvas.width;
      if (hunter.position.x < -canvas.width / 2) hunter.position.x += canvas.width;

      if (hunter.position.y > canvas.height / 2) hunter.position.y += -canvas.height;
      if (hunter.position.y < -canvas.height / 2) hunter.position.y += canvas.height;
      if (targets.length) {
        let nearer = this.theNearerOne(hunter, targets);
        if (nearer) {
          nearer.color = 'red';
          hunter.seekSteering(nearer.id, this.moveHunter.bind(this, hunter), this.pullTarget.bind(this, hunter))
        } 
      }
    }
  }

  generateTarget({ x, y }) {
    let top = 200;
    let { ctx, canvas, debug, hunters, targets } = this;
    for (let i = 0; i < top; i++) {
      let direction = i * 10;
      let magnitude = 15;
      let dx = x + Math.round(magnitude * Math.cos(direction)) + Math.random();
      let dy = y + Math.round(magnitude * Math.sin(direction)) + Math.random() * (i * 10);
      let angle = 0//coordinatesToDeg(dx - x, dy - y);
      let initForce = new Vector({ ctx, canvas, magnitude: 150, direction: 0/*angle*/ });
      initForce.run = false;
      let forces = [initForce];
      let target = new Explorer({ forces, color: 'white', angle, mass: 50, size: 10, speedUp: true, canvas, ctx, debug, x: dx, y: dy, width: 15, height: 15, maxForce: 0.1, maxVelocity: 4 });
      //console.log(target.angle / Math.PI * 180)
      for (let hunter of hunters) {
        target.addHunter(hunter);
        hunter.addTarget(target);
      }
      targets.push(target);
      //console.log(targets)
    }
  }

  preload() {
    let { canvas, ctx, debug } = this;
    /*
    this.va = new Vector({ magnitude: 100, direction: 180, translateY: -100, ctx, canvas });
    this.vb = new Vector({ magnitude: 100, direction: 0, color: 'blue', ctx, canvas });
    canvas.addEventListener('mousemove', e => {
      let mousePos = getMousePos(canvas, e);
      let { x, y } = calcCartesiano(mousePos.x, mousePos.y, canvas);
      this.vb.setDirection(x, y);
      this.va.setDirection(-x, -y);
    })
    */
    this.hunters = [
      new Hunter({ ctx, x: 100, y: 100, debug, size: 20, speedUp: true, mass: 100, color: 'yellow', canvas, width: 25, height: 25, maxForce: 0, maxVelocity: 50 })
    ]
    canvas.addEventListener('mouseup', e => {
      let mousePos = getMousePos(canvas, e);
      let { x, y } = calcCartesiano(mousePos.x, mousePos.y, canvas);
      let deg = coordinatesToDeg(x, y);
      let mag = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      //this.targets[0].position.set(mag);
      //this.targets[0].position.direction = deg * Math.PI / 180;
      this.generateTarget({ x, y });
    })
    
  }
}

export default function () {
  const intViewportWidth = window.innerWidth;
  const intViewportHeight = window.innerHeight;
  const canvas = document.getElementById('lienzo');
  const canvasHeight = canvas.height = intViewportHeight;
  const canvasWidth = canvas.width = intViewportWidth;
  const ctx = canvas.getContext('2d');
  let space = new Universe({ canvas, ctx });
  space.preload();
  space.render();
}
