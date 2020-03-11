module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./MainStyled.jsx":
/*!************************!*\
  !*** ./MainStyled.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const mainColor = "#37c3db";
const buttonNav = "#87dee9";
const lightColor = "#fbffff";
const darkColor = "#889db1";
const darkGray = "#666";
styled_components__WEBPACK_IMPORTED_MODULE_0__["injectGlobal"]`
*,
*::after,
*::before {
  box-sizing: border-box;
  border: 0;
  margin: 0;
  padding: 0;
}
::selection {
  background: #a5c5dd;
  color: "#fbffff";
}
html, body {
  font-family: monospace;
  line-height: 1.15;
  background: "#fbffff";
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

}

//remove ugly selected glow
body:not(.user-is-tabbing) button:focus,
body:not(.user-is-tabbing) input:focus,
body:not(.user-is-tabbing) select:focus,
body:not(.user-is-tabbing) textarea:focus {
  outline: none;
}

`;
/* eslint-enable */

const theme = () => ({
  mainColor,
  hoverColor: mainColor,
  hoverFontColor: lightColor,
  mainBG: "#fbffff",
  mainFontColor: darkColor,
  selectColorBG: mainColor,
  selectColorTXT: lightColor,
  secondaryFontColor: darkGray,
  logoTextColor: lightColor,
  cardBG: lightColor,
  suggestionsBG: lightColor,
  suggestionsTXT: darkColor,
  suggestionsHoverBG: mainColor,
  suggestionsHoverTXT: lightColor,
  darkColor,
  lightColor
});

/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/checkPropTypes.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "object-assign");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/next/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/index.js":
/*!************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/components/AutoComplete/AutoComplete.js":
/*!*******************************************************!*\
  !*** ./pages/components/AutoComplete/AutoComplete.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Suggestions_Suggestions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Suggestions/Suggestions */ "./pages/components/AutoComplete/Suggestions/Suggestions.js");
/* harmony import */ var _ContainerInputStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContainerInputStyles */ "./pages/components/AutoComplete/ContainerInputStyles.jsx");
/* harmony import */ var _InputSearchStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputSearchStyles */ "./pages/components/AutoComplete/InputSearchStyles.jsx");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/components/AutoComplete/AutoComplete.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class AutoComplete extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      searchTerm: "",
      open: false,
      suggestedItems: [],
      currentOption: 0
    });

    _defineProperty(this, "handleClickOutside", event => {
      const thisComponent = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);

      if (!thisComponent || !thisComponent.contains(event.target)) {
        this.setState({
          open: false
        });
      }
    });

    _defineProperty(this, "updateLocalState", state => this.setState(state));

    _defineProperty(this, "updateParentState", searchTerm => {
      this.props.parentUpdateState(searchTerm);
    });
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  }

  render() {
    const {
      searchTerm,
      open
    } = this.state;
    return __jsx(_ContainerInputStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "autocomplete",
      showLabel: this.props.showLabel,
      htmlFor: this.props.stateName,
      maxWidth: this.props.maxWidth,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, this.props.labelName.length > 0 && __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, " ", this.props.labelName, " "), __jsx(_InputSearchStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
      autoComplete: "off",
      type: "text",
      id: this.props.stateName,
      onChange: AutoComplete.handleTermChange(this.updateLocalState, this.updateParentState, this.props.updateCurrentPage, this.props.autoCompleteItems, this.props.maxSuggests, this.props.includeSearchTerm),
      onFocus: AutoComplete.handleFocusInput(this.updateLocalState, searchTerm, this.updateParentState),
      onKeyDown: AutoComplete.handleCloseAutoComplete(this.updateLocalState, this.state, this.updateParentState, this.props.updateCurrentPage),
      value: searchTerm,
      placeholder: this.props.placeholder,
      open: open && searchTerm.length > 0 ? open : false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), __jsx(_Suggestions_Suggestions__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      open: open,
      maxWidth: this.props.maxWidth,
      updateLocalState: this.updateLocalState,
      updateParentState: this.updateParentState
    }, this.state, this.props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    })));
  }

}

_defineProperty(AutoComplete, "defaultProps", {
  maxSuggests: 5,
  maxWidth: "300px",
  includeSearchTerm: false,
  labelName: "",
  showLabel: false,
  placeholder: ""
});

AutoComplete.handleTermChange = (updateLocalState, updateParentState, updateCurrentPage, autoCompleteItems, maxSuggests, includeSearchTerm) => event => {
  const AutoCompleteList = autoCompleteItems.filter(autoCompleteItem => {
    if (includeSearchTerm) {
      return autoCompleteItem.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0;
    }

    return autoCompleteItem.toLowerCase().search(event.target.value.toLowerCase()) === 0;
  }).splice(0, maxSuggests);
  updateLocalState({
    searchTerm: event.currentTarget.value,
    open: AutoCompleteList.length !== 0,
    suggestedItems: AutoCompleteList,
    currentOption: -1
  });
  updateParentState(event.currentTarget.value);
  updateCurrentPage(0);
};

AutoComplete.handleFocusInput = (updateLocalState, searchTerm, updateParentState) => event => {
  event.preventDefault();
  const open = searchTerm > 0;
  updateLocalState({
    open
  });
  updateParentState(searchTerm);
};

AutoComplete.handleCloseAutoComplete = (updateLocalState, state, updateParentState, updateCurrentPage) => event => {
  if (event.which === 27) {
    updateLocalState({
      open: false,
      suggestedItems: []
    });
  } else if (event.keyCode === 13) {
    const processSearch = state.currentOption === -1 ? state.searchTerm : state.suggestedItems[state.currentOption];
    updateLocalState({
      open: false,
      searchTerm: processSearch,
      suggestedItems: [],
      currentOption: -1
    });
    updateCurrentPage(0);
    updateParentState(processSearch);
  } else if (event.keyCode === 40) {
    updateLocalState(prevState => {
      const arrayItem = prevState.suggestedItems.length - 1;
      const maxOption = prevState.currentOption < arrayItem ? prevState.currentOption + 1 : arrayItem;
      return {
        currentOption: maxOption
      };
    });
  } else if (event.keyCode === 38) {
    updateLocalState(prevState => {
      const minOption = prevState.currentOption < 1 ? -1 : prevState.currentOption - 1;
      return {
        currentOption: minOption
      };
    });
  } else if (event.keyCode === 9) {
    updateLocalState({
      currentOption: 0,
      suggestedItems: [],
      open: false
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (AutoComplete);

/***/ }),

/***/ "./pages/components/AutoComplete/ContainerInputStyles.jsx":
/*!****************************************************************!*\
  !*** ./pages/components/AutoComplete/ContainerInputStyles.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ContainerInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label`
  box-sizing: border-box;
  border: 0;
  margin: 0;
  padding: 0;
  position: relative;
  width: ${props => props.maxWidth};

  & > span {
    display: ${props => props.showLabel ? "block" : "none"};
  }
  option:hover{
    background-color:#298838;
  }

  ::-moz-selection {
  color: green !important;;
  background: light-blue !important;
  }

  ::selection {
    color: green !important;;
    background: light-blue !important;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (ContainerInput);

/***/ }),

/***/ "./pages/components/AutoComplete/InputSearchStyles.jsx":
/*!*************************************************************!*\
  !*** ./pages/components/AutoComplete/InputSearchStyles.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const InputSearch = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input`
  border: 1px solid #e6e6e6;
  border-radius: ${props => props.open ? "5px 5px 0 0" : "5px"};
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
  font-size: 0.85rem;
  padding: 10px 15px;

  align: center;
  width: 95%;
`;
/* harmony default export */ __webpack_exports__["default"] = (InputSearch);

/***/ }),

/***/ "./pages/components/AutoComplete/Suggestions/ItemSuggestionsStyles.jsx":
/*!*****************************************************************************!*\
  !*** ./pages/components/AutoComplete/Suggestions/ItemSuggestionsStyles.jsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ItemSuggestions = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  background: ${({
  theme
}) => theme.suggestionsBG};
  border: 1px solid #ccc;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
  color: ${({
  theme
}) => theme.suggestionsTXT};
  display: ${props => props.open ? "block" : "none"};
  font-family: Helvetica, sans-serif;
  left: 0;
  max-width: ${props => props.maxWidth};
  position: absolute;
  width: 100%;
  z-index: 2;

  & > ul.suggestions-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (ItemSuggestions);

/***/ }),

/***/ "./pages/components/AutoComplete/Suggestions/Suggestions.js":
/*!******************************************************************!*\
  !*** ./pages/components/AutoComplete/Suggestions/Suggestions.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SuggestionsStyled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuggestionsStyled */ "./pages/components/AutoComplete/Suggestions/SuggestionsStyled.jsx");
