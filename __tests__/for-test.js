const { test } = require('./test-util');

/**
 * (for init
 *      condition
 *      modifier
 *      body)
 */

module.exports = (eva) => {
  test(
    eva,
    `
    (begin
      
      (for (var x 10)
           (> x 0)
           (-- x)
           (print x)
      )
    )
  `,
    0
  );
};
