function categorizeNumber(input) {
  /**
   * TODO:
   * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
   * Dengan ketentuan sebagai berikut:
   * 1. Jika input bukan number, bangkitkan (throw) error.
   * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
   * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
   * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
   * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
   * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
   */
  // cek error
  if (!Number.isInteger(input)) {
    throw new Error("Input harus berupa bilangan bulat");
  }

  // cek Input negatif
  if (input === 0) {
    return "Nol";
  } else if (input < 0) {
    return "Negatif";
  }

  // Cek Input Prima
  if (isPrime(input)) {
    return "Prima";
  }

  // Cek Input ganjil genap
  return input % 2 === 0 ? "Genap" : "Ganjil";
}

// Fungsi Cek Prima
function isPrime(bilPrima) {
  if (bilPrima <= 1) return false;
  for (let i = 2; i < bilPrima; i++) {
    if (bilPrima % i === 0) return false;
  }
  return true;
}

// Contoh
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
  categorizeNumber("abc");
} catch (error) {
  console.log(error.message);
} // Output: "Input harus berupa bilangan bulat"
