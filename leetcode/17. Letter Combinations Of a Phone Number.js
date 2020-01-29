/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const obj = {
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r', 's'],
    8: ['t','u','v'],
    9: ['w','x','y','z'],
  }
  let result = [];

  for (let ix = 0; ix < digits.length; ix++) {
    const list = obj[digits[ix]];
    if (result.length === 0) {
      for (let jx = 0; jx <list.length; jx++) {
        result.push(list[jx]);
      }
    } else {
      const temp = result;
      result = [];
      for (let jx = 0; jx <temp.length; jx++) {
        for (let kx = 0; kx < list.length; kx++) {
          result.push(temp[jx] + list[kx]);
        }
      }
    }
  }

  return result;
}
