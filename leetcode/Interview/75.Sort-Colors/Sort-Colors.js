/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let second = nums.length -1;
  let zero = 0;
  for(let i = 0; i <= second; i++){
    if (nums[i]=== 0 ) {
      nums[i] = nums[zero];
      nums[zero] = 0;
      zero++;
    } else if (nums[i]=== 2) {
      nums[i] = nums[second];
      nums[second] = 2;
      i--;
      second--;
    }
  }
  return nums;
};
