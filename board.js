const BOARDSIZE = 20;
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

genBoard(BOARDSIZE);

const fillLandscapeSeeds = (maxSeeds) => {
  const seeds = [];
  do {
    const newRandomSeed = {};
    newRandomSeed.line = Math.ceil(Math.random() * BOARDSIZE);
    newRandomSeed.colunm = Math.ceil(Math.random() * BOARDSIZE);
    if (!seeds.includes(newRandomSeed)) 
      seeds.push(newRandomSeed);
  } while(seeds.length < maxSeeds);
  return seeds;
};

const genLandscape = () => {
  const landscapeSeeds = fillLandscapeSeeds(BOARDSIZE/2);
  console.log(landscapeSeeds);
};

genLandscape();