// // generic fn

// const createArr = (param: string): string[] => {
//   return [param];
// };
// const createArr2 = <T>(param: T): T[] => {
//   return [param];
// };

// const createArr3 = <X, Y>(param1: X, param2: Y): [X, Y] => {
//   return [param1, param2];
// };

// const res8 = createArr3<string, Array<string>>("Bangladesh", ["lOVE"]);

// const res4 = createArr3<string, string>("Bangladesh", "lOVE");
// const res5 = createArr("Bangladesh");
// const res6 = createArr2<string>("UK");

// type arrType = { name: string };

// const res7 = createArr2<arrType>({ name: "some" });

// // spread Operator

// const crush = "Kate winslate";
// // const newData = {...myInfo, crush};

// const addMeInMyCrush = <T>(param: T) => {
//   const crush = "Kate winslate";
//   const newData = { ...param, crush };
//   return newData;
// };
// const myInfo = {
//   name: "Persian",
//   age: 100,
//   salary: 10000000,
// };

// const res9 = addMeInMyCrush<{ name: string; age: number; salary: number }>(
//   myInfo
// );