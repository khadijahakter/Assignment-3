const maxArea = require('./maxArea'); 

describe('Container With Most Water', () => {
    test('maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) should return 49', () => {
        expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    });

    test('maxArea([4, 3, 2, 1, 4]) should return 16', () => {
        expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
    });

    test('maxArea([1, 2, 1]) should return 2', () => {
        expect(maxArea([1, 2, 1])).toBe(2);
    });
});