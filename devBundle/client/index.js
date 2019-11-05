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

/***/ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/hyphenateProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js":
/*!*************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/isPrefixedValue.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/createPrefixer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/createPrefixer.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createPrefixer; });
/* harmony import */ var _utils_prefixProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/prefixProperty */ "./node_modules/inline-style-prefixer/es/utils/prefixProperty.js");
/* harmony import */ var _utils_prefixValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/prefixValue */ "./node_modules/inline-style-prefixer/es/utils/prefixValue.js");
/* harmony import */ var _utils_addNewValuesOnly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/addNewValuesOnly */ "./node_modules/inline-style-prefixer/es/utils/addNewValuesOnly.js");
/* harmony import */ var _utils_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/isObject */ "./node_modules/inline-style-prefixer/es/utils/isObject.js");






function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  return function prefix(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if (Object(_utils_isObject__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
        style[property] = prefix(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = Object(_utils_prefixValue__WEBPACK_IMPORTED_MODULE_1__["default"])(plugins, property, value[i], style, prefixMap);
          Object(_utils_addNewValuesOnly__WEBPACK_IMPORTED_MODULE_2__["default"])(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = Object(_utils_prefixValue__WEBPACK_IMPORTED_MODULE_1__["default"])(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        style = Object(_utils_prefixProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(prefixMap, property, style);
      }
    }

    return style;
  };
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/data.js":
/*!*******************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/data.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

var w = ["Webkit"];
var m = ["Moz"];
var ms = ["ms"];
var wm = ["Webkit", "Moz"];
var wms = ["Webkit", "ms"];
var wmms = ["Webkit", "Moz", "ms"];

/* harmony default export */ __webpack_exports__["default"] = ({
  plugins: [],
  prefixMap: { "appearance": wm, "textEmphasisPosition": w, "textEmphasis": w, "textEmphasisStyle": w, "textEmphasisColor": w, "boxDecorationBreak": w, "maskImage": w, "maskMode": w, "maskRepeat": w, "maskPosition": w, "maskClip": w, "maskOrigin": w, "maskSize": w, "maskComposite": w, "mask": w, "maskBorderSource": w, "maskBorderMode": w, "maskBorderSlice": w, "maskBorderWidth": w, "maskBorderOutset": w, "maskBorderRepeat": w, "maskBorder": w, "maskType": w, "textDecorationStyle": w, "textDecorationSkip": w, "textDecorationLine": w, "textDecorationColor": w, "userSelect": wmms, "backdropFilter": w, "fontKerning": w, "scrollSnapType": wms, "scrollSnapPointsX": wms, "scrollSnapPointsY": wms, "scrollSnapDestination": wms, "scrollSnapCoordinate": wms, "clipPath": w, "shapeImageThreshold": w, "shapeImageMargin": w, "shapeImageOutside": w, "filter": w, "hyphens": wms, "flowInto": wms, "flowFrom": wms, "breakBefore": wms, "breakAfter": wms, "breakInside": wms, "regionFragment": wms, "writingMode": wms, "textOrientation": w, "tabSize": m, "fontFeatureSettings": w, "columnCount": w, "columnFill": w, "columnGap": w, "columnRule": w, "columnRuleColor": w, "columnRuleStyle": w, "columnRuleWidth": w, "columns": w, "columnSpan": w, "columnWidth": w, "wrapFlow": ms, "wrapThrough": ms, "wrapMargin": ms, "textSizeAdjust": wms }
});

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/index.js":
/*!********************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/index.js ***!
  \********************************************************/
/*! exports provided: createPrefixer, prefix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
/* harmony import */ var _createPrefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPrefixer */ "./node_modules/inline-style-prefixer/es/createPrefixer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPrefixer", function() { return _createPrefixer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./node_modules/inline-style-prefixer/es/data.js");
/* harmony import */ var _plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/backgroundClip */ "./node_modules/inline-style-prefixer/es/plugins/backgroundClip.js");
/* harmony import */ var _plugins_cursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/cursor */ "./node_modules/inline-style-prefixer/es/plugins/cursor.js");
/* harmony import */ var _plugins_crossFade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/crossFade */ "./node_modules/inline-style-prefixer/es/plugins/crossFade.js");
/* harmony import */ var _plugins_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/filter */ "./node_modules/inline-style-prefixer/es/plugins/filter.js");
/* harmony import */ var _plugins_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/flex */ "./node_modules/inline-style-prefixer/es/plugins/flex.js");
/* harmony import */ var _plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/flexboxOld */ "./node_modules/inline-style-prefixer/es/plugins/flexboxOld.js");
/* harmony import */ var _plugins_gradient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/gradient */ "./node_modules/inline-style-prefixer/es/plugins/gradient.js");
/* harmony import */ var _plugins_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugins/grid */ "./node_modules/inline-style-prefixer/es/plugins/grid.js");
/* harmony import */ var _plugins_imageSet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./plugins/imageSet */ "./node_modules/inline-style-prefixer/es/plugins/imageSet.js");
/* harmony import */ var _plugins_logical__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plugins/logical */ "./node_modules/inline-style-prefixer/es/plugins/logical.js");
/* harmony import */ var _plugins_position__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plugins/position */ "./node_modules/inline-style-prefixer/es/plugins/position.js");
/* harmony import */ var _plugins_sizing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./plugins/sizing */ "./node_modules/inline-style-prefixer/es/plugins/sizing.js");
/* harmony import */ var _plugins_transition__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./plugins/transition */ "./node_modules/inline-style-prefixer/es/plugins/transition.js");


















