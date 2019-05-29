let forms = () => {


	
	
	//валидация input в поле телефона и калькулятор
	document.body.addEventListener('input', e => {
		
		// поле ввода телефона
		if (e.target.getAttribute('name') === 'phone') {
			e.target.value = '+' + e.target.value.replace(/[^\d]/g, '').slice(0, 11);
			(e.target.value.length == 2) ? e.target.value = '+7' : '';
			(e.target.value.length == 1) ? e.target.value = '' : '';
		}
		
		// поле ввода имени (предпологается ввод только имени без фамиилии)
		if (e.target.getAttribute('name') === 'name') {
			// только: русские буквы в любом регистре
			e.target.value = e.target.value.replace(/[^\А-Яа-яЁё]/g, '').slice(0, 16);
		}
		
		// поле ввода сообения
		if (e.target.getAttribute('name') === 'message') {
			// только: русские буквы в любом регистре, пробелы, цифры и символы . , : ; - + = ( )
			// e.target.value = e.target.value.replace(/[^\А-Яа-яЁё\s\d\.\,\:\;\-\+\=\(\)]/g, '').slice(0, 120);	// только: русские буквы в любом регистре, пробелы, цифры и символы . , 
			e.target.value = e.target.value.replace(/[^\А-Яа-яЁё\s\d\.\,]/g, '').slice(0, 120);
		}
	});
	
	////////////////////////////////////////////////////////////////////////
	// объект с сообщениями, с различными состояниями нашего запроса
	let message = {
		loading: 'Отпрака...', // будет показываться пользователю когда наш запрос ещё не обработался
		success: 'Отправлено. Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Ошибка...' //если сервер не отвечает
	};
	
	
	let
	//  form = document.getElementsByClassName('main-form')[0], // форма в модальном окне
	// formBottom = document.getElementById('form'), // контактная форма
	input = document.getElementsByTagName('input'),  // все input'ы        
	
	// создадим новый div на странице
	statusMessage = document.createElement('div');
	// добавим к переменной класс
	statusMessage.classList.add('status');
	// 



	///// запрос на сервер
	// событие формы
	let sendForm = (elem) => {

		elem.appendChild(statusMessage);
		// помещаем сюда всё то что ответил пользователь (пара ключ: значение)
		let formData = new FormData(elem);
		// создаем новый объект в который мы поместим все эти данные

		function postData(data) {
			return new Promise(function (resolve, reject) {
				let request = new XMLHttpRequest(); // запрос
				request.open('POST', 'server.php');
				// заголовок запроса. вариант для JSON файлов , а не обычная форма
				request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
				// получить данные которые ввел пользователь
				// для того чтобы наблюдать за изменениями состояния нашего запроса
				request.addEventListener('readystatechange', () => {
					if (request.readyState < 4) { // наш запрос грузится если сервер будет долго отвечать 
						resolve(); // 'Загрузка...'
					} else if (request.readyState == 4 && request.status == 200) {
						resolve(); // 'Спасибо! Скоро мы с вами свяжемся!' 
					} else {
						reject(); // ''Что-то пошло не так...'                 
					}
				});

				////////// вариант для JSON 
				let obj = {}; // 
				data.forEach(function (value, key) { // берем все данные из formData и помещаем в obj
					obj[key] = value;
				});
				// превращаем обычные JS объекты в JSON формат
				let json = JSON.stringify(obj); 
				request.send(json);
			})
		}

		let clearInput = () => { // чтобы автоматически очищалось поле инпута
			for (let i = 0; i < input.length; i++) {
				input[i].value = ''; // возмем каждый инпут тот что есть в форме, у каждого инпута возмем value и превратим в пустую строку
			}
		};

		postData(formData)
			.then(() => statusMessage.innerHTML = message.loading)
			.then(() => statusMessage.innerHTML = message.success)
			.catch(() => statusMessage.innerHTML = message.failure)
			.then(clearInput);

	};


	///////////////////////////////////////////////



	document.body.addEventListener('submit', (event) => {
		let target = event.target;
		event.preventDefault();
		sendForm(target);
	});



};

module.exports = forms;