let modal = () => {
	// Модальное окно popup-consultation
	let popupConsultation = document.querySelector('.popup-consultation');
	// картинка подарка fixed-gift
	let giftPic = document.querySelector('.fixed-gift');


  //функция модального окна
  let bindModal = (btn, overlayStatus, overflowStatus) => {
		popupConsultation.style.display = overlayStatus;
		// окно не прокручивается
		document.body.style.overflow = overflowStatus;

		// если нажали на подарок то:
		(btn.classList.contains('fixed-gift')) ? hidenGift('none'): '' ;
		// (btn.classList.contains('fixed-gift')) ? hidenGift('none'): hidenGift('');

		// отключает отсчет времени
		statusСountdown = 0;
	};
	

	// функция скрывает картинку с подарком (или показывает если нужно)
	let hidenGift = (statusGift) => {
		giftPic.style.display = statusGift;
	};



  //событие при клике
  document.body.addEventListener('click', (e) => {
		let target = e.target;	
		// Должно вызываться модальное окно (класс popup-consultation) [ окно не прокручивается ]
		(target.classList.contains('button-consultation')) ? bindModal(target, 'block', 'hidden'): '';
		// должно появляться модальное окно (popup-gift)
		(target.classList.contains('fixed-gift')) ? bindModal(target, 'block', 'hidden'): '';
		// При нажатии на крестик или подложку - исчезать.
		(target.classList.contains('popup-close') || target.classList.contains('popup-consultation')) ? bindModal(target, 'none', ''): '';	
	});
	
	
	// модальное окно по истечении 60 секунд
	let statusСountdown = 1;
	let countdown = () => {
		setTimeout(() => {
			(statusСountdown == 1) ? bindModal(popupConsultation, 'block', 'hidden'): ''
		}, 60000);
	};
	countdown();

};

module.exports = modal;