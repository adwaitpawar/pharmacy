const assert = require('assert');

describe('Example Test Suite', () => {
  it('should return true', () => {
    assert.strictEqual(true, true);
  });

  it('should add two numbers correctly', () => {
    const result = 1 + 2;
    assert.strictEqual(result, 3);
  });
});
