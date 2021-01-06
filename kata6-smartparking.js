// We need to write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot. Our function receives an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot.

// There are three kinds of possible vehicles: regular cars, small cars, and motorcycles.

// * Regular cars can only park in R spots.
// * Small cars can park in R or S spots.
// * Motorcycles can park in R, S, or M spots.

// In the array of parking spots, spots are written in both lower-case and upper-case. An upper-case letter means that the particular spot is AVAILABLE, while lower-case letters mean that the spot is UNAVAILABLE.

// Our function must return an array with the coordinates of the spot as an [X, Y] pair. See the example input and output below for an illustration.

// Note: There may be multiple available spots for a particular vehicle. It does not matter which spot your function chooses, as long as the spot is available. And if there are no available spots, remember to return false.

const whereCanIPark = function (spots, vehicle) {
  // Code here!

  // Parking Rules
  const Rules = [
    { kind: 'regular', possible: ['R'] },
    { kind: 'small', possible: ['R', 'S'] },
    { kind: 'motorcycle', possible: ['R', 'S', 'M'] },
  ];
  // Find the possible rules depends on the *vehicle* kind
  const PossibleRuleArray = Rules.filter((x) => x.kind === vehicle)[0].possible;

  // loop rows... y
  for (let y = 0; y < spots.length; y++) {
    // loop columns... x
    for (let x = 0; x < spots[y].length; x++) {
      // then use my object Rules, PossibleRuleArray to see if it matches
      for (let rule of PossibleRuleArray) {
        if (spots[y][x].includes(rule)) {
          return [x, y];
        }
      }
    }
  }
  // if nothing matches, return false
  return false;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
      ['s', 'M', 's', 'S', 'r', 'M'], // 1
      ['s', 'M', 's', 'S', 'r', 'm'], // 2
      ['S', 'r', 's', 'm', 'r', 'M'], // 3
      ['S', 'r', 's', 'm', 'r', 'M'], // 4
      ['S', 'r', 'S', 'M', 'M', 'S'], // 5
    ],
    'regular'
  )
); // [4, 0]

console.log(
  whereCanIPark(
    [
      ['M', 'M', 'M', 'M'],
      ['M', 's', 'M', 'M'],
      ['M', 'M', 'M', 'M'],
      ['M', 'M', 'r', 'M'],
    ],
    'small'
  )
); // false

console.log(
  whereCanIPark(
    [
      ['s', 's', 's', 's', 's', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['S', 'r', 's', 'm', 'r', 's'],
      ['S', 'r', 's', 'm', 'R', 's'],
      ['S', 'r', 'S', 'M', 'm', 'S'],
    ],
    'motorcycle'
  )
); // [3, 1]
