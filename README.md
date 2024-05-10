# Eva interpreter

In Eva interpreter implemented most basic JavaScript operations, such as:

- JavaScript primitives
- Variables
- Math operations
- Functions
- Classes

Implementation of Eva based on **Backus–Naur form**.

## Installation

Run `npm ci`

## Usage
The Eva interpreter might eval the code from the command line:

`npm run eval '(print (+ 2 2))'` would print in console `4`

`npm run eval '(print ((lambda (x) (* x x))5))'` would print in console `25`

Also your can execute code from source file:

`npm run eval-src ./bin/test.eva`

## Tests

Run `npm test`
