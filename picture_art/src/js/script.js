window.addEventListener('DOMContentLoaded', () => {
	"use strict";

	// слайдер на первом экране
	let mainSlider = require('./parts/mainSlider.js'),
	// Вызывается модальное окно при нажатии на "Подробнее об услуге"
		modal = require('./parts/modal.js'),
		feedbackSlider = require('./parts/feedbackSlider.js');




	mainSlider();
	modal();
	feedbackSlider();

});
