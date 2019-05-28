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