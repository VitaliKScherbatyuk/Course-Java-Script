function internet(){
	let elems = document.querySelectorAll("li>a");
	for (let i = 0; i < elems.length; i++) {
		
		if((elems[i].innerHTML.includes("http://") || 
				elems[i].innerHTML.includes("ftp://"))
				&& !elems[i].innerHTML.includes("http://internal.com")){
			elems[i].classList.add('external-red');
		}
	}
	let line = document.getElementsByClassName('external-red');
	for (var i = 0; i < line.length; i++) {
		line[i].style.backgroundColor = 'red';
	}
}