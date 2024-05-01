const assert = require('assert');
const evaParser = require('../src/parser/evaParser');

function test(eva, code, expected) {
  const exp = evaParser.parse(code);
  assert.strictEqual(eva.eval(exp), expected);
}

module.exports = { test };
