let isZero = false;
let myArr = [];
for (let i = 2; i < 200; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isZero = true;
      break;
    } else {
      isZero = false;
    }
  }
  if (isZero == false) {
    myArr.push(i);
  }
}
console.log(myArr);
