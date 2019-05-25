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
			giftOn =0;
	};


	// модальное окно которое сейчас открыто
	let overlayOn;

  //функция модального окна
  let bindModal = (btn, overlay, overlayStatus, overflowStatus) => {
		overlayOn = overlay;
		// console.log(btn);
		// console.log(overlayOn);

		// вызов нужного модального окна
		overlay.style.display = overlayStatus;
		
		// окно не прокручивается
		document.body.style.overflow = overflowStatus;

		// если нажали на подарок то:
		(overlay.classList.contains('popup-gift')) ? hidenGift('none'): '';
	
		// отключает "вызов окна через 60 сек"
		statusСountdown = 0;
	};
	


  //событие при клике
  document.body.addEventListener('click', (e) => {
		let target = e.target;	

		// Должно вызываться модальное окно (класс popup-consultation) [ окно не прокручивается ]
		(target.classList.contains('button-consultation')) ? bindModal(target, popupConsultation, 'block', 'hidden'): '';

		// должно появляться модальное окно (popup-gift)
		(target.classList.contains('fixed-gift')) ? bindModal(target, popupGift, 'block', 'hidden'): '';
		// 

		// Должно вызываться модальное окно (popup-design)
		(target.classList.contains('button-design')) ? bindModal(target, popupDesign, 'block', 'hidden'): '';


		// При нажатии на крестик или подложку открытого модального окна
		//  - закрывается открытое модальное окно.
		(target.classList.contains('popup-close') || target == overlayOn) ? bindModal(target, overlayOn, 'none', ''): '';
	});
	
	
	// 
	let statusСountdown = 1;
	// откроется модальное окно по истечении 60 секунд если ни на что не нажали
	let countdown = () => {
		setTimeout(() => {
			(statusСountdown == 1) ? bindModal("", popupConsultation, 'block', 'hidden'): ''
		}, 6000);
	};
	countdown();


	// 
	let giftOn = 1;
	// Модальное окно при пролистывании до конца страницы
	window.onscroll = () => {
		// Высота с учетом прокрутки:
		let scrollHeight = Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);
		if (window.scrollY + 1 >= scrollHeight - innerHeight && giftOn == 1) bindModal('', popupGift, 'block', 'hidden');
	};


};

module.exports = modal;