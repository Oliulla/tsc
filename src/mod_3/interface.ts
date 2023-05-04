type User = {
  name: string;
  age: number;
};

type extendedUser = User & {
  role: string;
};

interface IUser {
  name: string;
  age: number;
}

interface IExtendedUser extends IUser {
  role: string;
}

const userWithTypeAlias: User = {
  name: "typeAlias",
  age: 324,
};

const user: extendedUser = {
  name: "manush",
  age: 234,
  role: "unk",
};

// benifits of using interface is we can extend it
const userWithInterface: IUser = {
  name: "interface",
  age: 31,
};

// console.log(user)

// object, fn, array

type addNumsType = (n1: number, n2: number) => number;
interface IAddNums {
  (n1: number, n2: number): number;
}
const addNums: addNumsType = (n1, n2) => n1 + n2;

// console.log(addNums(23, 32));

type rollNumsType = number[];
interface IRollNumsInterface {
    [index: number]: number;
}
const rollNums: IRollNumsInterface = [323, 423, 232];

console.log(rollNums)

// when we use interface and type alias
// OBJECT/class --> interface
// Rest of work --> type alias