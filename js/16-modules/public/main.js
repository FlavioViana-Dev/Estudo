/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/HelloWorld.js":
/*!*************************************!*\
  !*** ./js/components/HelloWorld.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name){\r\n    return `\r\n        <h1>Olá mundo! Tudo bem?</h1>\r\n        <h2>Você está no ${name}</h2>\r\n        <hr/>\r\n    `\r\n}\r\n\r\n/*\r\nexport default name => \r\n(    return `\r\n        <h1>Olá mundo! Tudo bem?</h1>\r\n        <h2>Você está no ${name}</h2>\r\n        <hr/>\r\n    `\r\n)*/\n\n//# sourceURL=webpack://16-modules/./js/components/HelloWorld.js?");

/***/ }),

/***/ "./js/components/List.js":
/*!*******************************!*\
  !*** ./js/components/List.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data=>(\r\n    `\r\n        <ul>\r\n            ${data.map(people=>`<li>${people.name} - ${people.age}</li>`).join('')}\r\n        </ul>\r\n    `\r\n));\n\n//# sourceURL=webpack://16-modules/./js/components/List.js?");

/***/ }),

/***/ "./js/components/index.js":
/*!********************************!*\
  !*** ./js/components/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HelloWorld\": () => (/* reexport safe */ _HelloWorld__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"List\": () => (/* reexport safe */ _List__WEBPACK_IMPORTED_MODULE_1__.default)\n/* harmony export */ });\n/* harmony import */ var _HelloWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelloWorld */ \"./js/components/HelloWorld.js\");\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List */ \"./js/components/List.js\");\n\r\n\n\n//# sourceURL=webpack://16-modules/./js/components/index.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ \"./js/math.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ \"./js/components/index.js\");\n/* harmony import */ var _modules_useful__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/useful */ \"./js/modules/useful.js\");\n/* harmony import */ var _mock_people__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock/people */ \"./js/mock/people.js\");\n\r\n//import HelloWorld from './components/HelloWorld'\r\n//import List from './components/List'\r\n//import { HelloWorld, List } from './components'\r\n\r\n \r\n\r\n\r\n\r\nconsole.log('legal age', (0,_modules_useful__WEBPACK_IMPORTED_MODULE_2__.legalAge)(10))\r\nconsole.log('legal age', (0,_modules_useful__WEBPACK_IMPORTED_MODULE_2__.legalAge)(20))\r\n\r\nconsole.log((0,_math__WEBPACK_IMPORTED_MODULE_0__.default)(1,5))\r\n\r\nconsole.log(_components__WEBPACK_IMPORTED_MODULE_1__.HelloWorld('Docthor'))\r\n\r\nconsole.log((0,_modules_useful__WEBPACK_IMPORTED_MODULE_2__.group)(_mock_people__WEBPACK_IMPORTED_MODULE_3__.default))\r\n\r\n//const people = group(peopleMock)\r\nconst {legalAge, minor} = (0,_modules_useful__WEBPACK_IMPORTED_MODULE_2__.group)(_mock_people__WEBPACK_IMPORTED_MODULE_3__.default)\r\n\r\nconst html = `\r\n    ${_components__WEBPACK_IMPORTED_MODULE_1__.HelloWorld('Docthor')}\r\n    <h3>Legal Age</h3>\r\n    ${_components__WEBPACK_IMPORTED_MODULE_1__.List(legalAge)}    \r\n    <h3>Minor</h3>\r\n    ${_components__WEBPACK_IMPORTED_MODULE_1__.List(minor)}\r\n   \r\n`\r\n//${List(people.legalAge)}\r\n//${List(people.minor)}\r\n\r\ndocument.querySelector('#app').innerHTML = html\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://16-modules/./js/index.js?");

/***/ }),

/***/ "./js/math.js":
/*!********************!*\
  !*** ./js/math.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sum)\n/* harmony export */ });\nfunction sum(a,b){\r\n    return a+b+10\r\n}\n\n//# sourceURL=webpack://16-modules/./js/math.js?");

/***/ }),

/***/ "./js/mock/people.js":
/*!***************************!*\
  !*** ./js/mock/people.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst people=[\r\n    {\r\n        name:'Flavio',\r\n        age:38\r\n    },\r\n    {\r\n        name:'Cris',\r\n        age:37\r\n    },\r\n    {\r\n        name:'Caio',\r\n        age:2\r\n    }\r\n]\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (people);\n\n//# sourceURL=webpack://16-modules/./js/mock/people.js?");

/***/ }),

/***/ "./js/modules/useful.js":
/*!******************************!*\
  !*** ./js/modules/useful.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"legalAge\": () => (/* binding */ legalAge),\n/* harmony export */   \"group\": () => (/* binding */ group)\n/* harmony export */ });\nconst legalAge = age => age>=18\r\n\r\nconst group = people=> people.reduce(function(accumulator, arrayValue){\r\n    const propLegalAgeOrMinor = arrayValue.age>=\r\n        18?'legalAge':'minor'\r\n    accumulator[propLegalAgeOrMinor].push(arrayValue)\r\n\r\n    return accumulator\r\n},{legalAge:[], minor:[]})\n\n//# sourceURL=webpack://16-modules/./js/modules/useful.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;