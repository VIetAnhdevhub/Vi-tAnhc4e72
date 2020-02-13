// let a = prompt("enter a");
// let b = prompt("enter b");
// let c = prompt("enter c");
// let delta = b * b - 4 * a * c;
// if (delta < 0) {
//   console.log("phuong trinh vo nghiem");
// } else if (delta === 0) {
//   console.log(`phuong trinh co mot nghiem la ${(-b / 2) * a}`);
// } else if (delta > 0) {
//   let nghiem1 = (-b + Math.sqrt(delta)) / (2 * a);
//   let nghiem2 = (-b - Math.sqrt(delta)) / (2 * a);
//   console.log(`phuong trinh co 2 nghiem la ${nghiem1} ${nghiem2}`);
// }

const email = "vietanhvudinhhd@gmail.com";
const password = "vietanh123";
let inputEmail = prompt("Enter email");
if (inputEmail === email) {
  let inputPassword = prompt("Enter password");
  if (inputPassword === password) {
    console.log("You have loggined");
  } else {
    console.log("please enter password again");
  }
} else {
  console.log("please enter email again");
}
