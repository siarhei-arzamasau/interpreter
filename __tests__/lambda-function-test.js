const { test } = require('./test-util');

module.exports = (eva) => {
  test(
    eva,
    `
    (begin
      
      (def onClick (callback)
        (begin
          (var x 10)
          (var y 20)
          (callback (+ x y))
        )
      )

      (onClick (lambda (data) (* data 10)))

    )
  `,
    300
  );

  // Immediatly-invoked lambda expression - IILE
  test(
    eva,
    `
    ((lambda (x) (* x x)) 2)
  `,
    4
  );

  // Save lambda to a variable
  test(eva,
  `
    (begin
      (var square (lambda (x) (* x x)))
      (square 2)
    )
  `,
  4)
};
