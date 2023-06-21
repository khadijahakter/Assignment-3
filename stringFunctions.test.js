const stringFunctions = require("./stringFunctions")

describe('reverseString function', () => {
    test("reverseString('') => ''", () => {
        expect(stringFunctions.reverseString('')).toBe('');
    })

    test("reverseString('car') => 'rac'", () => {
        expect(stringFunctions.reverseString('car')).toBe('rac');
    })
})

describe("the isPalindrome(str) function", function() {
    test("isPalindrome('racecar') => 'racecar'", () => {
        expect(stringFunctions.isPalindrome('racecar')).toBe(true);
    })
  
    it("should return true if the input `str` is a palindrome", function() {
      let submittedSolution = stringFunctions.isPalindrome("racecar");
      expect(submittedSolution).toBe(true);;
    })
  
    it("should return false if the input `str` is not a palindrome", function() {
      let submittedSolution = stringFunctions.isPalindrome("banana");
      expect(submittedSolution).toBe(false);;
    })
  
    it("should pass auxillary test cases", function() {
      let submittedSolution = stringFunctions.isPalindrome;
      expect(submittedSolution("a")).toBe(true);
      expect(submittedSolution("aa")).toBe(true);
      expect(submittedSolution("hi")).toBe(false);
      expect(submittedSolution("hello")).toBe(false);
      expect(submittedSolution("train")).toBe(false);
    })
  })