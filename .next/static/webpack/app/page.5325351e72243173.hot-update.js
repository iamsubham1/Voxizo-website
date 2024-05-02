"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Navbar.tsx":
/*!***************************************!*\
  !*** ./src/app/components/Navbar.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _assets_Vox_Logo_White_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Vox Logo (White).svg */ \"(app-pages-browser)/./src/app/assets/Vox Logo (White).svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [prevScrollPos, setPrevScrollPos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const currentScrollPos = window.pageYOffset;\n            //   console.log(currentScrollPos);\n            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);\n            setPrevScrollPos(currentScrollPos);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        prevScrollPos,\n        visible\n    ]);\n    const toggleMenu = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar \".concat(visible ? \"flex\" : \"hidden\", \"bg-black secondary-font fixed w-[100vw] items-center mt-4 shadow-lg transition duration-500 ease-in-out border-[#225ac140] flex justify-evenly \").concat(visible ? \"navbar-visible\" : \"navbar-hidden\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                src: _assets_Vox_Logo_White_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                alt: \"logo\",\n                className: \"w-[6%] aspect-auto\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Production Work\\\\voxizo\\\\src\\\\app\\\\components\\\\Navbar.tsx\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav-menu \".concat(isOpen ? \"open\" : \"\", \" flex gap-8 items-center justify-center\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/home\",\n                                passHref: true,\n                                onClick: toggleMenu,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Production Work\\\\voxizo\\\\src\\\\app\\\\components\\\\Navbar.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Production Work\\\\voxizo\\\\src\\\\app\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/home\",\n                                passHref: true,\n                                onClick: toggleMenu,\n                                children: \"Reviews\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Production Work\\\\voxizo\\\\src\\\\app\\\\components\\\\Navbar.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Production Work\\\\voxizo\\\\src\\\\app\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/home\",\n                                passHref: true,\n                                onClick: toggleMenu,\n                                children: \"Services\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Production Work\\\\voxizo\\\\src\\\\app\\\\components\\\\Navbar.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Production Work\\\\voxizo\\\\src\\\\app\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/home\",\n                                passHref: true,\n                                onClick: toggleMenu,\n                                children: \"FAQs\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Production Work\\\\voxizo\\\\src\\\\app\\\\components\\\\Navbar.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Production Work\\\\voxizo\\\\src\\\\app\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Production Work\\\\voxizo\\\\src\\\\app\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Production Work\\\\voxizo\\\\src\\\\app\\\\components\\\\Navbar.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"shine-btn rounded-full border-2 px-3 py-1 border-[#3d3d3d6c]\",\n                children: \"Contact Us\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Production Work\\\\voxizo\\\\src\\\\app\\\\components\\\\Navbar.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            \"    \"\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Production Work\\\\voxizo\\\\src\\\\app\\\\components\\\\Navbar.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"QoR+0OmylayoU1osHzkReZ7RFW0=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9OYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNtRDtBQUN0QjtBQUVvQjtBQUNsQjtBQUUvQixNQUFNTSxTQUFtQjs7SUFDdkIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1EsZUFBZUMsaUJBQWlCLEdBQUdULCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNVyxlQUFlO1lBQ25CLE1BQU1DLG1CQUFtQkMsT0FBT0MsV0FBVztZQUM3QyxtQ0FBbUM7WUFDakNKLFdBQVdILGdCQUFnQkssb0JBQW9CQSxtQkFBbUI7WUFDbEVKLGlCQUFpQkk7UUFDbkI7UUFFQUMsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUo7UUFFbEMsT0FBTztZQUNMRSxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVTDtRQUN2QztJQUNGLEdBQUc7UUFBQ0o7UUFBZUU7S0FBUTtJQUUzQixNQUFNUSxhQUFhO1FBQ2pCWCxVQUFVLENBQUNEO0lBQ2I7SUFFQSxxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVyxVQUF1TFYsT0FBN0tBLFVBQVUsU0FBUyxVQUFTLG1KQUE4TCxPQUE3Q0EsVUFBVSxtQkFBbUI7OzBCQUdwTyw4REFBQ04sa0RBQUtBO2dCQUFDaUIsS0FBS2xCLGtFQUFJQTtnQkFBR21CLEtBQUk7Z0JBQU9GLFdBQVU7Ozs7OzswQkFFdEMsOERBQUNHO2dCQUFJSCxXQUFVOzBCQUliLDRFQUFDSTtvQkFBR0osV0FBVyxZQUFpQyxPQUFyQmQsU0FBUyxTQUFTLElBQUc7O3NDQUM5Qyw4REFBQ21COzRCQUFHTCxXQUFVO3NDQUNaLDRFQUFDbEIsaURBQUlBO2dDQUFDd0IsTUFBSztnQ0FBUUMsUUFBUTtnQ0FBQ0MsU0FBU1Y7MENBQVk7Ozs7Ozs7Ozs7O3NDQUluRCw4REFBQ087NEJBQUdMLFdBQVU7c0NBQ1osNEVBQUNsQixpREFBSUE7Z0NBQUN3QixNQUFLO2dDQUFRQyxRQUFRO2dDQUFDQyxTQUFTVjswQ0FBWTs7Ozs7Ozs7Ozs7c0NBSW5ELDhEQUFDTzs0QkFBR0wsV0FBVTtzQ0FDWiw0RUFBQ2xCLGlEQUFJQTtnQ0FBQ3dCLE1BQUs7Z0NBQVFDLFFBQVE7Z0NBQUNDLFNBQVNWOzBDQUFZOzs7Ozs7Ozs7OztzQ0FJbkQsOERBQUNPOzRCQUFHTCxXQUFVO3NDQUNaLDRFQUFDbEIsaURBQUlBO2dDQUFDd0IsTUFBSztnQ0FBUUMsUUFBUTtnQ0FBQ0MsU0FBU1Y7MENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXZELDhEQUFDVztnQkFBT1QsV0FBVTswQkFBZ0U7Ozs7OztZQUUzRDs7Ozs7OztBQUU3QjtHQTdETWY7S0FBQUE7QUErRE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL05hdmJhci50c3g/NzU0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjsgXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vYXNzZXRzL1ZveCBMb2dvIChXaGl0ZSkuc3ZnXCJcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuY29uc3QgTmF2YmFyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwcmV2U2Nyb2xsUG9zLCBzZXRQcmV2U2Nyb2xsUG9zXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhjdXJyZW50U2Nyb2xsUG9zKTtcclxuICAgICAgc2V0VmlzaWJsZShwcmV2U2Nyb2xsUG9zID4gY3VycmVudFNjcm9sbFBvcyB8fCBjdXJyZW50U2Nyb2xsUG9zIDwgMTApO1xyXG4gICAgICBzZXRQcmV2U2Nyb2xsUG9zKGN1cnJlbnRTY3JvbGxQb3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW3ByZXZTY3JvbGxQb3MsIHZpc2libGVdKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e2BuYXZiYXIgJHt2aXNpYmxlID8gJ2ZsZXgnIDogJ2hpZGRlbid9YmctYmxhY2sgc2Vjb25kYXJ5LWZvbnQgZml4ZWQgdy1bMTAwdnddIGl0ZW1zLWNlbnRlciBtdC00IHNoYWRvdy1sZyB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCBib3JkZXItWyMyMjVhYzE0MF0gZmxleCBqdXN0aWZ5LWV2ZW5seSAke3Zpc2libGUgPyAnbmF2YmFyLXZpc2libGUnIDogJ25hdmJhci1oaWRkZW4nfWB9PlxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICA8SW1hZ2Ugc3JjPXtsb2dvfSAgYWx0PSdsb2dvJyBjbGFzc05hbWU9J3ctWzYlXSBhc3BlY3QtYXV0bycvPlxyXG4gIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cclxuICAgICAgIFxyXG4gICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJtZW51LXRvZ2dsZVwiIGNsYXNzTmFtZT1cIm1lbnUtdG9nZ2xlXCIgY2hlY2tlZD17aXNPcGVufSBvbkNoYW5nZT17dG9nZ2xlTWVudX0gLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lbnUtdG9nZ2xlXCIgY2xhc3NOYW1lPVwibWVudS1pY29uXCIgLz4gKi99XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17YG5hdi1tZW51ICR7aXNPcGVuID8gJ29wZW4nIDogJyd9IGZsZXggZ2FwLTggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyYH0+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSc+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9ob21lJyBwYXNzSHJlZiBvbkNsaWNrPXt0b2dnbGVNZW51fT5cclxuICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2hvbWUnIHBhc3NIcmVmIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG4gICAgICAgICAgUmV2aWV3c1xyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0nPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvaG9tZScgcGFzc0hyZWYgb25DbGljaz17dG9nZ2xlTWVudX0+XHJcbiAgICAgICAgIFNlcnZpY2VzXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSc+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9ob21lJyBwYXNzSHJlZiBvbkNsaWNrPXt0b2dnbGVNZW51fT5cclxuICAgICAgICBGQVFzXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2hpbmUtYnRuIHJvdW5kZWQtZnVsbCBib3JkZXItMiBweC0zIHB5LTEgYm9yZGVyLVsjM2QzZDNkNmNdXCIgPlxyXG4gICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsImxvZ28iLCJJbWFnZSIsIk5hdmJhciIsImlzT3BlbiIsInNldElzT3BlbiIsInByZXZTY3JvbGxQb3MiLCJzZXRQcmV2U2Nyb2xsUG9zIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50U2Nyb2xsUG9zIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU1lbnUiLCJuYXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJkaXYiLCJ1bCIsImxpIiwiaHJlZiIsInBhc3NIcmVmIiwib25DbGljayIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Navbar.tsx\n"));

/***/ })

});