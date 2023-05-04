// spread operator
var friends = ["a", "b", "c"];
var femaleFr = ["e", "f", "g"];
friends.push.apply(friends, femaleFr);
console.log(friends);
// rest params
function greetFrnds() {
    var frnds = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        frnds[_i] = arguments[_i];
    }
    // console.log(frnds)
    //   console.log(`Hi ${frnds[0]}\n Hi ${frnds[1]}\n Hi ${frnds[2]}`);
    frnds.forEach(function (frnd) { return console.log("Hi ".concat(frnd)); });
}
greetFrnds("hashem", "kashem", "jamil", "hasib");
// destructuring
var a = friends[0];
console.log(a);
