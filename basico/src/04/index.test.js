const main = require('./index.js');

it('main function exists', () => {
  expect(typeof main).toEqual('function');
});

it('sum of all values with odd index is equal to 0', () => {
  expect(main([])).toEqual(0);
});

it('sum of all values with odd index is equal to 30', () => {
  expect(main([2, 3, 5, 9, 15, 18, 21])).toEqual(30);
});

it('sum of all values with odd index is equal to 113', () => {
  expect(main([6, 58, 14, 32, 15, 1, 69, 22])).toEqual(113);
});