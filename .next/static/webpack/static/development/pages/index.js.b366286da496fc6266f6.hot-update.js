webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/containers/Main.js":
/*!**********************************!*\
  !*** ./pages/containers/Main.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/actions/actions */ "./src/actions/actions.js");
/* harmony import */ var _components_Loader_Loader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loader/Loader.js */ "./pages/components/Loader/Loader.js");
/* harmony import */ var _Home_Home_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home/Home.js */ "./pages/containers/Home/Home.js");
/* harmony import */ var _Header_Header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header/Header.js */ "./pages/containers/Header/Header.js");
/* harmony import */ var _components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/Footer/Footer.js */ "./pages/components/Footer/Footer.js");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/containers/Main.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Main = function Main(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      gnomes = _useState[0],
      setGnomes = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener('keydown', handleFirstTab);
    document.addEventListener('click', handleClick);
    props.fetchGnomes().then(function (response) {
      setGnomes(response);
    });
  }, []); //prevent ugly button glow on selected while not loosing tab nab

  var handleFirstTab = function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing');
      document.removeEventListener('keydown', handleFirstTab);
    }
  };

  var handleClick = function handleClick(e) {
    document.body.classList.remove('user-is-tabbing');
    document.addEventListener('keydown', handleFirstTab);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, gnomes && gnomes.length > 0 ? __jsx(_components_Loader_Loader_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(_Home_Home_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    gnomes: state.gnomes,
    gender: state.gender,
    searchTerm: state.searchTerm,
    filterBy: state.filterBy,
    orderBy: state.orderBy,
    currentPage: state.currentPage
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchGnomes: function fetchGnomes() {
      return dispatch(_src_actions_actions__WEBPACK_IMPORTED_MODULE_3__["fetchGnomes"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Main));

/***/ })

})
//# sourceMappingURL=index.js.b366286da496fc6266f6.hot-update.js.map