window.addEventListener('DOMContentLoaded', () => {
	"use strict";

	// слайдер на первом экране
	let mainSlider = require('./parts/mainSlider.js'),
	// Вызывается модальное окно при нажатии на "Подробнее об услуге"
		modal = require('./parts/modal.js'),
		feedbackSlider = require('./parts/feedbackSlider.js'),
		calc = require('./parts/calc.js'),
		blockLoading = require('./parts/blockLoading.js'),
		accordion = require('./parts/accordion.js'),
		burger = require('./parts/burger.js'),
		filter = require('./parts/filter.js'),
		picInHover = require('./parts/picInHover.js'),
		forms = require('./parts/forms.js');



		
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
