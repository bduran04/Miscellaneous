var romanToInt = function(s) {
    //set up all roman numerals in an object that can be accessed via key 
       const values = {
           I: 1,
           V: 5,
           X: 10,
           L: 50,
           C: 100,
           D: 500,
           M: 1000
       }
       
       //take the input roman numeral and split it into an array so that we may evaluate each character by itself 
       const splitRomanNum = s.split('');
       //initialize a variable to hold the numeric value 
       let sum = 0;
       
       //loop through the array of roman characters 
       for (let i = 0; i < splitRomanNum.length; i++) {
           //checks to see if the value of the current roman char is less than the previous value 
           if (values[splitRomanNum[i]] < values[splitRomanNum[i+1]]) {
               //if true, subtract the value and add to sum
               sum += values[splitRomanNum[i + 1]] - values[splitRomanNum[i]];
               i++;
           } else {
               //otherwise, just add the total to the sum 
               sum += values[splitRomanNum[i]];
           }
   }
       return sum
   };