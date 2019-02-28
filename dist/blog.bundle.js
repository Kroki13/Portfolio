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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/blog.js":
/*!************************************!*\
  !*** ./src/assets/scripts/blog.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/fullscreenmenu */ \"./src/assets/scripts/modules/fullscreenmenu.js\");\n\n__webpack_require__(/*! ./modules/parralaxOnScroll */ \"./src/assets/scripts/modules/parralaxOnScroll.js\");\n\n__webpack_require__(/*! ./modules/btndown */ \"./src/assets/scripts/modules/btndown.js\");\n\n__webpack_require__(/*! ./modules/blogmenu */ \"./src/assets/scripts/modules/blogmenu.js\");\n\nconsole.log(\"блог\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0FBLFFBQVFDLEdBQVIsQ0FBWSxNQUFaIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2Jsb2cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL21vZHVsZXMvZnVsbHNjcmVlbm1lbnVcIjtcbmltcG9ydCBcIi4vbW9kdWxlcy9wYXJyYWxheE9uU2Nyb2xsXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvYnRuZG93blwiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL2Jsb2dtZW51XCI7XG5cblxuY29uc29sZS5sb2coXCLQsdC70L7Qs1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/blogmenu.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/modules/blogmenu.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar items = document.querySelectorAll('.blog-menu__item');\nvar btns = document.querySelectorAll('.blog-menu__btn');\nvar posts = document.querySelectorAll('.article');\nvar menuBtn = document.querySelector('.blog-menu__button');\nvar articles = document.querySelector('.articles');\nvar menuShown = true;\n\nfunction showMenu() {\n    var aside = document.querySelector('.blog-menu');\n\n    console.log(menuShown);\n    switch (menuShown) {\n        case true:\n            aside.style.left = 0 + 'px';\n            menuBtn.style.left = 250 + 'px';\n            menuShown = false;\n            break;\n        case false:\n            aside.style.left = -300 + 'px';\n            menuBtn.style.left = -25 + 'px';\n            menuShown = true;\n            break;\n    }\n}\n\nmenuBtn.addEventListener('click', showMenu);\narticles.addEventListener('click', function (e) {\n    e.preventDefault();\n    showMenu();\n});\n\nfor (var i = 0; i < btns.length; i++) {\n    var button = btns[i];\n\n    button.onclick = function () {\n\n        var data_id = this.dataset.id;\n        var parent = this.parentNode;\n\n        for (var _i = 0; _i < items.length; _i++) {\n            var item = items[_i];\n            item.classList.remove(\"blog-menu__item--active\");\n        }\n        parent.classList.add(\"blog-menu__item--active\");\n        for (var _i2 = 0; _i2 < posts.length; _i2++) {\n            var post = posts[_i2];\n\n            if (post.dataset.id === data_id) {\n\n                window.scrollTo({\n                    top: post.offsetTop,\n                    behavior: \"smooth\"\n                });\n            }\n        }\n    };\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibG9nbWVudS5qcz9mZDU1Il0sIm5hbWVzIjpbIml0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRucyIsInBvc3RzIiwibWVudUJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJhcnRpY2xlcyIsIm1lbnVTaG93biIsInNob3dNZW51IiwiYXNpZGUiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJsZWZ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImkiLCJsZW5ndGgiLCJidXR0b24iLCJvbmNsaWNrIiwiZGF0YV9pZCIsImRhdGFzZXQiLCJpZCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJpdGVtIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicG9zdCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwib2Zmc2V0VG9wIiwiYmVoYXZpb3IiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsUUFBUUMsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQWQ7QUFDQSxJQUFNQyxPQUFPRixTQUFTQyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBYjtBQUNBLElBQU1FLFFBQVFILFNBQVNDLGdCQUFULENBQTBCLFVBQTFCLENBQWQ7QUFDQSxJQUFNRyxVQUFVSixTQUFTSyxhQUFULENBQXVCLG9CQUF2QixDQUFoQjtBQUNBLElBQU1DLFdBQVdOLFNBQVNLLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBakI7QUFDQSxJQUFJRSxZQUFZLElBQWhCOztBQUVBLFNBQVNDLFFBQVQsR0FBb0I7QUFDaEIsUUFBTUMsUUFBUVQsU0FBU0ssYUFBVCxDQUF1QixZQUF2QixDQUFkOztBQUVBSyxZQUFRQyxHQUFSLENBQVlKLFNBQVo7QUFDQSxZQUFRQSxTQUFSO0FBQ0ksYUFBSyxJQUFMO0FBQ0lFLGtCQUFNRyxLQUFOLENBQVlDLElBQVosR0FBbUIsSUFBSSxJQUF2QjtBQUNBVCxvQkFBUVEsS0FBUixDQUFjQyxJQUFkLEdBQXFCLE1BQU0sSUFBM0I7QUFDQU4sd0JBQVksS0FBWjtBQUNBO0FBQ0osYUFBSyxLQUFMO0FBQ0lFLGtCQUFNRyxLQUFOLENBQVlDLElBQVosR0FBbUIsQ0FBQyxHQUFELEdBQU8sSUFBMUI7QUFDQVQsb0JBQVFRLEtBQVIsQ0FBY0MsSUFBZCxHQUFxQixDQUFDLEVBQUQsR0FBTSxJQUEzQjtBQUNBTix3QkFBWSxJQUFaO0FBQ0E7QUFWUjtBQVlIOztBQUVESCxRQUFRVSxnQkFBUixDQUF5QixPQUF6QixFQUFrQ04sUUFBbEM7QUFDQUYsU0FBU1EsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBU0MsQ0FBVCxFQUFZO0FBQzNDQSxNQUFFQyxjQUFGO0FBQ0FSO0FBQ0gsQ0FIRDs7QUFLQSxLQUFLLElBQUlTLElBQUksQ0FBYixFQUFnQkEsSUFBSWYsS0FBS2dCLE1BQXpCLEVBQWlDRCxHQUFqQyxFQUFzQztBQUNsQyxRQUFNRSxTQUFTakIsS0FBS2UsQ0FBTCxDQUFmOztBQUVBRSxXQUFPQyxPQUFQLEdBQWlCLFlBQVc7O0FBR3hCLFlBQUlDLFVBQVUsS0FBS0MsT0FBTCxDQUFhQyxFQUEzQjtBQUNBLFlBQUlDLFNBQVMsS0FBS0MsVUFBbEI7O0FBRUEsYUFBSyxJQUFJUixLQUFJLENBQWIsRUFBZ0JBLEtBQUlsQixNQUFNbUIsTUFBMUIsRUFBa0NELElBQWxDLEVBQXVDO0FBQ25DLGdCQUFNUyxPQUFPM0IsTUFBTWtCLEVBQU4sQ0FBYjtBQUNBUyxpQkFBS0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCLHlCQUF0QjtBQUNIO0FBQ0RKLGVBQU9HLFNBQVAsQ0FBaUJFLEdBQWpCLENBQXFCLHlCQUFyQjtBQUNBLGFBQUssSUFBSVosTUFBSSxDQUFiLEVBQWdCQSxNQUFJZCxNQUFNZSxNQUExQixFQUFrQ0QsS0FBbEMsRUFBdUM7QUFDbkMsZ0JBQU1hLE9BQU8zQixNQUFNYyxHQUFOLENBQWI7O0FBRUEsZ0JBQUlhLEtBQUtSLE9BQUwsQ0FBYUMsRUFBYixLQUFvQkYsT0FBeEIsRUFBaUM7O0FBRTdCVSx1QkFBT0MsUUFBUCxDQUFnQjtBQUNaQyx5QkFBS0gsS0FBS0ksU0FERTtBQUVaQyw4QkFBVTtBQUZFLGlCQUFoQjtBQUlIO0FBQ0o7QUFDSixLQXRCRDtBQXVCSCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2Jsb2dtZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvZy1tZW51X19pdGVtJyk7XG5jb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2ctbWVudV9fYnRuJyk7XG5jb25zdCBwb3N0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnRpY2xlJyk7XG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2ctbWVudV9fYnV0dG9uJyk7XG5jb25zdCBhcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlcycpXG5sZXQgbWVudVNob3duID0gdHJ1ZTtcblxuZnVuY3Rpb24gc2hvd01lbnUoKSB7XG4gICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvZy1tZW51Jyk7XG5cbiAgICBjb25zb2xlLmxvZyhtZW51U2hvd24pO1xuICAgIHN3aXRjaCAobWVudVNob3duKSB7XG4gICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgIGFzaWRlLnN0eWxlLmxlZnQgPSAwICsgJ3B4JztcbiAgICAgICAgICAgIG1lbnVCdG4uc3R5bGUubGVmdCA9IDI1MCArICdweCc7XG4gICAgICAgICAgICBtZW51U2hvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgYXNpZGUuc3R5bGUubGVmdCA9IC0zMDAgKyAncHgnO1xuICAgICAgICAgICAgbWVudUJ0bi5zdHlsZS5sZWZ0ID0gLTI1ICsgJ3B4JztcbiAgICAgICAgICAgIG1lbnVTaG93biA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TWVudSk7XG5hcnRpY2xlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2hvd01lbnUoKTtcbn0pO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGJ0bnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBidXR0b24gPSBidG5zW2ldO1xuXG4gICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblxuXG4gICAgICAgIGxldCBkYXRhX2lkID0gdGhpcy5kYXRhc2V0LmlkO1xuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImJsb2ctbWVudV9faXRlbS0tYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwiYmxvZy1tZW51X19pdGVtLS1hY3RpdmVcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBwb3N0c1tpXTtcblxuICAgICAgICAgICAgaWYgKHBvc3QuZGF0YXNldC5pZCA9PT0gZGF0YV9pZCkge1xuXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBwb3N0Lm9mZnNldFRvcCxcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/blogmenu.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/btndown.js":
