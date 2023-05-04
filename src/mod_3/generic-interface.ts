// // generic interface
// interface CrushInterface<T, U = null, V=null> {
//   name: string;
//   husband?: T;
//   wife?: U;
//   other?: V
// }

// interface ICrush6Interface {
//     name: string,
//     age: number
// }

// const crush6: CrushInterface<ICrush6Interface, ICrush6Interface> = {
//   name: "kate",
//   husband: {
//     name: "persian",
//     age: 23,
//   },
//   wife: {
//     name: "win",
//     age: 23,
//   },
// };

// const crush3: CrushInterface<boolean, string> = {
//   name: "Kate Winslate",
//   husband: true,
//   wife: "sokina",
// };

// const crush4: CrushInterface<string> = {
//   name: "Kate winslate",
//   husband: "persian",
// };

// interface IHusbandInterface {
//   name: string;
//   salary: number;
// }

// const crush5: CrushInterface<IHusbandInterface> = {
//   name: "kate winslate",
//   husband: {
//     name: "persian",
//     salary: 0.01,
//   },
// };

// type GenericTuple<X, Y> = [X, Y];

// const relation: GenericTuple<string, string> = ["Persian", "Kate winslate"];

// type RelationWithSalaryType = {
//   name: string;
//   salary: number;
// };

// interface IRelationWithSalary {
//   name: string;
//   salary: number;
// }

// const relationWithSalary: GenericTuple<IRelationWithSalary, string> = [
//   {
//     name: "Persian",
//     salary: 10000000000,
//   },
//   "kate Winslate",
// ];

// type GenericArray<T> = Array<T>;

// const rollNums2: GenericArray<number> = [23, 245, 234];
// const rollNums3: GenericArray<string> = ["234", "23", "12"];
// const rollNums4: GenericArray<boolean> = [true, false, true, true, true, false];

// type NameNRollType = { name: string; roll: number };
// const userNameNRollNums: GenericArray<NameNRollType> = [
//   {
//     name: "mr. x",
//     roll: 23,
//   },
//   {
//     name: "mr. y",
//     roll: 23,
//   },
//   {
//     name: "mr. z",
//     roll: 23,
//   },
// ];

// // for all primitive value we use type alias
