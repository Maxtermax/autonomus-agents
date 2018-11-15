/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(76);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(78);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(126);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(130);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(78);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _assign = __webpack_require__(53);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vector = function () {
  function Vector(_ref) {
    var ctx = _ref.ctx,
        _ref$translateX = _ref.translateX,
        translateX = _ref$translateX === undefined ? 0 : _ref$translateX,
        _ref$translateY = _ref.translateY,
        translateY = _ref$translateY === undefined ? 0 : _ref$translateY,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 5 : _ref$size,
        canvas = _ref.canvas,
        magnitude = _ref.magnitude,
        _ref$direction = _ref.direction,
        direction = _ref$direction === undefined ? 0 : _ref$direction,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? (0, _index.guid)() : _ref$id,
        _ref$display = _ref.display,
        display = _ref$display === undefined ? true : _ref$display,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? 'red' : _ref$color;
    (0, _classCallCheck3.default)(this, Vector);

    this.ctx = ctx;
    this.canvas = canvas;
    this.color = color;
    this.magnitude = magnitude;
    this.direction = direction * Math.PI / 180;
    //console.log('magnitude: ', magnitude);
    //console.log('direction: ', this.direction);
    this.x = Math.round(magnitude * Math.cos(this.direction));
    this.y = Math.round(magnitude * Math.sin(this.direction));
    this.translateX = translateX;
    this.translateY = translateY;
    this.size = size;
    this.id = id;
    this.display = display;
  }

  (0, _createClass3.default)(Vector, [{
    key: 'limit',
    value: function limit(max) {
      var magnitude = this.magnitude;

      if (magnitude > max) this.setMagnitude(max);
    }
  }, {
    key: 'drawHead',
    value: function drawHead() {
      var ctx = this.ctx,
          x = this.x,
          y = this.y,
          size = this.size,
          magnitude = this.magnitude,
          translateX = this.translateX,
          translateY = this.translateY,
          direction = this.direction,
          color = this.color;

      ctx.save();
      ctx.scale(1, -1);
      ctx.translate(x + translateX, y + translateY);
      ctx.rotate(direction);

      ctx.beginPath();
      ctx.fillStyle = color;
      //ctx.strokeStyle = 'yellow';
      //ctx.strokeRect(0, -5, 10, 10);//head

      ctx.moveTo(0, size);
      ctx.lineTo(0, -size);
      ctx.lineTo(size, 0);
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }
  }, {
    key: 'normalize',
    value: function normalize() {
      var magnitude = this.magnitude,
          x = this.x,
          y = this.y;

      if (magnitude != 0) {
        this.x = x / magnitude;
        this.y = y / magnitude;
      }
    }
  }, {
    key: 'setMagnitude',
    value: function setMagnitude(mag) {
      this.magnitude = mag;
      this.x = Math.round(this.magnitude * Math.cos(this.direction));
      this.y = Math.round(this.magnitude * Math.sin(this.direction));
    }
  }, {
    key: 'mult',
    value: function mult(n) {
      this.x = this.x * n;
      this.y = this.y * n;
    }
  }, {
    key: 'sub',
    value: function sub(vector) {
      this.x = this.x - vector.x;
      this.y = this.y - vector.y;
    }
  }, {
    key: 'setDirection',
    value: function setDirection(x, y) {
      this.direction = Math.atan2(y, x);
      this.x = Math.round(this.magnitude * Math.cos(this.direction));
      this.y = Math.round(this.magnitude * Math.sin(this.direction));
    }
  }, {
    key: 'add',
    value: function add(vector) {
      this.x += vector.x;
      this.y += vector.y;
    }
  }, {
    key: 'getHeadPosition',
    value: function getHeadPosition() {
      var x = this.x,
          y = this.y,
          translateX = this.translateX,
          translateY = this.translateY;

      return { x: x + translateX, y: y + translateY };
    }
  }, {
    key: 'getBasePosition',
    value: function getBasePosition() {
      var translateX = this.translateX,
          translateY = this.translateY;

      return { x: translateX, y: translateY };
    }
  }, {
    key: 'getMagnitude',
    value: function getMagnitude() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
  }, {
    key: 'getDirection',
    value: function getDirection() {
      return (0, _index.coordinatesToDeg)(this.x, this.y);
    }
  }, {
    key: 'split',
    value: function split(n) {
      this.x = this.x / n;
      this.y = this.y / n;
    }
  }, {
    key: 'div',
    value: function div(vector) {
      this.x = this.x / vector.x;
      this.y = this.y / vector.y;
    }
  }, {
    key: 'drawTail',
    value: function drawTail() {
      var ctx = this.ctx,
          magnitude = this.magnitude,
          direction = this.direction,
          x = this.x,
          y = this.y,
          translateX = this.translateX,
          translateY = this.translateY,
          canvas = this.canvas,
          color = this.color,
          id = this.id;

      ctx.save();
      ctx.scale(1, -1);
      ctx.translate(translateX, translateY);
      ctx.beginPath();

      //ctx.fillStyle = color;
      //ctx.fillRect(0, 0, 10, 10);//ancla 
      ctx.lineTo(0, 0);
      ctx.lineTo(x, y);

      ctx.lineCap = "round";
      ctx.lineWidth = 2;
      ctx.strokeStyle = color;
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
  }, {
    key: 'clone',
    value: function clone() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var ctx = this.ctx,
          translateX = this.translateX,
          translateY = this.translateY,
          size = this.size,
          canvas = this.canvas,
          magnitude = this.magnitude,
          direction = this.direction,
          id = this.id,
          display = this.display,
          color = this.color;

      direction = direction / Math.PI * 180;
      var copy = new Vector((0, _assign2.default)({ ctx: ctx, translateX: translateX, translateY: translateY, size: size, canvas: canvas, magnitude: magnitude, direction: direction, id: id, display: display, color: color }, data));
      return copy;
    }
  }, {
    key: 'update',
    value: function update() {
      //let { magnitude, direction } = this;
      //this.x = Math.round(magnitude * Math.cos(direction));
      //this.y = Math.round(magnitude * Math.sin(direction));    
    }
  }, {
    key: 'render',
    value: function render() {
      var ctx = this.ctx,
          display = this.display;

      this.update();
      if (display) {
        this.drawTail();
        this.drawHead();
      }
    }
  }]);
  return Vector;
}();

exports.default = Vector;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(45)('wks');
var uid = __webpack_require__(32);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var calcCenter = function calcCenter(container, item) {
  var x = container.x + container.width / 2 - item.width / 2;
  var y = container.y + container.height / 2 - item.height / 2;
  return { y: y, x: x };
};

var isCollide = function isCollide() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'square';
  var a = arguments[1];
  var b = arguments[2];

  if (type === 'square') {
    var x = a.x >= b.x && a.x <= b.x + (b.width || b.bulletWidth);
    var y = a.y >= b.y && a.y <= b.y + (b.height || b.bulletHeight);
    return x && y;
  }
  if (type === 'circle') {
    var overLapX = a.x + a.r >= b.x - b.r && a.x - a.r <= b.x + b.r;
    var overLapY = a.y + a.r >= b.y - b.r && a.y - a.r <= b.y + b.r;
    return overLapX && overLapX;
  }
};

var randomRgba = function randomRgba() {
  var o = Math.round,
      r = Math.random,
      s = 255;
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
};

function vectorSubtraction2(a, b) {
  var memSpaceShips = turbojs.alloc(2);
  turbojs.run(memSpaceShips, '\n    float coordinatesToDeg(float x, float y) {\n      float rad = atan(y, x);\n      float deg = rad * 360.0 / (2.0 * ' + Math.PI + ');\n      return deg;\n    }\n    \n    void main(void) {   \n      vec4 a = vec4(' + parseFloat(a.x).toFixed(2) + ', ' + parseFloat(a.y).toFixed(2) + ', ' + parseFloat(a.magnitude).toFixed(2) + ', ' + parseFloat(a.direction).toFixed(2) + '); \n      vec4 b = vec4(' + parseFloat(b.x).toFixed(2) + ', ' + parseFloat(b.y).toFixed(2) + ', ' + parseFloat(b.magnitude).toFixed(2) + ', ' + parseFloat(b.direction).toFixed(2) + '); \n      vec4 resultado = a - b;\n      vec4 mem = read();\n      mem[0] = length(resultado);\n      mem[1] = coordinatesToDeg(resultado.x, resultado.y);\n      commit(mem);    \n    }\n  ');
  var result = memSpaceShips.data.subarray(0, 2);
  return { magnitude: result[0], direction: result[1] };
}

var guid = function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

var calcCartesiano = function calcCartesiano(candidateX, candidateY, canvas) {
  var x = candidateX - canvas.width / 2;
  //console.log(x)
  var y = canvas.height / 2 - candidateY;
  return { x: x, y: y };
};

var coordinatesToDeg = function coordinatesToDeg(x, y) {
  var rad = Math.atan2(y, x);
  var deg = rad * 360 / (2 * Math.PI);
  return deg;
};

var getMousePos = function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};

var touchEvents = function touchEvents(DOMelement) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'drag';
  var cb = arguments[2];

  if (type === 'drag') {
    var hold = false;
    DOMelement.addEventListener("touchstart", function (e) {
      return hold = true;
    }, false);
    DOMelement.addEventListener("touchend", function (e) {
      hold = false;
      e.dragStop = true;
      cb(e);
    }, false);
    DOMelement.addEventListener("touchleave", function (e) {
      hold = false;
      e.dragStop = true;
      cb(e);
    }, false);
    DOMelement.addEventListener("touchmove", function (e) {
      return hold ? cb(e) : null;
    }, false);

    DOMelement.addEventListener('mousedown', function (e) {
      return hold = true;
    });
    DOMelement.addEventListener('mousemove', function (e) {
      return hold ? cb(e) : null;
    });
    DOMelement.addEventListener('mouseup', function (e) {
      hold = false;
      e.dragStop = true;
      cb(e);
    });
  }
};

var everyFrame = function everyFrame(data, cb) {
  var delta = Date.now() - data.initialTime;
  //console.log('delta  ', delta)
  if (delta >= data.futureTime) {
    cb(data);
    data.initialTime = Date.now();
  }
};

var getRandomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var vectorSubtraction = function vectorSubtraction(a, b) {
  var result = {};
  result.x = a.x - b.x;
  result.y = a.y - b.y;
  result.magnitude = Math.sqrt(Math.pow(result.x, 2) + Math.pow(result.y, 2));
  result.direction = coordinatesToDeg(result.x, result.y) * Math.PI / 180;
  return result;
};

var vectorSplit = function vectorSplit(a, f) {
  var result = {};
  result.x = a.x / f;
  result.y = a.y / f;
  return result;
};

var vectorNormalization = function vectorNormalization(v) {
  var result = {};
  result.x = v.x / v.magnitude;
  result.y = v.y / v.magnitude;
  result.magnitude = v.magnitude / v.magnitude;
  return result;
};

var vectorDotProduct = function vectorDotProduct(a, b) {
  var x = a.x * b.x;
  var y = a.y * b.y;
  var calc = (x + y) / (a.getMagnitude() * b.getMagnitude());
  var result = Math.acos(calc);
  //console.log('calc: ', calc, ' result: ', result);
  return result;
};

var vectorAddition = function vectorAddition(a, b) {
  var result = {};
  result.x = a.x + b.x;
  result.y = a.y + b.y;
  result.magnitude = Math.sqrt(Math.pow(result.x, 2) + Math.pow(result.y, 2));
  result.direction = coordinatesToDeg(result.x, result.y);
  return result;
};

var computeForce = function computeForce(force, scale) {
  var x = force.x,
      y = force.y;

  if (scale !== 0) {
    return {
      x: x / scale,
      y: y / scale
    };
  }
  return { x: x, y: y };
};

var virtualVector = function virtualVector(_ref) {
  var _ref$magnitude = _ref.magnitude,
      magnitude = _ref$magnitude === undefined ? 0 : _ref$magnitude,
      _ref$direction = _ref.direction,
      direction = _ref$direction === undefined ? 0 : _ref$direction,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y;

  return {
    x: x, y: y,
    magnitude: magnitude,
    direction: direction,
    add: function add(a, b) {
      return vectorAddition(a, b);
    },
    div: function div(vector, f) {
      return vectorSplit(vector, f);
    }
  };
};

var degrees2rads = function degrees2rads(degrees) {
  return degrees * Math.PI / 180;
};
var radians2deg = function radians2deg(radians) {
  return radians * 180 / Math.PI;
};

