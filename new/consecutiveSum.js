function consecutiveSum(arr) {
    let d = [];
    let c = [];
    d[0] = arr[0];
    c[0] = arr[0];
    for(let i = 1 ; i < arr.length; i++) {
        if (c[i-1] + arr[i] < arr[i]) {
            c[i] = arr[i];
        } else {
            c[i] = c[i-1] + arr[i];
        }

        if (d[i-1] < c[i]) {
            d[i] = c[i];
        } else {
            d[i] = d[i-1];
        }

    }
    return d[arr.length-1]
}

let test1 = consecutiveSum([-1, 3, -1, 5]);
let test2 = consecutiveSum([-5, -3, -1]);
let test3 = consecutiveSum([2, 4, -2, -3, 8]);

console.log(test1, test2, test3);