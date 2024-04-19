"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Projects/page",{

/***/ "(app-pages-browser)/./app/Components/Project.js":
/*!***********************************!*\
  !*** ./app/Components/Project.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\nconst Project = (param)=>{\n    let { imgpath, title, stack1, stack2, stack3, stack4, githublink, projlink } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    scale: 0.5\n                },\n                animate: {\n                    opacity: 1,\n                    scale: 1\n                },\n                transition: {\n                    duration: 1.5\n                },\n                className: \"project-card rounded-2xl p-5 overflow-y-clip flex flex-col backdrop-blur-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: imgpath,\n                        className: \"object-cover rounded-2xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Components/Project.js\",\n                        lineNumber: 12,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-5 font-bold\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Components/Project.js\",\n                        lineNumber: 13,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"mt-1 flex flex-wrap gap-2 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"text-[0.75rem] blue-text-gradient\",\n                                children: stack1\n                            }, void 0, false, {\n                                fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Components/Project.js\",\n                                lineNumber: 15,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"text-[0.75rem] green-text-gradient\",\n                                children: stack2\n                            }, void 0, false, {\n                                fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Components/Project.js\",\n                                lineNumber: 16,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"text-[0.75rem] pink-text-gradient\",\n                                children: [\n                                    \"#\",\n                                    stack3\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Components/Project.js\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Components/Project.js\",\n                        lineNumber: 14,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.a, {\n                        whileHover: {\n                            scale: 1.05\n                        },\n                        whileTap: {\n                            scale: 1\n                        },\n                        className: \"proj-btns text-xs p-3 rounded-lg text-white mt-5 w-[10rem] font-semibold\",\n                        href: githublink,\n                        target: \"_blank\",\n                        children: \"GitHub Repository\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Components/Project.js\",\n                        lineNumber: 19,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.a, {\n                        whileHover: {\n                            scale: 1.05\n                        },\n                        whileTap: {\n                            scale: 1\n                        },\n                        className: \"proj-btns text-xs p-3 rounded-lg text-white mt-1 w-[10rem] font-semibold\",\n                        href: projlink,\n                        target: \"_blank\",\n                        children: \"Visit Project\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Components/Project.js\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Components/Project.js\",\n                lineNumber: 9,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Components/Project.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL1Byb2plY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBQ2E7QUFFdEMsTUFBTUUsVUFBVTtRQUFDLEVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFDO0lBQ25GLHFCQUNJO2tCQUNJLDRFQUFDQztzQkFFRyw0RUFBQ1YsaURBQU1BLENBQUNVLEdBQUc7Z0JBQUNDLFNBQVM7b0JBQUVDLFNBQVM7b0JBQUdDLE9BQU87Z0JBQUk7Z0JBQzFDQyxTQUFTO29CQUFFRixTQUFTO29CQUFHQyxPQUFPO2dCQUFFO2dCQUNoQ0UsWUFBWTtvQkFBRUMsVUFBVTtnQkFBSTtnQkFBR0MsV0FBVTs7a0NBQ3pDLDhEQUFDQzt3QkFBSUMsS0FBS2pCO3dCQUFTZSxXQUFVOzs7Ozs7a0NBQzdCLDhEQUFDRzt3QkFBRUgsV0FBVTtrQ0FBa0JkOzs7Ozs7a0NBQy9CLDhEQUFDTzt3QkFBSVcsT0FBTTs7MENBQ1AsOERBQUNEO2dDQUFFQyxPQUFNOzBDQUFxQ2pCOzs7Ozs7MENBQzlDLDhEQUFDZ0I7Z0NBQUVDLE9BQU07MENBQXNDaEI7Ozs7OzswQ0FDL0MsOERBQUNlO2dDQUFFQyxPQUFNOztvQ0FBb0M7b0NBQUVmOzs7Ozs7Ozs7Ozs7O2tDQUVuRCw4REFBQ04saURBQU1BLENBQUNzQixDQUFDO3dCQUFDQyxZQUFZOzRCQUFFVixPQUFPO3dCQUFLO3dCQUNoQ1csVUFBVTs0QkFBRVgsT0FBTzt3QkFBRTt3QkFBR0ksV0FBVTt3QkFBMkVRLE1BQU1qQjt3QkFBWWtCLFFBQU87a0NBQVM7Ozs7OztrQ0FHbkosOERBQUMxQixpREFBTUEsQ0FBQ3NCLENBQUM7d0JBQUNDLFlBQVk7NEJBQUVWLE9BQU87d0JBQUs7d0JBQ2hDVyxVQUFVOzRCQUFFWCxPQUFPO3dCQUFFO3dCQUFHSSxXQUFVO3dCQUEyRVEsTUFBTWhCO3dCQUFVaUIsUUFBTztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JLO0tBM0JNekI7QUE2Qk4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0NvbXBvbmVudHMvUHJvamVjdC5qcz8xZDJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmNvbnN0IFByb2plY3QgPSAoe2ltZ3BhdGgsIHRpdGxlLCBzdGFjazEsIHN0YWNrMiwgc3RhY2szLCBzdGFjazQsIGdpdGh1YmxpbmssIHByb2psaW5rfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC41IH19XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMS41IH19IGNsYXNzTmFtZT0ncHJvamVjdC1jYXJkIHJvdW5kZWQtMnhsIHAtNSBvdmVyZmxvdy15LWNsaXAgZmxleCBmbGV4LWNvbCBiYWNrZHJvcC1ibHVyLWxnJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ3BhdGh9IGNsYXNzTmFtZT0nb2JqZWN0LWNvdmVyIHJvdW5kZWQtMnhsJyAvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J210LTUgZm9udC1ib2xkJz57dGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMSBmbGV4IGZsZXgtd3JhcCBnYXAtMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1bMC43NXJlbV0gYmx1ZS10ZXh0LWdyYWRpZW50XCI+e3N0YWNrMX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtWzAuNzVyZW1dIGdyZWVuLXRleHQtZ3JhZGllbnRcIj57c3RhY2syfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1bMC43NXJlbV0gcGluay10ZXh0LWdyYWRpZW50XCI+I3tzdGFjazN9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5hIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAxIH19IGNsYXNzTmFtZT0ncHJvai1idG5zIHRleHQteHMgcC0zIHJvdW5kZWQtbGcgdGV4dC13aGl0ZSBtdC01IHctWzEwcmVtXSBmb250LXNlbWlib2xkJyBocmVmPXtnaXRodWJsaW5rfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICBHaXRIdWIgUmVwb3NpdG9yeVxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmEgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDEgfX0gY2xhc3NOYW1lPSdwcm9qLWJ0bnMgdGV4dC14cyBwLTMgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIG10LTEgdy1bMTByZW1dIGZvbnQtc2VtaWJvbGQnIGhyZWY9e3Byb2psaW5rfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICBWaXNpdCBQcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiUHJvamVjdCIsImltZ3BhdGgiLCJ0aXRsZSIsInN0YWNrMSIsInN0YWNrMiIsInN0YWNrMyIsInN0YWNrNCIsImdpdGh1YmxpbmsiLCJwcm9qbGluayIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5Iiwic2NhbGUiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwicCIsImNsYXNzIiwiYSIsIndoaWxlSG92ZXIiLCJ3aGlsZVRhcCIsImhyZWYiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/Project.js\n"));

/***/ })

});