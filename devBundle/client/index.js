(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/publisher-subscriber-pattern/dist/_types.js":
/*!******************************************************************!*\
  !*** ./node_modules/publisher-subscriber-pattern/dist/_types.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidEmitter = void 0;
// EventCallback is generic, thus generic type of Event can be used (e.g. type React.Events )
;

var isValidEmitter = function isValidEmitter(emitterInstance, addListenerMethodName, removeListenerMethodName) {
  return addListenerMethodName in emitterInstance && removeListenerMethodName in emitterInstance && typeof emitterInstance[addListenerMethodName] === 'function' && typeof emitterInstance[removeListenerMethodName] === 'function';
};

exports.isValidEmitter = isValidEmitter;

/***/ }),

/***/ "./node_modules/publisher-subscriber-pattern/dist/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/publisher-subscriber-pattern/dist/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Publisher", {
  enumerable: true,
  get: function get() {
    return _publisher.Publisher;
  }
});
Object.defineProperty(exports, "EmitterInstance", {
  enumerable: true,
  get: function get() {
    return _types.EmitterInstance;
  }
});
Object.defineProperty(exports, "EventCallback", {
  enumerable: true,
  get: function get() {
    return _types.EventCallback;
  }
});
Object.defineProperty(exports, "PublisherProps", {
  enumerable: true,
  get: function get() {
    return _types.PublisherProps;
  }
});
Object.defineProperty(exports, "UnsubscribeFunction", {
  enumerable: true,
  get: function get() {
    return _types.UnsubscribeFunction;
  }
});

var _publisher = __webpack_require__(/*! ./publisher */ "./node_modules/publisher-subscriber-pattern/dist/publisher.js");

var _types = __webpack_require__(/*! ./_types */ "./node_modules/publisher-subscriber-pattern/dist/_types.js");

/***/ }),

/***/ "./node_modules/publisher-subscriber-pattern/dist/publisher.js":
/*!*********************************************************************!*\
  !*** ./node_modules/publisher-subscriber-pattern/dist/publisher.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Publisher = void 0;

var _types = __webpack_require__(/*! ./_types */ "./node_modules/publisher-subscriber-pattern/dist/_types.js");

var _subscriber = __webpack_require__(/*! ./subscriber */ "./node_modules/publisher-subscriber-pattern/dist/subscriber.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Publisher =
/*#__PURE__*/
function () {
  function Publisher() {
    var _this = this;

    _classCallCheck(this, Publisher);

    _defineProperty(this, "eventData", void 0);

    _defineProperty(this, "addEventListener", void 0);

    _defineProperty(this, "removeEventListener", void 0);

    _defineProperty(this, "subscribe", function (eventName, eventCallback, subscriberInstance) {
      var subscriber = new _subscriber.Subscriber(eventCallback, subscriberInstance);

      var eventData = _this.getEventData(eventName);

      if (!eventData) {
        eventData = _this.eventData.set(eventName, [_this.buildInformSubscribers(eventName), []]).get(eventName);

        _this.observeEvent(eventName, eventData);
      }

      eventData[1].push(subscriber);
      return _this.unsubscribe(eventName, subscriber);
    });

    _defineProperty(this, "unsubscribeAll", function () {
      Array.from(_this.eventData.keys()).forEach(function (eventName) {
        _this.unobserveEvent(eventName);
      });
    });

    _defineProperty(this, "eventSubscribersCount", function (eventName) {
      return (_this.getSubscribers(eventName) || []).length;
    });

    _defineProperty(this, "subscribersCount", function () {
      return Array.from(_this.eventData.values()).reduce(function () {
        var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var eventData = arguments.length > 1 ? arguments[1] : undefined;
        count += eventData[1].length;
        return count;
      }, 0);
    });

    _defineProperty(this, "buildInformSubscribers", function (eventName) {
      return function (event) {
        (_this.getSubscribers(eventName) || []).forEach(function (subscriber) {
          return subscriber.eventCallback(event);
        });
      };
    });

    _defineProperty(this, "unsubscribe", function (eventName, subscriber) {
      return function () {
        var subscribersArray = (_this.getEventData(eventName) || [])[1];

        if (subscribersArray) {
          subscribersArray.splice(subscribersArray.findIndex(function (item) {
            return item === subscriber;
          }), 1);

          if (!subscribersArray.length) {
            _this.unobserveEvent(eventName);
          }
        }

        return;
      };
    });

    _defineProperty(this, "observeEvent", function (eventName, eventData) {
      var eventCallback = eventData ? eventData[0] : _this.getEventCallback(eventName);

      if (eventCallback) {
        _this.addEventListener(eventName, eventCallback);
      }
    });

    _defineProperty(this, "unobserveEvent", function (eventName) {
      _this.removeEventListener(eventName, _this.getEventCallback(eventName));

      _this.eventData["delete"](eventName);
    });

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var emitterInstance = args[0],
        addListenerMethodName = args[1],
        removeListenerMethodName = args[2];

    if (!(0, _types.isValidEmitter)(emitterInstance, addListenerMethodName, removeListenerMethodName)) {
      throw new Error('Publisher received incorrect arguments');
    }

    this.eventData = new Map([]);
    this.addEventListener = // @ts-ignore
    emitterInstance[addListenerMethodName].bind(emitterInstance);
    this.removeEventListener = // @ts-ignore
    emitterInstance[removeListenerMethodName].bind(emitterInstance);
  }

  _createClass(Publisher, [{
    key: "getEventData",
    value: function getEventData(eventName) {
      return this.eventData.get(eventName);
    }
  }, {
    key: "getEventCallback",
    value: function getEventCallback(eventName) {
      return (this.getEventData(eventName) || [])[0];
    }
  }, {
    key: "getSubscribers",
    value: function getSubscribers(eventName) {
      return (this.getEventData(eventName) || [])[1];
    }
  }]);

  return Publisher;
}();

exports.Publisher = Publisher;

/***/ }),

