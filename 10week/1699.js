var path = require('path');
var input = +require('fs').readFileSync(path.resolve('./1699.txt'), 'utf8').toString().trim();

var d = [];

d[0] = 0;
for (var ix = 1; ix <= input; ix++) {
    d[ix] = ix;
    for (var jx = 1; jx * jx <= ix; jx++) {
        if (d[ix] > d[ix - jx * jx] + 1) {
            d[ix] = d[ix - jx*jx] + 1
        }
    }
}

console.log(d[input]);