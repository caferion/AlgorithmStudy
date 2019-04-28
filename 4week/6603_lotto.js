var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./6603.txt'), 'utf8').toString().trim().split('\n');

function check() {

}

function go(numList, lotto, i) {
    var temp = lotto.slice();
    if (lotto.length == 6) {

            var result = "";
            for (var ix = 0; ix < lotto.length; ix++) {
                result += lotto[ix] + ' '
            }
            console.log(result);

        return;
    }
    if (i < numList.length) {
        temp.push(numList[i]);
        go(numList, temp, i+1);
        go(numList, lotto, i+1)
    }
}

for (var jx = 0; jx < inputs.length -1 ; jx++) {
    var list = inputs[jx].toString().trim().split(' ');
    list = list.slice(1);
    go(list, [], 0);
    console.log();
}