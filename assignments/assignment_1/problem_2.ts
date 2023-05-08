/**
    Problem 2 🧨🧨

    Write a function that takes in an array of objects with properties name and age, 
    and returns only the objects where the person's age is greater than or equal to 18,
*/

interface IAdultsInterface {
    name: string;
    age: number;
}

function adultPersons(personArr: IAdultsInterface[]): IAdultsInterface[] | undefined {
    const adultPersons = personArr.filter(person => person.age >= 18 )
    return adultPersons.length ? adultPersons : undefined;
}

const people: IAdultsInterface[] = [
    { name: 'safin', age: 129 },
    { name: 'bafin', age: 17 },
    { name: 'dafin', age: 30 },
  ];
const kids: IAdultsInterface[] = [
    { name: 'safin', age: 1 },
    { name: 'bafin', age: 7 },
    { name: 'dafin', age: 0 },
  ];
  
  const adults = adultPersons(kids);
  console.log(adults);
