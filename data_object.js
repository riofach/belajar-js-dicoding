// Membuat object dengan object literals sangat mudah yaitu cukup dengan menulis kurung kurawal {}.
// const products = { name: "Sepatu", price: 230000 };
// const user = {
//   name: "Dicoding",
//   "last name": "Indonesia",
//   age: 9,
// };
/*Kenapa kita menambahkan koma pada properti terakhir? 
Tujuannya adalah mempermudah kita untuk membacanya dan menghindari error 
karena lupa menulis koma ketika menambahkan properti baru setelah properti age */
// console.log(user.name); // Output: Dicoding
// console.log(user["last name"]); // Output: Indonesia

// Mengakses menggunakan object destructuring
const users = {
  name: "Dicoding",
  lastName: "Indonesia",
  age: 9,
};
delete user.age; // bisa didelete
delete user["age"];
const { name, lastName, isMale = false } = users;
console.log(name, lastName); // Output: Dicoding Indonesia
console.log(isMale); // Output: false

const user = {
  id: 24,
  email: "aras@dicoding.com",
  name: "Arsy",
  nickname: "Aras",
  username: "aras123",
  password: "secret",
};

// const { id, email } = user;

// console.log(id, email);

const id = user.id;
const email = user.email;

console.log(id, email);

const account = {
  balance: 1000,
  debt: 10,
};

account.balance = 2000;
console.log(account.balance); // Output: 2000
