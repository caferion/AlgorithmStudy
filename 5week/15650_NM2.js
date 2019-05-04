var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./15650.txt'), 'utf8').toString().trim().split(' ');
var n1 = +inputs[0];
var m1= +inputs[1];
var list = [];

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
    for (var i = start; i <= n; i++) {
        list[index] = i;
        go(index+1, i+1, n, m);
    }
}

go(0, 1, n1, m1);