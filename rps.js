function rockPaperScissors(player1, player2) {

  const WINCOMBS = {
    "rock": ["scissors", "lizard"],
    "paper": ["rock", "spock"],
    "scissors": ["paper", "lizard"],
    "lizard": ["spock", "paper"],
    "spock": ["scissors", "rock"],
  };

  if (player1 === player2){
    return "draw";
  } else {
    for (let choice of Object.keys(WINCOMBS)){
      if (player1 === choice && player2 === WINCOMBS[choice]){
        return "player1";
      }
    }
    return "player2";
  }
}
   


console.log(rockPaperScissors("scissors", "rock"));








// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}