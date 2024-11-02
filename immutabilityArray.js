// Secara umum, proses duplikasi data dapat dilakukan dengan mudah menggunakan sintaksis spread operator
function max(arrayOfNumber) {
  // menggunakan spread operator untuk menduplikasi nilai arrayOfNumber
  return [...arrayOfNumber].sort((a, b) => a - b).pop();
}

function registerEmail(person, email) {
  // menggunakan spread operator untuk menduplikasi nilai person
  return { ...person, email };
}

const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);

console.log(largest); // Output: 42
console.log(numbers); // Output: [ 10, 23, 24, 7, 42, 18 ]

const person = {
  name: "John",
  username: "johndoe",
};

const personWithEmail = registerEmail(person, "john@dicoding.com");

console.log(person); // Output: { name: 'John', username: 'johndoe' }
console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }

// Immutable Array Methods
// Array Map
// Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function.
const newArray = ["Harry", "Ron", "Jeff", "Thomas"].map((name) => `${name}!`);

console.log(newArray); // Output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

// Array Filter
/* Fungsi ini sangat berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada. 
Bila Anda memiliki kasus ingin menghilangkan beberapa item dalam array berdasarkan spesifikasi tertentu, fungsi ini sangatlah cocok digunakan. */
const truthyArray = [1, "", "Halo", 0, null, "Harry", 14].filter((item) =>
  Boolean(item)
);

console.log(truthyArray); // Output: [ 1, 'Halo', 'Harry', 14 ]

// Contoh lain, penggunaan filter untuk menyaring array dari objek siswa yang layak mendapatkan beasiswa berdasarkan nilai skor yang didapat.
/*const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const eligibleForScholarshipStudents = students.filter(
  (student) => student.score > 85
);

console.log(eligibleForScholarshipStudents);

/**
 * Output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 *
 */

// Array Reduce
// Array.reduce digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja.
// array.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore); // Output: 313
