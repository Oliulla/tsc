type NumArr = Array<number>;

function compareTwoArray(arr1: NumArr, arr2: NumArr): NumArr {
    const commonNums: NumArr = [];

    for (let i: number = 1; i<arr1.length; i++) {
        if(arr2.includes(arr1[i]) && !commonNums.includes(arr1[i])){
            const sameNum = arr1[i];
            commonNums.push(sameNum);
        }
    }

    return commonNums;
}
console.log(compareTwoArray([1, 2, 3, 4, 5],[2, 4, 6, 8]))