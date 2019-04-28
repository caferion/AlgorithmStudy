var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./14501.txt'), 'utf8').toString().trim().split('\n');
var n = +inputs[0];
var t = [];
var p = [];
var max = 0;

for (var ix = 1; ix < inputs.length; ix++) {
    var input = inputs[ix].toString().trim().split(' ');
    t.push(+input[0]);
    p.push(+input[1]);
}

function go(day, sum) {
    if (day == n) {
        if (max < sum) {
            max = sum;
        }
        return;
    }

    if (day > n) {
        return;
    }
    go(day + t[day], sum + p[day]);
    go(day + 1, sum);
}

go(0,0);

console.log(max);