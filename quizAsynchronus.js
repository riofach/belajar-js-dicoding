// support.mjs
const API = {
  fetch(delay, simulateError = false) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (simulateError) {
          return reject(new Error(`Error from delay ${delay}`));
        }

        return resolve(`Data from delay ${delay}`);
      }, delay);
    });
  },
};

const sampleErrorData = [
  {
    delay: 100,
    simulateError: false,
  },
  {
    delay: 50,
    simulateError: true,
  },
];

const sampleSuccessData = [
  {
    delay: 100,
    simulateError: false,
  },
  {
    delay: 50,
    simulateError: false,
  },
];

export { API, sampleErrorData, sampleSuccessData };

// main.mjs
import { API, sampleErrorData, sampleSuccessData } from "./support.mjs";

/**
 * TODO:
 * Lengkapi fungsi processData di bawah ini dengan ketentuan:
 * 1. Mengembalikan data dari pemanggilan API.fetch berdasarkan argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise reject.
 *
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */
async function processData(data) {
  // kode di bawah hanya untuk melihat nilai data. Silakan hapus untuk menjawab kuis.
  const results = [];

  for (const item of data) {
    try {
      const result = await API.fetch(item.delay, item.simulateError);
      results.push(result);
    } catch (error) {
      // Jika terjadi error, lempar ulang error tersebut
      throw error;
    }
  }

  return results;
}

processData(sampleErrorData).then(console.log).catch(console.log); // Throw exception: Error from delay 50
processData(sampleSuccessData).then(console.log).catch(console.log); // expected output: ['Data from delay 100', 'Data from delay 50']
