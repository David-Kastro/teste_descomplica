function main(matrix) {

  if( matrix.length === 0 ) {
    return 0;
  }

  const firstColumValues = matrix.map( nums => nums[0] );
  const firstColumValuesSum = firstColumValues.reduce( (a, b) => a + b );

  return firstColumValuesSum;
}

module.exports = main;