"use strict";
/** Problem 3:
 
    Create a TypeScript program that uses a generic function to reverse an array
    of strings, and takes a variable number of strings to the array using rest parameters.
    Provide an example of calling the function with a variable number of strings.
*/
function reverseArr(...str) {
    let revArr = [];
    for (let i = 0; i < str.length; i++) {
        revArr.unshift(str[i]);
    }
    return revArr;
}
const result = reverseArr("a", "b", "c", 'd', 'e');
console.log(result);