/* harmony import */ var _ItemSuggestionsStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemSuggestionsStyles */ "./pages/components/AutoComplete/Suggestions/ItemSuggestionsStyles.jsx");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/components/AutoComplete/Suggestions/Suggestions.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Suggestions = ({
  searchTerm,
  maxWidth,
  updateLocalState,
  updateParentState,
  open,
  suggestedItems,
  currentOption
}) => __jsx(_ItemSuggestionsStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
  open: open && searchTerm.length > 0 ? open : false,
  maxWidth: maxWidth,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("ul", {
  className: "suggestions-list",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, suggestedItems ? suggestedItems.map(autoCompleteItem => __jsx(_SuggestionsStyled__WEBPACK_IMPORTED_MODULE_1__["default"], {
  key: autoCompleteItem,
  onClick: Suggestions.selectCompletion(updateLocalState, updateParentState),
  onMouseOver: Suggestions.mouseOverSuggestion(updateLocalState, suggestedItems.indexOf(autoCompleteItem)),
  onMouseLeave: Suggestions.mouseLeaveSuggestion(updateLocalState),
  onFocus: Suggestions.hoverFocus,
  active: suggestedItems[currentOption] === autoCompleteItem,
  role: "presentation",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, autoCompleteItem)) : __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
})));

Suggestions.selectCompletion = (updateLocalState, updateParentState) => event => {
  event.preventDefault();
  updateLocalState({
    searchTerm: event.currentTarget.textContent,
    open: false,
    suggestedItems: [],
    currentOption: -1
  });
  updateParentState(event.target.textContent);
};

Suggestions.mouseOverSuggestion = (updateLocalState, indexNumber) => () => {
  updateLocalState({
    currentOption: indexNumber
  });
};

Suggestions.mouseLeaveSuggestion = updateLocalState => () => {
  updateLocalState({
    currentOption: -1
  });
};

Suggestions.hoverFocus = event => {
  event.focus();
};

/* harmony default export */ __webpack_exports__["default"] = (Suggestions);

/***/ }),

/***/ "./pages/components/AutoComplete/Suggestions/SuggestionsStyled.jsx":
/*!*************************************************************************!*\
  !*** ./pages/components/AutoComplete/Suggestions/SuggestionsStyled.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Suggestion = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li`
  background-color: ${props => props.active ? `#83d6e6` : "transparent"};
  color: ${props => props.active ? `#fff` : `${({
  theme
}) => theme.suggestionsTXT}`};
  cursor: pointer;
  padding: 10px 15px;
`;
/* harmony default export */ __webpack_exports__["default"] = (Suggestion);

/***/ }),

/***/ "./pages/components/Card/AvatarStyles.jsx":
/*!************************************************!*\
  !*** ./pages/components/Card/AvatarStyles.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Avatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  background: ${props => `url(${props.src}) no-repeat center`};
  background-size: cover
  box-sizing: border-box;
  margin: auto 0;
  padding: 5px;
  height: 100px;
  position: relative;
  margin-top: 0px;
  top: 0px;
  width: 100%;
  z-index: 1;
  img {
    position: absolute;
    height: 0;
    visibility: hidden;
    width: 0;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./pages/components/Card/Card.js":
/*!***************************************!*\
  !*** ./pages/components/Card/Card.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../utils */ "./utils.js");
/* harmony import */ var _Modal_Modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Modal/Modal.js */ "./pages/components/Modal/Modal.js");
/* harmony import */ var _AvatarStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AvatarStyles */ "./pages/components/Card/AvatarStyles.jsx");
/* harmony import */ var _InfoStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InfoStyles */ "./pages/components/Card/InfoStyles.jsx");
/* harmony import */ var _InfoListStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InfoListStyles */ "./pages/components/Card/InfoListStyles.jsx");
/* harmony import */ var _CardStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardStyles */ "./pages/components/Card/CardStyles.jsx");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/components/Card/Card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Card = ({
  gnome,
  to,
  hideFriendButton = false
}) => __jsx(_CardStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
  to: to,
  hairColor: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["convertColors"])(gnome && gnome.hair_color),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("div", {
  className: "banner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx(_AvatarStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
  src: gnome && gnome.thumbnail,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("img", {
  src: gnome && gnome.thumbnail,
  alt: `avatar ${gnome && gnome.name}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})), __jsx("header", {
  className: "description",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, gnome && gnome.name), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, gnome && gnome.professions.length > 0 ? gnome.professions.join(" • ") : "No Profession")), !hideFriendButton ? __jsx(_Modal_Modal_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  label: "View Friends",
  gnomes: gnome,
  to: to,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}) : null, !hideFriendButton ? __jsx(_Modal_Modal_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  label: "Gender Guess?",
  gnomes: gnome,
  to: to,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}) : null, __jsx(_InfoStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx(_InfoListStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
  hairColor: gnome && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["convertColors"])(gnome.hair_color),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, "Age"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, gnome && gnome.age)), __jsx(_InfoListStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
  hairColor: gnome && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["convertColors"])(gnome.hair_color),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, "Weight"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, gnome && Math.ceil(gnome.weight), " ", __jsx("span", {
  className: "unit",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "KG"))), __jsx(_InfoListStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
  hairColor: gnome && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["convertColors"])(gnome.hair_color),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, "Height"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, gnome && Math.ceil(gnome.height), " ", __jsx("span", {
  className: "unit",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, "CM")))), __jsx("div", {
  className: "banner-footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./pages/components/Card/CardStyles.jsx":
/*!**********************************************!*\
  !*** ./pages/components/Card/CardStyles.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GnomeCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  border-radius: 15px;
  background: ${({
  theme
}) => theme.cardBG};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  color: ${({
  theme
}) => theme.mainFontColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 5px 15px;
  max-width: 400px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  transition: 0.2s;
  width: 100%;

  &:hover {
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
    transition: 0.2s;
  }

  div.banner {
    position: absolute;
    top: 0;
    width: 100%;

  }

  header.description {
    margin: 10px 0px;
    position: relative;
    height: 112px;
    margin-top: 35px;
    padding: 0 10px;
    text-align: center;
    font-size: 0.8rem;

    h2 {
      margin: 0 0 10px;
    }
    & > div {
      font-size: 0.8rem;
    }
  }

  div.banner-footer {
    bottom: 0;
    background: ${props => props.hairColor};
    height: 8px;
    position: absolute;
    width: 100%;
  }

  @media screen and (min-width: 630px) {
    max-width: 160px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (GnomeCard);

/***/ }),

/***/ "./pages/components/Card/InfoListStyles.jsx":
/*!**************************************************!*\
  !*** ./pages/components/Card/InfoListStyles.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const InfoList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li`
  text-align: center;
  width: 33%;
  span {
    display: block;
  }
  span:first-child {
    color: ${({
  theme
}) => theme.secondaryFontColor}
    font-weight: normal;
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  span:last-child {
    color: ${({
  hairColor
}) => hairColor || "#f94"};
    font-weight: normal;
    font-size: 0.8rem;
    padding: 1px; 0 10px;

    span.unit {
      display: inline;
      font-size: 0.5rem;
      margin-left: -3px;
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (InfoList);

/***/ }),

/***/ "./pages/components/Card/InfoStyles.jsx":
/*!**********************************************!*\
  !*** ./pages/components/Card/InfoStyles.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Info = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul`
  display: flex;
  list-style: none;
  padding: 0 10px 12px;
`;
/* harmony default export */ __webpack_exports__["default"] = (Info);

/***/ }),

/***/ "./pages/components/DetailsInfo/AvatarStyles.jsx":
/*!*******************************************************!*\
  !*** ./pages/components/DetailsInfo/AvatarStyles.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Avatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  background: ${props => `url(${props.src}) no-repeat center`};
  background-size: cover;
  border: 4px solid ${({
  theme
}) => theme.cardBG};
  border-radius: 50%;
  box-sizing: border-box;
  margin: 65px auto 0;
  padding: 5px;
  height: 130px;
  position: relative;
  width: 130px;
  z-index: 1;
  img {
    position: absolute;
    height: 0;
    visibility: hidden;
    width: 0;
  }

  @media screen and (min-width: 400px) {
    height: 180px;
    margin: 40px auto 0;
    width: 180px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./pages/components/DetailsInfo/DetailsInfo.js":
/*!*****************************************************!*\
  !*** ./pages/components/DetailsInfo/DetailsInfo.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../utils */ "./utils.js");
/* harmony import */ var _DetailsInfoStyled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsInfoStyled */ "./pages/components/DetailsInfo/DetailsInfoStyled.jsx");
/* harmony import */ var _AvatarStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AvatarStyles */ "./pages/components/DetailsInfo/AvatarStyles.jsx");
/* harmony import */ var _InfoStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InfoStyles */ "./pages/components/DetailsInfo/InfoStyles.jsx");
/* harmony import */ var _InfoListStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InfoListStyles */ "./pages/components/DetailsInfo/InfoListStyles.jsx");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/components/DetailsInfo/DetailsInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const DetailsInfo = ({
  gnome
}) => __jsx(_DetailsInfoStyled__WEBPACK_IMPORTED_MODULE_2__["default"], {
  hairColor: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["convertColors"])(gnome && gnome.hair_color),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("div", {
  className: "banner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx(_AvatarStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
  src: gnome && gnome.thumbnail,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("img", {
  src: gnome && gnome.thumbnail,
  alt: `avatar ${gnome && gnome.name}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), __jsx("header", {
  className: "description",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, gnome && gnome.name), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, gnome && gnome.professions.length > 0 ? gnome.professions.join(" || ") : "No Profession")), __jsx(_InfoStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx(_InfoListStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
  hairColor: gnome && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["convertColors"])(gnome.hair_color),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "Age"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, gnome && gnome.age)), __jsx(_InfoListStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
  hairColor: gnome && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["convertColors"])(gnome.hair_color),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "Weight"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, gnome && Math.ceil(gnome.weight), " ", __jsx("span", {
  className: "unit",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "KG"))), __jsx(_InfoListStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
  hairColor: gnome && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["convertColors"])(gnome.hair_color),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, "Height"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, gnome && Math.ceil(gnome.height), " ", __jsx("span", {
  className: "unit",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, "CM"))), __jsx(_InfoListStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
  hairColor: gnome && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["convertColors"])(gnome.hair_color),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, "Hair color"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, gnome && gnome.hair_color.toUpperCase()))), __jsx("div", {
  className: "banner-footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (DetailsInfo);

/***/ }),

/***/ "./pages/components/DetailsInfo/DetailsInfoStyled.jsx":
/*!************************************************************!*\
  !*** ./pages/components/DetailsInfo/DetailsInfoStyled.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Details = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  border-radius: 5px;
  background: ${({
  theme
}) => theme.cardBG};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  color: ${({
  theme
}) => theme.mainFontColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  transition: 0.5s;
  width: 100%;

  div.banner {
    background: ${props => props.hairColor};
    height: 130px;
    position: absolute;
    top: 0;
    width: 100%;
  }

  header.description {
    margin: 10px 0 20px;
    padding: 0 10px;
    text-align: center;

    h2 {
      font-size: 1.6rem;
      margin: 0 0 10px;
    }
    & > div {
      font-size: 1rem;
      margin: 0 0 20px;
    }
  }

  div.banner-footer {
    bottom: 0;
    background: ${props => props.hairColor};
    height: 15px;
    position: absolute;
    width: 100%;
  }

  @media screen and (min-width: 400px) {
    header.description {
      h2 {
        font-size: 1.7rem;
      }
      & > div {
        font-size: 1.2rem;
      }
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Details);

/***/ }),

/***/ "./pages/components/DetailsInfo/InfoListStyles.jsx":
/*!*********************************************************!*\
  !*** ./pages/components/DetailsInfo/InfoListStyles.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const InfoList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li`
  text-align: center;
  width: 25%;
  span {
    display: block;
  }
  span:first-child {
    color: ${({
  theme
}) => theme.secondaryFontColor}
    font-weight: bold;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  span:last-child {
    color: ${({
  hairColor
}) => hairColor || "#f94"};
    font-weight: bold;
    font-size: 1.1rem;
    padding: 5px; 0 10px;

    span.unit {
      display: inline;
      font-size: 0.8rem;
      margin-left: -8px;
    }
  }

  @media screen and (min-width: 400px) {
    span:first-child {
      font-size: 1rem;
    }
    span:last-child {
      font-size: 1.3rem;

      span.unit {
        font-size: 0.9rem;
      }
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (InfoList);

/***/ }),

/***/ "./pages/components/DetailsInfo/InfoStyles.jsx":
/*!*****************************************************!*\
  !*** ./pages/components/DetailsInfo/InfoStyles.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Info = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul`
  display: flex;
  list-style: none;
  padding: 0 10px 12px;
`;
/* harmony default export */ __webpack_exports__["default"] = (Info);

/***/ }),

/***/ "./pages/components/Footer/Footer.js":
/*!*******************************************!*\
  !*** ./pages/components/Footer/Footer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FooterStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterStyles */ "./pages/components/Footer/FooterStyles.jsx");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/components/Footer/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_FooterStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}));

