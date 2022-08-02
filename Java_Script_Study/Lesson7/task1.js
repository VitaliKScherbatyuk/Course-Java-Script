
function change(){

	let elements = document.querySelectorAll('li');
	for (var i = 0; i < elements.length; i++) {
		elements[i].innerHTML = 'Number text - ' + i;	
	}

	let counter = elements.length;
	console.log(counter);
}


