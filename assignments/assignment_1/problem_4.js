"use strict";
/**
    Problem 4:
    Create a TypeScript class called Person that has private properties name and age,
    and a public method getDetails that returns a string with the person's name and age.
    Use parameter properties to define and initialize the properties in the constructor.

    Create a TypeScript class called Student that extends the Person class and
    has an additional private property grade. Define a public method getGrade
    that returns the student's grade. Use the super keyword to call the constructor
    of the Person class and initialize the name and age properties.
*/
// attempt 1
class PersonIn {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `The person name is ${this.name} & age is ${this.age}`;
    }
}
class StudentIn extends PersonIn {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }
}
const s = new StudentIn("sams", 323, "A+");
console.log(s.getGrade());
const p = new PersonIn("hablu pg", 3242);
console.log(p.getDetails());
