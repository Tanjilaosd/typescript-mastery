// type alias vs interface
// Interface is generally connected to objects
// type alias is more connected to literals,unions,tuples,primitives


// Todo:type alias
type ID = number;
// !interface id = number

type Role = "admin" | "member"
//  !interface "admin" | "member"

interface User{
    name:string,
    id:ID,
    role:Role
}

// Todo:interface 
interface Animal{
    species:string
}

interface Cat extends Animal{
    breed:string
}

const cat:Cat = {
    species:"felix Catus",
    breed:"Persian"
}
type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  //? "&" symbol is used to perform intersection
  model: string;
};

const car: Car = {
  model: "Corolla",
  brand: "Toyota",
};

interface IEmployee {
  name: string;
}

interface IEmployee {
  id: number;
}

///! This is not valid
// type TEmployee = {
//   name: string;
// };

// type TEmployee = {}

const employee: IEmployee = {
  id: 123,
  name: "ABC",
};
