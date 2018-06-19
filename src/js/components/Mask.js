import { calcCenter } from '../utils/index.js';

export default class Mask {
  constructor({ ctx, canvas }) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.canvas.x = 0;
    this.canvas.y = 0;
  }

  render() {
    let ctx = this.ctx;
    let height = 300;
    let width = 100;      
    let { x, y } = calcCenter(this.canvas, { height, width });    
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, width, height);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }
}
