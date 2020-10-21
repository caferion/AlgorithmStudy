/**
* @param {string} s
* @return {boolean}
  */
var isValid = function(s) {
  const stack = [];
  for ( let ix = 0; ix < s.length; ix++) {

    if(s[ix] === '(' || s[ix] === '{' || s[ix] === '[') {
      stack.push(s[ix]);
    } else {
      const pop =  stack.pop();
      if (s[ix] === ')' && pop !== '(') {
        return false
      } else if(s[ix] === '}' && pop !== '{') {
        return false
      } else if(s[ix] === ']' && pop !== '[') {
        return false
      }
    }
  }

  if(stack.length > 0) {
    return false;
  }
  return true;
};
