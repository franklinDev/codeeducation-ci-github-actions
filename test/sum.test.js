const mod = require('../sum');

test("should return 3 when sum 1 + 2", () => {
  expect(mod.sum(1,2)).toBe(3)
})
