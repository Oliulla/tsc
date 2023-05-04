class BankAccount {
  readonly id: number;
  public name: string;
  protected _balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  getBlnce() {
    console.log("blnc: ", this._balance);
  }

  depositBlnce(amount: number) {
    this._balance = this._balance + amount;
  }
}

class StudentAccount extends BankAccount {
  test() {
    this._balance;
  }
}

const account1 = new BankAccount(234234, "Persian", 2342342342);
// account1.balance = 0;
console.log(account1);
