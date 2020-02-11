/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let ix = 1; ix < nums.length;) {
    if (nums[ix-1] === nums[ix]) {
      nums.splice(ix,1);
    } else {
      ix++;
    }
  }
  return nums.length;
};
