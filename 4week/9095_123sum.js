var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./9095.txt'), 'utf8').toString().trim().split('\n');
var n = inputs[0];

function go(sum, goal) {
    if (sum > goal) return 0;
    if (sum == goal) return 1;
    var now = 0;
    for (var i = 1; i <= 3; i++) {
        now += go(sum + i,  goal);
    }
    return now;
}

for(var ix = 1; ix <= n; ix++) {
    console.log(go(0, +inputs[ix]));
}