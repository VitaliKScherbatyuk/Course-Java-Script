'use strict'

function separator(){
	 console.log('------------------------------------------------------------');
 };

let student = [];

let student1 = {yearOfStuding: 2000, facultyName: 'Psychological'};
let student2 = {yearOfStuding: 2001, facultyName: 'Historical'};
let student3 = {yearOfStuding: 2002, facultyName: 'Geographical'};
let student4 = {yearOfStuding: 2003, facultyName: 'Physical and Mathematical'};
let student5 = {yearOfStuding: 2004, facultyName: 'Chemical'};
let student6 = {yearOfStuding: 2005, facultyName: 'Electrochemical'};
let student7 = {yearOfStuding: 2006, facultyName: 'Biological'};
let student8 = {yearOfStuding: 2007, facultyName: 'Veterinary'};
let student9 = {yearOfStuding: 2008, facultyName: 'Philological'};
let student10 = {yearOfStuding: 2009, facultyName: 'Technical'};

student.push(student1, student2, student3, student4, student5, 
		student6, student7, student8, student9, student10);
console.log(student);
separator();

function getFacultyName(obj){
	return obj.facultyName;
}

let name = student.map(getFacultyName);
console.log(name);
separator();

function sumYearOfStuding(sumYear,currentObj){
	return sumYear+currentObj.yearOfStuding;
}

let year = student.reduce(sumYearOfStuding,0);
console.log('Cумарне значення yearOfStuding для всіх об\'єктів: ' + year);