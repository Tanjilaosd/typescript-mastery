const addTwo = (a, b) => {
    return a + b;
};
console.log(addTwo(4, 34));
// Array and Tuple and readonly modifier
// const arr: Array<string> = ["programming","Hero"]
const arr = ["programming", "Hero"];
const numarr = [44, 33];
const dhakalatLong = [3444, 45455445];
// Optional , Default  and rest parameters (...args)
const concatName = (firstName, lastName) => {
    if (!lastName) {
        return firstName;
    }
    return firstName + "" + lastName;
};
// Default
const greetings = (fullName, greeting = "hellow") => {
    console.log(greeting + "" + fullName);
};
greetings("mir");
// rest parameters(...args)
const sum = (...numbers) => {
    return numbers.reduce((total, sum) => total + sum, 0);
};
sum(1, 2, 3, 4, 5, 6);
const logUserAction = (...args) => {
    const [name, age] = args;
    console.log(name + " is " + age);
};
logUserAction("Mir", 192, false);
export {};
