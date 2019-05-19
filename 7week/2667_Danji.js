var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./2667.txt'), 'utf8').toString().trim().split('\n');
var N = +inputs[0];
var list = [];
var cnt = 0;
var d = [];
var dx = [1, -1, 0 ,0];
var dy = [0, 0, 1, -1];
var result = [];

for (var ix = 1; ix <= N; ix++) {
    var input = inputs[ix].split('');
    list.push(input);
    d.push([]);
}

function bfs(x, y, cnt) {
    var q = [];
    q.push([x,y]);
    d[x][y] = cnt;

    while(q.length) {
        var node = q.shift();
        var nodeX = node[0];
        var nodeY = node[1];

        for (var kx = 0; kx < 4; kx++) {
            var nextX = nodeX + dx[kx];
            var nextY = nodeY + dy[kx];
            if (0 <= nextX && nextX < N && 0 <= nextY && nextY < N ) {
                if(+list[nextX][nextY] === 1 && !d[nextX][nextY]) {
                    q.push([nextX, nextY]);
                    d[nextX][nextY]  = cnt;
                }
            }
        }
    }

}


for (var ix = 0; ix < N; ix++) {
    for (var jx = 0; jx < N; jx++) {
        if (+list[ix][jx] === 1 && !d[ix][jx]) {
            bfs(ix, jx, ++cnt);
        }
    }
}

for (var ix = 0; ix < N; ix++) {
    for (var jx = 0; jx < N; jx++) {
        if (d[ix][jx]) {
            if (!result[d[ix][jx] - 1]) {
                result[d[ix][jx] - 1] = 1;
            } else {
                result[d[ix][jx] - 1]++;
            }
        }
    }
}

result.sort(function (a,b) {
    return a-b;
});
console.log(result.length);
for (var ix = 0; ix < result.length; ix++) {
   console.log(result[ix]);
}