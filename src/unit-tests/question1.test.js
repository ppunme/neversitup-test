const permutations = require("../functions/question1");

test("Permutations without duplicates", () => {
  const str = "aabb";
  const result = permutations(str);
  const expectedResult = ["aabb", "abab", "abba", "baab", "baba", "bbaa"];
  expect(result).toEqual(expect.arrayContaining(expectedResult));
  expect(result.length).toBe(expectedResult.length);
});
