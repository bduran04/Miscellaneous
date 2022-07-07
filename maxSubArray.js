//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

var maxSubArray = function(nums) {
    let totalSum = nums[0];
    let currentSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        if (currentSum > totalSum) {
            totalSum = currentSum
        }
        if (currentSum < 0) {
        currentSum = 0;
        }
    }
    return totalSum;
};