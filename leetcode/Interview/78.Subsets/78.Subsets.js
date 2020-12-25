/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  function backtrack(list, tempList, numsList, start ) {
    list.push(tempList.slice());
    for(let i = start; i < numsList.length; i++) {
      tempList.push(numsList[i]);
      backtrack(list, tempList, numsList, i+1 )
      tempList.pop()
    }
  }
  const result = [];

  backtrack(result, [], nums, 0);
  return result;

};
