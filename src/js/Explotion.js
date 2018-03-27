export default class Explotion {
  constructor({ ctx, x, y, r = 5, duration = 25, color = { r: '255', g: '255', b: '255' } }) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.duration = duration;
    this.r = r;
    this.done = false;
    this.light = 1;
    this.color = color;
  }

  render() {
    let { ctx, x, y, duration, r, done, color, light } = this;
    if (duration <= 0) this.done = true;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${light})`;
    ctx.fill();
    ctx.closePath();
    this.r += 0.5 + Math.random();
    this.light -= 0.08;
    this.duration -= 0.5;
  }
}