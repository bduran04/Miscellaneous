//Given a string s, find the length of the longest substring without repeating characters.

// /**
//  * @param {string} s
//  * @return {number}
//  */

 var lengthOfLongestSubstring = function(s) {
    //create empty array that will hold unique letters in string
    const arr = [];
    //initialize the largest number of elements in the arr array
    let largest = 0;
    //initialize the iteration that the function will run through the length of the string
    let start = 0;
    
    while (start < s.length) {
        //if the empty arr array doesnt include the letter included in the string
        if (!arr.includes(s[start])) {
            //push it in the array
            arr.push(s[start])
            //increment everytime according to iteration
            start++
        } else {
            //largest will be the number with the highest value between the elements pushed in the arr array and number represented by largest variable
            largest = Math.max(arr.length, largest)
            //while arr includes the elements in the string
            while (arr.includes(s[start])) {
                //remove the non-unique elements 
                arr.shift();
            }
        }
    }
    largest = Math.max(arr.length, largest);
    return largest;
};