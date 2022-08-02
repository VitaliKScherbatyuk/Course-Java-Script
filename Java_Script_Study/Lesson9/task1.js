userGetAge.onchange = function(){

	 if (!isNaN(this.value) && this.value > 0 && this.value < 100){
	    alert('Вік пройшов перевірку!'); 
	    } else {
	    	alert('Помилка введення. Вік має бути в діапазоні від 0 до 100 років'); 
	    }
}

function send_info_Get(){
	
	document.getElementById('userGetSurname').value = userGetSurname.value+" + ValidatedByGET";
	document.getElementById('userGetName').value = userGetName.value+" + ValidatedByGET";
	document.getElementById('userGetAge').value = userGetAge.value+" + ValidatedByGET";
	document.getElementById('userGetAddress').value = userGetAddress.value+" + ValidatedByGET";
	
	let userPerson = {
			userSurname: document.getElementById('userGetSurnam').value,
				userName: document.getElementById('userGetName').value,
					userAge: document.getElementById('userGetAge').value,
					userAddress: document.getElementById('userGetAddress').value
	};
	
	let xhr = new XMLHttpRequest();
	xhr.open("Get", "/formGet?userSurname="+userPerson.userSurname+"&userName="+userPerson.userName
			+"&userAge="+userPerson.userAge+"&userAddress"+userPerson.userAddress);
	xhr.setRequestHeader("Content-type","application/json");
	xhr.send();
}

function send_info_Post(){
	
	document.getElementById('userGetSurname').value = userGetSurname.value+" + ValidatedByPOST";
	document.getElementById('userGetName').value = userGetName.value+" + ValidatedByPOST";
	document.getElementById('userGetAge').value = userGetAge.value+" + ValidatedByPOST";
	document.getElementById('userGetAddress').value = userGetAddress.value+" + ValidatedByPOST";
	
	let userPerson = {
			userSurname: document.getElementById('userGetSurnam').value,
				userName: document.getElementById('userGetName').value,
					userAge: document.getElementById('userGetAge').value,
					userAddress: document.getElementById('userGetAddress').value
	};
	
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "/formPost");
	xhr.setRequestHeader("Content-type","application/json");
	xhr.send(JSON.stringify(userPerson));
}

