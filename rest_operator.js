// Sering kali function menerima argument yang kemudian menjadi parameter.
/* Masalah terjadi ketika argument-nya sudah melebihi dua karena terlalu banyak argument 
pada function membuat kode menjadi tidak bersih (tidak sesuai prinsip clean code) sehingga 
sulit untuk dibaca dan di-maintenance. */

function myFunc(...manyMoreArgs) {
  console.log("manyMoreArgs", manyMoreArgs);
}

myFunc("one", "two", "three"); // manyMoreArgs [ 'one', 'two', 'three', 'four' ]

const hitung = (...manyMoreArgs) => console.log("manyMoreArgs", manyMoreArgs);
hitung("one", "two", "three", "four"); // manyMoreArgs [ 'one', 'two', 'three', 'four' ]

/* Rest parameter memungkinkan kita untuk menulis argument yang tak terbatas pada function. 
Rest parameter akan menangani argument tersebut menjadi sebuah array dan meneruskannya ke function. 
Jika ada parameter lain sebelumnya, nilainya tidak menjadi bagian dari array yang dihasilkan rest parameter. */
function myFunc2(number, ...manyMoreArgs) {
  console.log("number", number);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFunc2("one", "two", "three");
/* Output : number one
manyMoreArgs [ 'two', 'three' ] */

// method array.length
function myFunc3(...manyMoreArgs) {
  console.log(manyMoreArgs.length);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFunc3("one", "two", "three");
/* output : 3
manyMoreArgs [ 'one', 'two', 'three' ] */

// Dan dapat menggunakan method array
const favorites = ["Nasi Goreng", "Mie Goreng", "Ayam Bakar", "Tahu", "Tempe"];
const [first, second, ...rest] = favorites;

console.log(first);
console.log(second);
console.log(rest);

/**
 * output:
 * Nasi Goreng
 * Mie Goreng
 * [ 'Ayam Bakar', 'Tahu', 'Tempe' ]
 */
