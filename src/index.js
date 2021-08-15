console.log('works!');
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
      // console.log(square.getId());
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
