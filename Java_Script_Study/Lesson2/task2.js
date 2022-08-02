'use strict'

var employeeSalaries = {
		'токар' : 12300,
		'фрезерувальник' : 11600,
		'столяр' : 10540,
		'механік' : 9800,
		'електрик' : 9600	
};	

var oll_salaries = 0;
for(var salaries in employeeSalaries ){
	
	oll_salaries += employeeSalaries[salaries] ;
}
console.log("Фонд заробітньої плати становить: " + oll_salaries + " грн.");
