var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var b = [2, 4, 5, 7, 11, 15];
for (let i of a) {
  for (let j of b) {
    if (i == j) {
      console.log(i, j);
    }
  }
}
