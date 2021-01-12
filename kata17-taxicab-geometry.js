// Taxicab Geometry

// The taxi driver is given a list of directions that tell her whether to turn left or right, and how many blocks to drive for. Every time the taxi driver has to turn left, she will make a 90° turn anticlockwise, and every time the taxi driver has to turn right, she will make a 90° turn clockwise.

// Let's take a look at some example directions: ["right", 2, "left", 3, "left", 1].

// Now that the taxi driver is at her final destination, we can determine that she is 1 block east and 3 blocks north of where she started.

// Create a function named blocksAway that will receive an array of directions, and return an object that calculates how far north and east those directions will take someone.

const blocksAway = function (directions) {
  // Put your solution here
  // create an array of [[direction, count]]
  let directionArr = [];
  for (let i = 0; i < directions.length; i += 2) {
    directionArr.push(directions.slice(i, i + 2));
  }

  let block = { east: 0, north: 0 };
  let angle;

  for (let i = 0; i < directionArr.length; i++) {
    const sign = directionArr[i][0];
    const count = directionArr[i][1];

    if (angle == undefined) {
      sign == 'right' ? (angle = 0) : (angle = 90);
    } else if (sign == 'right') {
      angle -= 90;
    } else if (sign == 'left') {
      angle += 90;
    }

    if (angle < 0) angle += 360;
    if (angle > 360) angle -= 360;

    if (angle === 0) {
      block.east += count;
    } else if (angle === 90) {
      block.north += count;
    } else if (angle === 180) {
      block.east -= count;
    } else if (angle === 270) {
      block.north -= count;
    }
  }
  return block;
};

console.log(blocksAway(['right', 2, 'left', 3, 'left', 1])); // {east: 1, north: 3}

console.log(
  blocksAway([
    'left',
    1,
    'right',
    1,
    'left',
    1,
    'right',
    1,
    'left',
    1,
    'right',
    1,
  ])
); // {east: 3, north: 3}

console.log(blocksAway(['left', 3, 'right', 1, 'right', 3, 'right', 1])); // {east: 0, north: 0}
