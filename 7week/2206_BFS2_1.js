var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./2206.txt'), 'utf8').toString().trim().split('\n');

var N = +inputs[0].split(' ')[0];
var M = +inputs[0].split(' ')[1];

var dx = [1, -1, 0 ,0];
var dy = [0, 0, 1, -1];

var q = [];
var d = [];
var a = [];

for (var ix = 1; ix <= N; ix++) {
    var input = inputs[ix].split('');
    a.push(input);
    d.push([]);
    for(var jx = 0; jx < M; jx++ ) {
        d[ix-1].push([]);
    }
}

d[0][0][0] = 1;
q.push([0,0,0])
// console.log(a)

while(q.length) {
    var now = q.shift();
    var x = now[0];
    var y = now[1];
    var z = now[2];
    for(var kx = 0; kx < 4; kx++) {
        var nx = x + dx[kx];
        var ny = y + dy[kx];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
        if (+a[nx][ny] === 0 && !d[nx][ny][z]) {
            d[nx][ny][z] = d[x][y][z] + 1;
            q.push([nx, ny, z])
        }
        if (z===0 && +a[nx][ny] ===1 && !d[nx][ny][z+1]) {
            d[nx][ny][z + 1] = d[x][y][z] + 1;
            q.push([nx, ny, z+1])
        }
    }
}

if (d[N-1][M-1][0] && d[N-1][M-1][1]) {
    console.log(Math.min(d[N-1][M-1][0], d[N-1][M-1][1]))
} else if (d[N-1][M-1][0]) {
    console.log(d[N-1][M-1][0])
} else if (d[N-1][M-1][1]) {
    console.log(d[N-1][M-1][1])
} else {
    console.log(-1)
}
