"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Experiences/page",{

/***/ "(app-pages-browser)/./app/Experiences/page.js":
/*!*********************************!*\
  !*** ./app/Experiences/page.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _app_Components_Experience__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/Components/Experience */ \"(app-pages-browser)/./app/Components/Experience.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst Experiences = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            className: \"\",\n            initial: {\n                x: \"-100vw\"\n            },\n            animate: {\n                x: 0\n            },\n            transition: {\n                type: \"spring\",\n                stiffness: 120,\n                damping: 10,\n                duration: 100\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_Components_Experience__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                company: \"The High Energy Accelerator Research Organization (KEK)\",\n                position: \"Grid Computing R&D Intern\",\n                duration: \"Jan 2024 - Present\",\n                imgpath: \"kek.jpg\"\n            }, void 0, false, {\n                fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Experiences/page.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Experiences/page.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = Experiences;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Experiences);\nvar _c;\n$RefreshReg$(_c, \"Experiences\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9FeHBlcmllbmNlcy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDeUI7QUFDVztBQUNnQjtBQUVwRCxNQUFNRyxjQUFjO0lBQ2xCLHFCQUNFO2tCQUNFLDRFQUFDRixpREFBTUEsQ0FBQ0csR0FBRztZQUFDQyxXQUFVO1lBQUdDLFNBQVM7Z0JBQUVDLEdBQUc7WUFBUztZQUM5Q0MsU0FBUztnQkFBRUQsR0FBRztZQUFFO1lBQ2hCRSxZQUFZO2dCQUFFQyxNQUFNO2dCQUFVQyxXQUFXO2dCQUFLQyxTQUFTO2dCQUFJQyxVQUFVO1lBQUc7c0JBQ3hFLDRFQUFDWCxrRUFBVUE7Z0JBQ1RZLFNBQVE7Z0JBQ1JDLFVBQVM7Z0JBQ1RGLFVBQVM7Z0JBQ1RHLFNBQVE7Ozs7Ozs7Ozs7OztBQU1sQjtLQWhCTWI7QUFrQk4sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0V4cGVyaWVuY2VzL3BhZ2UuanM/YmE3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHttb3Rpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tICdAL2FwcC9Db21wb25lbnRzL0V4cGVyaWVuY2UnXG5cbmNvbnN0IEV4cGVyaWVuY2VzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJcIiBpbml0aWFsPXt7IHg6ICctMTAwdncnIH19XG4gICAgICAgIGFuaW1hdGU9e3sgeDogMCB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IHR5cGU6ICdzcHJpbmcnLCBzdGlmZm5lc3M6IDEyMCwgZGFtcGluZzogMTAsIGR1cmF0aW9uOiAxMDB9fT5cbiAgICAgICAgPEV4cGVyaWVuY2VcbiAgICAgICAgICBjb21wYW55PVwiVGhlIEhpZ2ggRW5lcmd5IEFjY2VsZXJhdG9yIFJlc2VhcmNoIE9yZ2FuaXphdGlvbiAoS0VLKVwiXG4gICAgICAgICAgcG9zaXRpb249XCJHcmlkIENvbXB1dGluZyBSJkQgSW50ZXJuXCJcbiAgICAgICAgICBkdXJhdGlvbj1cIkphbiAyMDI0IC0gUHJlc2VudFwiXG4gICAgICAgICAgaW1ncGF0aD1cImtlay5qcGdcIlxuICAgICAgICAvPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwZXJpZW5jZXNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIkV4cGVyaWVuY2UiLCJFeHBlcmllbmNlcyIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJ4IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImR1cmF0aW9uIiwiY29tcGFueSIsInBvc2l0aW9uIiwiaW1ncGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Experiences/page.js\n"));

/***/ })

});