import sum from "./index.js";
import assert from "node:assert";
import test from "node:test";

// Test angka positif
test("sum() menambahkan dua angka positif", () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(10, 20), 30);
});

// Test input bukan angka
test("sum() mengembalikan 0 jika salah satu atau kedua input bukan angka", () => {
  assert.strictEqual(sum("2", 3), 0);
  assert.strictEqual(sum(2, "3"), 0);
  assert.strictEqual(sum("a", "b"), 0);
  assert.strictEqual(sum({}, []), 0);
});

// Test angka negatif
test("sum() mengembalikan 0 jika salah satu atau kedua input adalah angka negatif", () => {
  assert.strictEqual(sum(-2, 3), 0);
  assert.strictEqual(sum(2, -3), 0);
  assert.strictEqual(sum(-2, -3), 0);
});

// Test input 0
test("sum() mengembalikan nilai yang benar jika salah satu atau kedua input adalah 0", () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
  assert.strictEqual(sum(0, 0), 0);
});
