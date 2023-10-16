const findOddInt = require("../functions/question2");

test("Return the integer with odd count", () => {
  const arr = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
  const expectedResult = 4;
  expect(findOddInt(arr)).toBe(expectedResult);
});