/***/ }),

/***/ "./pages/components/Footer/FooterStyles.jsx":
/*!**************************************************!*\
  !*** ./pages/components/Footer/FooterStyles.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer`
  background: #e7ecf0;
  color: #cfcfcf;
  padding: 12px 0;
  width: 100%;

  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/components/Gender/AvatarStyles.jsx":
/*!**************************************************!*\
  !*** ./pages/components/Gender/AvatarStyles.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Avatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  background: ${props => `url(${props.src}) no-repeat center`};
  background-size: cover
  box-sizing: border-box;
  margin: auto 0;
  padding: 5px;
  height: 100px;
  position: relative;
  margin-top: 0px;
  top: 0px;
  width: 100%;
  z-index: 1;
  img {
    position: absolute;
    height: 0;
    visibility: hidden;
    width: 0;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./pages/components/Gender/Gender.js":
/*!*******************************************!*\
  !*** ./pages/components/Gender/Gender.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux/actions/actions */ "./redux/actions/actions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../utils */ "./utils.js");
/* harmony import */ var _GenderCard_GenderCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GenderCard/GenderCard */ "./pages/components/Gender/GenderCard/GenderCard.js");
/* harmony import */ var _GenderStyled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GenderStyled */ "./pages/components/Gender/GenderStyled.jsx");
/* harmony import */ var _AvatarStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AvatarStyles */ "./pages/components/Gender/AvatarStyles.jsx");
/* harmony import */ var _InfoStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InfoStyles */ "./pages/components/Gender/InfoStyles.jsx");
/* harmony import */ var _InfoListStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./InfoListStyles */ "./pages/components/Gender/InfoListStyles.jsx");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/components/Gender/Gender.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Gender = props => {
  const {
    to,
    gnome
  } = props;
  const cut = gnome.name.indexOf(" ");
  const name = gnome.name.substr(0, cut);
  const {
    0: gender,
    1: setGender
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    props.fetchGender("name[]=" + name).then(response => {
      console.log(response);
      setGender(response);
      console.log(gender);
    });
  }, []);
  /*useEffect(() => {
     if (gender.length > 0) {
          //renderGenderData(gender);
     }
  },[gender]);*/

  return __jsx(_GenderStyled__WEBPACK_IMPORTED_MODULE_5__["default"], {
    to: to,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("div", {
    className: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), __jsx(_AvatarStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: gnome && gnome.thumbnail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("img", {
    src: gnome && gnome.thumbnail,
    alt: `avatar ${gnome && gnome.name}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  })), __jsx("header", {
    className: "headerBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, gnome && gnome.name), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, gnome.professions.length > 0 ? gnome.professions.join(" • ") : "No Profession")), __jsx(_GenderCard_GenderCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gender: gender,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), __jsx(_InfoStyles__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_InfoListStyles__WEBPACK_IMPORTED_MODULE_8__["default"], {
    hairColor: gnome && Object(_utils__WEBPACK_IMPORTED_MODULE_3__["convertColors"])(gnome.hair_color),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Age"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, gnome && gnome.age)), __jsx(_InfoListStyles__WEBPACK_IMPORTED_MODULE_8__["default"], {
    hairColor: gnome && Object(_utils__WEBPACK_IMPORTED_MODULE_3__["convertColors"])(gnome.hair_color),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "Weight"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, gnome && Math.ceil(gnome.weight), " ", __jsx("span", {
    className: "unit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "KG"))), __jsx(_InfoListStyles__WEBPACK_IMPORTED_MODULE_8__["default"], {
    hairColor: gnome && Object(_utils__WEBPACK_IMPORTED_MODULE_3__["convertColors"])(gnome.hair_color),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Height"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, gnome && Math.ceil(gnome.height), " ", __jsx("span", {
    className: "unit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "CM")))), __jsx("div", {
    className: "banner-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }));
};

const mapStateToProps = state => ({
  gender: state.gender
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, _redux_actions_actions__WEBPACK_IMPORTED_MODULE_2__)(Gender));

/***/ }),

/***/ "./pages/components/Gender/GenderCard/GenderCard.js":
/*!**********************************************************!*\
  !*** ./pages/components/Gender/GenderCard/GenderCard.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GenderCardStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenderCardStyles */ "./pages/components/Gender/GenderCard/GenderCardStyles.jsx");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/components/Gender/GenderCard/GenderCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const GenderCard = props => {
  let randomNumberAprox = Math.floor(Math.random() * (95 - 80 + 1)) + 80;

  const findOutIfFemale = name => {
    let isFemale;
    ;
    const char = name.substr(-1);
    isFemale = isVowel(char);

    function isVowel(x) {
      let result;
      result = x == "a" || x == "e" || x == "i" || x == "o" || x == "u";
      return result;
    }

    return isFemale;
  };

  if (props.gender.length > 0) {
    if (props.gender[0].gender) {
      return __jsx(_GenderCardStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: undefined
      }, __jsx("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: undefined
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: undefined
      }, props.gender[0].name, " it's a ", props.gender[0].gender == "male" ? "Boy" : "Girl", "!"), __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: undefined
      }, "(", props.gender[0].probability * 100, "% chances according to our report)")));
    } else if (!props.gender[0].gender && findOutIfFemale(props.gender[0].name) == true) {
      return __jsx(_GenderCardStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: undefined
      }, __jsx("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: undefined
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: undefined
      }, props.gender[0].name, " it's a Girl!"), __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: undefined
      }, "(", randomNumberAprox, "% chances according to our report)")));
    } else {
      return __jsx(_GenderCardStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: undefined
      }, __jsx("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: undefined
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: undefined
      }, props.gender[0].name, " could be an hermafrodith gnome with ", randomNumberAprox, "% of chances.")));
    }
  } else {
    return __jsx(_GenderCardStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: undefined
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    }, "Loading Gender...")));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (GenderCard);

/***/ }),

/***/ "./pages/components/Gender/GenderCard/GenderCardStyles.jsx":
/*!*****************************************************************!*\
  !*** ./pages/components/Gender/GenderCard/GenderCardStyles.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 // themes value received thenaks to themesProvider
// so themes variables are available in all styled components

const GenderResult = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header`
  align-items: center;
  background: #fff;
  /*box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9);*/
  display: flex;
  height: 150px;
  justify-content: center;

  h1 {
      color: #327c7c;
      text-decoration: none;
      letter-spacing: 1px;
      font-size: 1.5em;
  }
  h3 {

      color: #327c7c;
      text-decoration: none;
      font-size: 1.4em;
  }

  div.row {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0 5px;
    max-width: 300px;
    width: 100%;
  }

  div.column {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 5px;
    max-width: 450px;
    width: 100%;
    margin: auto;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (GenderResult);

/***/ }),

/***/ "./pages/components/Gender/GenderStyled.jsx":
/*!**************************************************!*\
  !*** ./pages/components/Gender/GenderStyled.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GenderCardStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  border-radius: 5px;
  background: ${({
  theme
}) => theme.cardBG};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  color: ${({
  theme
}) => theme.mainFontColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 5px 15px;
  max-width: 400px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  transition: 0.2s;
  width: 100%;

  &:hover {
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
    transition: 0.2s;
  }

  div.banner {
    position: absolute;
    top: 0;
    width: 100%;

  }

  header.headerBox{
    margin: 10px 0px;
    position: relative;
    height: 30px;
    margin-top: 35px;
    padding: 0 10px;
    text-align: center;
    font-size: 0.8rem;

    h2 {
      margin: 0 0 10px;
    }
    & > div {
      font-size: 0.8rem;
    }
  }

  div.banner-footer {
    bottom: 0;
    background: ${props => props.hairColor};
    height: 8px;
    position: absolute;
    width: 100%;
  }

  @media screen and (min-width: 630px) {
    max-width: 570px;
    margin: auto;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (GenderCardStyle);

/***/ }),

/***/ "./pages/components/Gender/InfoListStyles.jsx":
/*!****************************************************!*\
  !*** ./pages/components/Gender/InfoListStyles.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const InfoList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li`
  text-align: center;
  width: 33%;
  span {
    display: block;
  }
  span:first-child {
    color: ${({
  theme
}) => theme.secondaryFontColor}
    font-weight: normal;
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  span:last-child {
    color: ${({
  hairColor
}) => hairColor || "#f94"};
    font-weight: normal;
    font-size: 0.8rem;
    padding: 1px; 0 10px;

    span.unit {
      display: inline;
      font-size: 0.5rem;
      margin-left: -3px;
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (InfoList);

/***/ }),

/***/ "./pages/components/Gender/InfoStyles.jsx":
/*!************************************************!*\
  !*** ./pages/components/Gender/InfoStyles.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Info = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul`
  display: flex;
  list-style: none;
  padding: 0 10px 12px;
`;
/* harmony default export */ __webpack_exports__["default"] = (Info);

/***/ }),

