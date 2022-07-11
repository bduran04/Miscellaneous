//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
 var threeSum = function(nums) {
    const res = [];
     const box = {};
     //we need to sort it otherwise time complexity wil be tremendous
     nums.sort((a, b) => a - b)
 
       // every index i becomes start number, and p1 p2 runs without the number of index i
     // if i = 0, then p1 p2 only runs i = 1 ~ i = nums.length - 1
     for(let i = 0; i < nums.length - 2; i++){
         let p1 = i + 1, p2 = nums.length - 1
         while(p1 < p2){
             const sum = nums[i] + nums[p1] + nums[p2]
             if(sum == 0){
                 if(!box[`${nums[i]} ${nums[p1]} ${nums[p2]}`]){
                     box[`${nums[i]} ${nums[p1]} ${nums[p2]}`] = true
                     res.push([nums[p1], nums[p2], nums[i]])
                 }
                 p1++, p2--
             }
             if(sum > 0) p2--
             if(sum < 0) p1++
         }
     }
     return res;
 };