var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./2156.txt'), 'utf8').toString().trim().split('\n');
var n = +inputs[0];

var a = [];
var d = [];

for(var ix = 1; ix <= n; ix++) {
    var input = +inputs[ix];
    a.push(input)
}

d[0] = a[0];
d[1] = a[0] + a[1];
d[2] = Math.max(a[0] + a[1] , a[1]+a[2], a[0] + a[2])

for (var ix = 3; ix < n; ix++) {
    d[ix] = Math.max(d[ix-1], d[ix-2] + a[ix], d[ix-3] + a[ix-1] +a[ix])
}
console.log(d[n-1]);