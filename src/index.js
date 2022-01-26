window.addEventListener('click', handleClick);

function handleClick(event) {
  gameboard.updateGameboard(board,event.target.id);
  checkWinner('X');
  checkWinner('O');
}

function checkWinner(mark) {
    // 0   1   2
    // 3   4   5
    // 6   7   8
  let endGame = false;
  if(checkLine(0, 1, 2, mark)) {
      console.log(mark, " wins");
      gameboard.disableBoard(board);
      endGame=true;
  }

  if(checkLine(3, 4, 5, mark)) {
      console.log(mark, " wins");
      gameboard.disableBoard(board);
      endGame=true;
  }

  if(checkLine(6, 7, 8, mark)) {
      console.log(mark, " wins");
      gameboard.disableBoard(board);
      endGame=true;
  }

  if(checkLine(0, 3, 6, mark)) {
      console.log(mark, " wins");
      gameboard.disableBoard(board);
      endGame=true;
  }

  if(checkLine(1, 4, 7, mark)) {
      console.log(mark, " wins");
      gameboard.disableBoard(board);
      endGame=true;
  }

  if(checkLine(2, 5, 8, mark)) {
      console.log(mark, " wins");
      gameboard.disableBoard(board);
      endGame=true;
  }

  if(checkLine(0, 4, 8, mark)) {
      console.log(mark, " wins");
      gameboard.disableBoard(board);
      endGame=true;
  }

  if(checkLine(2, 4, 6, mark)) {
      console.log(mark, " wins");
      gameboard.disableBoard(board);
      endGame=true;
  }

  if(endGame) {
    showWinner(mark);
  }
}

function showWinner(winner) {
  let modal = document.querySelector('#modal-win');
  document.querySelector('#winner-mark').textContent = `${winner} wins!!!!`;
  modal.classList.add('modal-win-show');
  console.log(modal);
}

function checkLine(x, y, z, mark) {
  if(gameboard.getSquare(x).getMark() === mark &&
    gameboard.getSquare(y).getMark() === mark &&
    gameboard.getSquare(z).getMark() === mark){
        return true;
    } else {
      return false;
    }
}
// create one single square
function square(id) {
  let _id = id;

  function setMark(mark) {
    this.mark = mark;
  }

  function getMark() {
    return this.mark;
  }

  function getId() {
    return _id;
  }
  return {setMark, getMark, getId}
}

function player(mark) {
    function getMark() {
      return this.mark;
    }

    return {getMark}
}

const gameboard = (function(){
    let counter = 0;

    squares = [
      square(1),square(2),square(3),
      square(4),square(5),square(6),
      square(7),square(8),square(9)
    ];

    function getSquare(index) {
      // console.log(squares[index])
      return squares[index];
    }

    function addSquare(where, square) {
      const btn = document.createElement('button');
      btn.classList.add('gameboard-btn');
      btn.setAttribute('id', square.getId());
      btn.textContent =" ";
      where.appendChild(btn);
    }

    function displayGameboard(where) {
      squares.forEach(square=>{
        addSquare(where, square);
      });
    }

    function updateGameboard(where, index) {
      let mark = '';
      console.log('INDEX',index);
      if(counter % 2 === 0) {
          mark = 'X';
      }
      else {
          mark = 'O';
      }

      squares[parseInt(index)-1].setMark(mark);
      // console.log(where);
      const btn = where.querySelector(`[id='${index}']`);
      btn.textContent = mark;
      btn.disabled = true;
      counter++;
    }

    function disableBoard(parent) {
      const btns = parent.getElementsByTagName('button');
      for(let i = 0; i < btns.length; i++) {
          btns[i].disabled=true;
      }
    }

    return {getSquare, displayGameboard, updateGameboard, disableBoard};

})();

const board = document.querySelector('.gameboard');

gameboard.displayGameboard(board);
