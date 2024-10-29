// Function Celcius to Fahrenheit tanpa nilai default
// function convertCelsiusToFahrenheit(temperature) {
//   const temperatureInFahrenheit = (9 / 5) * temperature + 32;

//   console.log("Hasil konversi:", temperatureInFahrenheit);
// }

// const temperatureInCelsius = 90;

// Hanya menampilkan nilai function
// console.log(convertCelsiusToFahrenheit);
// Output => [Function: convertCelciusToFahrenheit]

// Akan menjalankan isi function
// convertCelsiusToFahrenheit(temperatureInCelsius);
// Output => Hasil konversi: 194

// Menggunakan nilai default
// function convertCelsiusToFahrenheit(temperature = 50) {
//   const temperatureInFahrenheit = (9 / 5) * temperature + 32;

//   console.log("Hasil konversi:", temperatureInFahrenheit);
// }

// // Menggunakan default value
// convertCelsiusToFahrenheitDefault(); // output: Hasil konversi: 122

// // Menggantikan default value
// convertCelsiusToFahrenheitDefault(90); // output: Hasil konversi: 194

// Return value
// function sumNumbers(a, b) {
//   const result = a + b;
//   return result;
// }

// const result = sumNumbers(2, 4);
// console.log("2 + 4:", result);

/* Output:
2 + 4: 6
*/

// Function statement Menggunakan Return value
// function convertCelsiusToFahrenheit(temperature) {
//   const result = (9 / 5) * temperature + 32;
//   return result;
// }

// const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
// console.log("Hasil konversi:", temperatureInFahrenheit);

/* Output:
Hasil konversi: 194
*/

// Function expression
// const convertCelsiusToFahrenheit = function (temperature) {
//   const result = (9 / 5) * temperature + 32;
//   return result;
// };

// const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
// console.log("Hasil konversi:", temperatureInFahrenheit);

/* Output:
Hasil konversi: 194
*/

// First-Class Citizen = nilai argumen function lain
function multiply(a, b) {
  return a * b;
}

function calculate(operation, numA, numB) {
  return operation(numA, numB);
}

const result = calculate(multiply, 2, 4);
console.log(result);

/* Output:
8
*/

// nilai function dari suatu function
function multiplier(x) {
  return function (num) {
    return x * num;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(11));

/* Output:
20
33
*/
