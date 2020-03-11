webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/Gender/GenderCard/GenderCard.js":
/*!**********************************************************!*\
  !*** ./pages/components/Gender/GenderCard/GenderCard.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GenderCardStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenderCardStyles */ "./pages/components/Gender/GenderCard/GenderCardStyles.jsx");
var _jsxFileName = "/Users/nicolasfbergues/Desktop/Nico/Trabajo/FrontEnd/nextJsGnomeSearch/pages/components/Gender/GenderCard/GenderCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var GenderCard = function GenderCard(props) {
  var randomNumberAprox = Math.floor(Math.random() * (95 - 80 + 1)) + 80;

  var findOutIfFemale = function findOutIfFemale(name) {
    var isFemale;
    ;

    var _char = name.substr(-1);

    isFemale = isVowel(_char);

    function isVowel(x) {
      var result;
      result = x == "a" || x == "e" || x == "i" || x == "o" || x == "u";
      return result;
    }

    return isFemale;
  };

  if (props.gender && props.gender.length > 0) {
    if (props.gender[0].gender) {
      return __jsx(_GenderCardStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, props.gender[0].name, " it's a ", props.gender[0].gender == "male" ? "Boy" : "Girl", "!"), __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "(", props.gender[0].probability * 100, "% chances according to our report)")));
    } else if (!props.gender[0].gender && findOutIfFemale(props.gender[0].name) == true) {
      return __jsx(_GenderCardStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, props.gender[0].name, " it's a Girl!"), __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "(", randomNumberAprox, "% chances according to our report)")));
    } else {
      return __jsx(_GenderCardStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, props.gender[0].name, " could be an hermafrodith gnome with ", randomNumberAprox, "% of chances.")));
    }
  } else {
    return __jsx(_GenderCardStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "Loading Gender...")));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (GenderCard);

/***/ })

})
//# sourceMappingURL=index.js.58d0fbae726770570870.hot-update.js.map