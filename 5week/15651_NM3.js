var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./15651.txt'), 'utf8').toString().trim().split(' ');
var n1 = +inputs[0];
var m1= +inputs[1];
var list = [];
var result ='';



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
    for (var i = 1; i <= n; i++) {
        list[index] = i;
        go(index+1, n, m);
    }
}

go(0, n1, m1);
console.log(result);