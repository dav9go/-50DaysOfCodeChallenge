function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  const randomNum = Math.floor(
    Math.random() * (rangeEnd - rangeStart + 1) + rangeStart
  );
  return randomNum;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`);
