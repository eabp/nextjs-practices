"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/product/[id]";
exports.ids = ["pages/product/[id]"];
exports.modules = {

/***/ "./pages/product/[id].tsx":
/*!********************************!*\
  !*** ./pages/product/[id].tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ProductItem = ()=>{\n    const { query: { id  } ,  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { 0: product , 1: setProduct  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (id) window.fetch(`/api/avo/${id}`).then((response)=>response.json()).then((product)=>setProduct(product));\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\n                \"Producto llamado: \",\n                product?.name,\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/eabp/Proyectos/cursos/react-next/nextjs-practices/pages/product/[id].tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/eabp/Proyectos/cursos/react-next/nextjs-practices/pages/product/[id].tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNYO0FBRXhDLE1BQU1JLFdBQVcsR0FBRyxJQUFNO0lBQ3hCLE1BQU0sRUFDSkMsS0FBSyxFQUFFLEVBQUVDLEVBQUUsR0FBRSxLQUNkLEdBQUdILHNEQUFTLEVBQUU7SUFFZixNQUFNLEtBQUNJLE9BQU8sTUFBRUMsVUFBVSxNQUFJTiwrQ0FBUSxFQUFZO0lBRWxERCxnREFBUyxDQUFDLElBQU07UUFDZCxJQUFJSyxFQUFFLEVBQ0pHLE1BQU0sQ0FDSEMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFSixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3ZCSyxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxHQUFLQSxRQUFRLENBQUNDLElBQUksRUFBRSxDQUFDLENBQ25DRixJQUFJLENBQUMsQ0FBQ0osT0FBTyxHQUFLQyxVQUFVLENBQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQyxFQUFFO1FBQUNELEVBQUU7S0FBQyxDQUFDLENBQUM7SUFFVCxxQkFDRSw4REFBQ1EsU0FBTztrQkFDTiw0RUFBQ0MsSUFBRTs7Z0JBQUMsb0JBQWtCO2dCQUFDUixPQUFPLEVBQUVTLElBQUk7Z0JBQUMsR0FBQzs7Ozs7O3FCQUFLOzs7OztpQkFDbkMsQ0FDVjtBQUNKLENBQUM7QUFFRCxpRUFBZVosV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByYWN0aWNlcy8uL3BhZ2VzL3Byb2R1Y3QvW2lkXS50c3g/OGI2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IFByb2R1Y3RJdGVtID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgcXVlcnk6IHsgaWQgfSxcbiAgfSA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlPFRQcm9kdWN0PigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlkKVxuICAgICAgd2luZG93XG4gICAgICAgIC5mZXRjaChgL2FwaS9hdm8vJHtpZH1gKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHByb2R1Y3QpID0+IHNldFByb2R1Y3QocHJvZHVjdCkpO1xuICB9LCBbaWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPlByb2R1Y3RvIGxsYW1hZG86IHtwcm9kdWN0Py5uYW1lfSA8L2gxPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJdGVtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJQcm9kdWN0SXRlbSIsInF1ZXJ5IiwiaWQiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsIndpbmRvdyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInNlY3Rpb24iLCJoMSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[id].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/product/[id].tsx"));
module.exports = __webpack_exports__;

})();