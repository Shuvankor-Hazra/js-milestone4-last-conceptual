function findLargest(values) {
  if (!Array.isArray(values)) {
    return "Provide an array!";
  }
  let max = values[0];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== "number") {
      return "all values should be numbers!";
    } else {
      if (values[i] > max) {
        max = values[i];
      }
    }
  }
  return max;
}
const numbers = [3, 12, 4, true, 0, 53, 2, "5", 6];
console.log(findLargest(numbers));
