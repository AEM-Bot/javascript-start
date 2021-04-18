//Most important in all programming languages 

//create some arrays
const numbers = [22, 100, 33, 42]; //recommended way of doing initilizatin
const numbers2 = new Array(1, 4, 5, 6, 7, 8);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];
// console.log(mixed);

let val;

//get array length
// val = numbers.length;
// //check if is  array
// val = Array.isArray(numbers);
// //get single value
// val = numbers[2];
// val = numbers[0];
// //insert into array
// numbers[2] = 100;

// //find index of value
// val = numbers.indexOf(2);

//mutating arrays
//add at the end 
// numbers.push(250);
// //add on to first / front
// numbers.unshift(120);
// //remove from end
// numbers.pop(250);
// //remove from front
// numbers.shift(120);
// //splice values
// numbers.splice(1, 2);
// //Revers array
// numbers.reverse();

//Contatenation of Arrays
// val = numbers.concat(numbers2);

//Sorting array
// val = fruit.sort();

// val = numbers.sort();

//Use the compare function
// val = numbers.sort(function (x, y) {
//   return x - y;
// })

// //Reverse Sort
// val = numbers.sort(function (x, y) {
//   return y - x;
// })

//Find 
function under50(num) {
  return num < 50;

}
function over50(num) {
  return num > 50;

}
val = numbers.find(under50);
val = numbers.find(over50);
console.log(numbers);
console.log(val);

