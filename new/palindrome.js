function isPalindrome(num) {
    const list = [];
    let result = true;
    let temp = num;
    if(num < 0) {
        return false;
    }
    while ((temp / 10) > 0) {
        const value = temp % 10;
        list.push(value);
        temp = parseInt(temp / 10);
    }

    for(let i = 0; i < list.length/2; i++ ) {
        if(list[i] !== list[list.length -1 -i]) {
            result = false;
            break;
        }
    }
    return result;
}

console.log(isPalindrome(12345));
console.log(isPalindrome(-101));
console.log(isPalindrome(11111));
console.log(isPalindrome(12421));