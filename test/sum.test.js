const sum = require('../sum');
const assert = require('assert');

describe('test sum', function () {
  it('should return 3 when sum 1 + 2', function () {
    assert.equal(sum(1, 2), 4);
  });
});