const countSmileys = (arr) => {
  let count = 0;
  const regex = /[:;][-~]?[)D]/;

  arr.forEach((item) => {
    if (item.match(regex)) {
      count += 1;
    }
  });

  return count;
};

module.exports = countSmileys;
