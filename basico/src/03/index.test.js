const main = require('./index.js');

it('main function exists', () => {
  expect(typeof main).toEqual('function');
});

it('0 strings starting with "x"', () => {
  expect(main([])).toEqual(0);
});

it('2 strings starting with "x"', () => {
  expect(main(['xiaomi', 'iphone', 'tables', '_underscore', 'Xanax'])).toEqual(2);
});

it('4 strings starting with "x"', () => {
  expect(main(
    [' whithSpace', 'xuxa', ' x_with_space', 'X_x_X_s', 'element', 'Xxinelo', 'card game', 'xanel', ' X' ]
  )).toEqual(4);
});