const main = require('./index.js');

it('main function exists', () => {
  expect(typeof main).toEqual('function');
});

it('0 even numbers', () => {
  expect(main([])).toEqual(0);
});

it('5 even numbers', () => {
  expect(main([1,2,3,4,5,6,7,8,9,10])).toEqual(5);
});

it('4 even numbers', () => {
  expect(main([10,22,26,57,45,68,91])).toEqual(4);
});