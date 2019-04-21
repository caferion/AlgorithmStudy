var path = require('path');
var input = +require('fs').readFileSync(path.resolve('./10974.txt'), 'utf8').toString().trim();

var list = [];

for (var ix = 1; ix <= input; ix++) {
    list.push(ix);
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

var temp;
do {
    temp = '';
  for(var ix = 0; ix<list.length; ix++ ) {
      temp += list[ix];
      if (ix !== list.length-1) {
          temp += ' '
      }
  }
    console.log(temp);
} while (nextPermutaiton(list, input));
