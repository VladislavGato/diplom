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