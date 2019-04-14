var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1929.txt'), 'utf8').toString().trim().split(' ');
var prime = [];
var check = [];

var minValue = inputs[0];
var maxValue = inputs[1];

for (var i = 2; i <= maxValue; i++) {
    if (!check[i]) {
        if (i >= minValue) {
            prime.push(i);
        }
        for(var j = i*2; j <= maxValue; j+=i) {
            check[j] = true;
        }
    }
}
for (var k = 0; k < prime.length; k++) {
    console.log(prime[k]);
}
