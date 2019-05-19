var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1261.txt'), 'utf8').toString().trim().split('\n');

var M = +inputs[0].split(' ')[0];
var N = +inputs[0].split(' ')[1];
var dx = [1, -1, 0 ,0];
var dy = [0, 0, 1, -1];

var q = [];
var c = [];
var d = [];
var a = [];

for (var ix = 1; ix <= N; ix++) {
    var input = inputs[ix].split('');
    a.push(input);
    d.push([]);
    c.push([]);
}
// console.log(N, M)
// console.log(a)

q.push([0,0]);
d[0][0] = 0;
c[0][0] = true;
while (q.length) {
    var now = q.shift();
    var nowX = now[0];
    var nowY = now[1];


    for (var kx = 0; kx < 4; kx++) {
        var nextX = nowX + dx[kx];
        var nextY = nowY + dy[kx];
        if (0 <= nextX && nextX < N && 0 <= nextY && nextY < M ) {
            if(!c[nextX][nextY]) {
                if(+a[nextX][nextY] === 0) {
                    q.unshift([nextX, nextY]);
                    d[nextX][nextY]  = d[nowX][nowY];
                    c[nextX][nextY]  = true;
                }
                if(+a[nextX][nextY] === 1) {
                    q.push([nextX, nextY]);
                    d[nextX][nextY]  = d[nowX][nowY] + 1;
                    c[nextX][nextY]  = true;
                }
            }
        }
    }
}

console.log(d[N-1][M-1])