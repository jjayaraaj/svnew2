"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_pages_casestudies_index_jsx";
exports.ids = ["src_pages_casestudies_index_jsx"];
exports.modules = {

/***/ "./src/pages/casestudies/index.jsx":
/*!*****************************************!*\
  !*** ./src/pages/casestudies/index.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ArticlesIndex),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card.jsx\");\n/* harmony import */ var _components_SimpleLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SimpleLayout */ \"./src/components/SimpleLayout.jsx\");\n/* harmony import */ var _lib_getAllArticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/getAllArticles */ \"./src/lib/getAllArticles.js\");\n/* harmony import */ var _lib_formatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/formatDate */ \"./src/lib/formatDate.js\");\n\n\n\n\n\n\nfunction Article({ article  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"md:grid md:grid-cols-4 md:items-baseline\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n            className: \"md:col-span-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {\n                    href: `/casestudies/${article.slug}`,\n                    children: article.title\n                }, void 0, false, {\n                    fileName: \"/Users/sathyan/Desktop/svnew/src/pages/casestudies/index.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.Card.Eyebrow, {\n                    as: \"time\",\n                    dateTime: article.date,\n                    className: \"md:hidden\",\n                    decorate: true,\n                    children: (0,_lib_formatDate__WEBPACK_IMPORTED_MODULE_5__.formatDate)(article.date)\n                }, void 0, false, {\n                    fileName: \"/Users/sathyan/Desktop/svnew/src/pages/casestudies/index.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.Card.Description, {\n                    children: article.description\n                }, void 0, false, {\n                    fileName: \"/Users/sathyan/Desktop/svnew/src/pages/casestudies/index.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__.Card.Cta, {\n                    children: \"Read Case Study\"\n                }, void 0, false, {\n                    fileName: \"/Users/sathyan/Desktop/svnew/src/pages/casestudies/index.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sathyan/Desktop/svnew/src/pages/casestudies/index.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sathyan/Desktop/svnew/src/pages/casestudies/index.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\nfunction ArticlesIndex({ articles  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Articles - Sathyan Velumani\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sathyan/Desktop/svnew/src/pages/casestudies/index.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"All of my long-form thoughts on product design, books, notes from the world around, and more..\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sathyan/Desktop/svnew/src/pages/casestudies/index.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sathyan/Desktop/svnew/src/pages/casestudies/index.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SimpleLayout__WEBPACK_IMPORTED_MODULE_3__.SimpleLayout, {\n                title: \"Writing on product design, building teams and world around.\",\n                intro: \"All of my long-form thoughts on product design, books, notes from the world around, and more..All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex max-w-3xl flex-col space-y-16\",\n                        children: articles.map((article)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                article: article\n                            }, article.slug, false, {\n                                fileName: \"/Users/sathyan/Desktop/svnew/src/pages/casestudies/index.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/sathyan/Desktop/svnew/src/pages/casestudies/index.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sathyan/Desktop/svnew/src/pages/casestudies/index.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sathyan/Desktop/svnew/src/pages/casestudies/index.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nasync function getStaticProps() {\n    return {\n        props: {\n            articles: (await (0,_lib_getAllArticles__WEBPACK_IMPORTED_MODULE_4__.getAllCasestudies)()).map(({ component , ...meta })=>meta)\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2FzZXN0dWRpZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUVZO0FBQ2dCO0FBQ0E7QUFDWDtBQUU3QyxTQUFTSyxRQUFRLEVBQUVDLFFBQU8sRUFBRSxFQUFFO0lBQzVCLHFCQUNFLDhEQUFDQTtRQUFRQyxXQUFVO2tCQUNqQiw0RUFBQ04sa0RBQUlBO1lBQUNNLFdBQVU7OzhCQUNkLDhEQUFDTix3REFBVTtvQkFBQ1EsTUFBTSxDQUFDLGFBQWEsRUFBRUgsUUFBUUksSUFBSSxDQUFDLENBQUM7OEJBQzdDSixRQUFRSyxLQUFLOzs7Ozs7OEJBRWhCLDhEQUFDViwwREFBWTtvQkFDWFksSUFBRztvQkFDSEMsVUFBVVIsUUFBUVMsSUFBSTtvQkFDdEJSLFdBQVU7b0JBQ1ZTLFFBQVE7OEJBRVBaLDJEQUFVQSxDQUFDRSxRQUFRUyxJQUFJOzs7Ozs7OEJBRTFCLDhEQUFDZCw4REFBZ0I7OEJBQUVLLFFBQVFZLFdBQVc7Ozs7Ozs4QkFDdEMsOERBQUNqQixzREFBUTs4QkFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXbEI7QUFFZSxTQUFTbUIsY0FBYyxFQUFFQyxTQUFRLEVBQUUsRUFBRTtJQUNsRCxxQkFDRTs7MEJBQ0UsOERBQUNyQixrREFBSUE7O2tDQUNILDhEQUFDVztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDVzt3QkFDQ0MsTUFBSzt3QkFDTEMsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDdEIsa0VBQVlBO2dCQUNYUyxPQUFNO2dCQUNOYyxPQUFNOzBCQUVOLDRFQUFDQztvQkFBSW5CLFdBQVU7OEJBQ2IsNEVBQUNtQjt3QkFBSW5CLFdBQVU7a0NBQ1pjLFNBQVNNLEdBQUcsQ0FBQyxDQUFDckIsd0JBQ2IsOERBQUNEO2dDQUEyQkMsU0FBU0E7K0JBQXZCQSxRQUFRSSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hDLENBQUM7QUFFTSxlQUFla0IsaUJBQWlCO0lBQ3JDLE9BQU87UUFDTEMsT0FBTztZQUNMUixVQUFVLENBQUMsTUFBTWxCLHNFQUFpQkEsRUFBQyxFQUFHd0IsR0FBRyxDQUFDLENBQUMsRUFBRUcsVUFBUyxFQUFFLEdBQUdSLE1BQU0sR0FBS0E7UUFDeEU7SUFDRjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZHVpLXRlbXBsYXRlLy4vc3JjL3BhZ2VzL2Nhc2VzdHVkaWVzL2luZGV4LmpzeD82NjUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ0AvY29tcG9uZW50cy9DYXJkJ1xuaW1wb3J0IHsgU2ltcGxlTGF5b3V0IH0gZnJvbSAnQC9jb21wb25lbnRzL1NpbXBsZUxheW91dCdcbmltcG9ydCB7IGdldEFsbENhc2VzdHVkaWVzIH0gZnJvbSAnQC9saWIvZ2V0QWxsQXJ0aWNsZXMnXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnQC9saWIvZm9ybWF0RGF0ZSdcblxuZnVuY3Rpb24gQXJ0aWNsZSh7IGFydGljbGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTQgbWQ6aXRlbXMtYmFzZWxpbmVcIj5cbiAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTNcIj5cbiAgICAgICAgPENhcmQuVGl0bGUgaHJlZj17YC9jYXNlc3R1ZGllcy8ke2FydGljbGUuc2x1Z31gfT5cbiAgICAgICAgICB7YXJ0aWNsZS50aXRsZX1cbiAgICAgICAgPC9DYXJkLlRpdGxlPlxuICAgICAgICA8Q2FyZC5FeWVicm93XG4gICAgICAgICAgYXM9XCJ0aW1lXCJcbiAgICAgICAgICBkYXRlVGltZT17YXJ0aWNsZS5kYXRlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiXG4gICAgICAgICAgZGVjb3JhdGVcbiAgICAgICAgPlxuICAgICAgICAgIHtmb3JtYXREYXRlKGFydGljbGUuZGF0ZSl9XG4gICAgICAgIDwvQ2FyZC5FeWVicm93PlxuICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj57YXJ0aWNsZS5kZXNjcmlwdGlvbn08L0NhcmQuRGVzY3JpcHRpb24+XG4gICAgICAgIDxDYXJkLkN0YT5SZWFkIENhc2UgU3R1ZHk8L0NhcmQuQ3RhPlxuICAgICAgPC9DYXJkPlxuey8qICAgICAgIDxDYXJkLkV5ZWJyb3dcbiAgICAgICAgYXM9XCJ0aW1lXCJcbiAgICAgICAgZGF0ZVRpbWU9e2FydGljbGUuZGF0ZX1cbiAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBoaWRkZW4gbWQ6YmxvY2tcIlxuICAgICAgPlxuICAgICAgICB7Zm9ybWF0RGF0ZShhcnRpY2xlLmRhdGUpfVxuICAgICAgPC9DYXJkLkV5ZWJyb3c+ICovfVxuICAgIDwvYXJ0aWNsZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlc0luZGV4KHsgYXJ0aWNsZXMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFydGljbGVzIC0gU2F0aHlhbiBWZWx1bWFuaTwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiQWxsIG9mIG15IGxvbmctZm9ybSB0aG91Z2h0cyBvbiBwcm9kdWN0IGRlc2lnbiwgYm9va3MsIG5vdGVzIGZyb20gdGhlIHdvcmxkIGFyb3VuZCwgYW5kIG1vcmUuLlwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8U2ltcGxlTGF5b3V0XG4gICAgICAgIHRpdGxlPVwiV3JpdGluZyBvbiBwcm9kdWN0IGRlc2lnbiwgYnVpbGRpbmcgdGVhbXMgYW5kIHdvcmxkIGFyb3VuZC5cIlxuICAgICAgICBpbnRybz1cIkFsbCBvZiBteSBsb25nLWZvcm0gdGhvdWdodHMgb24gcHJvZHVjdCBkZXNpZ24sIGJvb2tzLCBub3RlcyBmcm9tIHRoZSB3b3JsZCBhcm91bmQsIGFuZCBtb3JlLi5BbGwgb2YgbXkgbG9uZy1mb3JtIHRob3VnaHRzIG9uIHByb2dyYW1taW5nLCBsZWFkZXJzaGlwLCBwcm9kdWN0IGRlc2lnbiwgYW5kIG1vcmUsIGNvbGxlY3RlZCBpbiBjaHJvbm9sb2dpY2FsIG9yZGVyLlwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Ym9yZGVyLWwgbWQ6Ym9yZGVyLXppbmMtMTAwIG1kOnBsLTYgbWQ6ZGFyazpib3JkZXItemluYy03MDAvNDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWF4LXctM3hsIGZsZXgtY29sIHNwYWNlLXktMTZcIj5cbiAgICAgICAgICAgIHthcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IChcbiAgICAgICAgICAgICAgPEFydGljbGUga2V5PXthcnRpY2xlLnNsdWd9IGFydGljbGU9e2FydGljbGV9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NpbXBsZUxheW91dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFydGljbGVzOiAoYXdhaXQgZ2V0QWxsQ2FzZXN0dWRpZXMoKSkubWFwKCh7IGNvbXBvbmVudCwgLi4ubWV0YSB9KSA9PiBtZXRhKSxcbiAgICB9LFxuICB9XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkNhcmQiLCJTaW1wbGVMYXlvdXQiLCJnZXRBbGxDYXNlc3R1ZGllcyIsImZvcm1hdERhdGUiLCJBcnRpY2xlIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsIlRpdGxlIiwiaHJlZiIsInNsdWciLCJ0aXRsZSIsIkV5ZWJyb3ciLCJhcyIsImRhdGVUaW1lIiwiZGF0ZSIsImRlY29yYXRlIiwiRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsIkN0YSIsIkFydGljbGVzSW5kZXgiLCJhcnRpY2xlcyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImludHJvIiwiZGl2IiwibWFwIiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9wcyIsImNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/casestudies/index.jsx\n");

/***/ })

};
;