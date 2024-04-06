const assert = require('assert');

/**
 * Eva interpreter.
 */

class Eva {
  eval(exp) {
    if (isNumber(exp)) {
      return exp;
    }
    
    if (isString(exp)) {
      return exp.slice(1, -1);
    }

    throw 'Unimplemented';
  }
}

function isNumber(exp) {
  return typeof exp === 'number';
}

function isString(exp) {
  return typeof exp === 'string' && exp[0] === '"' && exp.slice(-1) === '"';
}

// ------------------------------------------------------------
// Tests:

const eva = new Eva();

assert.strictEqual(eva.eval(1), 1);
assert.strictEqual(eva.eval(42), 42);
assert.strictEqual(eva.eval('"hello"'), 'hello');

console.log('\x1b[32m', 'All assertions passed!');
