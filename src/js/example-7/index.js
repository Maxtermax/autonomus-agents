import SpaceShip from '../Entities/SpaceShip.js'
import Circle from '../components/Circle.js'
import Vector from '../components/Vector.js'
import Timelaps from '../utils/Timelaps.js';
import { calcCartesiano, getMousePos, isCollide, vectorAddition, coordinatesToDeg, radians2deg, degrees2rads, vectorSubtraction } from '../utils/index.js'

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
    this.spaceships = [];

    this.fps_ctrl.onchange = (e) => {
      this.FPS = e.target.value;
      this.show_fps.innerHTML = `FPS: ${this.FPS}`;
    }
    this.max_force_ctrl.onchange = (e) => {
      for (let spaceship of this.spaceships) spaceship.maxForce = e.target.value;
      this.show_max_force.innerHTML = `Max force: ${e.target.value}`;
    }
    this.max_velocity_ctrl.onchange = (e) => {
      for (let spaceship of this.spaceships) spaceship.maxVelocity = e.target.value;
      this.show_max_velocity.innerHTML = `Max velocity: ${e.target.value}`;
    }
    this.debug_ctrl.onchange = e => this.debug = this.debug_ctrl.checked;
  }

  render() {
    let { canvas, ctx, debug, spaceships, targets } = this;
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
    for (let spaceship of spaceships) spaceship.render();
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
    let { canvas, ctx, debug, maxVelocity, targets, spaceships } = this;
    for (let spaceship of spaceships) {
      spaceship.debug = debug;
      if (spaceship.position.x > canvas.width / 2) spaceship.position.x = -canvas.width / 2;
      if (spaceship.position.x < -canvas.width / 2) spaceship.position.x = canvas.width / 2;
      if (spaceship.position.y > canvas.height / 2) spaceship.position.y = -canvas.height / 2;
      if (spaceship.position.y < -canvas.height / 2) spaceship.position.y = canvas.height / 2;
      for (let target of targets) {
        spaceship.fleeSteering(target.id, (steer, desired) => {
          spaceship.forces[1] = steer;
          spaceship.forces[2] = desired;
        });
      }
    }
  }

  generateTarget({ x, y }) {
    let { ctx, canvas, debug, spaceships, targets } = this;
    let size = 50;
    let target = new Circle({ stroke: true, ctx, canvas, x, y, size, debug, color: 'red' });
    targets.push(target);
    for (let spaceship of spaceships) spaceship.addTarget(target);
  }

  generateSpaceships() {
    let { canvas, ctx, debug } = this;
    let top = 10;
    for (let i = 0; i < top; i++) {
      let forces = [
        new Vector({ canvas, ctx, direction: 0, magnitude: 100 + Math.random() * 10, display: false })
      ]
      let x = (-canvas.width / 2) - 25 + Math.random() * 100;
      let y = (100 + (i * 10)) - 25 + Math.random() * 100;
      this.spaceships.push(
        new SpaceShip({ ctx, x, y, debug, canvas, forces, maxForce: 0.6, fleeForce: 60 })
      )
    }
  }
  preload() {
    let { canvas } = this;
    this.generateSpaceships();
    this.generateTarget({ x: 0, y: 0 });
    canvas.addEventListener('mousemove', e => {
      let mousePos = getMousePos(canvas, e);
      let { x, y } = calcCartesiano(mousePos.x, mousePos.y, canvas);
      let mag = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      this.targets[0].position.setMagnitude(mag);
      this.targets[0].position.setDirection(x, y);
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
