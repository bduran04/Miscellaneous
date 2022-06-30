/* Problem Name is &&& Second Smallest &&& PLEASE DO NOT REMOVE THIS LINE. */

/**
 * Instructions to candidate.
 * 1) Run this code in the REPL to observe its behaviour. The
 *    execution entry point is main().
 * 2) Consider adding some additional tests in doTestsPass().
 * 3) Implement secondSmallest() correctly.
 * 4) If time permits, some possible follow-ups.
 */


/**
 * Returns the second smallest element in the array x.
 * Returns 0 if the array has fewer than 2 elements.
 */
 function secondSmallest(x)
 {
   //given an array, output an integer, thats the second smallest element 
   //large quantity of numbers; also holds negative numbers 
   //store the smallest num in variable 
   let smallestNum = Number.MAX_VALUE;
   //create secondSmallest variable will hold the second smallest num 
   let secondSmallest = Number.MAX_VALUE;
  //for loop thats going to loop through the entire array & using an if statement using math.min() method 
  for (let i = 0; i < x.length; i++) {
   if (x[i] < smallestNum){
     secondSmallest = smallestNum;
     smallestNum = x[i];
   } if (x[i] < secondSmallest) {
    secondSmallest = secondSmallest; 
   } 
  }
  //if locate a smaller variable than what is stored in the smallestNum variable, then smallestNum = secondSmallest
//return secondSmallest
   // todo: implement this function 
   return 0;
 }
 
 [5, 1,2]
 
 /**
  * Returns true if all tests pass; otherwise, returns false.
  */
 function doTestsPass()
 {
   // todo: add more test cases
   var testArrays  = [[0], [0, 1]];
   var testResults = [0, 1];
   
   // Run through the tests and make assertions
   for(var i = 0; i < testArrays.length; i++)
   {
   if(secondSmallest(testArrays[i]) != testResults[i])
   {
     return false;
   }
   }
   return true;
 }
 
 
 /**
  * Main execution entry.
  */
 if(doTestsPass())
 {
   console.log("All tests pass!");
 }
 else
 {
   console.log("There are test failures.")}