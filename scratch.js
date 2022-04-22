/* 1. Given a string, count the number of unique letters */
/* 'Test string' */


const string = "this is the test string";
const size = new Set().size;
//grab the set of unique letters from the size variable 
const uniqueLetters = [...new Set(string)].join('');

//use the replaceall method in order to replace the spaces in the Original string into ""
const onlyUniqueLetters = uniqueLetters.replaceAll(" ", '');

//create an array for both the original string and the unique letters string
const arrayUnique = onlyUniqueLetters.split('');
const arrayString = string.split('');

//initialize the counts
let counts = [];
let count = 0;

//this function returns an array containing the unique letters in the original string
function uniqueLettersCount() {
    for (let i = 0; i < arrayUnique.length; i++) {
        const uniqueLetter = arrayUnique[i];

        for (let j = 0; j < arrayString.length; j++) {
            const originalLetter = arrayString[j];
            if (uniqueLetter === originalLetter) {
                //create a container that counts 
                counts.push(arrayUnique[i]);
                count++;
            }
        }
    }

    return counts;
}

const output = () => {
    let total = uniqueLettersCount();
    //initialize the object that will contain the unique letters and their counts
    let obj = {};
    //loop through the array containing the unique letters and creates an object with the key as the unique letter and the value as the amount of times it appears in the original string
    total.forEach(letter => {
        //adds 1 to the key if the letter already exists 
        if (letter in obj) {
            obj[letter]++
        } else {
            //sets the new found letter to 1
            obj[letter] = 1
        }
    })
    return obj
}

//this returns the object with the letter and the amount of times it appears in the string
console.log(output());
//this returns the string containing the unique letters
console.log(noSpaces);

//create a function that returns the first recurring character in an array
function firstRecurringCharacter(input) {
    let seen = {};
    for (let i = 0; i < input.length; i++) {
        if (seen[input[i]]) {
            return input[i];
        } else {
            seen[input[i]] = true;
        }
    }
    return undefined;
}
firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);

//given two arrays, return an array that contains only the elements that are common between the two arrays
function intersect(nums1, nums2) {
    let set = new Set();
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        set.add(nums1[i]);
    }
    for (let i = 0; i < nums2.length; i++) {
        if (set.has(nums2[i])) {
            result.push(nums2[i]);
        }
    }
    return result;
}

//Move zeroes: Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
const moveZeroes = function (nums) {
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.push(0);
            nums.splice(i, 1);
        }
    }
};

//two sums: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
const twoSum = function (nums, target) {
    const seenNums = {};
    let runningNum;

    for (let i = 0; i <= nums.length - 1; i++) {
        runningNum = target - nums[i];
        if (seenNums.hasOwnProperty(runningNum)) {
            return [seenNums[runningNum], i]
        } else {
            seenNums[nums[i]] = i;
        }
    }
};