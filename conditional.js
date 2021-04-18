const id = 100;
//equal to
// if (id == 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }
// //not equal to
// if (id != 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }


// //Equal to values & type use it most of the times
// if (id === 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// if (id !== 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

//test if undefined
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('No ID');
// }

// //Greater or less than
// if (id > 200) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

//If Else 
const color = 'red';

// if(color === 'red'){
//   console.log('Color is red');
// }else if(color === 'yellow'){
//   console.log('Color is yellow');
// }else{
//   console.log('Color is neither red nor yellow');
// }

//Logic Operators

const name = 'Sasanka';
const age = 29;

//AND &&
if (age > 0 && age < 20) {
  console.log(`${name} is a child`);
} else if (age >= 20 & age <= 30) {
  console.log(`${name} is a young guy`);
} else {
  console.log(`${name} is an old man`)
}

//OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

//Ternary Operator for short hand 
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

//curly braces are optional in js but not required as in java but best practice is to use curly braces 

if(id===100)
  console.log('CORRECT');
else
  console.log('INCORRECT');