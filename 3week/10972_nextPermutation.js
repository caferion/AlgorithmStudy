var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./10972.txt'), 'utf8').toString().trim().split('\n');

var inputN = +inputs[0];
var list = [];
var input = inputs[1].toString().trim().split(' ');

for (var i = 0; i < input.length; i++) {
    list.push(+input[i]);
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

if (nextPermutaiton(list, inputN)) {
    for(var k = 0; k<list.length; k++) {
        console.log(list[k]);
    }
} else {
    console.log(-1);
}