module.exports = {
  calcCenter: calcCenter,
  isCollide: isCollide,
  guid: guid,
  calcCartesiano: calcCartesiano,
  coordinatesToDeg: coordinatesToDeg,
  getMousePos: getMousePos,
  touchEvents: touchEvents,
  everyFrame: everyFrame,
  getRandomInt: getRandomInt,
  vectorSubtraction: vectorSubtraction,
  vectorSubtraction2: vectorSubtraction2,
  vectorNormalization: vectorNormalization,
  virtualVector: virtualVector,
  vectorDotProduct: vectorDotProduct,
  vectorAddition: vectorAddition,
  vectorSplit: vectorSplit,
  computeForce: computeForce,
  degrees2rads: degrees2rads,
  radians2deg: radians2deg,
  randomRgba: randomRgba
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(2);
var ctx = __webpack_require__(20);
var hide = __webpack_require__(18);
var has = __webpack_require__(19);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(16);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timelaps = function () {
  function Timelaps(_ref) {
    var canvas = _ref.canvas,
        ctx = _ref.ctx,
        _ref$FPS = _ref.FPS,
        FPS = _ref$FPS === undefined ? 60 : _ref$FPS;
    (0, _classCallCheck3.default)(this, Timelaps);

    this.FPS = FPS;
    this.interval = 1000 / this.FPS;
    this.then = Date.now();
    this.now;
    this.delta;
    this.canvas = canvas;
    this.ctx = ctx;
    (function () {
      var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
      window.requestAnimationFrame = requestAnimationFrame;
    })();
  }

  (0, _createClass3.default)(Timelaps, [{
    key: 'updatefps',
    value: function updatefps(fps) {
      var fps_counter = document.getElementById('fps_counter');
      if (fps_counter) fps_counter.innerHTML = 'FPS: ' + fps;
    }
  }, {
    key: 'play',
    value: function play(render) {
      var canvas = this.canvas,
          ctx = this.ctx;

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
  }]);
  return Timelaps;
}();

exports.default = Timelaps;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(61);
var toPrimitive = __webpack_require__(41);
var dP = Object.defineProperty;

exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _TextBox = __webpack_require__(35);

var _TextBox2 = _interopRequireDefault(_TextBox);

var _Explotion = __webpack_require__(54);

var _Explotion2 = _interopRequireDefault(_Explotion);

var _Motion2 = __webpack_require__(36);

var _Motion3 = _interopRequireDefault(_Motion2);

var _BarChart = __webpack_require__(55);

var _BarChart2 = _interopRequireDefault(_BarChart);

var _Grid = __webpack_require__(37);

var _Grid2 = _interopRequireDefault(_Grid);

var _Circle = __webpack_require__(15);

var _Circle2 = _interopRequireDefault(_Circle);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpaceShip = function (_Motion) {
  (0, _inherits3.default)(SpaceShip, _Motion);

  function SpaceShip(_ref) {
    var ctx = _ref.ctx,
        _ref$speedUp = _ref.speedUp,
        speedUp = _ref$speedUp === undefined ? true : _ref$speedUp,
        _ref$stroke = _ref.stroke,
        stroke = _ref$stroke === undefined ? true : _ref$stroke,
        _ref$skin = _ref.skin,
        skin = _ref$skin === undefined ? 'explorer' : _ref$skin,
        _ref$fleeForce = _ref.fleeForce,
        fleeForce = _ref$fleeForce === undefined ? 50 : _ref$fleeForce,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 20 : _ref$size,
        _ref$maxVelocity = _ref.maxVelocity,
        maxVelocity = _ref$maxVelocity === undefined ? 5 : _ref$maxVelocity,
        _ref$maxForce = _ref.maxForce,
        maxForce = _ref$maxForce === undefined ? 0.5 : _ref$maxForce,
        _ref$targets = _ref.targets,
        targets = _ref$targets === undefined ? [] : _ref$targets,
        _ref$width = _ref.width,
        width = _ref$width === undefined ? 20 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === undefined ? 20 : _ref$height,
        canvas = _ref.canvas,
        _ref$debug = _ref.debug,
        debug = _ref$debug === undefined ? false : _ref$debug,
        _ref$mass = _ref.mass,
        mass = _ref$mass === undefined ? 40 : _ref$mass,
        _ref$forces = _ref.forces,
        forces = _ref$forces === undefined ? [] : _ref$forces,
        _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y,
        _ref$angle = _ref.angle,
        angle = _ref$angle === undefined ? 0 : _ref$angle,
        _ref$velocity = _ref.velocity,
        velocity = _ref$velocity === undefined ? 0 : _ref$velocity,
        _ref$acceleration = _ref.acceleration,
        acceleration = _ref$acceleration === undefined ? 0 : _ref$acceleration,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? 'white' : _ref$color,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? (0, _index.guid)() : _ref$id,
        _ref$display = _ref.display,
        display = _ref$display === undefined ? true : _ref$display;
    (0, _classCallCheck3.default)(this, SpaceShip);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SpaceShip.__proto__ || (0, _getPrototypeOf2.default)(SpaceShip)).call(this, { ctx: ctx, canvas: canvas, speedUp: speedUp, mass: mass, x: x, y: y, maxVelocity: maxVelocity, maxForce: maxForce, angle: angle, id: id, velocity: velocity, acceleration: acceleration }));

    _this.width = width;
    _this.height = height;
    _this.color = color;
    _this.display = display;
    _this.debug = debug;
    _this.size = size;
    _this.forces = forces;
    _this.stroke = stroke;
    _this.canvas = canvas;
    _this.skin = skin;
    _this.originalFleeForce = fleeForce;
    _this.fleeForce = fleeForce;
    _this.info = new _TextBox2.default({ ctx: ctx, x: x, y: y, id: 'info', data: 'deg: ' + _this.position.direction + ', x: ' + _this.position.x + ', y: ' + _this.position.y });
    _this.wave = 0;
    _this.f = (0, _index.getRandomInt)(1, 10) * 0.01;
    return _this;
  }

  (0, _createClass3.default)(SpaceShip, [{
    key: 'moveSenoidal',
    value: function moveSenoidal() {
      var position = this.position;

      var frec = 1.01;
      position.y += Math.cos(this.wave) * frec;
      position.x += Math.cos(this.wave) * frec;
      this.wave += this.f; // 0.05;
    }
  }, {
    key: 'draw',
    value: function draw() {
      var angle = this.angle,
          mass = this.mass,
          width = this.width,
          skin = this.skin,
          height = this.height,
          position = this.position,
          ctx = this.ctx,
          color = this.color,
          acceleration = this.acceleration,
          velocity = this.velocity,
          info = this.info,
          debug = this.debug;
      var x = position.x,
          y = position.y;


      ctx.save(); //save angle
      ctx.beginPath();
      ctx.scale(1, -1);
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.lineWidth = 8;
      ctx.lineCap = 'round';

      ctx.lineTo(-(width / 2), height / 2);
      ctx.lineTo(width / 2, -(height / 2) + height / 2);
      ctx.lineTo(-(width / 2), -height / 2);
      ctx.lineTo(-(width / 8), -(height / 2) + height / 2);
      ctx.moveTo(-(width / 2), height / 2);
      ctx.lineTo(-(width / 8), -(height / 2) + height / 2);
      ctx.fill();
      ctx.closePath();
      ctx.restore();
      acceleration.render();
      velocity.render();
      position.render();
      if (debug) this.drawShildForce();
    }
  }, {
    key: 'drawShildForce',
    value: function drawShildForce() {
      var ctx = this.ctx,
          canvas = this.canvas,
          color = this.color,
          size = this.size,
          position = this.position,
          stroke = this.stroke,
          skin = this.skin;
      var x = position.x,
          y = position.y;

      ctx.save();
      ctx.beginPath();
      ctx.scale(1, -1);
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.arc(x, y, size, 0, 360 * Math.PI / 180);
      if (stroke) {
        ctx.stroke();
      } else {
        ctx.fill();
      }
      ctx.closePath();
      ctx.restore();
    }
  }, {
    key: 'updateInfo',
    value: function updateInfo() {
      var position = this.position,
          info = this.info,
          mass = this.mass,
          angle = this.angle,
          vectors = this.vectors,
          acceleration = this.acceleration;

      if (info) {
        info.data = 'mass: ' + Math.floor(mass) + ', x: ' + Math.floor(position.x) + ', y: ' + Math.floor(position.y);
        info.x = position.x;
        info.y = -position.y + 30;
        info.render();
      }
    }
  }, {
    key: 'stop',
    value: function stop(id) {
      this.forces = []; //this.forces.filter(force => force.id !== id);
    }
  }, {
    key: 'update',
    value: function update() {
      var acceleration = this.acceleration,
          velocity = this.velocity,
          position = this.position,
          debug = this.debug;
      //this.moveSenoidal();

      this.updateMotion();
    }
  }, {
    key: 'seek',
    value: function seek(id, done) {
      var segments = this.segments,
          targets = this.targets;

      var segment = this.getSegment(id);
      var target = this.getTarget(id);
      if (segment && target) {
        this.angle = segment.direction;
        if (this.isCollide(target)) {
          var segmentIndex = this.getSegmentIndex(id);
          var targetIndex = this.getTargetIndex(id);
          if (done) done(segmentIndex, targetIndex);
        } else {
          this.move(segment);
        }
      }
    }
  }, {
    key: 'calcSeparateForce',
    value: function calcSeparateForce(spaceship) {
      var velocity = this.velocity,
          canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug,
          maxForce = this.maxForce,
          position = this.position,
          forces = this.forces,
          fleeForce = this.fleeForce;

      var _vectorSubtraction = (0, _index.vectorSubtraction)(position, spaceship.position),
          magnitude = _vectorSubtraction.magnitude,
          direction = _vectorSubtraction.direction;

      var translateX = position.x;
      var translateY = position.y;
      var segment = new _Vector2.default({ ctx: ctx, canvas: canvas, color: 'white', magnitude: magnitude, direction: (0, _index.radians2deg)(direction), translateX: translateX, translateY: translateY, display: false });
      //segment.render();
      return segment;
    }
  }, {
    key: 'fleeSteering',
    value: function fleeSteering(id, result) {
      var segments = this.segments,
          targets = this.targets,
          velocity = this.velocity,
          canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug,
          maxForce = this.maxForce,
          position = this.position,
          forces = this.forces,
          fleeForce = this.fleeForce;

      var segment = this.getSegment(id);
      var target = this.getTarget(id);
      if (segment && target) {
        if (this.isCollide(target)) {
          var pos = position.clone({ magnitude: 1, direction: (0, _index.radians2deg)(this.angle) });
          var dist = (0, _index.vectorSubtraction)(pos, segment);
          var _desired = new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: fleeForce, direction: (0, _index.radians2deg)(dist.direction), color: 'yellow' });

          var _vectorSubtraction2 = (0, _index.vectorSubtraction)(_desired, velocity),
              magnitude = _vectorSubtraction2.magnitude,
              direction = _vectorSubtraction2.direction;

          var _steer = new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: magnitude, direction: (0, _index.radians2deg)(direction), color: 'blue' });
          _steer.limit(_desired.getMagnitude() * maxForce);
          if (result) result(_steer, _desired);
        }

        var desired = forces[1];
        var steer = forces[2];
        if (desired) desired.setMagnitude(steer.getMagnitude() - 1);
        if (steer) steer.setMagnitude(steer.getMagnitude() - 1);
        if (desired && steer) {
          var average = (desired.direction + steer.direction + forces[0].direction) / 3;
          this.angle = average;
          var x = Math.round(forces[0].getMagnitude() * Math.cos(average));
          var y = Math.round(forces[0].getMagnitude() * Math.sin(average));
          forces[0].setDirection(x, y);
        }
      }
    }
  }, {
    key: 'seekSteering',
    value: function seekSteering(id, result, done) {
      var segments = this.segments,
          targets = this.targets,
          velocity = this.velocity,
          canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug,
          maxForce = this.maxForce;

      var segment = this.getSegment(id);
      var target = this.getTarget(id);
      if (segment && target) {
        this.angle = segment.direction;
        if (this.isCollide(target)) {
          var segmentIndex = this.getSegmentIndex(id);
          var targetIndex = this.getTargetIndex(id);
          if (done) done(segmentIndex, targetIndex);
        } else {
          var desired = segment;

          var _vectorSubtraction3 = (0, _index.vectorSubtraction)(desired, velocity),
              magnitude = _vectorSubtraction3.magnitude,
              direction = _vectorSubtraction3.direction;

          var steer = new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: magnitude, direction: direction, color: 'green' });
          steer.limit(desired.getMagnitude() * maxForce);
          if (result) result(steer, desired);
        }
      }
    }
  }, {
    key: 'steering',
    value: function steering(id, done) {
      var segments = this.segments,
          targets = this.targets,
          velocity = this.velocity,
          canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug;

      var segment = this.getSegment(id);
      var target = this.getTarget(id);
      if (segment && target) {
        this.angle = segment.direction;
        if (this.isCollide(target)) {
          var segmentIndex = this.getSegmentIndex(id);
          var targetIndex = this.getTargetIndex(id);
          if (done) done(segmentIndex, targetIndex);
        } else {
          var desired = segment;

          var _vectorSubtraction4 = (0, _index.vectorSubtraction)(desired, velocity),
              magnitude = _vectorSubtraction4.magnitude,
              direction = _vectorSubtraction4.direction;

          var steer = new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: magnitude, direction: direction, display: true, color: 'green' });
          this.move(steer);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var debug = this.debug;

      this.update();
      if (debug) this.updateInfo();
      this.draw();
    }
  }]);
  return SpaceShip;
}(_Motion3.default);

exports.default = SpaceShip;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _TextBox = __webpack_require__(35);

var _TextBox2 = _interopRequireDefault(_TextBox);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _Grid = __webpack_require__(37);

var _Grid2 = _interopRequireDefault(_Grid);

var _Motion2 = __webpack_require__(36);

var _Motion3 = _interopRequireDefault(_Motion2);

var _index = __webpack_require__(9);

var physicsEngine = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Circle = function (_Motion) {
  (0, _inherits3.default)(Circle, _Motion);

  function Circle(_ref) {
    var ctx = _ref.ctx,
        _ref$speedUp = _ref.speedUp,
        speedUp = _ref$speedUp === undefined ? true : _ref$speedUp,
        _ref$targets = _ref.targets,
        targets = _ref$targets === undefined ? [] : _ref$targets,
        _ref$maxVelocity = _ref.maxVelocity,
        maxVelocity = _ref$maxVelocity === undefined ? 0 : _ref$maxVelocity,
        _ref$stroke = _ref.stroke,
        stroke = _ref$stroke === undefined ? false : _ref$stroke,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 20 : _ref$size,
        canvas = _ref.canvas,
        _ref$debug = _ref.debug,
        debug = _ref$debug === undefined ? false : _ref$debug,
        _ref$mass = _ref.mass,
        mass = _ref$mass === undefined ? 40 : _ref$mass,
        _ref$forces = _ref.forces,
        forces = _ref$forces === undefined ? [] : _ref$forces,
        _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y,
        _ref$angle = _ref.angle,
        angle = _ref$angle === undefined ? 0 : _ref$angle,
        _ref$velocity = _ref.velocity,
        velocity = _ref$velocity === undefined ? 0 : _ref$velocity,
        _ref$acceleration = _ref.acceleration,
        acceleration = _ref$acceleration === undefined ? 0 : _ref$acceleration,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? 'white' : _ref$color,
        _ref$translateX = _ref.translateX,
        translateX = _ref$translateX === undefined ? 0 : _ref$translateX,
        _ref$translateY = _ref.translateY,
        translateY = _ref$translateY === undefined ? 0 : _ref$translateY,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? physicsEngine.guid() : _ref$id,
        _ref$display = _ref.display,
        display = _ref$display === undefined ? true : _ref$display;
    (0, _classCallCheck3.default)(this, Circle);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Circle.__proto__ || (0, _getPrototypeOf2.default)(Circle)).call(this, { ctx: ctx, canvas: canvas, speedUp: speedUp, mass: mass, x: x, y: y, maxVelocity: maxVelocity, targets: targets, angle: angle }));

    _this.size = size;
    _this.translateX = translateX;
    _this.translateY = translateY;
    _this.stroke = stroke;
    _this.color = color;
    _this.id = id;
    _this.display = display;
    _this.debug = debug;
    _this.info = new _TextBox2.default({ ctx: ctx, x: x, y: y, id: 'info', data: 'x: ' + _this.position.x + ', y: ' + _this.position.y });
    return _this;
  }

  (0, _createClass3.default)(Circle, [{
    key: 'update',
    value: function update() {
      var debug = this.debug,
          info = this.info,
          position = this.position;

      info.x = position.x;
      info.y = -position.y + 30;
      if (debug) {
        //info.render();
        position.display = true;
        position.render();
      }
      this.updateMotion();
    }
  }, {
    key: 'draw',
    value: function draw() {
      var ctx = this.ctx,
          canvas = this.canvas,
          color = this.color,
          size = this.size,
          position = this.position,
          stroke = this.stroke,
          angle = this.angle,
          translateX = this.translateX,
          translateY = this.translateY;
      var x = position.x,
          y = position.y;

      ctx.save();
      ctx.beginPath();
      ctx.scale(1, -1);
      //ctx.translate(translateX, translateY);
      //ctx.rotate(angle);
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.arc(x, y, size, 0, 360 * Math.PI / 180);
      if (stroke) {
        ctx.stroke();
      } else {
        ctx.fill();
      }
      ctx.closePath();
      ctx.restore();
    }
  }, {
    key: 'render',
    value: function render() {
      var size = this.size,
          ctx = this.ctx,
          angle = this.angle,
          color = this.color,
          debug = this.debug;

      this.update();
      this.draw();
    }
  }]);
  return Circle;
}(_Motion3.default);

exports.default = Circle;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var createDesc = __webpack_require__(25);
module.exports = __webpack_require__(17) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(31);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(64);
var defined = __webpack_require__(39);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(136), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(63);
var enumBugKeys = __webpack_require__(46);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(39);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(88)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(60)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(13).f;
var has = __webpack_require__(19);
var TAG = __webpack_require__(8)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextBox = function () {
  function TextBox(_ref) {
    var ctx = _ref.ctx,
        x = _ref.x,
        y = _ref.y,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? (0, _index.guid)() : _ref$id,
        _ref$data = _ref.data,
        data = _ref$data === undefined ? '' : _ref$data,
        _ref$font = _ref.font,
        font = _ref$font === undefined ? '12px arial' : _ref$font,
        _ref$display = _ref.display,
        display = _ref$display === undefined ? true : _ref$display;
    (0, _classCallCheck3.default)(this, TextBox);

    this.ctx = ctx;
    this.font = font;
    this.x = x;
    this.y = y;
    this.id = id;
    this.data = data;
    this.display = display;
  }

  (0, _createClass3.default)(TextBox, [{
    key: 'render',
    value: function render() {
      var ctx = this.ctx,
          font = this.font,
          x = this.x,
          y = this.y,
          data = this.data,
          display = this.display;

      if (display) {
        ctx.beginPath();
        ctx.save();
        ctx.font = font;
        var measure = ctx.measureText(data);
        var txtHeight = parseFloat(ctx.font) * 2;
        var padding = 5;
        ctx.fillStyle = 'black';
        ctx.fillRect(x + padding, y - (txtHeight - txtHeight / 4 - 1), measure.width + padding, txtHeight);
        ctx.fillStyle = 'white';
        ctx.fillText(data, x + padding, y);
        ctx.restore();
        ctx.closePath();
      }
    }
  }]);
  return TextBox;
}();

