type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address";

type newTypeUsingKeyOf = keyof PersonType;

// const another: newType = `age`;
// const another2: newTypeUsingKeyOf = `name`;

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    obj[key]
}

const res10 = getProperty({name: "Mr. X", age: 100}, "age")

// ({name: "Mr. X", age: 32}, 'age')

// const another3 = {name: "Mr. X", age: 32}