/***/ "./node_modules/publisher-subscriber-pattern/dist/subscriber.js":
/*!**********************************************************************!*\
  !*** ./node_modules/publisher-subscriber-pattern/dist/subscriber.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subscriber = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Subscriber = function Subscriber(eventCallback, subscriberInstance) {
  _classCallCheck(this, Subscriber);

  _defineProperty(this, "eventCallback", void 0);

  this.eventCallback = eventCallback.bind(subscriberInstance);
};

exports.Subscriber = Subscriber;

/***/ }),

/***/ "./node_modules/rendering-recursive-client-side/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/rendering-recursive-client-side/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.buildRender=r.buildRender},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.buildRender=r.buildRender},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n(5);t.buildRender=function(e){if(e){var t=o.default(e),n=r.default(e,t);return function(e){return void 0===e&&(e={}),e?n(e).children:null}}return null}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var u=n(4);t.default=function(e,t){var n=function(i,a){void 0===i&&(i={});var c=i.children,l=i.HTMLTag,f=i.value,d=o(i,["children","HTMLTag","value"]),s=a||e.createDocumentFragment(),p=c?c.filter((function(e){return!!e})):[];if(!p.length)return function(n){return l?n.append(t(r({HTMLTag:l,value:f},d))):f?n.append(e.createTextNode(f)):d[0]&&n.append(d[0]),n}(s);var v=l?t(r({HTMLTag:l,value:f},d)):null,b=e.createDocumentFragment(),y=v||b;return p.forEach((function(t){"string"==typeof t?u.isSvg(t)?v?v.innerHTML=t:console.warn("SVG element can be child only of HTMLElement"):y.append(e.createTextNode(t)):n(t,b)})),v?(v.append(b),s.append(v)):s.append(b),s};return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSvg=function(e){return/^<svg[\w\s:.;&/"-=<>\\]*<\/svg>$/.test(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){return void 0===t&&(t=!0),function(n){var r=void 0===n?{style:{},attributes:{},eventHandlers:{}}:n,o=r.HTMLTag,u=r.value,i=r.className,a=void 0===i?"":i,c=r.eventHandlers,l=void 0===c?{}:c,f=r.innerHTML,d=r.style,s=void 0===d?{}:d,p=r.attributes,v=void 0===p?{}:p,b=e.createElement(o);return u&&b.append(e.createTextNode(u)),a.split(" ").forEach((function(e){return e&&b.classList.add(e)})),f&&(b.innerHTML=f),Object.keys(s).forEach((function(e){b.style[e]=s[e]})),Object.keys(v).forEach((function(e){b.setAttribute(e,v[e])})),Object.keys(l).forEach((function(e){var n=l[e],r=Array.isArray(n)?n:[],o=r[0],u=void 0===o?n:o,i=r[1],a=void 0===i?t:i;b.addEventListener(e.slice(2).toLowerCase(),u,a)})),b}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=r.buildRender}]));

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/client.ts":
/*!***********************!*\
  !*** ./src/client.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var client_1 = __webpack_require__(/*! ./client/ */ "./src/client/index.ts");

