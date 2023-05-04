// generic fn

// fn1
const createArr = (param: string): string[] => {
  return [param];
};

// f2
const createArr2 = <T>(param: T): T[] => {
  return [param];
};

// fn3
const createArr3 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

const res8 = createArr3<string, Array<string>>("Bangladesh", ["lOVE"]);

const res4 = createArr3<string, string>("Bangladesh", "lOVE");
const res5 = createArr("Bangladesh");
const res6 = createArr2<string>("UK");

type arrType = { name: string };

const res7 = createArr2<arrType>({ name: "some" });

// spread Operator

const crush = "Kate winslate";
// const newData = {...myInfo, crush};

interface IMyinfoInterface {
  name: string;
  age: number;
  salary: number;
  other1: boolean;
  other2: null;
}
interface IMajorInterface {
  name: string;
  age: number;
  salary: number;
}

const addMeInMyCrush = <T extends IMajorInterface>(param: T) => {
  const crush = "Kate winslate";
  const newData = { ...param, crush };
  return newData;
};

const myInfo: IMyinfoInterface = {
  name: "Persian",
  age: 100,
  salary: 10000000,
  other1: true,
  other2: null,
};

const res9 = addMeInMyCrush(myInfo);
