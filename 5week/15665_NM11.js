var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./15665.txt'), 'utf8').toString().trim().split('\n');
var input1 = inputs[0].toString().split(' ');
var n1 = +input1[0];
var m1 = +input1[1];
var input2 = inputs[1].toString().split(' ');
var list = [];
var tempObj = {};
var temp;
var input3 = []
var result = '';

input2.sort(function (a,b) {
    return a-b;
});

for(var ix = 0; ix < input2.length; ix++) {
    if(temp !== input2[ix]) {
        temp = input2[ix];
        tempObj[temp] = 1;
        input3.push(temp);
    } else {
        tempObj[temp]++;
    }
}

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
        list[index] = input3[i];
        go(index+1, n, m);
    }
}

go(0, input3.length, m1);
console.log(result);
