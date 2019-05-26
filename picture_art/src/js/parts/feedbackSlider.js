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