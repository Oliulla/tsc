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