/***/ "./pages/components/Loader/Loader.js":
/*!*******************************************!*\
  !*** ./pages/components/Loader/Loader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/components/Loader/Loader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Loader = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "Loading..."));

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./pages/components/Modal/Modal.js":
/*!*****************************************!*\
  !*** ./pages/components/Modal/Modal.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactjs-popup */ "reactjs-popup");
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactjs_popup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_Details_Details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../containers/Details/Details.js */ "./pages/containers/Details/Details.js");
/* harmony import */ var _components_Gender_Gender_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/Gender/Gender.js */ "./pages/components/Gender/Gender.js");
/* harmony import */ var _ModalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModalStyles */ "./pages/components/Modal/ModalStyles.jsx");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/components/Modal/Modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (({
  label,
  gnomes,
  to
}) => {
  return __jsx(_ModalStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(reactjs_popup__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "popup",
    trigger: __jsx("button", {
      className: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    }, " ", label, " "),
    modal: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, close => {
    if (label == "View Friends") {
      return __jsx("div", {
        disabled: true,
        className: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: undefined
      }, __jsx("a", {
        className: "close",
        onClick: close,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: undefined
      }, "\xD7"), __jsx("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: undefined
      }, " ", to.replace(/-/g, ' ').replace(/[0-9]/g, ''), " Friends "), __jsx("div", {
        className: "contentFriends",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: undefined
      }, __jsx(_containers_Details_Details_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        gnomeURL: to,
        gnomes: gnomes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: undefined
      })), __jsx("div", {
        className: "actions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: undefined
      }));
    } else {
      return __jsx("div", {
        disabled: true,
        className: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: undefined
      }, __jsx("a", {
        className: "close",
        onClick: close,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: undefined
      }, "\xD7"), __jsx("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: undefined
      }, "Gender Guess"), __jsx("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: undefined
      }, __jsx(_components_Gender_Gender_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        to: to,
        gnome: gnomes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: undefined
      })), __jsx("div", {
        className: "actions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: undefined
      }, __jsx(reactjs_popup__WEBPACK_IMPORTED_MODULE_1___default.a, {
        trigger: __jsx("button", {
          className: "check",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: undefined
        }, " Click here to check our Data Source :) "),
        position: "top center",
        closeOnDocumentClick: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: undefined
      }, __jsx("span", {
        className: "toolTip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: undefined
      }, "Our calculations are based on genderize.io plus our magic algorythm! XD"))));
    }
  }));
});

/***/ }),

