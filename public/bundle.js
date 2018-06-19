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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
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
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(48);

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

var global = __webpack_require__(1);
var core = __webpack_require__(2);
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
var createDesc = __webpack_require__(14);
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
var IObject = __webpack_require__(64);
var defined = __webpack_require__(18);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(20)('wks');
var uid = __webpack_require__(15);
var Symbol = __webpack_require__(1).Symbol;
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
/* 15 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var calcCenter = exports.calcCenter = function calcCenter(container, item) {
  var x = container.x + container.width / 2 - item.width / 2;
  var y = container.y + container.height / 2 - item.height / 2;
  return { y: y, x: x };
};

var isCollide = exports.isCollide = function isCollide() {
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
    return overLapX && overLapY;
  }
};

var touchEvents = exports.touchEvents = function touchEvents(DOMelement) {
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

var everyFrame = exports.everyFrame = function everyFrame(data, cb) {
  var delta = Date.now() - data.initialTime;
  //console.log('delta  ', delta)
  if (delta >= data.futureTime) {
    cb(data);
    data.initialTime = Date.now();
  }
};

var clear = exports.clear = function clear(canvas) {
  return canvas.width = canvas.width;
};

var hover = exports.hover = function hover() {
  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var cb = arguments[1];

  element.addEventListener('mousemove', function (e) {
    var data = element.getBoundingClientRect();
    var x = e.clientX - data.x;
    var y = e.clientY - data.y;
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    cb({ x: x, y: y });
  });
};

var getRandomInt = exports.getRandomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
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
var uid = __webpack_require__(15);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
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
var dPs = __webpack_require__(63);
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
  __webpack_require__(68).appendChild(iframe);
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

var global = __webpack_require__(1);
var core = __webpack_require__(2);
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

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextBox = function () {
  function TextBox(ctx, x, y) {
    var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var font = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '12px arial';
    var display = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var id = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
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
      this.rendered = false;
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
      this.rendered = true;
    }
  }]);
  return TextBox;
}();

exports.default = TextBox;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(51);
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
var document = __webpack_require__(1).document;
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

var _iterator = __webpack_require__(58);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(73);

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
var $iterCreate = __webpack_require__(62);
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
var arrayIndexOf = __webpack_require__(65)(false);
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
var createDesc = __webpack_require__(14);
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _TextBox = __webpack_require__(31);

var _TextBox2 = _interopRequireDefault(_TextBox);

var _Explotion = __webpack_require__(91);

var _Explotion2 = _interopRequireDefault(_Explotion);

var _Vector = __webpack_require__(102);

var _Vector2 = _interopRequireDefault(_Vector);

var _index = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Shoot = document.getElementById('shoot');
var now = Date.now();

var SpaceShip = function () {
  function SpaceShip(_ref) {
    var ctx = _ref.ctx,
        width = _ref.width,
        height = _ref.height,
        x = _ref.x,
        y = _ref.y,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? 'white' : _ref$color,
        id = _ref.id;
    (0, _classCallCheck3.default)(this, SpaceShip);

    this.width = width;
    this.height = height;
    this.prevX = x;
    this.prevY = y;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.color = color;
    this.id = id;
    this.bound = false;
    this.momentum = 100;
    this.angle = 0;
    this.dtAngle = 0;
    this.translateOnce = false;
    //this.info = new TextBox(ctx, x, y, 'deg: 0, x:0, y:0', '12px arial', true, id = 'info');
    this.vector = new _Vector2.default({ ctx: ctx, x: 0, y: 0, magnitude: -45, direction: 0 });
  }

  (0, _createClass3.default)(SpaceShip, [{
    key: 'drawShip',
    value: function drawShip() {
      var angle = this.angle,
          width = this.width,
          height = this.height,
          x = this.x,
          y = this.y,
          ctx = this.ctx,
          color = this.color,
          _viewRange = this.viewRange,
          viewRange = _viewRange === undefined ? 80 : _viewRange,
          _viewAmplitude = this.viewAmplitude,
          viewAmplitude = _viewAmplitude === undefined ? 50 : _viewAmplitude;


      ctx.save(); //save angle
      ctx.translate(x + width / 2, y + height / 2);
      if (this.angle) {
        if (this.dtAngle <= this.angle) this.dtAngle += 4;
        if (this.dtAngle >= this.angle) this.dtAngle -= 4;
        ctx.rotate(this.dtAngle * Math.PI / 180);
      }
      /*
      let dt = Date.now() - now;
      if(dt >= 1000) {
        //console.log("segundo")
        now = Date.now();
      }
      */

      //ctx.beginPath();
      //ctx.fillStyle = 'blue';
      //ctx.fillRect(0, 0, 100, 100);
      //ctx.closePath();

      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.fillRect(-(width / 2), -(height / 2), width, height);
      ctx.closePath(); //ship    

      ctx.beginPath();
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 1;
      ctx.arc(0, 0, width * 1.5, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath(); //arc bound 

      /* 
      ctx.beginPath();    
      ctx.moveTo(0, 0);
      ctx.lineTo(viewAmplitude, -viewRange);
      ctx.moveTo(0, 0);
      ctx.lineTo(-viewAmplitude, -viewRange);
      ctx.strokeStyle = 'white';
      ctx.stroke();
      ctx.closePath();
      */
      if (this.bound) {
        //this.angle++
        //ctx.translate(x+(width/2), y+(height/2));
        //ctx.rotate(this.angle * Math.PI / 180);
      }

      if (this.bound) {
        if (this.prevX < this.x) this.x += this.momentum / 100;
        if (this.prevX > this.x) this.x -= this.momentum / 100;
        if (this.prevY < this.y) this.y += this.momentum / 100;
        if (this.prevY > this.y) this.y -= this.momentum / 100;
        this.momentum -= 1;
      }
      if (this.momentum <= 0) {
        this.bound = false;
        this.momentum = 100;
        //this.angle = 0;
        this.prevX = this.x;
        this.prevY = this.y;
      }
      this.translateOnce = true;
      this.vector.render();
      ctx.restore(); //restore angle
      /*
      this.info.x = this.x+(this.width/2);
      this.info.y = this.y+(this.height);  
      this.info.data = `deg: ${ Math.floor(this.dtAngle) }, x: ${ Math.floor(this.x) }, y: ${ Math.floor(this.y) }`;           
      this.info.render(); 
      */
    }
  }, {
    key: 'render',
    value: function render() {
      var width = this.width,
          height = this.height,
          x = this.x,
          y = this.y,
          ctx = this.ctx,
          color = this.color;

      this.drawShip();
    }
  }]);
  return SpaceShip;
}();

