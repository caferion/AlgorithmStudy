/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let result = 0;
  for (let ix = 0 ; ix < s.length; ix++) {
    const symbol = s[ix];
    const nextSymbol = s[ix+1];
    switch(symbol) {
      case 'I' :
        if(nextSymbol === 'V') {
          result += 4;
          ix++;
        } else if (nextSymbol === 'X') {
          result += 9;
          ix++;
        } else {
          result += 1;
        }
        break;
      case 'V':
        result += 5;
        break;
      case 'X':
        if(nextSymbol === 'L') {
          result += 40;
          ix++;
        } else if (nextSymbol === 'C') {
          result += 90;
          ix++;
        } else {
          result += 10;
        }
        break;
      case 'L':
        result += 50;
        break;
      case 'C':
        if(nextSymbol === 'D') {
          result += 400;
          ix++;
        } else if (nextSymbol === 'M') {
          result += 900;
          ix++;
        } else {
          result += 100;
        }
        break;
      case 'D':
        result += 500;
        break;
      case 'M':
        result += 1000;
        break;
    }
  }
  return result;
};