/*!***********************************************!*\
  !*** ./src/assets/scripts/modules/btndown.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n    'use strict';\n\n    var btnScrollDown = document.querySelector('#btnarrow');\n\n    function scrollDown() {\n        var windowCoords = document.documentElement.clientHeight;\n        (function scroll() {\n            if (window.pageYOffset < windowCoords) {\n                window.scrollBy(0, 10);\n                setTimeout(scroll, 0);\n            }\n            if (window.pageYOffset > windowCoords) {\n                window.scrollTo(0, windowCoords);\n            }\n        })();\n    }\n\n    btnScrollDown.addEventListener('click', scrollDown);\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9idG5kb3duLmpzP2JiYTkiXSwibmFtZXMiOlsiYnRuU2Nyb2xsRG93biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbERvd24iLCJ3aW5kb3dDb29yZHMiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGwiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsInNjcm9sbEJ5Iiwic2V0VGltZW91dCIsInNjcm9sbFRvIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFlBQVc7QUFDUjs7QUFFQSxRQUFJQSxnQkFBZ0JDLFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBcEI7O0FBRUEsYUFBU0MsVUFBVCxHQUFzQjtBQUNsQixZQUFJQyxlQUFlSCxTQUFTSSxlQUFULENBQXlCQyxZQUE1QztBQUNBLFNBQUMsU0FBU0MsTUFBVCxHQUFrQjtBQUNmLGdCQUFJQyxPQUFPQyxXQUFQLEdBQXFCTCxZQUF6QixFQUF1QztBQUNuQ0ksdUJBQU9FLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsRUFBbkI7QUFDQUMsMkJBQVdKLE1BQVgsRUFBbUIsQ0FBbkI7QUFDSDtBQUNELGdCQUFJQyxPQUFPQyxXQUFQLEdBQXFCTCxZQUF6QixFQUF1QztBQUNuQ0ksdUJBQU9JLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJSLFlBQW5CO0FBQ0g7QUFDSixTQVJEO0FBU0g7O0FBRURKLGtCQUFjYSxnQkFBZCxDQUErQixPQUEvQixFQUF3Q1YsVUFBeEM7QUFDSCxDQW5CRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2J0bmRvd24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGJ0blNjcm9sbERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuYXJyb3cnKTtcblxuICAgIGZ1bmN0aW9uIHNjcm9sbERvd24oKSB7XG4gICAgICAgIHZhciB3aW5kb3dDb29yZHMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAoZnVuY3Rpb24gc2Nyb2xsKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IHdpbmRvd0Nvb3Jkcykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAxMCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChzY3JvbGwsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IHdpbmRvd0Nvb3Jkcykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCB3aW5kb3dDb29yZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgIH1cblxuICAgIGJ0blNjcm9sbERvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzY3JvbGxEb3duKTtcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/btndown.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/fullscreenmenu.js":
/*!******************************************************!*\
  !*** ./src/assets/scripts/modules/fullscreenmenu.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar hamburger = document.querySelector(\".hamburger-menu\");\nvar fullScreenMenu = document.querySelector('.fullscreenmenu');\nvar closeMenu = document.querySelector(\".fullscreenmenu__btn\");\nvar closeMenu2 = document.querySelectorAll(\".fullscreenmenu__link\");\n\nhamburger.addEventListener('click', function () {\n    fullScreenMenu.style.display = \"flex\";\n    document.body.classList.add('blocked-scroll');\n});\n\ncloseMenu.addEventListener('click', function () {\n    fullScreenMenu.style.display = \"none\";\n    document.body.classList.remove('blocked-scroll');\n});\n\ncloseMenu2.forEach(function (item) {\n    item.addEventListener('click', function () {\n        fullScreenMenu.style.display = \"none\";\n        document.body.classList.remove('blocked-scroll');\n    });\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mdWxsc2NyZWVubWVudS5qcz84ZmE1Il0sIm5hbWVzIjpbImhhbWJ1cmdlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZ1bGxTY3JlZW5NZW51IiwiY2xvc2VNZW51IiwiY2xvc2VNZW51MiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImZvckVhY2giLCJpdGVtIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFlBQVlDLFNBQVNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWxCO0FBQ0EsSUFBTUMsaUJBQWlCRixTQUFTQyxhQUFULENBQXVCLGlCQUF2QixDQUF2QjtBQUNBLElBQU1FLFlBQVlILFNBQVNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQWxCO0FBQ0EsSUFBTUcsYUFBYUosU0FBU0ssZ0JBQVQsQ0FBMEIsdUJBQTFCLENBQW5COztBQUVBTixVQUFVTyxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxZQUFXO0FBQzNDSixtQkFBZUssS0FBZixDQUFxQkMsT0FBckIsR0FBK0IsTUFBL0I7QUFDQVIsYUFBU1MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixnQkFBNUI7QUFDSCxDQUhEOztBQUtBUixVQUFVRyxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxZQUFXO0FBQzNDSixtQkFBZUssS0FBZixDQUFxQkMsT0FBckIsR0FBK0IsTUFBL0I7QUFDQVIsYUFBU1MsSUFBVCxDQUFjQyxTQUFkLENBQXdCRSxNQUF4QixDQUErQixnQkFBL0I7QUFDSCxDQUhEOztBQU1BUixXQUFXUyxPQUFYLENBQW1CLFVBQVNDLElBQVQsRUFBZTtBQUM5QkEsU0FBS1IsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBVztBQUN0Q0osdUJBQWVLLEtBQWYsQ0FBcUJDLE9BQXJCLEdBQStCLE1BQS9CO0FBQ0FSLGlCQUFTUyxJQUFULENBQWNDLFNBQWQsQ0FBd0JFLE1BQXhCLENBQStCLGdCQUEvQjtBQUNILEtBSEQ7QUFJSCxDQUxEIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZnVsbHNjcmVlbm1lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlci1tZW51XCIpO1xuY29uc3QgZnVsbFNjcmVlbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnVsbHNjcmVlbm1lbnUnKTtcbmNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnVsbHNjcmVlbm1lbnVfX2J0blwiKTtcbmNvbnN0IGNsb3NlTWVudTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1bGxzY3JlZW5tZW51X19saW5rXCIpO1xuXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBmdWxsU2NyZWVuTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdibG9ja2VkLXNjcm9sbCcpO1xufSk7XG5cbmNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGZ1bGxTY3JlZW5NZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2NrZWQtc2Nyb2xsJyk7XG59KTtcblxuXG5jbG9zZU1lbnUyLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZnVsbFNjcmVlbk1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2NrZWQtc2Nyb2xsJyk7XG4gICAgfSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/fullscreenmenu.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/parralaxOnScroll.js":
/*!********************************************************!*\
  !*** ./src/assets/scripts/modules/parralaxOnScroll.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar parralax = function () {\n    var bg = document.querySelector('.header__background');\n\n    return {\n        move: function move(block, windowScroll, strafeAmount) {\n            var strafe = windowScroll / -strafeAmount + '%';\n            var style = block.style;\n            style.top = strafe;\n        },\n\n        init: function init(wScroll) {\n            this.move(bg, wScroll, 45);\n        }\n    };\n}();\n\nwindow.onscroll = function () {\n    var wScroll = window.pageYOffset;\n\n    parralax.init(wScroll);\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJyYWxheE9uU2Nyb2xsLmpzPzUzMzQiXSwibmFtZXMiOlsicGFycmFsYXgiLCJiZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vdmUiLCJibG9jayIsIndpbmRvd1Njcm9sbCIsInN0cmFmZUFtb3VudCIsInN0cmFmZSIsInN0eWxlIiwidG9wIiwiaW5pdCIsIndTY3JvbGwiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsInBhZ2VZT2Zmc2V0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFdBQVksWUFBWTtBQUMxQixRQUFNQyxLQUFLQyxTQUFTQyxhQUFULENBQXVCLHFCQUF2QixDQUFYOztBQUVBLFdBQU87QUFDSEMsY0FBTSxjQUFVQyxLQUFWLEVBQWlCQyxZQUFqQixFQUErQkMsWUFBL0IsRUFBNkM7QUFDL0MsZ0JBQUlDLFNBQVNGLGVBQWUsQ0FBQ0MsWUFBaEIsR0FBK0IsR0FBNUM7QUFDQSxnQkFBSUUsUUFBUUosTUFBTUksS0FBbEI7QUFDQUEsa0JBQU1DLEdBQU4sR0FBWUYsTUFBWjtBQUNILFNBTEU7O0FBT0hHLGNBQU0sY0FBVUMsT0FBVixFQUFtQjtBQUNyQixpQkFBS1IsSUFBTCxDQUFVSCxFQUFWLEVBQWNXLE9BQWQsRUFBdUIsRUFBdkI7QUFDSDtBQVRFLEtBQVA7QUFXSCxDQWRnQixFQUFqQjs7QUFnQkFDLE9BQU9DLFFBQVAsR0FBa0IsWUFBWTtBQUMxQixRQUFNRixVQUFVQyxPQUFPRSxXQUF2Qjs7QUFFQWYsYUFBU1csSUFBVCxDQUFjQyxPQUFkO0FBQ0gsQ0FKRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3BhcnJhbGF4T25TY3JvbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXJyYWxheCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19iYWNrZ3JvdW5kJyk7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbW92ZTogZnVuY3Rpb24gKGJsb2NrLCB3aW5kb3dTY3JvbGwsIHN0cmFmZUFtb3VudCkge1xuICAgICAgICAgICAgdmFyIHN0cmFmZSA9IHdpbmRvd1Njcm9sbCAvIC1zdHJhZmVBbW91bnQgKyAnJSc7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBibG9jay5zdHlsZTtcbiAgICAgICAgICAgIHN0eWxlLnRvcCA9IHN0cmFmZTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0OiBmdW5jdGlvbiAod1Njcm9sbCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlKGJnLCB3U2Nyb2xsLCA0NSk7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICAgIHBhcnJhbGF4LmluaXQod1Njcm9sbCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/parralaxOnScroll.js\n");

/***/ })

/******/ });