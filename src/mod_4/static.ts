class Counter {
    static counter: number = 0;
    

    static incriment(): number {
        return (Counter.counter +=1);
    }

    static dicreamnet(): number {
        return (Counter.counter -= 1);
    }
}

// const instance1 = new Counter();
// const instance2 = new Counter(1);
console.log(Counter.incriment())
console.log(Counter.incriment())
// console.log(instance1.incriment())
// console.log(instance1.dicreamnet())