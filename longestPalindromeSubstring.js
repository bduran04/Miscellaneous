//Given a string s, return the longest palindromic substring in s. A string is called a palindrome string if the reverse of that string is the same as the original string.

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let results = "";
    
    //loop through the given string 
    for(let i = 0; i < s.length; i++) {
        //initializes the value for the character currently evaluating 
        let char = s[i];
        
        //holds the indexes of the letter to the left & right 
        let left = i;
        let right = i;
        
        //while loop that is looping through the string and evaluating from the left 
        while(left > 0 && s[left - 1] === char) {
            left--;
        };
        
        //while loop that is looping through the string and evaluating from the right 
        while(right < s.length && s[right + 1] === char) {
            right++;
            i++;
        }
		
        //setting the rules for the palindrome; while the letters on the left side and the letters on the right side are equal to each other 
        while(left >=0 && right < s.length - 1 && s[left - 1] === s[right + 1]) {
            left--;
            right++;
        }
        
        //this is to ensure that the longest palindrome is returned
        if(results.length < (right - left + 1)) {
            results = s.slice(left, right + 1);
        }
    }
    return results;
};