var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('./9055.txt'), 'utf8').toString().trim().split('\n');

var n = +inputs[0];


function getCount(param) {
    var cnt = 0;
    for (var l1 = 1; l1 <= 3; l1++) {
        if (l1 == param) {
            cnt += 1;
        }
        for (var l2 = 1; l2 <= 3; l2++) {
            if (l1 + l2 == param) {
                cnt += 1;
            }
            for (var l3 = 1; l3 <= 3; l3++) {
                if (l1 + l2 + l3 == param) {
                    cnt += 1;
                }
                for (var l4 = 1; l4 <= 3; l4++) {
                    if (l1 + l2 + l3 + l4 == param) {
                        cnt += 1;
                    }
                    for (var l5 = 1; l5 <= 3; l5++) {
                        if (l1 + l2 + l3 + l4 + l5 == param) {
                            cnt += 1;
                        }
                        for (var l6 = 1; l6 <= 3; l6++) {
                            if (l1 + l2 + l3 + l4 + l5 + l6 == param) {
                                cnt += 1;
                            }
                            for (var l7 = 1; l7 <= 3; l7++) {
                                if (l1 + l2 + l3 + l4 + l5 + l6 + l7 == param) {
                                    cnt += 1;
                                }
                                for (var l8 = 1; l8 <= 3; l8++) {
                                    if (l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 == param) {
                                        cnt += 1;
                                    }
                                    for (var l9 = 1; l9 <= 3; l9++) {
                                        if (l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 == param) {
                                            cnt += 1;
                                        }
                                        for (var l10 = 1; l10 <= 3; l10++) {
                                            if (l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 + l10 == param) {
                                                cnt += 1;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return cnt;
}

for (var i = 1; i<=n; i++) {
    console.log(getCount(+inputs[i]));
}