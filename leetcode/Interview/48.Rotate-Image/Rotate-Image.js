/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const reverseArr = matrix.reverse();
  for (let i = 0; i < reverseArr.length; i++) {
    for (let j =  i + 1; j < reverseArr[i].length; j++) {
      const temp = reverseArr[i][j];
      reverseArr[i][j] = reverseArr[j][i];
      reverseArr[j][i] = temp;
    }
  }
  return reverseArr;
};
const arr = [[1,2,3],[4,5,6],[7,8,9]];
console.log(rotate(arr));
