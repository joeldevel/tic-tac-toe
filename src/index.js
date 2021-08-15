console.log('works!');
function square() {
  function setMark(mark) {
    this.mark = mark;
  }
  function getMark() {
    return this.mark;
  }
  return {setMark, getMark}
}

const gameboard = (function(){
    squares = [
      square(),square(),square(),
      square(),square(),square(),
      square(),square(),square()
    ];

    function getSquare(index) {
      return squares[index];
    }
    function addSquare(where, square) {
      const btn = document.createElement('button');
      btn.textContent = 'X';
      where.appendChild(btn);
    }

    function displayGameboard(where) {
      squares.forEach(square=>{
        addSquare(where, square);
      });
    }
    return {getSquare, displayGameboard};

})();

const displayGameboard = document.querySelector('.gameboard');

gameboard.displayGameboard(displayGameboard);
