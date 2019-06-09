var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./14002.txt'), 'utf8').toString().trim().split('\n');
var a = inputs[1].split(' ');
var n = +inputs[0];
var max = 0;
var last = 0;

var d = [];
var v = [];
var result = '';

for (var ix = 0; ix < n; ix++) {
    d[ix] = 1;
    v[ix] = -1;
    for(var jx = 0; jx < ix; jx++) {
        if (+a[jx] < +a[ix] && d[ix] < d[jx] + 1) {
            d[ix] = d[jx] + 1;
            v[ix] = jx;
        }
    }
    if (d[ix] > max) {
        max = d[ix];
        last = ix;
    }a
}

for(var ix = 0; ix < max; ix++) {
    result = a[last] + ' ' + result;
    last = v[last];
}
console.log(max)
console.log(result)