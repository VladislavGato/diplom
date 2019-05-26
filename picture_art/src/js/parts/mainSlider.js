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
