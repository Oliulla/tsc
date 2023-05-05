class Person3 {
  takeNap(): void {
    console.log("I sleep for 8 hours/day");
  }
}

class Student2 extends Person3 {
  tekeNap(): void {
    console.log("I sleep for 9 hours/day");
  }
}

class Developer extends Person3 {
  takeNap(): void {
    console.log("I sleep for 5 hours/day");
  }
}

function getNap(param: Person3) {
  param.takeNap();
}

const person5 = new Person3();
const person6 = new Student2();
const person7 = new Developer();

// getNap(person5)
// getNap(person6)
// getNap(person7)

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Reactangle extends Shape {
     l: number;
     w: number;
     constructor(l: number, w:number) {
        super();
        this.l = l;
        this.w = w;
     }

     getArea(): number {
        return this.l * this.w; 
     }
}

function getAreaOfShape (param: Shape) {
    console.log(param.getArea());
}

getAreaOfShape(new Circle(10));
getAreaOfShape(new Reactangle(14, 12));