var plugins = [_plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_2__["default"], _plugins_crossFade__WEBPACK_IMPORTED_MODULE_4__["default"], _plugins_cursor__WEBPACK_IMPORTED_MODULE_3__["default"], _plugins_filter__WEBPACK_IMPORTED_MODULE_5__["default"], _plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_7__["default"], _plugins_gradient__WEBPACK_IMPORTED_MODULE_8__["default"], _plugins_grid__WEBPACK_IMPORTED_MODULE_9__["default"], _plugins_imageSet__WEBPACK_IMPORTED_MODULE_10__["default"], _plugins_logical__WEBPACK_IMPORTED_MODULE_11__["default"], _plugins_position__WEBPACK_IMPORTED_MODULE_12__["default"], _plugins_sizing__WEBPACK_IMPORTED_MODULE_13__["default"], _plugins_transition__WEBPACK_IMPORTED_MODULE_14__["default"], _plugins_flex__WEBPACK_IMPORTED_MODULE_6__["default"]];

var prefix = Object(_createPrefixer__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prefixMap: _data__WEBPACK_IMPORTED_MODULE_1__["default"].prefixMap,
  plugins: plugins
});



/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/backgroundClip.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/backgroundClip.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return backgroundClip; });

// https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip#Browser_compatibility
function backgroundClip(property, value) {
  if (typeof value === 'string' && value === 'text') {
    return ['-webkit-text', 'text'];
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/crossFade.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/crossFade.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return crossFade; });
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__);


// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];

function crossFade(property, value) {
  if (typeof value === 'string' && !css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default()(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/cursor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/cursor.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cursor; });
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/filter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/filter.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return filter; });
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__);


// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];

