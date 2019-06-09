var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./11054.txt'), 'utf8').toString().trim().split('\n');
var a = inputs[1].split(' ');
var n = +inputs[0];
var max = 0;

var d = [];
var d2 = [];

for (var ix = 0; ix < n; ix++) {
    var d2index = n - 1;
    d[ix] = 1;
    d2[d2index-ix] = 1;
    for(var jx = 0; jx < ix; jx++) {
        if (+a[jx] < +a[ix] && d[ix] < d[jx] + 1) {
            d[ix] = d[jx] + 1;
        }
        if (+a[d2index - jx] < +a[d2index - ix] && d2[d2index - ix] < d2[d2index - jx] + 1) {
            d2[d2index - ix] = d2[d2index - jx] + 1;
        }
    }
}

for (var ix = 0; ix < n; ix++) {
    var temp = d[ix] + d2[ix] -1;
    if (temp > max) {
        max = temp;
    }
}

console.log(max);