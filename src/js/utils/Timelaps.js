
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

  updatefps(fps) {
    const fps_counter = document.getElementById('fps_counter');
    if (fps_counter) fps_counter.innerHTML = `FPS: ${fps}`;
  }

  play(render) {
    let { canvas, ctx } = this;
    this.interval = 1000 / this.FPS;
    requestAnimationFrame(this.play.bind(this, render));
    this.now = Date.now();
    this.delta = this.now - this.then;
    var fps = 1000 / this.delta;
    if (this.delta > 2) this.updatefps(Math.floor(fps));
    if (this.delta > this.interval) {
      render();
    }
  }
}