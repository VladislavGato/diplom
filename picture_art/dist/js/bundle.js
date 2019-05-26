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

/***/ "./src/js/parts/feedbackSlider.js":
/*!****************************************!*\
  !*** ./src/js/parts/feedbackSlider.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let feedbackSlider = () => {

	//переменная которая отвечает за то, какой слайд показывается
	let feedbackSlideIndex = 1,

	// сами слайды. получаем все слайды
		feedbackSlides = document.querySelectorAll('.feedback-slider-item'),
	// элементы навигации, стрелочки ВПЕРЕД и НАЗАД
		mainPprevBtn = document.querySelector('.main-prev-btn'),
		mainNextBtn = document.querySelector('.main-next-btn');

	//


	let showFeedbackSlides = (n) => {

		if (n > feedbackSlides.length) {
			feedbackSlideIndex = 1;
		}

		if (n < 1) {
			feedbackSlideIndex = feedbackSlides.length;
		}

		feedbackSlides.forEach((item) => item.style.display = 'none');
		// //     ! старый аналогичный способ !
		// for (let i = 0; i < feedbackSlides.length; i++) {
		//     feedbackSlides[i].style.display = 'none';
		// }

		// покажем тот слайд который нам нужен
		feedbackSlides[feedbackSlideIndex - 1].style.display = 'block';

	};

	showFeedbackSlides(feedbackSlideIndex);

	// функция которая увеличивает наш параметр slideIndex
	let plusFeedbackSlides = (n) => {
		showFeedbackSlides(feedbackSlideIndex += n);
	};

	// // функция которая определяет текущий слайд и устанавливает его
	// let currentFeedbackSlide = (n) => {
	// 	showFeedbackSlides(feedbackSlideIndex = n);
	// }

	// кнопки стрелочка назад и стрелочка вперед
	mainPprevBtn.addEventListener('click', () => {
		plusFeedbackSlides(-1);
	});
	mainNextBtn.addEventListener('click', () => {
		plusFeedbackSlides(1);
	});

	// slideInLeft
	// slideInRight

	// slideOutLeft
	// slideOutRight

























};

module.exports = feedbackSlider;

/***/ }),

