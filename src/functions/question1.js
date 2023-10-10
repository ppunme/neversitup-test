const permutations = (str) => {
  const results = new Set();

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function recursive(arr, startIndex) {
    if (startIndex === arr.length - 1) {
      results.add(arr.join(""));
      return;
    }

    arr.forEach((_, i) => {
      swap(arr, startIndex, i);
      recursive([...arr], startIndex + 1);
      swap(arr, startIndex, i);
    });
  }

  const strArr = str.split("");
  recursive(strArr, 0);

  return [...results];
};

module.exports = permutations;
