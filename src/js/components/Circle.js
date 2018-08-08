import TextBox from '../components/TextBox.js'
import Vector from '../components/Vector.js'
import Grid from '../components/Grid.js'
import Motion from '../utils/Motion.js'
import * as physicsEngine from '../utils/index.js'

export default class Circle extends Motion {
  constructor({ ctx, speedUp = true, targets = [],  maxVelocity = 0, stroke = false, size = 20, canvas, debug = false, mass = 40, forces = [], x = 0, y = 0, angle = 0, velocity = 0, acceleration = 0, color = 'white', translateX = 0, translateY = 0, id = physicsEngine.guid(), display = true }) {
    super({ ctx, canvas, speedUp, mass, x, y, maxVelocity, targets, angle });
    this.size = size;
    this.translateX = translateX;
    this.translateY = translateY;
    this.stroke = stroke;
    this.color = color;
    this.id = id;
    this.display = display;
    this.debug = debug;
    this.info = new TextBox({ ctx, x, y, id: 'info', data: `x: ${this.position.x}, y: ${this.position.y}` });
  }

  update() {
    let { debug, info, position } = this;
    info.x = position.x;
    info.y = -position.y + 30;
    if (debug) {
      //info.render();
      position.display = true;
      position.render();
    }
    this.updateMotion();
  }

  draw() {
    let { ctx, canvas, color, size, position, stroke, angle, translateX, translateY } = this;
    let { x, y } = position;
    ctx.save();
    ctx.beginPath();
    ctx.scale(1, -1);
    //ctx.translate(translateX, translateY);
    //ctx.rotate(angle);
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.arc(x, y, size, 0, 360 * Math.PI/180);
    if(stroke) {
      ctx.stroke();
    } else {
      ctx.fill();
    }
    ctx.closePath();
    ctx.restore();
  }

  render() {
    let { size, ctx, angle, color, debug } = this;
    this.update();
    this.draw();
  }
}