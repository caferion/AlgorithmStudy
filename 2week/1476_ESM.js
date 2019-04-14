var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1476.txt'), 'utf8').toString().trim().split(' ');
var e = +inputs[0];
var s = +inputs[1];
var m = +inputs[2];

e -= 1;
s -= 1;
m -= 1;

for(var i = 0;;i++ ){
    if (i % 15 == e && i % 28 == s && i % 19 == m) {
        console.log(i+1);
        break;
    }
}