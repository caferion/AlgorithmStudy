var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./15654.txt'), 'utf8').toString().trim().split('\n');
var input1 = inputs[0].toString().split(' ');
var n1 = +input1[0];
var m1 = +input1[1];
var input2 = inputs[1].toString().split(' ');
var check = [];
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

function go (index, n, m) {
    if (index == m) {
        console.log(list.toString());
        return;
    }
    for (var i = 0; i < n; i++) {
        if (check[i]) continue;
        check[i] = true;
        list[index] = +input2[i];
        go(index+1, n, m);
        check[i] = false;
    }
}

go(0, n1, m1);