import { calcCenter, getRandomInt } from './utils/index.js';
const scale = 0.8;
export default class Stage {
  constructor(canvas, debug = false) {
    let {width, height, x = 0, y = 0} = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = width;
    this.height = height * scale;
    this.debug = debug;
    let calc = calcCenter({width, height, x, y},{width: this.width, height: this.height});
    this.x = calc.x;
    this.y = 0;
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);
  }

  find(id = '') {
    return this.elements.find(item => item.id === id);    
  }

  render(midlewares = []) {
    let { ctx, x, y, width, height, elements, debug } = this;
    elements.forEach((element, index, entire) => {
      midlewares.forEach(midleware => midleware(element, index, entire));
      element.render();
    })
    if(debug) {
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.rect(x, y, width, height);
        ctx.stroke();
        ctx.closePath();
    }
  }
}