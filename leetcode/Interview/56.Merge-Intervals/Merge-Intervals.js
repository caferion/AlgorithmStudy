/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = intervals.reduce((acc, cur) => {
    if (!acc.length) {
      acc.push(cur);
      return acc;
    }
    const last = acc[acc.length - 1];
    if (cur[0] <= last[1] && cur[1] > last[1]) {
      last[1] = cur[1];
    } else if (cur[0] > last[1]) {
      acc.push(cur);
    }
    return acc;
  }, []);

  return result;
};
