// * Queen Threat Detector
// A game of chess is played on an 8 column by 8 row board. In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.

// In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array). For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents a queen on the corresponding square, and a O in the array represents an unoccupied square.

// Our first challenge will be to write a function that generates a chess board like this. We will then write a function to detect weather or not the two queens are positioned so that they attack each other.

// Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
// Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.

const generateBoard = (whiteQueen, blackQueen) => {
  let board = new Array(8);

  for (let j = 0; j < 8; j++) {
    let add = new Array(8);
    for (let i = 0; i < 8; i++) {
      add[i] = 0;
    }
    board[j] = add;
  }

  //   Add queens on the board
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;

  return board;
};

// Detect wheter or not the two queens are positioned.. return true or false
const queenThreat = (board) => {
  // Find out the queens position
  let queensPosition = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] == 1) queensPosition.push([i, j]);
    }
  }

  // Detect
  if (
    queensPosition[0][0] == queensPosition[1][0] ||
    queensPosition[0][1] == queensPosition[1][1]
  ) {
    return true;
  } else if (
    Math.abs(queensPosition[0][0] - queensPosition[1][0]) ===
    Math.abs(queensPosition[0][1] - queensPosition[1][1])
  ) {
    return true;
  } else {
    return false;
  }
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
