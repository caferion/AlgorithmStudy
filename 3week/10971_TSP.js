var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./10971.txt'), 'utf8').toString().trim().split('\n');

var inputN = +inputs[0];
var d = [];
var w = [];
var input;
var temp = 0;
for (var i = 1; i < inputs.length; i++) {
    input = inputs[i].toString().trim().split(' ');
    // console.log(input.filter(function(d){return d!==''}));
    w.push(input.filter(function(d){ temp += +d; return d!==''}));
}


for (var ix = 0; ix < inputN; ix++) {
    d.push(ix);
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


var sum;
var flag;
do {
    flag = true;
    sum = 0;
    for(var ix = 0; ix<d.length -1; ix++ ) {
        if(w[d[ix]][d[ix+1]] == 0) flag = false;
        else sum += +w[d[ix]][d[ix+1]];
    }
    if(flag && w[d[d.length-1]][d[0]] != 0) {
        sum += +w[d[d.length-1]][d[0]];
        if (temp > sum) {
            temp = sum;
        }
    }
} while (nextPermutaiton(d, inputN));
console.log(temp);