const assert = require('assert');

const Environment = require('./Environment');

/**
 * Eva interpreter.
 */

class Eva {
  /**
   * Creates an Eva instance with the global environment.
   */
  constructor(global = new Environment()) {
    this.global = global;
  }

  /**
   * Evaluates an expression in the given environment.
   */
  eval(exp, env = this.global) {
    // ------------------------------------------------------------
    // Self-evaluating expressions:

    if (isNumber(exp)) {
      return exp;
    }

    if (isString(exp)) {
      return exp.slice(1, -1);
    }

    // ------------------------------------------------------------
    // Math operations:

    if (exp[0] === '+') {
      return this.eval(exp[1]) + this.eval(exp[2]);
    }

    if (exp[0] === '-') {
      return this.eval(exp[1]) - this.eval(exp[2]);
    }

    if (exp[0] === '*') {
      return this.eval(exp[1]) * this.eval(exp[2]);
    }

    if (exp[0] === '/') {
      return this.eval(exp[1]) / this.eval(exp[2]);
    }

    // ------------------------------------------------------------
    // Variable declaration:
    if (exp[0] === 'var') {
      const [_, name, value] = exp;
      return env.define(name, value);
    }

    // ------------------------------------------------------------
    // Variable access:
    if (isVariableName(exp)) {
      return env.lookup(exp);
    }

    throw `Unimplemented: ${JSON.stringify(exp)}`;
  }
}

function isNumber(exp) {
  return typeof exp === 'number';
}

function isString(exp) {
  return typeof exp === 'string' && exp[0] === '"' && exp.slice(-1) === '"';
}

function isVariableName(exp) {
  return typeof exp === 'string' && /^[a-zA-Z][a-zA-Z0-9_]*$/.test(exp);
}

// ------------------------------------------------------------
// Tests:

const eva = new Eva();

assert.strictEqual(eva.eval(1), 1);
assert.strictEqual(eva.eval(42), 42);
assert.strictEqual(eva.eval('"hello"'), 'hello');

// Math operations
assert.strictEqual(eva.eval(['+', 1, 5]), 6);
assert.strictEqual(eva.eval(['+', ['+', 3, 2], 5]), 10);
assert.strictEqual(eva.eval(['-', ['+', 3, 2], 5]), 0);
assert.strictEqual(eva.eval(['*', 3, 5]), 15);
assert.strictEqual(eva.eval(['/', 16, 4]), 4);
assert.strictEqual(eva.eval(['/', 12, 4]), 3);

// Set expressions
assert.strictEqual(eva.eval(['var', 'x', 10]), 10);
assert.strictEqual(eva.eval('x'), 10);
assert.strictEqual(eva.eval(['var', 'y', 100]), 100);
assert.strictEqual(eva.eval('y'), 100);

console.log('\x1b[32m', 'All assertions passed!');
