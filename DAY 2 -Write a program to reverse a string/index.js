//SOLUTION ONE
//String can also be reversed by converting it to array, then joining it after reversing
const str = "JavaScript is awesome";

function reverseAString(str) {
  const arrayOfLetters = str.split("");
  const reversedArray = arrayOfLetters.reverse();
  const newStr = reversedArray.join("");
  return newStr;
}

console.log(`Reversed string is: ${reverseAString(str)}`);

//SOLUTION 2
//Reverse a String with a decrementing for loop

function reverseAString2(str) {
  let newStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(`Reversed string 2 solution is: ${reverseAString2(str)}`);

//SOLUTION 3
//Reverse a string with recursion

function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(`Reversed string 3 solution is: ${reverseString(str)}`);
