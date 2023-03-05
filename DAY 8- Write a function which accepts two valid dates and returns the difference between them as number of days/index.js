const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
  const date1 = new Date(dateText1).getTime();
  const date2 = new Date(dateText2).getTime();
  const differenceInDays = (date2 - date1) / DAY_IN_MILLISECONDS;
  return differenceInDays;
}

console.log(
  `Days difference: ${getDaysBetweenDates("10/15/2020", "12/1/2020")}`
);
