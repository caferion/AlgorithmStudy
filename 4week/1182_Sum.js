var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1182.txt'), 'utf8').toString().trim().split('\n');
var temp = inputs[0].toString().trim().split(' ')
var n = +temp[0];
var m = +temp[1];
var input = inputs[1].toString().trim().split(' ');
var cnt  = 0;

function go (i, sum) {
    if(i == n) {
        if (sum == m) {
            cnt += 1;
        }
        return;
    }
    go (i+1, sum + +input[i]);
    go (i+1, sum);
}

go (0, 0);
if (m == 0) {
    cnt -= 1;
}
console.log(cnt);