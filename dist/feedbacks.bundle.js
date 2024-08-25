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

/***/ "./src/data/feedbacks.ts":
/*!*******************************!*\
  !*** ./src/data/feedbacks.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   feedbacks: () => (/* binding */ feedbacks)\n/* harmony export */ });\nconst feedbacks = [\n    {\n        text: \"Nunca pensei que ia entender tanto sobre nutrição. FoodMania tá de parabéns!\",\n        rating: 4,\n        author: \"David Santana\",\n    },\n    {\n        text: \"Achei tudo o que eu precisava pra minha dieta. O site é show de bola!\",\n        rating: 5,\n        author: \"Bruno Braga\",\n    },\n    {\n        text: \"Muito bom, encontrei várias dicas e receitas saudáveis. Recomendo demais!\",\n        rating: 5,\n        author: \"Sara Silva\",\n    },\n];\n\n\n//# sourceURL=webpack://foodmania/./src/data/feedbacks.ts?");

/***/ }),

/***/ "./src/scripts/feedbacks.ts":
/*!**********************************!*\
  !*** ./src/scripts/feedbacks.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_feedbacks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/feedbacks */ \"./src/data/feedbacks.ts\");\n\nconst feedbacksSection = document.querySelector(\".feedbacks\");\nif (feedbacksSection) {\n    _data_feedbacks__WEBPACK_IMPORTED_MODULE_0__.feedbacks.forEach((feedback) => {\n        const feedbackDiv = document.createElement(\"div\");\n        feedbackDiv.className = \"feedback\";\n        const quoteStartP = document.createElement(\"p\");\n        quoteStartP.textContent = `\"`; // Aspas de abertura\n        const textP = document.createElement(\"p\");\n        textP.textContent = feedback.text;\n        const ratingP = document.createElement(\"p\");\n        ratingP.className = \"rate\";\n        ratingP.innerHTML = \"&#9733;\".repeat(feedback.rating); // Renderiza as estrelas\n        const authorP = document.createElement(\"p\");\n        authorP.textContent = feedback.author;\n        feedbackDiv.appendChild(quoteStartP);\n        feedbackDiv.appendChild(textP);\n        feedbackDiv.appendChild(ratingP);\n        feedbackDiv.appendChild(authorP);\n        feedbacksSection.appendChild(feedbackDiv);\n    });\n}\n\n\n//# sourceURL=webpack://foodmania/./src/scripts/feedbacks.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/feedbacks.ts");
/******/ 	
/******/ })()
;