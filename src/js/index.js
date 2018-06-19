import Defender from './Defender.js';
import Stage from './Stage.js';
import Controls from './Controls.js'
import SpaceShip from './SpaceShip.js';
import Spot from './components/Spot.js';
import { calcCenter, clear, hover, isOverLapping, getRandomInt, everyFrame, isCollide } from './utils/index.js';
const intViewportWidth = window.innerWidth;
const intViewportHeight = window.innerHeight;
const canvas = document.getElementById('lienzo');
const canvasHeight = canvas.height = intViewportHeight;
const canvasWidth = canvas.width = intViewportWidth;
const ctx = canvas.getContext('2d');
let clock = { initialTime: Date.now(), x: 0, y: 0 }

class Universe {
  constructor() {
    this.FPS = 1000 / 60;
  }

  render() {
    let game = setInterval(() => {
      clear(canvas);
      ctx.save();
      ctx.beginPath();
      ctx.lineTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.strokeStyle = 'white';
      ctx.stroke();
      ctx.restore();
      this.update();
    }, this.FPS)
  }

  update() {
    let width = canvas.width * 0.9;
    let height = canvas.height * 0.9;
    canvas.x = 0;
    canvas.y = 0;
    let { x, y } = calcCenter(canvas, { height, width });
    clock.futureTime = 1000;
    everyFrame(clock, () => {
      //console.log("Done")
    })

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.strokeRect(x, y, width, height);
    ctx.rect(x, y, width, height);
    ctx.clip();
    this.stage.render();
    ctx.closePath();
    ctx.restore();
    this.controls.render();
  }

  moveEvent(handler) {
    let momentumX = handler.x - handler.pivot.x;
    let momentumY = handler.y - handler.pivot.y;    
    let nav = this.stage.find('nav');
    nav.prevX = nav.x;
    nav.x += momentumX/10;
    nav.y += momentumY/10;
    nav.bound = true;
  }

  updateAngle(clientX, clientY) {
    let {x, y} = this.calcCartesiano(clientX, clientY);
     let nav = this.stage.find('nav');      
     let info = this.stage.find('info');     
     let deg = this.coordidatesToDeg(x, y);
     let message = `deg: ${ Math.floor(deg) }, x: ${ x }, y: ${ y }`;
     info.data = message;
     nav.angle = deg;
  }

  moveVectorNav(deg = 0) {
    let nav = this.stage.find('nav');
    nav.vector.direction = deg;
  }

  getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  calcCartesiano(candidateX, candidateY) {
    let x = -candidateX+(canvas.width/2);
    let y = (canvas.height/2)-candidateY;    
    return { x, y };
  }

  coordidatesToDeg(x, y) {
    let rad = Math.atan2(x, y);
    let deg = rad * (180 / Math.PI);
    return -deg;
  }
  
  markSpot(e) {
    if(e.targetTouches) {
      let { clientX, clientY } = e.targetTouches[0];      
      this.addSpot(clientX, clientY);
      this.updateAngle(clientX, clientY);        
    } else {
      let { x, y } = this.getMousePos(canvas, e);
      this.addSpot(x, y);
      this.updateAngle(x, y);              
    }   
  }


  preload() {
    this.stage = new Stage(canvas, true);
    let { x, y } = this.calcCartesiano(50, 0);
    let nav = new SpaceShip({width: 25, height: 25, x, y, ctx, color: 'white', id: 'nav' });
    this.stage.push(nav);
    let onMove = this.moveEvent.bind(this);
    canvas.addEventListener('mousemove', e => {
      let mousePos = this.getMousePos(canvas, e);
      let calc = this.calcCartesiano(mousePos.x, mousePos.y);     
      //console.log(calc) 
      let deg = this.coordidatesToDeg(calc.x, calc.y);
      //console.log(deg)
      let {magnitude} = this.stage.find('nav').vector;
      this.moveVectorNav(deg/(-magnitude));
    })
    
    this.controls = new Controls({stage: this.stage, canvas, onMove}, true);
    canvas.addEventListener("touchstart", this.markSpot.bind(this));
    //canvas.addEventListener("mouseup", this.markSpot.bind(this));

  }

  addSpot(x, y) {
    let spot = new Spot({x, y, ctx, display: true, size: 10});
    this.stage.layers.push(spot);
  }
}


let space = new Universe();
space.preload();
space.render();
/*
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function (err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}
*/

