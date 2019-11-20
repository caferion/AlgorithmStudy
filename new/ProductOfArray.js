function product(arr) {
    const result  = [];
    let temp = 1;

    result[0] = 1;
    for (let ix = 1; ix < arr.length; ix++) {
        result[ix] = result[ix-1]*arr[ix-1];
    }

    for (let ix = arr.length -1; ix >= 0 ; ix--) {
        result[ix] *= temp;
        temp *= arr[ix];
    }

    return result;
}

console.log(product([1,2,3,4,5]))