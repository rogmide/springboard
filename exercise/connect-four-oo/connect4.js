

class Game {
  constructor(p1, p2, WIDTH = 7, HEIGHT = 6) {
    this.p1 = p1;
    this.p2 = p2;
    this.WIDTH = WIDTH;
    this.HEIGHT = HEIGHT;
    this.currPlayer = 1;
    this.makeBoard();
    this.makeHtmlBoard();
    this.gameOver = false;
  }

  makeBoard() {
    this.board = [];
    for (let y = 0; y < this.HEIGHT; y++) {
      this.board.push(Array.from({ length: this.WIDTH }));
    }
  }

  makeHtmlBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');
    top.addEventListener('click', this.handleClick.bind(this));


    for (let x = 0; x < this.WIDTH; x++) {
      const headCell = document.createElement('td');
      headCell.setAttribute('id', x);
      top.append(headCell);
    }

    board.append(top);

    for (let y = 0; y < this.HEIGHT; y++) {
      const row = document.createElement('tr');

      for (let x = 0; x < this.WIDTH; x++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `${y}-${x}`);
        row.append(cell);
      }

      board.append(row);
    }
    board.style.setProperty('--color1', this.p1);
    board.style.setProperty('--color2', this.p2);
  }

  findSpotForCol(x) {
    for (let y = this.HEIGHT - 1; y >= 0; y--) {
      if (!this.board[y][x]) {
        return y;
      }
    }
    return null;
  }

  placeInTable(y, x) {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.classList.add(`p${this.currPlayer}`);
    piece.style.top = -50 * (y + 2);

    const spot = document.getElementById(`${y}-${x}`);
    spot.append(piece);
  }

  endGame(msg) {
    alert(msg);
  }

  handleClick(evt) {
    const x = +evt.target.id;
    const y = this.findSpotForCol(x);
    if (y === null) {
      return;
    }
    this.board[y][x] = this.currPlayer;
    this.placeInTable(y, x);
    if (this.checkForWin()) {
      return this.endGame(`Player ${this.currPlayer} won!`);
    }
    if (this.board.every(row => row.every(cell => cell))) {
      return this.endGame('Tie!');
    }
    this.currPlayer = this.currPlayer === 1 ? 2 : 1;
  }

  checkForWin() {
    const _win = (cells) => {
      return cells.every(
        ([y, x]) =>
          y >= 0 &&
          y < this.HEIGHT &&
          x >= 0 &&
          x < this.WIDTH &&
          this.board[y][x] === this.currPlayer
      );
    }

    for (let y = 0; y < this.HEIGHT; y++) {
      for (let x = 0; x < this.WIDTH; x++) {
        const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
          return true;
        }
      }
    }
  }
}

class Players {
  constructor(p1, p2, p3) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }
}



class GameTreePlayer extends Game {

  constructor(p1, p2, p3, WIDTH, HEIGHT, currPlayer) {
    super(p1, p2, WIDTH, HEIGHT, currPlayer);
    this.p3 = p3;
    this.makeHtmlBoard();
  }


  makeHtmlBoard() {
    const newBoard = document.getElementById('board');
    newBoard.innerHTML = '';
    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');
    top.addEventListener('click', this.handleClick.bind(this));

    for (let x = 0; x < this.WIDTH; x++) {
      const headCell = document.createElement('td');
      headCell.setAttribute('id', x);
      top.append(headCell);
    }

    newBoard.append(top);

    for (let y = 0; y < this.HEIGHT; y++) {
      const row = document.createElement('tr');
      for (let x = 0; x < this.WIDTH; x++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `${y}-${x}`);
        row.append(cell);
      }
      newBoard.append(row);
    }
    newBoard.style.setProperty('--color1', this.p1);
    newBoard.style.setProperty('--color2', this.p2);
    newBoard.style.setProperty('--color3', this.p3);
  }

  handleClick(evt) {
    const x = +evt.target.id;
    const y = this.findSpotForCol(x);
    if (y === null) {
      return;
    }
    this.board[y][x] = this.currPlayer;
    this.placeInTable(y, x);
    if (this.checkForWin()) {
      return this.endGame(`Player ${this.currPlayer} won!`);
    }
    if (this.board.every(row => row.every(cell => cell))) {
      return this.endGame('Tie!');
    }

    if (this.currPlayer === 1) {
      this.currPlayer = 2;
    } else if (this.currPlayer === 2) {
      this.currPlayer = 3;
    } else if (this.currPlayer === 3) {
      this.currPlayer = 1;
    }
  }
}

class GameVsPC extends Game {
  constructor(p1, p2 = 'aqua', WIDTH, HEIGHT, currPlayer) {
    super(p1, p2, WIDTH, HEIGHT, currPlayer);
  }

  handleClick(evt) {
    let x = 0;
    if (this.currPlayer === 2) {          
      x = Math.floor(Math.random() * this.WIDTH);
    }
    if (this.currPlayer === 1) {
      x = +evt.target.id;
    }

    const y = this.findSpotForCol(x);
    if (y === null) {
      return;
    }
    this.board[y][x] = this.currPlayer;
    this.placeInTable(y, x);
    if (this.checkForWin()) {
      return this.endGame(`Player ${this.currPlayer} won!`);
    }
    if (this.board.every(row => row.every(cell => cell))) {
      return this.endGame('Tie!');
    }
    //this.currPlayer === 1 ? this.currPlayer = 2 : this.currPlayer = 1;
    if (this.currPlayer === 1) {
      this.currPlayer = 2;
      this.handleClick();
    } else if (this.currPlayer === 2) {
      this.currPlayer = 1;
    }
  }
}

function selectGame(radio) {
  const normal = document.getElementById('input-normal');
  const three = document.getElementById('input-three');
  const ai = document.getElementById('input-vsai')
  const board = document.getElementById('board');
  switch (radio.value) {
    case 'normal':
      normal.classList.remove('hidden');
      three.classList.add('hidden');
      ai.classList.add('hidden');
      board.innerHTML = '';
      break;
    case 'three':
      three.classList.remove('hidden');
      normal.classList.add('hidden');
      ai.classList.add('hidden');
      board.innerHTML = '';
      break;
    case 'vsai':
      ai.classList.remove('hidden');
      three.classList.add('hidden');
      normal.classList.add('hidden');
      board.innerHTML = '';
      break;
    default:
      break;
  }
}

const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const color4 = document.querySelector('#color4');
const color5 = document.querySelector('#color5');
const color3 = document.querySelector('#color3');
const colorPC = document.querySelector('#colorPC');
const newBtn = document.querySelector('.new-btn');
const newBtn3 = document.querySelector('.new-btn3');
const newBtnVsPC = document.querySelector('.new-btn-vs');

newBtn.addEventListener('click', function () {
  let players = new Players(color1.value, color2.value);
  (players.p1 !== '' && players.p2 !== '') ? new Game(players.p1, players.p2) : new Game('red', 'blue');
});

newBtn3.addEventListener('click', function () {
  let players = new Players(color4.value, color5.value, color3.value);
  (players.p1 !== '' && players.p2 !== '' && players.p3 !== '') ? new GameTreePlayer(players.p1, players.p2, players.p3) : new GameTreePlayer('red', 'blue', 'black');
});
newBtnVsPC.addEventListener('click', function () {
  let players = new Players(colorPC.value);
  (players.p1 !== '') ? new GameVsPC(players.p1) : new GameVsPC('red');
});