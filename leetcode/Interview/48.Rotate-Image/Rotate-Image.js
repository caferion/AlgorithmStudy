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
/*
 * anticlockwise rotate
 * first reverse left to right, then swap the symmetry
 * 1 2 3     3 2 1     3 6 9
 * 4 5 6  => 6 5 4  => 2 5 8
 * 7 8 9     9 8 7     1 4 7
*/
