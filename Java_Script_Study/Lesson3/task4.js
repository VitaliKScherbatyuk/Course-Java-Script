'use strict'

function  filterRange(array, a, b){
	let new_array = [];
	for(let key in array){
		if(key>=a && key<=b ){
			new_array.push(array[key]);
		}	
	}
	console.log('Новий масив - ' + new_array);
};

let array = ['a', 'g', 'b', 'u', '6', '8'];
console.log('Введений масив - ' + array);
filterRange(array, 1, 4);

