'use strict'

let array = [5,-19,20,-2,15,17,14,-6,4,1,-3,-7,8,9,-10,11,12,13,-16,18];
 function separator(){
	 console.log('-------------------------------');
 };
 
 function compareArray (a,b){
	 return a-b;
 };
 
 array.sort(compareArray);
 console.log(array);
 separator();
 
 array.reverse(compareArray);
 console.log(array);
 separator();
 
function positive(a){
	return a>=0;
};

let positiveArray = array.filter(positive).sort(compareArray);
console.log(positiveArray);
separator();

function negative(a){
	return a<0;
};

let negativeArray = array.filter(negative).sort(compareArray);
console.log(negativeArray);