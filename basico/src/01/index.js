function main(nums) {

  if( nums.length === 0 ) {
    return 0;
  }

  const avarage = nums.reduce( (a, b) => a + b ) / nums.length;
  const numbersAboveAvarage = nums.filter( num => num > avarage );
  return numbersAboveAvarage.length;
}

module.exports = main;