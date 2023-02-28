const str = "XeroX";

function getTheGapX(str) {
  // write your solution here
  const firstX = str.indexOf("X");
  const lastX = str.lastIndexOf("X");

  if (firstX !== -1 && lastX !== -1) {
    const array = str.split("");
    const between = array.slice(firstX, lastX + 1);
    const joined = between.join("");
    return joined.length - 2;
  } else {
    return -1;
  }
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);
