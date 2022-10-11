//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0. Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    //reverse as string
    let reversed = Math.abs(x).toString().split('').reverse().join('');
    // check if result inside range of uint32, dont need to check int32,  checks only positive because we take into account the minus sign in the logic later
    if(reversed > 2 ** 31 - 1 ) return 0;
    // and if we have minus sign, add it now 
    return Math.sign(x) * reversed
};