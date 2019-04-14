var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./14500.txt'), 'utf8').toString().trim().split('\n');

var list = [];
var sizeList;
var sum = 0;
var temp;
for (var z = 0; z < inputs.length; z++) {
    if (z === 0) {
        sizeList= inputs[z].toString().trim().split(' ');
    } else {
        list.push(inputs[z].toString().trim().split(' '));
    }
}
var row = +sizeList[0];
var col = +sizeList[1];

for (var i = 0; i < row; i++) {
    for (var j=0; j < col; j++) {
        if (j+3 < col) {
            temp = +list[i][j] + +list[i][j+1] + +list[i][j+2] + +list[i][j+3];
            sum = sum < temp ? temp : sum;
        }
        if (i+3 < row) {
            temp = +list[i][j] + +list[i+1][j] + +list[i+2][j] + +list[i+3][j];
            sum = sum < temp ? temp : sum;
        }

        if (i+2 < row && j+1 < col) {
            temp = +list[i][j] + +list[i+1][j] + +list[i+2][j] + +list[i+2][j+1];
            sum = sum < temp ? temp : sum;
            temp = +list[i][j+1] + +list[i+1][j+1] + +list[i+2][j] + +list[i+2][j+1];
            sum = sum < temp ? temp : sum;
            temp = +list[i][j] + +list[i+1][j] + +list[i+2][j] + +list[i][j+1];
            sum = sum < temp ? temp : sum;
            temp = +list[i][j+1] + +list[i+1][j+1] + +list[i][j] + +list[i+2][j+1];
            sum = sum < temp ? temp : sum;

            temp = +list[i][j] + +list[i+1][j] + +list[i+1][j+1] + +list[i+2][j+1];
            sum = sum < temp ? temp : sum;
            temp = +list[i][j+1] + +list[i+1][j] + +list[i+1][j+1] + +list[i+2][j];
            sum = sum < temp ? temp : sum;

            temp = +list[i][j] + +list[i+1][j] + +list[i+1][j+1] + +list[i+2][j];
            sum = sum < temp ? temp : sum;
            temp = +list[i][j+1] + +list[i+1][j] + +list[i+1][j+1] + +list[i+2][j+1];
            sum = sum < temp ? temp : sum;
        }

        if(i+1 < row && j+2 < col) {
            temp = +list[i][j] + +list[i][j+1] + +list[i][j+2] + +list[i+1][j];
            sum = sum < temp ? temp : sum;
            temp = +list[i][j] + +list[i][j+1] + +list[i][j+2] + +list[i+1][j+2];
            sum = sum < temp ? temp : sum;
            temp = +list[i][j] + +list[i+1][j] + +list[i+1][j+1] + +list[i+1][j+2];
            sum = sum < temp ? temp : sum;
            temp = +list[i][j+2] + +list[i+1][j] + +list[i+1][j+1] + +list[i+1][j+2];
            sum = sum < temp ? temp : sum;

            temp = +list[i][j] + +list[i][j+1] + +list[i+1][j+1] + +list[i+1][j+2];
            sum = sum < temp ? temp : sum;
            temp = +list[i][j+1] + +list[i][j+2] + +list[i+1][j] + +list[i+1][j+1];
            sum = sum < temp ? temp : sum;

            temp = +list[i][j] + +list[i][j+1] + +list[i][j+2] + +list[i+1][j+1];
            sum = sum < temp ? temp : sum;
            temp = +list[i+1][j] + +list[i+1][j+1] + +list[i+1][j+2] + +list[i][j+1];
            sum = sum < temp ? temp : sum;
        }

        if(i+1 < row && j+1 <col) {
            temp = +list[i][j] + +list[i][j+1] + +list[i+1][j] + +list[i+1][j+1];
            sum = sum < temp ? temp : sum;
        }
    }
}
console.log(sum);