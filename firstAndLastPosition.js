//Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1]. You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1, -1]
let i = 0, j = nums.length - 1
while(i <= j) {
    let mid = Math.floor((i + j) / 2)
    if(nums[mid] < target) {
        i = mid + 1
    } else if(nums[mid] > target) {
        j = mid - 1
    } else {
        let left = mid, right = mid
        while(nums[left] === target && left >= 0) {
            left -= 1
        }
        result[0] = left + 1
        while(nums[right] === target && right < nums.length) {
            right += 1
        }
        result[1] = right - 1
        return result
    }
}
return result;
};