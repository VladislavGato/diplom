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

/***/ "./src/js/parts/accordion.js":
/*!***********************************!*\
  !*** ./src/js/parts/accordion.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

let accordion = () => {

  // переменная которая отвечает за то, какой блок показывается
	// let accordionIndex = 1;
	// вопросы
	let accordionQuest = document.querySelectorAll('.accordion-heading');
  // сами слайды. получаем все блоки аккордиона
  // let accordionBlocks = document.querySelectorAll('.accordion-block');

	
	// for (let i = 0; i < accordionQuest.length; i++) {
	// 	accordionQuest[i].onclick = function () {
	// 		this.classList.toggle("active");
	// 		this.nextElementSibling.classList.toggle("show");
	// 		accordionIndex = i;
	// 		console.log(accordionIndex);
	// 	}
	// }


	// var panelItem = document.querySelectorAll('.panel-title'),
	let active = document.getElementsByClassName('accordion-active');

	Array.from(accordionQuest).forEach(function (item, i, accordionQuest) {
		item.addEventListener('click', function (e) {
			accordionQuest.forEach((item) => item.style.fontSize = '2.2rem');
			accordionQuest.forEach((item) => item.style.fontStyle = 'normal');

			if (active.length > 0 && active[0] !== this) {
				// если есть активный элемент, и это не тот по которому кликнули
				active[0].classList.remove('accordion-active'); // убрать класс accordion-active
			}
			// изменить состояние класса accordion-active на текущем элементе: добавить если не было, убрать если было.
			this.classList.toggle('accordion-active');
			this.style.fontSize = '2.8rem';
			this.style.fontStyle = 'italic';
		});
	});


};

module.exports = accordion;

/***/ }),

/***/ "./src/js/parts/blockLoading.js":
/*!**************************************!*\
  !*** ./src/js/parts/blockLoading.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let blockLoading = () => {
	// кнопка 'Посмотреть больше стилей'
	let buttonStyles = document.querySelector('.button-styles'),
	// собираем все скрытые блоки со стилями
	hiddenStyles = document.querySelectorAll('.styles-2');

	// открываем все скрытые блоки
	document.body.addEventListener('click', (e) => {
		let target = e.target;
		if (target == buttonStyles) {
			hiddenStyles.forEach((item) => item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs'));
			// удаляем кнопку со страницы
			buttonStyles.remove();
		}

	});


};

module.exports = blockLoading;

/***/ }),

