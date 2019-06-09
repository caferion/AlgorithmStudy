var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1912.txt'), 'utf8').toString().trim().split('\n');
var a = inputs[1].split(' ');
var n = +inputs[0];
var max;

var d = [];

for (var ix = 0; ix < n; ix++) {
    d[ix] = +a[ix];
    if (ix === 0) {
        continue;
    };
    if (d[ix] < d[ix-1] + +a[ix]) {
        d[ix] = d[ix-1] + +a[ix];
    }
}

for (var ix = 0; ix < n; ix++) {
    if(ix === 0) {
        max = d[ix];
    }
    if(max < d[ix]) {
        max = d[ix];
    }
}

console.log(max)