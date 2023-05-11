"use strict";
/**
    Problem 1
    Functions and Default Parameters

    Create a TypeScript program that declares a function that takes two parameters,
    a string and a number. The function should log the string parameter repeated the
    number of times specified by the number parameter. If the number parameter is
    not provided, it should default to 3.
*/
function repeatString(str, num = 3) {
    for (let i = 0; i < num; i++) {
        console.log(str);
    }
}
function repeatString2(str, num = 3) {
    console.log(str.repeat(num));
}
repeatString("biday pititbi :XD ");
