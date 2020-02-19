const main = require('./index.js');

it('main function exists', () => {
  expect(typeof main).toEqual('function');
});

it('0 numbers over the avarage', () => {
  expect(main([])).toEqual(0);
});

it('1 number over the avarage', () => {
  expect(main([25, 30, 45])).toEqual(1);
});

it('2 numbers over the avarage', () => {
  expect(main([65, 56, 79, 24])).toEqual(2);
});

it('3 numbers over the avarage', () => {
  expect(main(
    [25,25,25,25,25,25,25,25,25,25,25,25,50,50,50]
  )).toEqual(3);
});