const permutations = require("../questions/question1");

test("Permutations without duplicates", () => {
  const str = "abb";
  const result = permutations(str);
  const expectedResult = ["abb", "bab", "bba"];
  expect(result).toEqual(expect.arrayContaining(expectedResult));
  expect(result.length).toBe(expectedResult.length);
});
