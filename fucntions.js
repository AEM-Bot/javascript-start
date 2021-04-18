//Function Declarations


//declarations
// function greet(){
//   // console.log('Hello')
//   return 'Hello';
// }

// function greet(firstName = 'sas', lastName = 'chill') {
//   return 'Hello ' + firstName + ' ' + lastName;
// }
// //calling 
// // greet();
// // console.log(greet('sasanka', 'chintam'));

// //function expressions

// //anonymous without any fucntion name belwo
// const square = function (x){
//   return x*x;
// }
// console.log(square(3));

//Immediatley invokable function expressions -- IIFEs
// (function() {     //IIFE
//   console.log('Hello');
//  })();


//more useful in design patterns
// (function (name) {
//   console.log('Hello ' + name);
// })('Sasanka');

//Property methods

const todo = {
  add: function(){
    console.log('Add todo.. ');
  },
  edit:function(id){
    console.log(`Edit todo ${id}`)
  }
}

todo.delete = function(){
  console.log('Delete todo..')
}
todo.add();
todo.edit(22);
todo.delete();