exports.buildCreateComponent = client_1.buildCreateComponent;
exports.hydrate = client_1.hydrate;

/***/ }),

/***/ "./src/client/build-create-component.ts":
/*!**********************************************!*\
  !*** ./src/client/build-create-component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var common_1 = __webpack_require__(/*! ../common/ */ "./src/common/index.ts");

var buildRender = __webpack_require__(/*! rendering-recursive-client-side */ "./node_modules/rendering-recursive-client-side/index.js")["default"];

var buildCreateComponent = function buildCreateComponent(_a) {
  var _b = _a === void 0 ? {} : _a,
      _c = _b.inject,
      _d = (_c === void 0 ? {} : _c).classNames,
      classNames = _d === void 0 ? {} : _d,
      _e = _b.options,
      options = _e === void 0 ? [] : _e,
      _f = _b.globals,
      globals = _f === void 0 ? {
    createComponent: true,
    helpers: false
  } : _f;

  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          return [4
          /*yield*/
          , common_1.buildCreateComponent({
            render: buildRender(document),
            inject: {
              classNames: classNames
            },
            options: options,
            globals: globals
          })];

        case 1:
          return [2
          /*return*/
          , _g.sent()];
      }
    });
  });
};

exports.buildCreateComponent = buildCreateComponent;

/***/ }),

/***/ "./src/client/hydrate.ts":
/*!*******************************!*\
  !*** ./src/client/hydrate.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.hydrate = function (_a) {
  var Component = _a.Component,
      classNames = _a.classNames,
      rootId = _a.rootId,
      _b = _a.helpers,
      helpers = _b === void 0 ? {} : _b;
  var $root = document.getElementById(rootId);

  if ($root && $root.children.length) {
    $root.replaceChild(Component({
      classNames: classNames,
      helpers: helpers
    })[0], // todo
    $root.children[0] // todo
    );
  } else {
    $root.append(Component({
      classNames: classNames,
      helpers: helpers
    })[0] //todo
    );
  }

  var _c = helpers.enqueueScript.componentDidMountQueue,
      componentDidMountQueue = _c === void 0 ? [] : _c;

  while (componentDidMountQueue.length) {
    componentDidMountQueue.shift()();
  }
};

/***/ }),

/***/ "./src/client/index.ts":
/*!*****************************!*\
  !*** ./src/client/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var build_create_component_1 = __webpack_require__(/*! ./build-create-component */ "./src/client/build-create-component.ts");

exports.buildCreateComponent = build_create_component_1.buildCreateComponent;

var hydrate_1 = __webpack_require__(/*! ./hydrate */ "./src/client/hydrate.ts");

exports.hydrate = hydrate_1.hydrate;

/***/ }),

