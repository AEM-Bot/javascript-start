// //window is global object -- new fetch api, navigator etc
// // WINODW METHODS / OBJECTS / PROPERTIES
// // window.console.log(123); 

// //Alert
// // alert('Hello World');

// //Prompt
// // const input = prompt();
// // alert(input);

// //confirm
// // if(confirm('Are you sure')){
// //   console.log('YES');
// // } else{
// //   console.log('NO');
// // }

// let val;

// //Outer height and width
// // val = window.outerHeight;
// // val = window.outerWidth;

// //Iner height and width
// // val = window.innerHeight;
// // val = window.innerWidth;


// //Scroll Points
// // val=window.scrollY;
// // val = window.scrollX;


// //Location Object
// // val = window.location;
// // val = window.location.hostname;
// // val = window.location.port;
// // val = window.location.href;
// // val = window.location.search; // Query String in the URL

// //Redirect
// // window.location.href = 'https://www.google.com';

// // //Reload
// // window.location.reload();


// //History Object
// // window.history.go(-2);
// // val = window.history.length;

// // //Navigator Object -- related to Browser not console 
// // val = window.navigator;
// // val = window.navigator.appName;
// // val = window.navigator.appVersion;
// // val = window.navigator.userAgent;
// // val = window.navigator.platform;
// // val = window.navigator.vendor;
// // val = window.navigator.language;

// // ///Output
// // console.log(val)


//Scope 
//Let const and Var

//Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }
// test();

// if (true) {
//   //Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Block Scope ', a, b, c);
// }

// for (var a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }
console.log('Global Scope: ', a, b, c);