function highAndLow(numbers) {
  let arr = numbers.split(' ');
  let sorted = arr.sort(function (a, b) {
    return b - a;
  });
  let result = sorted[0] + " " + sorted[sorted.length - 1];
  return result;
}
console.log(highAndLow("1 9 3 4 -5"));
