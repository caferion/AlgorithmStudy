var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./15990.txt'), 'utf8').toString().trim().split('\n');
var n = +inputs[0];
var d =[];
for(var ix = 0; ix<=100000; ix++) {
    d.push([]);
}
d[1][1] = 1;
d[1][2] = 0;
d[1][3] = 0;

d[2][1] = 0;
d[2][2] = 1;
d[2][3] = 0;

d[3][1] = 1;
d[3][2] = 1;
d[3][3] = 1;
for(var ix = 4; ix <= 100000; ix++){
    d[ix][1] = (d[ix-1][2] + d[ix-1][3]) % 1000000009;
    d[ix][2] = (d[ix-2][1] + d[ix-2][3]) % 1000000009;
    d[ix][3] = (d[ix-3][1] + d[ix-3][2]) % 1000000009;
}

for(var ix = 1; ix <= n; ix++) {

    console.log((d[+inputs[ix]][1] + d[+inputs[ix]][2] + d[+inputs[ix]][3])%1000000009);

}