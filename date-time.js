let val;

const today = new Date();
let birthday = new Date('9-30-1992 11:05:00');
birthday = new Date('September 30 1992')

val = today.getMonth(); //0 based counter
val = today.getDate();
val = today.getDay(); // 0 based counter
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1990);
birthday.setHours(3);
birthday.setMinutes(22);
birthday.setSeconds(12);


//Output
console.log(val);
console.log(birthday);