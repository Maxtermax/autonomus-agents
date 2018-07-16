const UNIVERSE_BACKGROUND = 'rgba(0, 0, 0, 1)';

export default class Background {
  constructor({ canvas, ctx, width, id, height, x = 0, y = 0 }) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
    this.id = id;
    this.positions = [];
    for(let i = 0; i < (width+height)/2; i++) {
      this.positions.push({
        x: -(Math.random() * width * Math.cos(i)),
        y: -(Math.random() * width * Math.sin(i)),
        size: Math.random() * 10
      })
    }
  }

  drawStar({size, x, y}) {
    let { ctx, canvas, width, height } = this;
    let r = size*0.2;
    ctx.save();
    ctx.beginPath();
    let gradient = ctx.createRadialGradient(x+(size/2), y+(size/2), r*0.5, x+(size/2), y+(size/2), r*2);
    gradient.addColorStop(0, `rgba(255, 0, 0, ${Math.cos(x)})`);
    gradient.addColorStop(1, 'rgba(0, 0, 24, 0.5)');
    ctx.fillStyle = gradient;
    
    ctx.fillRect(x, y, size, size);
    ctx.fillStyle = 'white';
    ctx.arc(x + (size / 2), y + (size / 2), r, 0, 360 * Math.PI / 180);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  

  render() {
    let { ctx, canvas, x, y, width, height, positions } = this;
    //ctx.fillStyle = UNIVERSE_BACKGROUND;
    //ctx.fillRect(-width, -height, width*2, height*2);
    /*
    let { ctx, canvas, x, y, width, height, positions } = this;
    ctx.beginPath();    
    ctx.fillStyle = UNIVERSE_BACKGROUND;
    ctx.fillRect(-width, -height, width*2, height*2);
    ctx.closePath();
    for (let i = 0; i < positions.length; i++) {
      let position = positions[i];
      this.drawStar(position);
    }
  */
  }
}