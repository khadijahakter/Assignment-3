function longestSubstring(str) {
    let seen = [];
    let max = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let index = seen.indexOf(char);

        if (index !== -1) {
            seen.splice(0, index + 1);
        }

        seen.push(char);
        max = Math.max(max, seen.length);
    }

    return max;
}

module.exports = longestSubstring;
