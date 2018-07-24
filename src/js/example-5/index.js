import Vector from '../components/Vector.js'
import Circle from '../components/Circle.js'
import Timelaps from '../utils/Timelaps.js';
import { calcCartesiano, getMousePos, isCollide, coordinatesToDeg, vectorSubtraction } from '../utils/index.js'

class Universe extends Timelaps {
  constructor({ canvas, ctx }) {
    super({ canvas, ctx });
    this.play(this.render.bind(this));
    this.debug = false;
    this.points = [];
    this.fps_ctrl = document.getElementById('fps_ctrl');
    this.show_fps = document.getElementById('show_fps');
    this.debug_ctrl = document.getElementById('debug');

    this.fps_ctrl.onchange = (e) => {
      this.FPS = Number(this.fps_ctrl.value);
      this.show_fps.innerHTML = `FPS: ${this.FPS}`;
    }
    this.debug_ctrl.onchange = e => {
      this.debug = this.debug_ctrl.checked;
      for (let point of this.points) point.debug = this.debug;
      //console.log(this.debug)
    }

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

  update() {
    let { canvas, ctx, debug, points, mouse, targets } = this;
    targets.forEach(target => {
      target.debug = debug;
      let collide = mouse.isCollide(target);  
      if (collide) {
        target.color = 'red';
        target.stroke = false;
      } else {
        target.color = 'blue';
        target.stroke = true;
      }
      target.render();
    });
    mouse.debug = debug;
    mouse.render();
  }

  generateTarget({ x, y }) {
    let { ctx, canvas, debug, mouse, targets } = this;
    let point = new Circle({ stroke: true, ctx, canvas, x, y, size: 50, debug, color: 'blue' });
    mouse.joinCircles(point);
    mouse.targets.push(point); 
    targets.push(point);
  }

  preload() {
    let { canvas, ctx, debug } = this;
    this.targets = [];
    this.mouse = new Circle({ stroke: true, targets: [...this.targets], ctx, canvas, x: 0, y: 0, size: 15, debug, color: 'olive' });
    canvas.addEventListener('mousemove', e => {
      let mousePos = getMousePos(canvas, e);
      let { x, y } = calcCartesiano(mousePos.x, mousePos.y, canvas);
      let deg = coordinatesToDeg(x, y);
      this.mouse.position.x = x;
      this.mouse.position.y = y;
    })
    
    canvas.addEventListener('mouseup', e => {
      let mousePos = getMousePos(canvas, e);
      let { x, y } = calcCartesiano(mousePos.x, mousePos.y, canvas);
      let deg = coordinatesToDeg(x, y);
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
