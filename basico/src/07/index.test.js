const main = require('./index.js');

it('main function exists', () => {
  expect(typeof main).toEqual('function');
});

it('new vector with opposite number is like this', () => {
  expect(main([22, -33, 44, -55, 66])).toEqual([-22, 33, -44, 55, -66]);
});

it('new vector with opposite number is like this', () => {
  expect(main([-44, -52, 92, -2, 84])).toEqual([44, 52, -92, 2, -84]);
});

it('new vector with opposite number is like this', () => {
  expect(main([1, 2, 3, 4, 5, 6])).toEqual([-1, -2, -3, -4, -5, -6]);
});