var path = require('path');
var input = +require('fs').readFileSync(path.resolve('./1463.txt'), 'utf8').toString().trim();

var d = [];
var MAX = 1000000;


d[1] = 0;

for (var ix = 2; ix <= input; ix++) {
    d[ix] = d[ix-1] + 1;
    if (ix%2  === 0 && d[ix] > d[ix/2] + 1) {
        d[ix] = d[ix/2] + 1;
    }
    if (ix%3 === 0 && d[ix] > d[ix/3] + 1) {
        d[ix] = d[ix/3] + 1;
    }
}

console.log(d[input]);