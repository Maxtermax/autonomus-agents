import Vector from '../components/Vector.js'
import SpaceShip from '../Entities/SpaceShip.js'
import Timelaps from '../utils/Timelaps.js';

class Universe extends Timelaps {
  constructor({ canvas, ctx }) {
    super({ canvas, ctx, FPS: 60 });
    this.play(this.render.bind(this));
    this.debug = false;
    this.show_mass = document.getElementById('show_mass');
    this.show_fps = document.getElementById('show_fps');
    this.fps_ctrl = document.getElementById('fps_ctrl');
    this.mass_ctrl = document.getElementById('mass_ctrl');
    this.debug_ctrl = document.getElementById('debug');
    this.mass = this.mass_ctrl.value;
    this.maxVelocity = 15;
    this.wave = 0;
    this.fps_ctrl.onchange = (e) => {
      this.FPS = Number(this.fps_ctrl.value);
      this.show_fps.innerHTML = `FPS: ${this.FPS}`;
    }

    this.mass_ctrl.onchange = (e) => {
      this.maxVelocity = Number(this.mass_ctrl.value);
      this.show_mass.innerHTML = `Max velocity: ${this.maxVelocity}`;
    }

    this.debug_ctrl.onchange = e => {
      this.debug = this.debug_ctrl.checked;
      this.spaceships.forEach(spaceship => spaceship.debug = this.debug);
      
      //console.log(this.debug)
    }
  }

  preload() {
    let { canvas, ctx, debug, maxVelocity } = this;
    this.spaceships = [];
    for(let i = 0; i < 50; i++) {
      let x = (-(canvas.width/2))-Math.random()*100;
      let y = (i*15) - 300;
      let mass = 100 + ((i+1) * (Math.random()*100));
      let forces = [
        new Vector({ ctx, canvas, magnitude: 150, color: 'green', direction: 0})
      ]
      let spaceship = new SpaceShip({ canvas, ctx, x, y, debug, forces, mass, maxVelocity });
      this.spaceships.push(spaceship);
    }
  }

  update() {
    let { canvas, spaceships, wave, maxVelocity } = this;    
    spaceships.forEach(spaceship => {      
      spaceship.maxVelocity = maxVelocity;
      spaceship.forces.forEach(force => force.normalize());
      spaceship.info.data = `mass: ${Math.floor(spaceship.mass)}, x: ${Math.floor(spaceship.position.x)}, y: ${Math.floor(spaceship.position.y)}`
      let offscreen = (spaceship.position.x - spaceship.width) >= canvas.width / 2;
      if (offscreen) {
        spaceship.acceleration.magnitude = 1;
        spaceship.position.x = -(canvas.width / 2); 
      } 
      if(spaceship.velocity.x > spaceship.maxVelocity) {
        spaceship.position.y += Math.sin(wave*5) * 0.5;
        spaceship.angle = Math.sin(wave*5) * 0.5;
      } else {
        spaceship.position.y += Math.sin(wave) * 0.2;
        spaceship.angle = Math.sin(wave) * 0.2;
      }
        
      this.wave -= 0.0008;
      spaceship.render()
    });
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
    if (debug) this.drawCroos();
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
