var path = require('path');
var input = +require('fs').readFileSync(path.resolve('./11726.txt'), 'utf8').toString().trim();

var d = [];


d[1] = 1;
d[2] = 2;

for (var ix = 3; ix <= input; ix++) {
    d[ix] = (d[ix-1] + d[ix-2])%10007;
}

console.log(d[input]);