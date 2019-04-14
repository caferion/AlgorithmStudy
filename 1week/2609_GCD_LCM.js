var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./2609.txt'), 'utf8').toString().trim().split(' ');

var a = +inputs[0];
var b = +inputs[1];

var funcA = function(x, y) {
    if (y === 0) {
        return x;
    } else {
        return funcA(y, x%y);
    }
};
var funcB = function(x, y) {
    return (x * y) / funcA(x, y);
};

console.log(funcA(a,b));
console.log(funcB(a,b));