exports.default = TextBox;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _assign = __webpack_require__(53);

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = __webpack_require__(23);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Motion = function () {
  function Motion(_ref) {
    var ctx = _ref.ctx,
        _ref$speedUp = _ref.speedUp,
        speedUp = _ref$speedUp === undefined ? true : _ref$speedUp,
        _ref$segments = _ref.segments,
        segments = _ref$segments === undefined ? [] : _ref$segments,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? (0, _index.guid)() : _ref$id,
        maxForce = _ref.maxForce,
        _ref$targets = _ref.targets,
        targets = _ref$targets === undefined ? [] : _ref$targets,
        _ref$maxVelocity = _ref.maxVelocity,
        maxVelocity = _ref$maxVelocity === undefined ? 5 : _ref$maxVelocity,
        canvas = _ref.canvas,
        _ref$debug = _ref.debug,
        debug = _ref$debug === undefined ? false : _ref$debug,
        _ref$mass = _ref.mass,
        mass = _ref$mass === undefined ? 40 : _ref$mass,
        _ref$forces = _ref.forces,
        forces = _ref$forces === undefined ? [] : _ref$forces,
        _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y,
        _ref$angle = _ref.angle,
        angle = _ref$angle === undefined ? 0 : _ref$angle,
        _ref$velocity = _ref.velocity,
        velocity = _ref$velocity === undefined ? 0 : _ref$velocity,
        _ref$acceleration = _ref.acceleration,
        acceleration = _ref$acceleration === undefined ? 0 : _ref$acceleration;
    (0, _classCallCheck3.default)(this, Motion);

    this.speedUp = speedUp;
    this.maxVelocity = maxVelocity;
    this.maxForce = maxForce;
    this.ctx = ctx;
    this.angle = angle * Math.PI / 180;
    this.originalAngle = angle;
    this.debug = debug;
    this.segments = [];
    this.targets = targets;
    this.id = id;
    this.mass = mass;
    //console.log('x: ', x, ' y: ', y)
    var mag = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    //console.log('maginutude: ', mag)
    var direction = (0, _index.coordinatesToDeg)(x, y);
    //console.log('direction: ', direction)
    this.position = new _Vector2.default({
      ctx: ctx,
      magnitude: mag,
      direction: direction,
      canvas: canvas,
      id: 'position',
      color: 'olive',
      display: debug
    });
    this.acceleration = new _Vector2.default({
      ctx: ctx,
      magnitude: acceleration,
      direction: this.originalAngle,
      canvas: canvas,
      id: 'acceleration',
      color: 'green',
      translateX: this.position.x,
      translateY: this.position.y,
      display: false
    });
    this.velocity = new _Vector2.default({
      ctx: ctx,
      magnitude: velocity,
      direction: angle - 90,
      canvas: canvas,
      id: 'velocity',
      color: 'blue',
      translateX: this.position.x,
      translateY: this.position.y,
      display: false
    });
    this.forces = forces;
    this.canvas = canvas;
    //console.log(this.targets)
    this.generateSegments();
    //console.log(this.segments)
  }

  (0, _createClass3.default)(Motion, [{
    key: 'setAngle',
    value: function setAngle(angle) {
      this.angle = angle * Math.PI / 180;
    }
  }, {
    key: 'getTargetIndex',
    value: function getTargetIndex(id) {
      var result = void 0;
      this.targets.filter(function (item, index) {
        return item.id === id ? result = index : null;
      });
      return result;
    }
  }, {
    key: 'getSegmentIndex',
    value: function getSegmentIndex(id) {
      var result = void 0;
      this.segments.filter(function (item, index) {
        return item.id === id ? result = index : null;
      });
      return result;
    }
  }, {
    key: 'getTarget',
    value: function getTarget(id) {
      var targets = this.targets;

      return targets.find(function (item) {
        return item.id === id;
      });
    }
  }, {
    key: 'getSegment',
    value: function getSegment(id) {
      var segments = this.segments;

      return segments.find(function (item) {
        return item.id === id;
      });
    }
  }, {
    key: 'isCollide',
    value: function isCollide(target) {
      var targets = this.targets,
          size = this.size,
          segments = this.segments;

      var circle = targets.find(function (item) {
        return item.id === target.id;
      });
      var segment = segments.find(function (item) {
        return item.id === target.id;
      });
      if (circle && segment) {
        return segment.magnitude < target.size + size;
      }
      return false;
    }
  }, {
    key: 'applayForces',
    value: function applayForces() {
      var _forces = this.forces,
          forces = _forces === undefined ? [] : _forces,
          mass = this.mass,
          acceleration = this.acceleration,
          maxVelocity = this.maxVelocity,
          speedUp = this.speedUp,
          position = this.position,
          velocity = this.velocity,
          canvas = this.canvas,
          debug = this.debug;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(forces), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var force = _step.value;

          force.translateX = position.x;
          force.translateY = position.y;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(forces), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _force = _step2.value;

          this.move(_force);
          if (debug) _force.render();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'updateMotion',
    value: function updateMotion() {
      var targets = this.targets,
          segments = this.segments,
          velocity = this.velocity,
          debug = this.debug,
          position = this.position,
          forces = this.forces;

      if (forces.length) {
        this.applayForces();
      }
      position.display = debug;
      for (var i = 0; i < targets.length; i++) {
        var target = targets[i];
        var segment = segments[i];
        var calc = this.calculateSegment(target);
        segment.translateX = calc.translateX;
        segment.translateY = calc.translateY;
        segment.direction = calc.direction;
        segment.setMagnitude(calc.magnitude);
        if (debug) {
          segment.display = true;
          segment.render();
        }
      }
    }
  }, {
    key: 'addTarget',
    value: function addTarget(target) {
      this.joinCircles(target);
      this.targets.push(target);
    }
  }, {
    key: 'joinCircles',
    value: function joinCircles(target) {
      var spot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'white';
      var ctx = this.ctx,
          position = this.position,
          canvas = this.canvas,
          debug = this.debug;

      var segment = this.calculateSegment(target, spot);
      var link = new _Vector2.default((0, _assign2.default)({}, segment, { ctx: ctx, display: debug, color: color, canvas: canvas, id: target.id }));
      this.segments.push(link);
    }
  }, {
    key: 'calculateSegment',
    value: function calculateSegment(target) {
      var spot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var ctx = this.ctx;

      var position = void 0;
      if (spot) {
        //console.log('spot: ', spot)
        position = spot;
      } else {
        position = this.position;
      }

      var _vectorSubtraction = (0, _index.vectorSubtraction)(target.position, position),
          x = _vectorSubtraction.x,
          y = _vectorSubtraction.y,
          magnitude = _vectorSubtraction.magnitude,
          direction = _vectorSubtraction.direction;

      var translateX = position.x;
      var translateY = position.y;
      return { direction: direction, magnitude: magnitude, x: x, y: y, translateX: translateX, translateY: translateY };
    }
  }, {
    key: 'generateSegments',
    value: function generateSegments() {
      var targets = this.targets;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)(targets), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var target = _step3.value;

          this.joinCircles(target);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: 'move',
    value: function move(force) {
      var acceleration = this.acceleration,
          velocity = this.velocity,
          position = this.position,
          mass = this.mass,
          speedUp = this.speedUp,
          maxVelocity = this.maxVelocity;

      var computed = (0, _index.computeForce)(force, mass);
      if (speedUp) {
        //console.log(velocity.getMagnitude(), ' ', maxVelocity);
        if (velocity.getMagnitude() > maxVelocity) {
          position.add(computed);
        } else {
          acceleration.add(computed);
          velocity.add(acceleration);
          position.add(velocity);
        }
      } else {
        position.add(computed);
      }
    }
  }]);
  return Motion;
}();

exports.default = Motion;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function () {
  function Grid(_ref) {
    var ctx = _ref.ctx,
        x = _ref.x,
        y = _ref.y,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? 'white' : _ref$color,
        _ref$display = _ref.display,
        display = _ref$display === undefined ? true : _ref$display,
        width = _ref.width,
        height = _ref.height,
        _ref$padding = _ref.padding,
        padding = _ref$padding === undefined ? 10 : _ref$padding;
    (0, _classCallCheck3.default)(this, Grid);

    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.rows = Math.round(width / padding);
    this.columns = Math.round(height / padding);
    this.display = display;
    this.color = color;
  }

  (0, _createClass3.default)(Grid, [{
    key: 'drawRows',
    value: function drawRows() {
      var ctx = this.ctx,
          rows = this.rows,
          columns = this.columns,
          width = this.width,
          height = this.height,
          x = this.x,
          y = this.y,
          padding = this.padding,
          color = this.color;

      for (var row = 0; row < rows; row++) {
        ctx.rect(row * padding, 0, padding, height);
        ctx.stroke();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var ctx = this.ctx,
          rows = this.rows,
          columns = this.columns,
          width = this.width,
          height = this.height,
          x = this.x,
          y = this.y,
          padding = this.padding,
          color = this.color;

      ctx.save();
      ctx.translate(x, y);
      ctx.strokeStyle = color;

      for (var row = 0; row < rows; row++) {
        ctx.beginPath();
        ctx.rect(row * padding, 0, padding, height);
        ctx.stroke();
        ctx.closePath();
      }

      for (var column = 0; column < columns; column++) {
        ctx.beginPath();
        ctx.rect(0, column * padding, width, padding);
        ctx.stroke();
        ctx.closePath();
      }

      ctx.restore();
    }
  }]);
  return Grid;
}();

exports.default = Grid;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(16);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(16);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(11);
var dPs = __webpack_require__(90);
var enumBugKeys = __webpack_require__(46);
var IE_PROTO = __webpack_require__(44)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(40)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(65).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(38);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(45)('keys');
var uid = __webpack_require__(32);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(24) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 46 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
var global = __webpack_require__(3);
var hide = __webpack_require__(18);
var Iterators = __webpack_require__(26);
var TO_STRING_TAG = __webpack_require__(8)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(67);
var ITERATOR = __webpack_require__(8)('iterator');
var Iterators = __webpack_require__(26);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(31);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(8);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(24);
var wksExt = __webpack_require__(50);
var defineProperty = __webpack_require__(13).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(133), __esModule: true };

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Explotion = function () {
  function Explotion(_ref) {
    var ctx = _ref.ctx,
        x = _ref.x,
        y = _ref.y,
        _ref$r = _ref.r,
        r = _ref$r === undefined ? 5 : _ref$r,
        _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? 25 : _ref$duration,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? { r: '255', g: '255', b: '255' } : _ref$color;
    (0, _classCallCheck3.default)(this, Explotion);

    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.duration = duration;
    this.r = r;
    this.done = false;
    this.light = 1;
    this.color = color;
  }

  (0, _createClass3.default)(Explotion, [{
    key: 'render',
    value: function render() {
      var ctx = this.ctx,
          x = this.x,
          y = this.y,
          duration = this.duration,
          r = this.r,
          done = this.done,
          color = this.color,
          light = this.light;

      if (duration <= 0) this.done = true;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + light + ')';
      ctx.fill();
      ctx.closePath();
      this.r += 0.5 + Math.random();
      this.light -= 0.08;
      this.duration -= 0.5;
    }
  }]);
  return Explotion;
}();

exports.default = Explotion;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BarChart = function () {
  function BarChart(_ref) {
    var ctx = _ref.ctx,
        x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height,
        _ref$angle = _ref.angle,
        angle = _ref$angle === undefined ? 90 : _ref$angle,
        _ref$percentage = _ref.percentage,
        percentage = _ref$percentage === undefined ? 1 : _ref$percentage,
        _ref$display = _ref.display,
        display = _ref$display === undefined ? true : _ref$display,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? 'rgb(233, 30, 99)' : _ref$color,
        _ref$sense = _ref.sense,
        sense = _ref$sense === undefined ? 'horizontal' : _ref$sense;
    (0, _classCallCheck3.default)(this, BarChart);

    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.display = display;
    this.color = color;
    this.percentage = percentage;
    this.angle = angle;
  }

  (0, _createClass3.default)(BarChart, [{
    key: 'drawBar',
    value: function drawBar() {
      var angle = this.angle,
          horizontal = this.horizontal,
          color = this.color,
          style = this.style,
          width = this.width,
          height = this.height,
          x = this.x,
          y = this.y,
          ctx = this.ctx,
          percentage = this.percentage;

      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.rect(x, y, width, height);
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();

      ctx.fillStyle = color;
      ctx.rect(x, y, width * percentage, height);
      ctx.fill();
      ctx.closePath();

      ctx.restore();
    }
  }, {
    key: 'render',
    value: function render() {
      var ctx = this.ctx,
          x = this.x,
          y = this.y,
          width = this.width,
          height = this.height,
          display = this.display,
          style = this.style,
          color = this.color;

      if (display) {
        this.drawBar();
      }
    }
  }]);
  return BarChart;
}();

exports.default = BarChart;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(84);


/***/ }),
/* 57 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(86);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 59 */
/***/ (function(module, exports) {



/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(24);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(62);
var hide = __webpack_require__(18);
var Iterators = __webpack_require__(26);
var $iterCreate = __webpack_require__(89);
var setToStringTag = __webpack_require__(33);
var getPrototypeOf = __webpack_require__(66);
var ITERATOR = __webpack_require__(8)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(17) && !__webpack_require__(21)(function () {
  return Object.defineProperty(__webpack_require__(40)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(19);
var toIObject = __webpack_require__(22);
var arrayIndexOf = __webpack_require__(91)(false);
var IE_PROTO = __webpack_require__(44)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(28);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(19);
var toObject = __webpack_require__(29);
var IE_PROTO = __webpack_require__(44)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(28);
var TAG = __webpack_require__(8)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(11);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(26);
var ITERATOR = __webpack_require__(8)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(11);
var aFunction = __webpack_require__(31);
var SPECIES = __webpack_require__(8)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(20);
var invoke = __webpack_require__(99);
var html = __webpack_require__(65);
var cel = __webpack_require__(40);
var global = __webpack_require__(3);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(28)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var isObject = __webpack_require__(16);
var newPromiseCapability = __webpack_require__(49);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(8)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(106);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(10);
var core = __webpack_require__(2);
var fails = __webpack_require__(21);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(115);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(117);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(63);
var hiddenKeys = __webpack_require__(46).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(34);
var createDesc = __webpack_require__(25);
var toIObject = __webpack_require__(22);
var toPrimitive = __webpack_require__(41);
var has = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(61);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(17) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(149);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _TextBox = __webpack_require__(35);

var _TextBox2 = _interopRequireDefault(_TextBox);

var _Explotion = __webpack_require__(54);

var _Explotion2 = _interopRequireDefault(_Explotion);

var _Motion = __webpack_require__(36);

var _Motion2 = _interopRequireDefault(_Motion);

var _BarChart = __webpack_require__(55);

var _BarChart2 = _interopRequireDefault(_BarChart);

var _Grid = __webpack_require__(37);

var _Grid2 = _interopRequireDefault(_Grid);

var _Circle = __webpack_require__(15);

var _Circle2 = _interopRequireDefault(_Circle);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _SpaceShip2 = __webpack_require__(14);

var _SpaceShip3 = _interopRequireDefault(_SpaceShip2);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Explorer = function (_SpaceShip) {
  (0, _inherits3.default)(Explorer, _SpaceShip);

  function Explorer(_ref) {
    var ctx = _ref.ctx,
        _ref$speedUp = _ref.speedUp,
        speedUp = _ref$speedUp === undefined ? true : _ref$speedUp,
        _ref$hunters = _ref.hunters,
        hunters = _ref$hunters === undefined ? [] : _ref$hunters,
        _ref$stroke = _ref.stroke,
        stroke = _ref$stroke === undefined ? true : _ref$stroke,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 20 : _ref$size,
        _ref$maxVelocity = _ref.maxVelocity,
        maxVelocity = _ref$maxVelocity === undefined ? 5 : _ref$maxVelocity,
        _ref$maxForce = _ref.maxForce,
        maxForce = _ref$maxForce === undefined ? 0.5 : _ref$maxForce,
        _ref$targets = _ref.targets,
        targets = _ref$targets === undefined ? [] : _ref$targets,
        _ref$width = _ref.width,
        width = _ref$width === undefined ? 20 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === undefined ? 20 : _ref$height,
        canvas = _ref.canvas,
        _ref$debug = _ref.debug,
        debug = _ref$debug === undefined ? false : _ref$debug,
        _ref$mass = _ref.mass,
        mass = _ref$mass === undefined ? 40 : _ref$mass,
        _ref$forces = _ref.forces,
        forces = _ref$forces === undefined ? [] : _ref$forces,
        _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y,
        _ref$angle = _ref.angle,
        angle = _ref$angle === undefined ? 0 : _ref$angle,
        _ref$velocity = _ref.velocity,
        velocity = _ref$velocity === undefined ? 0 : _ref$velocity,
        _ref$acceleration = _ref.acceleration,
        acceleration = _ref$acceleration === undefined ? 0 : _ref$acceleration,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? 'white' : _ref$color,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? (0, _index.guid)() : _ref$id,
        _ref$display = _ref.display,
        display = _ref$display === undefined ? true : _ref$display;
    (0, _classCallCheck3.default)(this, Explorer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Explorer.__proto__ || (0, _getPrototypeOf2.default)(Explorer)).call(this, { ctx: ctx, speedUp: speedUp, stroke: stroke, size: size, maxVelocity: maxVelocity, maxForce: maxForce, targets: targets, width: width, height: height, canvas: canvas, debug: debug, mass: mass, forces: forces, x: x, y: y, angle: angle, velocity: velocity, acceleration: acceleration, color: color, id: id, display: display }));

    var position = _this.position;

    var magnitude = size + 190;
    var direction = _this.angle;
    _this.virtualView = new _Vector2.default({ ctx: ctx, color: 'white', canvas: canvas, magnitude: magnitude, direction: direction, translateX: position.x, translateY: position.y });
    var sum = (0, _index.vectorAddition)(position, _this.virtualView);
    _this.rangeView = new _Circle2.default({ ctx: ctx, angle: _this.virtualView.direction, debug: debug, color: 'orange', stroke: true, size: size * 20, canvas: canvas, x: sum.x, y: sum.y });
    _this.hunters = hunters;
    return _this;
  }

  (0, _createClass3.default)(Explorer, [{
    key: 'runAway',
    value: function runAway(hunter) {
      var ctx = this.ctx,
          canvas = this.canvas,
          rangeView = this.rangeView,
          maxForce = this.maxForce,
          id = this.id,
          position = this.position;

      this.forces[1] = null;
      if (!!this.forces[1]) return;

      var _vectorSubtraction = (0, _index.vectorSubtraction)(hunter.position, this.position),
          magnitude = _vectorSubtraction.magnitude;

      var r = this.forces[0];
      var h = hunter.getSegment(id);
      var dot = (0, _index.vectorDotProduct)(h, r);
      if (isNaN(dot)) return;
      var isOpposite = (0, _index.radians2deg)(dot) >= 90 && (0, _index.radians2deg)(dot) <= 270;
      //console.log('isOpposite: ', isOpposite);
      var oppositeSide = isOpposite ? (0, _index.radians2deg)(this.angle) + 180 : (0, _index.radians2deg)(this.angle);
      var escape = new _Vector2.default({ color: 'green', ctx: ctx, canvas: canvas, direction: oppositeSide, magnitude: magnitude });
      this.velocity.setDirection(escape.x, escape.y);
      var desired = escape;
      var calc = (0, _index.vectorSubtraction)(desired, this.velocity);
      var steer = new _Vector2.default((0, _defineProperty3.default)({ ctx: ctx, color: 'blue', canvas: canvas, magnitude: calc.magnitude, direction: calc.direction }, 'color', 'green'));
      steer.limit(escape.getMagnitude() * 0.5);
      steer.run = true;

      escape.run = true;
      this.forces[1] = escape;
      this.angle = escape.direction;
      this.forces[0].setDirection(escape.x, escape.y);

      this.forces[2] = steer;
    }
  }, {
    key: 'setSafeMove',
    value: function setSafeMove() {
      var less = 15;
      this.forces = this.forces.map(function (force, index) {
        if (force.run) {
          force.setMagnitude(force.getMagnitude() - less);
        }
        return force;
      }).filter(function (force) {
        return force.getMagnitude() > less;
      });
    }
  }, {
    key: 'updateMotion',
    value: function updateMotion() {
      var angle = this.angle,
          targets = this.targets,
          segments = this.segments,
          hunters = this.hunters,
          rangeView = this.rangeView,
          size = this.size,
          debug = this.debug,
          virtualView = this.virtualView,
          position = this.position,
          forces = this.forces;

      this.moveSenoidal();
      var px = Math.round(virtualView.magnitude * Math.cos(angle));
      var py = Math.round(virtualView.magnitude * Math.sin(angle));
      virtualView.setDirection(px, py);
      if (forces.length) this.applayForces();
      position.display = debug;
      for (var i = 0; i < targets.length; i++) {
        var target = targets[i];
        var segment = segments[i];
        var calc = this.calculateSegment(target);
        segment.translateX = calc.translateX;
        segment.translateY = calc.translateY;
        segment.direction = calc.direction;
        segment.setMagnitude(calc.magnitude);
        if (debug) {
          segment.display = true;
          segment.render();
        }
      }

      for (var _i = 0; _i < hunters.length; _i++) {
        var hunter = hunters[_i];
        var _segment = segments[_i];
        var _calc = rangeView.calculateSegment(hunter);
        _segment.translateX = _calc.translateX;
        _segment.translateY = _calc.translateY;
        _segment.direction = _calc.direction;

        _segment.setMagnitude(_calc.magnitude);
        if (debug) {
          _segment.display = true;
          _segment.render();
        }
      }
      virtualView.translateX = position.x;
      virtualView.translateY = position.y;

      var _vectorAddition = (0, _index.vectorAddition)(position, virtualView),
          x = _vectorAddition.x,
          y = _vectorAddition.y;

      rangeView.position.x = x;
      rangeView.position.y = y;
    }
  }, {
    key: 'addHunter',
    value: function addHunter(hunter) {
      this.joinCircles(hunter, this.rangeView.position, 'purple');
      this.hunters.push(hunter);
    }
  }, {
    key: 'shouldRunFrom',
    value: function shouldRunFrom(hunter) {
      var hunters = this.hunters,
          rangeView = this.rangeView,
          segments = this.segments;

      var circle = hunters.find(function (item) {
        return item.id === hunter.id;
      });
      var segment = segments.find(function (item) {
        return item.id === hunter.id;
      });
      if (circle && segment) {
        var isCollide = segment.getMagnitude() < hunter.size + rangeView.size;
        return isCollide;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var debug = this.debug;

      this.update();
      if (debug) {
        this.virtualView.render();
        this.rangeView.render();
        this.updateInfo();
      }
      this.draw();
    }
  }]);
  return Explorer;
}(_SpaceShip3.default);

exports.default = Explorer;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(83);
module.exports = __webpack_require__(156);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(58);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = __webpack_require__(75);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _index = __webpack_require__(112);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(138);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(139);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(140);

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(141);

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(142);

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__(143);

var _index14 = _interopRequireDefault(_index13);

var _index15 = __webpack_require__(144);

var _index16 = _interopRequireDefault(_index15);

var _index17 = __webpack_require__(148);

var _index18 = _interopRequireDefault(_index17);

var _index19 = __webpack_require__(151);

var _index20 = _interopRequireDefault(_index19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = function () {
  function Router(routes) {
    (0, _classCallCheck3.default)(this, Router);

    this.routes = [].concat((0, _toConsumableArray3.default)(routes));
    this.currentPage = '';
    window.addEventListener("load", this.handleRoute.bind(this));
    window.addEventListener('hashchange', this.handleRoute.bind(this));
  }

  (0, _createClass3.default)(Router, [{
    key: 'handleRoute',
    value: function handleRoute(e) {
      var App = document.getElementById('App');
      var route = this.routes.find(function (element) {
        return window.location.hash === element.page;
      });
      if (route) {
        this.currentPage = route.view;
        this.fetchView(route);
      } else {
        App.innerHTML = '<div>NOT FOUND</div>';
      }
    }
  }, {
    key: 'fetchView',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(route) {
        var App, response;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                App = document.getElementById('App');
                _context.prev = 1;
                _context.next = 4;
                return fetch('/pages/' + this.currentPage);

              case 4:
                response = _context.sent;

                response.text().then(function (text) {
                  //console.log(text)
                  App.innerHTML = text;
                  route.init();
                });
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](1);

                console.log(_context.t0);

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8]]);
      }));

      function fetchView(_x) {
        return _ref.apply(this, arguments);
      }

      return fetchView;
    }()
  }]);
  return Router;
}();

