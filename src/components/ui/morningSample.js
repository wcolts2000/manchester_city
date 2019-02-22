// v1.0 for loop
function commonElements(arr1, arr2) {
  const matches = [];
  let i,
    len = arr1.length;

  for (i = 0; i < len; i++) {
    if (arr2.includes(arr1[i])) {
      if (!matches.includes(arr1[i])) {
        matches.push(arr1[i]);
      }
    }
  }
  return matches;
}

console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6]));
