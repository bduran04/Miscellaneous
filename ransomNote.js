//Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.Each letter in magazine can only be used once in ransomNote.

var canConstruct = function(ransomNote, magazine) {
    //inputs are strings, output is boolean
    //use the .split() method for both 
    //loop through the ransomNote & check whether elements match elements in magazine 
    //use indexOf to remove the element once it's matched with the element in ransomNote 
    let ransomNoteArr = ransomNote.split('');
    let magazineArr = magazine.split('');
    
    for (let i = 0; i < ransomNoteArr.length; i++) {
        if (magazineArr.includes(ransomNoteArr[i])) {
            let letterIndex = magazineArr.indexOf(ransomNoteArr[i]);
            magazineArr.splice(letterIndex, 1);
        } else {
            return false;
        }
    } 
    return true;
};