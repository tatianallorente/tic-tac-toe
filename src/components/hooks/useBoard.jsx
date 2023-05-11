import { useState } from "react";
import confetti from "canvas-confetti";

import { checkEndGame, checkWinner } from "../utils/board";
import { TURNS } from "../utils/constants";
import { resetGameStorage, saveGameToStorage } from "../utils/storage";

export function useBoard() {
  const [board, setBoard] = useState(
    window.localStorage.getItem("board")
      ? JSON.parse(window.localStorage.getItem("board"))
      : Array(9).fill(null)
  );
  const [turn, setTurn] = useState(
    window.localStorage.getItem("turn") ?? TURNS.X
  );
  // null es que aún no hay ganador, false es empate
  const [winner, setWinner] = useState(null);
  const [comboWinner, setComboWinner] = useState([]);

  const changeTurn = (index) => {
    // Evita sobreescribir
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    saveGameToStorage({
      board: newBoard,
      turn: newTurn,
    });

    // Partida finalizada o hay ganador
    const { newWinner, comboWinner } = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
      setComboWinner(comboWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // empate
    }
  };

  const resetGame = () => {
    setTurn(TURNS.X);
    setBoard(Array(9).fill(null));
    setWinner(null);
    setComboWinner([]);
    resetGameStorage();
  };

  return {
    board,
    turn,
    winner,
    comboWinner,
    changeTurn,
    resetGame,
  };
}
