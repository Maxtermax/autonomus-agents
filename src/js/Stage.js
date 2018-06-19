import { calcCenter, getRandomInt } from './utils/index.js';
import TextBox from './components/TextBox.js';
import Mask from './components/Mask.js';

const scale = 0.8;
export default class Stage {
  constructor(canvas, debug = false) {
    let { width, height, x = 0, y = 0 } = canvas;
    this.ctx = canvas.getContext('2d');
    let ctx = this.ctx;
    this.width = width;
    this.height = height * scale;
    this.debug = debug;
    let calc = calcCenter({ width, height, x, y }, { width: this.width, height: this.height });
    this.x = calc.x;
    this.y = 0;
    this.layers = [
      new TextBox(ctx, 10, 20, 'deg: 0, x: 0, y: 0', '12px arial', true, 'info'),
      //new Mask({ctx, canvas})
    ]
  }

  push(layer) {
    this.layers.push(layer);
  }

  find(id = '') {
    return this.layers.find(item => item.id === id);
  }

  render(midlewares = []) {
    let { ctx, x, y, width, height, layers, debug } = this;
    layers.forEach((layer, index, entire) => {
      midlewares.forEach(midleware => midleware(layer, index, entire));
      layer.render();
    })
    if (debug) {
      /*
      ctx.beginPath();
      ctx.strokeStyle = 'white';
      ctx.rect(x, y, width, height);
      ctx.stroke();
      ctx.closePath();
      */
    }
  }
}