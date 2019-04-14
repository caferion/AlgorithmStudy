var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./10430.txt'), 'utf8').toString().trim().split(' ');

var a = +inputs[0];
var b = +inputs[1];
var c = +inputs[2];

var result1 = (a+b)%c;
var result2 = (a%c + b%c)%c;
var result3 = (a*b)%c;
var result4 = (a%c * b%c)%c;
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
