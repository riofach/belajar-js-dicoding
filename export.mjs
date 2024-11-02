// File import dan export terhubung
export default function myFunction() {
  console.log("Ini adalah function export default.");
}

// misal user.mjs
// export function myFunction() {
//   console.log("Ini dari user.js");
// }

// misal customer.mjs
// export function myFunction() {
//   console.log("Ini dari customer.js");
// }

// Dibawah ini pure materi export
const name = "John";
const email = "john@gmail.com";
const age = 25;

export { name, email, age };
