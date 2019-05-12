var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1260.txt'), 'utf8').toString().trim().split('\n');
var ix, jx;
var check = [];
var list = [];
var start = +inputs[0].toString().split(' ')[2];
var dfsResult = '';
var bfsResult = '';


for (ix = 1; ix < inputs.length; ix++) {
    var input = inputs[ix].toString().split(' ');

    if (!list[+input[0]]) {
        list[+input[0]] = [];
    }
    if (!list[+input[1]]) {
        list[+input[1]] = [];
    }
    list[+input[0]].push(+input[1]);
    list[+input[1]].push(+input[0]);
}

for(ix = 1; ix < list.length; ix++) {
    if(!list[ix]) {
        continue;
    }
    list[ix].sort(function (a,b) {
        return a-b;
    })
}

function dfs(node) {
    check[node] = true;
    dfsResult += node + ' ';
    if(!list[node]) {
        return;
    }
    for (var ix = 0; ix < list[node].length; ix++) {
        var next = list[node][ix];
        if (!check[next]) {
            dfs(next);
        }
    }
}

function bfs(node) {
    var q = [];
    q.push(node);
    check[node] = true;
    while(q.length) {
        var next = q.shift();
        bfsResult += next + ' ';
        if(!list[next]) {
            continue;
        }

        for (var ix = 0; ix < list[next].length; ix++) {
            var v = list[next];
            if (!check[list[next][ix]]) {
                check[list[next][ix]] = true;
                q.push(list[next][ix]);
            }
        }
    }
}

dfs(start);
check = [];
bfs(start);
console.log(dfsResult);
console.log(bfsResult);