/***/ "./src/js/parts/burger.js":
/*!********************************!*\
  !*** ./src/js/parts/burger.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

let burger = () => {
	// иконка бургер меню
	let burgerIcon = document.querySelector('.burger'),
	// раскрываемое бургер меню
		burgerMenu = document.querySelectorAll('.burger-menu')[0];
	// состояние бургер-меню
	let burgerIndex = 0;


// На планшетной версии (768 и меньше ширина) при клике на гамбургер - должно показываться подменю.
	burgerIcon.addEventListener('click', () => {
		// console.log('меню клик');
		// console.log(window.innerWidth);

		if (window.innerWidth <= 768 && burgerIndex == 0) {
			console.log('условия сработали');
			burgerMenu.style.display = 'block';
			burgerIndex = 1;		
		} else {
			burgerMenu.style.display = 'none';
			burgerIndex = 0;
		}
	});

	//  Если человек разворачивает планшет и ширина становится больше - оно скрывается.
	window.onresize = function () {
		// console.log('текущая ширина экрана');
		if (window.innerWidth > 768) {
			burgerMenu.style.display = 'none';
			burgerIndex = 0;
		}
	};

};

module.exports = burger;

/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

let calc = () => {
	//  селекты калькулятора обязательные 
	let size = document.getElementById('size'),
		material = document.getElementById('material'),
	// селектор опциональный
		options = document.getElementById('options'),
	// поле ввода промокода 
		promocode = document.querySelector('.promocode'),
	// поле с итоговой ценой
		calcPrice = document.querySelector('.calc-price'),
	//
		sizeSum = 0, // размер холста
		materialСoeff = 0, // материал
		optionsSum = 0, // доп. опции 
		promocodeSum = 1, // скидка
		promocodeWord = '',
		totalPrice = ''; // итоговое значение общей суммы	
	
	calcPrice.innerHTML = totalPrice;
	
	document.body.addEventListener('input', e => {
		let target = e.target;
		// console.log(size.value);
		// console.log(material.value);
		// console.log(options.value);
		// console.log(promocode.value);
		// console.log(promocodeSum);
		promocodeSum = 1;

		sizeSum = +size.value;
		materialСoeff = +material.value;
		optionsSum = +options.value;
		promocodeWord = promocode.value,


		(promocodeWord == 'IWANTPOPART') ? promocodeSum = 0.7: 1;

		if (sizeSum == 0 || materialСoeff == 0) {
			calcPrice.innerHTML = '';
		} else {
			totalPrice = ((sizeSum * materialСoeff) + optionsSum) * promocodeSum;
			calcPrice.innerHTML = `Общая стоимость ${totalPrice}`;
		}

	});




};

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/feedbackSlider.js":
/*!****************************************!*\
  !*** ./src/js/parts/feedbackSlider.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let feedbackSlider = () => {

	//переменная которая отвечает за то, какой слайд показывается
	let feedbackSlideIndex = 1,

		way = 0,

	// сами слайды. получаем все слайды
		feedbackSlides = document.querySelectorAll('.feedback-slider-item'),
	// элементы навигации, стрелочки ВПЕРЕД и НАЗАД
		mainPprevBtn = document.querySelector('.main-prev-btn'),
		mainNextBtn = document.querySelector('.main-next-btn');
	//

	let pastPicture = 3;

	let showFeedbackSlides = (n, way) => {
		// console.log(n);
		// console.log(way);


		if (n > feedbackSlides.length) {
			feedbackSlideIndex = 1;
		}
		// console.log(feedbackSlideIndex);

		if (n < 1) {
			feedbackSlideIndex = feedbackSlides.length;
		}
		let feedbackSlideId = feedbackSlideIndex - 1;

		// console.log(' - - - - - - - - ');
		// console.log('текущий № ' + feedbackSlideIndex);
		// console.log('текущий id ' + (feedbackSlideIndex - 1));
		// console.log('-прошлый № ' + (pastPicture));
		// console.log('-прошлый id ' + (pastPicture - 1));

		// скроем все слайды
		feedbackSlides.forEach((item) => item.style.display = 'none');
		
		// покажем тот слайд который нам нужен
		// feedbackSlides[feedbackSlideIndex - 1].style.display = 'block';
		// console.log(feedbackSlides);

		if (way == 0) {
			// console.log('первый заход - 0');
			feedbackSlides[feedbackSlideIndex - 1].style.display = 'block';

		} else if (way == 2) {
			// console.log('ВПЕРЁД --> 2');
			feedbackSlides[feedbackSlideId].classList.remove('animated', 'fadeInLeft');
			feedbackSlides[feedbackSlideIndex - 1].style.display = 'block';
			feedbackSlides[feedbackSlideIndex - 1].classList.add('animated', 'fadeInRight');

		} else {
			// console.log('НАЗАД <-- 1');
			feedbackSlides[feedbackSlideId].classList.remove('animated', 'fadeInRight');
			feedbackSlides[feedbackSlideIndex - 1].style.display = 'block';
			feedbackSlides[feedbackSlideIndex - 1].classList.add('animated', 'fadeInLeft');
		}




		pastPicture = feedbackSlideIndex;
	};
	showFeedbackSlides(feedbackSlideIndex, way);

	// функция которая увеличивает наш параметр slideIndex
	let plusFeedbackSlides = (n, way) => {
		showFeedbackSlides((feedbackSlideIndex += n), way);
	};

	mainPprevBtn.addEventListener('click', () => {
		plusFeedbackSlides(-1, 1);
	});

	mainNextBtn.addEventListener('click', () => {
		plusFeedbackSlides(1, 2);
	});

	setInterval(() => {
		plusFeedbackSlides(1, 2);
	}, 12000);


};

module.exports = feedbackSlider;

/***/ }),

