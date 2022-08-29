// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    //create variables for counter & total 
    let counter = 0;
    let total = nums.length
    //while the counter is less than the length of the array
 while(counter < total) {
     //if the element is equal to val
     if (nums[counter] == val) {
         //remove from the array
        nums.splice(counter, 1);
     } else {
         counter++;
     }
 }
    //return total - counter
    return total;
};