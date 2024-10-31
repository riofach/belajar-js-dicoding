const productMap = new Map([
  ["shoes", 500],
  ["cap", 350],
  ["jeans", 250],
]);

console.log(productMap); // output = Map(3) { 'shoes' => 500, 'cap' => 350, 'jeans' => 250 }

// Menyimpan Nilai di Map = Method Set
// Set menerima dua nilai yang pertama adalah keynya dan yang kedua adalah valuenya.
const mapSet = new Map();
mapSet.set("name", "aras");
mapSet.set(1, "number one");
console.log(mapSet); // Map(1) { 1 => 'number one' } Map(2) { 'name' => 'aras', 1 => 'number one' }

// Mengakses Nilai di Map = Method Get
const mapGet = new Map();
mapGet.set("name", "aras");
console.log(mapGet.get("name")); // Output: aras

// Menghapus Nilai di Map = method Delete
const mapDelete = new Map();
mapDelete.set("name", "aras");
mapDelete.set("last name", "opraza");
mapDelete.delete("last name");
console.log(mapDelete); // Map(1) { 'name' => 'aras' }
