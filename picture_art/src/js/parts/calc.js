let calc = () => {

	
	//  селекты калькулятора обязательные 
	let size = document.getElementById('size'),
		material = document.getElementById('material'),

	// селектор опциональный
		options = document.getElementById('options'),
	// поле ввода промокода 
		promocode = document.querySelector('.promocode'),
	// поле с итоговой ценой
		calcPrice = document.querySelector('.calc-price'),
	//
		sizeSum = 0, // размер холста
		materialСoeff = 0, // материал
		optionsSum = 0, // доп. опции 
		promocodeSum = 1, // скидка
		promocodeWord = '',
		totalPrice = ''; // итоговое значение общей суммы	
	

	calcPrice.innerHTML = totalPrice;
	
	document.body.addEventListener('input', e => {
		let target = e.target;
		// console.log(size.value);
		// console.log(material.value);
		// console.log(options.value);
		console.log(promocode.value);
		console.log(promocodeSum);
		promocodeSum = 1;

		sizeSum = +size.value;
		materialСoeff = +material.value;
		optionsSum = +options.value;
		promocodeWord = promocode.value,


		(promocodeWord == 'IWANTPOPART') ? promocodeSum = 0.7: 1;

		if (sizeSum == 0 || materialСoeff == 0) {
			calcPrice.innerHTML = '';
		} else {
			totalPrice = ((sizeSum * materialСoeff) + optionsSum) * promocodeSum;
			calcPrice.innerHTML = `Общая стоимость ${totalPrice}`;
		}

	});































};

module.exports = calc;