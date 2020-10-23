/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let recWidth = 0, recHeight = 0;
  let resultHeight = 0;
  let result = 0;

  for (let ix = 0; ix < height.length; ix++) {
    if (resultHeight < height[ix]) {
      for (let jx = height.length - 1; jx > ix ; jx--) {
        recWidth = jx - ix;
        recHeight = Math.min(height[ix], height[jx]);
        if (result < recWidth * recHeight) {
          resultHeight = recHeight;
          result = recWidth * recHeight;
        }
      }
    }
  }
  return result;

};
