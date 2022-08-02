'use strict'

function add(a, b){
	let result = '';
	try{
		if(isNaN(a) || isNaN(b)){
			throw 'Це не число';
		} else {
			result = a+b; 
		}
	} catch(error){
		console.log(error);
	}return result;
}

function difference(a, b){
	let result = '';
	try{
		if(isNaN(a) || isNaN(b)){
			throw 'Це не число';
		} else {
			result = a-b; 
		}
	} catch(error){
		console.log(error);
	}return result;
}

function multiplication(a, b){
	let result = "";
	try{
		if(isNaN(a) || isNaN(b)){
			throw "Це не число";
		} else {
			result = a*b; 
		}
	} catch(error){
		console.log(error);
	}return result;
}

function division(a, b){
	let result = "";
	try{
		if(isNaN(a) || isNaN(b)){
			throw "Це не число";
		} else {
			result = a/b; 
		}
	} catch(error){
		console.log(error);
	}return result;
}

console.log('Сума = ' + add(10,3));
console.log('Різниця = ' + difference(10,3));
console.log('Добуток = ' + multiplication(10,3));
console.log('Ділення = ' + division(10,3));
