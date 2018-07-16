import Vector from '../components/Vector.js'
import SpaceShip from '../Entities/SpaceShip.js'
import Timelaps from '../utils/Timelaps.js';

class Universe extends Timelaps {
  constructor({ canvas, ctx }) {
    super({ canvas, ctx, FPS: 60 });
    this.play(this.render.bind(this));
    this.direction = 0;    
    this.debug = false;
    this.frecuencia = 1.5;
    this.amplitude = 0.05;
    this.show_fps = document.getElementsByClassName('show_fps')[0];
    this.show_amplitude = document.getElementsByClassName('show_amplitude')[0];
    this.show_frecuencia = document.getElementsByClassName('show_frecuencia')[0];

    this.fps_ctrl = document.getElementById('fps_ctrl');   
    this.debug_ctrl = document.getElementById('debug');   
    this.amplitude_ctrl = document.getElementById('amplitude_ctrl');   
    this.frecuencia_ctrl = document.getElementById('frecuencia_ctrl');   
    
    this.debug_ctrl.onchange = e => {
      this.debug = this.debug_ctrl.checked;
      this.spaceship.debug = this.debug;
      //console.log(this.debug)
    }    

    this.amplitude_ctrl.onchange = e => {
      this.amplitude = Number(this.amplitude_ctrl.value);
      this.show_amplitude.innerHTML = `Amplitude: ${Number(this.amplitude_ctrl.value)}`;      
    }

    this.frecuencia_ctrl.onchange = e => {
      this.frecuencia = Number(this.frecuencia_ctrl.value);
      this.show_frecuencia.innerHTML = `Frecuencia: ${Number(this.frecuencia_ctrl.value)}`;
    }

    this.fps_ctrl.onchange = (e) => {
      this.FPS = Number(this.fps_ctrl.value);
      this.show_fps.innerHTML = `FPS: ${this.FPS}`;
    }   
  }

  preload() {
    let { canvas, ctx, debug } = this;
    this.spaceship = new SpaceShip({canvas, ctx, debug});
  }

  update() {
    let { canvas, ctx, spaceship, direction, amplitude, frecuencia } = this;
    spaceship.angle = Math.cos(this.direction) * frecuencia;
    spaceship.position.y += Math.cos(this.direction) * frecuencia;
    spaceship.position.x += 0.3;
    spaceship.render();
    this.direction -= amplitude;
  }

  render() {
    let { canvas, ctx } = this;
    this.then = this.now - (this.delta % this.interval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.beginPath();
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    ctx.translate(x, y);
    //ctx.scale(1, -1);
    this.drawCroos();
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
