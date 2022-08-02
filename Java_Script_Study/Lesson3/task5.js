function camelize(str){

	let new_str = [];
	new_str = str.split('-');
	
for(a = 1; a < new_str.length; a++){
	new_str[a] = new_str[a][0].toUpperCase() + new_str[a].slice(1);
}

let string = new_str.join('');
	console.log(string);
};

let str = 'my-short-string';
camelize(str);