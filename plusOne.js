//You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. Increment the large integer by one and return the resulting array of digits.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    //create empty variable that will hold the num in string 
   let num = '';
    //loop through the digits 
    for(let i of digits){
        num += i;
    }
    //convert num into an integer through BigInt, add 1 to the number, and convert back to string format 
    num = (BigInt(num)+BigInt(1)).toString();
    //return result as an array 
    return num.split('');
};