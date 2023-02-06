var state = {
  board: [],
  currentGame: [],
  savedGames: [],
};

function start() {}

function addNumberToGame(numberToAdd) {
  if (numberToAdd < 1 || numberToAdd > 60) {
    console.error("Número inválido", numberToAdd);
    return;
  }

  if (state.currentGame.length >= 6) {
    console.error("O jogo já está completo.");
    return;
  }
  state.currentGame.push(numberToAdd);
}
