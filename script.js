const gameBoard = (() => {

  const board = [];

  let currPlayer = 'X';
  const squares = document.querySelectorAll('.game-square');
  const resetButton = document.querySelector('#reset');
  
  squares.forEach(square => {
    square.addEventListener('click', makeSelection);
  });

  resetButton.addEventListener('click', clearBoard);
  
  function makeSelection(e) {
    const square = e.target;
    const index = square.dataset.index;
    if (square.textContent == '') {
      square.textContent = currPlayer;
      board[index] = currPlayer;
      square.classList.add('selected');

      currPlayer == 'X' ? currPlayer = 'O' : currPlayer = 'X';
    }
  }

  function clearBoard() {
    squares.forEach(square => {
      square.textContent = '';
      currPlayer = 'X';
    });
  }

})();