var pages = new Router([{
  page: '',
  view: 'landing.html',
  init: function init() {}
}, {
  page: '#example-1',
  view: 'example-1.html',
  init: function init() {
    (0, _index2.default)();
  }
}, {
  page: '#example-2',
  view: 'example-2.html',
  init: function init() {
    (0, _index4.default)();
  }
}, {
  page: '#example-3',
  view: 'example-3.html',
  init: function init() {
    (0, _index6.default)();
  }
}, {
  page: '#example-4',
  view: 'example-4.html',
  init: function init() {
    (0, _index8.default)();
  }
}, {
  page: '#example-5',
  view: 'example-5.html',
  init: function init() {
    (0, _index10.default)();
  }
}, {
  page: '#example-6',
  view: 'example-6.html',
  init: function init() {
    (0, _index12.default)();
  }
}, {
  page: '#example-7',
  view: 'example-7.html',
  init: function init() {
    (0, _index14.default)();
  }
}, {
  page: '#example-8',
  view: 'example-8.html',
  init: function init() {
    (0, _index16.default)();
  }
}, {
  page: '#example-9',
  view: 'example-9.html',
  init: function init() {
    (0, _index18.default)();
  }
}, {
  page: '#example-10',
  view: 'example-10.html',
  init: function init() {
    (0, _index20.default)();
  }
}]);

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(85);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)))

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)))

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
__webpack_require__(30);
__webpack_require__(47);
__webpack_require__(96);
__webpack_require__(104);
__webpack_require__(105);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38);
var defined = __webpack_require__(39);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(42);
var descriptor = __webpack_require__(25);
var setToStringTag = __webpack_require__(33);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(18)(IteratorPrototype, __webpack_require__(8)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var anObject = __webpack_require__(11);
var getKeys = __webpack_require__(27);

module.exports = __webpack_require__(17) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(22);
var toLength = __webpack_require__(43);
var toAbsoluteIndex = __webpack_require__(92);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(94);
var step = __webpack_require__(95);
var Iterators = __webpack_require__(26);
var toIObject = __webpack_require__(22);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(60)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(24);
var global = __webpack_require__(3);
var ctx = __webpack_require__(20);
var classof = __webpack_require__(67);
var $export = __webpack_require__(10);
var isObject = __webpack_require__(16);
var aFunction = __webpack_require__(31);
var anInstance = __webpack_require__(97);
var forOf = __webpack_require__(98);
var speciesConstructor = __webpack_require__(70);
var task = __webpack_require__(71).set;
var microtask = __webpack_require__(100)();
var newPromiseCapabilityModule = __webpack_require__(49);
var perform = __webpack_require__(72);
var userAgent = __webpack_require__(101);
var promiseResolve = __webpack_require__(73);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(8)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(102)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(33)($Promise, PROMISE);
__webpack_require__(103)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(74)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(20);
var call = __webpack_require__(68);
var isArrayIter = __webpack_require__(69);
var anObject = __webpack_require__(11);
var toLength = __webpack_require__(43);
var getIterFn = __webpack_require__(48);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var macrotask = __webpack_require__(71).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(28)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(18);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var core = __webpack_require__(2);
var dP = __webpack_require__(13);
var DESCRIPTORS = __webpack_require__(17);
var SPECIES = __webpack_require__(8)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(10);
var core = __webpack_require__(2);
var global = __webpack_require__(3);
var speciesConstructor = __webpack_require__(70);
var promiseResolve = __webpack_require__(73);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(10);
var newPromiseCapability = __webpack_require__(49);
var perform = __webpack_require__(72);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
__webpack_require__(108);
module.exports = __webpack_require__(2).Array.from;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(20);
var $export = __webpack_require__(10);
var toObject = __webpack_require__(29);
var call = __webpack_require__(68);
var isArrayIter = __webpack_require__(69);
var toLength = __webpack_require__(43);
var createProperty = __webpack_require__(109);
var getIterFn = __webpack_require__(48);

$export($export.S + $export.F * !__webpack_require__(74)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(13);
var createDesc = __webpack_require__(25);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(17), 'Object', { defineProperty: __webpack_require__(13).f });


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = function () {
  var intViewportWidth = window.innerWidth;
  var intViewportHeight = window.innerHeight;
  var canvas = document.getElementById('lienzo');
  var canvasHeight = canvas.height = intViewportHeight;
  var canvasWidth = canvas.width = intViewportWidth;
  var ctx = canvas.getContext('2d');
  var space = new Universe({ canvas: canvas, ctx: ctx });
  space.preload();
  space.render();
};

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _SpaceShip = __webpack_require__(14);

var _SpaceShip2 = _interopRequireDefault(_SpaceShip);

var _Timelaps2 = __webpack_require__(12);

var _Timelaps3 = _interopRequireDefault(_Timelaps2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Universe = function (_Timelaps) {
  (0, _inherits3.default)(Universe, _Timelaps);

  function Universe(_ref) {
    var canvas = _ref.canvas,
        ctx = _ref.ctx;
    (0, _classCallCheck3.default)(this, Universe);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Universe.__proto__ || (0, _getPrototypeOf2.default)(Universe)).call(this, { canvas: canvas, ctx: ctx }));

    _this.play(_this.render.bind(_this));
    _this.direction = 0;
    return _this;
  }

  (0, _createClass3.default)(Universe, [{
    key: 'render',
    value: function render() {
      var canvas = this.canvas,
          ctx = this.ctx;

      this.then = this.now - this.delta % this.interval;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.beginPath();
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      ctx.translate(x, y);
      //ctx.scale(1, -1);
      this.drawCroos();
      this.update();
      ctx.closePath();
      ctx.restore();
    }
  }, {
    key: 'drawCroos',
    value: function drawCroos() {
      var canvas = this.canvas,
          ctx = this.ctx;

      ctx.strokeStyle = 'red';
      ctx.moveTo(0, -(canvas.height / 2));
      ctx.lineTo(0, canvas.height / 2);
      ctx.moveTo(-(canvas.width / 2), 0);
      ctx.lineTo(canvas.width / 2, 0);
      ctx.stroke();
    }
  }, {
    key: 'update',
    value: function update() {
      var canvas = this.canvas,
          ctx = this.ctx,
          spaceship = this.spaceship;

      spaceship.angle = Math.sin(this.direction);
      spaceship.acceleration.direction = spaceship.angle;
      spaceship.velocity.direction = spaceship.angle - 90;
      spaceship.render();
      this.direction += 0.08;
    }
  }, {
    key: 'preload',
    value: function preload() {
      var canvas = this.canvas,
          ctx = this.ctx;

      this.spaceship = new _SpaceShip2.default({ canvas: canvas, ctx: ctx, x: 0, y: 0, angle: 0, debug: true });
    }
  }]);
  return Universe;
}(_Timelaps3.default);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(114);
module.exports = __webpack_require__(2).Object.getPrototypeOf;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(29);
var $getPrototypeOf = __webpack_require__(66);

__webpack_require__(77)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
__webpack_require__(47);
module.exports = __webpack_require__(50).f('iterator');


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(118), __esModule: true };

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(119);
__webpack_require__(59);
__webpack_require__(124);
__webpack_require__(125);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3);
var has = __webpack_require__(19);
var DESCRIPTORS = __webpack_require__(17);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(62);
var META = __webpack_require__(120).KEY;
var $fails = __webpack_require__(21);
var shared = __webpack_require__(45);
var setToStringTag = __webpack_require__(33);
var uid = __webpack_require__(32);
var wks = __webpack_require__(8);
var wksExt = __webpack_require__(50);
var wksDefine = __webpack_require__(51);
var enumKeys = __webpack_require__(121);
var isArray = __webpack_require__(122);
var anObject = __webpack_require__(11);
var isObject = __webpack_require__(16);
var toIObject = __webpack_require__(22);
var toPrimitive = __webpack_require__(41);
var createDesc = __webpack_require__(25);
var _create = __webpack_require__(42);
var gOPNExt = __webpack_require__(123);
var $GOPD = __webpack_require__(80);
var $DP = __webpack_require__(13);
var $keys = __webpack_require__(27);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(79).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(34).f = $propertyIsEnumerable;
  __webpack_require__(52).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(24)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(32)('meta');
var isObject = __webpack_require__(16);
var has = __webpack_require__(19);
var setDesc = __webpack_require__(13).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(21)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(27);
var gOPS = __webpack_require__(52);
var pIE = __webpack_require__(34);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(28);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(22);
var gOPN = __webpack_require__(79).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51)('asyncIterator');


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51)('observable');


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(127), __esModule: true };

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(128);
module.exports = __webpack_require__(2).Object.setPrototypeOf;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(10);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(129).set });


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(16);
var anObject = __webpack_require__(11);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(20)(Function.call, __webpack_require__(80).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(131), __esModule: true };

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(132);
var $Object = __webpack_require__(2).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(42) });


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(10);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(135) });


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(27);
var gOPS = __webpack_require__(52);
var pIE = __webpack_require__(34);
var toObject = __webpack_require__(29);
var IObject = __webpack_require__(64);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(21)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(30);
module.exports = __webpack_require__(137);


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var get = __webpack_require__(48);
module.exports = __webpack_require__(2).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = function () {
  var intViewportWidth = window.innerWidth;
  var intViewportHeight = window.innerHeight;
  var canvas = document.getElementById('lienzo');
  var canvasHeight = canvas.height = intViewportHeight;
  var canvasWidth = canvas.width = intViewportWidth;
  var ctx = canvas.getContext('2d');
  var space = new Universe({ canvas: canvas, ctx: ctx });
  space.preload();
  space.render();
};

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _SpaceShip = __webpack_require__(14);

var _SpaceShip2 = _interopRequireDefault(_SpaceShip);

var _Timelaps2 = __webpack_require__(12);

var _Timelaps3 = _interopRequireDefault(_Timelaps2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Universe = function (_Timelaps) {
  (0, _inherits3.default)(Universe, _Timelaps);

  function Universe(_ref) {
    var canvas = _ref.canvas,
        ctx = _ref.ctx;
    (0, _classCallCheck3.default)(this, Universe);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Universe.__proto__ || (0, _getPrototypeOf2.default)(Universe)).call(this, { canvas: canvas, ctx: ctx, FPS: 60 }));

    _this.play(_this.render.bind(_this));
    _this.direction = 0;
    _this.debug = false;
    _this.frecuencia = 1.5;
    _this.amplitude = 0.05;
    _this.show_fps = document.getElementsByClassName('show_fps')[0];
    _this.show_amplitude = document.getElementsByClassName('show_amplitude')[0];
    _this.show_frecuencia = document.getElementsByClassName('show_frecuencia')[0];

    _this.fps_ctrl = document.getElementById('fps_ctrl');
    _this.debug_ctrl = document.getElementById('debug');
    _this.amplitude_ctrl = document.getElementById('amplitude_ctrl');
    _this.frecuencia_ctrl = document.getElementById('frecuencia_ctrl');

    _this.debug_ctrl.onchange = function (e) {
      _this.debug = _this.debug_ctrl.checked;
      _this.spaceship.debug = _this.debug;
      //console.log(this.debug)
    };

    _this.amplitude_ctrl.onchange = function (e) {
      _this.amplitude = Number(_this.amplitude_ctrl.value);
      _this.show_amplitude.innerHTML = 'Longitud: ' + Number(_this.amplitude_ctrl.value);
    };

    _this.frecuencia_ctrl.onchange = function (e) {
      _this.frecuencia = Number(_this.frecuencia_ctrl.value);
      _this.show_frecuencia.innerHTML = 'Frecuencia: ' + Number(_this.frecuencia_ctrl.value);
    };

    _this.fps_ctrl.onchange = function (e) {
      _this.FPS = Number(_this.fps_ctrl.value);
      _this.show_fps.innerHTML = 'FPS: ' + _this.FPS;
    };
    return _this;
  }

  (0, _createClass3.default)(Universe, [{
    key: 'preload',
    value: function preload() {
      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug;

      this.spaceship = new _SpaceShip2.default({
        canvas: canvas,
        ctx: ctx,
        debug: debug,
        x: -canvas.width / 2
      });
      this.spaceship.normalX = 0;
    }
  }, {
    key: 'update',
    value: function update() {
      var canvas = this.canvas,
          ctx = this.ctx,
          spaceship = this.spaceship,
          direction = this.direction,
          amplitude = this.amplitude,
          frecuencia = this.frecuencia;

      if (spaceship.position.x - spaceship.width >= canvas.width / 2) spaceship.position.x = -(canvas.width / 2);
      spaceship.info.data = 'deg: ' + Math.floor(spaceship.angle) + ', x: ' + Math.floor(spaceship.position.x) + ', y: ' + Math.floor(spaceship.position.y);
      spaceship.angle = Math.cos(this.direction) * frecuencia;
      spaceship.position.y += Math.cos(this.direction) * frecuencia;
      spaceship.position.x += 0.3;
      spaceship.normalX += 0.3;
      spaceship.render();
      this.direction -= amplitude;
    }
  }, {
    key: 'render',
    value: function render() {
      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug,
          spaceship = this.spaceship;

      this.then = this.now - this.delta % this.interval;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.beginPath();
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      ctx.translate(x, y);
      //ctx.scale(1, -1);
      if (debug) this.drawCroos();
      this.update();
      ctx.closePath();
      ctx.restore();
    }
  }, {
    key: 'drawCroos',
    value: function drawCroos() {
      var canvas = this.canvas,
          ctx = this.ctx;

      ctx.strokeStyle = 'white';
      ctx.moveTo(0, -(canvas.height / 2));
      ctx.lineTo(0, canvas.height / 2);
      ctx.moveTo(-(canvas.width / 2), 0);
      ctx.lineTo(canvas.width / 2, 0);
      ctx.stroke();
    }
  }]);
  return Universe;
}(_Timelaps3.default);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = function () {
  var intViewportWidth = window.innerWidth;
  var intViewportHeight = window.innerHeight;
  var canvas = document.getElementById('lienzo');
  var canvasHeight = canvas.height = intViewportHeight;
  var canvasWidth = canvas.width = intViewportWidth;
  var ctx = canvas.getContext('2d');
  var space = new Universe({ canvas: canvas, ctx: ctx });
  space.preload();
  space.render();
};

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _SpaceShip = __webpack_require__(14);

var _SpaceShip2 = _interopRequireDefault(_SpaceShip);

var _Timelaps2 = __webpack_require__(12);

