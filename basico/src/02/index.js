function main(nums) {

  if( nums.length === 0 ) {
    return 0;
  }

  const evenNumbers = nums.filter( num => ( num % 2 ) === 0 );
  return evenNumbers.length;
}

module.exports = main;