/***/ "./src/common/build-component-helpers/create-component-helpers.ts":
/*!************************************************************************!*\
  !*** ./src/common/build-component-helpers/create-component-helpers.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createComponentHelpers = new Map([["controlBodyScroll"
/* controlBodyScroll */
, Promise.resolve().then(function () {
  return __webpack_require__(/*! ./helpers/control-body-scroll */ "./src/common/build-component-helpers/helpers/control-body-scroll.ts");
})], ["controlInternalState"
/* controlInternalState */
, Promise.resolve().then(function () {
  return __webpack_require__(/*! ./helpers/control-internal-state */ "./src/common/build-component-helpers/helpers/control-internal-state.ts");
})], ["documentEventsPublisher"
/* documentEventsPublisher */
, Promise.resolve().then(function () {
  return __webpack_require__(/*! ./helpers/document-events-publisher */ "./src/common/build-component-helpers/helpers/document-events-publisher.ts");
})], ["enqueueScript"
/* enqueueScript */
, Promise.resolve().then(function () {
  return __webpack_require__(/*! ./helpers/enqueue-script */ "./src/common/build-component-helpers/helpers/enqueue-script.ts");
})], ["modifyBodyClassList"
/* modifyBodyClassList */
, Promise.resolve().then(function () {
  return __webpack_require__(/*! ./helpers/modify-body-class-list */ "./src/common/build-component-helpers/helpers/modify-body-class-list.ts");
})], ["windowEventsPublisher"
/* windowEventsPublisher */
, Promise.resolve().then(function () {
  return __webpack_require__(/*! ./helpers/window-events-publisher */ "./src/common/build-component-helpers/helpers/window-events-publisher.ts");
})]]);

exports.getCreateComponentHelper = function (value) {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , createComponentHelpers.get(value)];

        case 1:
          return [2
          /*return*/
          , _a.sent()];
      }
    });
  });
};

/***/ }),

/***/ "./src/common/build-component-helpers/helpers/control-body-scroll.ts":
/*!***************************************************************************!*\
  !*** ./src/common/build-component-helpers/helpers/control-body-scroll.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var turnOnBodyScrolling = function turnOnBodyScrolling() {
  document.body.style.overflowY = 'visible';
};

var turnOffBodyScrolling = function turnOffBodyScrolling() {
  document.body.style.overflowY = 'hidden';
};

exports["default"] = {
  turnOnBodyScrolling: turnOnBodyScrolling,
  turnOffBodyScrolling: turnOffBodyScrolling
};

/***/ }),

/***/ "./src/common/build-component-helpers/helpers/control-internal-state.ts":
/*!******************************************************************************!*\
  !*** ./src/common/build-component-helpers/helpers/control-internal-state.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var controlInternalState = function controlInternalState(initialValue) {
  var state = {
    value: initialValue
  };
  return [function () {
    return state.value;
  }, function (value) {
    state.value = value;
  }];
};

exports["default"] = controlInternalState;

/***/ }),

/***/ "./src/common/build-component-helpers/helpers/document-events-publisher.ts":
/*!*********************************************************************************!*\
  !*** ./src/common/build-component-helpers/helpers/document-events-publisher.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable @typescript-eslint/ban-ts-ignore */

var publisher_subscriber_pattern_1 = __webpack_require__(/*! publisher-subscriber-pattern */ "./node_modules/publisher-subscriber-pattern/dist/index.js");

var publisherScript = function publisherScript() {
  exports.publisher = new publisher_subscriber_pattern_1.Publisher( // @ts-ignore
  global.window ? global.window.document : window.document, 'addEventListener', 'removeEventListener');
};

publisherScript();
exports["default"] = exports.publisher;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/common/build-component-helpers/helpers/enqueue-script.ts":
/*!**********************************************************************!*\
  !*** ./src/common/build-component-helpers/helpers/enqueue-script.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentDidMountQueue = [];

var enqueueScript = function enqueueScript(componentScript) {
  exports.componentDidMountQueue.push(componentScript);
};

exports["default"] = {
  componentDidMountQueue: exports.componentDidMountQueue,
  enqueueScript: enqueueScript
};

/***/ }),

/***/ "./src/common/build-component-helpers/helpers/modify-body-class-list.ts":
/*!******************************************************************************!*\
  !*** ./src/common/build-component-helpers/helpers/modify-body-class-list.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var addBodyClass = function addBodyClass(className) {
  document.body.classList.add(className);
};

var removeBodyClass = function removeBodyClass(className) {
  document.body.classList.remove(className);
};

exports["default"] = {
  addBodyClass: addBodyClass,
  removeBodyClass: removeBodyClass
};

/***/ }),

