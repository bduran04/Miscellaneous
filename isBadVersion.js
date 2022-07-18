//You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        //use a binary search to locate the first bad version of the n versions
        //use binary search when data is sorted/there's a pattern 
        let start = 0;
        let end = n;
        
        while(start <= end) {
            //Math.floor is used to round down to the nearest integer; trying to locate the middle of the data. Adding one since the index starts at 0
            let middle = Math.floor((start + end + 1) / 2)
            if (isBadVersion(middle)) {
                end = middle - 1;
            } else {
                start = middle + 1
            }
        }
        return start;
    };
};