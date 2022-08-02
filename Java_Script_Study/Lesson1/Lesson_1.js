'use strict'
let admin;
let name;
name = 'John';
admin = name;
console.log(admin);

console.log('\n');

let login = "Admin";
let password = "TheMaster";

if(login == "Cansel"){
	console.log("Conceled.");
} else if (login == "Other"){
	console.log("I dont know you");
} else if(login == "Admin"){
	if(password == "Cancel"){
		console.log("Conceled");
	}  else if (password == "Other"){
		console.log("Wrong password");
	} else if (password == "TheMaster"){
		console.log("Welcome");
	}
}

console.log('\n');

let login = "Admin";
let password = "TheMaster";

switch(login){
case "Cansel": {
	console.log("Conceled.");
	break;
}
case "Other": {
	console.log("I dont know you");
	break;
}
case "Admin": {
	
	switch (password){
	case "Cancel" : {
		console.log("Conceled");
		break;
	}
	case "Other" : {
		console.log("Wrong password");
		break;
	}
	case "TheMaster" : {
		console.log("Welcome");
		break;
	}
	}
}
}
