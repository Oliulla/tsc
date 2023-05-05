class BankAccount2 {
  readonly id: number;
  public name: string;
  protected _balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  getBlnce():number {
    return this._balance;
  }

  depositBlnce(amount: number) {
    this._balance = this._balance + amount;
  }
}

class StudentAccount2 extends BankAccount {
  test() {
    this._balance;
  }
}

const account12 = new BankAccount(234234, "Persian", 2342342342);
// account1.balance = 0;
console.log(account1);
