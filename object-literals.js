//curly braces defines object literals
const person = {
  firstName: 'Sasanka',
  lastName: 'Chintam',
  age: 29,
  email: 'schintam@gmail.com',
  hobbies: ['Movies', 'Sports', 'Cricket'],
  address: {
    city: 'Jersey City',
    state: 'NJ'
  },
  getBirthYear: function () {
    return 2021 - this.age; //this for accessing the object
  }
}
let val;

val = person;
//get specific value
val = person.firstName;
val = person['firstName']; //recommended way of getting values in objects
val = person['lastName'];
val = person.age;
val = person.hobbies[2];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();


//Output
console.log(val);



const people = [
  { name: 'sasanka', age: 29 },
  { name: 'Chintam', age: 33 },
  { name: 'nancy', age: 39 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}