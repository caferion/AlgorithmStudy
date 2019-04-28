var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./14888.txt'), 'utf8').toString().trim().split('\n');
var n = inputs[0];
var valueList = inputs[1].toString().trim().split(' ');
var operatorList = inputs[2].toString().trim().split(' ');
var  min = null, max = null;

function go(a, index, cur, plus, minus, mul, div) {
    if (index == a.length) {
        if(min == null || min > cur) {
            min = cur;
        }
        if(max == null || max < cur) {
            max = cur;
        }
        return;
    }
    if (plus < 0 || minus < 0 || mul < 0 || div < 0) {
        return;
    }
    if (plus > 0) {
        go(a, index+1, cur + +a[index], plus - 1, minus, mul, div);
    }
    if (minus > 0) {
        go(a, index+1, cur - +a[index], plus, minus - 1, mul, div);
    }
    if (mul > 0) {
        go(a, index+1, cur * +a[index], plus, minus, mul - 1, div);
    }
    if (div > 0) {
        go(a, index+1, parseInt(cur / +a[index]), plus, minus, mul, div - 1);
    }
}

go(valueList, 1, +valueList[0], +operatorList[0], +operatorList[1], +operatorList[2], +operatorList[3]);
console.log(max);
console.log(min);
