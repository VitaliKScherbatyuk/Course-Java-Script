'use strict'

let styles = ['Джаз','Блюз'];
styles.push('Рок-н-Рол');
console.log(styles);
console.log('___________');

styles.splice(styles.length-2,1,'Класика');
console.log(styles);
console.log('___________');

let del = styles.shift();
console.log(del);
console.log(styles);
console.log('___________');

styles.unshift('Pеп','Реггі');
console.log(styles);