var _Timelaps3 = _interopRequireDefault(_Timelaps2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Universe = function (_Timelaps) {
  (0, _inherits3.default)(Universe, _Timelaps);

  function Universe(_ref) {
    var canvas = _ref.canvas,
        ctx = _ref.ctx;
    (0, _classCallCheck3.default)(this, Universe);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Universe.__proto__ || (0, _getPrototypeOf2.default)(Universe)).call(this, { canvas: canvas, ctx: ctx, FPS: 60 }));

    _this.play(_this.render.bind(_this));
    _this.debug = false;
    _this.left_force = 50;
    _this.right_force = 50;

    _this.show_fps = document.getElementsByClassName('show_fps')[0];
    _this.fps_ctrl = document.getElementById('fps_ctrl');
    _this.show_left = document.getElementById('show_left');
    _this.show_right = document.getElementById('show_right');

    _this.show_top = document.getElementById('show_top');
    _this.show_bottom = document.getElementById('show_bottom');
    _this.left_ctrl = document.getElementById('left_ctrl');

    _this.right_ctrl = document.getElementById('right_ctrl');
    _this.top_ctrl = document.getElementById('top_ctrl');
    _this.bottom_ctrl = document.getElementById('bottom_ctrl');

    _this.bottom_ctrl.onchange = function (e) {
      var force = _this.spaceship.forces[3];
      var value = e.target.value;

      force.setMagnitude(value);
      show_bottom.innerHTML = 'Bottom force: ' + Math.floor(value);
    };

    _this.top_ctrl.onchange = function (e) {
      var force = _this.spaceship.forces[2];
      var value = e.target.value;

      force.setMagnitude(value);
      show_top.innerHTML = 'Top force: ' + Math.floor(value);
    };

    _this.right_ctrl.onchange = function (e) {
      var force = _this.spaceship.forces[0];
      var value = e.target.value;

      force.setMagnitude(value);
      show_right.innerHTML = 'Right force: ' + Math.floor(value);
    };

    _this.left_ctrl.onchange = function (e) {
      var force = _this.spaceship.forces[1];
      var value = e.target.value;

      force.setMagnitude(value);
      show_left.innerHTML = 'Left force: ' + Math.floor(force.magnitude);
    };

    _this.debug_ctrl = document.getElementById('debug');
    _this.debug_ctrl.onchange = function (e) {
      _this.debug = _this.debug_ctrl.checked;
      _this.spaceship.debug = _this.debug;
      //console.log(this.debug)
    };

    _this.fps_ctrl.onchange = function (e) {
      _this.FPS = Number(_this.fps_ctrl.value);
      _this.show_fps.innerHTML = 'FPS: ' + _this.FPS;
    };

    return _this;
  }

  (0, _createClass3.default)(Universe, [{
    key: 'preload',
    value: function preload() {
      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug;

      var forces = [new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: 50, color: 'blue', direction: 0, id: 'right_force' }), new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: 50, color: 'red', direction: 180, id: 'left_force' }), new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: 50, color: 'green', direction: 90, id: 'top_force' }), new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: 50, color: 'purple', direction: 270, id: 'bottom_force' })];
      this.spaceship = new _SpaceShip2.default({ speedUp: false, canvas: canvas, ctx: ctx, debug: debug, forces: forces, mass: 1, maxVelocity: 10 });
    }
  }, {
    key: 'update',
    value: function update() {
      var canvas = this.canvas,
          ctx = this.ctx,
          spaceship = this.spaceship;

      spaceship.render();
    }
  }, {
    key: 'render',
    value: function render() {
      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug;

      this.then = this.now - this.delta % this.interval;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.beginPath();
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      ctx.translate(x, y);
      //ctx.scale(1, -1);
      if (debug) this.drawCroos();
      this.update();
      ctx.closePath();
      ctx.restore();
    }
  }, {
    key: 'drawCroos',
    value: function drawCroos() {
      var canvas = this.canvas,
          ctx = this.ctx;

      ctx.strokeStyle = 'white';
      ctx.moveTo(0, -(canvas.height / 2));
      ctx.lineTo(0, canvas.height / 2);
      ctx.moveTo(-(canvas.width / 2), 0);
      ctx.lineTo(canvas.width / 2, 0);
      ctx.stroke();
    }
  }]);
  return Universe;
}(_Timelaps3.default);

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = function () {
  var intViewportWidth = window.innerWidth;
  var intViewportHeight = window.innerHeight;
  var canvas = document.getElementById('lienzo');
  var canvasHeight = canvas.height = intViewportHeight;
  var canvasWidth = canvas.width = intViewportWidth;
  var ctx = canvas.getContext('2d');
  var space = new Universe({ canvas: canvas, ctx: ctx });
  space.preload();
  space.render();
};

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _SpaceShip = __webpack_require__(14);

var _SpaceShip2 = _interopRequireDefault(_SpaceShip);

var _Timelaps2 = __webpack_require__(12);

var _Timelaps3 = _interopRequireDefault(_Timelaps2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Universe = function (_Timelaps) {
  (0, _inherits3.default)(Universe, _Timelaps);

  function Universe(_ref) {
    var canvas = _ref.canvas,
        ctx = _ref.ctx;
    (0, _classCallCheck3.default)(this, Universe);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Universe.__proto__ || (0, _getPrototypeOf2.default)(Universe)).call(this, { canvas: canvas, ctx: ctx, FPS: 60 }));

    _this.play(_this.render.bind(_this));
    _this.debug = false;
    _this.show_mass = document.getElementById('show_mass');
    _this.show_fps = document.getElementById('show_fps');
    _this.fps_ctrl = document.getElementById('fps_ctrl');
    _this.mass_ctrl = document.getElementById('mass_ctrl');
    _this.debug_ctrl = document.getElementById('debug');
    _this.mass = _this.mass_ctrl.value;
    _this.maxVelocity = 15;
    _this.wave = 0;
    _this.fps_ctrl.onchange = function (e) {
      _this.FPS = Number(_this.fps_ctrl.value);
      _this.show_fps.innerHTML = 'FPS: ' + _this.FPS;
    };

    _this.mass_ctrl.onchange = function (e) {
      _this.maxVelocity = Number(_this.mass_ctrl.value);
      _this.show_mass.innerHTML = 'Max velocity: ' + _this.maxVelocity;
    };

    _this.debug_ctrl.onchange = function (e) {
      _this.debug = _this.debug_ctrl.checked;
      _this.spaceships.forEach(function (spaceship) {
        return spaceship.debug = _this.debug;
      });

      //console.log(this.debug)
    };
    return _this;
  }

  (0, _createClass3.default)(Universe, [{
    key: 'preload',
    value: function preload() {
      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug,
          maxVelocity = this.maxVelocity;

      this.spaceships = [];
      for (var i = 0; i < 50; i++) {
        var x = -(canvas.width / 2) - Math.random() * 100;
        var y = i * 15 - 300;
        var mass = 100 + (i + 1) * (Math.random() * 100);
        var forces = [new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: 150, color: 'green', direction: 0 })];
        var spaceship = new _SpaceShip2.default({ canvas: canvas, ctx: ctx, x: x, y: y, debug: debug, forces: forces, mass: mass, maxVelocity: maxVelocity });
        this.spaceships.push(spaceship);
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var _this2 = this;

      var canvas = this.canvas,
          spaceships = this.spaceships,
          wave = this.wave,
          maxVelocity = this.maxVelocity;

      spaceships.forEach(function (spaceship) {
        spaceship.maxVelocity = maxVelocity;
        spaceship.forces.forEach(function (force) {
          return force.normalize();
        });
        spaceship.info.data = 'mass: ' + Math.floor(spaceship.mass) + ', x: ' + Math.floor(spaceship.position.x) + ', y: ' + Math.floor(spaceship.position.y);
        var offscreen = spaceship.position.x - spaceship.width >= canvas.width / 2;
        if (offscreen) {
          spaceship.acceleration.magnitude = 1;
          spaceship.position.x = -(canvas.width / 2);
        }
        if (spaceship.velocity.x > spaceship.maxVelocity) {
          spaceship.position.y += Math.sin(wave * 5) * 0.5;
          spaceship.angle = Math.sin(wave * 5) * 0.5;
        } else {
          spaceship.position.y += Math.sin(wave) * 0.2;
          spaceship.angle = Math.sin(wave) * 0.2;
        }

        _this2.wave -= 0.0008;
        spaceship.render();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug;

      this.then = this.now - this.delta % this.interval;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.beginPath();
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      ctx.translate(x, y);
      //ctx.scale(1, -1);
      if (debug) this.drawCroos();
      this.update();
      ctx.closePath();
      ctx.restore();
    }
  }, {
    key: 'drawCroos',
    value: function drawCroos() {
      var canvas = this.canvas,
          ctx = this.ctx;

      ctx.strokeStyle = 'white';
      ctx.moveTo(0, -(canvas.height / 2));
      ctx.lineTo(0, canvas.height / 2);
      ctx.moveTo(-(canvas.width / 2), 0);
      ctx.lineTo(canvas.width / 2, 0);
      ctx.stroke();
    }
  }]);
  return Universe;
}(_Timelaps3.default);

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(75);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getIterator2 = __webpack_require__(23);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = function () {
  var intViewportWidth = window.innerWidth;
  var intViewportHeight = window.innerHeight;
  var canvas = document.getElementById('lienzo');
  var canvasHeight = canvas.height = intViewportHeight;
  var canvasWidth = canvas.width = intViewportWidth;
  var ctx = canvas.getContext('2d');
  var space = new Universe({ canvas: canvas, ctx: ctx });
  space.preload();
  space.render();
};

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _Circle = __webpack_require__(15);

var _Circle2 = _interopRequireDefault(_Circle);

var _Timelaps2 = __webpack_require__(12);

var _Timelaps3 = _interopRequireDefault(_Timelaps2);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Universe = function (_Timelaps) {
  (0, _inherits3.default)(Universe, _Timelaps);

  function Universe(_ref) {
    var canvas = _ref.canvas,
        ctx = _ref.ctx;
    (0, _classCallCheck3.default)(this, Universe);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Universe.__proto__ || (0, _getPrototypeOf2.default)(Universe)).call(this, { canvas: canvas, ctx: ctx }));

    _this.play(_this.render.bind(_this));
    _this.debug = false;
    _this.points = [];
    _this.fps_ctrl = document.getElementById('fps_ctrl');
    _this.show_fps = document.getElementById('show_fps');
    _this.debug_ctrl = document.getElementById('debug');

    _this.fps_ctrl.onchange = function (e) {
      _this.FPS = Number(_this.fps_ctrl.value);
      _this.show_fps.innerHTML = 'FPS: ' + _this.FPS;
    };
    _this.debug_ctrl.onchange = function (e) {
      _this.debug = _this.debug_ctrl.checked;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(_this.points), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var point = _step.value;
          point.debug = _this.debug;
        } //console.log(this.debug)
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    };

    return _this;
  }

  (0, _createClass3.default)(Universe, [{
    key: 'render',
    value: function render() {
      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug;

      this.then = this.now - this.delta % this.interval;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.beginPath();
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      ctx.translate(x, y);
      //ctx.scale(1, -1);
      if (debug) this.drawCroos();
      this.update();
      ctx.closePath();
      ctx.restore();
    }
  }, {
    key: 'drawCroos',
    value: function drawCroos() {
      var canvas = this.canvas,
          ctx = this.ctx;

      ctx.strokeStyle = 'white';
      ctx.moveTo(0, -(canvas.height / 2));
      ctx.lineTo(0, canvas.height / 2);
      ctx.moveTo(-(canvas.width / 2), 0);
      ctx.lineTo(canvas.width / 2, 0);
      ctx.stroke();
    }
  }, {
    key: 'update',
    value: function update() {
      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug,
          points = this.points,
          mouse = this.mouse,
          targets = this.targets;

      targets.forEach(function (target) {
        target.debug = debug;
        var collide = mouse.isCollide(target);
        if (collide) {
          target.color = 'red';
          target.stroke = false;
        } else {
          target.color = 'blue';
          target.stroke = true;
        }
        target.render();
      });
      mouse.debug = debug;
      mouse.render();
    }
  }, {
    key: 'generateTarget',
    value: function generateTarget(_ref2) {
      var x = _ref2.x,
          y = _ref2.y,
          _ref2$color = _ref2.color,
          color = _ref2$color === undefined ? 'blue' : _ref2$color;
      var ctx = this.ctx,
          canvas = this.canvas,
          debug = this.debug,
          mouse = this.mouse,
          targets = this.targets;

      console.log(color);
      var point = new _Circle2.default({ stroke: true, ctx: ctx, canvas: canvas, x: x, y: y, size: 25, debug: debug, color: color });
      mouse.joinCircles(point);
      mouse.targets.push(point);
      targets.push(point);
    }
  }, {
    key: 'generatePattern',
    value: function generatePattern() {
      var space = 2;
      for (var i = 0; i < this.canvas.width / 2 / 50; i++) {
        var pull = -(this.canvas.width / 2) / 2;
        var x = (i * 50 + pull) * space;
        var y = Math.sin(i) * 100;
        this.generateTarget({ x: x, y: y });
      }
    }
  }, {
    key: 'preload',
    value: function preload() {
      var _this2 = this;

      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug;

      this.targets = [];
      this.mouse = new _Circle2.default({ stroke: true, targets: [].concat((0, _toConsumableArray3.default)(this.targets)), ctx: ctx, canvas: canvas, x: 0, y: 0, size: 15, debug: debug, color: 'olive' });
      canvas.addEventListener('mousemove', function (e) {
        var mousePos = (0, _index.getMousePos)(canvas, e);

        var _calcCartesiano = (0, _index.calcCartesiano)(mousePos.x, mousePos.y, canvas),
            x = _calcCartesiano.x,
            y = _calcCartesiano.y;

        var deg = (0, _index.coordinatesToDeg)(x, y);
        _this2.mouse.position.x = x;
        _this2.mouse.position.y = y;
      });
      this.generatePattern();
      canvas.addEventListener('mouseup', function (e) {
        var mousePos = (0, _index.getMousePos)(canvas, e);

        var _calcCartesiano2 = (0, _index.calcCartesiano)(mousePos.x, mousePos.y, canvas),
            x = _calcCartesiano2.x,
            y = _calcCartesiano2.y;

        var deg = (0, _index.coordinatesToDeg)(x, y);
        _this2.generateTarget({ x: x, y: y });
      });
    }
  }]);
  return Universe;
}(_Timelaps3.default);

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = function () {
  var intViewportWidth = window.innerWidth;
  var intViewportHeight = window.innerHeight;
  var canvas = document.getElementById('lienzo');
  var canvasHeight = canvas.height = intViewportHeight;
  var canvasWidth = canvas.width = intViewportWidth;
  var ctx = canvas.getContext('2d');
  var space = new Universe({ canvas: canvas, ctx: ctx });
  space.preload();
  space.render();
};

var _SpaceShip = __webpack_require__(14);

var _SpaceShip2 = _interopRequireDefault(_SpaceShip);

var _Circle = __webpack_require__(15);

var _Circle2 = _interopRequireDefault(_Circle);

var _Timelaps2 = __webpack_require__(12);

var _Timelaps3 = _interopRequireDefault(_Timelaps2);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Universe = function (_Timelaps) {
  (0, _inherits3.default)(Universe, _Timelaps);

  function Universe(_ref) {
    var canvas = _ref.canvas,
        ctx = _ref.ctx;
    (0, _classCallCheck3.default)(this, Universe);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Universe.__proto__ || (0, _getPrototypeOf2.default)(Universe)).call(this, { canvas: canvas, ctx: ctx }));

    _this.play(_this.render.bind(_this));
    _this.debug = false;
    _this.fps_ctrl = document.getElementById('fps_ctrl');
    _this.show_fps = document.getElementById('show_fps');
    _this.debug_ctrl = document.getElementById('debug');
    _this.targets = [];
    _this.fps_ctrl.onchange = function (e) {
      _this.FPS = Number(_this.fps_ctrl.value);
      _this.show_fps.innerHTML = 'FPS: ' + _this.FPS;
    };
    _this.debug_ctrl.onchange = function (e) {
      _this.debug = _this.debug_ctrl.checked;
      //console.log(this.debug)
    };
    return _this;
  }

  (0, _createClass3.default)(Universe, [{
    key: 'render',
    value: function render() {
      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug,
          spaceship = this.spaceship,
          targets = this.targets;

      this.then = this.now - this.delta % this.interval;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.beginPath();
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      ctx.translate(x, y);
      //ctx.scale(1, -1);
      if (debug) this.drawCroos();
      this.update();
      spaceship.render();
      targets.forEach(function (target) {
        return target.render();
      });
      ctx.closePath();
      ctx.restore();
    }
  }, {
    key: 'drawCroos',
    value: function drawCroos() {
      var canvas = this.canvas,
          ctx = this.ctx;

      ctx.strokeStyle = 'white';
      ctx.moveTo(0, -(canvas.height / 2));
      ctx.lineTo(0, canvas.height / 2);
      ctx.moveTo(-(canvas.width / 2), 0);
      ctx.lineTo(canvas.width / 2, 0);
      ctx.stroke();
    }
  }, {
    key: 'update',
    value: function update() {
      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug,
          maxVelocity = this.maxVelocity,
          targets = this.targets,
          spaceship = this.spaceship;

      spaceship.debug = debug;
      var s = 0;
      var smaller = void 0;
      targets.forEach(function (target, index) {
        target.debug = debug;
        if (target.size > s) {
          s = target.size;
          smaller = index;
        }
      });

      if (targets.length) {
        spaceship.seek(targets[smaller].id, function (segmentIndex, targetIndex) {
          spaceship.segments.splice(segmentIndex, 1);
          spaceship.targets.splice(targetIndex, 1);
          targets.splice(targetIndex, 1);
        });
      }
    }
  }, {
    key: 'generateTarget',
    value: function generateTarget(_ref2) {
      var x = _ref2.x,
          y = _ref2.y;
      var ctx = this.ctx,
          canvas = this.canvas,
          debug = this.debug,
          spaceship = this.spaceship,
          targets = this.targets;

      var size = 10 + Math.random() * 100;
      var target = new _Circle2.default({ stroke: true, ctx: ctx, canvas: canvas, x: x, y: y, size: size, debug: debug, color: 'red' });
      targets.push(target);
      spaceship.addTarget(target);
    }
  }, {
    key: 'preload',
    value: function preload() {
      var _this2 = this;

      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug;

      this.spaceship = new _SpaceShip2.default({ ctx: ctx, mass: 12, canvas: canvas, maxVelocity: 50 });
      canvas.addEventListener('mouseup', function (e) {
        var mousePos = (0, _index.getMousePos)(canvas, e);

        var _calcCartesiano = (0, _index.calcCartesiano)(mousePos.x, mousePos.y, canvas),
            x = _calcCartesiano.x,
            y = _calcCartesiano.y;

        var deg = (0, _index.coordinatesToDeg)(x, y);
        _this2.generateTarget({ x: x, y: y });
      });
    }
  }]);
  return Universe;
}(_Timelaps3.default);

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(23);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = function () {
  var intViewportWidth = window.innerWidth;
  var intViewportHeight = window.innerHeight;
  var canvas = document.getElementById('lienzo');
  var canvasHeight = canvas.height = intViewportHeight;
  var canvasWidth = canvas.width = intViewportWidth;
  var ctx = canvas.getContext('2d');
  var space = new Universe({ canvas: canvas, ctx: ctx });
  space.preload();
  space.render();
};

var _SpaceShip = __webpack_require__(14);

var _SpaceShip2 = _interopRequireDefault(_SpaceShip);

var _Circle = __webpack_require__(15);

var _Circle2 = _interopRequireDefault(_Circle);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _Timelaps2 = __webpack_require__(12);

