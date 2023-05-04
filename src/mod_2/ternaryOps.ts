// ternary operator

const age: number = 22;

const isAdult: string = age > 20 ? "Adults" : "Teens";
// console.log(isAdult);

// nullish coalescing operator
// null and undefined

const isAuthenticatedUser = "";
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
console.log({ userName }, { userName2 });
