const game = confirm(`Do you want to play a game?`);
let beginMaxPtixe = 100;
let beginMaxRandom = 8;
let MaxPrize = beginMaxPtixe;
let MaxRandom = beginMaxRandom;
let totalPrize = 0;
let attempt = 3;
let upMaxRandon = 4;
let upMaxPrize = 2;
let win = false;
let continueGame = true;
let nextGame = true;
let minusOne = -1

if (game) {
  let numRandom = Math.floor(Math.random() * MaxRandom + 1);
  console.log(numRandom);
  let prize = MaxPrize;
  for (let i = 0; i < attempt; i++) {
    let numUser = prompt(`Choose a roulette pocket from 0 to ${MaxRandom}\n` +
      `Attempts left: ${attempt - i}\n` +
      `Total prize: ${totalPrize}$\n` +
      `Possible prize on current attempt: ${prize}$`);
    if (Number(numUser) === numRandom) {
      totalPrize += prize;

      MaxRandom += upMaxRandon;
      MaxPrize *= upMaxPrize;
      prize = MaxPrize;
      i = minusOne;
      win = true;
      numRandom = Math.floor(Math.random() * MaxRandom + 1);
      console.log(numRandom);
      continueGame = confirm(`Congratulation, you won!\n` +
        `Your prize is:${totalPrize}.\n` +
        `Do you want to continue?`);
    } else {
      win = false;

    }
    if (!continueGame) {
      MaxPrize = beginMaxPtixe;
      MaxRandom = beginMaxRandom;
      prize = MaxPrize;
      numRandom = Math.floor(Math.random() * MaxRandom + 1);
      nextGame = confirm(`Thank you for a game. Your prize is: ${totalPrize}$\n` +
        `Do you want to play again?`);
      totalPrize = 0;
      i = minusOne;
      continueGame = true;
    }
    if (!nextGame) {
      break;
    }
  }
} else {
  alert(`You did not became a millionaire`);
}
