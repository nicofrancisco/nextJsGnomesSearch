webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/containers/Home/Home.js":
/*!***************************************!*\
  !*** ./pages/containers/Home/Home.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Filters_Filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Filters/Filters */ "./pages/containers/Filters/Filters.js");
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/Card/Card */ "./pages/components/Card/Card.js");
/* harmony import */ var _src_actions_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../src/actions/actions */ "./src/actions/actions.js");
/* harmony import */ var _components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/Pagination/Pagination */ "./pages/components/Pagination/Pagination.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../utils */ "./utils.js");
/* harmony import */ var _HomeRowStyled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HomeRowStyled */ "./pages/containers/Home/HomeRowStyled.jsx");
/* harmony import */ var _HomeWrapperStyled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HomeWrapperStyled */ "./pages/containers/Home/HomeWrapperStyled.jsx");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/containers/Home/Home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var Home = function Home(props) {
  var searchTerm = props.searchTerm,
      gnomes = props.gnomes,
      orderByFilter = props.orderByFilter,
      currentPage = props.currentPage;
  console.log("HOME");
  console.log(props);
  var searchFilters = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["filterGnomesBy"])(gnomes, orderByFilter).filter(function (gnome) {
    var isJob = gnome.professions.find(function (profession) {
      return profession === props.filterBy;
    });
    var hasProfession = gnome.professions.some(function (profession) {
      return profession === isJob;
    });
    return props.filterBy === "All" ? gnome : hasProfession;
  }).filter(function (gnome) {
    var search = gnome.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
    return search;
  });
  console.log(searchFilters);
  return __jsx(_HomeWrapperStyled__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Nicolas Bergues"), __jsx("link", {
    rel: "shortcut icon",
    href: "favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: "Assesment App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), __jsx(_HomeRowStyled__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_Filters_Filters__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), __jsx(_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    page: currentPage,
    updateGlobalState: props.getCurrentPage,
    maxPages: Math.floor(searchFilters.length / _utils__WEBPACK_IMPORTED_MODULE_8__["itemsByPage"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx(_HomeRowStyled__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["TransitionGroup"], {
    className: "cards",
    "in": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, searchFilters.length > 0 ? searchFilters.slice(_utils__WEBPACK_IMPORTED_MODULE_8__["itemsByPage"] * currentPage, _utils__WEBPACK_IMPORTED_MODULE_8__["itemsByPage"] + currentPage * _utils__WEBPACK_IMPORTED_MODULE_8__["itemsByPage"]).map(function (gnome) {
    return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
      key: gnome.id,
      timeout: 500,
      classNames: "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: gnome.id,
      gnome: gnome && gnome,
      to: "".concat(gnome.id, "-").concat(gnome.name.split(" ").join("-")),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }));
  }) : __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
    timeout: 500,
    classNames: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: "notFound",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, searchFilters.length, " no gnomes founded for current search")))), __jsx(_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    page: currentPage,
    updateGlobalState: props.getCurrentPage,
    maxPages: Math.floor(searchFilters.length / _utils__WEBPACK_IMPORTED_MODULE_8__["itemsByPage"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _src_actions_actions__WEBPACK_IMPORTED_MODULE_6__)(Home));

/***/ })

})
//# sourceMappingURL=index.js.0a91c6f7d01b464a86da.hot-update.js.map