exports.default = SpaceShip;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
module.exports = __webpack_require__(95);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Defender = __webpack_require__(52);

var _Defender2 = _interopRequireDefault(_Defender);

var _Stage = __webpack_require__(92);

var _Stage2 = _interopRequireDefault(_Stage);

var _Controls = __webpack_require__(93);

var _Controls2 = _interopRequireDefault(_Controls);

var _SpaceShip = __webpack_require__(45);

var _SpaceShip2 = _interopRequireDefault(_SpaceShip);

var _Spot = __webpack_require__(94);

var _Spot2 = _interopRequireDefault(_Spot);

var _index = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var intViewportWidth = window.innerWidth;
var intViewportHeight = window.innerHeight;
var canvas = document.getElementById('lienzo');
var canvasHeight = canvas.height = intViewportHeight;
var canvasWidth = canvas.width = intViewportWidth;
var ctx = canvas.getContext('2d');
var clock = { initialTime: Date.now(), x: 0, y: 0 };

var Universe = function () {
  function Universe() {
    (0, _classCallCheck3.default)(this, Universe);

    this.FPS = 1000 / 60;
  }

  (0, _createClass3.default)(Universe, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var game = setInterval(function () {
        (0, _index.clear)(canvas);
        ctx.save();
        ctx.beginPath();
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        ctx.translate(x, y);
        //ctx.rotate(180 * Math.PI / 180);
        //ctx.scale(-1, 1);
        _this.drawCroos();
        _this.update();
        ctx.closePath();
        ctx.restore();
      }, this.FPS);
    }
  }, {
    key: 'drawVerticalSpot',
    value: function drawVerticalSpot() {
      var height = canvas.height / 2;
      var padding = 15;
      var total = Math.floor(height / padding);

      for (var i = 0; i < total; i++) {
        var width = -(canvas.height / 2) + i * padding;
        ctx.fillStyle = 'white';
        ctx.moveTo(0, width);
        ctx.lineTo(padding, width);
        ctx.font = '10px arial';
        ctx.fillText('' + (total - i), padding + 5, width + 5);
      }

      for (var _i = 1; _i < total; _i++) {
        var _width = _i * padding;
        ctx.fillStyle = 'red';
        ctx.moveTo(0, _width);
        ctx.lineTo(padding, _width);
        ctx.font = '10px arial';
        ctx.fillText('' + -_i, padding + 5, _width + 5);
      }
    }
  }, {
    key: 'drawHorizontalSpot',
    value: function drawHorizontalSpot() {
      var width = canvas.width / 2;
      var padding = 15;
      var total = Math.floor(width / padding);

      for (var i = 1; i < total; i++) {
        var wd = -(canvas.width / 2) + i * padding;
        ctx.fillStyle = 'red';
        ctx.moveTo(wd, 0);
        ctx.lineTo(wd, padding);
        ctx.font = '10px arial';
        ctx.fillText('' + -(total - i), wd - 4, padding + 12);
      }

      for (var _i2 = 1; _i2 < total; _i2++) {
        var _wd = _i2 * padding;
        ctx.fillStyle = 'white';
        ctx.moveTo(_wd, 0);
        ctx.lineTo(_wd, -padding);
        ctx.font = '10px arial';
        ctx.fillText('' + _i2, _wd + 5, -padding);
      }
    }
  }, {
    key: 'drawCroos',
    value: function drawCroos() {
      ctx.strokeStyle = 'white';
      ctx.moveTo(0, -(canvas.height / 2));
      ctx.lineTo(0, canvas.height / 2);
      //this.drawVerticalSpot();
      ctx.moveTo(-(canvas.width / 2), 0);
      ctx.lineTo(canvas.width / 2, 0);
      //this.drawHorizontalSpot();
      ctx.stroke();
    }
  }, {
    key: 'update',
    value: function update() {
      var width = canvas.width * 0.9;
      var height = canvas.height * 0.9;
      canvas.x = 0;
      canvas.y = 0;
      var center = (0, _index.calcCenter)(canvas, { height: height, width: width });
      var x = -(canvas.width / 2) + center.x;
      var y = -canvas.height / 2 + center.y;
      clock.futureTime = 1000;
      (0, _index.everyFrame)(clock, function () {
        //console.log("Done")
      });

      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = 'red';
      ctx.strokeRect(x, y, width, height);
      ctx.rect(x, y, width, height);
      ctx.clip();
      this.stage.render();
      ctx.closePath();
      ctx.restore();
      //this.controls.render();
    }
  }, {
    key: 'moveEvent',
    value: function moveEvent(handler) {
      var momentumX = handler.x - handler.pivot.x;
      var momentumY = handler.y - handler.pivot.y;
      var nav = this.stage.find('nav');
      nav.prevX = nav.x;
      nav.x += momentumX / 10;
      nav.y += momentumY / 10;
      nav.bound = true;
    }
  }, {
    key: 'updateAngle',
    value: function updateAngle(clientX, clientY) {
      var _calcCartesiano = this.calcCartesiano(clientX, clientY),
          x = _calcCartesiano.x,
          y = _calcCartesiano.y;

      var nav = this.stage.find('nav');
      //let info = this.stage.find('info');     
      var deg = this.coordidatesToDeg(x, y);
      //let message = `deg: ${ Math.floor(deg) }, x: ${ x }, y: ${ y }`;
      //info.data = message;
      nav.angle = deg;
    }
  }, {
    key: 'moveVectorNav',
    value: function moveVectorNav() {
      var deg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var nav = this.stage.find('nav');
      nav.vector.direction = deg;
    }
  }, {
    key: 'getMousePos',
    value: function getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    }
  }, {
    key: 'calcCartesiano',
    value: function calcCartesiano(candidateX, candidateY) {
      var x = candidateX - canvas.width / 2;
      //console.log(x)
      var y = canvas.height / 2 - candidateY;
      return { x: x, y: y };
    }
  }, {
    key: 'coordidatesToDeg',
    value: function coordidatesToDeg(x, y) {
      var rad = Math.atan2(x, y);
      var deg = rad * (180 / Math.PI);
      return deg;
    }
  }, {
    key: 'markSpot',
    value: function markSpot(e) {
      if (e.targetTouches) {
        var _e$targetTouches$ = e.targetTouches[0],
            clientX = _e$targetTouches$.clientX,
            clientY = _e$targetTouches$.clientY;

        this.addSpot(clientX, clientY);
        this.updateAngle(clientX, clientY);
      } else {
        var _getMousePos = this.getMousePos(canvas, e),
            x = _getMousePos.x,
            y = _getMousePos.y;

        this.addSpot(x, y);
        this.updateAngle(x, y);
      }
    }
  }, {
    key: 'preload',
    value: function preload() {
      var _this2 = this;

      this.stage = new _Stage2.default(canvas, true);
      var nav = new _SpaceShip2.default({
        width: 25,
        height: 25,
        x: 0,
        y: 0,
        ctx: ctx,
        color: 'white',
        id: 'nav'
      });
      this.stage.push(nav);

      var onMove = this.moveEvent.bind(this);
      canvas.addEventListener('mousemove', function (e) {
        var mousePos = _this2.getMousePos(canvas, e);

        var _calcCartesiano2 = _this2.calcCartesiano(mousePos.x, mousePos.y),
            x = _calcCartesiano2.x,
            y = _calcCartesiano2.y;
        //console.log(-x, ' ', y);
        //let info = this.stage.find('info');
        //info.data = `deg: 0, x: ${Math.floor(-x/15)}, y: ${Math.floor(y/15)}`;  
        //console.log(calc) 


        var deg = _this2.coordidatesToDeg(x, y);
        //console.log(deg)

        var magnitude = _this2.stage.find('nav').vector.magnitude;

        _this2.moveVectorNav(deg / -magnitude);
      });
      /*    
      this.controls = new Controls({stage: this.stage, canvas, onMove}, true);
      canvas.addEventListener("touchstart", this.markSpot.bind(this));
      //canvas.addEventListener("mouseup", this.markSpot.bind(this));
      */
    }
  }, {
    key: 'addSpot',
    value: function addSpot(x, y) {
      var spot = new _Spot2.default({ x: x, y: y, ctx: ctx, display: true, size: 10 });
      this.stage.layers.push(spot);
    }
  }]);
  return Universe;
}();

