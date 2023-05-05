class Bank {
    public name: string;
    public readonly id: number;
    private balance: number
    constructor(name: string, id: number, balance: number) {
        this.name = name;
        this.id = id;
        this.balance = balance;
    }

    private getTestBalance(): number {
        return this.balance;
    }

    get Test(): number {
        return this.getTestBalance();
    }

    get getBalance(): number {
        return this.balance;
    }

    set depositBalance(amount: number) {
        this.balance += amount
    }
}

class StudentBank extends Bank {
    test() {
        this.Test
    }
}

const person10Balance = new Bank("Rahim", 23423, 23);
const blnc = person10Balance.getBalance;
person10Balance.depositBalance = 7;
console.log(blnc)