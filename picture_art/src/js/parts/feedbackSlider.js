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