/***/ "./pages/components/Modal/ModalStyles.jsx":
/*!************************************************!*\
  !*** ./pages/components/Modal/ModalStyles.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const ModalStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`

    button {
      margin-left: auto;
      margin-right: auto;
      top: -12px;
      padding-bottom: 5px;
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      background: transparent;
      /*font-weight: lighter;
      font-size: 0.8rem;
      color: #146e7d;*/
      font-size: 0.7rem;
      color: #4a98a5;
      font-weight: 600;
    }
    .gender {
      margin-left: auto;
      margin-right: auto;
      top: -20px;
      padding-bottom: 5px;
      padding-top: 15px;
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      background: transparent;
      font-weight: normal;
      font-size: 1.3rem;
      color: #7ca7a7;
    }

    @media screen and (min-width: 630px) {
      left: 40%;
    }

    div.popup {
      background: #ccc !important;
    }

    div.modal {
      font-size: 12px;
    }
    div.header {
      width: 100%;
      font-size: 18px;
      text-align: center;
      padding: 5px;
    }
    div.contentFriends {
      width: 100%;
      height: 50%;
      margin-top: -12px;
    }
    div.content {
      width: 100%;
      height: 50%;
      margin-top: 12px;
    }
    div.actions {
      width: 100%;
      padding: 10px 5px;
      margin: auto;
      text-align: center;
    }
    .check{
     font-weight: bold;
     padding-top: 20px;
     font-family: monospace;
     font-size: 1.2em;
    }
    .toolTip{
      font-size: 1.9em;
    }
    a.close {
      cursor: pointer;
      position: absolute;
      display: block;
      padding: 2px 5px;
      line-height: 20px;
      right: 5px;
      top: 5px;
      font-size: 24px;
      background: #ffffff;
      border-radius: 18px;
      border: 1px solid #cfcece;
    }`;
/* harmony default export */ __webpack_exports__["default"] = (ModalStyle);

/***/ }),

/***/ "./pages/components/OrderBy/OrderBy.js":
/*!*********************************************!*\
  !*** ./pages/components/OrderBy/OrderBy.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../redux/actions/actions */ "./redux/actions/actions.js");
/* harmony import */ var _OrderByStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OrderByStyles */ "./pages/components/OrderBy/OrderByStyles.jsx");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/components/OrderBy/OrderBy.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const OrderBy = props => __jsx(_OrderByStyles__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
  active: props.orderBy === props.children
}, props, {
  onClick: OrderBy.handleClick(props.updateOrderBy, props.getCurrentPage),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), props.children);

OrderBy.defaultProps = {
  maxWidth: "100%",
  orderBy: ""
};

OrderBy.handleClick = (updateOrderBy, getCurrentPage) => event => {
  event.preventDefault();
  updateOrderBy(event.currentTarget.textContent);
  getCurrentPage(0);
};

function mapStateToProps(state) {
  return {
    orderBy: state.orderBy
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, _redux_actions_actions__WEBPACK_IMPORTED_MODULE_2__)(OrderBy));

/***/ }),

/***/ "./pages/components/OrderBy/OrderByStyles.jsx":
/*!****************************************************!*\
  !*** ./pages/components/OrderBy/OrderByStyles.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const OrderButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  background: ${({
  active,
  theme
}) => active ? theme.hoverColor : "inherit"};
  border: 0.5px solid
    ${({
  active,
  theme
}) => active ? theme.hoverColor : "#e9e8e8"};
  box-sizing: border-box;
  color: ${({
  active,
  theme
}) => active ? theme.hoverFontColor : "#666"};
  cursor: pointer;
  font-family: Helvetica, sans-serif;
  font-size: 0.975rem;
  font-weight: lighter;
  max-width: ${({
  maxWidth
}) => maxWidth};
  padding: 16px 15px;
  width: ${({
  width
}) => width || "50%"};
  &:hover {
    background: ${({
  active,
  theme
}) => active ? theme.hoverColor : "#d8e9eb"};
  }
  @media screen and (min-width: 630px) {

  }
  @media screen and (min-width: 990px) {
    width: ${({
  highScreenWidth
}) => highScreenWidth || "16%"};
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (OrderButton);

/***/ }),

/***/ "./pages/components/Pagination/BtnStyled.jsx":
/*!***************************************************!*\
  !*** ./pages/components/Pagination/BtnStyled.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PaginationBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  background: ${({
  disableStyle
}) => disableStyle ? "none" : "#80cf86"}
  color: ${({
  disableStyle
}) => disableStyle ? "transparent" : "#fff"};
  cursor: ${({
  disableStyle
}) => disableStyle ? "context-menu" : "pointer"};
  font-size: 0.9rem;
  width: 80%;
  max-width: 140px;
  padding: 6px 0;
  text-align: center;

  &:hover {
    background: ${({
  disableStyle
}) => disableStyle ? "transparent" : "##e74142"}
  }
  &:focus {
    outline:none;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (PaginationBtn);

/***/ }),

/***/ "./pages/components/Pagination/Pagination.js":
/*!***************************************************!*\
  !*** ./pages/components/Pagination/Pagination.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WrapperStyled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WrapperStyled */ "./pages/components/Pagination/WrapperStyled.jsx");
/* harmony import */ var _BtnStyled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BtnStyled */ "./pages/components/Pagination/BtnStyled.jsx");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/components/Pagination/Pagination.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const nextButtonValue = "Next";
const previousButtonValue = "Previous";

const Pagination = ({
  page,
  updateGlobalState,
  maxPages
}) => //const callGenderLocal = callGender;
//const propsGenderLocal = propsGender;
__jsx(_WrapperStyled__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(_BtnStyled__WEBPACK_IMPORTED_MODULE_2__["default"], {
  disableStyle: page <= 0,
  page: page,
  onClick: Pagination.onClick(page, updateGlobalState, maxPages),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Previous"), __jsx("span", {
  className: "current-page",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "Page: ", page + 1, " / ", maxPages + 1), __jsx(_BtnStyled__WEBPACK_IMPORTED_MODULE_2__["default"], {
  disableStyle: page >= maxPages,
  page: page,
  onClick: Pagination.onClick(page, updateGlobalState, maxPages),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "Next"));

Pagination.onClick = (page, updateGlobalState, maxPages) => (event = event.currentTarget) => {
  event.preventDefault();
  window.scroll(null, 0);
  const btnName = event.currentTarget.textContent.toLowerCase();
  /*let format;
   const setDirection = (direction) =>{
         let updatedPageNext = page + 1;
        let updatedPagePrevious = page  - 1;
        const paginationDirection = direction == "next" ? updatedPageNext : updatedPagePrevious;
         const gnomeNames = gnomes.map(gnome => gnome.name)
        const pageGnomes = gnomeNames.slice(
        itemsByPage * paginationDirection,
        itemsByPage + paginationDirection * itemsByPage
        )
         pageGnomes.map(gnome => (
          gnome => gnome.name
        ))
           const getFirstName = arr =>{
            var arrCroped = [];
              for(var a=0; a<arr.length; a++){
                 var corte = arr[a].indexOf(" ");
                arrCroped[a] = arr[a].substr(0, corte);
              }
              function removeDuplicates(array) {
                return array.filter((a, b) => array.indexOf(a) === b)
              };
              return removeDuplicates(arrCroped);
          }
           const justRenderedPageNames = getFirstName(pageGnomes);
           const parseToService = arrToFormat =>{
            var arrayFormated = [];
               for(var b=0; b<arrToFormat.length; b++){
                arrayFormated[b] = "name[]="+arrToFormat[b];
              }
               return arrayFormated;
           }
           format = parseToService(justRenderedPageNames).toString().replace(/,/g, "&");
   }*/

  if (btnName === nextButtonValue.toLowerCase()) {
    const nextPage = page + 1;

    if (page !== maxPages) {
      updateGlobalState(nextPage); //setDirection("next")
      //callGender(format);
    }
  } else if (btnName === previousButtonValue.toLowerCase()) {
    const previousPage = page - 1;

    if (page > 0) {
      updateGlobalState(previousPage); //setDirection("previous")
      //callGender(format);
    }
  }
};

Pagination.defaultProps = {
  page: false
};
/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./pages/components/Pagination/WrapperStyled.jsx":
/*!*******************************************************!*\
  !*** ./pages/components/Pagination/WrapperStyled.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PaginationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  left: 40px;
  max-width: 820px;
  width: 90%;

  & .current-page {
    font-size: 0.95rem;
    font-weight: bold;
    text-align: center;
    color: #80cf86;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (PaginationWrapper);

/***/ }),

/***/ "./pages/components/Select/Select.jsx":
/*!********************************************!*\
  !*** ./pages/components/Select/Select.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SelectStyled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectStyled */ "./pages/components/Select/SelectStyled.jsx");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/components/Select/Select.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Select = ({
  updateState,
  stateName,
  defaultValue,
  items,
  state,
  maxWidth,
  updateCurrentPage
}) => __jsx(_SelectStyled__WEBPACK_IMPORTED_MODULE_1__["default"], {
  maxWidth: maxWidth,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("select", {
  value: state && state[stateName] && state[stateName],
  onChange: Select.onChange(updateState, updateCurrentPage),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, defaultValue && [defaultValue, ...items].map(item => __jsx("option", {
  value: item,
  key: item,
  defaultChecked: state[stateName] === item,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, item))));

Select.onChange = (updateState, updateCurrentPage) => event => {
  event.preventDefault();
  updateState(event.currentTarget.value);
  updateCurrentPage(0);
};

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./pages/components/Select/SelectStyled.jsx":
/*!**************************************************!*\
  !*** ./pages/components/Select/SelectStyled.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SelectComponent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label`
  color: ${({
  theme
}) => theme.suggestionsTXT};
  display: block;
  font-size: 1.1rem;
  margin: 0;
  text-align: center;
  width: 96%;

  & select {
    appearance: none;
    border: 1px solid #e5e5e5;
    border-radius: 5px;

    color: #aaa;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: normal;
    height: 38px;
    line-height: 15px;
    padding: 0 15px;
    outline: 0;
    outline-color: transparent;
    text-align: center;
    text-indent: 0.01px;
    text-overflow: "";
    width: 100%;


    option {
      color: ${({
  theme
}) => theme.suggestionsTXT} !important;
    }
    
  }
  @media (min-width: 400px) {
    font-size: 1.2rem;
    & span {
      font-size: 1rem;
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (SelectComponent);

/***/ }),

