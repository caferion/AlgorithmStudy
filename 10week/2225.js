var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./2225.txt'), 'utf8').toString().trim().split(' ');
var N = +inputs[0];
var K = +inputs[1];
var d = [];
var mod = 1000000000;

d[0] = [];
d[0][0] = 1;


for (var ix = 1; ix <= K; ix++) {
    d[ix] = [];
    for(var jx = 0; jx <= N; jx++) {
        d[ix][jx] = 0;
        for(var kx = 0; kx <= jx; kx++) {
            if (!d[ix-1][jx-kx]) {
                d[ix-1][jx-kx] = 0;
            }
            d[ix][jx] += d[ix-1][jx-kx];
            d[ix][jx] %= mod;
        }
    }
}

console.log(d[K][N])