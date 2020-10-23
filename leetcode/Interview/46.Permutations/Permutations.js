/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];
  const backTrack = (resultlist, templist, numslist) => {
    if (templist.length === numslist.length) {
      resultlist.push(templist.slice());
    } else {
      for (let i = 0; i < numslist.length; i++) {
        const num = numslist[i];
        const hasNum = templist.some((d) => d === num);
        if (!hasNum) {
          templist.push(num);
          backTrack(resultlist, templist, numslist);
          templist.pop();
        }
      }
    }
  }

  backTrack(result, [], nums);
  return result
};

permute([1,2,3]);
