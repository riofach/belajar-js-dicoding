// File import dan export terhubung
import myFunction from "./export.mjs";
myFunction();

// import { name, email, age } from "./export.mjs";
// console.log(name);
// console.log(email);
// console.log(age);

// Jika function/method/variable yang ingin kita import sangat banyak, kita dapat menggunakan import *.
import * as variable from "./export.mjs";
console.log(variable.name);
console.log(variable.email);
console.log(variable.age);

// Error sering terjadi karena myFunction diimpor sebanyak dua kali.
//Untuk mengatasi hal tersebut, gunakanlah import alias.
// import { myFunction as userFunction } from './user.mjs';
// import { myFunction as customerFunction } from './customer.mjs';

// userFunction();
// customerFunction();
