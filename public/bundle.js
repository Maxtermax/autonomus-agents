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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
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

var _defineProperty = __webpack_require__(49);

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

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(33);
var toPrimitive = __webpack_require__(17);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(13)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(3);
var ctx = __webpack_require__(32);
var hide = __webpack_require__(8);
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
    if (own && key in exports) continue;
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(15);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(65);
var defined = __webpack_require__(18);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(20)('wks');
var uid = __webpack_require__(16);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 14 */
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

var vectorAddition = function vectorAddition(a, b) {
  var result = {};
  result.x = a.x + b.x;
  result.y = a.y + b.y;
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
  computeForce: computeForce,
  vectorAddition: vectorAddition
};

/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
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
/* 18 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(20)('keys');
var uid = __webpack_require__(16);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(64);
var enumBugKeys = __webpack_require__(26);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(34)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(69).appendChild(iframe);
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(40);
var enumBugKeys = __webpack_require__(26);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(6);
var TAG = __webpack_require__(11)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(11);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(3);
var LIBRARY = __webpack_require__(22);
var wksExt = __webpack_require__(28);
var defineProperty = __webpack_require__(4).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 31 */
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

var _index = __webpack_require__(14);

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(52);
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(13)(function () {
  return Object.defineProperty(__webpack_require__(34)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(18);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(6);
var toObject = __webpack_require__(35);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(59);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(74);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(22);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(39);
var hide = __webpack_require__(8);
var has = __webpack_require__(6);
var Iterators = __webpack_require__(23);
var $iterCreate = __webpack_require__(63);
var setToStringTag = __webpack_require__(27);
var getPrototypeOf = __webpack_require__(36);
var ITERATOR = __webpack_require__(11)('iterator');
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
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
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
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(6);
var toIObject = __webpack_require__(10);
var arrayIndexOf = __webpack_require__(66)(false);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');

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
/* 41 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(40);
var hiddenKeys = __webpack_require__(26).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(30);
var createDesc = __webpack_require__(15);
var toIObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(17);
var has = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(33);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
module.exports = __webpack_require__(102);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(131);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(134);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = __webpack_require__(117);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _index = __webpack_require__(146);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(147);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(151);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(153);

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(154);

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(162);

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__(163);

var _index14 = _interopRequireDefault(_index13);

var _index15 = __webpack_require__(164);

var _index16 = _interopRequireDefault(_index15);

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
}]);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(55), __esModule: true };

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
module.exports = __webpack_require__(3).Object.getPrototypeOf;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(35);
var $getPrototypeOf = __webpack_require__(36);

__webpack_require__(57)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(7);
var core = __webpack_require__(3);
var fails = __webpack_require__(13);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(37);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(60), __esModule: true };

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
__webpack_require__(70);
module.exports = __webpack_require__(28).f('iterator');


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(62)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(38)(String, 'String', function (iterated) {
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);
var defined = __webpack_require__(18);
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(24);
var descriptor = __webpack_require__(15);
var setToStringTag = __webpack_require__(27);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(8)(IteratorPrototype, __webpack_require__(11)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(25);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(41);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10);
var toLength = __webpack_require__(67);
var toAbsoluteIndex = __webpack_require__(68);
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(21);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
var global = __webpack_require__(2);
var hide = __webpack_require__(8);
var Iterators = __webpack_require__(23);
var TO_STRING_TAG = __webpack_require__(11)('toStringTag');

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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(72);
var step = __webpack_require__(73);
var Iterators = __webpack_require__(23);
var toIObject = __webpack_require__(10);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(38)(Array, 'Array', function (iterated, kind) {
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
/* 72 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
__webpack_require__(81);
__webpack_require__(82);
__webpack_require__(83);
module.exports = __webpack_require__(3).Symbol;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(5);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(39);
var META = __webpack_require__(77).KEY;
var $fails = __webpack_require__(13);
var shared = __webpack_require__(20);
var setToStringTag = __webpack_require__(27);
var uid = __webpack_require__(16);
var wks = __webpack_require__(11);
var wksExt = __webpack_require__(28);
var wksDefine = __webpack_require__(29);
var enumKeys = __webpack_require__(78);
var isArray = __webpack_require__(79);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(9);
var toIObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(17);
var createDesc = __webpack_require__(15);
var _create = __webpack_require__(24);
var gOPNExt = __webpack_require__(80);
var $GOPD = __webpack_require__(44);
var $DP = __webpack_require__(4);
var $keys = __webpack_require__(25);
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
  __webpack_require__(43).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(30).f = $propertyIsEnumerable;
  __webpack_require__(42).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(22)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(8)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(16)('meta');
var isObject = __webpack_require__(9);
var has = __webpack_require__(6);
var setDesc = __webpack_require__(4).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(13)(function () {
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(25);
var gOPS = __webpack_require__(42);
var pIE = __webpack_require__(30);
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(41);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(10);
var gOPN = __webpack_require__(43).f;
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
/* 81 */
/***/ (function(module, exports) {



/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('asyncIterator');


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('observable');


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(85);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(89);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(37);

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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
module.exports = __webpack_require__(3).Object.setPrototypeOf;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(7);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(88).set });


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(9);
var anObject = __webpack_require__(12);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(32)(Function.call, __webpack_require__(44).f(Object.prototype, '__proto__').set, 2);
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(91);
var $Object = __webpack_require__(3).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(24) });


/***/ }),
/* 92 */,
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _assign = __webpack_require__(156);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _index = __webpack_require__(14);

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
    key: 'getMagnitude',
    value: function getMagnitude() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
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
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
__webpack_require__(61);
module.exports = __webpack_require__(105);


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var get = __webpack_require__(106);
module.exports = __webpack_require__(3).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(107);
var ITERATOR = __webpack_require__(11)('iterator');
var Iterators = __webpack_require__(23);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(41);
var TAG = __webpack_require__(11)('toStringTag');
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
/* 108 */,
/* 109 */
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
/* 110 */,
/* 111 */,
/* 112 */
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
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(118);

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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(119), __esModule: true };

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
__webpack_require__(120);
module.exports = __webpack_require__(3).Array.from;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(32);
var $export = __webpack_require__(7);
var toObject = __webpack_require__(35);
var call = __webpack_require__(121);
var isArrayIter = __webpack_require__(122);
var toLength = __webpack_require__(67);
var createProperty = __webpack_require__(123);
var getIterFn = __webpack_require__(106);

