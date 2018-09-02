const calcCenter = (container, item) => {
  let x = container.x + (container.width / 2) - (item.width / 2);
  let y = container.y + (container.height / 2) - (item.height / 2);
  return { y, x }
}

const isCollide = (type = 'square', a, b) => {
  if (type === 'square') {
    let x = (a.x >= b.x) && (a.x <= b.x + (b.width || b.bulletWidth));
    let y = (a.y >= b.y) && (a.y <= b.y + (b.height || b.bulletHeight));
    return x && y;
  }
  if (type === 'circle') {
    let overLapX = a.x + a.r >= b.x - b.r && a.x - a.r <= b.x + b.r;
    let overLapY = a.y + a.r >= b.y - b.r && a.y - a.r <= b.y + b.r;
    return overLapX && overLapX;
  }
}

const randomRgba = () => {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

function vectorSubtraction2(a, b) {
  var memSpaceShips = turbojs.alloc(2);
  turbojs.run(memSpaceShips, `
    float coordinatesToDeg(float x, float y) {
      float rad = atan(y, x);
      float deg = rad * 360.0 / (2.0 * ${Math.PI});
      return deg;
    }
    
    void main(void) {   
      vec4 a = vec4(${parseFloat(a.x).toFixed(2)}, ${parseFloat(a.y).toFixed(2)}, ${parseFloat(a.magnitude).toFixed(2)}, ${parseFloat(a.direction).toFixed(2)}); 
      vec4 b = vec4(${parseFloat(b.x).toFixed(2)}, ${parseFloat(b.y).toFixed(2)}, ${parseFloat(b.magnitude).toFixed(2)}, ${parseFloat(b.direction).toFixed(2)}); 
      vec4 resultado = a - b;
      vec4 mem = read();
      mem[0] = length(resultado);
      mem[1] = coordinatesToDeg(resultado.x, resultado.y);
      commit(mem);    
    }
  `);
  let result = memSpaceShips.data.subarray(0, 2);
  return { magnitude: result[0], direction: result[1] }
}

const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const calcCartesiano = (candidateX, candidateY, canvas) => {
  let x = candidateX - (canvas.width / 2);
  //console.log(x)
  let y = (canvas.height / 2) - candidateY;
  return { x, y };
}

const coordinatesToDeg = (x, y) => {
  let rad = Math.atan2(y, x);
  let deg = rad * 360 / (2 * Math.PI);
  return deg;
}

const getMousePos = (canvas, evt) => {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  }
}

const touchEvents = (DOMelement, type = 'drag', cb) => {
  if (type === 'drag') {
    let hold = false;
    DOMelement.addEventListener("touchstart", (e) => hold = true, false);
    DOMelement.addEventListener("touchend", (e) => {
      hold = false;
      e.dragStop = true;
      cb(e);
    }, false);
    DOMelement.addEventListener("touchleave", (e) => {
      hold = false;
      e.dragStop = true;
      cb(e);
    }, false);
    DOMelement.addEventListener("touchmove", (e) => hold ? cb(e) : null, false);

    DOMelement.addEventListener('mousedown', (e) => hold = true);
    DOMelement.addEventListener('mousemove', (e) => hold ? cb(e) : null);
    DOMelement.addEventListener('mouseup', (e) => {
      hold = false;
      e.dragStop = true;
      cb(e);
    });
  }
}

const everyFrame = (data, cb) => {
  let delta = Date.now() - data.initialTime;
  //console.log('delta  ', delta)
  if (delta >= data.futureTime) {
    cb(data);
    data.initialTime = Date.now();
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const vectorSubtraction = (a, b) => {
  let result = {};
  result.x = a.x - b.x;
  result.y = a.y - b.y;
  result.magnitude = Math.sqrt(Math.pow(result.x, 2) + Math.pow(result.y, 2));
  result.direction = coordinatesToDeg(result.x, result.y) * Math.PI / 180;
  return result;
}

const vectorSplit = (a, f) => {
  let result = {};
  result.x = a.x / f;
  result.y = a.y / f;
  return result;  
}

const vectorNormalization = (v) => {
  let result = {};
  result.x = v.x / v.magnitude;
  result.y = v.y / v.magnitude;
  result.magnitude = v.magnitude / v.magnitude;
  return result;
}

const vectorDotProduct = (a, b) => {
  let x = a.x * b.x;
  let y = a.y * b.y;
  let calc = (x + y) / (a.getMagnitude() * b.getMagnitude());
  let result = Math.acos(calc);
  //console.log('calc: ', calc, ' result: ', result);
  return result;
}

const vectorAddition = (a, b) => {
  let result = {};
  result.x = a.x + b.x;
  result.y = a.y + b.y;
  result.magnitude = Math.sqrt(Math.pow(result.x, 2) + Math.pow(result.y, 2));
  result.direction = coordinatesToDeg(result.x, result.y);
  return result;
}

const computeForce = (force, scale) => {
  let { x, y } = force;
  if (scale !== 0) {
    return {
      x: x / scale,
      y: y / scale
    }
  }
  return { x, y };
}

const virtualVector = ({ magnitude = 0, direction = 0, x = 0, y = 0}) => {
  return {
    x, y,
    magnitude,
    direction,
    add: (a, b) => {
      return vectorAddition(a, b);
    },
    div: (vector, f) => {
      return vectorSplit(vector, f);
    }
  }
}

const degrees2rads = degrees => degrees * Math.PI / 180;
const radians2deg = radians => radians * 180 / Math.PI;

module.exports = {
  calcCenter,
  isCollide,
  guid,
  calcCartesiano,
  coordinatesToDeg,
  getMousePos,
  touchEvents,
  everyFrame,
  getRandomInt,
  vectorSubtraction,
  vectorSubtraction2,
  vectorNormalization,
  virtualVector,
  vectorDotProduct,
  vectorAddition,
  vectorSplit,
  computeForce,
  degrees2rads,
  radians2deg,
  randomRgba
}