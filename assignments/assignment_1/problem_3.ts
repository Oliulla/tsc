/** Problem 3:
 
    Create a TypeScript program that uses a generic function to reverse an array
    of strings, and takes a variable number of strings to the array using rest parameters. 
    Provide an example of calling the function with a variable number of strings.
*/

function reverseArr<T>(...str: T[]): T[] {
    let revArr: T[] = [];
    for(let i =0; i<str.length; i++) {
        revArr.unshift(str[i]);
    }
  return revArr;
}

const result: Array<string> = reverseArr("a", "b", "c", 'd', 'e')
console.log(result);