$export($export.S + $export.F * !__webpack_require__(124)(function (iter) { Array.from(iter); }), 'Array', {
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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(12);
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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(23);
var ITERATOR = __webpack_require__(11)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(4);
var createDesc = __webpack_require__(15);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(11)('iterator');
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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(52);

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
/* 126 */
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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(12);
var aFunction = __webpack_require__(52);
var SPECIES = __webpack_require__(11)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(32);
var invoke = __webpack_require__(140);
var html = __webpack_require__(69);
var cel = __webpack_require__(34);
var global = __webpack_require__(2);
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
  if (__webpack_require__(41)(process) == 'process') {
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
/* 129 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var isObject = __webpack_require__(9);
var newPromiseCapability = __webpack_require__(125);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(132);


/***/ }),
/* 132 */
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

module.exports = __webpack_require__(133);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(126)))

/***/ }),
/* 133 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(126)))

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(135);

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
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(136), __esModule: true };

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
__webpack_require__(61);
__webpack_require__(70);
__webpack_require__(137);
__webpack_require__(144);
__webpack_require__(145);
module.exports = __webpack_require__(3).Promise;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(22);
var global = __webpack_require__(2);
var ctx = __webpack_require__(32);
var classof = __webpack_require__(107);
var $export = __webpack_require__(7);
var isObject = __webpack_require__(9);
var aFunction = __webpack_require__(52);
var anInstance = __webpack_require__(138);
var forOf = __webpack_require__(139);
var speciesConstructor = __webpack_require__(127);
var task = __webpack_require__(128).set;
var microtask = __webpack_require__(141)();
var newPromiseCapabilityModule = __webpack_require__(125);
var perform = __webpack_require__(129);
var promiseResolve = __webpack_require__(130);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(11)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
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
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
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
  Internal.prototype = __webpack_require__(142)($Promise.prototype, {
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
__webpack_require__(27)($Promise, PROMISE);
__webpack_require__(143)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(124)(function (iter) {
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
/* 138 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(32);
var call = __webpack_require__(121);
var isArrayIter = __webpack_require__(122);
var anObject = __webpack_require__(12);
var toLength = __webpack_require__(67);
var getIterFn = __webpack_require__(106);
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
/* 140 */
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
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var macrotask = __webpack_require__(128).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(41)(process) == 'process';

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
    var promise = Promise.resolve();
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
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(8);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var core = __webpack_require__(3);
var dP = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(5);
var SPECIES = __webpack_require__(11)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(7);
var core = __webpack_require__(3);
var global = __webpack_require__(2);
var speciesConstructor = __webpack_require__(127);
var promiseResolve = __webpack_require__(130);

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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(7);
var newPromiseCapability = __webpack_require__(125);
var perform = __webpack_require__(129);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(58);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(84);

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

