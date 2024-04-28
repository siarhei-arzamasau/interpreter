const assert = require('assert');
const { test } = require('./test-util');

module.exports = (eva) => {
  // Math operations
  test(eva, `(+ 1 5)`, 6);
  test(eva, `(+ (+ 3 2) 5)`, 10);
  test(eva, `(- (+ 3 2) 5)`, 0);
  test(eva, `(* 3 5)`, 15);
  test(eva, `(/ 16 4)`, 4);
  test(eva, `(/ 12 4)`, 3);

  // Comparison:

  test(eva, `(> 1 5)`, false);
  test(eva, `(< 1 5)`, true);

  test(eva, `(>= 5 5)`, true);
  test(eva, `(<= 5 5)`, true);
  test(eva, `(=  5 5)`, true);
};