/***/ "./pages/containers/Details/Details.js":
/*!*********************************************!*\
  !*** ./pages/containers/Details/Details.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_DetailsInfo_DetailsInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/DetailsInfo/DetailsInfo */ "./pages/components/DetailsInfo/DetailsInfo.js");
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/Card/Card */ "./pages/components/Card/Card.js");
/* harmony import */ var _DetailsRowStyled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailsRowStyled */ "./pages/containers/Details/DetailsRowStyled.jsx");
/* harmony import */ var _DetailsWrapperStyled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DetailsWrapperStyled */ "./pages/containers/Details/DetailsWrapperStyled.jsx");
/* harmony import */ var _FriendsRowStyled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FriendsRowStyled */ "./pages/containers/Details/FriendsRowStyled.jsx");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/containers/Details/Details.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Details = ({
  gnomeURL,
  gnomes
}) => {
  window.scroll(null, 0);
  const selectedGnome = gnomes && gnomes.find(gnome => gnomeURL === `${gnome.id}-${gnome.name.split(" ").join("-")}`);
  const friends = selectedGnome && selectedGnome.friends.map(friend => friend.toLowerCase());
  const renderFriends = gnomes && gnomes.filter(gnome => friends.some(friend => gnome.name.toLowerCase() === friend));
  return __jsx(_DetailsWrapperStyled__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(_DetailsRowStyled__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx(_FriendsRowStyled__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, renderFriends.length > 0 ? renderFriends.map(friend => __jsx("div", {
    key: `${friend.id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: `${friend.id}`,
    gnome: friend,
    to: `${friend.id}-${friend.name.split(" ").join("-")}`,
    hideFriendButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }))) : __jsx("div", {
    className: "notFound",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "...seems to have no friends")));
};

const mapStateToProps = state => ({
  gnomes: state.gnomes
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Details));

/***/ }),

/***/ "./pages/containers/Details/DetailsRowStyled.jsx":
/*!*******************************************************!*\
  !*** ./pages/containers/Details/DetailsRowStyled.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const DetailsRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;

  @media (min-width: 630px) {
    justify-content: flex-start;
  }

  div.notFound {
    color: #ccc;
    font-size: 1.5rem;
    font-weight: lighter;
    padding: 140px 30px
    text-align: center;
    width: 100%;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (DetailsRow);

/***/ }),

/***/ "./pages/containers/Details/DetailsWrapperStyled.jsx":
/*!***********************************************************!*\
  !*** ./pages/containers/Details/DetailsWrapperStyled.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const DetailsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main`
  border-radius: 5px;
  margin: 10px auto;
  max-width: 900px;
  max-heigth: 600px;
  padding: 0;

  @media (max-width: 990px) {
    max-width: 610px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (DetailsWrapper);

/***/ }),

/***/ "./pages/containers/Details/FriendsRowStyled.jsx":
/*!*******************************************************!*\
  !*** ./pages/containers/Details/FriendsRowStyled.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const DetailsRow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;

  @media (min-width: 630px) {
    justify-content: flex-start;
  }

  div.notFound {
    color: #ccc;
    font-size: 1.5rem;
    font-weight: lighter;
    padding: 140px 30px
    text-align: center;
    width: 100%;
  }
`;
const FriendsRow = DetailsRow.extend`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  padding: 0 15px;
`;
/* harmony default export */ __webpack_exports__["default"] = (FriendsRow);

/***/ }),

/***/ "./pages/containers/Filters/Filters.js":
/*!*********************************************!*\
  !*** ./pages/containers/Filters/Filters.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../redux/actions/actions */ "./redux/actions/actions.js");
/* harmony import */ var _components_AutoComplete_AutoComplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/AutoComplete/AutoComplete */ "./pages/components/AutoComplete/AutoComplete.js");
/* harmony import */ var _components_Select_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/Select/Select */ "./pages/components/Select/Select.jsx");
/* harmony import */ var _components_OrderBy_OrderBy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/OrderBy/OrderBy.js */ "./pages/components/OrderBy/OrderBy.js");
/* harmony import */ var _FormSearchStyled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormSearchStyled */ "./pages/containers/Filters/FormSearchStyled.jsx");
/* harmony import */ var _FormRowStyled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormRowStyled */ "./pages/containers/Filters/FormRowStyled.jsx");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/containers/Filters/Filters.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Filters = props => {
  const gnomeNames = props.gnomes.map(gnome => gnome.name);
  let getJobs = [];

  for (let i = 0; i < props.gnomes.length; i++) {
    getJobs = getJobs.concat(props.gnomes[i].professions);
  }

  const jobs = Array.from(new Set(getJobs));
  return __jsx(_FormSearchStyled__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(_FormRowStyled__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_components_OrderBy_OrderBy_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Most Friendly"), __jsx(_components_OrderBy_OrderBy_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Less Friendly"), __jsx(_components_OrderBy_OrderBy_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Youngest"), __jsx(_components_OrderBy_OrderBy_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Oldest"), __jsx(_components_OrderBy_OrderBy_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Lightest"), __jsx(_components_OrderBy_OrderBy_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Heaviest")), __jsx(_FormRowStyled__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx("div", {
    className: "filterWrappTitles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("div", {
    className: "profession",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Search by Name"), __jsx("div", {
    className: "profession",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Search by Profession")), __jsx(_FormRowStyled__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    className: "filterWrapp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(_components_AutoComplete_AutoComplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
    stateName: "searchTerm",
    updateCurrentPage: props.getCurrentPage,
    parentUpdateState: props.getSearchText,
    autoCompleteItems: gnomeNames,
    maxSuggests: 5,
    maxWidth: "100%",
    labelName: "Search Gnome Name: ",
    placeholder: "Type Gnome Name: ",
    includeSearchTerm: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), __jsx(_components_Select_Select__WEBPACK_IMPORTED_MODULE_4__["default"], {
    items: jobs && jobs,
    defaultValue: "All Professions",
    stateName: "filteBy",
    maxWidth: "100%",
    updateState: props.filterByJob,
    updateCurrentPage: props.getCurrentPage,
    state: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }))));
};

function mapStateToProps(state) {
  return {
    gnomes: state.gnomes
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, _redux_actions_actions__WEBPACK_IMPORTED_MODULE_2__)(Filters));

/***/ }),

/***/ "./pages/containers/Filters/FormRowStyled.jsx":
/*!****************************************************!*\
  !*** ./pages/containers/Filters/FormRowStyled.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home_HomeWrapperStyled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Home/HomeWrapperStyled */ "./pages/containers/Home/HomeWrapperStyled.jsx");


const FormRow = _Home_HomeWrapperStyled__WEBPACK_IMPORTED_MODULE_1__["default"].withComponent("div").extend`
  background: inherit;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  width: 100%;
`;
/* harmony default export */ __webpack_exports__["default"] = (FormRow);

/***/ }),

/***/ "./pages/containers/Filters/FormSearchStyled.jsx":
/*!*******************************************************!*\
  !*** ./pages/containers/Filters/FormSearchStyled.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FormSearch = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: block;
  width: 100%;

  div.profession{
    height: 40px;
    padding-top: 20px;
    width: 50%;
    color: #a3a3a3;
  }

  div.filterWrapp{
    display: inline-flex;
    width: 96%;
  }

  div.filterWrappTitles{
    display: inline-flex;
    align: center;
    width: 100%;
    padding-left: 19px;
    padding-bottom: 4px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (FormSearch);

/***/ }),

/***/ "./pages/containers/Header/Header.js":
/*!*******************************************!*\
  !*** ./pages/containers/Header/Header.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HeaderStyled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderStyled */ "./pages/containers/Header/HeaderStyled.jsx");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/containers/Header/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Header = () => __jsx(_HeaderStyled__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "gnomo-matic-gender-search")));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/containers/Header/HeaderStyled.jsx":
/*!**************************************************!*\
  !*** ./pages/containers/Header/HeaderStyled.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 // themes value received thenaks to themesProvider
// so themes variables are available in all styled components

const HeaderComponent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header`
  align-items: center;
  background: #146e7d;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9);
  display: flex;
  height: 65px;
  justify-content: center;

  h1 {

      color: #eceeee;
      text-decoration: none;
      letter-spacing: 6px;
      font-size: 1.7em;
  }

  div.row {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0 5px;
    max-width: 900px;
    width: 100%;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (HeaderComponent);

/***/ }),

