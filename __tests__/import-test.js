const { test } = require('./test-util');

module.exports = (eva) => {
  test(
    eva,
    `
      (import Math)

      ((prop Math abs) (- 10))
    `,
    10
  );


  // TODO: make an improvement for the case:  `(import (abs square) Math)`
  test(
    eva,
    `
      (var abs (prop Math abs))

      (abs (- 10))
    `,
    10
  );

  test(
    eva,
    `
      (prop Math MAX_VALUE)
    `,
    1000
  );
};
