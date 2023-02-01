const sum = require('../sum');
const assert = require('assert');

test("should return 3 when sum 1 + 2", () => {
  expect(sum(1,2)).toBe(3)
})
