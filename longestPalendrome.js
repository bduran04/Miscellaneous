//Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters. Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

var longestPalindrome = function(s) {
    let letterCount = {}
    let total=0;
    for(let i=0; i<s.length; i++){
        if(!letterCount[s[i]]){
            letterCount[s[i]] = 1;
        } else {
            letterCount[s[i]]++;
            if(letterCount[s[i]] > 1) {
                total += 2;
                delete letterCount[s[i]];
            }
        }
    }
    
    const remainingLetters = Object.keys(letterCount);
    if(remainingLetters.length > 0){
        total++;
    }
    return total;
};