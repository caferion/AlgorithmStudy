var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('/AlgorithmStudy/1week/1934.txt'), 'utf8').toString().trim().split('\n');

var funcA = function(x, y) {
    if (y === 0) {
        return x;
    } else {
        return funcA(y, x%y);
    }
};
var funcB = function(x, y) {
    return (x*y) / funcA(x,y);
};

for (var i = 1; i< inputs.length; i++){
    var input = inputs[i].split(' ');
    console.log(funcB(+input[0], +input[1]))
}
