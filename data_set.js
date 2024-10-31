// Data dengan Set
// set tidak memiliki key dan indeks ketika menyimpan data.
// Selain itu, data yang disimpan di dalam set akan bernilai unik artinya
// tidak akan ada data yang duplikat.
const mySet = new Set([1, 2, 3]);
console.log(mySet); // output : Set(3) { 1, 2, 3 }

// Menyimpan nilai set = Method add
const setAdd = new Set();
setAdd.add(1);
setAdd.add("Apple");
setAdd.add(1);
setAdd.add("Apple");

console.log(setAdd); // Output: Set { 1, 'Apple' }
// walau double, tetapi dioutput hanya 1

// Mengakses Nilai di Set = hanya bisa menggunakan looping
const setAkses = new Set();
setAkses.add(1);
setAkses.add(2);

for (const number of setAkses) {
  console.log(number); // Output: 1, 2
}

setAkses.forEach((value) => console.log(value)); // Output: 1, 2

// Menghapus Nilai di Set = Delete
const setDelete = new Set();
setDelete.add(1);
setDelete.add(2);
setDelete.delete(1);

console.log(setDelete); // Set(1) { 2 }
/* Ingat bahwa set tidak memiliki urutan atau index, jadi argumen yang dimasukkan 
ke dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya. */
