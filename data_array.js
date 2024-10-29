// Menggunakan object constructor
// const users = new Array(5);
// console.log(users); // output : [ <5 empty items> ]

// Menggunakan sintaks Array.from
const foo = Array.from("foo");
console.log(foo); // Output: ['f', 'o', 'o']

// Array.from dapat dimanfaatkan untuk menyalin array lainnya seperti berikut ini
const users = new Array("John", "Jane", "Jack", "Jill");
const customer = Array.from(users);
console.log(customer); // Output: ["John", "Jane", "Jack", "Jill"]

// Menggunakan array literal
const fruits = ["apple", "banana", "cherry", "", "grape"];
console.log(fruits); // Output: ['apple', 'banana', 'cherry', '', 'grape']

// Mengakses Element Array => dimulai dari angka 0 bukan 1 [0 - n]
const myArray = [42, 55, 30];
console.log(myArray[1]); // Output: 55

// Manipulasi Nilai Array
// Menggunakan indexing
const myArrayIndex = [1, 2, 3, 4, 5];
myArrayIndex[1] = 10;
console.log(myArrayIndex); // Output: [1, 10, 3, 4, 5]

// Menggunakan push = Nilai yang ditambahkan akan berada di element terakhir.
const myArrayPush = [1, 2, 3, 4, 5];
myArrayPush.push(6);
console.log(myArrayPush); // Output: [1, 2, 3, 4, 5, 6]

// Menghapus Element dan Data Array
const myArrayDelete = ["Android", "Data Science", "Web"];
delete myArrayDelete[1];
console.log(myArrayDelete); // Output: ['Android', <1 empty item>, 'Web']

// tetapi element-nya masih ada. Lalu, bagaimana cara untuk menghapus element dan datanya?
// Method splice membutuhkan dua parameter yaitu indeks dari element yang ingin dihapus
// dan jumlah element yang ingin dihapus.
const myArraySplice = ["Android", "Data Science", "Web"];
myArraySplice.splice(1, 1);
// myArraySplice.splice(1, 2); // Jika diconsole.log output : ['Android'] doang
console.log(myArraySplice); // Output: ['Android', 'Web']

// method shift = menghapus awalan saja
const myArrayShift = ["Android", "Data Science", "Web"];
myArrayShift.shift();
console.log(myArrayShift); // Output: ['Data Science', 'Web']

// method pop = menghapus akhiran saja
const myArrayPop = ["Android", "Data Science", "Web"];
myArrayPop.pop();
console.log(myArrayPop); // Output: ['Android','Data Science']

// Array Destructuring = digunakan untuk melihat isi dari array
const introduction = ["Hello", "Arsy"];
const [greeting, name] = introduction; // inroduction disini array yang ingin diambil nilainya.
console.log(greeting); // Output: Hello

// Reverse = method yang digunakan untuk membalikkan nilai array.
const myArrayReverse = ["Android", "Data Science", "Web"];
myArrayReverse.reverse();
console.log(myArrayReverse); // Output: [ 'Web', 'Data Science', 'Android' ]

// Sort = Secara default, method sort akan mengurutkan berdasarkan abjadnya.
const myArraySort = ["Web", "Android", "Data Science"];
myArraySort.sort();
console.log(myArraySort); // Output: [ 'Android', 'Data Science', 'Web' ]
