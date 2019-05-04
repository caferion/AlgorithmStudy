var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./15664.txt'), 'utf8').toString().trim().split('\n');
var input1 = inputs[0].toString().split(' ');
var n1 = +input1[0];
var m1 = +input1[1];
var input2 = inputs[1].toString().split(' ');
var list = [];
var tempObj = {};
var temp;
var input3 = []

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
        if(tempObj[input3[i]] > 0) {
            tempObj[input3[i]] -= 1;
            list[index] = +input3[i];
            go(index+1, i, n, m);
            tempObj[input3[i]] += 1;
        }
    }
}

go(0, 0, input3.length, m1);
