function findSecond(arr) {
    var result;
    var max;

    max = arr[0];
    result = arr[1];
    for(let ix = 2; ix <arr.length; ix++) {
        if(arr[ix] > max) {
            result = max;
            max = arr[ix];
        } else if (arr[ix] > result) {
            result = arr[ix];
        }
    }

    if(result === undefined || result  === max) {
        result = 'Does not exist.'
    }

    return result;
}

console.log(findSecond([10, 5, 4, 3 , -1]));
console.log(findSecond([3, 3, 3]));