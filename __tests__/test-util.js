const assert = require('assert');
const evaParser = require('../src/parser/evaParser');

function test(eva, code, expected) {
  const exp = evaParser.parse(`(begin ${code})`);
  assert.strictEqual(eva.evalGlobal(exp), expected);
}

module.exports = { test };
