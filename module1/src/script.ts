const addTwo = (a:number,b:number) =>{
    return a + b
}

console.log(addTwo(4,34))

// Array and Tuple and readonly modifier
// const arr: Array<string> = ["programming","Hero"]

const arr:string[] = ["programming" , "Hero"];
const numarr:number[] = [44,33]
const dhakalatLong:readonly[number,number] = [3444,45455445]

// Optional , Default  and rest parameters (...args)
const concatName = (firstName:string,lastName?:string){
    if(!lastName){
        return firstName
    }
    return firstName + "" + lastName
}

// Default
const greetings = (fullName:string,greeting="hellow") =>{
    console.log(greeting + "" + fullName)
}
greetings("mir")




// rest parameters(...args)
const sum = (...numbers:number[])=>{
    return numbers.reduce((total,sum) => total+sum,0)
}
sum(1,2,3,4,5,6)


const logUserAction = (...args:[name:string,age:number, isActions:boolean]) => {
    const [name,age] = args;
    console.log(name + " is " + age)

}

logUserAction ("Mir", 192 , false);
// Object,type alise and interface
type Address = {
    streetName:String;
    holdingNumber:number;

}


type TUser = {
    
}


