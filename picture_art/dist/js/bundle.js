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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/mainSlider.js":
/*!************************************!*\
  !*** ./src/js/parts/mainSlider.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let mainSlider = () => {

  //переменная которая отвечает за то, какой слайд показывается
	let slideIndex = 2;

  // сами слайды. получаем все слайды
  let slides = document.querySelectorAll('.main-slider-item');


  let showSlides = (n) => {

		(n > slides.length) ? slideIndex = 1 : '';

		// все слайды скроются
		slides.forEach((item) => item.style.display = 'none');
    // покажем тот слайд который нам нужен
    slides[slideIndex - 1].style.display = 'block';
	};
	showSlides(slideIndex);

	// 
	let plusSlides = () => {
		showSlides(slideIndex += 1);
	};

	// 
	let	timerSlades = () => {
		setInterval(plusSlides, 4000);
	};
	timerSlades();

};

module.exports = mainSlider;

/***/ }),

/***/ "./src/js/parts/modalPopupConsultation.js":
/*!************************************************!*\
  !*** ./src/js/parts/modalPopupConsultation.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let modalPopupConsultation = () => {
	// Вызывается модальное окно при нажатии на "Подробнее об услуге"

	// Модальное окно popup-consultation
	let popupConsultation = document.querySelector('.popup-consultation');


  //функция для всех кнопок УЗНАТЬ ПОДРОБНЕЕ в табах и для УЗНАТЬ БОЛЬШЕ
  let bindModal = (btn, overlayStatus, overflowStatus) => {
		popupConsultation.style.display = overlayStatus;
		// добавляет тень на короткое время если быстро закрыть окно
		btn.classList.add('more-splash');

		// окно не прокручивается
		document.body.style.overflow = overflowStatus;
		

  	setTimeout(() => {
  		btn.classList.remove('more-splash');
  	}, 1500);
  };


  //событие при клике
  document.body.addEventListener('click', (e) => {
		let target = e.target;
		
		// Должно вызываться модальное окно (класс popup-consultation) [ окно не прокручивается ]
		(target.classList.contains('button-consultation')) ? bindModal(target, 'block', 'hidden'): '';

		// При нажатии на крестик или подложку - исчезать.
  	(target.classList.contains('popup-close') || target.classList.contains('popup-consultation')) ? bindModal(target, 'none', ''): '';
  });

};

module.exports = modalPopupConsultation;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', () => {
	"use strict";

	// слайдер на первом экране
	let mainSlider = __webpack_require__(/*! ./parts/mainSlider.js */ "./src/js/parts/mainSlider.js"),

	// Вызывается модальное окно при нажатии на "Подробнее об услуге"
		modalPopupConsultation = __webpack_require__(/*! ./parts/modalPopupConsultation.js */ "./src/js/parts/modalPopupConsultation.js");











	mainSlider();
	modalPopupConsultation();


	

});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map