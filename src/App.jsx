import { useState } from 'react';
import './App.css';
import Game from '../../TicTacToe-game/src/Components/Game.jsx';

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  return (
    <div className='appWrapper'>
      {!winner && (
        <p>
          <strong>Current Player: </strong> {xIsNext ? "X" : "O"}
        </p>
      )}
      {winner && (
        <p>
          <strong>Winner: </strong> {winner}
        </p>
      )}
      <p className='reload-text'>Reload the page to start a new game</p>
      <Game
        setWinner={setWinner}
        setXIsNext={setXIsNext}
        xIsNext={xIsNext}
        />
    </div>
  );
}

export default App;