var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./13549.txt'), 'utf8').toString().trim().split(' ');

var N = +inputs[0];
var K = +inputs[1];
var max = 100000;

var q = [];
var c = [];
var d = [];

q.push(N);
d[N] = 0;
c[N] = true;
while (q.length) {
    var now = q.shift();
    var nowD = d[now] ? d[now] : 0;


    if (now * 2 <= max) {
        if(!c[now*2]) {
            q.push(now*2);
            c[now*2] = true;
            d[now*2] = nowD + 1;
        }
    }

    if(now-1>=0) {
        if(!c[now-1]) {
            q.push(now-1);
            c[now-1] = true;
            d[now-1] = nowD + 1;
        }
    }

    if(now+1 <= max) {
        if(!c[now+1]) {
            q.push(now+1);
            c[now+1] = true;
            d[now+1] = nowD + 1;
        }
    }
}

console.log(d[K]);