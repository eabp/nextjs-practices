"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./pages/product/[id].tsx":
/*!********************************!*\
  !*** ./pages/product/[id].tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ProductItem = function() {\n    _s();\n    var ref = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(), id = ref.query.id;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), product = ref1[0], setProduct = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (id) window.fetch(\"/api/avo/\".concat(id)).then(function(response) {\n            return response.json();\n        }).then(console.log);\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Este es el producto \",\n            product === null || product === void 0 ? void 0 : product.name\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/eabp/Proyectos/cursos/react-next/nextjs-practices/pages/product/[id].tsx\",\n        lineNumber: 19,\n        columnNumber: 10\n    }, _this);\n};\n_s(ProductItem, \"j8I80qqhCtL4yOCfjuImMAZBmY8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProductItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductItem);\nvar _c;\n$RefreshReg$(_c, \"ProductItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBQW1EO0FBQ1g7QUFFeEMsSUFBTUksV0FBVyxHQUFHLFdBQU07O0lBQ3hCLElBRUlELEdBQVcsR0FBWEEsc0RBQVMsRUFBRSxFQURiRSxFQUFXLEdBQ1RGLEdBQVcsQ0FEYkUsS0FBSyxDQUFJQyxFQUFFO0lBR2IsSUFBOEJKLElBQW9CLEdBQXBCQSwrQ0FBUSxFQUFZLEVBQTNDSyxPQUFPLEdBQWdCTCxJQUFvQixHQUFwQyxFQUFFTSxVQUFVLEdBQUlOLElBQW9CLEdBQXhCO0lBRTFCRCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJSyxFQUFFLEVBQ0pHLE1BQU0sQ0FDSEMsS0FBSyxDQUFDLFdBQVUsQ0FBSyxPQUFISixFQUFFLENBQUUsQ0FBQyxDQUN2QkssSUFBSSxDQUFDLFNBQUNDLFFBQVE7bUJBQUtBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO1NBQUEsQ0FBQyxDQUNuQ0YsSUFBSSxDQUFDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUMsRUFBRTtRQUFDVCxFQUFFO0tBQUMsQ0FBQyxDQUFDO0lBRVQscUJBQU8sOERBQUNVLEtBQUc7O1lBQUMsc0JBQW9CO1lBQUNULE9BQU8sYUFBUEEsT0FBTyxXQUFNLEdBQWJBLEtBQUFBLENBQWEsR0FBYkEsT0FBTyxDQUFFVSxJQUFJOzs7Ozs7YUFBTyxDQUFDO0FBQ3hELENBQUM7R0FoQktiLFdBQVc7O1FBR1hELGtEQUFTOzs7QUFIVEMsS0FBQUEsV0FBVztBQWtCakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L1tpZF0udHN4PzhiNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBQcm9kdWN0SXRlbSA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHF1ZXJ5OiB7IGlkIH0sXG4gIH0gPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZTxUUHJvZHVjdD4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpZClcbiAgICAgIHdpbmRvd1xuICAgICAgICAuZmV0Y2goYC9hcGkvYXZvLyR7aWR9YClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGNvbnNvbGUubG9nKTtcbiAgfSwgW2lkXSk7XG5cbiAgcmV0dXJuIDxkaXY+RXN0ZSBlcyBlbCBwcm9kdWN0byB7cHJvZHVjdD8ubmFtZX08L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SXRlbTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiUHJvZHVjdEl0ZW0iLCJxdWVyeSIsImlkIiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[id].tsx\n"));

/***/ })

});