var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./16194.txt'), 'utf8').toString().trim().split('\n');
var n = +inputs[0];
var p = inputs[1].split(' ');
var max = 0;
var d = [];

p.unshift('');
d[1] = +p[1];
for(var ix = 2; ix <= n; ix++) {
    for(var jx = 1; jx < ix; jx++) {
        if(!d[ix]) {
            d[ix] = +p[ix];
        }
        if (d[ix] &&  d[ix] > +p[jx] + d[ix-jx]) {
            d[ix] = +p[jx] + d[ix-jx];
        }
    }
}
console.log(d[n]);