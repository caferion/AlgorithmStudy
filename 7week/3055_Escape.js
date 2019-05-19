var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./3055.txt'), 'utf8').toString().trim().split('\n');

var N = +inputs[0].split(' ')[0];
var M = +inputs[0].split(' ')[1];

var dx = [1, -1, 0 ,0];
var dy = [0, 0, 1, -1];

var q = [];
var d = [];
var a = [];
var c = [];
var c2 = [];
var d2 = [];

var cnt = 0;
var temp = 0;

var S,D;


for (var ix = 1; ix <= N; ix++) {
    var input = inputs[ix].split('');
    a.push(input);
    d.push([]);
    d2.push([]);
    c.push([]);
    c2.push([]);
    for(var jx = 0; jx < M; jx++) {
        if(input[jx] == '*') {
            q.push([ix-1, jx]);
            d[ix-1][jx] = 0;
            c[ix-1][jx] = true;
        }
        if(input[jx] == 'X') {
            d[ix-1][jx] = -1;
            c[ix-1][jx] = true;
        }
        if(input[jx] == 'S') {
            S = [ix-1, jx];
        }
        if(input[jx] == 'D') {
            D = [ix-1, jx];
        }
    }
}

// console.log(a)
// console.log(d)
// console.log(c)
// console.log(S,D)
while (q.length != temp) {
    var now = q[temp];
    var nowX = now[0];
    var nowY = now[1];
    temp++;


    for (var kx = 0; kx < 4; kx++) {
        var nextX = nowX + dx[kx];
        var nextY = nowY + dy[kx];
        if (0 <= nextX && nextX < N && 0 <= nextY && nextY < M ) {
            if(!c[nextX][nextY]) {
                if(a[nextX][nextY] == '.') {
                    q.push([nextX, nextY]);
                    d[nextX][nextY] = d[nowX][nowY] + 1;
                    c[nextX][nextY] = true;
                }
            }
        }
    }
}

q = [S];
temp = 0;
d2[S[0]][S[1]] = 0;
c2[S[0]][S[1]] = true;
// console.log('##', S, q)
// console.log('##', d2)
// console.log('##', c2)

while(q.length != temp) {
    var now = q[temp];
    var nowX = now[0];
    var nowY = now[1];
    cnt = d2[nowX][nowY];
    temp++;
    for (var kx = 0; kx < 4; kx++) {
        var nextX = nowX + dx[kx];
        var nextY = nowY + dy[kx];
        if (0 <= nextX && nextX < N && 0 <= nextY && nextY < M ) {
            if(!c2[nextX][nextY]) {
                if(d[nextX][nextY] > (cnt+1) || !d[nextX][nextY]) {
                    q.push([nextX, nextY]);
                    d2[nextX][nextY] = d2[nowX][nowY] + 1;
                    c2[nextX][nextY] = true;
                }
            }
        }
    }
}
console.log(d2[D[0]][D[1]] ? d2[D[0]][D[1]]: 'KAKTUS')