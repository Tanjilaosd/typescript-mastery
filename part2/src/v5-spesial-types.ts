// Top types
let hellowWorld : any = "Hellow world"
hellowWorld = 3445

hellowWorld.length
const something:unknown = "Hellow world"


// Core types
let something2:unknown;
const num: number = 123;
something2 = num;
type Status = "pending" | "success"
let someStatus : string;
let status:Status = "pending"
someStatus = status

// Nullish types
interface User {
    name:string
}
type LoggedInUser = User | null;
const currentUser:LoggedInUser = null



//* Unit type

const greet = () => {
  console.log("Hello World");
};
greet();

//* Sub-type of unit type

const anotherGreet = (): undefined => {
  console.log("Hello World");
  return undefined;
};

const greetings: void = anotherGreet();
console.log(greetings);

//* Bottom type

// const getError = (msg: string): never => {
//   throw new Error(msg);
// };

// const x: null = getError("ABC");