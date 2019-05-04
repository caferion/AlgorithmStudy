var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./15656.txt'), 'utf8').toString().trim().split('\n');
var input1 = inputs[0].toString().split(' ');
var n1 = +input1[0];
var m1 = +input1[1];
var input2 = inputs[1].toString().split(' ');
var list = [];
var result = '';

input2.sort(function (a,b) {
    return a-b;
});

function go (index, n, m) {
    if (index == m) {
        if(result) {
            result += '\n';
        }
        for (var ix =0; ix < list.length; ix++) {
            result += list[ix] + ' ';
        }
        return;
    }
    for (var i = 0; i < n; i++) {
        list[index] = input2[i];
        go(index+1, n, m);
    }
}

go(0, n1, m1);
console.log(result);