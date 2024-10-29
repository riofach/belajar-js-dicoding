let temperatureInFahrenheit = null;

// Deklarasi function dengan Regular Function
const convertCelsiusToFahrenheitUsingRegularFunction = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingRegularFunction(90);
console.log("Hasil konversi:", temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194

// Deklarasi Function dengan Arrow Function
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction(90);
console.log("Hasil konversi:", temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194

// Arrow function versi ringkas
const convertCelsiusToFahrenheitInConciseSyntax = (temperature) =>
  (9 / 5) * temperature + 32;

temperatureInFahrenheit = convertCelsiusToFahrenheitInConciseSyntax(90);
console.log("Hasil konversi:", temperatureInFahrenheit);
/* Note  
arrow function dengan gaya seperti ini hanya mampu menampung satu return value. 
Silakan bungkus dengan tanda kurung kurawal buka-tutup jika memerlukan banyak kode.
*/
