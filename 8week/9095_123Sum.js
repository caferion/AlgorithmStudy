var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./9095.txt'), 'utf8').toString().trim().split('\n');
var n = +inputs[0];

for(var ix = 1; ix <= n; ix++) {
    var d = [];

    d[1] = 1;
    d[2] = 2;
    d[3] = 4;

    for (var jx = 4; jx <= +inputs[ix]; jx++) {
        d[jx] = d[jx-1] + d[jx-2] + d[jx-3];
    }

    console.log(d[+inputs[ix]]);

}