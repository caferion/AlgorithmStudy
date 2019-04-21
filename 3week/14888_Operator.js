var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./14888.txt'), 'utf8').toString().trim().split('\n');

var n = inputs[0];
var valueList = inputs[1].toString().trim().split(' ');
var operatorList = [];
var input1 = inputs[2].toString().trim().split(' ');
var ix, jx,  min = null, max = null, result;

for (ix = 0; ix< input1.length; ix ++) {
    for(jx=0; jx <input1[ix]; jx++) {
        operatorList.push(ix);
    }
}

function nextPermutaiton(arr, n) {
    var i = n-1;
    var temp;
    while(i>0 && arr[i-1] >= arr[i]) i -= 1;
    if (i <= 0) {
        return false
    };
    var j = n-1;
    while(arr[j] <= arr[i-1]) j-=1;
    temp = arr[i-1];
    arr[i-1] = arr[j];
    arr[j] = temp;
    j = n-1;
    while( i<j) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i+=1;
        j-=1;
    }
    return true;
}

function calculate(oList, vList) {
    var result = 0;
    var ix;

    for (ix = 0; ix < oList.length; ix++) {
        if (ix === 0) {
            result = +vList[ix];
        }
        switch (oList[ix]) {
            case 0 :
                result = result + (+vList[ix+1]);
                break;
            case 1:
                result = result - (+vList[ix+1]);
                break;
            case 2:
                result = result * (+vList[ix+1]);
                break;
            case 3:
                result = parseInt(result / (+vList[ix+1]));
                break;
        }
    }
    return result
}


do {

    result = calculate(operatorList, valueList);

    if(min === null && max === null) {
        min = result;
        max = result;
    }
    if (result < min) {
        min = result;
    }
    if (result > max) {
        max = result;
    }
} while(nextPermutaiton(operatorList,operatorList.length));

console.log(max);
console.log(min);