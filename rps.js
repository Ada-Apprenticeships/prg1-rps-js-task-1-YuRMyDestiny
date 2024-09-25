function rockPaperScissors(player1, player2) {
  const WINCOMBS = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
  };

  if (player1 === player2) {
    return "draw";
  } else {
    for (const choice of Object.keys(WINCOMBS)) {
      if (player1 === choice && WINCOMBS[choice].includes(player2)) {
        return "player1";
      }
    }
    return "player2";
  }
}

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
};