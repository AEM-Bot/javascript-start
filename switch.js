const color = 'red';

switch (color) {
  case 'red':
    console.log('RED');
    break;
  case 'blue':
    console.log('BLUE');
    break;
  default:
    console.log('Color is neither blue or red');
    break;
}

let day;
switch (new Date().getDay()) {
  case 0:
    console.log('SUNDAY');
    break;
  case 1:
    console.log('MONDAY');
    break;
  case 2:
    console.log('TUESDAY');
    break;
  case 3:
    console.log('WEDNESDAY');
    break;
  case 4:
    console.log('THURSDAY');
    break;
  case 5:
    console.log('FRIDAY');
    break;
  case 6:
    console.log('SATURDAY');
    break;
  default:
    console.log("ERROR OCCURRED");
    break;
}