/***/ "./src/js/parts/mainSlider.js":
/*!************************************!*\
  !*** ./src/js/parts/mainSlider.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let mainSlider = () => {

  // //переменная которая отвечает за то, какой слайд показывается
	let mainSlideIndex = 1;

  // // сами слайды. получаем все слайды
  let mainSlides = document.querySelectorAll('.main-slider-item');

	// технические переменный отвечающие за показ слайдов
	let ss = 0;
	let pp = 0;
  let showMainSlides = (n) => {
		// console.log('1');
		(n > mainSlides.length - 1) ? mainSlideIndex = 0: '';
		// все слайды скроются
		mainSlides.forEach((item) => item.style.display = 'none');
		// console.log(pp);

		if (pp > 0) {
			// покажем тот слайд который нам нужен
			(mainSlideIndex == 0) ? (ss = 1) : (ss = 0);

			mainSlides[ss].style.display = 'block';
			mainSlides[ss].classList.add('animated', 'fadeOutDown');

			mainSlides[ss].addEventListener('animationend', function () {
				mainSlides[ss].style.display = 'none';
				mainSlides[ss].classList.remove('animated', 'fadeOutDown');
			});

			mainSlides[ss].addEventListener('animationend', function () {
				mainSlides[mainSlideIndex].style.display = 'block';
				mainSlides[mainSlideIndex].classList.add('animated', 'fadeInDown');
			});
		} else {
			(mainSlideIndex == 0) ? (ss = 0) : (ss = 1);

			mainSlides[ss].classList.add('animated', );
			mainSlides[ss].style.display = 'block';

			mainSlides[ss].addEventListener('animationend', function () {
				mainSlides[ss].style.display = 'none';
				mainSlides[ss].classList.remove('animated', 'fadeOutDown');
			});

			mainSlides[ss].addEventListener('animationend', function () {
				mainSlides[mainSlideIndex].style.display = 'block';
				mainSlides[mainSlideIndex].classList.add('animated', 'fadeInDown');
			});
		}
		
		pp +=1;
		// console.log('2')
	};
	showMainSlides(mainSlideIndex);


	// прибавляет
	let plusMainSlides = () => {
		// console.log('слайд+');
		showMainSlides(mainSlideIndex += 1);
	};


	// через интервал запускается смена фото
	let timerMainSlades = () => {
		setInterval(plusMainSlides, 10000);
	};
	timerMainSlades();

};

module.exports = mainSlider;







// let mainSlider = () => {

// 	// //переменная которая отвечает за то, какой слайд показывается
// 	let slideIndex = 1;

// 	// // сами слайды. получаем все слайды
// 	let slides = document.querySelectorAll('.main-slider-item');

// 	// технические переменный отвечающие за показ слайдов
// 	let ss = 0;
// 	let pp = 0;
// 	let showSlides = (n) => {
// 		// console.log('1');
// 		(n > slides.length - 1) ? slideIndex = 0: '';
// 		// все слайды скроются
// 		slides.forEach((item) => item.style.display = 'none');
// 		// console.log(pp);

// 		if (pp > 0) {
// 			// покажем тот слайд который нам нужен
// 			(slideIndex == 0) ? (ss = 1) : (ss = 0);

// 			slides[ss].style.display = 'block';
// 			slides[ss].classList.add('animated', 'fadeOutDown');

// 			slides[ss].addEventListener('animationend', function () {
// 				slides[ss].style.display = 'none';
// 				slides[ss].classList.remove('animated', 'fadeOutDown');
// 			});

// 			slides[ss].addEventListener('animationend', function () {
// 				slides[slideIndex].style.display = 'block';
// 				slides[slideIndex].classList.add('animated', 'fadeInDown');
// 			});
// 		} else {
// 			(slideIndex == 0) ? (ss = 0) : (ss = 1);

// 			slides[ss].classList.add('animated', );
// 			slides[ss].style.display = 'block';

// 			slides[ss].addEventListener('animationend', function () {
// 				slides[ss].style.display = 'none';
// 				slides[ss].classList.remove('animated', 'fadeOutDown');
// 			});

// 			slides[ss].addEventListener('animationend', function () {
// 				slides[slideIndex].style.display = 'block';
// 				slides[slideIndex].classList.add('animated', 'fadeInDown');
// 			});
// 		}

// 		pp += 1;
// 		// console.log('2')
// 	};
// 	showSlides(slideIndex);


// 	// прибавляет
// 	let plusSlides = () => {
// 		// console.log('слайд+');
// 		showSlides(slideIndex += 1);
// 	};


// 	// через интервал запускается смена фото
// 	let timerSlades = () => {
// 		setInterval(plusSlides, 10000);
// 	};
// 	timerSlades();

// };

// module.exports = mainSlider;


/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

let modal = () => {
	// Модальное окно popup-consultation
	let popupConsultation = document.querySelector('.popup-consultation'),
	// модальное окно подарка(popup-gift)
		popupGift = document.querySelector('.popup-gift'),
	// картинка подарка fixed-gift
		giftPic = document.querySelector('.fixed-gift'),
	// Модальное окно popup-design
		popupDesign = document.querySelector('.popup-design');
	// 



	// функция скрывает картинку с подарком
	let hidenGift = (statusGift) => {
			giftPic.style.display = statusGift;
			giftOn = 0;
	};




	// модальное окно которое сейчас открыто
	let overlayOn;

  //функция модального окна
  let bindModal = (btn, overlay, overlayStatus, overflowStatus, closeBtn) => {
		overlayOn = overlay;
		console.log(btn);
		console.log(overlayOn);

		// вызов нужного модального окна
		overlay.style.display = overlayStatus;
		
		// окно не прокручивается
		document.body.style.overflow = overflowStatus;

		// если нажали на подарок то:
		(overlay.classList.contains('popup-gift')) ? hidenGift('none'): '';
	
		// отключает "вызов окна через 60 сек"
		statusСountdown = 0;


		//открытие подарка в конце страницы
		giftFooter = 0;
		if (btn == 1 || closeBtn == 1) (giftFooter = 1);


	};
	


  //событие при клике
  document.body.addEventListener('click', (e) => {
		let target = e.target;	

		// Должно вызываться модальное окно (класс popup-consultation) [ окно не прокручивается ]
		(target.classList.contains('button-consultation')) ? bindModal(target, popupConsultation, 'block', 'hidden', ''): '';

		// должно появляться модальное окно (popup-gift)
		(target.classList.contains('fixed-gift')) ? bindModal(target, popupGift, 'block', 'hidden', ''): '';
		// 

		// Должно вызываться модальное окно (popup-design)
		(target.classList.contains('button-design')) ? bindModal(target, popupDesign, 'block', 'hidden', ''): '';


		// При нажатии на крестик или подложку открытого модального окна
		//  - закрывается открытое модальное окно.
		(target.classList.contains('popup-close') || target == overlayOn) ? bindModal(target, overlayOn, 'none', '', 1): '';
	});
	
	
	// 
	let statusСountdown = 1;
	// откроется модальное окно по истечении 60 секунд если ни на что не нажали
	let countdown = () => {
		setTimeout(() => {
			(statusСountdown == 1) ? bindModal("1", popupConsultation, 'block', 'hidden', ''): ''
		}, 60000);
	};
	countdown();


	

	// статус подарка
	let giftFooter = 1;
	let giftOn = 1;
	// Модальное окно при пролистывании до конца страницы
	window.onscroll = () => {
		// Высота с учетом прокрутки:
		let scrollHeight = Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);
		if (window.scrollY + 1 >= scrollHeight - innerHeight && giftOn == 1 && giftFooter == 1) bindModal('', popupGift, 'block', 'hidden', '');
	};


};

module.exports = modal;

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
		modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),
		feedbackSlider = __webpack_require__(/*! ./parts/feedbackSlider.js */ "./src/js/parts/feedbackSlider.js");




	mainSlider();
	modal();
	feedbackSlider();

});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map