import { Theme } from "./components/Theme";
import { Board } from "./components/Board";
import { Footer } from "./components/Footer";
import { useBoard } from "./components/hooks/useBoard";
import { ResetButton } from "./components/ResetButton";
import { Turns } from "./components/Turns";
import { WinnerModal } from "./components/WinnerModal";
import "./App.css";

function App() {
  const { board, turn, winner, comboWinner, changeTurn, resetGame } =
    useBoard();

  return (
    <>
      <div className="app">
        <header>
          <Theme />
          <h1>Tres en raya</h1>
        </header>
        <main className="main">
          <Board
            board={board}
            comboWinner={comboWinner}
            changeTurn={changeTurn}
          />
          <Turns turn={turn} />
          <ResetButton handleClick={resetGame} />
          <WinnerModal winner={winner} resetGame={resetGame} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
