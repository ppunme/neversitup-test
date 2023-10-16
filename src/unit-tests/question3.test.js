const countSmileys = require("../functions/question3");

test("Return total number of smiling faces.", () => {
  const arr = [";D", ":-(", ":-)", ";~)"];
  const expectedResult = 3;
  expect(countSmileys(arr)).toBe(expectedResult);
});
