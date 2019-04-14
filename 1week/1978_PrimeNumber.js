var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1978.txt'), 'utf8').toString().trim().split('\n');
var primeNumberList = [];

function isPrimeNumber(n){
    if (n <  2) {
        return false;
    }

    for (var i = 2; i*i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
inputs = inputs[1].toString().split(' ');
for (var j = 0; j < inputs.length; j++ ) {
    var input = +inputs[j];
    if (isPrimeNumber(input)) {
        primeNumberList.push(input)
    }
}

console.log(primeNumberList.length);
