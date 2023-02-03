const gameBoard = (() => {

  let board = [
    // Rows
    [],
    [],
    []
  ];

  let currPlayer = 'X';
  const squares = document.querySelectorAll('.game-square');
  const resetButton = document.querySelector('#reset');
  
  squares.forEach(square => {
    square.addEventListener('click', makeSelection);
  });

  resetButton.addEventListener('click', clearBoard);
  
  function makeSelection(e) {
    const square = e.target;
    const row = square.dataset.row;
    const column = square.dataset.column;

    if (square.textContent == '') {
      square.textContent = currPlayer;
      board[row][column] = currPlayer;
      square.classList.add('selected');

      const gameOver = checkWins(currPlayer);
      if (!gameOver) {
        rotatePlayer();
      } else {
        clearBoard();
      }
    }
  }

  function clearBoard() {
    squares.forEach(square => {
      square.textContent = '';
      board = [[], [], []];
      currPlayer = 'X';

      if (square.classList.contains('selected')) {
        square.classList.remove('selected');
      }
    });
  }

  function checkWins(player) {
    let usedSquares = 0;

    for (let i = 0; i < 3; i++) {

      // Check row win
      let rowCount = 0;
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === player) {
          rowCount++;
        }
      }
      if (rowCount === 3) {
        alert(`player ${player} wins!`);
        return true;
      }

      // Check column win
      const col1 = board[0][i];
      const col2 = board[1][i];
      const col3 = board[2][i];

      if (col1 === player && col2 === player && col3 === player) {
        alert(`player ${player} wins!`);
        return true;
      }
    }
    // Check for draw
    if (usedSquares === 9) {
      alert(`It's a draw!`);
      return true;
    } else {
      return false;
    }
  }

  function rotatePlayer() {
    currPlayer == 'X' ? currPlayer = 'O' : currPlayer = 'X';
  }

})();


