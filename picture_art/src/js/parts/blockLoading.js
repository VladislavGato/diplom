let blockLoading = () => {
	// кнопка 'Посмотреть больше стилей'
	let buttonStyles = document.querySelector('.button-styles'),
	// собираем все скрытые блоки со стилями
	hiddenStyles = document.querySelectorAll('.styles-2');

	// открываем все скрытые блоки
	document.body.addEventListener('click', (e) => {
		let target = e.target;
		if (target == buttonStyles) {
			hiddenStyles.forEach((item) => item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs'));
			// удаляем кнопку со страницы
			buttonStyles.remove();
		}

	});


};

module.exports = blockLoading;