import { useState } from 'react';
import Cell from './Cell.jsx'
import './Game.css';



function Game(props) {
    const [board, setBoard] = useState([
        ["+", "+", "+"],
        ["+", "+", "+"],
        ["+", "+", "+"]
    ]);

    function checkWinner(board, rowIdx, colIdx) {
        const currentSymbol = board[rowIdx][colIdx];
        if (
            board[rowIdx][0] === currentSymbol &&
            board[rowIdx][1] === currentSymbol &&
            board[rowIdx][2] === currentSymbol
        )
            console.log(`${board[rowIdx][colIdx]} is winner`);
        
        if (
            board[0][colIdx] === currentSymbol &&
            board[1][colIdx] === currentSymbol &&
            board[2][colIdx] === currentSymbol
        )
            console.log(`${board[rowIdx][colIdx]} is winner`);

        if (
            (rowIdx === colIdx &&
                board[0][0] === currentSymbol &&
                board[1][1] === currentSymbol &&
                board[2][2] === currentSymbol) ||
            (rowIdx + colIdx === 2 &&
                board[0][2] === currentSymbol &&
                board[1][1] === currentSymbol &&
                board[2][0] === currentSymbol)
            )
            console.log(`${board[rowIdx][colIdx]} is winner`);
    }
    function changeCellValue(rowIdx, colIdx) {
        const newBoard = [...board];
        newBoard[rowIdx] = [...newBoard[rowIdx]];

        if (newBoard[rowIdx][colIdx] === "+") newBoard[rowIdx][colIdx] = "X";
        else if (newBoard[rowIdx][colIdx] === "X")
            newBoard[rowIdx][colIdx] = "0";
        else newBoard[rowIdx][colIdx] = "X";

        checkWinner(newBoard, rowIdx, colIdx);
        setBoard(newBoard);
    }

    return (
        <div className='gameWrapper'>
            {board.map((row, rowIdx) => {
                return (
                    <div key={rowIdx} className='rowWrapper'>
                        {row.map((col, colIdx) => {
                            return (
                                <Cell 
                                    onClick={changeCellValue.bind(
                                            null,
                                            rowIdx,
                                            colIdx
                                    )}
                                    key={colIdx} 
                                    value={col} 
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default Game;