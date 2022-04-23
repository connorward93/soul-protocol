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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/AuthContext.tsx":
/*!*********************************!*\
  !*** ./context/AuthContext.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthConsumer\": () => (/* binding */ AuthConsumer),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst initialState = {\n    instance: null,\n    provider: null\n};\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    state: initialState,\n    dispatch: ()=>{}\n});\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case \"set-instance\":\n            return {\n                ...state,\n                instance: action.payload\n            };\n        case \"set-provider\":\n            return {\n                ...state,\n                provider: action.payload\n            };\n        default:\n            return state;\n    }\n};\nconst AuthProvider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/Connor/Sites/soul-protocol/web/context/AuthContext.tsx\",\n        lineNumber: 44,\n        columnNumber: 10\n    }, undefined);\n};\nconst AuthConsumer = AuthContext.Consumer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFNZTtBQVNmLE1BQU1FLFlBQVksR0FBVztJQUMzQkMsUUFBUSxFQUFFLElBQUk7SUFDZEMsUUFBUSxFQUFFLElBQUk7Q0FDZjtBQUVELE1BQU1DLFdBQVcsaUJBQUdMLG9EQUFhLENBRzlCO0lBQ0RNLEtBQUssRUFBRUosWUFBWTtJQUNuQkssUUFBUSxFQUFFLElBQU0sRUFBRTtDQUNuQixDQUFDO0FBRUYsTUFBTUMsT0FBTyxHQUFHLENBQUNGLEtBQWEsRUFBRUcsTUFBZSxHQUFhO0lBQzFELE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNqQixLQUFLLGNBQWM7WUFDakIsT0FBTztnQkFBRSxHQUFHSixLQUFLO2dCQUFFSCxRQUFRLEVBQUVNLE1BQU0sQ0FBQ0UsT0FBTzthQUFFLENBQUM7UUFDaEQsS0FBSyxjQUFjO1lBQ2pCLE9BQU87Z0JBQUUsR0FBR0wsS0FBSztnQkFBRUYsUUFBUSxFQUFFSyxNQUFNLENBQUNFLE9BQU87YUFBRSxDQUFDO1FBQ2hEO1lBQ0UsT0FBT0wsS0FBSyxDQUFDO0tBQ2hCO0NBQ0Y7QUFFTSxNQUFNTSxZQUFZLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQTZCLEdBQUs7SUFDdkUsTUFBTSxFQXhDUixHQXdDU1AsS0FBSyxHQXhDZCxHQXdDZ0JDLFFBQVEsTUFBSU4saURBQVUsQ0FBQ08sT0FBTyxFQUFFTixZQUFZLENBQUM7SUFDM0QsTUFBTVksS0FBSyxHQUFHO1FBQUVSLEtBQUs7UUFBRUMsUUFBUTtLQUFFO0lBRWpDLHFCQUFPLDhEQUFDRixXQUFXLENBQUNVLFFBQVE7UUFBQ0QsS0FBSyxFQUFFQSxLQUFLO2tCQUFHRCxRQUFROzs7OztpQkFBd0IsQ0FBQztDQUM5RSxDQUFDO0FBRUssTUFBTUcsWUFBWSxHQUFHWCxXQUFXLENBQUNZLFFBQVEsQ0FBQztBQUNqRCxpRUFBZVosV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc291bC1wcm90b2NvbC8uL2NvbnRleHQvQXV0aENvbnRleHQudHN4P2ZkZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlQ29udGV4dCxcbiAgRGlzcGF0Y2gsXG4gIHVzZVJlZHVjZXIsXG4gIHVzZUVmZmVjdCxcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFRTdGF0ZSA9IHtcbiAgaW5zdGFuY2U6IGFueTtcbiAgcHJvdmlkZXI6IGFueTtcbn07XG5cbnR5cGUgVEFjdGlvbiA9IHsgdHlwZTogc3RyaW5nOyBwYXlsb2FkOiBhbnkgfTtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBUU3RhdGUgPSB7XG4gIGluc3RhbmNlOiBudWxsLFxuICBwcm92aWRlcjogbnVsbCxcbn07XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDx7XG4gIHN0YXRlOiBUU3RhdGU7XG4gIGRpc3BhdGNoOiBEaXNwYXRjaDxUQWN0aW9uPjtcbn0+KHtcbiAgc3RhdGU6IGluaXRpYWxTdGF0ZSxcbiAgZGlzcGF0Y2g6ICgpID0+IHt9LFxufSk7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IFRTdGF0ZSwgYWN0aW9uOiBUQWN0aW9uKTogVFN0YXRlID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJzZXQtaW5zdGFuY2VcIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpbnN0YW5jZTogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBjYXNlIFwic2V0LXByb3ZpZGVyXCI6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvdmlkZXI6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IEpTWC5FbGVtZW50IH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IHZhbHVlID0geyBzdGF0ZSwgZGlzcGF0Y2ggfTtcblxuICByZXR1cm4gPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvQXV0aENvbnRleHQuUHJvdmlkZXI+O1xufTtcblxuZXhwb3J0IGNvbnN0IEF1dGhDb25zdW1lciA9IEF1dGhDb250ZXh0LkNvbnN1bWVyO1xuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJpbnN0YW5jZSIsInByb3ZpZGVyIiwiQXV0aENvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwicmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiQXV0aENvbnN1bWVyIiwiQ29uc3VtZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! context/AuthContext */ \"./context/AuthContext.tsx\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/Connor/Sites/soul-protocol/web/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Connor/Sites/soul-protocol/web/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUErQjtBQUVvQjtBQUVuRCxTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDRSw4REFBQ0gsNkRBQVk7a0JBQ1gsNEVBQUNFLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDZixDQUNmO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc291bC1wcm90b2NvbC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiY29udGV4dC9BdXRoQ29udGV4dFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();