/***/ "./pages/containers/Home/Home.js":
/*!***************************************!*\
  !*** ./pages/containers/Home/Home.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Filters_Filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Filters/Filters */ "./pages/containers/Filters/Filters.js");
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/Card/Card */ "./pages/components/Card/Card.js");
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../redux/actions/actions */ "./redux/actions/actions.js");
/* harmony import */ var _components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/Pagination/Pagination */ "./pages/components/Pagination/Pagination.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../utils */ "./utils.js");
/* harmony import */ var _HomeRowStyled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HomeRowStyled */ "./pages/containers/Home/HomeRowStyled.jsx");
/* harmony import */ var _HomeWrapperStyled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HomeWrapperStyled */ "./pages/containers/Home/HomeWrapperStyled.jsx");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/containers/Home/Home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const Home = props => {
  const {
    searchTerm,
    gnomes,
    orderByFilter,
    currentPage
  } = props;
  const searchFilters = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["filterGnomesBy"])(gnomes, orderByFilter).filter(gnome => {
    const isJob = gnome.professions.find(profession => profession === props.filterBy);
    const hasProfession = gnome.professions.some(profession => profession === isJob);
    return props.filterBy === "All" ? gnome : hasProfession;
  }).filter(gnome => {
    const search = gnome.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
    return search;
  });
  return __jsx(_HomeWrapperStyled__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Nicolas Bergues"), __jsx("link", {
    rel: "shortcut icon",
    href: "favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), __jsx("meta", {
    name: "description",
    content: "Assesment App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  })), __jsx(_HomeRowStyled__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(_Filters_Filters__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  })), __jsx(_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    page: currentPage,
    updateGlobalState: props.getCurrentPage,
    maxPages: Math.floor(searchFilters.length / _utils__WEBPACK_IMPORTED_MODULE_8__["itemsByPage"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx(_HomeRowStyled__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["TransitionGroup"], {
    className: "cards",
    in: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, searchFilters.length > 0 ? searchFilters.slice(_utils__WEBPACK_IMPORTED_MODULE_8__["itemsByPage"] * currentPage, _utils__WEBPACK_IMPORTED_MODULE_8__["itemsByPage"] + currentPage * _utils__WEBPACK_IMPORTED_MODULE_8__["itemsByPage"]).map(gnome => __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
    key: gnome.id,
    timeout: 500,
    classNames: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: gnome.id,
    gnome: gnome && gnome,
    to: `${gnome.id}-${gnome.name.split(" ").join("-")}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }))) : __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
    timeout: 500,
    classNames: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("div", {
    className: "notFound",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, searchFilters.length, " no gnomes founded for current search")))), __jsx(_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    page: currentPage,
    updateGlobalState: props.getCurrentPage,
    maxPages: Math.floor(searchFilters.length / _utils__WEBPACK_IMPORTED_MODULE_8__["itemsByPage"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }));
};

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm,
    gnomes: state.gnomes,
    filterBy: state.filterBy,
    orderByFilter: state.orderBy,
    currentPage: state.currentPage
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__)(Home));

/***/ }),

/***/ "./pages/containers/Home/HomeRowStyled.jsx":
/*!*************************************************!*\
  !*** ./pages/containers/Home/HomeRowStyled.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HomeRow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
  padding: 10px 15px;
  width: 100%;

  div.notFound {
    color: #ccc;
    font-size: 1.5rem;
    font-weight: lighter;
    padding: 140px 30px
    text-align: center;
    width: 100%;
  }

div.cards{
  background: #fff;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
  padding-top: 10px;
}
/*
div.cards-enter.cards-enter-active {
	opacity: 1;
	transition: opacity 900ms ease-in;
}

div.cards-leave {
	opacity: 1;
}

div.cards-leave.cards-leave-active {
	opacity: 0.01;
	transition: opacity 900ms ease-in;
}*/


div.item-enter {
	   opacity: 0.01;
}

div.item-enter.item-enter-active {
	opacity: 1;
	transition: opacity 1200ms ease-in;
}

div.item-leave {
	opacity: 1;
}

div.item-leave.item-leave-active {
	opacity: 0.01;
	transition: opacity 1200ms ease-in;
}

  @media (min-width: 630px) {
    justify-content: flex-start;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (HomeRow);

/***/ }),

/***/ "./pages/containers/Home/HomeWrapperStyled.jsx":
/*!*****************************************************!*\
  !*** ./pages/containers/Home/HomeWrapperStyled.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HomeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main`
  margin: 10px auto;
  max-width: 900px;
  position: relative;

  @media (max-width: 990px) {
    max-width: 610px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (HomeWrapper);

/***/ }),

/***/ "./pages/containers/Main.js":
/*!**********************************!*\
  !*** ./pages/containers/Main.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/actions */ "./redux/actions/actions.js");
/* harmony import */ var _components_Loader_Loader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loader/Loader.js */ "./pages/components/Loader/Loader.js");
/* harmony import */ var _Home_Home_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home/Home.js */ "./pages/containers/Home/Home.js");
/* harmony import */ var _Header_Header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header/Header.js */ "./pages/containers/Header/Header.js");
/* harmony import */ var _components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/Footer/Footer.js */ "./pages/components/Footer/Footer.js");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/containers/Main.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class Main extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleFirstTab", e => {
      if (e.keyCode === 9) {
        document.body.classList.add('user-is-tabbing');
        document.removeEventListener('keydown', this.handleFirstTab);
      }
    });

    _defineProperty(this, "handleClick", e => {
      document.body.classList.remove('user-is-tabbing');
      document.addEventListener('keydown', this.handleFirstTab);
    });

    this.state = {};
  }

  componentDidMount() {
    //prevent ugly glow on button selected
    document.addEventListener('keydown', this.handleFirstTab);
    document.addEventListener('click', this.handleClick);
    this.props.fetchGnomes();
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, this.props.gnomes.length === 0 ? __jsx(_components_Loader_Loader_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }) : __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx(_Home_Home_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: this.props,
      store: this.props.store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx(_components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })));
  }

}

function mapStateToProps(state) {
  return {
    gnomes: state.gnomes
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, _redux_actions_actions__WEBPACK_IMPORTED_MODULE_3__)(Main));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../redux/store/configureStore */ "./redux/store/configureStore.js");
/* harmony import */ var _containers_Main_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/Main.js */ "./pages/containers/Main.js");
/* harmony import */ var _MainStyled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../MainStyled */ "./MainStyled.jsx");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const store = Object(_redux_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"])();

const Index = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
  theme: _MainStyled__WEBPACK_IMPORTED_MODULE_6__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(_containers_Main_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}))));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./redux/actions/actions.js":
/*!**********************************!*\
  !*** ./redux/actions/actions.js ***!
  \**********************************/
/*! exports provided: getGnomes, fetchGnomes, fetchGender, getGender, getSearchText, filterByJob, updateOrderBy, getCurrentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGnomes", function() { return getGnomes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGnomes", function() { return fetchGnomes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGender", function() { return fetchGender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGender", function() { return getGender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchText", function() { return getSearchText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterByJob", function() { return filterByJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOrderBy", function() { return updateOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPage", function() { return getCurrentPage; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils */ "./utils.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./redux/actions/types.js");



const getGnomes = gnomes => ({
  type: _types__WEBPACK_IMPORTED_MODULE_2__["REQUEST_GNOMES"],
  payload: gnomes
});
const fetchGnomes = () => async dispatch => {
  const offlineGnomes = localStorage.getItem("gnomes");

  if (offlineGnomes) {
    const gnomes = JSON.parse(offlineGnomes);
    return dispatch(getGnomes(gnomes));
  }

  try {
    const {
      data: {
        Brastlewark: gnomes
      }
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_utils__WEBPACK_IMPORTED_MODULE_1__["gnomesAPI"]);
    const gnomesToJSON = JSON.stringify(gnomes);
    localStorage.setItem("gnomes", gnomesToJSON);
    dispatch(getGnomes(gnomes));
  } catch (err) {
    throw new Error(err);
  }
};
const fetchGender = params => async dispatch => {
  const offlineGender = localStorage.getItem("gender");

  if (offlineGender) {
    const gender = JSON.parse(offlineGender);
    return dispatch(getGender(gender));
  }

  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_utils__WEBPACK_IMPORTED_MODULE_1__["genderGuessingAPI"] + params); //localStorage.setItem("gender", genderToJSON);

    dispatch(getGender(data));
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
const getGender = gender => ({
  type: _types__WEBPACK_IMPORTED_MODULE_2__["REQUEST_GENDER"],
  payload: gender
});
const getSearchText = searchTerm => ({
  type: _types__WEBPACK_IMPORTED_MODULE_2__["SEARCH_TERM"],
  payload: searchTerm
});
const filterByJob = job => ({
  type: _types__WEBPACK_IMPORTED_MODULE_2__["FILTER_BY_JOB"],
  payload: job
});
const updateOrderBy = order => ({
  type: _types__WEBPACK_IMPORTED_MODULE_2__["ORDER_BY_FILTER"],
  payload: order
});
const getCurrentPage = page => ({
  type: _types__WEBPACK_IMPORTED_MODULE_2__["CURRENT_PAGE"],
  payload: page
});

