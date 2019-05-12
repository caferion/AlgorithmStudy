var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./13023.txt'), 'utf8').toString().trim().split('\n');
var ix, jx;
var check = [];
var list = [];
var N = +inputs[0].toString().split(' ')[0];
var M = +inputs[0].toString().split(' ')[1];
var ans;
var temp = 0;

for (ix = 1; ix <= M; ix++) {
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


function dfs(idx, cnt) {
    if(cnt == 5){
        ans = true;
        return;
    }
    check[idx] = true;

    for ( var ix = 0; ix < list[idx].length; ix++)
    {
        var next = list[idx][ix];
        if (!check[next]) {
            dfs(next, cnt + 1);
        }
        if (ans) return;
    }
    check[idx] = false;
}

for (jx = 0; jx < N; jx++)
{
    check = [];
    dfs(jx, 1);
    if (ans) {
        break;
    }
}
// dfs(1,1)
console.log(ans ? 1: 0);
