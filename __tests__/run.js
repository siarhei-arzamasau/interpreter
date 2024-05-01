const Eva = require('../src/index');
// const Environment = require('../src/Environment');
const evaParser = require('../src/parser/evaParser');

const tests = [
  require('./self-eval-test'),
  require('./math-test'),
  require('./variables-test'),
  require('./block-test'),
  require('./if-test'),
  require('./while-test'),
  require('./built-in-function-test'),
  require('./user-defined-functions-test'),
  require('./lambda-function-test'),
  require('./switch-test'),
  require('./increment-test'),
  require('./increment-via-variable-test'),
  require('./decrement-test'),
  require('./decrement-via-variable-test'),
  require('./for-test'),
  require('./class-test'),
];

// ------------------------------------------------------------
// Tests:

const eva = new Eva();

function exec(code) {
  const exp = evaParser.parse(code);
  return eva.eval(exp);
}

tests.forEach((test) => test(eva));

console.log('\x1b[32m', 'All assertions passed!');
