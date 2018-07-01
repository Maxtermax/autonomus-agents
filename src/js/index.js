import Defender from './Defender.js';
import Stage from './Stage.js';
import Controls from './Controls.js'
import SpaceShip from './SpaceShip.js';
import Spot from './components/Spot.js';
import Grid from './components/Grid.js';
import Vector from './components/Vector.js';
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
  isCollide,
  guid
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
      //ctx.scale(1, -1);
      this.drawCroos();
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
    //let vectorX = this.stage.find('mainMask').find('vectorX');        
    //let info = this.stage.find('mainMask').find('info');        
    //vectorX.direction+=0.005;
    //info.data = `deg: ${vectorX.direction}, x: ${vectorX.convertX}, y: ${vectorX.convertY}`;
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

  moveVectorNav(deg = 0) {
    //let nav = this.stage.find('mainMask').find('nav');
    let vectorX = this.stage.find('mainMask').find('vectorX');
    vectorX.direction = deg;
  }

  markSpot(e) {
    if(e.targetTouches) {
      let { clientX, clientY } = e.targetTouches[0];      
      let { x, y } = getMousePos(canvas, e);
      this.addSpot(x, y);
    } else {
      let mousePos = getMousePos(canvas, e);
      let id = guid();
      let  calc = calcCartesiano(mousePos.x, mousePos.y, canvas);
      let deg = coordidatesToDeg(calc.x, calc.y);
      const mainMask = this.stage.find('mainMask');
      let vectorX = mainMask.find('vectorX');
      let vectorY = mainMask.find('vectorY');
      vectorX.magnitude = 200;
      vectorY.magnitude = 200;
      vectorX.direction = deg * Math.PI / 180;
      vectorY.direction = deg * Math.PI / 180;     
      let info = this.stage.find('mainMask').find('info'); 
      info.data = `deg: ${Math.floor(deg)}, x: ${calc.x}, y: ${calc.y}`;      
      this.addSpot(calc.x, -calc.y, id);
    }   
  }
  
  generateVectorY(magnitude = 0, direction, id) {
    const mainMask = this.stage.find('mainMask')
    let vectorY = new Vector({
      ctx, 
      magnitude, 
      direction,
      canvas,
      id: id || guid(),
      color: 'red'
    })           
    mainMask.push(vectorY);   
    return {y: vectorY}
  }

  generateVectorX(magnitude = 0, direction, id) {
    const mainMask = this.stage.find('mainMask')
    let vectorX = new Vector({
      ctx, 
      magnitude, 
      direction,
      canvas,
      id: id || guid(),
      color: 'blue'
    })           
    mainMask.push(vectorX);   
    return {x: vectorX}
  }

  preload() {
    this.stage = new Stage(canvas, true);  
    let newVectorY1 = this.generateVectorY(200, 90, 'vectorY');    
    let newVectorX1 = this.generateVectorX(150, 0, 'vectorX');    

    let nav = new SpaceShip({
      width: 20, 
      height: 20, 
      x: 10, 
      y: 10,  
      ctx, 
      color: 'white', 
      id: 'nav',
      angle: 0 * Math.PI /180,
      vectors: [newVectorY1, newVectorX1]
    })    

    this.stage.find('mainMask').push(nav);    
    
    //let onMove = this.moveEvent.bind(this);
    let viewport = this.stage.find('mainMask').find('info');
    canvas.addEventListener('mousemove', e => {
      let mousePos = getMousePos(canvas, e);
      let  calc = calcCartesiano(mousePos.x, mousePos.y, canvas);
      let deg = coordidatesToDeg(calc.x, calc.y);
      let vectorX = this.stage.find('mainMask').find('vectorX');
      let vectorY = this.stage.find('mainMask').find('vectorY');
      vectorX.direction = (deg * Math.PI / 180);
      vectorY.direction = (deg * Math.PI / 180);      
      viewport.data = `deg: ${Math.floor(deg)}, x: ${calc.x}, y: ${calc.y}`;      

      /*
      this.moveVectorNav(deg);
      */
    })

    //this.controls = new Controls({stage: this.stage, canvas, onMove}, true);
    //canvas.addEventListener("touchstart", this.markSpot.bind(this));
    canvas.addEventListener("mouseup", this.markSpot.bind(this));
  }

  addSpot(x, y, id = guid()) {
    let spot = new Spot({x, y, ctx, display: true, size: 10, id});
    const mainMask = this.stage.find('mainMask')
    mainMask.push(spot);    
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

