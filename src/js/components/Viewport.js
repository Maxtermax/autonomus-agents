import { calcCenter, guid } from '../utils/index.js';
import TextBox from './TextBox.js';

export default class Viewport {
  constructor({ ctx, canvas, x = 0, y = 0, id = guid(), display = true, layers = [] }) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.canvas.x = 0;
    this.canvas.y = 0;
    let width = this.width = this.canvas.width * 0.9;
    let height = this.height = this.canvas.height * 0.9;
    let center = this.center  = calcCenter(canvas, { height, width });
    this.x = x;
    this.y = y;
    this.id = id;
    this.display = display;
    this.layers = layers;
    this.layers.push(
      new TextBox({
        ctx, 
        x: 0, 
        y: 50, 
        data: 'deg: 0, x: 0, y: 0', 
        font: '12px arial', 
        id: 'info',
        display: false
      })
    )
  }

  find(id = '') {
    return this.layers.find(item => item.id === id);
  }

  push(layer) {
    this.layers.push(layer);
  }

  render() {
    let { x, y, ctx, width, height, display, layers, center } = this;
    if(!display) return;  
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.strokeRect(x+center.x, y+center.y, width, height);
    ctx.rect(x+center.x, y+center.y, width, height);
    ctx.clip();
    for(let layer of layers) {
      if(layer.display) layer.render();
    }
    ctx.closePath();
    ctx.restore();

  }
}
