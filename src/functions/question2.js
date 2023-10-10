const findOddInt = (arr) => {
  const obj = {};
  arr.forEach((item) => {
    obj[item] = (obj[item] || 0) + 1;
  });

  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
};

module.exports = findOddInt;
