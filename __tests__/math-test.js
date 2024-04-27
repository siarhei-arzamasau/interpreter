const assert = require('assert');

module.exports = (eva) => {
  // Math operations
  assert.strictEqual(eva.eval(['+', 1, 5]), 6);
  assert.strictEqual(eva.eval(['+', ['+', 3, 2], 5]), 10);
  assert.strictEqual(eva.eval(['-', ['+', 3, 2], 5]), 0);
  assert.strictEqual(eva.eval(['*', 3, 5]), 15);
  assert.strictEqual(eva.eval(['/', 16, 4]), 4);
  assert.strictEqual(eva.eval(['/', 12, 4]), 3);
};
