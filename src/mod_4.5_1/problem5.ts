const numbers: number[] = [1, 2, 3, 4, 5];
// const total = numbers.reduce((prev, curr) => prev + curr);

const totalOfEvenNums = (arr: number[]): number => {
    let evenTotal:number = 0;
    for(let i in arr){
        if(arr[i] % 2 === 0) {
            evenTotal += arr[i];
        }
    }
    return evenTotal;
}

console.log(totalOfEvenNums(numbers));