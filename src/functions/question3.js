const countSmileys = (arr) => {
  let count = 0;
  const format = /[:;][-~]?[)D]/;

  arr.forEach((item) => {
    if (item.match(format)) {
      count += 1;
    }
  });

  return count;
};

module.exports = countSmileys;
