import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("Testing function sum", (funcSum) => {
  assert.strictEqual(sum(2, 3), 5, "sum(2, 3) = return 5");

  assert.strictEqual(sum(-1, -1), -2, "sum(-1, -1) = return -2");

  assert.strictEqual(sum(0, 0), 0, "sum(0, 0) = return 0");

  assert.strictEqual(sum(100, 200), 300, "sum(100, 200) = return 300");
});
