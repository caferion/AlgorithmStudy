var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./11055.txt'), 'utf8').toString().trim().split('\n');
var a = inputs[1].split(' ');
var n = +inputs[0];
var max = 0;

var d = [];

for (var ix = 0; ix < n; ix++) {
    d[ix] = +a[ix];
    for(var jx = 0; jx < ix; jx++) {
        if (+a[jx] < +a[ix] && d[ix] < d[jx] + +a[ix]) {
            d[ix] = d[jx] + +a[ix];
        }
    }
    if (d[ix] > max) {
        max = d[ix];
    }
}

console.log(max)