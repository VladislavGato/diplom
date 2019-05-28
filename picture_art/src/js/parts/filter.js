let filter = () => {
	// поле с меню
	let portfolioMenu = document.querySelector('.portfolio-menu');
	// пункты меню
	let iconPortfolio = document.querySelectorAll('.icon-portfolio');
	// сами блоки с картинками
	let portfolioBlock = document.querySelectorAll('.portfolio-block');
	// блок с вариантом когда нет совпадений
	let portfolioNo = document.querySelector('.portfolio-no');
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