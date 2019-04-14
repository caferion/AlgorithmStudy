var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./2309.txt'), 'utf8').toString().trim().split('\n');

var sum = 0;
var list = [];
var cnt = 9;
var flag = false;

for (var i = 0; i < cnt; i++){
    list.push(+inputs[i]);
    sum += +inputs[i];
}

list.sort(function (a,b) {
    return a-b;
});
for (var j = 0; j < cnt - 1 ; j++) {
    for(var k = j + 1; k < cnt; k++) {
        if (sum - list[j] - list[k] === 100 ) {
            for(var l = 0; l < cnt; l++) {
                if (l !== j && l!==k) {
                    console.log(list[l]);
                }
            }
            flag = true;
            break;
        }
    }

    if (flag) {
        break;
    }
}