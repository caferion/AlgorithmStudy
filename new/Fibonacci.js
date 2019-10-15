function fibonacci(N,a, b,result) {
    const sum = a+b;
    if(sum < N) {
        if (sum % 2 === 0) {
            result += sum;
        }
        return fibonacci(N, b, sum, result);
    } else {
        return result;
    }
}

let test = fibonacci(12, 0,1, 0);

console.log(test);