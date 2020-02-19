const main = require('./index.js');

it('main function exists', () => {
  expect(typeof main).toEqual('function');
});

it('Sum of all values of the first column is equal to 0', () => {
  expect(main([])).toEqual(0);
});

it('Sum of all values of the first column is equal to 100', () => {
  expect(main([
    [22, 45, 18],
    [4, 99, 37],
    [74, 66, 5]
  ])).toEqual(100);
});

it('Sum of all values of the first column is equal to 180', () => {
  expect(main([
    [1, 2, 3, 4, 5, 6],
    [55, 123, 34, 12, 245, 45],
    [93, 23, 90, 111, 187, 44],
    [22, 33, 44, 55, 66, 77],
    [9, 62, 7, 34, 42, 999],
  ])).toEqual(180);
});