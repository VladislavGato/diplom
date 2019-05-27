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
		setInterval(plusMainSlides, 4000);
	};
	timerMainSlades();

};

module.exports = mainSlider;
