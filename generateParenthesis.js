//Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    //initialize the result to be contained in an array 
   const result = [];
  //call the BFS function, where each node is contained inside ""
  breathFirstSearch("", 0, 0);
  return result;
  function breathFirstSearch(str, left, right) {
    if (left === n && right === n) {
      result.push(str);
      return;
    }
    if (left !== n) {
      breathFirstSearch(str + "(", left + 1, right);
    }
    if (left > right) {
      breathFirstSearch(str + ")", left, right + 1);
    }
  }  
};