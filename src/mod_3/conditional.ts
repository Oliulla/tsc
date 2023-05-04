// conditional type
// when a type is dependant to another that is called conditional type
type a1 = string;
type a3 = undefined;
type a4 = number;
type a2 = a1 extends string ? string : null;

// nested conditional type
type b = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;
// -----------------------
type sheikh = {
  wife1: string;
  wife2: string;
};

// keyof sheikh = 'wife1' | 'wife2';
type A = keyof sheikh;
// keyof sheikh = 'wife1' | 'wife2'
type CheckProperty<T, K> = K extends keyof sheikh ? true : false;
type checkWife1 = CheckProperty<sheikh, "wife1">;

// check sheikh type properties

// matha kharap kora example
type bandhobi = "a" | "b" | "c";
type removeBandhobi<T, K> = T extends K ? never : T;

type CurrentBandhobi = removeBandhobi<bandhobi, "b">;
