// gaurd
// keyof gaurd
type alphanumeric = number | string;

function add(param1: alphanumeric, param2: alphanumeric): alphanumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  }
  return param1.toString() + param2.toString();
}

add("1", "3");
add(2, 4);

// in gaurd
type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: string;
};

function getUser(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return "admin";
  }
  return "normal user";
}

const normaluser1: NormalUserType = { name: "Normal User" };
const adminuser1: AdminUserType = { name: "Admin User", role: "admin" };

console.log(getUser(normaluser1))
console.log(getUser(adminuser1))

class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log('I can sound')
    }
}

class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }

    makeBark() {
        console.log('make bark')
    }
}
class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }

    makeMeow() {
        console.log('make meow')
    }
}

function isDog(animal: Animal): animal is Dog {
    return animal instanceof Dog;
}

function isCat(animal: Animal): animal is Cat {
    return animal instanceof Cat;
}

function getAnimal(animal: Animal) {
    if(isDog(animal)) {
        animal.makeBark();
    }
    else if(isCat(animal)) {
        animal.makeMeow()
    }
    else {
        animal.makeSound()
    }
}

const animal1 = new Dog("Dog", "Animalia");
const animal2 = new Cat("Cat", "Animalia");

getAnimal(animal2);