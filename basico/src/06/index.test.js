const main = require('./index.js');

it('main function exists', () => {
  expect(typeof main).toEqual('function');
});

it('new vector is like this', () => {
  expect(main(['teste', ' _withSpace', 'book'])).toEqual(['xeste', 'x_withSpace', 'xook']);
});

it('new vector is like this', () => {
  expect(main(['tiaomi', ' -men', 'sanax', 'zamarin' ])).toEqual(['xiaomi', 'x-men', 'xanax', 'xamarin']);
});