webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/containers/Filters/Filters.js":
/*!*********************************************!*\
  !*** ./pages/containers/Filters/Filters.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../redux/actions/actions */ "./redux/actions/actions.js");
/* harmony import */ var _components_AutoComplete_AutoComplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/AutoComplete/AutoComplete */ "./pages/components/AutoComplete/AutoComplete.js");
/* harmony import */ var _components_Select_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/Select/Select */ "./pages/components/Select/Select.jsx");
/* harmony import */ var _components_OrderBy_OrderBy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/OrderBy/OrderBy.js */ "./pages/components/OrderBy/OrderBy.js");
/* harmony import */ var _FormSearchStyled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormSearchStyled */ "./pages/containers/Filters/FormSearchStyled.jsx");
/* harmony import */ var _FormRowStyled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormRowStyled */ "./pages/containers/Filters/FormRowStyled.jsx");


var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/containers/Filters/Filters.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var Filters = function Filters(props) {
  console.log("Filters");
  console.log(props);
  var gnomeNames = props.gnomes.map(function (gnome) {
    return gnome.name;
  });
  var getJobs = [];

  for (var i = 0; i < props.gnomes.length; i++) {
    getJobs = getJobs.concat(props.gnomes[i].professions);
  }

  var jobs = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default.a(getJobs));

  return __jsx(_FormSearchStyled__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_FormRowStyled__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_components_OrderBy_OrderBy_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Most Friendly"), __jsx(_components_OrderBy_OrderBy_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Less Friendly"), __jsx(_components_OrderBy_OrderBy_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Youngest"), __jsx(_components_OrderBy_OrderBy_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Oldest"), __jsx(_components_OrderBy_OrderBy_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Lightest"), __jsx(_components_OrderBy_OrderBy_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Heaviest")), __jsx(_FormRowStyled__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("div", {
    className: "filterWrappTitles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "profession",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Search by Name"), __jsx("div", {
    className: "profession",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Search by Profession")), __jsx(_FormRowStyled__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "filterWrapp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_components_AutoComplete_AutoComplete__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      lineNumber: 43
    },
    __self: this
  }), __jsx(_components_Select_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
    items: jobs && jobs,
    defaultValue: "All Professions",
    stateName: "filteBy",
    maxWidth: "100%",
    updateState: props.filterByJob,
    updateCurrentPage: props.getCurrentPage,
    state: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))));
};

function mapStateToProps(state) {
  return {
    gnomes: state.gnomes
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__)(Filters));

/***/ })

})
//# sourceMappingURL=index.js.4f2577648fb4713b43d3.hot-update.js.map