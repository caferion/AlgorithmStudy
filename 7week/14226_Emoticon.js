var path = require('path');
var input = +require('fs').readFileSync(path.resolve('./14226.txt'), 'utf8').toString().trim();

var max = 1000;

var q = []
var d = [];

for (var ix = 0; ix <= max; ix++) {
    d.push([]);
}

q.push([1,0]);
d[1][0] = 0;
while (q.length) {
    var now = q.shift()
    var s = now[0];
    var c = now[1];

    if (!d[s][s]) {
        d[s][s] = d[s][c] + 1;
        q.push([s,s]);
    }
    if (s+c <= input && !d[s+c][c]) {
        d[s+c][c] = d[s][c] +1;
        q.push([s+c,c]);
    }
    if (s-1 >= 0 && !d[s-1][c]) {
        d[s-1][c] = d[s][c] + 1;
        q.push([s-1,c]);
    }
}

var ans = -1;
for(var ix =0; ix <=  input; ix++) {
    if (d[input][ix]) {
        if(ans === -1 || ans > d[input][ix]) {
            ans = d[input][ix];
        }
    }
}
console.log(ans);