var _Vector = __webpack_require__(93);

var _Vector2 = _interopRequireDefault(_Vector);

var _SpaceShip = __webpack_require__(149);

var _SpaceShip2 = _interopRequireDefault(_SpaceShip);

var _Timelaps2 = __webpack_require__(150);

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
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(58);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(84);

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

var _Vector = __webpack_require__(93);

var _Vector2 = _interopRequireDefault(_Vector);

var _SpaceShip = __webpack_require__(149);

var _SpaceShip2 = _interopRequireDefault(_SpaceShip);

var _Timelaps2 = __webpack_require__(150);

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
/* 148 */,
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(58);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(84);

var _inherits3 = _interopRequireDefault(_inherits2);

var _TextBox = __webpack_require__(31);

var _TextBox2 = _interopRequireDefault(_TextBox);

var _Explotion = __webpack_require__(112);

var _Explotion2 = _interopRequireDefault(_Explotion);

var _Motion2 = __webpack_require__(160);

var _Motion3 = _interopRequireDefault(_Motion2);

var _BarChart = __webpack_require__(152);

var _BarChart2 = _interopRequireDefault(_BarChart);

var _Grid = __webpack_require__(109);

var _Grid2 = _interopRequireDefault(_Grid);

var _Circle = __webpack_require__(161);

var _Circle2 = _interopRequireDefault(_Circle);

var _Vector = __webpack_require__(93);

var _Vector2 = _interopRequireDefault(_Vector);

var _index = __webpack_require__(14);

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

    var _this = (0, _possibleConstructorReturn3.default)(this, (SpaceShip.__proto__ || (0, _getPrototypeOf2.default)(SpaceShip)).call(this, { ctx: ctx, canvas: canvas, speedUp: speedUp, mass: mass, x: x, y: y, maxVelocity: maxVelocity, maxForce: maxForce, angle: angle, id: id }));

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
    _this.info = new _TextBox2.default({ ctx: ctx, x: x, y: y, id: 'info', data: 'deg: ' + _this.position.direction + ', x: ' + _this.position.x + ', y: ' + _this.position.y });
    return _this;
  }

  (0, _createClass3.default)(SpaceShip, [{
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
      /*
      let { position, info, mass, angle, vectors, acceleration } = this;
      //  info.data = `deg: ${Math.floor(angle)}, x: ${Math.floor(position.x)}, y: ${Math.floor(position.y)}`;
      info.x = position.x;
      info.y = -position.y + 30;
      info.render();
      */
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
    key: 'landSteering',
    value: function landSteering(id, result, done) {
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
          var desired = segment;

          var _vectorSubtraction = (0, _index.vectorSubtraction)(desired, velocity),
              magnitude = _vectorSubtraction.magnitude,
              direction = _vectorSubtraction.direction;

          var steer = new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: magnitude, direction: -direction, display: true, color: 'green' });
          steer.limit(desired.getMagnitude() * maxForce);
          if (result) result(steer, desired);
        }
      }
    }
  }, {
    key: 'shouldEscape',
    value: function shouldEscape() {}
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

          var _vectorSubtraction2 = (0, _index.vectorSubtraction)(desired, velocity),
              magnitude = _vectorSubtraction2.magnitude,
              direction = _vectorSubtraction2.direction;

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

          var _vectorSubtraction3 = (0, _index.vectorSubtraction)(desired, velocity),
              magnitude = _vectorSubtraction3.magnitude,
              direction = _vectorSubtraction3.direction;

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
/* 150 */
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
    key: "play",
    value: function play(render) {
      var canvas = this.canvas,
          ctx = this.ctx;

      this.interval = 1000 / this.FPS;
      requestAnimationFrame(this.play.bind(this, render));
      this.now = Date.now();
      this.delta = this.now - this.then;
      if (this.delta > this.interval) {
        render();
      }
    }
  }]);
  return Timelaps;
}();