var _Timelaps3 = _interopRequireDefault(_Timelaps2);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Universe = function (_Timelaps) {
  (0, _inherits3.default)(Universe, _Timelaps);

  function Universe(_ref) {
    var canvas = _ref.canvas,
        ctx = _ref.ctx;
    (0, _classCallCheck3.default)(this, Universe);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Universe.__proto__ || (0, _getPrototypeOf2.default)(Universe)).call(this, { canvas: canvas, ctx: ctx }));

    _this.play(_this.render.bind(_this));
    _this.debug = false;
    _this.fps_ctrl = document.getElementById('fps_ctrl');
    _this.show_fps = document.getElementById('show_fps');
    _this.show_max_force = document.getElementById('show_max_force');
    _this.show_max_velocity = document.getElementById('show_max_velocity');
    _this.max_force_ctrl = document.getElementById('max_force_ctrl');
    _this.max_velocity_ctrl = document.getElementById('max_velocity_ctrl');

    _this.debug_ctrl = document.getElementById('debug');
    _this.targets = [];
    _this.spaceships = [];

    _this.fps_ctrl.onchange = function (e) {
      _this.FPS = e.target.value;
      _this.show_fps.innerHTML = 'FPS: ' + _this.FPS;
    };
    _this.max_force_ctrl.onchange = function (e) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(_this.spaceships), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var spaceship = _step.value;
          spaceship.maxForce = e.target.value;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      _this.show_max_force.innerHTML = 'Max force: ' + e.target.value;
    };
    _this.max_velocity_ctrl.onchange = function (e) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(_this.spaceships), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var spaceship = _step2.value;
          spaceship.maxVelocity = e.target.value;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      _this.show_max_velocity.innerHTML = 'Max velocity: ' + e.target.value;
    };
    _this.debug_ctrl.onchange = function (e) {
      return _this.debug = _this.debug_ctrl.checked;
    };
    return _this;
  }

  (0, _createClass3.default)(Universe, [{
    key: 'render',
    value: function render() {
      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug,
          spaceships = this.spaceships,
          targets = this.targets;

      this.then = this.now - this.delta % this.interval;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.beginPath();
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      ctx.translate(x, y);
      //ctx.scale(1, -1);
      if (debug) this.drawCroos();
      this.update();
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)(spaceships), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var spaceship = _step3.value;
          spaceship.render();
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      targets.forEach(function (target) {
        return target.render();
      });
      ctx.closePath();
      ctx.restore();
    }
  }, {
    key: 'drawCroos',
    value: function drawCroos() {
      var canvas = this.canvas,
          ctx = this.ctx;

      ctx.strokeStyle = 'white';
      ctx.moveTo(0, -(canvas.height / 2));
      ctx.lineTo(0, canvas.height / 2);
      ctx.moveTo(-(canvas.width / 2), 0);
      ctx.lineTo(canvas.width / 2, 0);
      ctx.stroke();
    }
  }, {
    key: 'update',
    value: function update() {
      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug,
          maxVelocity = this.maxVelocity,
          targets = this.targets,
          spaceships = this.spaceships;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        var _loop = function _loop() {
          var spaceship = _step4.value;

          spaceship.debug = debug;
          if (spaceship.position.x > canvas.width / 2) spaceship.position.x = -canvas.width / 2;
          if (spaceship.position.x < -canvas.width / 2) spaceship.position.x = canvas.width / 2;
          if (spaceship.position.y > canvas.height / 2) spaceship.position.y = -canvas.height / 2;
          if (spaceship.position.y < -canvas.height / 2) spaceship.position.y = canvas.height / 2;
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = (0, _getIterator3.default)(targets), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var target = _step5.value;

              spaceship.fleeSteering(target.id, function (steer, desired) {
                spaceship.forces[1] = steer;
                spaceship.forces[2] = desired;
              });
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        };

        for (var _iterator4 = (0, _getIterator3.default)(spaceships), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: 'generateTarget',
    value: function generateTarget(_ref2) {
      var x = _ref2.x,
          y = _ref2.y;
      var ctx = this.ctx,
          canvas = this.canvas,
          debug = this.debug,
          spaceships = this.spaceships,
          targets = this.targets;

      var size = 50;
      var target = new _Circle2.default({ stroke: true, ctx: ctx, canvas: canvas, x: x, y: y, size: size, debug: debug, color: 'red' });
      targets.push(target);
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = (0, _getIterator3.default)(spaceships), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var _spaceship = _step6.value;
          _spaceship.addTarget(target);
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    }
  }, {
    key: 'generateSpaceships',
    value: function generateSpaceships() {
      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug;

      var top = 10;
      for (var i = 0; i < top; i++) {
        var forces = [new _Vector2.default({ canvas: canvas, ctx: ctx, direction: 0, magnitude: 100 + Math.random() * 10, display: false })];
        var x = -canvas.width / 2 - 25 + Math.random() * 100;
        var y = 100 + i * 10 - 25 + Math.random() * 100;
        this.spaceships.push(new _SpaceShip2.default({ ctx: ctx, x: x, y: y, debug: debug, canvas: canvas, forces: forces, maxForce: 0.6, fleeForce: 60 }));
      }
    }
  }, {
    key: 'preload',
    value: function preload() {
      var _this2 = this;

      var canvas = this.canvas;

      this.generateSpaceships();
      this.generateTarget({ x: 0, y: 0 });
      canvas.addEventListener('mousemove', function (e) {
        var mousePos = (0, _index.getMousePos)(canvas, e);

        var _calcCartesiano = (0, _index.calcCartesiano)(mousePos.x, mousePos.y, canvas),
            x = _calcCartesiano.x,
            y = _calcCartesiano.y;

        var mag = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        _this2.targets[0].position.setMagnitude(mag);
        _this2.targets[0].position.setDirection(x, y);
      });
    }
  }]);
  return Universe;
}(_Timelaps3.default);

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(58);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = __webpack_require__(53);

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(145);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(23);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = function () {
  var intViewportWidth = window.innerWidth;
  var intViewportHeight = window.innerHeight;
  var canvas = document.getElementById('lienzo');
  var canvasHeight = canvas.height = intViewportHeight;
  var canvasWidth = canvas.width = intViewportWidth;
  var ctx = canvas.getContext('2d');
  var space = new Universe({ canvas: canvas, ctx: ctx });
  space.preload(function () {
    space.ready = true;
    space.render();
  });
};

var _SpaceShip = __webpack_require__(14);

var _SpaceShip2 = _interopRequireDefault(_SpaceShip);

var _Circle = __webpack_require__(15);

var _Circle2 = _interopRequireDefault(_Circle);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _Timelaps2 = __webpack_require__(12);

var _Timelaps3 = _interopRequireDefault(_Timelaps2);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vectorSubtraction = function vectorSubtraction(a, b) {
  return Module.vector_substraction(a, b);
};

var Universe = function (_Timelaps) {
  (0, _inherits3.default)(Universe, _Timelaps);

  function Universe(_ref) {
    var canvas = _ref.canvas,
        ctx = _ref.ctx,
        ready = _ref.ready;
    (0, _classCallCheck3.default)(this, Universe);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Universe.__proto__ || (0, _getPrototypeOf2.default)(Universe)).call(this, { canvas: canvas, ctx: ctx }));

    _this.play(_this.render.bind(_this));
    _this.debug = false;
    _this.ready = false;
    _this.targets = [];
    window.spaceships = _this.spaceships = [];
    _this.spaceships_counter = document.getElementById('spaceships_counter');
    _this.spaceships_counter.innerHTML = 'Spaceships counter: ' + _this.spaceships.length;
    return _this;
  }

  (0, _createClass3.default)(Universe, [{
    key: 'render',
    value: function render() {
      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug,
          spaceships = this.spaceships,
          targets = this.targets;

      this.then = this.now - this.delta % this.interval;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.beginPath();
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      ctx.translate(x, y);
      //ctx.scale(1, -1);
      if (debug) this.drawCroos();
      this.update();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(spaceships), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var spaceship = _step.value;
          spaceship.render();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      targets.forEach(function (target) {
        return target.render();
      });
      ctx.closePath();
      ctx.restore();
    }
  }, {
    key: 'drawCroos',
    value: function drawCroos() {
      var canvas = this.canvas,
          ctx = this.ctx;

      ctx.strokeStyle = 'white';
      ctx.moveTo(0, -(canvas.height / 2));
      ctx.lineTo(0, canvas.height / 2);
      ctx.moveTo(-(canvas.width / 2), 0);
      ctx.lineTo(canvas.width / 2, 0);
      ctx.stroke();
    }
  }, {
    key: 'separateSpaceships',
    value: function separateSpaceships(current) {
      var spaceships = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var ctx = this.ctx,
          canvas = this.canvas;

      var sum = new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: 1, direction: 0, color: 'green', display: true });
      var total = 0;
      var steer = current.forces[2];
      var desired = current.forces[1];
      var separate = steer && desired ? current.forces[3] : current.forces[1];
      if (separate) {
        separate.setMagnitude(separate.getMagnitude() - 0.2);
        if (separate.getMagnitude() <= 0) return;
      }
      for (var i = 0; i < spaceships.length; i++) {
        var spaceship = spaceships[i];
        if (spaceship.id === current) continue;
        current.addTarget(spaceship);
        if (current.isCollide(spaceship)) {
          var calc = current.calcSeparateForce(spaceship);
          sum.add(calc);
          total++;
        }
        current.targets.pop();
        current.segments.pop();
      }
      if (total) sum.split(total);
      sum.normalize();
      sum.mult(2.8);
      sum.translateX = current.position.x;
      sum.translateY = current.position.y;
      //sum.render();
      if (steer && desired) {
        current.forces[3] = sum;
      } else {
        current.forces[1] = sum;
      }
    }
  }, {
    key: 'groupSpaceships',
    value: function groupSpaceships() {
      var spaceships = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var ctx = this.ctx,
          canvas = this.canvas,
          debug = this.debug;

      var sum = new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: 1, direction: 0, color: 'green' });
      for (var e = 0; e < spaceships.length; e++) {
        var spaceship = spaceships[e];
        //spaceship.color = 'red';
        if (spaceship.clustered) continue;
        var head = spaceship.position.clone({ direction: spaceship.angle, display: true, magnitude: 1, color: 'red' });
        head.translateX = spaceship.position.x;
        head.translateY = spaceship.position.y;
        head.render();
        sum.translateX += spaceship.position.x;
        sum.translateY += spaceship.position.y;
        sum.add(head);
      }
      sum.split(spaceships.length);
      //sum.mult(10);
      sum.translateX /= spaceships.length;
      sum.translateY /= spaceships.length;
      ctx.beginPath();
      ctx.strokeStyle = 'olive';
      //ctx.fillRect(sum.translateX, -sum.translateY, 10, 10);
      //ctx.arc(sum.translateX, -sum.translateY, 200, 0, Math.PI * 2);
      //ctx.stroke();
      ctx.closePath();
      if (debug) sum.render();

      for (var _e = 0; _e < spaceships.length; _e++) {
        if (spaceships[_e].clustered) continue;

        var _vectorSubtraction = vectorSubtraction({
          x: sum.translateX, y: sum.translateY,
          magnitude: sum.magnitude,
          direction: (0, _index.radians2deg)(sum.direction)
        }, spaceships[_e].position),
            magnitude = _vectorSubtraction.magnitude,
            direction = _vectorSubtraction.direction;

        var segment = new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: magnitude, direction: (0, _index.radians2deg)(direction), color: 'white' });
        segment.translateX = spaceships[_e].position.x;
        segment.translateY = spaceships[_e].position.y;
        if (debug) segment.render();
        if (segment.getMagnitude() <= 80) {
          var steer = spaceships[_e].forces[1];
          var desired = spaceships[_e].forces[2];
          if (desired && steer) {
            if (desired.getMagnitude() !== 0) desired.setMagnitude(desired.getMagnitude() - 1);
            if (steer.getMagnitude() !== 0) steer.setMagnitude(steer.getMagnitude() - 1);
          }
        } else {
          var _desired = segment.clone();
          _desired.normalize();
          _desired.setMagnitude(50);
          //desired.mult(1.8);
          var velocity = spaceships[0].velocity;
          var s = vectorSubtraction(_desired, velocity);
          var _steer = new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: s.magnitude, direction: (0, _index.radians2deg)(s.direction), color: 'green' });
          _steer.limit(_desired.getMagnitude() * 0.8);
          spaceships[_e].forces[1] = _steer;
          spaceships[_e].forces[2] = _desired;
          //let average = (desired.direction + steer.direction + spaceships[e].forces[0].direction) / 3;
          //this.angle = average;
          //let x = Math.round(spaceships[e].forces[0].getMagnitude() * Math.cos(average));
          //let y = Math.round(spaceships[e].forces[0].getMagnitude() * Math.sin(average));
          //spaceships[e].forces[0].setDirection(x, y);
          //spaceships[e].angle = degrees2rads(coordinatesToDeg(x, y));
        }
        //this.separateSpaceships(spaceships[e], spaceships);
      }
    }
  }, {
    key: 'pickOnRadius',
    value: function pickOnRadius(r) {
      var _this2 = this;

      var result = {};
      var ctx = this.ctx,
          canvas = this.canvas,
          overlaps = this.overlaps,
          spaceships = this.spaceships;

      var _loop = function _loop(prev) {
        var alreadIngroup = (0, _keys2.default)(result).some(function (key) {
          return result[key].hasOwnProperty(spaceships[prev].id);
        });
        if (result.hasOwnProperty(spaceships[prev].id) || alreadIngroup) return 'continue';
        var rSize = spaceships[prev].size + r;
        result[spaceships[prev].id] = {};

        var _loop2 = function _loop2(next) {
          if (spaceships[prev - 1] && result[spaceships[prev - 1].id] && result[spaceships[prev - 1].id].hasOwnProperty(spaceships[next].id)) return 'continue';

          var _vectorSubtraction2 = vectorSubtraction(spaceships[next].position, spaceships[prev].position),
              magnitude = _vectorSubtraction2.magnitude,
              direction = _vectorSubtraction2.direction;

          var segment = new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: magnitude, direction: (0, _index.radians2deg)(direction), color: 'white', display: false });
          segment.translateX = spaceships[prev].position.x;
          segment.translateY = spaceships[prev].position.y;
          if (_this2.debug) segment.render();
          ctx.beginPath();
          ctx.strokeStyle = 'blue';
          ctx.arc(spaceships[prev].position.x, -spaceships[prev].position.y, rSize, 0, Math.PI * 2);
          if (_this2.debug) ctx.stroke();
          ctx.closePath();
          var overlaps = segment.getMagnitude() < rSize + spaceships[next].size;
          if (overlaps) {
            var self = result[spaceships[prev].id];
            var inOtherGroup = (0, _keys2.default)(result).some(function (key) {
              return result[key].hasOwnProperty(spaceships[next].id);
            });
            if (inOtherGroup) return 'continue';
            self[spaceships[next].id] = next;
          }
        };

        for (var next = prev + 1; next < spaceships.length; next++) {
          var _ret2 = _loop2(next);

          if (_ret2 === 'continue') continue;
        }
        if ((0, _keys2.default)(result[spaceships[prev].id]).length) {
          result[spaceships[prev].id].index = prev;
        } else {
          delete result[spaceships[prev].id];
        }
      };

      for (var prev = 0; prev < spaceships.length; prev++) {
        var _ret = _loop(prev);

        if (_ret === 'continue') continue;
      }
      return result;
    }
  }, {
    key: 'separateSteering',
    value: function separateSteering(spaceships) {
      var ctx = this.ctx,
          canvas = this.canvas;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(spaceships), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var spaceship = _step2.value;

          spaceship.separateFrom(spaceships);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var _this3 = this;

      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug,
          maxVelocity = this.maxVelocity,
          targets = this.targets,
          spaceships = this.spaceships;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)(spaceships), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var spaceship = _step3.value;

          spaceship.debug = debug;
          //spaceship.color = 'white';
          var steer = spaceship.forces[1];
          var desired = spaceship.forces[2];
          if (desired && steer) {
            if (desired.getMagnitude() !== 0) desired.setMagnitude(desired.getMagnitude() - 1);
            if (steer.getMagnitude() !== 0) steer.setMagnitude(steer.getMagnitude() - 1);
          }

          if (spaceship.position.x > canvas.width / 2) spaceship.position.x = -canvas.width / 2;
          if (spaceship.position.x < -canvas.width / 2) spaceship.position.x = canvas.width / 2;
          if (spaceship.position.y > canvas.height / 2) spaceship.position.y = -canvas.height / 2;
          if (spaceship.position.y < -canvas.height / 2) spaceship.position.y = canvas.height / 2;
          //spaceship.moveSenoidal();
          /*
          for (let target of targets) {
            spaceship.fleeSteering(target.id, (steer, desired) => {
              spaceship.forces[1] = steer;
              spaceship.forces[2] = desired;
            });
          }
          */
        }
        //let groups = this.pickOnRadius(250);    
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (this.ready) {
        if (this.spaceships.length) {
          var groups = Module.groupNavs(200);
          (0, _keys2.default)(groups).forEach(function (group) {
            var chunk = [];
            chunk.push(spaceships[group]);
            (0, _keys2.default)(groups[group]).forEach(function (subgroup) {
              chunk.push(spaceships[subgroup]);
            });
            _this3.groupSpaceships(chunk);
          });
        }
      }
      this.spaceships_counter.innerHTML = 'Spaceships counter: ' + this.spaceships.length;
    }
  }, {
    key: 'generateTarget',
    value: function generateTarget(_ref2) {
      var x = _ref2.x,
          y = _ref2.y;
      var ctx = this.ctx,
          canvas = this.canvas,
          debug = this.debug,
          spaceships = this.spaceships,
          targets = this.targets;

      var size = 50;
      var target = new _Circle2.default({ stroke: true, ctx: ctx, canvas: canvas, x: x, y: y, size: size, debug: debug, color: 'red' });
      targets.push(target);
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = (0, _getIterator3.default)(spaceships), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var spaceship = _step4.value;
          spaceship.addTarget(target);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: 'generateSpaceships',
    value: function generateSpaceships() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug;

      for (var i = 0; i < top; i++) {
        var _data$x = data.x,
            x = _data$x === undefined ? -canvas.width / 2 + 400 : _data$x,
            _data$magnitude = data.magnitude,
            magnitude = _data$magnitude === undefined ? 50 : _data$magnitude;

        data.y += Math.random() * 4 + 50;
        var forces = [new _Vector2.default({ canvas: canvas, ctx: ctx, direction: 0, magnitude: magnitude + Math.random() * 10, display: false })];
        this.spaceships.push(new _SpaceShip2.default({ ctx: ctx, x: x, y: data.y, debug: debug, canvas: canvas, forces: forces, maxForce: 0.6, fleeForce: 60 }));
      }
    }
  }, {
    key: 'preloadModule',
    value: function preloadModule() {
      var self = this;
      window.Module = {
        groupNavs: function groupNavs() {
          var result = {};
          Module.init(self.spaceships.length);
          self.spaceships.forEach(function (spaceship, index) {
            var position = spaceship.position,
                size = spaceship.size,
                _spaceship$clustered = spaceship.clustered,
                clustered = _spaceship$clustered === undefined ? false : _spaceship$clustered;
            //let { x, y, direction, magnitude } = position;

            var grouped = clustered;
            var leader_of_group = -1;
            //if (grouped) console.log(grouped)
            var offset = (0, _assign2.default)({}, position, { direction: (0, _index.radians2deg)(position.direction) });
            Module.feed([offset, size, index, grouped, leader_of_group]);
          });
          var cluster = Module.cluster();
          for (var i = 0; i < cluster.size(); i++) {
            var spaceship = cluster.get(i);
            var index = spaceship[2]; //index
            var grouped = spaceship[3]; //grouped
            var leader_of_group = spaceship[4]; //leader_of_group 
            if (grouped) {
              //self.spaceships[index].clustered = grouped;
              var alreadyExists = result.hasOwnProperty(leader_of_group);
              if (alreadyExists) {
                result[leader_of_group][index] = 0;
              } else {
                result[leader_of_group] = {};
              }
            }
          }
          Module.clear_vector();
          return result;
        }
      };
    }
  }, {
    key: 'loadModule',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(cb) {
        var script;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.preloadModule();
                script = document.createElement('script');

                script.onload = cb;
                script.src = "/test.js";
                document.getElementById('wrap-module').appendChild(script);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadModule(_x5) {
        return _ref3.apply(this, arguments);
      }

      return loadModule;
    }()
  }, {
    key: 'preload',
    value: function preload(cb) {
      var _this4 = this;

      var canvas = this.canvas;
      //this.generateSpaceships({}, 10);

      this.loadModule(cb);
      canvas.addEventListener('mouseup', function (e) {
        var mousePos = (0, _index.getMousePos)(canvas, e);

        var _calcCartesiano = (0, _index.calcCartesiano)(mousePos.x, mousePos.y, canvas),
            x = _calcCartesiano.x,
            y = _calcCartesiano.y;
        //let mag = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        //this.spaceships[0].position.setMagnitude(mag);
        //this.spaceships[0].position.setDirection(x, y);


        _this4.generateSpaceships({ x: x, y: y, magnitude: 150 }, 5);
      });

      /*
      this.generateTarget({ x: 0, y: 0 });
      canvas.addEventListener('mousemove', e => {
        let mousePos = getMousePos(canvas, e);
        let { x, y } = calcCartesiano(mousePos.x, mousePos.y, canvas);
        let mag = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        this.targets[0].position.setMagnitude(mag);
        this.targets[0].position.setDirection(x, y);
      })
      */
    }
  }]);
  return Universe;
}(_Timelaps3.default);

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(147);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(29);
var $keys = __webpack_require__(27);

