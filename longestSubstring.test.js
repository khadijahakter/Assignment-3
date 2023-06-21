const lengthOfLongestSubstring = require('./longestSubstring');

test('Longest substring without repeating characters', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3); // "abc"
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1); // "b"
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3); // "wke"
    expect(lengthOfLongestSubstring('')).toBe(0); // ""
});
