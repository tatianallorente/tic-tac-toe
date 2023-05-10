import { WINNER_COMBOS } from './constants.js'

export const checkWinner = (checkBoard) => {
  for (const combo of WINNER_COMBOS) {
    if (
      checkBoard[combo[0]] &&
      checkBoard[combo[0]] === checkBoard[combo[1]] &&
      checkBoard[combo[1]] === checkBoard[combo[2]]
    ) {
      return {newWinner: checkBoard[combo[0]], comboWinner: combo};
    }
  }
  return {newWinner: null, comboWinner: []};
};

export const checkEndGame = (board) => {
  // empate si ninguno es null y no hay ganador
  return board.every((square) => square !== null);
};
