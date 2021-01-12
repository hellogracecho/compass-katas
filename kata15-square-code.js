// ** Square Code

// In Square Code, the spaces are removed from the english text and the characters are written into a square (or rectangle). For example, the sentence "If man was meant to stay on the ground god would have given us roots" is 54 characters long, once the spaces are removed, so it is written into a rectangle with 7 rows and 8 columns.

// The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up (Math.ceil(Math.sqrt(54))), we get 8. If we use that for the number of characters on each line (the number of columns), then our text will be close to a square shape.

// Create a function named squareCode that will receive a message, and return the secret square code version of the message.

const squareCode = function (message) {
  // Put your solution here
  const string = message.replace(/\s/g, '');
  const column = Math.ceil(Math.sqrt(string.length));

  let square = [];
  for (let i = 0; i < column; i++) {
    square.push(string.slice(column * i, column + column * i));
  }

  let squareCode = '';
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < column; j++) {
      if (square[j][i] != undefined) squareCode += square[j][i];
    }
    squareCode += ' ';
  }
  return squareCode;
};

console.log(squareCode('chill out')); // clu hlt io
console.log(squareCode('feed the dog')); // fto ehg ee dd
console.log(squareCode('have a nice day')); // hae and via ecy
console.log(
  squareCode(
    'if man was meant to stay on the ground god would have given us roots'
  )
); // imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