exports.default = Timelaps;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(58);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(84);

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

var _Vector = __webpack_require__(93);

var _Vector2 = _interopRequireDefault(_Vector);

var _SpaceShip = __webpack_require__(149);

var _SpaceShip2 = _interopRequireDefault(_SpaceShip);

var _Timelaps2 = __webpack_require__(150);

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

      force.set(value);
      show_bottom.innerHTML = 'Bottom force: ' + Math.floor(value);
    };

    _this.top_ctrl.onchange = function (e) {
      var force = _this.spaceship.forces[2];
      var value = e.target.value;

      force.set(value);
      show_top.innerHTML = 'Top force: ' + Math.floor(value);
    };

    _this.right_ctrl.onchange = function (e) {
      var force = _this.spaceship.forces[0];
      var value = e.target.value;

      force.set(value);
      show_right.innerHTML = 'Right force: ' + Math.floor(value);
    };

    _this.left_ctrl.onchange = function (e) {
      var force = _this.spaceship.forces[1];
      var value = e.target.value;

      force.set(value);
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
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(58);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(84);

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

var _Vector = __webpack_require__(93);

var _Vector2 = _interopRequireDefault(_Vector);

var _SpaceShip = __webpack_require__(149);

var _SpaceShip2 = _interopRequireDefault(_SpaceShip);

var _Timelaps2 = __webpack_require__(150);

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
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(117);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getIterator2 = __webpack_require__(103);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(58);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(84);

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

var _Vector = __webpack_require__(93);

var _Vector2 = _interopRequireDefault(_Vector);

var _Circle = __webpack_require__(161);

var _Circle2 = _interopRequireDefault(_Circle);

var _Timelaps2 = __webpack_require__(150);

var _Timelaps3 = _interopRequireDefault(_Timelaps2);

var _index = __webpack_require__(14);

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
          y = _ref2.y;
      var ctx = this.ctx,
          canvas = this.canvas,
          debug = this.debug,
          mouse = this.mouse,
          targets = this.targets;

      var point = new _Circle2.default({ stroke: true, ctx: ctx, canvas: canvas, x: x, y: y, size: 50, debug: debug, color: 'blue' });
      mouse.joinCircles(point);
      mouse.targets.push(point);
      targets.push(point);
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
/* 155 */,
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(157), __esModule: true };

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(158);
module.exports = __webpack_require__(3).Object.assign;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(7);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(159) });


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(25);
var gOPS = __webpack_require__(42);
var pIE = __webpack_require__(30);
var toObject = __webpack_require__(35);
var IObject = __webpack_require__(65);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(13)(function () {
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
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _assign = __webpack_require__(156);

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = __webpack_require__(103);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Vector = __webpack_require__(93);

var _Vector2 = _interopRequireDefault(_Vector);

var _index = __webpack_require__(14);

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

          this.move(force);
          force.translateX = position.x;
          force.translateY = position.y;
          if (debug) force.render();
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
    }
  }, {
    key: 'updateMotion',
    value: function updateMotion() {
      var targets = this.targets,
          segments = this.segments,
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
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(targets), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var target = _step2.value;

          this.joinCircles(target);
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
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(58);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(84);

var _inherits3 = _interopRequireDefault(_inherits2);

var _TextBox = __webpack_require__(31);

var _TextBox2 = _interopRequireDefault(_TextBox);

var _Vector = __webpack_require__(93);

var _Vector2 = _interopRequireDefault(_Vector);

var _Grid = __webpack_require__(109);

var _Grid2 = _interopRequireDefault(_Grid);

var _Motion2 = __webpack_require__(160);

var _Motion3 = _interopRequireDefault(_Motion2);

var _index = __webpack_require__(14);

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
        _ref$id = _ref.id,
        id = _ref$id === undefined ? physicsEngine.guid() : _ref$id,
        _ref$display = _ref.display,
        display = _ref$display === undefined ? true : _ref$display;
    (0, _classCallCheck3.default)(this, Circle);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Circle.__proto__ || (0, _getPrototypeOf2.default)(Circle)).call(this, { ctx: ctx, canvas: canvas, speedUp: speedUp, mass: mass, x: x, y: y, maxVelocity: maxVelocity, targets: targets }));

    _this.size = size;
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
          stroke = this.stroke;
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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(58);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(84);

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