/***/ "./src/js/parts/filter.js":
/*!********************************!*\
  !*** ./src/js/parts/filter.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

let filter = () => {
	// поле с меню
	let portfolioMenu = document.querySelector('.portfolio-menu'),
	// пункты меню
	iconPortfolio = document.querySelectorAll('.icon-portfolio'),
	// сами блоки с картинками
	portfolioBlock = document.querySelectorAll('.portfolio-block'),
	// блок с вариантом когда нет совпадений
	portfolioNo = document.querySelector('.portfolio-no');
	// portfolioBlock.forEach((item) => item.style.display = 'none');
	// iconPortfolio.forEach((item) => item.style.display = 'none');
	// portfolioNo.style.display = 'block';


	portfolioMenu.addEventListener('click', (e) => {
		let target = e.target;
		// console.log('- - - - - - - ');
		// console.log('меню');
		// console.log(target);
		// console.log(iconPortfolio.length);
		// console.log(portfolioBlock.length);
		// console.log(target.className[0]);
		// console.log(target.classList[0]);
		// for (let i = 0; i < portfolioMenu.length)
		// (target.classList.contains("girl")) ? console.log('123123'): '';
		let firstClass = target.classList[0];
		console.log(firstClass);
		iconPortfolio.forEach((item) => item.classList.remove('active'));
		target.classList.add('active');

		let portfolioNoIndex = 0;

		// перебираем все блоки с картинками
		portfolioBlock.forEach(function (e) {
			// console.log(e);
			// console.log(e.classList);
			// console.log(firstClass);
			// (e.classList.contains(firstClass)) ? console.log(111): '';
			if (e.classList.contains(firstClass)) {
				// console.log(e);
				e.style.display = '';
				portfolioNoIndex += 1;
			} else {
				e.style.display = 'none';
			}
			// console.log('вари ' + portfolioNoIndex);
		});

		// сли выбираются 2 последних пункта - показываем блок portfolio-no
		(portfolioNoIndex == 0) ? portfolioNo.style.display = 'block': portfolioNo.style.display = 'none';
	});

};

module.exports = filter;

/***/ }),

