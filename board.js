const board = document.getElementById('board');

const genBoard = (size) => {
  for (let line = 0; line < size; line += 1) {
    const boardPixelLine = document.createElement('tr');
    boardPixelLine.className = 'pixel-board';
    for (let colunm = 0; colunm < size; colunm += 1) {
      const boardPixelColunm = document.createElement('td');
      boardPixelColunm.className = 'pixel-board';
      boardPixelColunm.id = `L,${line},C,${colunm}`
      boardPixelLine.appendChild(boardPixelColunm);
    }
    board.appendChild(boardPixelLine);
  }
}

genBoard(20);