var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./13398.txt'), 'utf8').toString().trim().split('\n');
var a = inputs[1].split(' ');
var n = +inputs[0];
var max = 0;

var d = [];
var d2 = [];

for (var ix = 0; ix < n; ix++) {
    var d2index = n - 1;
    d[ix] = +a[ix];
    d2[d2index-ix] = +a[d2index-ix];
    if (ix === 0) {
        continue;
    };
    if (d[ix] < d[ix-1] + +a[ix]) {
        d[ix] = d[ix-1] + +a[ix];
    }
    if (d2[d2index-ix] < d2[d2index-ix+1] + +a[d2index -ix]){
        d2[d2index-ix] = d2[d2index-ix+1] + +a[d2index-ix];
    }
}

for (var ix = 0; ix < n; ix++) {
    var temp

    if (ix === 0 ) {
        max = d[ix];
    } else if ( ix === n-1) {
        if ( d[ix]>max) {
            max = d[ix]
        }

    }else {
        temp = (d[ix-1] + d2[ix +1]) > d[ix] ? d[ix-1] + d2[ix +1]:d[ix];
        if (temp > max) {
            max = temp;
        }
    }


}
// console.log(a)
// console.log(d)
// console.log(d2)

console.log(max);