webpackHotUpdate("static/development/pages/index.js",{

/***/ "./MainStyled.jsx":
/*!************************!*\
  !*** ./MainStyled.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  border: 0;\n}\n::selection {\n  background: #a5c5dd;\n  color: \"#fbffff\";\n}\nhtml, body {\n  font-family: monospace;\n  line-height: 1.15;\n  background: \"#fbffff\";\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n}\n\n//remove ugly selected glow\nbody:not(.user-is-tabbing) button:focus,\nbody:not(.user-is-tabbing) input:focus,\nbody:not(.user-is-tabbing) select:focus,\nbody:not(.user-is-tabbing) textarea:focus {\n  outline: none;\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

 //testing injectGlobal

var mainColor = "#37c3db";
var buttonNav = "#87dee9";
var lightColor = "#fbffff";
var darkColor = "#889db1";
var darkGray = "#666";
Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])(_templateObject());

var theme = function theme() {
  return {
    mainColor: mainColor,
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
    darkColor: darkColor,
    lightColor: lightColor
  };
};

/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ })

})
//# sourceMappingURL=index.js.5258eef143fefcc6ea5f.hot-update.js.map