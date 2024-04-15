"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Contact/page",{

/***/ "(app-pages-browser)/./app/Contact/page.js":
/*!*****************************!*\
  !*** ./app/Contact/page.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_icons_material_SendOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/SendOutlined */ \"(app-pages-browser)/./node_modules/@mui/icons-material/SendOutlined.js\");\n/* harmony import */ var react_type_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-type-animation */ \"(app-pages-browser)/./node_modules/react-type-animation/dist/esm/index.es.js\");\n/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Alert */ \"(app-pages-browser)/./node_modules/@mui/material/Alert/Alert.js\");\n/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Check */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Check.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst formVariants = {\n    hidden: {\n        opacity: 0,\n        y: -20\n    },\n    visible: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            duration: 0.5,\n            ease: \"easeInOut\"\n        }\n    }\n};\nconst Contact = ()=>{\n    _s();\n    const [showAlert, setShowAlert] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const handleFormSubmit = (event)=>{\n        event.preventDefault();\n        setShowAlert(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        className: \"flex justify-center relative\",\n        variants: formVariants,\n        initial: \"hidden\",\n        animate: \"visible\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hover:border-gray-700 border-2 backdrop-blur-2xl bg-opacity-80 shadow-lg rounded-xl px-8 py-6 pb-36 w-10/12 max-w-lg hover:shadow-2xl transition duration-300 text-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"msg-box-h font-bold mb-6\",\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_type_animation__WEBPACK_IMPORTED_MODULE_2__.TypeAnimation, {\n                            sequence: [\n                                \"Send Me a Message\",\n                                250\n                            ]\n                        }, void 0, false, {\n                            fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                            lineNumber: 32,\n                            columnNumber: 51\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"messageForm\",\n                    className: \"space-y-4\",\n                    onSubmit: handleFormSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            required: true,\n                            fullWidth: true,\n                            label: \"Your Superhero Name\",\n                            variant: \"outlined\",\n                            size: \"small\",\n                            InputProps: {\n                                className: \"inp-box\"\n                            },\n                            InputLabelProps: {\n                                className: \"text-white\"\n                            },\n                            placeholder: \"Enter your superhero name\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            required: true,\n                            fullWidth: true,\n                            label: \"Your Secret Email\",\n                            variant: \"outlined\",\n                            size: \"small\",\n                            InputProps: {\n                                className: \"inp-box\"\n                            },\n                            InputLabelProps: {\n                                className: \"text-white\"\n                            },\n                            placeholder: \"Keep it secret, keep it safe!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            required: true,\n                            fullWidth: true,\n                            multiline: true,\n                            rows: 4,\n                            label: \"Your Epic Message\",\n                            variant: \"outlined\",\n                            size: \"small\",\n                            InputProps: {\n                                className: \"inp-box\"\n                            },\n                            InputLabelProps: {\n                                className: \"text-white\"\n                            },\n                            placeholder: \"Tell me your epic adventure!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            type: \"submit\",\n                            variant: \"outlined\",\n                            endIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_SendOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                                lineNumber: 67,\n                                columnNumber: 61\n                            }, void 0),\n                            children: \"Summon the Power\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                showAlert && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    className: \"absolute right-2 bottom-2\",\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        fontSize: \"inherit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                        lineNumber: 72,\n                        columnNumber: 62\n                    }, void 0),\n                    severity: \"success\",\n                    children: \"Here is a gentle confirmation that your action was successful.\"\n                }, void 0, false, {\n                    fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Contact, \"10vQU8F2+7kcs4/9wLfMdWKVXrU=\");\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db250YWN0L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMwQjtBQUNhO0FBQ1M7QUFDTjtBQUNjO0FBQ0g7QUFDYjtBQUNVO0FBRWxELE1BQU1RLGVBQWU7SUFDbkJDLFFBQVE7UUFBRUMsU0FBUztRQUFHQyxHQUFHLENBQUM7SUFBRztJQUM3QkMsU0FBUztRQUFFRixTQUFTO1FBQUdDLEdBQUc7UUFBR0UsWUFBWTtZQUFFQyxVQUFVO1lBQUtDLE1BQU07UUFBWTtJQUFFO0FBQ2hGO0FBRUEsTUFBTUMsVUFBVTs7SUFDZCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2xCLHFEQUFjLENBQUM7SUFFakQsTUFBTW9CLG1CQUFtQixDQUFDQztRQUN4QkEsTUFBTUMsY0FBYztRQUNwQkosYUFBYTtJQUNmO0lBRUEscUJBQ0UsOERBQUNqQixpREFBTUEsQ0FBQ3NCLEdBQUc7UUFDVEMsV0FBVTtRQUNWQyxVQUFVakI7UUFDVmtCLFNBQVE7UUFDUkMsU0FBUTtrQkFFUiw0RUFBQ0o7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNJO29CQUFHSixXQUFVOzt3QkFBMkI7c0NBQUMsOERBQUNuQiwrREFBYUE7NEJBQUN3QixVQUFVO2dDQUFDO2dDQUFxQjs2QkFBSTs7Ozs7Ozs7Ozs7OzhCQUM3Riw4REFBQ0M7b0JBQUtDLElBQUc7b0JBQWNQLFdBQVU7b0JBQVlRLFVBQVVaOztzQ0FDckQsOERBQUNsQiwrREFBU0E7NEJBQ1IrQixRQUFROzRCQUNSQyxTQUFTOzRCQUNUQyxPQUFNOzRCQUNOQyxTQUFROzRCQUNSQyxNQUFLOzRCQUNMQyxZQUFZO2dDQUFFZCxXQUFXOzRCQUFVOzRCQUNuQ2UsaUJBQWlCO2dDQUFFZixXQUFXOzRCQUFhOzRCQUMzQ2dCLGFBQVk7Ozs7OztzQ0FHZCw4REFBQ3RDLCtEQUFTQTs0QkFDUitCLFFBQVE7NEJBQ1JDLFNBQVM7NEJBQ1RDLE9BQU07NEJBQ05DLFNBQVE7NEJBQ1JDLE1BQUs7NEJBQ0xDLFlBQVk7Z0NBQUVkLFdBQVc7NEJBQVU7NEJBQ25DZSxpQkFBaUI7Z0NBQUVmLFdBQVc7NEJBQWE7NEJBQzNDZ0IsYUFBWTs7Ozs7O3NDQUVkLDhEQUFDdEMsK0RBQVNBOzRCQUNSK0IsUUFBUTs0QkFDUkMsU0FBUzs0QkFDVE8sU0FBUzs0QkFDVEMsTUFBTTs0QkFDTlAsT0FBTTs0QkFDTkMsU0FBUTs0QkFDUkMsTUFBSzs0QkFDTEMsWUFBWTtnQ0FBRWQsV0FBVzs0QkFBVTs0QkFDbkNlLGlCQUFpQjtnQ0FBRWYsV0FBVzs0QkFBYTs0QkFDM0NnQixhQUFZOzs7Ozs7c0NBRWQsOERBQUNyQyw0REFBTUE7NEJBQUN3QyxNQUFLOzRCQUFTUCxTQUFROzRCQUFXUSx1QkFBUyw4REFBQ3hDLHdFQUFRQTs7Ozs7c0NBQUs7Ozs7Ozs7Ozs7OztnQkFJakVhLDJCQUNDLDhEQUFDWCwyREFBS0E7b0JBQUNrQixXQUFVO29CQUE0QnFCLG9CQUFNLDhEQUFDdEMsaUVBQVNBO3dCQUFDdUMsVUFBUzs7Ozs7O29CQUFjQyxVQUFTOzhCQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9sSDtHQS9ETS9CO0tBQUFBO0FBaUVOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Db250YWN0L3BhZ2UuanM/YjNhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBTZW5kSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZW5kT3V0bGluZWRcIjtcbmltcG9ydCB7IFR5cGVBbmltYXRpb24gfSBmcm9tICdyZWFjdC10eXBlLWFuaW1hdGlvbic7XG5pbXBvcnQgQWxlcnQgZnJvbSAnQG11aS9tYXRlcmlhbC9BbGVydCc7XG5pbXBvcnQgQ2hlY2tJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2snO1xuXG5jb25zdCBmb3JtVmFyaWFudHMgPSB7XG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAtMjAgfSxcbiAgdmlzaWJsZTogeyBvcGFjaXR5OiAxLCB5OiAwLCB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjUsIGVhc2U6ICdlYXNlSW5PdXQnIH0gfSxcbn07XG5cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93QWxlcnQsIHNldFNob3dBbGVydF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0U2hvd0FsZXJ0KHRydWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcmVsYXRpdmVcIlxuICAgICAgdmFyaWFudHM9e2Zvcm1WYXJpYW50c31cbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgYW5pbWF0ZT1cInZpc2libGVcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXI6Ym9yZGVyLWdyYXktNzAwIGJvcmRlci0yIGJhY2tkcm9wLWJsdXItMnhsIGJnLW9wYWNpdHktODAgc2hhZG93LWxnIHJvdW5kZWQteGwgcHgtOCBweS02IHBiLTM2IHctMTAvMTIgbWF4LXctbGcgaG92ZXI6c2hhZG93LTJ4bCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJtc2ctYm94LWggZm9udC1ib2xkIG1iLTZcIj4gPFR5cGVBbmltYXRpb24gc2VxdWVuY2U9e1snU2VuZCBNZSBhIE1lc3NhZ2UnLCAyNTBdfSAvPjwvaDI+XG4gICAgICAgIDxmb3JtIGlkPVwibWVzc2FnZUZvcm1cIiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIiBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbGFiZWw9XCJZb3VyIFN1cGVyaGVybyBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgSW5wdXRQcm9wcz17eyBjbGFzc05hbWU6ICdpbnAtYm94JyB9fVxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7IGNsYXNzTmFtZTogJ3RleHQtd2hpdGUnIH19XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgc3VwZXJoZXJvIG5hbWVcIlxuICAgICAgICAgICAgXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBsYWJlbD1cIllvdXIgU2VjcmV0IEVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgSW5wdXRQcm9wcz17eyBjbGFzc05hbWU6ICdpbnAtYm94JyB9fVxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7IGNsYXNzTmFtZTogJ3RleHQtd2hpdGUnIH19XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIktlZXAgaXQgc2VjcmV0LCBrZWVwIGl0IHNhZmUhXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgcm93cz17NH1cbiAgICAgICAgICAgIGxhYmVsPVwiWW91ciBFcGljIE1lc3NhZ2VcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7IGNsYXNzTmFtZTogJ2lucC1ib3gnIH19XG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3sgY2xhc3NOYW1lOiAndGV4dC13aGl0ZScgfX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVsbCBtZSB5b3VyIGVwaWMgYWR2ZW50dXJlIVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwib3V0bGluZWRcIiBlbmRJY29uPXs8U2VuZEljb24gLz59PlxuICAgICAgICAgICAgU3VtbW9uIHRoZSBQb3dlclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIHtzaG93QWxlcnQgJiYgKFxuICAgICAgICAgIDxBbGVydCBjbGFzc05hbWU9J2Fic29sdXRlIHJpZ2h0LTIgYm90dG9tLTInIGljb249ezxDaGVja0ljb24gZm9udFNpemU9XCJpbmhlcml0XCIgLz59IHNldmVyaXR5PVwic3VjY2Vzc1wiPlxuICAgICAgICAgICAgSGVyZSBpcyBhIGdlbnRsZSBjb25maXJtYXRpb24gdGhhdCB5b3VyIGFjdGlvbiB3YXMgc3VjY2Vzc2Z1bC5cbiAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIlNlbmRJY29uIiwiVHlwZUFuaW1hdGlvbiIsIkFsZXJ0IiwiQ2hlY2tJY29uIiwiZm9ybVZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInkiLCJ2aXNpYmxlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsIkNvbnRhY3QiLCJzaG93QWxlcnQiLCJzZXRTaG93QWxlcnQiLCJ1c2VTdGF0ZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFudHMiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImgyIiwic2VxdWVuY2UiLCJmb3JtIiwiaWQiLCJvblN1Ym1pdCIsInJlcXVpcmVkIiwiZnVsbFdpZHRoIiwibGFiZWwiLCJ2YXJpYW50Iiwic2l6ZSIsIklucHV0UHJvcHMiLCJJbnB1dExhYmVsUHJvcHMiLCJwbGFjZWhvbGRlciIsIm11bHRpbGluZSIsInJvd3MiLCJ0eXBlIiwiZW5kSWNvbiIsImljb24iLCJmb250U2l6ZSIsInNldmVyaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Contact/page.js\n"));

/***/ })

});