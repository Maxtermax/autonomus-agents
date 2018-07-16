export default class Timelaps {
  constructor({canvas, ctx, FPS = 60}) {
    this.FPS = FPS;
    this.interval = 1000 / this.FPS;
    this.then = Date.now();
    this.now;
    this.delta;
    this.canvas = canvas;
    this.ctx = ctx;
    (function () {
      var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
      window.requestAnimationFrame = requestAnimationFrame;
    })();
  }

  play(render) {
    let { canvas, ctx } = this;
    this.interval = 1000 / this.FPS;
    requestAnimationFrame(this.play.bind(this, render));
    this.now = Date.now();
    this.delta = this.now - this.then;
    if (this.delta > this.interval) {
      render();
    }
  }
}