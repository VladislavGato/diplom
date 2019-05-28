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