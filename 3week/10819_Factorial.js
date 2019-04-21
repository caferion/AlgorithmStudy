var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./10819.txt'), 'utf8').toString().trim().split('\n');

var inputN = +inputs[0];
var list = [];
var input = inputs[1].toString().trim().split(' ');
var temp = 0;

for (var ix = 0 ; ix < input.length; ix++) {
    list.push(+input[ix]);
}
list.sort(function(a,b) { return a-b; });

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


do {
    var sum = 0;
    for (var ix = 0; ix < list.length-1; ix++) {
        sum += Math.abs(list[ix] - list[ix+1]);
    }
    if (sum > temp) {
        temp = sum;
    }
} while(nextPermutaiton(list, inputN));

console.log(temp);
