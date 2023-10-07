/*js is dynamic language which means data types of variable are determine by value they hold at runtime
and can change throughout the program as we assign different value to them.

Js does not require the explicit decalration of the variables before they are used
*/

//primative data

//7 types: String, Number, Boolean, Null, Undefined, Symbol, Bigint


const score=100   //number
const scorevalue= 10.3 //number
const roomtemp = null
const login =false //boolean
let user; //undefined

const id= Symbol("124")
const anotherId = Symbol("124")
console.log(id === anotherId);

//Reference or Non-primative

//Object, Array, Functions

const hero=['Ironman','Hulk','Spiderman'] //array : return type:object

 let myobj = {
    name: "Madhura", //return type: object
    age:23
}

let myFunction = function () {
 console.log("hello world");  //retuen type: function object
}

console.log(typeof (myFunction))

