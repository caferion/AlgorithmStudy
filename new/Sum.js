function findIndex(arr, target) {
    const map = new Map();
    let result;

    for(let i = 0; i < arr.length; i++) {
        const temp = target - arr[i];
        map.set(arr[i], i);
        if (temp < 0) {
            continue;
        }
        if (map.get(temp) !== undefined) {
            result = [map.get(temp), i] ;
        }
    }

    return result;
}

console.log(findIndex([2, 5, 6, 1, 10], 8));