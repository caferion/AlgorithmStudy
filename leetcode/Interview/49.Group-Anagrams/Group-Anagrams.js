/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const resultMap = strs.reduce((acc, val)=>{
    const sortedStrArr = val.split('')
                         .sort();
    const str = sortedStrArr.join('');
    if (acc.has(str)) {
      acc.get(str).push(val);
    } else {
      acc.set(str, [val]);
    }

    return acc;
  }, new Map());

  return Array.from(resultMap.values());
};
