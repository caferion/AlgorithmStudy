var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('/AlgorithmStudy/1week/6588.txt'), 'utf8').toString().trim().split('\n');

var prime = [];
var check = [];
var pn = 0;
var n = 1000000;
for (var i = 2; i <= n; i++) {
    if (!check[i]) {
        prime[pn++] = i;
        for(var j = 2*i; j <= n; j+=i) {
            check[j] = true;
        }
    }
}

for (var k = 0; k < inputs.length -1 ; k++) {
    var input = +inputs[k];
    var result = "Goldbach's conjecture is wrong.";
    if(input >= 6 ) {
        for (var a = 1; a < prime.length; a++) {
            var temp = input - prime[a];
            if (!check[temp]) {
                result = input + ' = ' + prime[a] + ' + ' + temp;
                break;
            }
        }
    }
    console.log(result);
}
