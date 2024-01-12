function checkSeason(month) {
  if (month >= 3 && month <= 5) {
    return "Spring";
  } else if (month >= 6 && month <= 8) {
    return "Summer";
  } else if (month >= 9 && month <= 11) {
    return "Autumn";
  } else {
    return "Winter";
  }
}

let currentMonth = 2;
let currentSeason = checkSeason(currentMonth);
console.log(`You are currently in ${currentSeason}.`);
