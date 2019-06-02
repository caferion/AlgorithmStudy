var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./9465.txt'), 'utf8').toString().trim().split('\n');
var n = +inputs[0];

function go(s) {
    var cnt = +inputs[s];
    var a = [];
    var d = [];
    for(var ix = 1; ix <= 2; ix++) {
        var input = inputs[s+ix].split(' ');
        a.push(input)
    }
    d[0] = [];
    d[0][0] = 0;
    d[0][1] = +a[0][0];
    d[0][2] = +a[1][0];

    for (var ix = 1; ix < cnt; ix++) {
        d[ix] = [];
        d[ix][0] = Math.max(d[ix-1][0], d[ix-1][1], d[ix-1][2]);
        d[ix][1] = Math.max(d[ix-1][0], d[ix-1][2]) + +a[0][ix];
        d[ix][2] = Math.max(d[ix-1][0], d[ix-1][1]) + +a[1][ix];
    }

    console.log(Math.max(d[cnt-1][0],d[cnt-1][1],d[cnt-1][2]))

}

for(var zx = 0; zx < n; zx++ ) {
    var start = zx*3+1;
    go(start)
}