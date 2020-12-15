/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let i = 0 ;
  while (i < nums.length-1) {
    const num = nums[i];
    console.log(i, num)
    if (num === 0 ) {
      return false;
    }
    i += num;
  }
  return true;
};
