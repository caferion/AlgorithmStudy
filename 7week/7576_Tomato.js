var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./7576.txt'), 'utf8').toString().trim().split('\n');

var M = +inputs[0].split(' ')[0];
var N = +inputs[0].split(' ')[1];

var dx = [1, -1, 0 ,0];
var dy = [0, 0, 1, -1];

var q = [];
var d = [];
var a = [];
var c = [];

var cnt = 0;
var temp = 0;

for (var ix = 1; ix <= N; ix++) {
    var input = inputs[ix].split(' ');
    a.push(input);
    d.push([]);
    c.push([]);
    for(var jx = 0; jx < M; jx++) {
        if(+input[jx] === 1) {
            q.push([ix-1, jx]);
            d[ix-1][jx] = 0;
            c[ix-1][jx] = true;
        }
        if(+input[jx] === -1) {
            d[ix-1][jx] = -1;
            c[ix-1][jx] = true;
        }
    }

}

while (q.length != temp) {
    var now = q[temp];
    var nowX = now[0];
    var nowY = now[1];
    cnt = d[nowX][nowY];
    temp++;


    for (var kx = 0; kx < 4; kx++) {
        var nextX = nowX + dx[kx];
        var nextY = nowY + dy[kx];
        if (0 <= nextX && nextX < N && 0 <= nextY && nextY < M ) {
            if(!c[nextX][nextY]) {
                if(+a[nextX][nextY] === 0) {
                    q.push([nextX, nextY]);
                    d[nextX][nextY] = d[nowX][nowY] + 1;
                    c[nextX][nextY] = true;
                }
            }
        }
    }
}
for(var ix =0; ix< N; ix++) {
    for(var jx=0; jx<M; jx++) {
        if(d[ix][jx] === undefined) {
            cnt = -1;
        }
    }
}
// console.log(d)
console.log(cnt)


//
// console.log(d[N-1][M-1])