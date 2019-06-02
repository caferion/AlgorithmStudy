var path = require('path');
var input = +require('fs').readFileSync(path.resolve('./11057.txt'), 'utf8').toString().trim();
var mod = 10007;
var d = [];
var result = 0;

d[1] = [];
for (var ix = 0; ix <= 9; ix++) {
    d[1][ix] = 1;
}
for (var ix = 2; ix <= input; ix++) {
    d[ix] = [];
    for (var jx = 0; jx<=9; jx++) {
        d[ix][jx] = 0;
        for(var kx = 0; kx<=jx; kx++) {
            d[ix][jx] += d[ix-1][kx];
            d[ix][jx] %= mod;
        }
    }
}

for(var ix =0; ix<=9; ix++) {
    result += d[input][ix];
}

console.log(result % mod);