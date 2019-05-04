var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./11723.txt'), 'utf8').toString().trim().split('\n');
var M = 0;
var result = '';

for(var ix = 1; ix < inputs.length; ix++) {
    var input = inputs[ix].toString().split(' ');
    var operation = input[0];




    switch (operation) {
        case 'add' :
            M = M | (1 << +input[1]);
            break;
        case 'remove' :
            M = M & ~ (1 << +input[1]);
            break;
        case 'check' :
            result += (M & (1 << +input[1])) == 0 ? 0:1 ;
            result += '\n';
            break;
        case 'toggle' :
            M = M ^ (1 << +input[1]);
            break;
        case 'all' :
            M = (1<<21) - 1;
            break;
        case 'empty' :
            M = 0;
            break;
    }
}
console.log(result);