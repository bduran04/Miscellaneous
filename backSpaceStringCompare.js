//Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.Note that after backspacing an empty text, the text will continue empty.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//create a helper function that will intake either string & filter the results
const cleanUpString = (text) => {
    //dont have to write [i] stuff, nor i++ while using .map function
    //.split to convert both strings into arrays
    let splitText = text.split('');
    //loop through each given array, locate the # and delete the prior element
    while(splitText.includes("#")) {
        splitText.map((letter, i) => {
            if (letter === "#" && i !== 0) {
                splitText.splice(i-1, 2);
            };
        })
    }
    //join the strings
    return splitText.join('');
}

var backspaceCompare = function(s, t) {
    //we're given two strings, delete element behind the # symbol, compare both strings and return boolean that determines if t/f

    //compare the arrays and return true/false
    return cleanUpString(s) === cleanUpString(t);

};