import Stage from '../layers/Stage.js';
import Entity from '../components/Entity.js';
import Spot from '../components/Spot.js';
import Vector from '../components/Vector.js';
import { calcCenter, calcCartesiano, coordidatesToDeg, getMousePos, guid } from '../utils/index.js';
let sp = 0;
let total = 0;

class Universe {
  constructor({ canvas, ctx }) {
    this.refs = [];
    this.FPS = 60;
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

  render() {
    let { canvas, ctx } = this;
    requestAnimationFrame(this.render.bind(this));
    this.now = Date.now();
    this.delta = this.now - this.then;
    if (this.delta > this.interval) {
      this.then = this.now - (this.delta % this.interval);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.beginPath();
      let x = canvas.width / 2;
      let y = canvas.height / 2;
      ctx.translate(x, y);
      //ctx.scale(1, -1);
      //this.drawCroos();
      this.update();
      ctx.closePath();
      ctx.restore();
    }
  }

  drawCroos() {
    let { canvas, ctx } = this;
    ctx.strokeStyle = 'red';
    ctx.moveTo(0, -(canvas.height / 2));
    ctx.lineTo(0, (canvas.height / 2));
    ctx.moveTo(-(canvas.width / 2), 0);
    ctx.lineTo(canvas.width / 2, 0);
    ctx.stroke();
  }

  spin() {
    for (let i = 0; i < total; i++) {
      let force = this.stage.find('mainMask').find(`force${i}`);
      if (force) {
        if (i % 2 == 0) {
          force.direction = Math.sin(sp) * 1;
        } else {
          force.direction = Math.cos(sp) * 1;
        }
        sp += 0.000009;
      }
    }
  }

  update() {
    this.stage.render();
    this.spin();
  }

  generateVector({ magnitude = 0, direction, color, id }) {
    let { ctx, canvas } = this;
    const mainMask = this.stage.find('mainMask');
    let vector = new Vector({
      ctx,
      magnitude,
      direction,
      canvas,
      id: id || guid(),
      color,
      display: true
    })
    mainMask.push(vector);
    return vector;
  }

  randomRgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
  }

  generateEntity(top, pos) {
    let { ctx, canvas } = this;
    let result = [];
    for (let i = 0; i < top; i++) {
      let force = this.generateVector({
        magnitude: 10 + (Math.random() * 100),
        color: `transparent`,
        direction: Math.random() * 360,
        id: `force${i}`
      });
      let navX, navY;
      if (pos) {
        navX = pos.x;
        navY = pos.y;
      } else {
        navX = (-canvas.width / 2) + Math.random() * 100;
        navY = (-canvas.height / 2) + Math.random() * 100;
      }

      let nav = new Entity({
        canvas,
        width: 15,
        height: 15,
        mass: 10,
        x: navX,
        y: navY,
        ctx,
        color: 'yellow',
        id: `nav${i}`,
        forces: [force],
        mass: 50
      })
      result.push(nav);
    }
    return result;
  }

  preload() {
    let { canvas, ctx } = this;
    this.stage = new Stage(canvas, true);
    let viewport = this.stage.find('mainMask').find('info');
    canvas.addEventListener('mouseup', e => {
      let mousePos = getMousePos(canvas, e);
      let calc = calcCartesiano(mousePos.x, mousePos.y, canvas);
      let deg = coordidatesToDeg(calc.x, calc.y);

      let Entity = this.generateEntity(25, {
        x: calc.x,
        y: mousePos.y
      });
      Entity.forEach(ship => this.stage.find('mainMask').push(ship));

      //let rope = this.stage.find('mainMask').find('rope');
      //rope.direction = (deg * Math.PI / 180);      
      //rope.magnitude = Math.sqrt(Math.pow(calc.x, 2) + Math.pow(calc.y, 2));
      //leftForce.direction = (deg * Math.PI / 180);      
      //leftForce.magnitude = Math.sqrt(Math.pow(calc.x, 2) + Math.pow(calc.y, 2));
      viewport.data = `deg: ${Math.floor(deg)}, x: ${calc.x}, y: ${calc.y}`;
    })
  }
}

export default function () {
  const intViewportWidth = window.innerWidth;
  const intViewportHeight = window.innerHeight;
  const canvas = document.getElementById('lienzo');
  const canvasHeight = canvas.height = intViewportHeight;
  const canvasWidth = canvas.width = intViewportWidth;
  const ctx = canvas.getContext('2d');
  let space = new Universe({ canvas, ctx });
  space.preload();
  space.render();
}
