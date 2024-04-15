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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_icons_material_SendOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/SendOutlined */ \"(app-pages-browser)/./node_modules/@mui/icons-material/SendOutlined.js\");\n/* harmony import */ var react_type_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-type-animation */ \"(app-pages-browser)/./node_modules/react-type-animation/dist/esm/index.es.js\");\n/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Alert */ \"(app-pages-browser)/./node_modules/@mui/material/Alert/Alert.js\");\n/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Check */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Check.js\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emailjs-com */ \"(app-pages-browser)/./node_modules/emailjs-com/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst formVariants = {\n    hidden: {\n        opacity: 0,\n        y: -20\n    },\n    visible: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            duration: 0.5,\n            ease: \"easeInOut\"\n        }\n    }\n};\nconst Contact = ()=>{\n    _s();\n    const serviceID = \"YOUR_SERVICE_ID\";\n    const templateID = \"YOUR_TEMPLATE_ID\";\n    const userID = \"YOUR_USER_ID\";\n    const [showAlert, setShowAlert] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const handleFormSubmit = (event)=>{\n        event.preventDefault();\n        setShowAlert(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        className: \"flex justify-center\",\n        variants: formVariants,\n        initial: \"hidden\",\n        animate: \"visible\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hover:border-gray-700 border-2 backdrop-blur-2xl bg-opacity-80 shadow-lg rounded-xl px-8 py-6 pb-36 w-10/12 max-w-lg hover:shadow-2xl transition duration-300 text-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"msg-box-h font-bold mb-6\",\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_type_animation__WEBPACK_IMPORTED_MODULE_2__.TypeAnimation, {\n                            sequence: [\n                                \"Send Me a Message\",\n                                250\n                            ]\n                        }, void 0, false, {\n                            fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                            lineNumber: 37,\n                            columnNumber: 51\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"messageForm\",\n                    className: \"space-y-4\",\n                    onSubmit: handleFormSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            required: true,\n                            fullWidth: true,\n                            label: \"Your Superhero Name\",\n                            variant: \"outlined\",\n                            size: \"small\",\n                            InputProps: {\n                                className: \"inp-box\",\n                                style: {\n                                    color: \"white\"\n                                }\n                            },\n                            placeholder: \"Enter your superhero name\",\n                            InputLabelProps: {\n                                style: {\n                                    color: \"gray\"\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            required: true,\n                            fullWidth: true,\n                            label: \"Your Secret Email\",\n                            variant: \"outlined\",\n                            size: \"small\",\n                            InputProps: {\n                                className: \"inp-box\",\n                                style: {\n                                    color: \"white\"\n                                }\n                            },\n                            placeholder: \"Keep it secret, keep it safe!\",\n                            InputLabelProps: {\n                                style: {\n                                    color: \"gray\"\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            required: true,\n                            fullWidth: true,\n                            multiline: true,\n                            rows: 4,\n                            label: \"Your Epic Message\",\n                            variant: \"outlined\",\n                            size: \"small\",\n                            InputProps: {\n                                className: \"inp-box\",\n                                style: {\n                                    color: \"white\"\n                                }\n                            },\n                            placeholder: \"Tell me your epic adventure!\",\n                            InputLabelProps: {\n                                style: {\n                                    color: \"gray\"\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            type: \"submit\",\n                            variant: \"outlined\",\n                            endIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_SendOutlined__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                                lineNumber: 71,\n                                columnNumber: 61\n                            }, void 0),\n                            children: \"Summon the Power\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                showAlert && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    className: \"flex mt-5\",\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        fontSize: \"inherit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                        lineNumber: 76,\n                        columnNumber: 46\n                    }, void 0),\n                    severity: \"success\",\n                    children: \"Thanks for summoning thy powers fruitfully!!\"\n                }, void 0, false, {\n                    fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n                    lineNumber: 76,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gamingspectrum24/Documents/PRG/Projects/Front End/Portfolio/app/Contact/page.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Contact, \"10vQU8F2+7kcs4/9wLfMdWKVXrU=\");\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db250YWN0L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDYTtBQUNTO0FBQ047QUFDYztBQUNIO0FBQ2I7QUFDVTtBQUNoQjtBQUVsQyxNQUFNUyxlQUFlO0lBQ25CQyxRQUFRO1FBQUVDLFNBQVM7UUFBR0MsR0FBRyxDQUFDO0lBQUc7SUFDN0JDLFNBQVM7UUFBRUYsU0FBUztRQUFHQyxHQUFHO1FBQUdFLFlBQVk7WUFBRUMsVUFBVTtZQUFLQyxNQUFNO1FBQVk7SUFBRTtBQUNoRjtBQUdBLE1BQU1DLFVBQVU7O0lBQ2QsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxhQUFhO0lBQ25CLE1BQU1DLFNBQVM7SUFDZixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR3RCLHFEQUFjLENBQUM7SUFFakQsTUFBTXdCLG1CQUFtQixDQUFDQztRQUN4QkEsTUFBTUMsY0FBYztRQUNwQkosYUFBYTtJQUNmO0lBRUEscUJBQ0UsOERBQUNyQixpREFBTUEsQ0FBQzBCLEdBQUc7UUFDVEMsV0FBVTtRQUNWQyxVQUFVcEI7UUFDVnFCLFNBQVE7UUFDUkMsU0FBUTtrQkFFUiw0RUFBQ0o7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNJO29CQUFHSixXQUFVOzt3QkFBMkI7c0NBQUMsOERBQUN2QiwrREFBYUE7NEJBQUM0QixVQUFVO2dDQUFDO2dDQUFxQjs2QkFBSTs7Ozs7Ozs7Ozs7OzhCQUM3Riw4REFBQ0M7b0JBQUtDLElBQUc7b0JBQWNQLFdBQVU7b0JBQVlRLFVBQVVaOztzQ0FDckQsOERBQUN0QiwrREFBU0E7NEJBQ1JtQyxRQUFROzRCQUNSQyxTQUFTOzRCQUNUQyxPQUFNOzRCQUNOQyxTQUFROzRCQUNSQyxNQUFLOzRCQUNMQyxZQUFZO2dDQUFFZCxXQUFXO2dDQUFXZSxPQUFPO29DQUFFQyxPQUFPO2dDQUFROzRCQUFFOzRCQUM5REMsYUFBWTs0QkFDWkMsaUJBQWlCO2dDQUFFSCxPQUFPO29DQUFFQyxPQUFPO2dDQUFPOzRCQUFFOzs7Ozs7c0NBRTlDLDhEQUFDMUMsK0RBQVNBOzRCQUNSbUMsUUFBUTs0QkFDUkMsU0FBUzs0QkFDVEMsT0FBTTs0QkFDTkMsU0FBUTs0QkFDUkMsTUFBSzs0QkFDTEMsWUFBWTtnQ0FBRWQsV0FBVztnQ0FBV2UsT0FBTztvQ0FBRUMsT0FBTztnQ0FBUTs0QkFBRTs0QkFDOURDLGFBQVk7NEJBQ1pDLGlCQUFpQjtnQ0FBRUgsT0FBTztvQ0FBRUMsT0FBTztnQ0FBTzs0QkFBRTs7Ozs7O3NDQUU5Qyw4REFBQzFDLCtEQUFTQTs0QkFDUm1DLFFBQVE7NEJBQ1JDLFNBQVM7NEJBQ1RTLFNBQVM7NEJBQ1RDLE1BQU07NEJBQ05ULE9BQU07NEJBQ05DLFNBQVE7NEJBQ1JDLE1BQUs7NEJBQ0xDLFlBQVk7Z0NBQUVkLFdBQVc7Z0NBQVdlLE9BQU87b0NBQUVDLE9BQU87Z0NBQVE7NEJBQUU7NEJBQzlEQyxhQUFZOzRCQUNaQyxpQkFBaUI7Z0NBQUVILE9BQU87b0NBQUVDLE9BQU87Z0NBQU87NEJBQUU7Ozs7OztzQ0FFOUMsOERBQUN6Qyw0REFBTUE7NEJBQUM4QyxNQUFLOzRCQUFTVCxTQUFROzRCQUFXVSx1QkFBUyw4REFBQzlDLHdFQUFRQTs7Ozs7c0NBQUs7Ozs7Ozs7Ozs7OztnQkFJakVpQiwyQkFDQyw4REFBQ2YsMkRBQUtBO29CQUFDc0IsV0FBVTtvQkFBWXVCLG9CQUFNLDhEQUFDNUMsaUVBQVNBO3dCQUFDNkMsVUFBUzs7Ozs7O29CQUFjQyxVQUFTOzhCQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQVFsRztHQWxFTXBDO0tBQUFBO0FBb0VOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Db250YWN0L3BhZ2UuanM/YjNhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBTZW5kSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZW5kT3V0bGluZWRcIjtcbmltcG9ydCB7IFR5cGVBbmltYXRpb24gfSBmcm9tICdyZWFjdC10eXBlLWFuaW1hdGlvbic7XG5pbXBvcnQgQWxlcnQgZnJvbSAnQG11aS9tYXRlcmlhbC9BbGVydCc7XG5pbXBvcnQgQ2hlY2tJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2snO1xuaW1wb3J0IGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nO1xuXG5jb25zdCBmb3JtVmFyaWFudHMgPSB7XG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAtMjAgfSxcbiAgdmlzaWJsZTogeyBvcGFjaXR5OiAxLCB5OiAwLCB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjUsIGVhc2U6ICdlYXNlSW5PdXQnIH0gfSxcbn07XG5cblxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3Qgc2VydmljZUlEID0gJ1lPVVJfU0VSVklDRV9JRCc7XG4gIGNvbnN0IHRlbXBsYXRlSUQgPSAnWU9VUl9URU1QTEFURV9JRCc7XG4gIGNvbnN0IHVzZXJJRCA9ICdZT1VSX1VTRVJfSUQnO1xuICBjb25zdCBbc2hvd0FsZXJ0LCBzZXRTaG93QWxlcnRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFNob3dBbGVydCh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCJcbiAgICAgIHZhcmlhbnRzPXtmb3JtVmFyaWFudHN9XG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgIGFuaW1hdGU9XCJ2aXNpYmxlXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyOmJvcmRlci1ncmF5LTcwMCBib3JkZXItMiBiYWNrZHJvcC1ibHVyLTJ4bCBiZy1vcGFjaXR5LTgwIHNoYWRvdy1sZyByb3VuZGVkLXhsIHB4LTggcHktNiBwYi0zNiB3LTEwLzEyIG1heC13LWxnIGhvdmVyOnNoYWRvdy0yeGwgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgdGV4dC13aGl0ZVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXNnLWJveC1oIGZvbnQtYm9sZCBtYi02XCI+IDxUeXBlQW5pbWF0aW9uIHNlcXVlbmNlPXtbJ1NlbmQgTWUgYSBNZXNzYWdlJywgMjUwXX0gLz48L2gyPlxuICAgICAgICA8Zm9ybSBpZD1cIm1lc3NhZ2VGb3JtXCIgY2xhc3NOYW1lPVwic3BhY2UteS00XCIgb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGxhYmVsPVwiWW91ciBTdXBlcmhlcm8gTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3sgY2xhc3NOYW1lOiAnaW5wLWJveCcsIHN0eWxlOiB7IGNvbG9yOiAnd2hpdGUnIH0gfX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBzdXBlcmhlcm8gbmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3sgc3R5bGU6IHsgY29sb3I6ICdncmF5JyB9IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBsYWJlbD1cIllvdXIgU2VjcmV0IEVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgSW5wdXRQcm9wcz17eyBjbGFzc05hbWU6ICdpbnAtYm94Jywgc3R5bGU6IHsgY29sb3I6ICd3aGl0ZScgfSB9fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJLZWVwIGl0IHNlY3JldCwga2VlcCBpdCBzYWZlIVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3sgc3R5bGU6IHsgY29sb3I6ICdncmF5JyB9IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICAgIHJvd3M9ezR9XG4gICAgICAgICAgICBsYWJlbD1cIllvdXIgRXBpYyBNZXNzYWdlXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgSW5wdXRQcm9wcz17eyBjbGFzc05hbWU6ICdpbnAtYm94Jywgc3R5bGU6IHsgY29sb3I6ICd3aGl0ZScgfSB9fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZWxsIG1lIHlvdXIgZXBpYyBhZHZlbnR1cmUhXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzdHlsZTogeyBjb2xvcjogJ2dyYXknIH0gfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGVuZEljb249ezxTZW5kSWNvbiAvPn0+XG4gICAgICAgICAgICBTdW1tb24gdGhlIFBvd2VyXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAge3Nob3dBbGVydCAmJiAoXG4gICAgICAgICAgPEFsZXJ0IGNsYXNzTmFtZT0nZmxleCBtdC01JyBpY29uPXs8Q2hlY2tJY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiIC8+fSBzZXZlcml0eT1cInN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIFRoYW5rcyBmb3Igc3VtbW9uaW5nIHRoeSBwb3dlcnMgZnJ1aXRmdWxseSEhXG4gICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJUZXh0RmllbGQiLCJCdXR0b24iLCJTZW5kSWNvbiIsIlR5cGVBbmltYXRpb24iLCJBbGVydCIsIkNoZWNrSWNvbiIsImVtYWlsanMiLCJmb3JtVmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieSIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiQ29udGFjdCIsInNlcnZpY2VJRCIsInRlbXBsYXRlSUQiLCJ1c2VySUQiLCJzaG93QWxlcnQiLCJzZXRTaG93QWxlcnQiLCJ1c2VTdGF0ZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFudHMiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImgyIiwic2VxdWVuY2UiLCJmb3JtIiwiaWQiLCJvblN1Ym1pdCIsInJlcXVpcmVkIiwiZnVsbFdpZHRoIiwibGFiZWwiLCJ2YXJpYW50Iiwic2l6ZSIsIklucHV0UHJvcHMiLCJzdHlsZSIsImNvbG9yIiwicGxhY2Vob2xkZXIiLCJJbnB1dExhYmVsUHJvcHMiLCJtdWx0aWxpbmUiLCJyb3dzIiwidHlwZSIsImVuZEljb24iLCJpY29uIiwiZm9udFNpemUiLCJzZXZlcml0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Contact/page.js\n"));

/***/ })

});