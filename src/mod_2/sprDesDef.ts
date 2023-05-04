// spread operator
const friends = ["a", "b", "c"];
const femaleFr = ["e", "f", "g"];

friends.push(...femaleFr);
console.log(friends);

// rest params
function greetFrnds(...frnds: string[]): void {
  // console.log(frnds)
//   console.log(`Hi ${frnds[0]}\n Hi ${frnds[1]}\n Hi ${frnds[2]}`);
    frnds.forEach(frnd => console.log(`Hi ${frnd}`));
}

greetFrnds("hashem", "kashem", "jamil", "hasib");


// destructuring
const [a] = friends;
console.log(a);