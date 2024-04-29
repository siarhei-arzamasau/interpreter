const { test } = require('./test-util');

/**
 * (for init
 *      condition
 *      modifier
 *      body)
 */
// For-loop: (for init condition modifier body)
//
// Syntactic sugar for: (begin init (while condition (begin body modifier)))

module.exports = (eva) => {
  // test(
  //   eva,
  //   `
  //   (begin
      
  //     (for (var x 10)
  //          (> x 0)
  //          (-- x)
  //          (print x)
  //     )
  //   )
  // `,
  //   1
  // );
};
