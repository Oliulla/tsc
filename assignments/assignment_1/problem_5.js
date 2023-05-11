"use strict";
/**
    Problem 5:

    Create a TypeScript function that takes a parameter of type unknown
    and uses a type guard to check whether the parameter is of type string.
    If it is, log the string to the console. If it is not, log an error message.
*/
// attempt-1
function strTypeParam(str) {
    if (typeof str === 'string') {
        console.log(str);
    }
    else {
        console.log(new Error(`sorry '${str}' type is not string!!!`));
    }
}
strTypeParam("2343");