var space = new Universe();
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

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(49), __esModule: true };

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(53);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(57);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

var _TextBox = __webpack_require__(31);

var _TextBox2 = _interopRequireDefault(_TextBox);

var _SpaceShip2 = __webpack_require__(45);

var _SpaceShip3 = _interopRequireDefault(_SpaceShip2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Defender = function (_SpaceShip) {
  (0, _inherits3.default)(Defender, _SpaceShip);

  function Defender(ctx, width, height, x, y, color) {
    var elements = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];
    var viewport = arguments[7];
    var skin = arguments[8];
    (0, _classCallCheck3.default)(this, Defender);
    return (0, _possibleConstructorReturn3.default)(this, (Defender.__proto__ || (0, _getPrototypeOf2.default)(Defender)).call(this, ctx, width, height, x, y, 'green', elements = [], viewport, 'defender', skin));
  }

  return Defender;
}(_SpaceShip3.default);

exports.default = Defender;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
module.exports = __webpack_require__(2).Object.getPrototypeOf;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(35);
var $getPrototypeOf = __webpack_require__(36);

__webpack_require__(56)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(7);
var core = __webpack_require__(2);
var fails = __webpack_require__(13);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 57 */
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
__webpack_require__(69);
module.exports = __webpack_require__(28).f('iterator');


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(61)(true);

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
/* 61 */
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(24);
var descriptor = __webpack_require__(14);
var setToStringTag = __webpack_require__(27);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(8)(IteratorPrototype, __webpack_require__(11)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 63 */
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(41);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10);
var toLength = __webpack_require__(66);
var toAbsoluteIndex = __webpack_require__(67);
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(21);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
var global = __webpack_require__(1);
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(71);
var step = __webpack_require__(72);
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
/* 71 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
__webpack_require__(80);
__webpack_require__(81);
__webpack_require__(82);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(5);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(39);
var META = __webpack_require__(76).KEY;
var $fails = __webpack_require__(13);
var shared = __webpack_require__(20);
var setToStringTag = __webpack_require__(27);
var uid = __webpack_require__(15);
var wks = __webpack_require__(11);
var wksExt = __webpack_require__(28);
var wksDefine = __webpack_require__(29);
var enumKeys = __webpack_require__(77);
var isArray = __webpack_require__(78);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(9);
var toIObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(17);
var createDesc = __webpack_require__(14);
var _create = __webpack_require__(24);
var gOPNExt = __webpack_require__(79);
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(15)('meta');
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
/* 77 */
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(41);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 79 */
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
/* 80 */
/***/ (function(module, exports) {



/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('asyncIterator');


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('observable');


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(84);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(88);

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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(86);
module.exports = __webpack_require__(2).Object.setPrototypeOf;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(7);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(87).set });


