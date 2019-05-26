let modal = () => {
	// Модальное окно popup-consultation
	let popupConsultation = document.querySelector('.popup-consultation'),
	// модальное окно подарка(popup-gift)
		popupGift = document.querySelector('.popup-gift'),
	// картинка подарка fixed-gift
		giftPic = document.querySelector('.fixed-gift'),
	// Модальное окно popup-design
		popupDesign = document.querySelector('.popup-design');
	// 



	// функция скрывает картинку с подарком
	let hidenGift = (statusGift) => {
			giftPic.style.display = statusGift;
			giftOn = 0;
	};




	// модальное окно которое сейчас открыто
	let overlayOn;

  //функция модального окна
  let bindModal = (btn, overlay, overlayStatus, overflowStatus, closeBtn) => {
		overlayOn = overlay;
		console.log(btn);
		console.log(overlayOn);

		// вызов нужного модального окна
		overlay.style.display = overlayStatus;
		
		// окно не прокручивается
		document.body.style.overflow = overflowStatus;

		// если нажали на подарок то:
		(overlay.classList.contains('popup-gift')) ? hidenGift('none'): '';
	
		// отключает "вызов окна через 60 сек"
		statusСountdown = 0;


		//открытие подарка в конце страницы
		giftFooter = 0;
		if (btn == 1 || closeBtn == 1) (giftFooter = 1);


	};
	


  //событие при клике
  document.body.addEventListener('click', (e) => {
		let target = e.target;	

		// Должно вызываться модальное окно (класс popup-consultation) [ окно не прокручивается ]
		(target.classList.contains('button-consultation')) ? bindModal(target, popupConsultation, 'block', 'hidden', ''): '';

		// должно появляться модальное окно (popup-gift)
		(target.classList.contains('fixed-gift')) ? bindModal(target, popupGift, 'block', 'hidden', ''): '';
		// 

		// Должно вызываться модальное окно (popup-design)
		(target.classList.contains('button-design')) ? bindModal(target, popupDesign, 'block', 'hidden', ''): '';


		// При нажатии на крестик или подложку открытого модального окна
		//  - закрывается открытое модальное окно.
		(target.classList.contains('popup-close') || target == overlayOn) ? bindModal(target, overlayOn, 'none', '', 1): '';
	});
	
	
	// 
	let statusСountdown = 1;
	// откроется модальное окно по истечении 60 секунд если ни на что не нажали
	let countdown = () => {
		setTimeout(() => {
			(statusСountdown == 1) ? bindModal("1", popupConsultation, 'block', 'hidden', ''): ''
		}, 60000);
	};
	countdown();


	

	// статус подарка
	let giftFooter = 1;
	let giftOn = 1;
	// Модальное окно при пролистывании до конца страницы
	window.onscroll = () => {
		// Высота с учетом прокрутки:
		let scrollHeight = Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);
		if (window.scrollY + 1 >= scrollHeight - innerHeight && giftOn == 1 && giftFooter == 1) bindModal('', popupGift, 'block', 'hidden', '');
	};


};

module.exports = modal;