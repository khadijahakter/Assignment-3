const reverseString = require('./reverseString');

test('Reverse the string ', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('OpenAI')).toBe('IAnepO');
    expect(reverseString('racecar')).toBe('racecar');
});