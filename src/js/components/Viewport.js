import { calcCenter, guid } from '../utils/index.js';

export default class Viewport {
  constructor({ ctx, canvas, id = guid(), display = true, layers = [] }) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.canvas.x = 0;
    this.canvas.y = 0;
    let width = this.width = this.canvas.width * 0.9;
    let height = this.height = this.canvas.height * 0.9;
    let center = this.center  = calcCenter(canvas, { height, width });
    this.x = -(canvas.width/2)+center.x;
    this.y = -(canvas.height)/2+center.y;
    this.id = id;
    this.display = display;
    this.layers = layers;
  }

  find(id = '') {
    return this.layers.find(item => item.id === id);
  }

  push(layer) {
    this.layers.push(layer);
  }

  render() {
    let { x, y, ctx, width, height, display, layers } = this;
    if(!display) return;  
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.strokeRect(x, y, width, height);
    ctx.rect(x, y, width, height);
    ctx.clip();
    for(let layer of layers) {
      if(layer.display) layer.render();
    }
    ctx.closePath();
    ctx.restore();

  }
}
