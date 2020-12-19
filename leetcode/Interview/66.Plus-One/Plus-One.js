/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let result = [];
  for (let i = digits.length - 1; i >= 0; i--) {
    const plusOne = digits[i] + 1;
    if (plusOne === 10) {
      digits[i] = 0;
    } else {
      digits[i] = plusOne;
      result = digits;
      break;
    }

    if (i === 0) {
      result = [1, ...digits];
    }
  }
  return result;
};
