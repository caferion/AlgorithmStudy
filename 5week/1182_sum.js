var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1182.txt'), 'utf8').toString().trim().split('\n');
var temp = inputs[0].toString().trim().split(' ')
var n = +temp[0];
var m = +temp[1];
var input = inputs[1].toString().trim().split(' ');
var cnt  = 0;


for (var i = 1; i<(1<<n);i++) {
    var sum = 0;
    for (var j = 0; j < n; j ++) {
        if (i & (1<<j)) {
            sum += +input[j];
        }
    }
    if (sum == m) {
        cnt++;
    }

}

console.log(cnt);