//Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.Return the sum of the three integers.You may assume that each input would have exactly one solution.

// * /@param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
var threeSumClosest = function(nums, target) {
  // sort in order to apply two pointer approach
    nums.sort((a, b) => a - b);
    var result = nums[1]+nums[0]+nums[2] 
    let i = 0
    while(i < nums.length-1)
    {
        var start = i+1;
        var end = nums.length - 1;
        while(start < end){
            var sum = nums[i] + nums[start] + nums[end];
            if(target == sum)
                return sum;
            if(Math.abs(sum-target) < Math.abs(result - target)){
                result = sum;
            }
            if(sum > target)
                end -= 1;
            else
                start += 1;
        }
        i++
    }
    return result;
};