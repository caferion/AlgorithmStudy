var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./15649.txt'), 'utf8').toString().trim().split(' ');
var n1 = +inputs[0];
var m1= +inputs[1];
var check = [];
var list = [];

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
    for (var i = 1; i <= n; i++) {
        if (check[i]) continue;
        check[i] = true;
        list[index] = i;
        go(index+1, n, m);
        check[i] = false;
    }
}

go(0, n1, m1);