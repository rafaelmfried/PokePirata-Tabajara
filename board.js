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

const genRamonSeedObject = () => {
  const randomSeed = {};
  randomSeed.line = Math.ceil(Math.random() * BOARDSIZE - 1);
  randomSeed.column = Math.ceil(Math.random() * BOARDSIZE - 1);
  return randomSeed;
};

const fillLandscapeSeeds = (maxSeeds) => {
  const seeds = [];
  do {
    const newRandomSeed = genRamonSeedObject();
    if (!seeds.includes(newRandomSeed)) 
      seeds.push(newRandomSeed);
  } while(seeds.length < maxSeeds);
  return seeds;
};

const expansionFillLandscapeSeed = (seeds, percentage) => {
  const completeLandscape = [];
  
  if (percentage < 1)
    return completeLandscape;
    
  const includeLandPixel = (seed) => {
    for (let line = seed.line - 1; line <= seed.line + 1; line += 1) {
      for (let column = seed.column - 1; column <= seed.column + 1; column += 1) {
        if (((Math.random() * 100) <= percentage)
          && (line < BOARDSIZE) && (column < BOARDSIZE) && (line >= 0) && (column >= 0)) {
          const newFillLandscape = {
            'line': line,
            'column': column,
          };
          completeLandscape.push(newFillLandscape);
        }
      }
    }
  };
    seeds.length > 1 ? seeds.map((seed) => {
    includeLandPixel(seed)
  })
  : includeLandPixel(seeds);
  return [...completeLandscape, ...expansionFillLandscapeSeed(completeLandscape, percentage/100)];
};

const genLandscape = (probability, expansion) => {
  const landscapeSeeds = fillLandscapeSeeds((probability/100) * (BOARDSIZE**2));
  return landscapeSeeds.reduce((landscape, seed) => {
    const genLandscapeBySeed = expansionFillLandscapeSeed(seed, expansion);
    genLandscapeBySeed.map((landscapeSeed) => {
      if (!landscape.includes(landscapeSeed))
        landscape.push(landscapeSeed)
      });
      return landscape;
  }, []);
};

const genRawBoardLandscape = (assets) => {
  return assets.reduce((landscape, { name, parameters }) => {
    const probability = parameters[0];
    const expansion = parameters[1];
    genLandscape(probability, expansion).forEach(({ line, column }) => {
      const newBoardLandscapePixel = {
        'name': name,
        'id': `L,${line},C,${column}`,
      };
      if (!landscape.some(({ id }) => id === newBoardLandscapePixel.id))
        landscape.push(newBoardLandscapePixel);
    });
    return landscape;
  }, []);
};

const smothLandscape = (seed, landscape) => {
  const landName = '';
  const neighboorCount = {};
  for (let line = seed.line - 1; line <= seed.line + 1; line += 1) {
    for (let column = seed.column - 1; column <= seed.column + 1; column += 1) {
      
    }
  }

  console.log(neighboorCount);

  return ({
    'name': landName,
    'id': `L,${seed.line},C,${seed.column}`,
  });
};

const genSmothBoardLandscape = (landscape) => {
  const newLandscape = [...landscape];
  for (let line = 0; line < BOARDSIZE; line += 1) {
    for (let column = 0; column < BOARDSIZE; column += 1) {
      if(!landscape.some((land) => land.id === `L,${line},C,${column}` ))
        newLandscape.push(smothLandscape({ line, column }, landscape));
    }
  }
};

const test = genRawBoardLandscape([ {
  'name': 'garden', 
  'parameters': ([30, 80]),
 },
{
  'name': 'watter',
  'parameters': ([10, 10]),
},
{
  'name': 'rock',
  'parameters': ([10, 100]),
},
{
  'name': 'sand',
  'parameters': ([10, 10]),
},
{
  'name': 'vulkan',
  'parameters': ([10, 200]),
} ]);

genSmothBoardLandscape(test);

test.forEach((pixel) => {
  const block = document.getElementById(`${pixel.id}`);
  block.className = `pixel-board ${pixel.name}`;
});