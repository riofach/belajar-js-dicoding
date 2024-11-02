// File main.njs
/**
 * TODO:
 * 1. Impor fungsi unique dari utils.mjs secara default
 * 2. Impor fungsi splitString dari utils.mjs secara named
 *
 * Catatan.
 * Jangan ubah kode apa pun yang sudah tersedia sebelumnya
 */
import unique from "./utils.mjs";
import { splitString } from "./utils.mjs";

const string = "saippuakivikauppias";
const array = splitString(string);
const uniqueArray = unique(array);

console.log(string);
console.log(array);
console.log(uniqueArray);

// File utils.mjs
function splitString(string) {
  if (typeof string !== "string") {
    return [];
  }

  return Array.from(string);
}
export { splitString };

export default function unique(array) {
  const set = new Set(array);
  return Array.from(set.values());
}

/**
 * TODO:
 * 1. Ekspor fungsi splitString secara named export
 * 2. Ekspor fungsi unique secara default export
 */
