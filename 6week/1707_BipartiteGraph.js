var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1707.txt'), 'utf8').toString().trim().split('\n');
var cnt = +inputs[0];

function go(start) {
    var color = [];
    var list = [];
    var N, M;
    var input = inputs[start].split(' ');
    N = +input[0];
    M = +input[1];
    for (var jx = 1; jx <= N; jx++) {
        list[jx] = [];
    }

    for(var ix = start+1; ix <= start+M; ix++) {
        input = inputs[ix].split(' ');
        list[+input[0]].push(+input[1]);
        list[+input[1]].push(+input[0]);
    }

    function bfs(node, c) {
        var q = [];
        q.push(node);
        color[node] = c;
        while(q.length) {
            var next = q.shift();
            if(!list[next]) {
                continue;
            }

            for (var ix = 0; ix < list[next].length; ix++) {
                // var next = list[node][ix];
                if (!color[list[next][ix]]) {
                    c = 3 -c;
                    color[list[next][ix]] = c;

                    q.push(list[next][ix]);
                }
            }
        }
    }

    var ok = true;
    for(var z =1; z <= N; z++) {
        if (!color[z]) {
            bfs(z, 1);
        }
    }
    // console.log(color);
    for(var z =1; z <= N; z++) {
        for(var y = 0;y < list[z].length; y++) {
            if(color[z] == color[list[z][y]]) {
                ok = false;
                // console.log(color[z] ,z, y);
            }
        }
    }
    // if(bfs(1,1)) {
    //     console.log('YES')
    // } else {
    //     console.log('NO')
    // }
    console.log(ok ? 'YES': 'NO');

    // console.log(start+M)

    if(cnt !== 1) {
        cnt-= 1;
        go(start+M+1);
    }
}
go(1);
