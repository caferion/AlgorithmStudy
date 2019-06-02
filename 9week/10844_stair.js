var path = require('path');
var input = +require('fs').readFileSync(path.resolve('./10844.txt'), 'utf8').toString().trim();
var mod = 1000000000;
var d = [];
var result = 0;

d[1] = [];
d[1][0] = 0;
for (var ix = 1; ix <= 9; ix++) {
    d[1][ix] = 1;
}
for (var ix = 2; ix <= input; ix++) {
    d[ix] = [];
    for (var jx = 0; jx<=9; jx++) {
        d[ix][jx] = 0;
        if(jx-1 >= 0) d[ix][jx] += d[ix-1][jx-1];
        if(jx+1 <= 9) d[ix][jx] += d[ix-1][jx+1];
        d[ix][jx] %= mod;
    }
}

for(var ix =0; ix<=9; ix++) {
    result += d[input][ix];
}

console.log(result % mod);