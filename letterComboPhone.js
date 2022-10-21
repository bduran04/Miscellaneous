// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

/**
 * @param {string} digits
 * @return {string[]}
 */

 let alphabet = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }
  
  function permute(permutations, letters) {
    let result = []
    
    for (let letter of letters) {
      for (let permutation of permutations) {
        result.push(permutation + letter)
      }
    }
    
    return result
  }
  
  var letterCombinations = function(digits) {
       if (digits.length === 0) {
      return []
    }
    
    return digits.split('').reduce((previous, current) => {
      return permute(previous, alphabet[current])
    }, [''])
  };