/***/ }),
/* 87 */
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
var $Object = __webpack_require__(2).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(24) });


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _index = __webpack_require__(16);

var _TextBox = __webpack_require__(31);

var _TextBox2 = _interopRequireDefault(_TextBox);

var _Mask = __webpack_require__(96);

var _Mask2 = _interopRequireDefault(_Mask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scale = 0.8;

var Stage = function () {
  function Stage(canvas) {
    var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    (0, _classCallCheck3.default)(this, Stage);
    var width = canvas.width,
        height = canvas.height,
        _canvas$x = canvas.x,
        x = _canvas$x === undefined ? 0 : _canvas$x,
        _canvas$y = canvas.y,
        y = _canvas$y === undefined ? 0 : _canvas$y;

    this.ctx = canvas.getContext('2d');
    var ctx = this.ctx;
    this.width = width;
    this.height = height * scale;
    this.debug = debug;
    var calc = (0, _index.calcCenter)({ width: width, height: height, x: x, y: y }, { width: this.width, height: this.height });
    this.x = calc.x;
    this.y = 0;
    this.layers = [
      //new TextBox(ctx, 10, 20, 'deg: 0, x: 0, y: 0', '12px arial', true, 'info'),
      //new Mask({ctx, canvas})
    ];
  }

  (0, _createClass3.default)(Stage, [{
    key: 'push',
    value: function push(layer) {
      this.layers.push(layer);
    }
  }, {
    key: 'find',
    value: function find() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      return this.layers.find(function (item) {
        return item.id === id;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var midlewares = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var ctx = this.ctx,
          x = this.x,
          y = this.y,
          width = this.width,
          height = this.height,
          layers = this.layers,
          debug = this.debug;

      layers.forEach(function (layer, index, entire) {
        midlewares.forEach(function (midleware) {
          return midleware(layer, index, entire);
        });
        layer.render();
      });
      if (debug) {
        /*
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.rect(x, y, width, height);
        ctx.stroke();
        ctx.closePath();
        */
      }
    }
  }]);
  return Stage;
}();

exports.default = Stage;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _index = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Controls = function () {
  function Controls(_ref) {
    var stage = _ref.stage,
        canvas = _ref.canvas,
        onMove = _ref.onMove;
    var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    (0, _classCallCheck3.default)(this, Controls);

    this.debug = debug;
    this.onMove = onMove;
    this.ctx = canvas.getContext('2d');
    this.x = stage.x;
    this.y = stage.y + stage.height;
    this.width = stage.width;
    this.height = 80;
    this.events(canvas);
    this.xCenter = this.width / 2;
    this.yCenter = this.height / 2;
    this.handle = {
      color: 'white',
      x: this.x + this.xCenter / 2,
      y: this.y + this.yCenter,
      right: 0,
      pivot: {
        x: this.x + this.xCenter / 2,
        y: this.y + this.yCenter,
        bound: 60
      },
      hang: false,
      r: 25
    };
  }

  (0, _createClass3.default)(Controls, [{
    key: 'checkHangHandle',
    value: function checkHangHandle(e) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var handle = this.handle,
          ctx = this.ctx;

      var r = 40,
          x = void 0,
          y = void 0;
      if (type === 'end') {
        handle.hang = false;
        return;
      }
      if (type === 'start' || type === 'move') {
        x = e.clientX;
        y = e.clientY;
      }
      if (type === 'move' && handle.hang) {
        var _boundX = x > handle.pivot.x + handle.pivot.bound || x < handle.pivot.x - handle.pivot.bound;
        var _boundY = y < handle.pivot.y - handle.pivot.bound || y > handle.pivot.y + handle.pivot.bound;
        if (_boundY || _boundX) {
          return;
          handle.hang = false;
        }
        handle.x = x;
        handle.y = y;
        //console.log(handle.x - handle.pivot.x);
        return;
      }
      var boundX = x > handle.pivot.x + handle.pivot.bound || x < handle.pivot.x - handle.pivot.bound;
      var boundY = y < handle.pivot.y - handle.pivot.bound || y > handle.pivot.y + handle.pivot.bound;
      if (boundY || boundX) {
        return;
        handle.hang = false;
      }

      var overlap = (0, _index.isCollide)('circle', { x: x, y: y, r: r }, handle);
      if (overlap) {
        handle.x = x;
        handle.y = y;
      }
      handle.hang = overlap;
    }
  }, {
    key: 'events',
    value: function events(canvas) {
      var _this = this;

      canvas.addEventListener('mousedown', function (e) {
        _this.handle.handle = true;
        _this.checkHangHandle(e, 'start');
      });

      canvas.addEventListener('touchstart', function (e) {
        _this.checkHangHandle(e.targetTouches[0], 'start');
      });

      canvas.addEventListener('touchmove', function (e) {
        return _this.checkHangHandle(e.targetTouches[0], 'move');
      });
      canvas.addEventListener('mousemove', function (e) {
        return _this.handle.handle ? _this.checkHangHandle(e, 'move') : null;
      });

      canvas.addEventListener('touchend', function (e) {
        return _this.checkHangHandle(null, 'end');
      });
      canvas.addEventListener('mouseup', function (e) {
        _this.handle.handle = false;
        _this.checkHangHandle(null, 'end');
      });
      //touchEvents(canvas, 'drag', this.checkHangHandle.bind(this))
    }
  }, {
    key: 'joystick',
    value: function joystick() {
      var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var debug = this.debug,
          ctx = this.ctx,
          width = this.width,
          height = this.height,
          x = this.x,
          y = this.y,
          xCenter = this.xCenter,
          yCenter = this.yCenter,
          handle = this.handle;

      var r = height / 2;
      ctx.beginPath();
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 5;
      ctx.arc(x + xCenter / 2, y + yCenter, handle.pivot.bound, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath(); //arc bound            

      ctx.beginPath();
      ctx.save();
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 8;
      ctx.lineCap = 'round';
      ctx.lineTo(handle.pivot.x, handle.pivot.y);
      ctx.lineTo(handle.x, handle.y);
      ctx.stroke();
      ctx.restore();
      ctx.closePath(); //arc line join

      ctx.beginPath();
      ctx.arc(handle.x, handle.y, handle.r, 0, 2 * Math.PI);
      /*
      if(handle.hang) {
        handle.color = 'red';
      } else {
        handle.color = 'white';
      }
      */
      ctx.fillStyle = handle.color;
      ctx.fill();
      ctx.closePath(); //arc handle
    }
  }, {
    key: 'render',
    value: function render() {
      var debug = this.debug,
          ctx = this.ctx,
          width = this.width,
          height = this.height,
          x = this.x,
          y = this.y,
          handle = this.handle;

      if (debug) {
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.strokeRect(x, y, width, height);
        ctx.closePath();
      }
      this.joystick();
      if (handle.hang) this.onMove.bind(this)(handle);
      // handle.angle += 0.51;
    }
  }]);
  return Controls;
}();

exports.default = Controls;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spot = function () {
  function Spot(_ref) {
    var ctx = _ref.ctx,
        x = _ref.x,
        y = _ref.y,
        size = _ref.size,
        color = _ref.color,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? '' : _ref$id,
        display = _ref.display;
    (0, _classCallCheck3.default)(this, Spot);

    this.ctx = ctx;
    this.size = size;
    this.x = x;
    this.y = y;
    this.id = id;
    this.color = color;
    this.display = display;
  }

  (0, _createClass3.default)(Spot, [{
    key: 'render',
    value: function render() {
      var ctx = this.ctx,
          x = this.x,
          y = this.y,
          _color = this.color,
          color = _color === undefined ? 'green' : _color,
          display = this.display,
          _size = this.size,
          size = _size === undefined ? 25 : _size;

      if (display) {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
      }
    }
  }]);
  return Spot;
}();

exports.default = Spot;

/***/ }),
/* 95 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _index = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mask = function () {
  function Mask(_ref) {
    var ctx = _ref.ctx,
        canvas = _ref.canvas;
    (0, _classCallCheck3.default)(this, Mask);

    this.ctx = ctx;
    this.canvas = canvas;
    this.canvas.x = 0;
    this.canvas.y = 0;
  }

  (0, _createClass3.default)(Mask, [{
    key: 'render',
    value: function render() {
      var ctx = this.ctx;
      var height = 300;
      var width = 100;

      var _calcCenter = (0, _index.calcCenter)(this.canvas, { height: height, width: width }),
          x = _calcCenter.x,
          y = _calcCenter.y;

      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = 'red';
      ctx.fillRect(x, y, width, height);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
  }]);
  return Mask;
}();

exports.default = Mask;

/***/ }),
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vector = function () {
  function Vector(_ref) {
    var ctx = _ref.ctx,
        x = _ref.x,
        y = _ref.y,
        magnitude = _ref.magnitude,
        _ref$direction = _ref.direction,
        direction = _ref$direction === undefined ? 0 : _ref$direction;
    (0, _classCallCheck3.default)(this, Vector);

    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.magnitude = magnitude;
    this.direction = direction;
  }

  (0, _createClass3.default)(Vector, [{
    key: 'drawHead',
    value: function drawHead() {
      var ctx = this.ctx,
          magnitude = this.magnitude,
          direction = this.direction,
          x = this.x,
          y = this.y;

      ctx.fillStyle = 'red';
      var size = 5;
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.lineTo(x - size, y + magnitude);
      ctx.lineTo(x + size, y + magnitude);
      ctx.lineTo(x, y + magnitude - size * 2); //right close 
      ctx.lineTo(x - size, y + magnitude); //left close
      ctx.fill();
      ctx.closePath();
    }
  }, {
    key: 'render',
    value: function render() {
      var ctx = this.ctx,
          magnitude = this.magnitude,
          direction = this.direction,
          x = this.x,
          y = this.y;

      ctx.save();
      ctx.beginPath();
      ctx.rotate(direction);
      ctx.lineTo(x, y);
      ctx.lineTo(x, y + magnitude);
      ctx.strokeStyle = 'red';
      ctx.lineCap = "round";
      ctx.lineWidth = 2;
      ctx.stroke();
      this.drawHead();
      ctx.closePath();
      ctx.restore();
    }
  }]);
  return Vector;
}();

exports.default = Vector;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map