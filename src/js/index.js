import Defender from './Defender.js';
import Stage from './Stage.js';
import Controls from './Controls.js'
import SpaceShip from './SpaceShip.js';
import Spot from './components/Spot.js';
import Grid from './components/Grid.js';
import {  
  calcCenter, 
  calcCartesiano,
  coordidatesToDeg,
  getMousePos,
  clear, 
  hover, 
  isOverLapping, 
  getRandomInt, 
  everyFrame, 
  isCollide 
} from './utils/index.js';

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
    this.sectors = [];
  }

  render() {
    let game = setInterval(() => {
      clear(canvas);
      ctx.save();
      ctx.beginPath();
      let x = canvas.width/2;
      let y = canvas.height/2;
      ctx.translate(x, y);
      //this.drawCroos();
      this.update();
      ctx.closePath();
      ctx.restore();
    }, this.FPS)
  }

  drawCroos() { 
    ctx.strokeStyle = 'white';
    ctx.moveTo(0, -(canvas.height/2));
    ctx.lineTo(0, (canvas.height/2));
    ctx.moveTo(-(canvas.width/2), 0);
    ctx.lineTo(canvas.width/2, 0);
    ctx.stroke();    
  }

  update() {
    this.stage.render();
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
    let {x, y} = calcCartesiano(clientX, clientY, canvas);
     let nav = this.stage.find('nav');      
     //let info = this.stage.find('info');     
     let deg = coordidatesToDeg(x, y);
     //let message = `deg: ${ Math.floor(deg) }, x: ${ x }, y: ${ y }`;
     //info.data = message;
     nav.angle = deg;
  }

  moveVectorNav(deg = 0) {
    let nav = this.stage.find('mainMask').find('nav');
    nav.angle = deg;
    //nav.vector.direction = deg;
  }

  markSpot(e) {
    if(e.targetTouches) {
      let { clientX, clientY } = e.targetTouches[0];      
      this.addSpot(clientX, clientY);
      this.updateAngle(clientX, clientY);        
    } else {
      let { x, y } = getMousePos(canvas, e);
      this.addSpot(x, y);
      this.updateAngle(x, y);              
    }   
  }
  

  preload() {
    this.stage = new Stage(canvas, true);  
    let calc = (canvas.height + canvas.width) / 2;
    /*
    this.sectors.push(
      new Grid({
        ctx,
        x: 0,
        y: 0,
        width: calc,
        height: calc,
        padding: calc/50,
        color: 'rgba(255, 220, 0, 0.5)',
        id: 'SECTOR1'
      }),
      new Grid({
        ctx,
        x: -calc,
        y: 0,
        width: calc,
        height: calc,
        padding: calc/50,
        color: 'rgba(65, 220, 150, 0.5)',
        id: 'SECTOR2'
      }),
      new Grid({
        ctx,
        x: -calc,
        y: -calc,
        width: calc,
        height: calc,
        padding: calc/50,
        color: 'rgba(100, 220, 0, 0.5)',
        id: 'SECTOR3'
      }),            
      new Grid({
        ctx,
        x: 0,
        y: -calc,
        width: calc,
        height: calc,
        padding: calc/50,
        color: 'rgba(100, 220, 0, 0.5)',
        id: 'SECTOR3'
      }),            
    )  
      for (let sector of this.sectors) this.stage.push(sector);         
    */
    
    let nav = new SpaceShip({width: 15, height: 15, x: 0, y: 0,  ctx, color: 'white', id: 'nav'});
    this.stage.find('mainMask').push(nav);        

    let onMove = this.moveEvent.bind(this);
    canvas.addEventListener('mousemove', e => {
      let mousePos = getMousePos(canvas, e);
      let {x, y} = calcCartesiano(mousePos.x, mousePos.y, canvas);     
      let info = this.stage.find('mainMask').find('info');
      let deg = coordidatesToDeg(x, y);
      info.data = `deg: ${Math.floor(deg)} x: ${Math.floor(x)}, y: ${Math.floor(y)}`;  
      this.moveVectorNav(deg);
    })

    this.controls = new Controls({stage: this.stage, canvas, onMove}, true);
    //canvas.addEventListener("touchstart", this.markSpot.bind(this));
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

