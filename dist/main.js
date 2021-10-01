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

/***/ "./code/game.js":
/*!**********************!*\
  !*** ./code/game.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getOutcome\": () => (/* binding */ getOutcome),\n/* harmony export */   \"getChoices\": () => (/* binding */ getChoices),\n/* harmony export */   \"getComputerChoice\": () => (/* binding */ getComputerChoice)\n/* harmony export */ });\nconst choices = [\"Rock\", \"Paper\", \"Scissors\"];\r\n\r\nfunction getChoices() {\r\n  return choices;\r\n}\r\n\r\nfunction getComputerChoice() {\r\n  return choices[Math.floor(Math.random() * choices.length)];\r\n}\r\n\r\nfunction getOutcome(userChoice, computerChoice) {\r\n  let result;\r\n  if (userChoice === \"Rock\") {\r\n    if (computerChoice === \"Paper\") {\r\n      result = \"lost\";\r\n    } else if (computerChoice === \"Scissors\") {\r\n      result = \"won\";\r\n    } else {\r\n      result = \"tied\";\r\n    }\r\n  } else if (userChoice === \"Paper\") {\r\n    if (computerChoice === \"Rock\") {\r\n      result = \"won\";\r\n    } else if (computerChoice === \"Scissors\") {\r\n      result = \"lost\";\r\n    } else {\r\n      result = \"tied\";\r\n    }\r\n  } else {\r\n    if (computerChoice === \"Paper\") {\r\n      result = \"won\";\r\n    } else if (computerChoice === \"Rock\") {\r\n      result = \"lost\";\r\n    } else {\r\n      result = \"tied\";\r\n    }\r\n  }\r\n  return result;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://project-webpack/./code/game.js?");

/***/ }),

/***/ "./code/main.js":
/*!**********************!*\
  !*** ./code/main.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./code/game.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./code/utils.js\");\n/* harmony import */ var _assets_rock_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/rock.png */ \"./code/assets/rock.png\");\n/* harmony import */ var _assets_scissors_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/scissors.png */ \"./code/assets/scissors.png\");\n/* harmony import */ var _assets_paper_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/paper.png */ \"./code/assets/paper.png\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction makeChoiceImage(choice) {\r\n  const image = new Image(100, 100);\r\n  if (choice === \"Scissors\") {\r\n    image.src = _assets_scissors_png__WEBPACK_IMPORTED_MODULE_3__;\r\n  } else if (choice === \"Rock\") {\r\n    image.src = _assets_rock_png__WEBPACK_IMPORTED_MODULE_2__;\r\n  } else {\r\n    image.src = _assets_paper_png__WEBPACK_IMPORTED_MODULE_4__;\r\n  }\r\n  image.alt = choice;\r\n  return image;\r\n}\r\n\r\nfunction setControls(content) {\r\n  const controls = document.getElementById(\"controls\");\r\n  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.clearChildren)(controls);\r\n  controls.appendChild(content);\r\n}\r\n\r\nfunction setDescription(message) {\r\n  const description = document.getElementById(\"description\");\r\n  description.innerHTML = message;\r\n}\r\n\r\nfunction prepareGame() {\r\n  setDescription(\"Select Rock, Paper, or Scissors:\");\r\n  const choices = (0,_game__WEBPACK_IMPORTED_MODULE_0__.getChoices)();\r\n  const choicesElement = document.createElement(\"div\");\r\n  choices.forEach((choice) => {\r\n    const choiceImage = makeChoiceImage(choice);\r\n    choiceImage.onclick = () => playGame(choice);\r\n    choicesElement.appendChild(choiceImage);\r\n  });\r\n  setControls(choicesElement);\r\n}\r\n\r\nfunction playGame(userChoice) {\r\n  const computerChoice = (0,_game__WEBPACK_IMPORTED_MODULE_0__.getComputerChoice)();\r\n  const outcome = (0,_game__WEBPACK_IMPORTED_MODULE_0__.getOutcome)(userChoice, computerChoice);\r\n  const outcomeElement = document.getElementById(\"outcome\");\r\n  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.clearChildren)(outcomeElement);\r\n  outcomeElement.appendChild(makeOutcome(userChoice, computerChoice, outcome));\r\n}\r\n\r\nfunction makeOutcome(userChoice, computerChoice, outcome) {\r\n  const userOutcome = makePlayerOutcome(\"You chose:\", userChoice);\r\n  const computerOutcome = makePlayerOutcome(\"Computer chose:\", computerChoice);\r\n  const gameOutcome = document.createElement(\"p\");\r\n  gameOutcome.textContent = outcome;\r\n  gameOutcome.setAttribute(\"class\", outcome);\r\n  const outcomeElement = document.createElement(\"div\");\r\n  outcomeElement.appendChild(gameOutcome);\r\n  outcomeElement.appendChild(userOutcome);\r\n  outcomeElement.appendChild(computerOutcome);\r\n  outcomeElement.setAttribute(\"class\", \"active\");\r\n  return outcomeElement;\r\n}\r\n\r\nfunction makePlayerOutcome(message, choice) {\r\n  const outcomeElement = document.createElement(\"div\");\r\n  const outcomeText = document.createElement(\"p\");\r\n  outcomeText.textContent = message;\r\n  outcomeElement.appendChild(outcomeText);\r\n  const outcomeImage = makeChoiceImage(choice);\r\n  outcomeImage.setAttribute(\"class\", \"outcomeImg\");\r\n  outcomeElement.appendChild(outcomeImage);\r\n  outcomeElement.setAttribute(\"class\", \"playerOutcome\");\r\n  return outcomeElement;\r\n}\r\n\r\nprepareGame();\r\n\n\n//# sourceURL=webpack://project-webpack/./code/main.js?");

/***/ }),

/***/ "./code/utils.js":
/*!***********************!*\
  !*** ./code/utils.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearChildren\": () => (/* binding */ clearChildren)\n/* harmony export */ });\nfunction clearChildren(node) {\r\n  while (node.firstChild) {\r\n    node.removeChild(node.firstChild);\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://project-webpack/./code/utils.js?");

/***/ }),

/***/ "./code/assets/paper.png":
/*!*******************************!*\
  !*** ./code/assets/paper.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2efd9350e4060406a967.png\";\n\n//# sourceURL=webpack://project-webpack/./code/assets/paper.png?");

/***/ }),

/***/ "./code/assets/rock.png":
/*!******************************!*\
  !*** ./code/assets/rock.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"be0e25c934eaa387e7b5.png\";\n\n//# sourceURL=webpack://project-webpack/./code/assets/rock.png?");

/***/ }),

/***/ "./code/assets/scissors.png":
/*!**********************************!*\
  !*** ./code/assets/scissors.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c5a87f35170d0927cad8.png\";\n\n//# sourceURL=webpack://project-webpack/./code/assets/scissors.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./code/main.js");
/******/ 	
/******/ })()
;