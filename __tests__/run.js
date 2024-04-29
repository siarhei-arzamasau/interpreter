const Eva = require('../src/index');

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
  require('./decrement-test'),
  require('./for-test'),
];

// ------------------------------------------------------------
// Tests:

const eva = new Eva();

tests.forEach((test) => test(eva));

// eva.eval(['print', '"Hello"', '"World!"']);

console.log('\x1b[32m', 'All assertions passed!');
