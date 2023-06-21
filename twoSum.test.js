const twoSum = require('./twoSum');

test('find indices of two numbers that add up to target', () => {
    expect(twoSum([7, 1, 5, 3, 6, 9], 8)).toEqual([0, 1]);
    expect(twoSum([4, 5, 6], 11)).toEqual([1, 2]);
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
});
