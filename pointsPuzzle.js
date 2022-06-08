/*
 * Complete the 'maxPoints' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY elements as parameter.
 */

//Delete and Earn from LeetCode
function maxPoints(elements) {
    //create a new map
    const map = new Map();
    //create an empty object that will hold the results
    const results = {};
    
    //loop through the given elements array
    for (let i = 0; i < elements.length; i++) {
        //input these values in the empty map & at the same time get the elements 
        map.set(elements[i], (map.get(elements[i]) || 0) + 1)
    }
    //create a keys variable that will sort through the keys in the map object, targeting the smallest value
    const keys = Array.from(map.keys()).sort((a,b) => a < b ? -1 : 1);
    //loop through the keys array
    for (let i = 0; i < keys.length; i++) {
        //grab the prev keys
        const twoPrevKeys = keys[i] - keys[i - 1] === 1 ? keys[i - 2] : keys[i - 1];
        //the results will be the largest value from the prior keys
        results[keys[i]] = Math.max((twoPrevKeys ? results[twoPrevKeys] || 0 : 0) + keys[i] * map.get(keys[i]), i > 0 ? results[keys[i - 1]] || 0 : 0)
    }
    return Math.max(results[keys[keys.length - 1]] || results[keys[keys.length - 2]] || 0)
    }