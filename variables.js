//var, let and const -- Variables
/* Var should be less used because modern browsers supports let and const now */

//can be double or single quotes
// var name = 'Sasanka Chintam';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// //Init Var
// var greetings;
// console.log(greetings);

// greetings = "Hello Sasanka";
// console.log(greetings);

// //letters, numbers, _, $ inside variables
// //can not start with number
// //$ should be used only using with jQuery

// //Multi word variables
// var firstName = 'Sasanka'; //camel case
// var test_name ="Sarah"; //more like in php 
// var lastName = 'Chintam';
// var TestName = 'Tim'; //Pascal Case

//let works similar to var --> advantages of block leve scoping

//Let 
// let name ='sasanka';
// console.log(name);
// name='david';
// console.log(name);

//Const
const name = 'sasanka';
console.log(name);
//can not reassign for const variables
// name = 'chintam';
//must assing values not just initialize
// const greeting;


const person = {
  name: 'sasanka',
  age: 29
}
person.name = 'chintam';
console.log(person)


const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
// numbers = [2,3,4,5,6,7,8];
console.log(numbers);

/* Primitive Data Types 
String 
Number
Boolean
Null 
Undefined
Symbols(ES6)
*/

/* Refernce Data Types 
Arrays
Object Literals
functions
Dates ..
*/

//Dynamically Types Language

//TS js + more features

//Prmitive

const firstName = 'sasanka chintam';
console.log(typeof firstName);

const age = 45;
console.log(typeof age);

const hasKids = false;
console.log(typeof hasKids);


//null --- bug in js
const car = null;
console.log(typeof car);

//undefined
let test;
console.log(typeof test);
console.log('Test of Undefined::::',typeof typeof test);

//Symbol
const sym = Symbol();
console.log(typeof sym);

//Reference Types -- all objects

const hobbies = ['movies', 'music', 'cricket'];
console.log(typeof hobbies);

const address = {
  city: 'New Jersey',
  state: 'NJ'
}
console.log(typeof address);

const today = new Date();

console.log(today);
console.log(typeof today);