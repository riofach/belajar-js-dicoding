// Pure Function
/* 1. Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama.
   2. Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut.
   Jika tidak memenuhi sifat tersebut, fungsi akan dikategorikan sebagai impure function.*/

// let value = 0;

// function addWith(addingValue) {
//   value += addingValue;
//   console.log(`Current value is ${value}`);
//   return value;
// }

// const result1 = addWith(1); // Output: Current value is 1
// const result2 = addWith(1); // Output: Current value is 2
// const result3 = addWith(1); // Output: Current value is 3

console.log(result1, result2, result3); // Output: 1, 2, 3
// code diatas adalah impure function
// karena menghasilkan nilai berbeda saat dipanggil padahal argumen sama

function addWith(value, addingValue) {
  return value + addingValue;
}

const result1 = addWith(0, 1);
console.log(`result1 is ${result1}`); // Output: result1 is 1

const result2 = addWith(result1, 1);
console.log(`result2 is ${result2}`); // Output: result2 is 2

const result3 = addWith(result2, 1);
console.log(`result3 is ${result3}`); // Output: result3 is 3

console.log(result1, result2, result3); // Output: 1, 2, 3
// code diatas adalah pure function
