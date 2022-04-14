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