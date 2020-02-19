function main(strings) {
  const startingWithX = strings.filter( str => str.toUpperCase()[0] === 'X');
  return startingWithX.length;
}

module.exports = main;