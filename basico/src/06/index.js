function main(strings) {
  const stringsWithReplacedLetters = strings.map( str => 'x' + str.substr(1) );
  return stringsWithReplacedLetters;
}

module.exports = main;