/***/ }),

/***/ "./redux/actions/types.js":
/*!********************************!*\
  !*** ./redux/actions/types.js ***!
  \********************************/
/*! exports provided: REQUEST_GNOMES, REQUEST_GENDER, SEARCH_TERM, FILTER_BY_JOB, ORDER_BY_FILTER, CURRENT_PAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_GNOMES", function() { return REQUEST_GNOMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_GENDER", function() { return REQUEST_GENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_TERM", function() { return SEARCH_TERM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_BY_JOB", function() { return FILTER_BY_JOB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_BY_FILTER", function() { return ORDER_BY_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_PAGE", function() { return CURRENT_PAGE; });
const REQUEST_GNOMES = "REQUEST_GNOMES";
const REQUEST_GENDER = "REQUEST_GENDER";
const SEARCH_TERM = "SEARCH_TERM";
const FILTER_BY_JOB = "FILTER_BY_JOB";
const ORDER_BY_FILTER = "ORDER_BY_FILTER";
const CURRENT_PAGE = "CURRENT_PAGE";

/***/ }),

/***/ "./redux/reducers/genderReducer.js":
/*!*****************************************!*\
  !*** ./redux/reducers/genderReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../actions/types */ "./redux/actions/types.js");


function genderReducer(state = [], action) {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["REQUEST_GENDER"]:
      return action.payload;

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (genderReducer);

/***/ }),

/***/ "./redux/reducers/gnomesReducer.js":
/*!*****************************************!*\
  !*** ./redux/reducers/gnomesReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../actions/types */ "./redux/actions/types.js");


function gnomesReducer(state = [], action) {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["REQUEST_GNOMES"]:
      return action.payload;

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (gnomesReducer);

/***/ }),

/***/ "./redux/reducers/orderByReducer.jsx":
/*!*******************************************!*\
  !*** ./redux/reducers/orderByReducer.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../actions/types */ "./redux/actions/types.js");


function orderByReducer(state = "", action) {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["ORDER_BY_FILTER"]:
      return action.payload;

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (orderByReducer);

/***/ }),

/***/ "./redux/reducers/paginationReducer.jsx":
/*!**********************************************!*\
  !*** ./redux/reducers/paginationReducer.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../actions/types */ "./redux/actions/types.js");


function paginationReducer(state = 0, action) {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CURRENT_PAGE"]:
      return action.payload;

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (paginationReducer);

/***/ }),

/***/ "./redux/reducers/professionsReducer.jsx":
/*!***********************************************!*\
  !*** ./redux/reducers/professionsReducer.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../actions/types */ "./redux/actions/types.js");


function professionsReducer(state = "", action) {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["FILTER_BY_JOB"]:
      return action.payload;

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (professionsReducer);

/***/ }),

/***/ "./redux/reducers/reducers.js":
/*!************************************!*\
  !*** ./redux/reducers/reducers.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gnomesReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gnomesReducer */ "./redux/reducers/gnomesReducer.js");
/* harmony import */ var _genderReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genderReducer */ "./redux/reducers/genderReducer.js");
/* harmony import */ var _searchReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchReducer */ "./redux/reducers/searchReducer.jsx");
/* harmony import */ var _professionsReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./professionsReducer */ "./redux/reducers/professionsReducer.jsx");
/* harmony import */ var _orderByReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderByReducer */ "./redux/reducers/orderByReducer.jsx");
/* harmony import */ var _paginationReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginationReducer */ "./redux/reducers/paginationReducer.jsx");







const reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  gnomes: _gnomesReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  gender: _genderReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  searchTerm: _searchReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  filterBy: _professionsReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  orderBy: _orderByReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  currentPage: _paginationReducer__WEBPACK_IMPORTED_MODULE_6__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./redux/reducers/searchReducer.jsx":
/*!******************************************!*\
  !*** ./redux/reducers/searchReducer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../actions/types */ "./redux/actions/types.js");


function searchReducer(state = "", action) {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SEARCH_TERM"]:
      return action.payload;

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (searchReducer);

/***/ }),

/***/ "./redux/store/configureStore.js":
/*!***************************************!*\
  !*** ./redux/store/configureStore.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../reducers/reducers */ "./redux/reducers/reducers.js");



const initialValues = {
  gnomes: [],
  gender: [],
  searchTerm: "",
  filterBy: "All",
  orderBy: "",
  currentPage: 0
};

const configure = (initialState = initialValues) => {
  const composeEnhancers = redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (configure);

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/*! exports provided: itemsByPage, gnomesAPI, genderGuessingAPI, getFirstNames, convertColors, filterGnomesBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemsByPage", function() { return itemsByPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gnomesAPI", function() { return gnomesAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genderGuessingAPI", function() { return genderGuessingAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstNames", function() { return getFirstNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertColors", function() { return convertColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterGnomesBy", function() { return filterGnomesBy; });
const itemsByPage = 15;
const gnomesAPI = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";
const genderGuessingAPI = "https://api.genderize.io/?"; // need to pay to use the genderize.io service for bulk process

/*export function getCurrentPageGenderFormat (gnomes, currentPage){

  let updatedPage = currentPage;

  const gnomeNames = gnomes.map(gnome => gnome.name)
  const pageGnomes = gnomeNames.slice(
    itemsByPage * updatedPage,
    itemsByPage + updatedPage * itemsByPage
  )

  pageGnomes.map(gnome => (
    gnome => gnome.name
  ))

  const getFirstName = arr =>{
    var arrCroped = [];
      for(var a=0; a<arr.length; a++){

        var corte = arr[a].indexOf(" ");
        arrCroped[a] = arr[a].substr(0, corte);
      }

      function removeDuplicates(array) {
        return array.filter((a, b) => array.indexOf(a) === b)
      };
      return removeDuplicates(arrCroped);
  }

  const justRenderedPageNames = getFirstName(pageGnomes);

  const parseToService = arrToFormat =>{
    var arrayFormated = [];

      for(var b=0; b<arrToFormat.length; b++){
        arrayFormated[b] = "name[]="+arrToFormat[b];
      }

      return arrayFormated;

  }

  const format = parseToService(justRenderedPageNames).toString().replace(/,/g, "&");

  return format;
}*/

function getFirstNames(gnomes, currentPage) {
  let updatedPage = currentPage;
  const gnomeNames = gnomes.map(gnome => gnome.name);
  const pageGnomes = gnomeNames.slice(itemsByPage * updatedPage, itemsByPage + updatedPage * itemsByPage);
  pageGnomes.map(gnome => gnome => gnome.name);

  const getFirstName = arr => {
    var arrCroped = [];

    for (var a = 0; a < arr.length; a++) {
      var cut = arr[a].indexOf(" ");
      arrCroped[a] = arr[a].substr(0, cut);
    }

    function removeDuplicates(array) {
      return array.filter((a, b) => array.indexOf(a) === b);
    }

    ;
    return removeDuplicates(arrCroped);
  };

  const onlyNames = getFirstName(pageGnomes);
  return onlyNames;
}
function convertColors(color) {
  if (color !== undefined) {
    const colorName = color.toLowerCase();
    var hex = "";

    switch (colorName) {
      case "red":
        hex = "#f66969";
        break;

      case "pink":
        hex = "#f6a2c0";
        break;

      case "green":
        hex = "#80e8d4";
        break;

      case "black":
        hex = "#4d5253";
        break;

      case "gray":
        hex = "#8d9395";
        break;

      default:
        hex = "#000";
        break;
    }

    return hex;
  } else {
    return "#8d9395";
  }
}
function filterGnomesBy(array, orderByFilter) {
  if (!Array.isArray(array)) {
    return null;
  }

  if (orderByFilter.toLowerCase() === "Oldest".toLowerCase()) {
    return array.sort((a, b) => b.age - a.age);
  } else if (orderByFilter.toLowerCase() === "Youngest".toLowerCase()) {
    return array.sort((a, b) => a.age - b.age);
  } else if (orderByFilter.toLowerCase() === "Heaviest".toLowerCase()) {
    return array.sort((a, b) => b.weight - a.weight);
  } else if (orderByFilter.toLowerCase() === "lightest".toLowerCase()) {
    return array.sort((a, b) => a.weight - b.weight);
  } else if (orderByFilter.toLowerCase() === "Most Friendly".toLowerCase()) {
    return array.sort((a, b) => b.friends.length - a.friends.length);
  } else if (orderByFilter.toLowerCase() === "Less Friendly".toLowerCase()) {
    return array.sort((a, b) => a.friends.length - b.friends.length);
  }

  return array;
}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "reactjs-popup":
/*!********************************!*\
  !*** external "reactjs-popup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactjs-popup");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map