var _SpaceShip = __webpack_require__(149);

var _SpaceShip2 = _interopRequireDefault(_SpaceShip);

var _Circle = __webpack_require__(161);

var _Circle2 = _interopRequireDefault(_Circle);

var _Timelaps2 = __webpack_require__(150);

var _Timelaps3 = _interopRequireDefault(_Timelaps2);

var _index = __webpack_require__(14);

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
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(58);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(84);

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

var _SpaceShip = __webpack_require__(149);

var _SpaceShip2 = _interopRequireDefault(_SpaceShip);

var _Circle = __webpack_require__(161);

var _Circle2 = _interopRequireDefault(_Circle);

var _Timelaps2 = __webpack_require__(150);

var _Timelaps3 = _interopRequireDefault(_Timelaps2);

var _index = __webpack_require__(14);

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
    _this.fps_ctrl.onchange = function (e) {
      _this.FPS = e.target.value;
      _this.show_fps.innerHTML = 'FPS: ' + _this.FPS;
    };
    _this.max_force_ctrl.onchange = function (e) {
      _this.spaceship.maxForce = e.target.value;
      _this.show_max_force.innerHTML = 'Max force: ' + e.target.value;
    };
    _this.max_velocity_ctrl.onchange = function (e) {
      _this.spaceship.maxVelocity = e.target.value;
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
        target.color = 'red';
        if (target.size > s) {
          s = target.size;
          smaller = index;
        }
      });
      if (targets.length) {
        targets[smaller].color = 'blue';
        var steer = spaceship.landSteering(targets[smaller].id, function (steer, desired) {
          spaceship.forces[0] = steer;
          spaceship.forces[1] = desired;
        }, function (segmentIndex, targetIndex) {
          spaceship.segments.splice(segmentIndex, 1);
          spaceship.targets.splice(targetIndex, 1);
          targets.splice(targetIndex, 1);
          spaceship.forces = [];
        });
      }

      /*
      let s = 0;
      let smaller;
      targets.forEach((target, index) => {
        target.debug = debug;
        if (target.size > s) {
          s = target.size;
          smaller = index;
        }
      });
       if (targets.length) {
        spaceship.steering(targets[smaller].id, (segmentIndex, targetIndex) => {
          //spaceship.segments.splice(segmentIndex, 1);
          //spaceship.targets.splice(targetIndex, 1);
          //targets.splice(targetIndex, 1);
        });
      }
      */
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
      var target = new _Circle2.default({ stroke: false, ctx: ctx, canvas: canvas, x: x, y: y, size: size, debug: debug, color: 'red' });
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

      this.spaceship = new _SpaceShip2.default({ ctx: ctx, mass: 24, canvas: canvas, maxForce: 0.6 });
      //this.generateTarget({ x: -100, y: -100 });
      canvas.addEventListener('mouseup', function (e) {
        var mousePos = (0, _index.getMousePos)(canvas, e);

        var _calcCartesiano = (0, _index.calcCartesiano)(mousePos.x, mousePos.y, canvas),
            x = _calcCartesiano.x,
            y = _calcCartesiano.y;

        var deg = (0, _index.coordinatesToDeg)(x, y);
        var mag = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        //this.targets[0].position.set(mag);
        //this.targets[0].position.direction = deg * Math.PI / 180;
        _this2.generateTarget({ x: x, y: y });
      });
    }
  }]);
  return Universe;
}(_Timelaps3.default);

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(103);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(58);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(84);

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

