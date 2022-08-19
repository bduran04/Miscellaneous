//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    //.concat() method combines both inputs 
    //when using .sort(), be sure to indicate to sort the smaller value of the element since .sort method is made to sort strings
    let nums3 = nums1.concat(nums2).sort((a,b) => a - b)
  if(nums3.length % 2 !== 0) return nums3[(nums3.length-1)/2]
  return (nums3[nums3.length/2] + nums3[nums3.length/2 - 1])/2
};