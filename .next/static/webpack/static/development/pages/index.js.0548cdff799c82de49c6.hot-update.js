webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

var itemsByPage = 15;
var gnomesAPI = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";
var genderGuessingAPI = "https://api.genderize.io/?"; // need to pay to use the genderize.io service for bulk process

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
  var updatedPage = currentPage;
  var gnomeNames = gnomes.map(function (gnome) {
    return gnome.name;
  });
  var pageGnomes = gnomeNames.slice(itemsByPage * updatedPage, itemsByPage + updatedPage * itemsByPage);
  pageGnomes.map(function (gnome) {
    return function (gnome) {
      return gnome.name;
    };
  });

  var getFirstName = function getFirstName(arr) {
    var arrCroped = [];

    for (var a = 0; a < arr.length; a++) {
      var cut = arr[a].indexOf(" ");
      arrCroped[a] = arr[a].substr(0, cut);
    }

    function removeDuplicates(array) {
      return array.filter(function (a, b) {
        return array.indexOf(a) === b;
      });
    }

    ;
    return removeDuplicates(arrCroped);
  };

  var onlyNames = getFirstName(pageGnomes);
  return onlyNames;
}
function convertColors(color) {
  if (color !== undefined) {
    var colorName = color.toLowerCase();
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
  if (!_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(array)) {
    console.log("es nulo");
    return null;
  }

  console.log("aca");
  console.log(orderByFilter);

  if (orderByFilter.toLowerCase() === "Oldest".toLowerCase()) {
    return array.sort(function (a, b) {
      return b.age - a.age;
    });
  } else if (orderByFilter.toLowerCase() === "Youngest".toLowerCase()) {
    return array.sort(function (a, b) {
      return a.age - b.age;
    });
  } else if (orderByFilter.toLowerCase() === "Heaviest".toLowerCase()) {
    return array.sort(function (a, b) {
      return b.weight - a.weight;
    });
  } else if (orderByFilter.toLowerCase() === "lightest".toLowerCase()) {
    return array.sort(function (a, b) {
      return a.weight - b.weight;
    });
  } else if (orderByFilter.toLowerCase() === "Most Friendly".toLowerCase()) {
    return array.sort(function (a, b) {
      return b.friends.length - a.friends.length;
    });
  } else if (orderByFilter.toLowerCase() === "Less Friendly".toLowerCase()) {
    return array.sort(function (a, b) {
      return a.friends.length - b.friends.length;
    });
  }

  console.log(array);
  return array;
}

/***/ })

})
//# sourceMappingURL=index.js.0548cdff799c82de49c6.hot-update.js.map