__webpack_require__(77)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(23);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = function () {
  var intViewportWidth = window.innerWidth;
  var intViewportHeight = window.innerHeight;
  var canvas = document.getElementById('lienzo');
  var canvasHeight = canvas.height = intViewportHeight;
  var canvasWidth = canvas.width = intViewportWidth;
  var ctx = canvas.getContext('2d');
  var space = new Universe({ canvas: canvas, ctx: ctx });
  space.preload();
  space.render();
};

var _Explorer = __webpack_require__(81);

var _Explorer2 = _interopRequireDefault(_Explorer);

var _Hunter = __webpack_require__(150);

var _Hunter2 = _interopRequireDefault(_Hunter);

var _Circle = __webpack_require__(15);

var _Circle2 = _interopRequireDefault(_Circle);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _Timelaps2 = __webpack_require__(12);

var _Timelaps3 = _interopRequireDefault(_Timelaps2);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var g = 0;

var Universe = function (_Timelaps) {
  (0, _inherits3.default)(Universe, _Timelaps);

  function Universe(_ref) {
    var canvas = _ref.canvas,
        ctx = _ref.ctx;
    (0, _classCallCheck3.default)(this, Universe);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Universe.__proto__ || (0, _getPrototypeOf2.default)(Universe)).call(this, { canvas: canvas, ctx: ctx }));

    _this.play(_this.render.bind(_this));
    _this.debug = false;
    _this.fps_ctrl = document.getElementById('fps_ctrl');
    _this.show_fps = document.getElementById('show_fps');

    _this.debug_ctrl = document.getElementById('debug');
    _this.targets = [];
    _this.fps_ctrl.onchange = function (e) {
      _this.FPS = e.target.value;
      _this.show_fps.innerHTML = 'FPS: ' + _this.FPS;
    };
    _this.debug_ctrl.onchange = function (e) {
      return _this.debug = _this.debug_ctrl.checked;
    };
    return _this;
  }

  (0, _createClass3.default)(Universe, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug,
          hunters = this.hunters,
          targets = this.targets;

      this.then = this.now - this.delta % this.interval;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.beginPath();
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      ctx.translate(x, y);
      //ctx.scale(1, -1);
      if (debug) this.drawCroos();
      /*
      let d = vectorDotProduct(this.va, this.vb);
      let opposite = radians2deg(d) >= 90 && radians2deg(d) <= 270;
      //console.log('opposite: ', opposite, ' dif', radians2deg(d));
      this.va.render();
      this.vb.render();
      */
      this.update();
      hunters.forEach(function (hunter) {
        return hunter.render();
      });
      targets.forEach(function (target) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(_this2.hunters), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var hunter = _step.value;

            if (target.shouldRunFrom(hunter)) {
              target.rangeView.color = 'red';
              target.runAway(hunter);
            } else {
              target.rangeView.color = 'orange';
              target.setSafeMove(hunter);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        target.render();
      });
      ctx.closePath();
      ctx.restore();
      //g -= 1;
    }
  }, {
    key: 'drawCroos',
    value: function drawCroos() {
      var canvas = this.canvas,
          ctx = this.ctx;

      ctx.strokeStyle = 'white';
      ctx.moveTo(0, -(canvas.height / 2));
      ctx.lineTo(0, canvas.height / 2);
      ctx.moveTo(-(canvas.width / 2), 0);
      ctx.lineTo(canvas.width / 2, 0);
      ctx.stroke();
    }
  }, {
    key: 'theNearerOne',
    value: function theNearerOne(hunter, targets) {
      var smaller = hunter.segments[0];
      var record = hunter.segments[0].getMagnitude();
      hunter.segments.forEach(function (segment, index) {
        if (segment.getMagnitude() < record) {
          record = segment.getMagnitude();
          smaller = segment;
        }
      });
      return targets.find(function (target) {
        return target.id === smaller.id;
      });
    }
  }, {
    key: 'pullTarget',
    value: function pullTarget(hunter, segmentIndex, targetIndex) {
      var targets = this.targets;

      hunter.segments.splice(segmentIndex, 1);
      hunter.targets.splice(targetIndex, 1);
      hunter.forces = [];
      targets.splice(targetIndex, 1);
    }
  }, {
    key: 'moveHunter',
    value: function moveHunter(hunter, steer, desired) {
      var targets = this.targets;

      hunter.forces[0] = steer;
      hunter.forces[1] = desired;
    }
  }, {
    key: 'update',
    value: function update() {
      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug,
          maxVelocity = this.maxVelocity,
          targets = this.targets,
          hunters = this.hunters;

      targets.forEach(function (target) {
        target.debug = debug;
        target.color = 'white';
        if (target.position.x > canvas.width / 2) target.position.x += -canvas.width;
        if (target.position.x < -canvas.width / 2) target.position.x += canvas.width;
        if (target.position.y > canvas.height / 2) target.position.y += -canvas.height;
        if (target.position.y < -canvas.height / 2) target.position.y += canvas.height;
      });

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(hunters), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var hunter = _step2.value;

          hunter.debug = debug;
          if (hunter.position.x > canvas.width / 2) hunter.position.x += -canvas.width;
          if (hunter.position.x < -canvas.width / 2) hunter.position.x += canvas.width;

          if (hunter.position.y > canvas.height / 2) hunter.position.y += -canvas.height;
          if (hunter.position.y < -canvas.height / 2) hunter.position.y += canvas.height;
          if (targets.length) {
            var nearer = this.theNearerOne(hunter, targets);
            if (nearer) {
              nearer.color = 'red';
              hunter.seekSteering(nearer.id, this.moveHunter.bind(this, hunter), this.pullTarget.bind(this, hunter));
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'generateTarget',
    value: function generateTarget(_ref2) {
      var x = _ref2.x,
          y = _ref2.y;

      var top = 200;
      var ctx = this.ctx,
          canvas = this.canvas,
          debug = this.debug,
          hunters = this.hunters,
          targets = this.targets;

      for (var i = 0; i < top; i++) {
        var direction = i * 10;
        var magnitude = 15;
        var dx = x + Math.round(magnitude * Math.cos(direction)) + Math.random();
        var dy = y + Math.round(magnitude * Math.sin(direction)) + Math.random() * (i * 10);
        var angle = 0; //coordinatesToDeg(dx - x, dy - y);
        var initForce = new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: 150, direction: 0 /*angle*/ });
        initForce.run = false;
        var forces = [initForce];
        var target = new _Explorer2.default({ forces: forces, color: 'white', angle: angle, mass: 50, size: 10, speedUp: true, canvas: canvas, ctx: ctx, debug: debug, x: dx, y: dy, width: 15, height: 15, maxForce: 0.1, maxVelocity: 4 });
        //console.log(target.angle / Math.PI * 180)
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = (0, _getIterator3.default)(hunters), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var hunter = _step3.value;

            target.addHunter(hunter);
            hunter.addTarget(target);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        targets.push(target);
        //console.log(targets)
      }
    }
  }, {
    key: 'preload',
    value: function preload() {
      var _this3 = this;

      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug;
      /*
      this.va = new Vector({ magnitude: 100, direction: 180, translateY: -100, ctx, canvas });
      this.vb = new Vector({ magnitude: 100, direction: 0, color: 'blue', ctx, canvas });
      canvas.addEventListener('mousemove', e => {
        let mousePos = getMousePos(canvas, e);
        let { x, y } = calcCartesiano(mousePos.x, mousePos.y, canvas);
        this.vb.setDirection(x, y);
        this.va.setDirection(-x, -y);
      })
      */

      this.hunters = [new _Hunter2.default({ ctx: ctx, x: 100, y: 100, debug: debug, size: 20, speedUp: true, mass: 100, color: 'yellow', canvas: canvas, width: 25, height: 25, maxForce: 0, maxVelocity: 50 })];
      canvas.addEventListener('mouseup', function (e) {
        var mousePos = (0, _index.getMousePos)(canvas, e);

        var _calcCartesiano = (0, _index.calcCartesiano)(mousePos.x, mousePos.y, canvas),
            x = _calcCartesiano.x,
            y = _calcCartesiano.y;

        var deg = (0, _index.coordinatesToDeg)(x, y);
        var mag = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        //this.targets[0].position.set(mag);
        //this.targets[0].position.direction = deg * Math.PI / 180;
        _this3.generateTarget({ x: x, y: y });
      });
    }
  }]);
  return Universe;
}(_Timelaps3.default);

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(76);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _TextBox = __webpack_require__(35);

var _TextBox2 = _interopRequireDefault(_TextBox);

var _Explotion = __webpack_require__(54);

var _Explotion2 = _interopRequireDefault(_Explotion);

var _Motion = __webpack_require__(36);

var _Motion2 = _interopRequireDefault(_Motion);

var _BarChart = __webpack_require__(55);

var _BarChart2 = _interopRequireDefault(_BarChart);

var _Grid = __webpack_require__(37);

var _Grid2 = _interopRequireDefault(_Grid);

var _Circle = __webpack_require__(15);

var _Circle2 = _interopRequireDefault(_Circle);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _SpaceShip2 = __webpack_require__(14);

var _SpaceShip3 = _interopRequireDefault(_SpaceShip2);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hunter = function (_SpaceShip) {
  (0, _inherits3.default)(Hunter, _SpaceShip);

  function Hunter(_ref) {
    var ctx = _ref.ctx,
        _ref$speedUp = _ref.speedUp,
        speedUp = _ref$speedUp === undefined ? true : _ref$speedUp,
        _ref$stroke = _ref.stroke,
        stroke = _ref$stroke === undefined ? true : _ref$stroke,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 20 : _ref$size,
        _ref$maxVelocity = _ref.maxVelocity,
        maxVelocity = _ref$maxVelocity === undefined ? 5 : _ref$maxVelocity,
        _ref$maxForce = _ref.maxForce,
        maxForce = _ref$maxForce === undefined ? 0.5 : _ref$maxForce,
        _ref$targets = _ref.targets,
        targets = _ref$targets === undefined ? [] : _ref$targets,
        _ref$width = _ref.width,
        width = _ref$width === undefined ? 20 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === undefined ? 20 : _ref$height,
        canvas = _ref.canvas,
        _ref$debug = _ref.debug,
        debug = _ref$debug === undefined ? false : _ref$debug,
        _ref$mass = _ref.mass,
        mass = _ref$mass === undefined ? 40 : _ref$mass,
        _ref$forces = _ref.forces,
        forces = _ref$forces === undefined ? [] : _ref$forces,
        _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y,
        _ref$angle = _ref.angle,
        angle = _ref$angle === undefined ? 0 : _ref$angle,
        _ref$velocity = _ref.velocity,
        velocity = _ref$velocity === undefined ? 0 : _ref$velocity,
        _ref$acceleration = _ref.acceleration,
        acceleration = _ref$acceleration === undefined ? 0 : _ref$acceleration,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? 'white' : _ref$color,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? (0, _index.guid)() : _ref$id,
        _ref$display = _ref.display,
        display = _ref$display === undefined ? true : _ref$display;
    (0, _classCallCheck3.default)(this, Hunter);
    return (0, _possibleConstructorReturn3.default)(this, (Hunter.__proto__ || (0, _getPrototypeOf2.default)(Hunter)).call(this, { ctx: ctx, speedUp: speedUp, stroke: stroke, size: size, maxVelocity: maxVelocity, maxForce: maxForce, targets: targets, width: width, height: height, canvas: canvas, debug: debug, mass: mass, forces: forces, x: x, y: y, angle: angle, velocity: velocity, acceleration: acceleration, color: color, id: id, display: display }));
  }

  (0, _createClass3.default)(Hunter, [{
    key: 'seekSteering',
    value: function seekSteering(id, result, done) {
      var segments = this.segments,
          targets = this.targets,
          velocity = this.velocity,
          canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug,
          maxForce = this.maxForce;

      var segment = this.getSegment(id);
      var target = this.getTarget(id);
      if (segment && target) {
        this.angle = segment.direction;
        if (this.isCollide(target)) {
          var segmentIndex = this.getSegmentIndex(id);
          var targetIndex = this.getTargetIndex(id);
          if (done) {
            done(segmentIndex, targetIndex);
          }
        } else {
          var desired = segment.clone({ color: 'white', display: true });
          //desired.render();
          desired.mult(5);

          var _vectorSubtraction = (0, _index.vectorSubtraction)(desired, velocity),
              magnitude = _vectorSubtraction.magnitude,
              direction = _vectorSubtraction.direction;

          var steer = new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: magnitude, direction: direction, color: 'green' });
          steer.limit(desired.getMagnitude() * maxForce);
          if (result) result(steer, desired);
        }
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      var angle = this.angle,
          mass = this.mass,
          width = this.width,
          skin = this.skin,
          height = this.height,
          position = this.position,
          ctx = this.ctx,
          color = this.color,
          acceleration = this.acceleration,
          velocity = this.velocity,
          info = this.info,
          debug = this.debug;
      var x = position.x,
          y = position.y;

      ctx.save(); //save angle
      ctx.beginPath();
      ctx.scale(1, -1);
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.lineWidth = 8;
      ctx.lineCap = 'round';

      ctx.translate(width / 2 / 2, 0);
      ctx.lineTo(-(width / 2), height / 2);
      ctx.lineTo(width / 2, -(height / 2) + height / 2);
      ctx.lineTo(-(width / 2), -height / 2);

      ctx.lineTo(-(width / 2), height / 2);
      ctx.lineTo(width / 2, -(height / 2) + height / 2);
      ctx.lineTo(-(width / 2), -height / 2);
      ctx.lineTo(-width, -(height / 2) + height / 2);
      ctx.lineTo(-(width / 2), height / 2);

      ctx.lineTo(-(width / 2), height / 2);
      ctx.lineTo(width / 2, -(height / 2) + height / 2);
      ctx.lineTo(-(width / 2), -height / 2);
      ctx.lineTo(-(width / 8), -(height / 2) + height / 2);
      ctx.moveTo(-(width / 2), height / 2);
      ctx.lineTo(-(width / 8), -(height / 2) + height / 2);
      ctx.fill();
      ctx.closePath();
      ctx.restore();
      acceleration.render();
      velocity.render();
      position.render();
      if (debug) this.drawShildForce();
    }
  }]);
  return Hunter;
}(_SpaceShip3.default);

exports.default = Hunter;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(23);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = function () {
  var intViewportWidth = window.innerWidth;
  var intViewportHeight = window.innerHeight;
  var canvas = document.getElementById('lienzo');
  var canvasHeight = canvas.height = intViewportHeight;
  var canvasWidth = canvas.width = intViewportWidth;
  var ctx = canvas.getContext('2d');
  var space = new Universe({ canvas: canvas, ctx: ctx });
  space.preload();
  space.render();
};

var _Explorer = __webpack_require__(81);

var _Explorer2 = _interopRequireDefault(_Explorer);

var _Circle = __webpack_require__(15);

var _Circle2 = _interopRequireDefault(_Circle);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _Line = __webpack_require__(152);

var _Line2 = _interopRequireDefault(_Line);

var _Timelaps2 = __webpack_require__(12);

var _Timelaps3 = _interopRequireDefault(_Timelaps2);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mapa = __webpack_require__(157);
var parseSVG = __webpack_require__(154);

