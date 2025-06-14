function duplicate(array) {
  let sortarr = array.sort((a, b) => a - b);
  let output = [];
  for (let i = 0; i < sortarr.length; i++) {
    if (sortarr[i] === sortarr[i + 1]) {
      output.push(sortarr[i]);
    }
  }
  return output;
}

console.log(duplicate([0, 0, 1, 1, 2, 2, 3, 3, 4]));