var _Explorer = __webpack_require__(166);

var _Explorer2 = _interopRequireDefault(_Explorer);

var _Hunter = __webpack_require__(165);

var _Hunter2 = _interopRequireDefault(_Hunter);

var _Circle = __webpack_require__(161);

var _Circle2 = _interopRequireDefault(_Circle);

var _Vector = __webpack_require__(93);

var _Vector2 = _interopRequireDefault(_Vector);

var _Timelaps2 = __webpack_require__(150);

var _Timelaps3 = _interopRequireDefault(_Timelaps2);

var _index = __webpack_require__(14);

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
        if (segment.getMagnitude() < record && Math.random() > 0.000000002) {
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
              nearer.color = 'blue';
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

      targets.forEach(function (target) {
        target.debug = debug;
        if (target.position.x > canvas.width / 2) target.position.x += -canvas.width;
        if (target.position.x < -canvas.width / 2) target.position.x += canvas.width;

        if (target.position.y > canvas.height / 2) target.position.y += -canvas.height;
        if (target.position.y < -canvas.height / 2) target.position.y += canvas.height;
      });
    }
  }, {
    key: 'generateTarget',
    value: function generateTarget(_ref2) {
      var x = _ref2.x,
          y = _ref2.y;
      var ctx = this.ctx,
          canvas = this.canvas,
          debug = this.debug,
          hunters = this.hunters,
          targets = this.targets;

      for (var i = 0; i < 100; i++) {
        var direction = i * 10;
        var magnitude = 15;
        var dx = x + Math.round(magnitude * Math.cos(direction)) + Math.random();
        var dy = y + Math.round(magnitude * Math.sin(direction)) + Math.random() * (i * 10);
        var angle = 0; //coordinatesToDeg(dx - x, dy - y);
        var initForce = new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: 150, direction: 0 /*angle*/ });
        initForce.run = false;
        var forces = [initForce];
        var target = new _Explorer2.default({ forces: forces, color: 'white', angle: angle, mass: 50, speedUp: true, canvas: canvas, ctx: ctx, debug: debug, x: dx, y: dy, width: 15, height: 15, maxForce: 0.6, maxVelocity: 4 });
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

      this.hunters = [new _Hunter2.default({ ctx: ctx, debug: debug, size: 20, speedUp: true, mass: 100, color: 'yellow', canvas: canvas, width: 25, height: 25, maxForce: 0.1, maxVelocity: 10 })];
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
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(58);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(84);

var _inherits3 = _interopRequireDefault(_inherits2);

var _TextBox = __webpack_require__(31);

var _TextBox2 = _interopRequireDefault(_TextBox);

var _Explotion = __webpack_require__(112);

var _Explotion2 = _interopRequireDefault(_Explotion);

var _Motion = __webpack_require__(160);

var _Motion2 = _interopRequireDefault(_Motion);

var _BarChart = __webpack_require__(152);

var _BarChart2 = _interopRequireDefault(_BarChart);

var _Grid = __webpack_require__(109);

var _Grid2 = _interopRequireDefault(_Grid);

var _Circle = __webpack_require__(161);

var _Circle2 = _interopRequireDefault(_Circle);

var _Vector = __webpack_require__(93);

var _Vector2 = _interopRequireDefault(_Vector);

var _SpaceShip2 = __webpack_require__(149);

var _SpaceShip3 = _interopRequireDefault(_SpaceShip2);

var _index = __webpack_require__(14);

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
          desired.render();
          desired.mult(3);

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
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(58);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(84);

var _inherits3 = _interopRequireDefault(_inherits2);

var _TextBox = __webpack_require__(31);

var _TextBox2 = _interopRequireDefault(_TextBox);

var _Explotion = __webpack_require__(112);

var _Explotion2 = _interopRequireDefault(_Explotion);

var _Motion = __webpack_require__(160);

var _Motion2 = _interopRequireDefault(_Motion);

var _BarChart = __webpack_require__(152);

var _BarChart2 = _interopRequireDefault(_BarChart);

var _Grid = __webpack_require__(109);

var _Grid2 = _interopRequireDefault(_Grid);

var _Circle = __webpack_require__(161);

var _Circle2 = _interopRequireDefault(_Circle);

var _Vector = __webpack_require__(93);

var _Vector2 = _interopRequireDefault(_Vector);

var _SpaceShip2 = __webpack_require__(149);

var _SpaceShip3 = _interopRequireDefault(_SpaceShip2);

var _index = __webpack_require__(14);

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

    var magnitude = size * 5;
    var direction = _this.angle;
    _this.virtualView = new _Vector2.default({ ctx: ctx, color: 'white', canvas: canvas, magnitude: magnitude, direction: direction, translateX: position.x, translateY: position.y });
    var sum = (0, _index.vectorAddition)(position, _this.virtualView);
    _this.rangeView = new _Circle2.default({ ctx: ctx, debug: debug, color: 'orange', stroke: true, size: size * 10, canvas: canvas, x: sum.x, y: sum.y });
    _this.hunters = hunters;
    _this.wave = 0;
    _this.f = (0, _index.getRandomInt)(1, 10) * 0.01;
    return _this;
  }

  (0, _createClass3.default)(Explorer, [{
    key: 'moveSenoidal',
    value: function moveSenoidal() {
      var position = this.position;

      var frec = 1.05;
      position.y += Math.cos(this.wave) * frec;
      position.x += Math.cos(this.wave) * frec;
      this.wave += this.f; // 0.05;
    }
  }, {
    key: 'runAway',
    value: function runAway(hunter) {
      var ctx = this.ctx,
          canvas = this.canvas,
          rangeView = this.rangeView,
          maxForce = this.maxForce;

      var _vectorAddition = (0, _index.vectorAddition)(hunter.position, this.position),
          x = _vectorAddition.x,
          y = _vectorAddition.y;

      var _vectorSubtraction = (0, _index.vectorSubtraction)(hunter.position, this.position),
          magnitude = _vectorSubtraction.magnitude;

      magnitude *= 1.5;
      //console.log(this.position.direction)
      var escape = new _Vector2.default({ ctx: ctx, canvas: canvas, direction: -(this.angle / Math.PI * 180), magnitude: magnitude });
      var desired = escape;
      var calc = (0, _index.vectorSubtraction)(desired, this.velocity);
      var direction = (0, _index.coordinatesToDeg)(x, y);
      //console.log('x: ', x, ' y:', y);
      var steer = new _Vector2.default({ ctx: ctx, canvas: canvas, magnitude: calc.magnitude, direction: direction, color: 'green' });
      steer.limit(escape.getMagnitude() * 0.5);
      escape.run = true;
      steer.run = true;
      this.forces[1] = escape;
      this.forces[2] = steer;
      var a = (0, _index.vectorAddition)(escape, steer);
      this.angle = (0, _index.coordinatesToDeg)(a.x, a.y) * Math.PI / 180; //* 0.5;
      var m = Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2));
      this.forces[0].setDirection(Math.round(m * Math.cos(this.angle)), Math.round(m * Math.sin(this.angle)));
    }
  }, {
    key: 'setSafeMove',
    value: function setSafeMove() {
      this.forces = this.forces.map(function (force, index) {
        if (force.run) force.setMagnitude(force.getMagnitude() * 0.01);
        return force;
      }).filter(function (force) {
        return Math.floor(force.getMagnitude()) !== 0;
      });
    }
  }, {
    key: 'updateMotion',
    value: function updateMotion() {
      var targets = this.targets,
          segments = this.segments,
          hunters = this.hunters,
          rangeView = this.rangeView,
          size = this.size,
          debug = this.debug,
          virtualView = this.virtualView,
          position = this.position,
          forces = this.forces;

      this.moveSenoidal();
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

      var _vectorAddition2 = (0, _index.vectorAddition)(position, virtualView),
          x = _vectorAddition2.x,
          y = _vectorAddition2.y;

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

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map