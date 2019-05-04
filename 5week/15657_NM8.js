var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./15657.txt'), 'utf8').toString().trim().split('\n');
var input1 = inputs[0].toString().split(' ');
var n1 = +input1[0];
var m1 = +input1[1];
var input2 = inputs[1].toString().split(' ');
var list = [];

input2.sort(function (a,b) {
    return a-b;
});

Array.prototype.toString = function() {
    var result = '';
    for (var ix = 0 ; ix < list.length; ix++) {
        result += list[ix] + ' '
    }
    return result;
};

function go (index, start, n, m) {
    if (index == m) {
        console.log(list.toString());
        return;
    }
    for (var i = start; i < n; i++) {
        list[index] = input2[i];
        go(index+1, i, n, m);
    }
}

go(0, 0, n1, m1);