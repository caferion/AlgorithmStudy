/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    let temp = sum + num;
    if (temp > num) {
      max = Math.max(temp, max);
    } else {
      max = Math.max(num, max);
    }
    sum = Math.max(num, temp);
  }
  return max;
};