var Universe = function (_Timelaps) {
  (0, _inherits3.default)(Universe, _Timelaps);

  function Universe(_ref) {
    var canvas = _ref.canvas,
        ctx = _ref.ctx;
    (0, _classCallCheck3.default)(this, Universe);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Universe.__proto__ || (0, _getPrototypeOf2.default)(Universe)).call(this, { canvas: canvas, ctx: ctx }));

    _this.play(_this.render.bind(_this));
    _this.debug = true;
    _this.fps_ctrl = document.getElementById('fps_ctrl');
    _this.show_fps = document.getElementById('show_fps');

    _this.debug_ctrl = document.getElementById('debug');
    _this.targets = [];
    _this.fps_ctrl.onchange = function (e) {
      _this.FPS = e.target.value;
      _this.show_fps.innerHTML = 'FPS: ' + _this.FPS;
    };
    _this.debug_ctrl.onchange = function (e) {
      return _this.debug = _this.debug_ctrl.checked;
    };
    return _this;
  }

  (0, _createClass3.default)(Universe, [{
    key: 'render',
    value: function render() {
      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug,
          hunters = this.hunters,
          targets = this.targets;

      this.then = this.now - this.delta % this.interval;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.beginPath();
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      ctx.translate(x, y);
      //ctx.scale(1, -1);
      if (debug) this.drawCroos();
      this.update();
      ctx.closePath();
      ctx.restore();
    }
  }, {
    key: 'drawCroos',
    value: function drawCroos() {
      var canvas = this.canvas,
          ctx = this.ctx;

      ctx.strokeStyle = 'white';
      ctx.moveTo(0, -(canvas.height / 2));
      ctx.lineTo(0, canvas.height / 2);
      ctx.moveTo(-(canvas.width / 2), 0);
      ctx.lineTo(canvas.width / 2, 0);
      ctx.stroke();
    }
  }, {
    key: 'update',
    value: function update() {
      var highway = this.highway,
          vertex = this.vertex,
          canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug,
          maxVelocity = this.maxVelocity;

      ctx.beginPath();
      ctx.fillStyle = "red";
      //ctx.fillRect(0, 0, 100, 100);
      ctx.save();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(vertex), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var data = _step.value;

          ctx.beginPath();
          var x = data.x,
              y = data.y,
              x1 = data.x1,
              x2 = data.x2,
              y1 = data.y1,
              y2 = data.y2,
              command = data.command;

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
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      ctx.restore();
      ctx.closePath();
    }
  }, {
    key: 'generateMap',
    value: function generateMap() {
      var ctx = this.ctx,
          canvas = this.canvas,
          debug = this.debug;

      this.vertex = [];
      console.log(Mapa);
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(Mapa.childs), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var node = _step2.value;

          var data = [];
          if (node.childs) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = (0, _getIterator3.default)(node.childs), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var n = _step3.value;

                console.log(n.name === "ellipse");
                if (n.attrs && n.name === "ellipse") {
                  data.push(n.attrs);
                }
                if (n.attrs && n.attrs.d) {
                  data = parseSVG(n.attrs.d);
                  console.log(data);
                  var _iteratorNormalCompletion4 = true;
                  var _didIteratorError4 = false;
                  var _iteratorError4 = undefined;

                  try {
                    for (var _iterator4 = (0, _getIterator3.default)(data), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                      var bit = _step4.value;

                      this.vertex.push(bit);
                    }
                  } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                      }
                    } finally {
                      if (_didIteratorError4) {
                        throw _iteratorError4;
                      }
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'preload',
    value: function preload() {
      var canvas = this.canvas,
          ctx = this.ctx,
          debug = this.debug;

      this.highway = [];
      this.generateMap();
      console.log(this.vertex);
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
  }]);
  return Universe;
}(_Timelaps3.default);

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Line = function () {
  function Line(_ref) {
    var ctx = _ref.ctx,
        start = _ref.start,
        end = _ref.end,
        _ref$weight = _ref.weight,
        weight = _ref$weight === undefined ? 1 : _ref$weight,
        _ref$display = _ref.display,
        display = _ref$display === undefined ? true : _ref$display,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? 'rgb(233, 30, 99)' : _ref$color;
    (0, _classCallCheck3.default)(this, Line);

    this.ctx = ctx;
    this.start = start;
    this.end = end;
    this.color = color;
    this.display = display;
    this.weight = weight;
  }

  (0, _createClass3.default)(Line, [{
    key: 'drawMap',
    value: function drawMap() {
      var color = this.color,
          start = this.start,
          end = this.end,
          ctx = this.ctx;

      ctx.save();
      ctx.restore();
    }
  }, {
    key: 'render',
    value: function render() {
      var ctx = this.ctx,
          x = this.x,
          y = this.y,
          width = this.width,
          height = this.height,
          display = this.display,
          style = this.style,
          color = this.color;

      this.drawMap();
    }
  }]);
  return Line;
}();

exports.default = Line;

/***/ }),
/* 153 */,
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// v1.0 exported just the parser function. To maintain backwards compatibility,
// we export additional named features as properties of that function.
var parserFunction = __webpack_require__(155).parse;
parserFunction.parseSVG = parserFunction;
parserFunction.makeAbsolute = makeSVGPathCommandsAbsolute;
module.exports = parserFunction;

function makeSVGPathCommandsAbsolute(commands) {
	var subpathStart, prevCmd={x:0,y:0};
	var attr = {x:'x0',y:'y0',x1:'x0',y1:'y0',x2:'x0',y2:'y0'};
	commands.forEach(function(cmd) {
		if (cmd.command==='moveto') subpathStart=cmd;
		cmd.x0=prevCmd.x; cmd.y0=prevCmd.y;
		for (var a in attr) if (a in cmd) cmd[a] += cmd.relative ? cmd[attr[a]] : 0;
		if (!('x' in cmd)) cmd.x = prevCmd.x; // V
		if (!('y' in cmd)) cmd.y = prevCmd.y; // X
		cmd.relative = false;
		cmd.code = cmd.code.toUpperCase();
		if (cmd.command=='closepath') {
			cmd.x = subpathStart.x;
			cmd.y = subpathStart.y;
		}
		prevCmd = cmd;
	});
	return commands;
}


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */



function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { svg_path: peg$parsesvg_path },
      peg$startRuleFunction  = peg$parsesvg_path,

      peg$c0 = function(data) {
          if (!data) return [];
          for (var cmds=[],i=0;i<data.length;i++) cmds=cmds.concat.apply(cmds,data[i]);
          var first=cmds[0];
          if (first && first.code=='m'){ // Per spec, first moveto is never relative
            delete first.relative;
            first.code = 'M';
          }
          return cmds;
        },
      peg$c1 = function(first, more) { return merge(first,more) },
      peg$c2 = /^[Mm]/,
      peg$c3 = peg$classExpectation(["M", "m"], false, false),
      peg$c4 = function(c, first, more) {
          var move = commands(c,[first]);
          if (more) move = move.concat(commands(c=='M' ? 'L' : 'l',more[1]));
          return move;
        },
      peg$c5 = /^[Zz]/,
      peg$c6 = peg$classExpectation(["Z", "z"], false, false),
      peg$c7 = function() { return commands('Z') },
      peg$c8 = /^[Ll]/,
      peg$c9 = peg$classExpectation(["L", "l"], false, false),
      peg$c10 = function(c, args) { return commands(c,args) },
      peg$c11 = /^[Hh]/,
      peg$c12 = peg$classExpectation(["H", "h"], false, false),
      peg$c13 = function(c, args) { return commands(c,args.map(function(x){ return {x:x}})) },
      peg$c14 = /^[Vv]/,
      peg$c15 = peg$classExpectation(["V", "v"], false, false),
      peg$c16 = function(c, args) { return commands(c,args.map(function(y){ return {y:y}})) },
      peg$c17 = /^[Cc]/,
      peg$c18 = peg$classExpectation(["C", "c"], false, false),
      peg$c19 = function(a, b, c) { return { x1:a.x, y1:a.y, x2:b.x, y2:b.y, x:c.x, y:c.y } },
      peg$c20 = /^[Ss]/,
      peg$c21 = peg$classExpectation(["S", "s"], false, false),
      peg$c22 = function(b, c) { return { x2:b.x, y2:b.y, x:c.x, y:c.y } },
      peg$c23 = /^[Qq]/,
      peg$c24 = peg$classExpectation(["Q", "q"], false, false),
      peg$c25 = function(a, b) { return { x1:a.x, y1:a.y, x:b.x, y:b.y } },
      peg$c26 = /^[Tt]/,
      peg$c27 = peg$classExpectation(["T", "t"], false, false),
      peg$c28 = /^[Aa]/,
      peg$c29 = peg$classExpectation(["A", "a"], false, false),
      peg$c30 = function(rx, ry, xrot, large, sweep, xy) { return { rx:rx, ry:ry, xAxisRotation:xrot, largeArc:large, sweep:sweep, x:xy.x, y:xy.y } },
      peg$c31 = function(x, y) { return { x:x, y:y } },
      peg$c32 = function(n) { return n*1 },
      peg$c33 = function(parts) { return parts.join('')*1 },
      peg$c34 = /^[01]/,
      peg$c35 = peg$classExpectation(["0", "1"], false, false),
      peg$c36 = function(bit) { return bit=='1' },
      peg$c37 = function() { return '' },
      peg$c38 = ",",
      peg$c39 = peg$literalExpectation(",", false),
      peg$c40 = function(parts) { return parts.join('') },
      peg$c41 = ".",
      peg$c42 = peg$literalExpectation(".", false),
      peg$c43 = /^[eE]/,
      peg$c44 = peg$classExpectation(["e", "E"], false, false),
      peg$c45 = /^[+\-]/,
      peg$c46 = peg$classExpectation(["+", "-"], false, false),
      peg$c47 = /^[0-9]/,
      peg$c48 = peg$classExpectation([["0", "9"]], false, false),
      peg$c49 = function(digits) { return digits.join('') },
      peg$c50 = /^[ \t\n\r]/,
      peg$c51 = peg$classExpectation([" ", "\t", "\n", "\r"], false, false),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsesvg_path() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewsp();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsewsp();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsemoveTo_drawTo_commandGroups();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsewsp();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsewsp();
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c0(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsemoveTo_drawTo_commandGroups() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsemoveTo_drawTo_commandGroup();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = [];
      s5 = peg$parsewsp();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parsewsp();
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsemoveTo_drawTo_commandGroup();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsemoveTo_drawTo_commandGroup();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsemoveTo_drawTo_commandGroup() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsemoveto();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = [];
      s5 = peg$parsewsp();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parsewsp();
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsedrawto_command();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsedrawto_command();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsedrawto_command() {
    var s0;

    s0 = peg$parseclosepath();
    if (s0 === peg$FAILED) {
      s0 = peg$parselineto();
      if (s0 === peg$FAILED) {
        s0 = peg$parsehorizontal_lineto();
        if (s0 === peg$FAILED) {
          s0 = peg$parsevertical_lineto();
          if (s0 === peg$FAILED) {
            s0 = peg$parsecurveto();
            if (s0 === peg$FAILED) {
              s0 = peg$parsesmooth_curveto();
              if (s0 === peg$FAILED) {
                s0 = peg$parsequadratic_bezier_curveto();
                if (s0 === peg$FAILED) {
                  s0 = peg$parsesmooth_quadratic_bezier_curveto();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseelliptical_arc();
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parsemoveto() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    if (peg$c2.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c3); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_pair();
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = peg$parsecomma_wsp();
          if (s5 === peg$FAILED) {
            s5 = null;
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parselineto_argument_sequence();
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c4(s1, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseclosepath() {
    var s0, s1;

    s0 = peg$currPos;
    if (peg$c5.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c6); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c7();
    }
    s0 = s1;

    return s0;
  }

  function peg$parselineto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c8.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c9); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parselineto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parselineto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsecoordinate_pair();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsecoordinate_pair();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsehorizontal_lineto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c11.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c12); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c13(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecoordinate_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsenumber();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsenumber();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsenumber();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsevertical_lineto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c14.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c15); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c16(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecurveto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c17.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c18); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecurveto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecurveto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsecurveto_argument();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsecurveto_argument();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsecurveto_argument();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecurveto_argument() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_pair();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsecomma_wsp();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsecoordinate_pair();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c19(s1, s3, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_curveto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c20.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c21); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsesmooth_curveto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_curveto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsesmooth_curveto_argument();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsesmooth_curveto_argument();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsesmooth_curveto_argument();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_curveto_argument() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_pair();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c22(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsequadratic_bezier_curveto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c23.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c24); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsequadratic_bezier_curveto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsequadratic_bezier_curveto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsequadratic_bezier_curveto_argument();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsequadratic_bezier_curveto_argument();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsequadratic_bezier_curveto_argument();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsequadratic_bezier_curveto_argument() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecoordinate_pair();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c25(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_quadratic_bezier_curveto() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c26.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c27); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsesmooth_quadratic_bezier_curveto_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesmooth_quadratic_bezier_curveto_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsecoordinate_pair();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsecoordinate_pair();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsecoordinate_pair();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseelliptical_arc() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c28.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c29); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseelliptical_arc_argument_sequence();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseelliptical_arc_argument_sequence() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseelliptical_arc_argument();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parsecomma_wsp();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parseelliptical_arc_argument();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parsecomma_wsp();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseelliptical_arc_argument();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseelliptical_arc_argument() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;

    s0 = peg$currPos;
    s1 = peg$parsenonnegative_number();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenonnegative_number();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsecomma_wsp();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsenumber();
            if (s5 !== peg$FAILED) {
              s6 = peg$parsecomma_wsp();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseflag();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parsecomma_wsp();
                  if (s8 === peg$FAILED) {
                    s8 = null;
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseflag();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parsecomma_wsp();
                      if (s10 === peg$FAILED) {
                        s10 = null;
                      }
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parsecoordinate_pair();
                        if (s11 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c30(s1, s3, s5, s7, s9, s11);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecoordinate_pair() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsenumber();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma_wsp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenumber();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c31(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsenonnegative_number() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parsefloating_point_constant();
    if (s1 === peg$FAILED) {
      s1 = peg$parsedigit_sequence();
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c32(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsenumber() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parsesign();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parsefloating_point_constant();
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      s2 = peg$parsesign();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsedigit_sequence();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c33(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseflag() {
    var s0, s1;

    s0 = peg$currPos;
    if (peg$c34.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c35); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c36(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsecomma_wsp() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewsp();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsewsp();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsewsp();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsewsp();
        }
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parsecomma();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsewsp();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsewsp();
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c37();
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parsecomma() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 44) {
      s0 = peg$c38;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c39); }
    }

    return s0;
  }

  function peg$parsefloating_point_constant() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parsefractional_constant();
    if (s2 !== peg$FAILED) {
      s3 = peg$parseexponent();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      s2 = peg$parsedigit_sequence();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseexponent();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c40(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsefractional_constant() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parsedigit_sequence();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    if (s2 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 46) {
        s3 = peg$c41;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c42); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsedigit_sequence();
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      s2 = peg$parsedigit_sequence();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 46) {
          s3 = peg$c41;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c42); }
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c40(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseexponent() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    if (peg$c43.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c44); }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parsesign();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsedigit_sequence();
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c40(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsesign() {
    var s0;

    if (peg$c45.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c46); }
    }

    return s0;
  }

  function peg$parsedigit_sequence() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c47.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c48); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c47.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c48); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c49(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsewsp() {
    var s0, s1;

    s0 = peg$currPos;
    if (peg$c50.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c51); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c37();
    }
    s0 = s1;

    return s0;
  }


    function merge(first,more){
      if (!more) return [first];
      for (var a=[first],i=0,l=more.length;i<l;i++) a[i+1]=more[i][1];
      return a;
    }

    var cmds = {m:'moveto',l:'lineto',h:'horizontal lineto',v:'vertical lineto',c:'curveto',s:'smooth curveto',q:'quadratic curveto',t:'smooth quadratic curveto',a:'elliptical arc',z:'closepath'};
    for (var code in cmds) cmds[code.toUpperCase()]=cmds[code];
    function commands(code,args){
      if (!args) args=[{}];
      for (var i=args.length;i--;){
        var cmd={code:code,command:cmds[code]};
        if (code==code.toLowerCase()) cmd.relative=true;
        for (var k in args[i]) cmd[k]=args[i][k];
        args[i] = cmd;
      }
      return args;
    }


  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};


/***/ }),
/* 156 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = {"name":"svg","attrs":{"xmlnsDc":"http://purl.org/dc/elements/1.1/","xmlnsCc":"http://creativecommons.org/ns#","xmlnsRdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","xmlnsSvg":"http://www.w3.org/2000/svg","xmlns":"http://www.w3.org/2000/svg","xmlnsSodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd","xmlnsInkscape":"http://www.inkscape.org/namespaces/inkscape","width":"210mm","height":"297mm","viewBox":"0 0 210 297","version":"1.1","id":"svg8","inkscapeVersion":"0.92.3 (unknown)","sodipodiDocname":"drawing.svg"},"childs":[{"name":"defs","attrs":{"id":"defs2"}},{"name":"sodipodi:namedview","attrs":{"id":"base","pagecolor":"#ffffff","bordercolor":"#666666","borderopacity":"1.0","inkscapePageopacity":"0.0","inkscapePageshadow":"2","inkscapeZoom":"0.49497475","inkscapeCx":"243.91013","inkscapeCy":"652.04485","inkscapeDocumentUnits":"mm","inkscapeCurrentLayer":"layer1","showgrid":"false","inkscapeWindowWidth":"1321","inkscapeWindowHeight":"710","inkscapeWindowX":"39","inkscapeWindowY":"30","inkscapeWindowMaximized":"1"}},{"name":"metadata","attrs":{"id":"metadata5"},"childs":[{"name":"rdf:RDF","attrs":{},"childs":[{"name":"cc:Work","attrs":{"rdfAbout":""},"childs":[{"name":"dc:format","attrs":{},"childs":[{"text":"image/svg+xml"}]},{"name":"dc:type","attrs":{"rdfResource":"http://purl.org/dc/dcmitype/StillImage"}},{"name":"dc:title","attrs":{}}]}]}]},{"name":"g","attrs":{"inkscapeLabel":"Layer 1","inkscapeGroupmode":"layer","id":"layer1"},"childs":[{"name":"path","attrs":{"id":"path10","transform":"scale(0.26458333)","style":"fill:none;stroke:#000000;stroke-width:0.99999994px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1","d":"m 317.14258,65.376953 v 7.855469 c 0.0508,-0.2289 0.11181,-0.454987 0.16601,-0.683594 z"}},{"name":"ellipse","attrs":{"style":"fill:#ff2a2a;stroke-width:0.26458332","id":"path62","cx":"113.58955","cy":"125.9475","rx":"61.739262","ry":"65.21376"}}]}]}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map