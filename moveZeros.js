//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    //input array, output array 
    //forEach through the given array (same thing as .map, except, it doesnt return a new array 
    nums.forEach((number, index) => {
    if (number === 0) {
        nums.splice(index, 1);
        //if a zero is found, use .splice() to remove the element & also add a zero to the nums.length - 1 place 
        nums.push(0);
    }
    })
};