//SOLUTION 1

const num = 3849;

function reverseGivenInteger(num) {
  return parseInt(num.toString().split("").reverse().join(""));
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);

//SOLUTION 2

let num2 = 3849;
let result = 0;

function reverseGivenInteger2() {
  while (num2 > 0) {
    lastNum = num2 % 10;
    result = result * 10 + lastNum;
    number = Math.floor(num2 / 10);
  }

  return;
}

console.log(`Reversed integer is: ${reverseGivenInteger2()}`);
