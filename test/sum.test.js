const module = require('../sum');

test("should return 3 when sum 1 + 2", () => {
  expect(module.sum(1,2)).toBe(3)
})
