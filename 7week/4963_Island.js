var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./4963.txt'), 'utf8').toString().trim().split('\n');
var dx = [1, -1, 0 ,0, -1, -1, 1, 1];
var dy = [0, 0, 1, -1, -1, 1, -1, 1];
var start = 0;

function goIsland(s) {
    var input = inputs[s].split(' ');
    var w = +input[0];
    var h = +input[1];
    var list = [];
    var island = [];
    var cnt = 0;

    if(w === 0 && h ===0) {
        return;
    }

    for (var ix = s + 1; ix <= s + h; ix++) {
        var temp = inputs[ix].split(' ');
        list.push(temp);
        island.push([]);
    }

    function bfs(x, y, cnt) {
        var q = [];
        q.push([x,y]);
        island[x][y] = cnt;

        while(q.length) {
            var node = q.shift();
            var nodeX = node[0];
            var nodeY = node[1];

            for (var kx = 0; kx < 8; kx++) {
                var nextX = nodeX + dx[kx];
                var nextY = nodeY + dy[kx];
                if (0 <= nextX && nextX < h && 0 <= nextY && nextY < w ) {
                    if(+list[nextX][nextY] === 1 && !island[nextX][nextY]) {
                        q.push([nextX, nextY]);
                        island[nextX][nextY]  = cnt;
                    }
                }
            }
        }
    }

    for (var ix = 0; ix < h; ix++) {
        for (var jx = 0; jx < w; jx++) {
            if (+list[ix][jx] === 1 && !island[ix][jx]) {
                bfs(ix, jx, ++cnt);
            }
        }
    }

    console.log(cnt);

    start = s + h +1;

    goIsland(start);


}
goIsland(0);
