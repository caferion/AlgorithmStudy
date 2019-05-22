var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./9095.txt'), 'utf8').toString().trim().split('\n');
var n = +inputs[0];
var d =[];
d[1] = 1;
d[2] = 2;
d[3] = 4;
for(var ix = 4; ix <= 1000000; ix++){
    d[ix] = (d[ix-1] + d[ix-2] + d[ix-3]) % 1000000009;
}

for(var ix = 1; ix <= n; ix++) {

    console.log(d[+inputs[ix]]);

}