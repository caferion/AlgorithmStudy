var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./2178.txt'), 'utf8').toString().trim().split('\n');

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
}

q.push([0,0]);
d[0][0] = 1;


while (q.length) {
    var now = q.shift();
    var nowX = now[0];
    var nowY = now[1];


    for (var kx = 0; kx < 4; kx++) {
        var nextX = nowX + dx[kx];
        var nextY = nowY + dy[kx];
        if (0 <= nextX && nextX < N && 0 <= nextY && nextY < M ) {
            if(!d[nextX][nextY]) {
                if(+a[nextX][nextY] === 1) {
                    q.push([nextX, nextY]);
                    d[nextX][nextY]  = d[nowX][nowY] + 1;
                }
            }
        }
    }
}

console.log(d[N-1][M-1]);