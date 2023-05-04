function addTwo(a:number, b:number): number {
    return a+b;
}
console.log(addTwo(2,3))

const person: {
    name: string,
    blnc: number,
    addBalance(mn: number):string
} = {
    name: "mezbah",
    blnc: 5,
    addBalance(mn: number) {
        return `My new balance is ${this.blnc + mn}`;
    }
}
console.log(person.addBalance(67));