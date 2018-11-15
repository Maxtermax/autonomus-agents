import Explorer from '../Entities/Explorer.js'
import Circle from '../components/Circle.js'
import Vector from '../components/Vector.js'
import Line from '../components/Line.js'
import Timelaps from '../utils/Timelaps.js'
import { calcCartesiano, degrees2rads, getMousePos, vectorNormalization, vectorDotProduct, radians2deg, isCollide, vectorAddition, getRandomInt, coordinatesToDeg, vectorSubtraction } from '../utils/index.js'
const Mapa = require('../drawing.json')
var parseSVG = require('svg-path-parser');

class Universe extends Timelaps {
  constructor({ canvas, ctx }) {
    super({ canvas, ctx });
    this.play(this.render.bind(this));
    this.debug = true;
    this.fps_ctrl = document.getElementById('fps_ctrl');
    this.show_fps = document.getElementById('show_fps');

    this.debug_ctrl = document.getElementById('debug');
    this.targets = [];
    this.fps_ctrl.onchange = (e) => {
      this.FPS = e.target.value;
      this.show_fps.innerHTML = `FPS: ${this.FPS}`;
    }
    this.debug_ctrl.onchange = e => this.debug = this.debug_ctrl.checked;
  }

  render() {
    let { canvas, ctx, debug, hunters, targets } = this;
    this.then = this.now - (this.delta % this.interval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.beginPath();
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    ctx.translate(x, y);
    //ctx.scale(1, -1);
    if (debug) this.drawCroos();
    this.update();
    ctx.closePath();
    ctx.restore();
  }

  drawCroos() {
    let { canvas, ctx } = this;
    ctx.strokeStyle = 'white';
    ctx.moveTo(0, -(canvas.height / 2));
    ctx.lineTo(0, (canvas.height / 2));
    ctx.moveTo(-(canvas.width / 2), 0);
    ctx.lineTo(canvas.width / 2, 0);
    ctx.stroke();
  }

  update() {
    let { highway, vertex, canvas, ctx, debug, maxVelocity } = this;
    ctx.beginPath();
    ctx.fillStyle = "red";
    //ctx.fillRect(0, 0, 100, 100);
    ctx.save();
    for (let data of vertex) {
      ctx.beginPath();
      let { x, y, x1, x2, y1, y2, command } = data;
      if (command === "moveto") ctx.moveTo(x, y);
      if (command === "lineto") ctx.lineTo(x, y);
      if (command === "curveto") ctx.bezierCurveTo(x, y, x1, y1, x2, y2);
      if (command === "vertical lineto") ctx.lineTo(0, y);
      ctx.strokeStyle = "white";
      ctx.fillStyle = "white";
      ctx.stroke();
      if (data.command === "closepath") {
        ctx.closePath();
      }
    }
    ctx.restore();
    ctx.closePath();
  }

  generateMap() {
    let { ctx, canvas, debug } = this;
    this.vertex = [];
    console.log(Mapa)
    for (let node of Mapa.childs) {
      let data = [];
      if (node.childs) {
        for (let n of node.childs) {
          console.log(n.name === "ellipse")
          if (n.attrs && n.name === "ellipse") {
            data.push(n.attrs);
          }
          if (n.attrs && n.attrs.d) {
            data = parseSVG(n.attrs.d) 
            console.log(data)
            for (let bit of data) {
              this.vertex.push(bit);
            }
          }
        }
      }
    }

  }

  preload() {
    let { canvas, ctx, debug } = this;
    this.highway = [];
    this.generateMap();
    console.log(this.vertex)
    /*
    canvas.addEventListener('mouseup', e => {
      let mousePos = getMousePos(canvas, e);
      let { x, y } = calcCartesiano(mousePos.x, mousePos.y, canvas);
      let deg = coordinatesToDeg(x, y);
      let mag = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      //this.targets[0].position.set(mag);
      //this.targets[0].position.direction = deg * Math.PI / 180;
      this.generateTarget({ x, y });
    })
    */

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
