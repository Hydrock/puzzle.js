/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_test_js__ = __webpack_require__(1);\n//import * as test from './modules/test.js';\n\n\n//import {test2} from './modules/test.js';\n\n\nconsole.log('Script bundle connect!')\n\nsetTimeout(() => {\n  $.ajax({\n    type: 'POST',\n    url: '/',\n    data: { action: 'test' },\n    success: (data) => {\n      console.log(data);\n    }\n  });\n}, 1000)\n\n//$.post( \"./\", { name: \"John\", time: \"2pm\" } );\n\nconsole.log('End script!');\n\n//test.test1(96)\n__WEBPACK_IMPORTED_MODULE_0__modules_test_js__[\"a\" /* test1 */](102)\n//test2(102)\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2luZGV4LmpzPzdjMGMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgKiBhcyB0ZXN0IGZyb20gJy4vbW9kdWxlcy90ZXN0LmpzJztcblxuaW1wb3J0IHt0ZXN0MX0gZnJvbSAnLi9tb2R1bGVzL3Rlc3QuanMnO1xuLy9pbXBvcnQge3Rlc3QyfSBmcm9tICcuL21vZHVsZXMvdGVzdC5qcyc7XG5cblxuY29uc29sZS5sb2coJ1NjcmlwdCBidW5kbGUgY29ubmVjdCEnKVxuXG5zZXRUaW1lb3V0KCgpID0+IHtcbiAgJC5hamF4KHtcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgdXJsOiAnLycsXG4gICAgZGF0YTogeyBhY3Rpb246ICd0ZXN0JyB9LFxuICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG4gIH0pO1xufSwgMTAwMClcblxuLy8kLnBvc3QoIFwiLi9cIiwgeyBuYW1lOiBcIkpvaG5cIiwgdGltZTogXCIycG1cIiB9ICk7XG5cbmNvbnNvbGUubG9nKCdFbmQgc2NyaXB0IScpO1xuXG4vL3Rlc3QudGVzdDEoOTYpXG50ZXN0MSgxMDIpXG4vL3Rlc3QyKDEwMilcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return test1; });\n/* unused harmony export test2 */\nlet test1 = function (x) {\n  console.log(x)\n}\n\nlet test2 = function (x) {\n  console.dir(x)\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21vZHVsZXMvdGVzdC5qcz9jOGI1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBsZXQgdGVzdDEgPSBmdW5jdGlvbiAoeCkge1xuICBjb25zb2xlLmxvZyh4KVxufVxuXG5leHBvcnQgbGV0IHRlc3QyID0gZnVuY3Rpb24gKHgpIHtcbiAgY29uc29sZS5kaXIoeClcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL21vZHVsZXMvdGVzdC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);