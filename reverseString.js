function reverseString (str) {
    let reversed = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversed.push(str[i]);
    }
    return reversed.join('');
}

module.exports = reverseString;
