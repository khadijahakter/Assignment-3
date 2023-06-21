const mathFunctions = require("./mathFunctions");

describe("Math function returns math functions: add, subtract, multiply, divide", () => {
  test("add(1, 2) adds 1 + 2 to equal 3", () => {
    expect(mathFunctions.add(1, 2)).toEqual(3);
  })

  test("add('string', 2) adds 'string' + 2 to return null", () => {
    expect(mathFunctions.add('string', 2)).toEqual(null);
  })

  test("subtract(1, 2) subtract 1 - 2 to equal -1", () => {
    expect(mathFunctions.subtract(1, 2)).toEqual(-1);
  })

  test("multiply(1, 2) multiplies 1 * 2 to equal 2", () => {
    expect(mathFunctions.multiply(1, 2)).toEqual(2);
  })

  test("divide(1, 2) divides 1 / 2 to equal 0.5", () => {
    expect(mathFunctions.divide(1, 2)).toEqual(0.5);
  })

  test("divide(2, 0) divides 2 / 0 to equal infinity", () => {
    expect(mathFunctions.divide(2, 0)).toEqual(Infinity);
  })

})