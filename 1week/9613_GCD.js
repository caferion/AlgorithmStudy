var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./9613.txt'), 'utf8').toString().trim().split('\n');

var funcA = function(x, y) {
    if (y === 0) {
        return x;
    } else {
        return funcA(y, x%y);
    }
}

for (var i = 1; i< inputs.length; i++){
    var input = inputs[i].split(' ');
    input.shift();
    var sum = 0;
    for (var j = 0; j < input.length -1; j++ ){
        for(var k = j+1; k < input.length ; k++){
            sum += funcA(+input[j], +input[k])
        }
    }
    console.log(sum);
}
