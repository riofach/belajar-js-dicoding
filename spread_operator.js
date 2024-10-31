// igunakan untuk menyebarkan nilai yang ada pada object dan array.
// Object
const obj1 = { name: "Dicoding" };
const obj2 = { lastName: "Indonesia", address: "Jl. Batik Kumeli No 50" };
const newObj = { ...obj1, ...obj2 };

console.log(newObj); // Output: { name: 'Dicoding', lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' }
// spread operator dapat mempermudah menggabungkan dua object.

const originalObj = { name: "Dicoding", age: 9 };
const copiedObj = { ...originalObj };

console.log(copiedObj); // Output: { name: 'Dicoding', age: 9 }
// spread operator juga mempermudah untuk menyalin object seperti berikut ini.

// Array
const array1 = ["Dicoding"];
const array2 = ["Indonesia", "Jl. Batik Kumeli No 50"];
const newArray = [...array1, ...array2];

console.log(newArray); // Output: ['Dicoding', 'Indonesia', 'Jl. Batik Kumeli No 50']

const original = ["apple", "banana", "cherry"];
const copy = [...original];

console.log(copy); // Output: ['apple', 'banana', 'cherry']
