// Pick

interface Prson {
  name: string;
  email: string;
  contact: string;
}

type Contact = Pick<Prson, "email" | "contact">;

// Omit

type Name = Omit<Prson, "name">;

// pertial

type Opt = Partial<Prson>;

// required

type Req = Required<Prson>;

const person10: Readonly<Prson> = {
    name: "sam",
    email: "e@mail.com",
    contact: "24a"
}

// person10.name = "samsu"

// Record Type
// type MyObj = {
//     a: string;
//     b: string;
//     c: string;
// }

// index signature
// type MyObj = {
//     [key: string]: string;
// }

// Record
type MyObj = Record<'a'| 'b'| 'c', string>

const myObj: MyObj = {
    a: "a",
    b: "b",
    c: "c",
}
