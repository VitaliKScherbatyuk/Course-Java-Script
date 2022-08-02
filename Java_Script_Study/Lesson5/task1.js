

function makeBuffer (){
	
	let new_buffer = '';
	
	function bufferValue(){
		return new_buffer;
	}
	
	bufferValue.add = function (value){
		new_buffer += value; 
	}
	
	bufferValue.print = bufferValue;
	
	bufferValue.clear =  function (){
		new_buffer = '';
	}
	return bufferValue;
}

var buffer = makeBuffer();

buffer.add('JavaScript ');
buffer.add('Вчити ');
buffer.add('Потрібно!');
console.log('Завдання 1: ' + buffer.print());
console.log('---------------------------------------------------------');

var buffer1 = makeBuffer();
buffer1.add(0);
buffer1.add(1);
buffer1.add(0);
console.log ('Завдання 2: ' + buffer1.print()); 
console.log('---------------------------------------------------------');

var buffer3 = makeBuffer();
buffer3.add("Тест ");
buffer3.add("тебе не з'їсть");
console.log('Завдання 3: ' + buffer3.print()); // Тест тебе не з'їсть
buffer3.clear();
console.log('---------------------------------------------------------');
console.log('Завдання 4: ' + buffer3.print());