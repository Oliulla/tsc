function addTwo(a, b) {
    return a + b;
}
console.log(addTwo(2, 3));
var person = {
    name: "mezbah",
    blnc: 5,
    addBalance: function (mn) {
        return "My new balance is ".concat(this.blnc + mn);
    }
};
console.log(person.addBalance(67));
