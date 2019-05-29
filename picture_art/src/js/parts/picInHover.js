let picInHover = () => {
	// обертка для блоков с картинками
	let sizesWrapper = document.querySelector('.sizes-wrapper'),
	// все блоки с картинками
	sizesBlocks = document.querySelectorAll('.sizes-block'),
	imgSize = document.querySelectorAll('img'),
	// остальные элементы в блоке рядом с картинкой
	sizeBlock = document.querySelectorAll('.size'),
	startingPrice = document.querySelectorAll('.starting-price'),
	finalPrice = document.querySelectorAll('.final-price');

	// состояни картинки
	let imgStatus = 1;

	// индекс блока на который навели
	let indexBlock;
	
	let imageOne = document.querySelector('.size-1'),
		imageTwo = document.querySelector('.size-2'),
		imageThree = document.querySelector('.size-3'),
		imageFour = document.querySelector('.size-4');
	// прошлый блок
	let lastItem = 0;
	// тех.переменная. часть адреса прошлой картинки
	let partSrc;


///////////////////////////////////////////////////////////////////////////////////////


	// ФУНКЦИЯ 
	let eventPic = (event, num, numStatus, volume, endSrc, otherElements) => {
		let target = event.target;
		
		if (target.tagName == "IMG" && imgStatus == num) {
			imgStatus = numStatus;

			lastItem = target;
			// console.log(lastItem);

			partSrc = (target.src.substr(0, (target.src.length) - volume - 1));
			// console.log(partSrc);

			let adres = (target.src.substr(0, (target.src.length) - volume) + endSrc);
			target.src = adres;
			// console.log(adres);


			indexBlock = (target.className.substr(-1) - 1);

			
			sizeBlock[indexBlock].style.display = otherElements;
			startingPrice[indexBlock].style.display = otherElements;
			finalPrice[indexBlock].style.display = otherElements;
			// console.log(imgStatus);
			// console.log(lastTab);		
		}
	};



/////////////////////////////////////////////////////////////////////////////////////


	// ФУНКЦИЯ для сброса
	let eventPicRest = (ev, lastItem) => {
		let t = ev.target;

		if (true) {

			imageOne.src = partSrc + '1.png';
			imageTwo.src = partSrc + '2.png';
			imageThree.src = partSrc + '3.png';
			imageFour.src = partSrc + '4.png';

			imgStatus = 1;

			sizeBlock.forEach((item) => item.style.display = '');
			startingPrice.forEach((item) => item.style.display = '');
			finalPrice.forEach((item) => item.style.display = '');
			// console.log(imgStatus);
			// console.log(lastTab);

		}
	};


	// МОБИЛЬНЯ ВЕРСИЯ 

	// ПРИ ТАБЕ НА БЛОК (мобильная версия)
	sizesWrapper.onclick = function (event) {
		if (window.innerWidth < 768 && imgStatus == 1) {

			if (lastItem != 0) {
				// console.log('--сброс');
				eventPicRest(event, lastItem);
			}

			// console.log('--СМЕНА ');
			eventPic(event, 1, 0, 4, "-1.png", 'none');

			imgStatus = 1;
		}
	};


	// window.onresize = function () {
	// 	console.log(' - - - - - - - - - - - ');
	// 	console.log(window.innerWidth + " окно браузера");
	// 	console.log(document.documentElement.clientWidth);
	// 	console.log(document.body.clientWidth);	
	// };

	window.onresize = function () {
		// console.log('текущая ширина экрана');
		if (window.innerWidth < 768 && window.innerWidth > 760) {
				eventPicRest(event, lastItem);		
		}
	};

	// ПРИ НАВЕДЕНИИ КУРСОРА НА БЛОК (ПК версия)
	sizesWrapper.onmouseover = function (event) {
		if (window.innerWidth > 768) {
			eventPic(event, 1, 0, 4, "-1.png", 'none');
		};
	};

	// ПРИ УБИРАНИИ КУРСОРА С БЛОКА (ПК версия)
	sizesWrapper.onmouseout = function (event) {
		if (window.innerWidth > 768) {
			eventPic(event, 0, 1, 6, ".png", '');
		};
	};

};

module.exports = picInHover;










	// // ПРИ НАВЕДЕНИИ КУРСОРА НА БЛОК
	// sizesWrapper.onmouseover = function (event) {
	// 	let target = event.target;
	// 	// console.log(target.tagName);
	// 	// console.log(222);
	// 	// console.log(target.src);
	// 	// console.log(target.className);

	// 	if (target.tagName == "IMG" && imgStatus == 1) {
	// 		imgStatus = 0;
	// 		console.log('ПОМЕНЯЛИ');
	// 		// console.log(target.src);
	// 		// console.log(target.className);
	// 		//////// меняем фото на другое. меняем её адрес
	// 		let adres = (target.src.substr(0, (target.src.length) - 4) + "-1.png");
	// 		// console.log(adres);
	// 		// console.log(target.className + '-1.png');
	// 		target.src = adres;

	// 		//////// индекс блока
	// 		indexBlock = (target.className.substr(-1) - 1);
	// 		console.log(indexBlock);

	// 		/////// скрываем все элементы в этом блоке кроме фото
	// 		sizeBlock[indexBlock].style.display = 'none';
	// 		startingPrice[indexBlock].style.display = 'none';
	// 		finalPrice[indexBlock].style.display = 'none';
	// 	} else {
	// 		// console.log('XXXX');
	// 	}
	// };



	// // ПРИ УБИРАНИИ КУРСОРА С БЛОКА
	// sizesWrapper.onmouseout = function (event) {


	// 	let target = event.target;
	// 	// console.log(target.tagName);
	// 	// console.log(222);
	// 	// console.log(target.src);
	// 	// console.log(target.className);
	// 	if (target.tagName == "IMG" && imgStatus == 0) {
	// 		imgStatus = 1;
	// 		console.log('ВЕРНУЛИ');
	// 		// console.log(target.src);
	// 		// console.log(target.className);


	// 		//////// меняем фото на начальное. меняем её адрес
	// 		let adres = (target.src.substr(0, (target.src.length) - 6) + ".png");
	// 		console.log(adres);
	// 		// console.log(target.className + '-1.png');
	// 		target.src = adres;


	// 		//////// индекс блока
	// 		indexBlock = (target.className.substr(-1) - 1);
	// 		console.log(indexBlock);

	// 		/////// аналогично наоборот
	// 		sizeBlock[indexBlock].style.display = '';
	// 		startingPrice[indexBlock].style.display = '';
	// 		finalPrice[indexBlock].style.display = '';
	// 	} else {
	// 		// console.log('XXXX');
	// 	}


	// };





		// let eventPic = (event, num, numStatus, volume, endSrc, otherElements) => {
		// 	let target = event.target;

		// 	if (target.tagName == "IMG" && imgStatus == num) {
		// 		imgStatus = numStatus;

		// 		let adres = (target.src.substr(0, (target.src.length) - volume) + endSrc);
		// 		target.src = adres;

		// 		indexBlock = (target.className.substr(-1) - 1);

		// 		sizeBlock[indexBlock].style.display = otherElements;
		// 		startingPrice[indexBlock].style.display = otherElements;
		// 		finalPrice[indexBlock].style.display = otherElements;
		// 	}
		// };