/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const temp = [];

  for (let ix = 0; ix < nums.length; ix++) {
    if (temp[target - nums[ix]] !== undefined) {
      return [temp[target - nums[ix]], ix ];
    } else {
      temp[nums[ix]] = ix;
    }
  }
};