function filter(property, value) {
  if (typeof value === 'string' && !css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default()(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/flex.js":
/*!***************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/flex.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flex; });
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/flexboxOld.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/flexboxOld.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flexboxOld; });
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/gradient.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/gradient.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gradient; });
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__);


var prefixes = ['-webkit-', '-moz-', ''];
var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;

function gradient(property, value) {
  if (typeof value === 'string' && !css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default()(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return value.replace(values, function (grad) {
        return prefix + grad;
      });
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/grid.js":
/*!***************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/grid.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return grid; });
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function isSimplePositionValue(value) {
  return typeof value === 'number' && !isNaN(value);
}

var alignmentValues = ['center', 'end', 'start', 'stretch'];

var displayValues = {
  'inline-grid': ['-ms-inline-grid', 'inline-grid'],
  grid: ['-ms-grid', 'grid']
};

var propertyConverters = {
  alignSelf: function alignSelf(value, style) {
    if (alignmentValues.indexOf(value) > -1) {
      style.msGridRowAlign = value;
    }
  },

  gridColumn: function gridColumn(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridColumn = value;
    } else {
      var _value$split$map = value.split('/').map(function (position) {
        return +position;
      }),
          _value$split$map2 = _slicedToArray(_value$split$map, 2),
          start = _value$split$map2[0],
          end = _value$split$map2[1];

      propertyConverters.gridColumnStart(start, style);
      propertyConverters.gridColumnEnd(end, style);
    }
  },

  gridColumnEnd: function gridColumnEnd(value, style) {
    var msGridColumn = style.msGridColumn;

    if (isSimplePositionValue(value) && isSimplePositionValue(msGridColumn)) {
      style.msGridColumnSpan = value - msGridColumn;
    }
  },

  gridColumnStart: function gridColumnStart(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridColumn = value;
    }
  },

  gridRow: function gridRow(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridRow = value;
    } else {
      var _value$split$map3 = value.split('/').map(function (position) {
        return +position;
      }),
          _value$split$map4 = _slicedToArray(_value$split$map3, 2),
          start = _value$split$map4[0],
          end = _value$split$map4[1];

      propertyConverters.gridRowStart(start, style);
      propertyConverters.gridRowEnd(end, style);
    }
  },

  gridRowEnd: function gridRowEnd(value, style) {
    var msGridRow = style.msGridRow;

    if (isSimplePositionValue(value) && isSimplePositionValue(msGridRow)) {
      style.msGridRowSpan = value - msGridRow;
    }
  },

  gridRowStart: function gridRowStart(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridRow = value;
    }
  },

  gridTemplateColumns: function gridTemplateColumns(value, style) {
    style.msGridColumns = value;
  },

  gridTemplateRows: function gridTemplateRows(value, style) {
    style.msGridRows = value;
  },

  justifySelf: function justifySelf(value, style) {
    if (alignmentValues.indexOf(value) > -1) {
      style.msGridColumnAlign = value;
    }
  }
};

function grid(property, value, style) {
  if (property === 'display' && value in displayValues) {
    return displayValues[value];
  }

  if (property in propertyConverters) {
    var propertyConverter = propertyConverters[property];
    propertyConverter(value, style);
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/imageSet.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/imageSet.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return imageSet; });
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__);


// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];

function imageSet(property, value) {
  if (typeof value === 'string' && !css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default()(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/logical.js":
/*!******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/logical.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return logical; });
var alternativeProps = {
  marginBlockStart: ['WebkitMarginBefore'],
  marginBlockEnd: ['WebkitMarginAfter'],
  marginInlineStart: ['WebkitMarginStart', 'MozMarginStart'],
  marginInlineEnd: ['WebkitMarginEnd', 'MozMarginEnd'],
  paddingBlockStart: ['WebkitPaddingBefore'],
  paddingBlockEnd: ['WebkitPaddingAfter'],
  paddingInlineStart: ['WebkitPaddingStart', 'MozPaddingStart'],
  paddingInlineEnd: ['WebkitPaddingEnd', 'MozPaddingEnd'],
  borderBlockStart: ['WebkitBorderBefore'],
  borderBlockStartColor: ['WebkitBorderBeforeColor'],
  borderBlockStartStyle: ['WebkitBorderBeforeStyle'],
  borderBlockStartWidth: ['WebkitBorderBeforeWidth'],
  borderBlockEnd: ['WebkitBorderAfter'],
  borderBlockEndColor: ['WebkitBorderAfterColor'],
  borderBlockEndStyle: ['WebkitBorderAfterStyle'],
  borderBlockEndWidth: ['WebkitBorderAfterWidth'],
  borderInlineStart: ['WebkitBorderStart', 'MozBorderStart'],
  borderInlineStartColor: ['WebkitBorderStartColor', 'MozBorderStartColor'],
  borderInlineStartStyle: ['WebkitBorderStartStyle', 'MozBorderStartStyle'],
  borderInlineStartWidth: ['WebkitBorderStartWidth', 'MozBorderStartWidth'],
  borderInlineEnd: ['WebkitBorderEnd', 'MozBorderEnd'],
  borderInlineEndColor: ['WebkitBorderEndColor', 'MozBorderEndColor'],
  borderInlineEndStyle: ['WebkitBorderEndStyle', 'MozBorderEndStyle'],
  borderInlineEndWidth: ['WebkitBorderEndWidth', 'MozBorderEndWidth']
};

function logical(property, value, style) {
  if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
    var alternativePropList = alternativeProps[property];
    for (var i = 0, len = alternativePropList.length; i < len; ++i) {
      style[alternativePropList[i]] = value;
    }
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/position.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/position.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return position; });
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/sizing.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/sizing.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sizing; });
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/transition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/transition.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transition; });
/* harmony import */ var css_in_js_utils_lib_hyphenateProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-in-js-utils/lib/hyphenateProperty */ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js");
/* harmony import */ var css_in_js_utils_lib_hyphenateProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_in_js_utils_lib_hyphenateProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_capitalizeString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/capitalizeString */ "./node_modules/inline-style-prefixer/es/utils/capitalizeString.js");





var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};

var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if (css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_1___default()(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = css_in_js_utils_lib_hyphenateProperty__WEBPACK_IMPORTED_MODULE_0___default()(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + Object(_utils_capitalizeString__WEBPACK_IMPORTED_MODULE_2__["default"])(property)] = webkitOutput;
    style['Moz' + Object(_utils_capitalizeString__WEBPACK_IMPORTED_MODULE_2__["default"])(property)] = mozOutput;
    return outputValue;
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/utils/addNewValuesOnly.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/utils/addNewValuesOnly.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addNewValuesOnly; });
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/utils/capitalizeString.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/utils/capitalizeString.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return capitalizeString; });
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/utils/isObject.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/utils/isObject.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObject; });
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/utils/prefixProperty.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/utils/prefixProperty.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prefixProperty; });
/* harmony import */ var _capitalizeString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalizeString */ "./node_modules/inline-style-prefixer/es/utils/capitalizeString.js");



