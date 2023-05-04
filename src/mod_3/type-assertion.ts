let ex: any;
ex = "Next level web";

// (ex as string);
<string>ex;

let ex2: any;
ex2 = 23423;

ex as number;

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `Converted: ${value} g`;
  }
  if (typeof param === "number") {
    return param * 1000;
  }
}

const res = <number>kgToGram(2423);
const res2 = <string>kgToGram("2423");
const res3 = kgToGram("243") as string;
// console.log(res, res2, res3);

type CustomErrType = {
  message: string;
};

try {
} catch (error) {
  console.log((error as CustomErrType).message);
}

