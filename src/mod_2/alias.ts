// alias type

type CrushType = {
  name: string;
  age?: number; // optional type ?
  prof: string;
  address: string;
};

const crush1: CrushType = {
  name: "Moyna",
  age: 23,
  prof: "dev",
  address: "usa",
};

const crush2: CrushType = {
  name: "Tia",
  age: 24,
  prof: "dev",
  address: "uk",
};

console.log(crush1, crush2);
