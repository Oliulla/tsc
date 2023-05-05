// interface
interface IVehicle {
  name: string;
  model: string;
}
const vehichle: IVehicle = {
  name: "car",
  model: "a323",
};

interface IVehicle2 {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Car implements IVehicle2 {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  startEngine(): void {
    console.log("I am starting");
  }
  stopEngine(): void {
    console.log("Stop engine");
  }
  move(): void {
    console.log("I am moving");
  }
}

const vehicle1 = new Car("Car", "XXX", 234234);

// abstract

// abstract class Vehicle4 {
//   constructor(
//     public name: string,
//     public brand: string,
//     public model: number
//   ) {}
//   abstract startEngine(): void;
//   abstract stopEngine(): void;
//    move(): void {
//     console.log("I am moving");
//   }
// }

// class Car extends Vehicle4 {
// startEngine(): void {
//     console.log('start engine')
// }
// stopEngine(): void {
//     console.log('stop engine')
// }
// }

// const car1 = new Vehicle4("Car", "honda", 234);