import SpaceShip from '../Entities/SpaceShip.js'
import Circle from '../components/Circle.js'
import Timelaps from '../utils/Timelaps.js';
import { calcCartesiano, getMousePos, isCollide, coordinatesToDeg, vectorSubtraction } from '../utils/index.js'

class Universe extends Timelaps {
  constructor({ canvas, ctx }) {
    super({ canvas, ctx });
    this.play(this.render.bind(this));
    this.debug = false;
    this.fps_ctrl = document.getElementById('fps_ctrl');
    this.show_fps = document.getElementById('show_fps');
    this.show_max_force = document.getElementById('show_max_force');
    this.show_max_velocity = document.getElementById('show_max_velocity');
    this.max_force_ctrl = document.getElementById('max_force_ctrl');
    this.max_velocity_ctrl = document.getElementById('max_velocity_ctrl');

    this.debug_ctrl = document.getElementById('debug');
    this.targets = [];
    this.fps_ctrl.onchange = (e) => {
      this.FPS = e.target.value;
      this.show_fps.innerHTML = `FPS: ${this.FPS}`;
    }
    this.max_force_ctrl.onchange = (e) => {
      this.spaceship.maxForce = e.target.value;
      this.show_max_force.innerHTML = `Max force: ${e.target.value}`;
    }
    this.max_velocity_ctrl.onchange = (e) => {
      this.spaceship.maxVelocity = e.target.value;
      this.show_max_velocity.innerHTML = `Max velocity: ${e.target.value}`;
    }
    this.debug_ctrl.onchange = e => this.debug = this.debug_ctrl.checked;
        
  }

  render() {
    let { canvas, ctx, debug, spaceship, targets } = this;
    this.then = this.now - (this.delta % this.interval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.beginPath();
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    ctx.translate(x, y);
    //ctx.scale(1, -1);
    if (debug) this.drawCroos();
    this.update();
    spaceship.render();
    targets.forEach(target => target.render());
    ctx.closePath();
    ctx.restore();
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

  update() {
    let { canvas, ctx, debug, maxVelocity, targets, spaceship } = this;
    spaceship.debug = debug;
    let s = 0;
    let smaller;
    targets.forEach((target, index) => {
      target.debug = debug;
      target.color = 'red';
      if (target.size > s) {
        s = target.size;
        smaller = index;
      }
    });
    if (targets.length) {
      targets[smaller].color = 'blue';
      let steer = spaceship.calculateSteering(targets[smaller].id, (steer, desired) => {
        spaceship.forces[0] = steer;
        spaceship.forces[1] = desired;
      }, (segmentIndex, targetIndex) => {
        spaceship.segments.splice(segmentIndex, 1);
        spaceship.targets.splice(targetIndex, 1);
        targets.splice(targetIndex, 1);
        spaceship.forces = [];
      });
    }

    /*
    let s = 0;
    let smaller;
    targets.forEach((target, index) => {
      target.debug = debug;
      if (target.size > s) {
        s = target.size;
        smaller = index;
      }
    });

    if (targets.length) {
      spaceship.steering(targets[smaller].id, (segmentIndex, targetIndex) => {
        //spaceship.segments.splice(segmentIndex, 1);
        //spaceship.targets.splice(targetIndex, 1);
        //targets.splice(targetIndex, 1);
      });
    }
    */
  }

  generateTarget({ x, y }) {
    let { ctx, canvas, debug, spaceship, targets } = this;
    let size = 10 + Math.random() * 100;
    let target = new Circle({ stroke: true, ctx, canvas, x, y, size, debug, color: 'red' });
    targets.push(target);
    spaceship.addTarget(target);
  }

  preload() {
    let { canvas, ctx, debug } = this;
    this.spaceship = new SpaceShip({ ctx, mass: 12, canvas, maxVelocity: 40, maxForce: 0.6  });
    //this.generateTarget({ x: -100, y: -100 });
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
