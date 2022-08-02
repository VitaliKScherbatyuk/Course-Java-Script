$(document).ready(function(){

	$('#userGetAge').bind('change',function(){

		if (!isNaN($('#userGetAge').val()) && $('#userGetAge').val() > 0 && $('#userGetAge').val() < 100){
			alert('Вік пройшов перевірку!'); 
		} else {
			alert('Помилка введення. Вік має бути в діапазоні від 0 до 100 років'); 
		}
	});

	$('#send_info_Get').bind('click', function(){

		$('#userGetSurname').val($('#userGetSurname').val() +' + ValidatedByGET');
		$('#userGetName').val($('#userGetName').val() +' + ValidatedByGET');
		$('#userGetAge').val($('#userGetAge').val() +' + ValidatedByGET');
		$('#userGetAddress').val($('#userGetAddress').val() +' + ValidatedByGET');

		let userPerson = {
				userSurname: $('userGetSurname').val(),
				userName: $('userGetName').val(),
				userAge: $('userGetAge').val(),
				userAddress: $('userGetAddress').val()
		};

		$.ajax({
			type:'GET',
			contentType:'application/json',
			url:"/formGet?userSurname="+userPerson.userSurname+"&userName="+userPerson.userName
				+"&userAge="+userPerson.userAge+"&userAddress"+userPerson.userAddress,
			success: function(data){
				console.log('Виконано');
				console.log(JSON.stringify(data));
			}
		});
	});
	
	$('#send_info_Post').bind('click', function(){

		$('#userGetSurname').val($('#userGetSurname').val() +' + ValidatedByPOST');
		$('#userGetName').val($('#userGetName').val() +' + ValidatedByPOST');
		$('#userGetAge').val($('#userGetAge').val() +' + ValidatedByPOST');
		$('#userGetAddress').val($('#userGetAddress').val() +' + ValidatedByPOST');

		let userPerson = {
				userSurname: $('userGetSurname').val(),
				userName: $('userGetName').val(),
				userAge: $('userGetAge').val(),
				userAddress: $('userGetAddress').val()
		};

		$.ajax({
			type:'POST',
			data: JSON.stringify(userPerson),
			contentType:'application/json',
			url:"/formPost",
			success: function(data){
				console.log('Виконано');
				console.log(JSON.stringify(data));
			}
		});
	});
})
