/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const list = [];
  let rowIdx  = 1;
  let add = 1;
  let result = '';
  for(let ix = 0 ; ix < s.length; ix++ ) {
    if (!list[rowIdx]) {
      list[rowIdx] = '';
    }
    list[rowIdx] += s[ix];
    rowIdx += add;
    if (rowIdx === numRows ) {
      add = -1;
    } else if (rowIdx === 1) {
      add = 1;
    }
  }

  for (let ix = 1 ; ix < list.length; ix++) {
    result += list[ix];
  }

  return result;

};
