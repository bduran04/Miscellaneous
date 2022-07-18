//Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    //the assumption is that the majority element appears more than n/2 times & always exists in the array 
    //input is array of nums, output is a number 
    //create an empty object 
    //iterate through the given array 
    //if the element doesnt exist in the object, place it in, if it exists, increment the element 
    //return the element that appears >= Math.floor((n/2)) times 
    let numsObj = {};
    
    for(let i = 0; i < nums.length; i++){
        if(numsObj[nums[i]])
            numsObj[nums[i]]++;
        else
            numsObj[nums[i]] = 1;
        if(numsObj[nums[i]] > nums.length / 2)
           return nums[i];
    }
};