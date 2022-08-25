//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    //create an empty hashmap that will hold the dup elements 
    let hashMap = new Map();
    let counter = 0;
        //use ES6 syntax by using .map() to iterate through the array 
        nums.map((element, i) => hashMap.set(element, i));
            //if element is found, place inside the hashmap 
            for (let newkey of hashMap.keys()) {
	            nums[counter++] = newkey;
            }
	            return counter
};