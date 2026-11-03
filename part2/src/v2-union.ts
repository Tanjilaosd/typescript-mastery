// literal type
type Status = "pending";
const status:Status = 'pending'
console.log(status)

// Basic union
type Identity = string | number
const id:Identity = 3333
console.log(id)

// Literal Union
type Role = "user" | "admin" | "manager";
const userRole:Role = "manager"
console.log(userRole)

// object union
type Admin = {id:number ; role:"admin" ; privileges:string[]};
type Member = {id:number; role:"member" ; plans:string[]}

type User = Admin | Member
const user : User = {id:3,role:"admin",privileges:['add','lkj']}
console.log(user)