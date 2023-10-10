const countSmileys = require("../functions/question3");

test("Return total number of smiling faces.", () => {
  const arr = [";D", ":-(", ":-)", ";~)"];
  const result = countSmileys(arr);
  const expectedResult = 3;
  expect(result).toBe(expectedResult);
});
