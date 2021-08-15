window.addEventListener('click', handleClick);

function handleClick(event) {
  gameboard.updateGameboard(board,event.target.id);
  checkWinner('X');
}
function checkWinner(mark) {
  // console.log(gameboard.getSquare(0));
  if(gameboard.getSquare(0).getMark() === mark &&
    gameboard.getSquare(1).getMark() === mark &&
    gameboard.getSquare(2).getMark() === mark) {
      console.log(mark, " wins");
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
      if(counter %2 === 0) {
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
    return {getSquare, displayGameboard, updateGameboard};

})();

const board = document.querySelector('.gameboard');

gameboard.displayGameboard(board);
