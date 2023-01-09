//Given a string s consisting of words and spaces, return the length of the last word in the string. A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    //first ensure that the word has a length 
        if (!s.length) {
        return 0;
    };
    //use the .trim method, which removes the whitespace from both ends of the string and creates a new string. also use the .split method to separate the string by the space and return the length of the last word
    let arr = s.trim().split(' ');
    return arr[arr.length - 1].length;
};