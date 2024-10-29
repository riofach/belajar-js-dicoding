// penggunaan unary, binary, dan ternary operator.
let age = 25;

// Unary operator
typeof age;

// Binary operator
5 + 4;

10 / 2;
age = 30;

// Ternary operator (conditional operator)
age < 18 ? "You are too young!" : "Welcome onboard!";

6 + 5; // mengembalikan 11
7 - 2; // mengembalikan 5
8 * 5; // mengembalikan 40
10 / 3; // mengembalikan 3.33
10 % 2; // mengembalikan 0
2(10 + 2); // mengembalikan 24

/* Sama (==) Membandingkan dua operan, tanpa memperhatikan tipe data,  operasi akan mengembalikan true, sebaliknya false.
1 == 1 mengembalikan true. 1 == '1' mengembalikan true. */

/* Tidak Sama (!=) Membandingkan dua operan, tanpa memperhatikan tipe data. operasi akan mengembalikan true, sebaliknya false. 
1 != 1 mengembalikan false. */

/* Identik (===) Membandingkan dua operan beserta tipe datanya. operasi akan mengembalikan true, sebaliknya false.
1 === 1 mengembalikan true. 1 === '1' mengembalikan false. */

/* AND (&&) Binary operator yang menghasilkan nilai true apabila kedua operan bernilai true (atau truthy) */

/* OR ( || ) Binary operator yang menghasilkan nilai true apabila salah satu operan bernilai true (atau truthy). */

/* NOT (!) Unary operator yang mengubah operan bernilai true menjadi false dan false menjadi true. */

// AND
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log(5 === 5 && 3 < 5); // true

// OR
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log(5 === 5 || 3 > 5); // true

// NOT
console.log(!true); // false
console.log(!false); // true
