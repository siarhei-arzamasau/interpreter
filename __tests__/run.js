const Eva = require('../src/index');
const Environment = require('../src/Environment');

const tests = [
  require('./self-eval-test'),
  require('./math-test'),
  require('./variables-test'),
  require('./block-test'),
  require('./if-test'),
  require('./while-test'),
];

// ------------------------------------------------------------
// Tests:

const eva = new Eva(
  new Environment({
    null: null,

    true: true,
    false: false,

    VERSION: '0.1',
  })
);

tests.forEach((test) => test(eva));

console.log('\x1b[32m', 'All assertions passed!');
