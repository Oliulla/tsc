class Person {
  name: string;
  age: number;
  id: number;
  constructor(name: string, age: number, id: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  makeSleep(hours: number): string {
    return `This person, ${this.name} will sleep for ${hours} hr.`;
  }
}

class Student extends Person {
  constructor(name: string, age: number, id: number) {
    super(name, age, id);
  }
}

const student1 = new Student("Bana", 23, 34234243);

class Teacher extends Person {
  depertment: string;
  constructor(name: string, age: number, depertment: string, id: number) {
    super(name, age, id);
    this.depertment = depertment;
  }


  takeClass(classItem: number): string {
    return `${this.name} will take ${classItem} class.`;
  }
}

const teacher1 = new Teacher("Saha", 32, "English", 2343534534);
console.log(teacher1.makeSleep(3));