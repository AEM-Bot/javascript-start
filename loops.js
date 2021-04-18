//for loop

// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log('2 is my favorite number');
//     continue;
//   }
//   if(i==5){
//     console.log('break/stop the loop')
//     break;
//   }
//   console.log('Number ' + i);
// }


//while loop

// let i = 0;
// while (i < 10) {
//   console.log('Number ' +i);
//   i++;
// }


//do while always runs once

// let i = 0;
// do {
//   console.log('Number ' + i);
//   i++;
// }
// while (i < 10);

//Loop through array
const cars = ['chevy', 'kia', 'ford', 'honda', 'toyota'];

// for(let i=0;i<cars.length;i++){
//   console.log('Car Name ' + cars[i]);
// }

//for each -- always suggested / recommended for iterating through arrays
// cars.forEach(function (car,index, array) {
//   console.log(`${index} : ${car} `);
//   console.log(array);
// });


//Map
// const users = [
//   {id:1, name:'John'},
//   {id:2, name:'Sarah'},
//   {id:3, name:'Karen'}
// ];

// const ids = users.map(function (user){
//   return user.id;
// });

// console.log(ids);


//for in loop
// const user ={
//   firstName:'John',
//   lastName: 'Smith',
//   age:29
// }

// for(let x in user){
//   console.log(`${x} : ${user[x]}`);
// }