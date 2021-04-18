// // let val;
// // //Type Conversiion

// // //number to string
// // val = String(12);
// // val = String(4+4);
// // //Bool to String

// // val = String(true);
// // //Date to String
// // val = String(new Date());

// // //Array to String
// // val = String([1,2,3,4]);

// // //toString Method
// // val = (5).toString();
// // val = (true).toString();

// // //String to number
// // val = Number('5');
// // val = Number(true);
// // val = Number(false);
// // val = Number(null);
// // val = Number('Hello');

// // //parse int
// // val = parseInt('100');
// // val = parseFloat('100.22');


// // //Output
// // // console.log(val);
// // // console.log(typeof val);
// // // // console.log(val.length); // only works for string 
// // // console.log(val.toFixed())


// // //Type Conversion -- Implict conversion 

// // const val1 =String(5);
// // const val2 = 6;
// // const sum = val1 + val2;
// // console.log(sum);
// // console.log(typeof sum);


// //Numbers and Math

// const num1 = 100;
// const num2 = 50;
// let val;

// //Simple Math with numbers 
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// //Math Objects in built functions 

// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.5);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-30);
// val = Math.pow(4, 2);
// val = Math.min(num1, num2);
// val = Math.max(num1, num2);
// val = Math.random();
// val = Math.floor(Math.random() * 20);
// //Output
// console.log(val);

// //Strings and concatenation
// const firstName = 'Sasanka';
// const lastName = 'Chintam';
// const age = 29;
// const str = 'Hello there my name is Sasanka';
// const tags = ' web design, web development, AEM ';
// let val;

// val = firstName + lastName;

// //Concatenation

// val = firstName + ' ' + lastName;

// //append

// val = 'Hello ';
// val += 'World';

// val = 'Hello, My Name is ' + firstName + ' I am ' + age;

// //Escaping
// val = 'That\'s awesome, I can\'t wait';

// //Length
// val = firstName.length;

// //concat
// val = firstName.concat(' ', lastName);

// //touppercase and lowercase
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2];

// //indexOf
// val = firstName.indexOf('k');

// val = firstName.lastIndexOf('k')

// //charat
// val = firstName.charAt('2');
// //get last char
// val = firstName.charAt(firstName.length - 1);

// //substring
// val = firstName.substr(0, 4);

// //slice
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// //split --really handy
// val = str.split(' ');
// val = tags.split(',');

// //replace
// val = str.replace('Sasanka', 'Jack');

// //includes
// val = str.includes('Hello');
// //output
// console.log(val);

//Template Literals and Template Strings 
const name = 'John';
const age = 29;
const job = 'Web Developer';
const city = 'Miami';
let html;

//lot of times inject html using js through ajax ul li table etc with dynamic data 

//Without template strings (ES5 way)
html = '<ul><li> Name: ' + name + ' </li><li> Age: ' + age + ' </li> <li> Job: ' + job + ' </li> <li> City: ' + city + ' </li></li></ul>';


function hello() {
  return 'hello sasanka';
}
//With Template Literals ES6
html = `
  <ul>
  <li> Name: ${name}</li>
  <li> Age: ${age} </li>
  <li> Job: ${job}</li>
  <li> City: ${city}</li>
  <li>${2 + 3}</li>
  <li>${hello()}</li>
  <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;


// console.log(html);
document.body.innerHTML = html;