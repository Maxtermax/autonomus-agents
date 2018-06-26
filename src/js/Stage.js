import { calcCenter, getRandomInt } from './utils/index.js';
import TextBox from './components/TextBox.js';
import Viewport from './components/Viewport.js';

const scale = 0.8;

export default class Stage {
  constructor(canvas, debug = false) {
    let { width, height, x = 0, y = 0 } = canvas;
    this.ctx = canvas.getContext('2d');
    let ctx = this.ctx;
    this.width = width;
    this.height = height * scale;
    this.debug = debug;
    this.x = 0;
    this.y = 0;
    this.layers = [      
      new Viewport({
        ctx, 
        canvas, 
        id : 'mainMask',
        layers: [
          new TextBox({
            ctx: this.ctx, 
            x: -(width/2)+40, 
            y: -(height/2)+60, 
            data: 'deg: 0, x: 0, y: 0', 
            font: '12px arial', 
            id: 'info'
          })
        ]
      })
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