//  tipe data number (age) secara otomatis dikonversi menjadi string karena operator + digunakan untuk penggabungan string
const age = 20;
const message = "Umurku: " + age;

console.log(message); // output: Umurku: 20

// strNumber (yang merupakan string) dikonversi menjadi number karena operator * digunakan untuk operasi aritmetika
const strNumber = "123";
const result = strNumber * 2;

console.log(result); // output: 246

//
const bool = true;
const result2 = 1 + bool;

console.log(result2); // output: 2
