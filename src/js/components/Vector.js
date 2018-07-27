import { guid } from '../utils/index.js'
export default class Vector {
  constructor({ ctx, translateX = 0, translateY = 0, size = 5, canvas, magnitude, direction = 0, id = guid(), display = true, color = 'red' }) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.color = color;
    this.magnitude = magnitude;
    this.direction = direction * Math.PI / 180;
    //console.log('magnitude: ', magnitude);
    //console.log('direction: ', this.direction);
    this.x = Math.round(magnitude * Math.cos(this.direction));
    this.y = Math.round(magnitude * Math.sin(this.direction));
    this.translateX = translateX;
    this.translateY = translateY;
    this.size = size;
    this.id = id;
    this.display = display;
  }

  limit(max) {
    let { magnitude } = this;
    if (magnitude > max) this.setMagnitude(max);
  }

  drawHead() {
    let { ctx, x, y, size, magnitude, translateX, translateY, direction, color } = this;
    ctx.save();
    ctx.scale(1, -1);
    ctx.translate(x + translateX, y + translateY);
    ctx.rotate(direction);

    ctx.beginPath();
    ctx.fillStyle = color;
    //ctx.strokeStyle = 'yellow';
    //ctx.strokeRect(0, -5, 10, 10);//head

    ctx.moveTo(0, size);
    ctx.lineTo(0, -size);
    ctx.lineTo(size, 0);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  normalize() {
    let { magnitude, x, y } = this;
    if (magnitude != 0) {
      this.x = x / magnitude;
      this.y = y / magnitude;
    }
  }

  setMagnitude(mag) {
    this.magnitude = mag;
    this.x = Math.round(this.magnitude * Math.cos(this.direction));
    this.y = Math.round(this.magnitude * Math.sin(this.direction));
  }

  mult(n) {
    this.x = this.x * n;
    this.y = this.y * n;
  }

  sub(vector) {
    this.x = this.x - vector.x;
    this.y = this.y - vector.y;
  }

  setDirection(x, y) {
    this.direction = Math.atan2(y, x);
    this.x = Math.round(this.magnitude * Math.cos(this.direction));
    this.y = Math.round(this.magnitude * Math.sin(this.direction));    
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  getMagnitude() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  div(vector) {
    this.x = this.x / vector.x;
    this.y = this.y / vector.y;
  }

  drawTail() {
    let { ctx, magnitude, direction, x, y, translateX, translateY, canvas, color, id } = this;
    ctx.save();
    ctx.scale(1, -1);
    ctx.translate(translateX, translateY);
    ctx.beginPath();

    //ctx.fillStyle = color;
    //ctx.fillRect(0, 0, 10, 10);//ancla 
    ctx.lineTo(0, 0);
    ctx.lineTo(x, y);

    ctx.lineCap = "round";
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  clone(data = {}) {
    let { ctx, translateX, translateY, size, canvas, magnitude, direction, id, display, color } = this;
    direction = direction / Math.PI * 180;
    let copy = new Vector({ ctx, translateX, translateY, size, canvas, magnitude, direction, id, display, color, ...data });
    return copy;
  }

  update() {
    //let { magnitude, direction } = this;
    //this.x = Math.round(magnitude * Math.cos(direction));
    //this.y = Math.round(magnitude * Math.sin(direction));    
  }

  render() {
    let { ctx, display } = this;
    this.update();
    if (display) {
      this.drawTail();
      this.drawHead();
    }
  }
}