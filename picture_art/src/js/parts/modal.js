let modal = () => {
	// Вызывается модальное окно при нажатии на "Подробнее об услуге"

	// Модальное окно popup-consultation
	let popupConsultation = document.querySelector('.popup-consultation');


  //функция для всех кнопок УЗНАТЬ ПОДРОБНЕЕ в табах и для УЗНАТЬ БОЛЬШЕ
  let bindModal = (btn, overlayStatus, overflowStatus) => {
		popupConsultation.style.display = overlayStatus;
		// добавляет тень на короткое время если быстро закрыть окно
		btn.classList.add('more-splash');

		// окно не прокручивается
		document.body.style.overflow = overflowStatus;
		

  	setTimeout(() => {
  		btn.classList.remove('more-splash');
  	}, 1500);
  };


  //событие при клике
  document.body.addEventListener('click', (e) => {
		let target = e.target;
		
		// Должно вызываться модальное окно (класс popup-consultation) [ окно не прокручивается ]
		(target.classList.contains('button-consultation')) ? bindModal(target, 'block', 'hidden'): '';

		// При нажатии на крестик или подложку - исчезать.
  	(target.classList.contains('popup-close') || target.classList.contains('popup-consultation')) ? bindModal(target, 'none', ''): '';
  });

};

module.exports = modal;