/***/ "./src/js/parts/forms.js":
/*!*******************************!*\
  !*** ./src/js/parts/forms.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

let forms = () => {


	
	
	//валидация input в поле телефона и калькулятор
	document.body.addEventListener('input', e => {
		
		// поле ввода телефона
		if (e.target.getAttribute('name') === 'phone') {
			e.target.value = '+' + e.target.value.replace(/[^\d]/g, '').slice(0, 11);
			(e.target.value.length == 2) ? e.target.value = '+7' : '';
			(e.target.value.length == 1) ? e.target.value = '' : '';
		}
		
		// поле ввода имени (предпологается ввод только имени без фамиилии)
		if (e.target.getAttribute('name') === 'name') {
			// только: русские буквы в любом регистре
			e.target.value = e.target.value.replace(/[^\А-Яа-яЁё]/g, '').slice(0, 16);
		}
		
		// поле ввода сообения
		if (e.target.getAttribute('name') === 'message') {
			// только: русские буквы в любом регистре, пробелы, цифры и символы . , : ; - + = ( )
			// e.target.value = e.target.value.replace(/[^\А-Яа-яЁё\s\d\.\,\:\;\-\+\=\(\)]/g, '').slice(0, 120);	// только: русские буквы в любом регистре, пробелы, цифры и символы . , 
			e.target.value = e.target.value.replace(/[^\А-Яа-яЁё\s\d\.\,]/g, '').slice(0, 120);
		}
	});
	
	////////////////////////////////////////////////////////////////////////
	// объект с сообщениями, с различными состояниями нашего запроса
	let message = {
		loading: 'Отпрака...', // будет показываться пользователю когда наш запрос ещё не обработался
		success: 'Отправлено. Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Ошибка...' //если сервер не отвечает
	};
	
	
	let
	//  form = document.getElementsByClassName('main-form')[0], // форма в модальном окне
	// formBottom = document.getElementById('form'), // контактная форма
	input = document.getElementsByTagName('input'),  // все input'ы    
	option = document.getElementsByTagName('option'), // все input'ы    
	select = document.getElementsByTagName('select'), // все input'ы    

	
	// создадим новый div на странице
	statusMessage = document.createElement('div');
	// добавим к переменной класс
	statusMessage.classList.add('status');
	// 



	///// запрос на сервер
	// событие формы
	let sendForm = (elem) => {

		elem.appendChild(statusMessage);
		// помещаем сюда всё то что ответил пользователь (пара ключ: значение)
		let formData = new FormData(elem);
		// создаем новый объект в который мы поместим все эти данные

		function postData(data) {
			return new Promise(function (resolve, reject) {
				let request = new XMLHttpRequest(); // запрос
				request.open('POST', 'server.php');
				// заголовок запроса. вариант для JSON файлов , а не обычная форма
				request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
				// получить данные которые ввел пользователь
				// для того чтобы наблюдать за изменениями состояния нашего запроса
				request.addEventListener('readystatechange', () => {
					if (request.readyState < 4) { // наш запрос грузится если сервер будет долго отвечать 
						resolve(); // 'Загрузка...'
					} else if (request.readyState == 4 && request.status == 200) {
						resolve(); // 'Спасибо! Скоро мы с вами свяжемся!' 
					} else {
						reject(); // ''Что-то пошло не так...'                 
					}
				});
// console.log(data);
				////////// вариант для JSON 
				let obj = {}; // 

				data.forEach(function (value, key) { // берем все данные из formData и помещаем в obj
					obj[key] = value;

					console.log(obj[key]);

				});
				// превращаем обычные JS объекты в JSON формат
				let json = JSON.stringify(obj); 
				request.send(json);
			})
		}

		let clearInput = () => { // чтобы автоматически очищалось поле инпута
			for (let i = 0; i < input.length; i++) {
				input[i].value = ''; // возмем каждый инпут тот что есть в форме, у каждого инпута возмем value и превратим в пустую строку
			}
		};

		postData(formData)
			.then(() => statusMessage.innerHTML = message.loading)
			.then(() => statusMessage.innerHTML = message.success)
			.catch(
				() => statusMessage.innerHTML = message.failure
				


				)
			.then(clearInput);

	};


	///////////////////////////////////////////////



	document.body.addEventListener('submit', (event) => {
		let target = event.target;
		event.preventDefault();
		sendForm(target);
	});



};

module.exports = forms;

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
		// console.log(n);
		(n > mainSlides.length - 1) ? mainSlideIndex = 0: '';
		// все слайды скроются
		mainSlides.forEach((item) => item.style.display = 'none');
		// console.log(mainSlideIndex);

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

	// статус подарка
	let giftFooter = 1;
	let giftOn = 1;

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
		// console.log(btn);
		// console.log(overlayOn);

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
		// if (btn == 1 || closeBtn == 1) (giftFooter = 1);


	};
	


  //событие при клике
  document.body.addEventListener('click', (e) => {
		let target = e.target;	
		// console.log(giftFooter);
		// проверка на нажатие кнопок для отмены подарка
		(target.tagName == 'BUTTON' || target.tagName == 'A' || target.tagName == 'SELECT' || target.tagName == 'LI' || target.tagName == 'INPUT' || target.classList.contains('burger') || target.classList.contains('sizes-block') || target.classList.contains('quest')) ? giftFooter = 0 : '';



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

/***/ "./src/js/parts/picInHover.js":
/*!************************************!*\
  !*** ./src/js/parts/picInHover.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let picInHover = () => {
	// обертка для блоков с картинками
	let sizesWrapper = document.querySelector('.sizes-wrapper'),
	// все блоки с картинками
	sizesBlocks = document.querySelectorAll('.sizes-block'),
	imgSize = document.querySelectorAll('img'),
	// остальные элементы в блоке рядом с картинкой
	sizeBlock = document.querySelectorAll('.size'),
	startingPrice = document.querySelectorAll('.starting-price'),
	finalPrice = document.querySelectorAll('.final-price');

	// состояни картинки
	let imgStatus = 1;

	// индекс блока на который навели
	let indexBlock;
	
	let imageOne = document.querySelector('.size-1'),
		imageTwo = document.querySelector('.size-2'),
		imageThree = document.querySelector('.size-3'),
		imageFour = document.querySelector('.size-4');
	// прошлый блок
	let lastItem = 0;
	// тех.переменная. часть адреса прошлой картинки
	let partSrc;


///////////////////////////////////////////////////////////////////////////////////////


	// ФУНКЦИЯ 
	let eventPic = (event, num, numStatus, volume, endSrc, otherElements) => {
		let target = event.target;
		
		if (target.tagName == "IMG" && imgStatus == num) {
			imgStatus = numStatus;

			lastItem = target;
			// console.log(lastItem);

			partSrc = (target.src.substr(0, (target.src.length) - volume - 1));
			// console.log(partSrc);

			let adres = (target.src.substr(0, (target.src.length) - volume) + endSrc);
			target.src = adres;
			// console.log(adres);


			indexBlock = (target.className.substr(-1) - 1);

			
			sizeBlock[indexBlock].style.display = otherElements;
			startingPrice[indexBlock].style.display = otherElements;
			finalPrice[indexBlock].style.display = otherElements;
			// console.log(imgStatus);
			// console.log(lastTab);		
		}
	};



/////////////////////////////////////////////////////////////////////////////////////


	// ФУНКЦИЯ для сброса
	let eventPicRest = (ev, lastItem) => {
		let t = ev.target;

		if (true) {

			imageOne.src = partSrc + '1.png';
			imageTwo.src = partSrc + '2.png';
			imageThree.src = partSrc + '3.png';
			imageFour.src = partSrc + '4.png';

			imgStatus = 1;

			sizeBlock.forEach((item) => item.style.display = '');
			startingPrice.forEach((item) => item.style.display = '');
			finalPrice.forEach((item) => item.style.display = '');
			// console.log(imgStatus);
			// console.log(lastTab);

		}
	};


	// МОБИЛЬНЯ ВЕРСИЯ 

	// ПРИ ТАБЕ НА БЛОК (мобильная версия)
	sizesWrapper.onclick = function (event) {
		if (window.innerWidth < 768 && imgStatus == 1) {

			if (lastItem != 0) {
				// console.log('--сброс');
				eventPicRest(event, lastItem);
			}

			// console.log('--СМЕНА ');
			eventPic(event, 1, 0, 4, "-1.png", 'none');

			imgStatus = 1;
		}
	};


	// window.onresize = function () {
	// 	console.log(' - - - - - - - - - - - ');
	// 	console.log(window.innerWidth + " окно браузера");
	// 	console.log(document.documentElement.clientWidth);
	// 	console.log(document.body.clientWidth);	
	// };

	window.onresize = function () {
		// console.log('текущая ширина экрана');
		if (window.innerWidth < 768 && window.innerWidth > 760) {
				eventPicRest(event, lastItem);		
		}
	};

	// ПРИ НАВЕДЕНИИ КУРСОРА НА БЛОК (ПК версия)
	sizesWrapper.onmouseover = function (event) {
		if (window.innerWidth > 768) {
			eventPic(event, 1, 0, 4, "-1.png", 'none');
		};
	};

	// ПРИ УБИРАНИИ КУРСОРА С БЛОКА (ПК версия)
	sizesWrapper.onmouseout = function (event) {
		if (window.innerWidth > 768) {
			eventPic(event, 0, 1, 6, ".png", '');
		};
	};

};

module.exports = picInHover;










	// // ПРИ НАВЕДЕНИИ КУРСОРА НА БЛОК
	// sizesWrapper.onmouseover = function (event) {
	// 	let target = event.target;
	// 	// console.log(target.tagName);
	// 	// console.log(222);
	// 	// console.log(target.src);
	// 	// console.log(target.className);

	// 	if (target.tagName == "IMG" && imgStatus == 1) {
	// 		imgStatus = 0;
	// 		console.log('ПОМЕНЯЛИ');
	// 		// console.log(target.src);
	// 		// console.log(target.className);
	// 		//////// меняем фото на другое. меняем её адрес
	// 		let adres = (target.src.substr(0, (target.src.length) - 4) + "-1.png");
	// 		// console.log(adres);
	// 		// console.log(target.className + '-1.png');
	// 		target.src = adres;

	// 		//////// индекс блока
	// 		indexBlock = (target.className.substr(-1) - 1);
	// 		console.log(indexBlock);

	// 		/////// скрываем все элементы в этом блоке кроме фото
	// 		sizeBlock[indexBlock].style.display = 'none';
	// 		startingPrice[indexBlock].style.display = 'none';
	// 		finalPrice[indexBlock].style.display = 'none';
	// 	} else {
	// 		// console.log('XXXX');
	// 	}
	// };



	// // ПРИ УБИРАНИИ КУРСОРА С БЛОКА
	// sizesWrapper.onmouseout = function (event) {


	// 	let target = event.target;
	// 	// console.log(target.tagName);
	// 	// console.log(222);
	// 	// console.log(target.src);
	// 	// console.log(target.className);
	// 	if (target.tagName == "IMG" && imgStatus == 0) {
	// 		imgStatus = 1;
	// 		console.log('ВЕРНУЛИ');
	// 		// console.log(target.src);
	// 		// console.log(target.className);


	// 		//////// меняем фото на начальное. меняем её адрес
	// 		let adres = (target.src.substr(0, (target.src.length) - 6) + ".png");
	// 		console.log(adres);
	// 		// console.log(target.className + '-1.png');
	// 		target.src = adres;


	// 		//////// индекс блока
	// 		indexBlock = (target.className.substr(-1) - 1);
	// 		console.log(indexBlock);

	// 		/////// аналогично наоборот
	// 		sizeBlock[indexBlock].style.display = '';
	// 		startingPrice[indexBlock].style.display = '';
	// 		finalPrice[indexBlock].style.display = '';
	// 	} else {
	// 		// console.log('XXXX');
	// 	}


	// };





		// let eventPic = (event, num, numStatus, volume, endSrc, otherElements) => {
		// 	let target = event.target;

		// 	if (target.tagName == "IMG" && imgStatus == num) {
		// 		imgStatus = numStatus;

		// 		let adres = (target.src.substr(0, (target.src.length) - volume) + endSrc);
		// 		target.src = adres;

		// 		indexBlock = (target.className.substr(-1) - 1);

		// 		sizeBlock[indexBlock].style.display = otherElements;
		// 		startingPrice[indexBlock].style.display = otherElements;
		// 		finalPrice[indexBlock].style.display = otherElements;
		// 	}
		// };

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
		feedbackSlider = __webpack_require__(/*! ./parts/feedbackSlider.js */ "./src/js/parts/feedbackSlider.js"),
		calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
		blockLoading = __webpack_require__(/*! ./parts/blockLoading.js */ "./src/js/parts/blockLoading.js"),
		accordion = __webpack_require__(/*! ./parts/accordion.js */ "./src/js/parts/accordion.js"),
		burger = __webpack_require__(/*! ./parts/burger.js */ "./src/js/parts/burger.js"),
		filter = __webpack_require__(/*! ./parts/filter.js */ "./src/js/parts/filter.js"),
		picInHover = __webpack_require__(/*! ./parts/picInHover.js */ "./src/js/parts/picInHover.js"),
		forms = __webpack_require__(/*! ./parts/forms.js */ "./src/js/parts/forms.js");



		
	mainSlider();
	modal();
	feedbackSlider();
	calc();
	blockLoading();
	accordion();
	burger();
	filter();
	picInHover();
	forms();
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map