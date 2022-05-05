//create a function that converts two integers from strings, adds them together, and returns the result as a string
const num1 = '327837857456754657467';
const num2 = '67676767678';

if (num1.length >= num2.length) {
    console.log(addTogether(num1, num2));
} else {
    addTogether(num2, num1);
}

function addTogether(num1, num2) {
    //the first variable is an emtpy string that will be used to store the solution 
    let sum = '';
    //this variable stores the leftmost bits to carry the remainder to the next digit
    let carry = 0;

    const difference = num1.length - num2.length;

    for (i = num1.length - 1; i > 0; i--) {
        let temp = (Number(num1.charAt(i)) % 10) + (Number(num2.charAt(i + difference)) % 10) + carry;

        if (temp >= 10) {
            sum = (temp % 10) + sum;
            carry = Math.floor(temp / 10);
        } else {
            sum = temp + sum;
            carry = 0;
        }
    }

    if (carry > 0) {
        sum = carry + sum;
    }

    return sum;
};


//Maximum Subarray
function maxSubArray(arr) {
    let maxSum = arr[0];
    let tempSum = 0;
    for (let i = 0; i < arr.length; i++) {
        tempSum += arr[i];
        maxSum = Math.max(maxSum, tempSum);
        if (tempSum < 0) tempSum = 0;
    }
    return maxSum;
};

//contains duplicate: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
var containsDuplicate = function (nums) {
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true
        set.add(nums[i])
    }
    return false
};

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

//Stacks imlpementation - linked list 1 - push, pop, peek, isEmpty
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            let temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let temp = this.top;
        this.top = this.top.next;
        this.length--;
        return temp;
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop();
myStack.peek();

//Queues implementation - linked list 2 - enqueue, dequeue, isEmpty
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if (this.length === 0) return undefined;
        let temp = this.first;
        this.first = this.first.next;
        this.length--;
        return temp;
    }
}

const myQueue = new Queue();

//implement queue using two stacks - the implemented queue should support all of the functions of a normal queue 
class newQueue {
    constructor() {
        this.first = [];
        this.last = [];
    }

    enqueue(value) {
        const length = this.first.length;
        for (let i = 0; i < length; i++) {
            this.last.push(this.first.pop());
        }
        this.last.push(value);
        return this;
    }

    dequeue() {
        const length = this.last.length;
        for (let i = 0; i < length; i++) {
            this.first.push(this.last.pop());
        }
        return this.first.pop();
    }

    peek() {
        if (this.last.length > 0) {
            return this.last[0];
        }
        return this.first[this.first.length - 1];
    }
}
const queue = new newQueue();
queue.enqueue('google');
queue.enqueue('udemy');
queue.enqueue('discord');
queue.dequeue();
queue.peek();

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