function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var newStyle = {};
    var requiredPrefixes = prefixProperties[property];
    var capitalizedProperty = Object(_capitalizeString__WEBPACK_IMPORTED_MODULE_0__["default"])(property);
    var keys = Object.keys(style);
    for (var i = 0; i < keys.length; i++) {
      var styleProperty = keys[i];
      if (styleProperty === property) {
        for (var j = 0; j < requiredPrefixes.length; j++) {
          newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
        }
      }
      newStyle[styleProperty] = style[styleProperty];
    }
    return newStyle;
  }
  return style;
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/utils/prefixValue.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/utils/prefixValue.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prefixValue; });
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}

/***/ }),

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

  var _c = helpers.enqueueScript,
      _d = (_c === void 0 ? {} : _c).componentDidMountQueue,
      componentDidMountQueue = _d === void 0 ? [] : _d;

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

var inline_style_prefixer_1 = __webpack_require__(/*! inline-style-prefixer */ "./node_modules/inline-style-prefixer/es/index.js");

exports.buildStyle = function (style, flex) {
  return flex ? __assign(__assign(__assign({
    display: 'flex'
  }, inline_style_prefixer_1.prefix(__assign(__assign({}, flex), style))), flex), style) : __assign(__assign({}, inline_style_prefixer_1.prefix(style)), style);
};

/***/ })

/******/ })));
//# sourceMappingURL=index.js.map