function makeBracket(num) {
    var result = [];

    function bracket(open, close, n, b) {
        if (open < close) {
           return;
        }
        if (close === n ) {
            result.push(b);
            return;
        }

        if (open < n) {
           b += '(';
           bracket(open+1, close, n, b);
        }
        if (close < n) {
            b += ')';
            bracket(open, close+1, n,b);
        }
    }
    bracket(0,0, num, '');
    return result;
}
console.log(makeBracket(1));
console.log(makeBracket(2));
console.log(makeBracket(3));