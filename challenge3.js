let randomizer = Math.floor(Math.random() * 3);

switch (randomizer) {
  case 0:
    console.log("Your fate is a certain victory");
    break;
  case 1:
    console.log("Your fate is not so certain victory");
    break;
  case 2:
    console.log("Your fate is an uneasy victory");
    break;
  default:
    console.log("Your fate is unclear, ô chosen undead");
}
