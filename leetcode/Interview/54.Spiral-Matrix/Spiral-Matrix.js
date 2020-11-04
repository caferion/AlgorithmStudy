/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];
  if (!matrix.length) {
    return result;
  }
  let begin_row = 0;
  let begin_col = 0;
  let end_row = matrix.length - 1;
  let end_col = matrix[0].length - 1;

  while (begin_row <= end_row && begin_col <= end_col) {
    // right
    for (let i = begin_col; i <= end_col; i++) {
      result.push(matrix[begin_row][i]);
    }
    begin_row++;

    // down
    for (let i = begin_row; i <= end_row; i++) {
      result.push(matrix[i][end_col]);
    }
    end_col--;

    // left
    if (end_row >= begin_row) {
      for (let i = end_col; i >= begin_col; i--) {
        result.push(matrix[end_row][i]);
      }
    }
    end_row--;

    // up
    if (end_col >= begin_col) {
      for (let i = end_row; i >= begin_row; i--) {
        result.push(matrix[i][begin_col]);
      }
    }
    begin_col++;
  }

  return result;
};
