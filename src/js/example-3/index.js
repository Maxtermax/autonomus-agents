import Vector from '../components/Vector.js'
import SpaceShip from '../Entities/SpaceShip.js'
import Timelaps from '../utils/Timelaps.js';

class Universe extends Timelaps {
  constructor({ canvas, ctx }) {
    super({ canvas, ctx, FPS: 60 });
    this.play(this.render.bind(this));
    this.debug = false;
    this.left_force = 50;
    this.right_force = 50;

    this.show_fps = document.getElementsByClassName('show_fps')[0];
    this.fps_ctrl = document.getElementById('fps_ctrl');
    this.show_left = document.getElementById('show_left');
    this.show_right = document.getElementById('show_right');

    this.show_top = document.getElementById('show_top');
    this.show_bottom = document.getElementById('show_bottom');
    this.left_ctrl = document.getElementById('left_ctrl');

    this.right_ctrl = document.getElementById('right_ctrl');
    this.top_ctrl = document.getElementById('top_ctrl');
    this.bottom_ctrl = document.getElementById('bottom_ctrl');

    this.bottom_ctrl.onchange = e => {
      let force = this.spaceship.forces[3];
      let { value } = e.target;
      force.setMagnitude(value);
      show_bottom.innerHTML = `Bottom force: ${Math.floor(value)}`;
    }

    this.top_ctrl.onchange = e => {
      let force = this.spaceship.forces[2];
      let { value } = e.target;
      force.setMagnitude(value);
      show_top.innerHTML = `Top force: ${Math.floor(value)}`;
    }

    this.right_ctrl.onchange = e => {
      let force = this.spaceship.forces[0];
      let { value } = e.target;
      force.setMagnitude(value);
      show_right.innerHTML = `Right force: ${Math.floor(value)}`;
    }

    this.left_ctrl.onchange = e => {
      let force = this.spaceship.forces[1];
      let { value } = e.target;
      force.setMagnitude(value);
      show_left.innerHTML = `Left force: ${Math.floor(force.magnitude)}`;
    }


    this.debug_ctrl = document.getElementById('debug');
    this.debug_ctrl.onchange = e => {
      this.debug = this.debug_ctrl.checked;
      this.spaceship.debug = this.debug;
      //console.log(this.debug)
    }

    this.fps_ctrl.onchange = (e) => {
      this.FPS = Number(this.fps_ctrl.value);
      this.show_fps.innerHTML = `FPS: ${this.FPS}`;
    }

  }

  preload() {
    let { canvas, ctx, debug } = this;
    let forces = [
      new Vector({ ctx, canvas, magnitude: 50, color: 'blue', direction: 0, id: 'right_force' }),
      new Vector({ ctx, canvas, magnitude: 50, color: 'red', direction: 180, id: 'left_force' }),
      new Vector({ ctx, canvas, magnitude: 50, color: 'green', direction: 90, id: 'top_force' }),
      new Vector({ ctx, canvas, magnitude: 50, color: 'purple', direction: 270, id: 'bottom_force' }),
    ]
    this.spaceship = new SpaceShip({ speedUp: false, canvas, ctx, debug, forces, mass: 1, maxVelocity: 10 });
  }

  update() {
    let { canvas, ctx, spaceship } = this;
    spaceship.render();
  }

  render() {
    let { canvas, ctx, debug } = this;
    this.then = this.now - (this.delta % this.interval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.beginPath();
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    ctx.translate(x, y);
    //ctx.scale(1, -1);
    if(debug) this.drawCroos();
    this.update();
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
