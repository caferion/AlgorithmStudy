var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./6603.txt'), 'utf8').toString().trim().split('\n');

function lotto(param) {
    var list = param.toString().trim().split(' ');
    var n = +list[0];
    var m = n-6;
    var valueList = [];
    var flagList = [];
    var temp, tempList = [];
    var ix;
    for (ix=1; ix<list.length; ix++) {
        valueList.push(+list[ix]);
        if (ix <= m) {
            flagList.push(0);
        } else {
            flagList.push(1);
        }
    }

    do {
        temp = '';

        for(ix = 0; ix < flagList.length; ix++) {
            if(flagList[ix]) {
                temp += valueList[ix] + ' ';
            }
        }
        tempList.push(temp);

    } while(nextPermutaiton(flagList, n));

    for (ix = tempList.length-1;ix >= 0 ;ix--){
        console.log(tempList[ix]);
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

for (var jx = 0 ; jx <inputs.length-1; jx++) {
    lotto(inputs[jx]);
    console.log();
}