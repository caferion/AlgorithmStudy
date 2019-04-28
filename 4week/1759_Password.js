var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./1759.txt'), 'utf8').toString().trim().split('\n');
var L = +inputs[0].toString().trim().split(' ')[0];
var input = inputs[1].toString().trim().split(' ');

input.sort();
function check(password) {
    var ja = 0;
    var mo = 0;

    for (var ix = 0; ix < password.length; ix++) {
        if (password[ix] == 'a' || password[ix] == 'e' || password[ix] == 'i' || password[ix] == 'o' || password[ix] == 'u') {
            mo += 1;
        } else {
            ja += 1;
        }
    }

    return ja >= 2 && mo >= 1;

}

function go(n, alpha, password, i) {
    if (password.length == n) {
        if (check(password)) {
            console.log(password);
        }
        return;
    }
    if (i < alpha.length) {
        go(n, alpha, password + alpha[i], i+1);
        go(n, alpha, password, i+1);
    }
}

go(L, input, '', 0);
