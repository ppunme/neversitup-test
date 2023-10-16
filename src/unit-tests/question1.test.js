const permutations = require("../functions/question1");

test("Permutations without duplicates", () => {
  const str = "aabb";
  const expectedResult = ["aabb", "abab", "abba", "baab", "baba", "bbaa"];
  const result = permutations(str);
  expect(result).toEqual(expect.arrayContaining(expectedResult));
  expect(result.length).toBe(expectedResult.length);
});
