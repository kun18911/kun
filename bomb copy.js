var Bomb = function (row, col, color) {
  Candy.call(this, row, col, color);

  this.type = 'bomb';
};

Bomb.prototype = Object.create(Candy.prototype);
Bomb.prototype.constructor = Bomb;

Bomb.prototype.toString = function () {
  return 'B';
};

Bomb.prototype.handleCrush = function () {
  var startRow = Math.max(0, this.row - 1);
  var endRow = Math.min(board.boardSize - 1, this.row + 1);
  var startCol = Math.max(0, this.col - 1);
  var endCol = Math.min(board.boardSize - 1, this.col + 1);

  for (var row = startRow; row <= endRow; row++) {
      for (var col = startCol; col <= endCol; col++) {
          var candy = board.getCandyAt(row, col);
          if (candy) {
              board.remove(candy);
          }
      }
  }

  board.remove(this);
};
