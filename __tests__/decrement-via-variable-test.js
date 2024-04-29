const { test } = require('./test-util');

module.exports = (eva) => {
  test(
    eva,
    `
    (begin
      
      (var x 10)
      (var y 5)

      (-= x y)

    )
  `,
    5
  );
};