/***/ "./src/common/build-component-helpers/helpers/window-events-publisher.ts":
/*!*******************************************************************************!*\
  !*** ./src/common/build-component-helpers/helpers/window-events-publisher.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable @typescript-eslint/ban-ts-ignore */

var publisher_subscriber_pattern_1 = __webpack_require__(/*! publisher-subscriber-pattern */ "./node_modules/publisher-subscriber-pattern/dist/index.js");

var publisherScript = function publisherScript() {
  exports.publisher = new publisher_subscriber_pattern_1.Publisher( // @ts-ignore
  global.window || window, 'addEventListener', 'removeEventListener');
};

publisherScript();
exports["default"] = exports.publisher;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/common/build-component-helpers/index.ts":
/*!*****************************************************!*\
  !*** ./src/common/build-component-helpers/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var create_component_helpers_1 = __webpack_require__(/*! ./create-component-helpers */ "./src/common/build-component-helpers/create-component-helpers.ts");

exports.buildComponentHelpers = function (options) {
  return __awaiter(void 0, void 0, void 0, function () {
    var helpers, i, mod;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          helpers = {};
          i = 0;
          _a.label = 1;

        case 1:
          if (!(i < options.length)) return [3
          /*break*/
          , 4];
          return [4
          /*yield*/
          , create_component_helpers_1.getCreateComponentHelper(options[i])];

        case 2:
          mod = _a.sent();
          helpers[options[i]] = mod["default"];
          _a.label = 3;

        case 3:
          i++;
          return [3
          /*break*/
          , 1];

        case 4:
          return [2
          /*return*/
          , helpers];
      }
    });
  });
};

/***/ }),

/***/ "./src/common/build-create-component.ts":
/*!**********************************************!*\
  !*** ./src/common/build-create-component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var build_component_helpers_1 = __webpack_require__(/*! ./build-component-helpers */ "./src/common/build-component-helpers/index.ts");

var build_style_1 = __webpack_require__(/*! ./utils/build-style */ "./src/common/utils/build-style.ts");

exports.buildCreateComponent = function (_a) {
  var _b = _a === void 0 ? {
    render: function render() {
      return '';
    }
  } : _a,
      render = _b.render,
      _c = _b.inject,
      _d = (_c === void 0 ? {} : _c).classNames,
      classNames = _d === void 0 ? {} : _d,
      _e = _b.options,
      options = _e === void 0 ? [] : _e,
      _f = _b.globals,
      globals = _f === void 0 ? {
    createComponent: true,
    helpers: false
  } : _f;

  return __awaiter(void 0, void 0, void 0, function () {
    var createComponent, helpers;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          createComponent = function createComponent(_a) {
            var componentId = _a.componentId,
                _b = _a.className,
                className = _b === void 0 ? '' : _b,
                style = _a.style,
                flex = _a.flex,
                otherProps = __rest(_a, ["componentId", "className", "style", "flex"]);

            var injectedClassName = componentId && classNames[componentId] ? classNames[componentId] : '';
            return render(__assign(__assign({
              style: build_style_1.buildStyle(style, flex)
            }, otherProps), {
              className: injectedClassName + " " + className
            }));
          };

          return [4
          /*yield*/
          , build_component_helpers_1.buildComponentHelpers(options)];

        case 1:
          helpers = _g.sent();
          if (globals.createComponent) global.createComponent = createComponent;
          if (globals.helpers) global.helpers = helpers;
          return [2
          /*return*/
          , {
            createComponent: createComponent,
            helpers: helpers
          }];
      }
    });
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var build_create_component_1 = __webpack_require__(/*! ./build-create-component */ "./src/common/build-create-component.ts");

exports.buildCreateComponent = build_create_component_1.buildCreateComponent;

/***/ }),

/***/ "./src/common/utils/build-style.ts":
/*!*****************************************!*\
  !*** ./src/common/utils/build-style.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.buildStyle = function (style, flex) {
  return flex ? __assign(__assign(__assign({}, style), {
    display: 'flex'
  }), flex) : style;
};

/***/ })

/******/ })));
//# sourceMappingURL=index.js.map