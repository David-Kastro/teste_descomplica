function main(nums) {
  if( nums.length === 0 ) {
    return 0;
  }

  const sumValuesOddIndex = nums.reduce( (a, b, index) => (index % 2) === 0 ? a : a + b ) - nums[0];
  return sumValuesOddIndex;
}

module.exports = main;