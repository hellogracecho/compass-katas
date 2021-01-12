// Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

// Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

// 1. camel, pascal, snake, kebab, title
// 2. vowel, consonant
// 3. upper, lower

// Put your solution here

// myCase can takes only one case
const runCase = (input, myCase) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let result = '';

  switch (myCase) {
    case 'camel':
      result = input
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
          return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, '');
      break;

    case 'pascal':
      result = input
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => {
          return word.toUpperCase();
        })
        .replace(/\s+/g, '');
      break;

    case 'snake':
      result = input.split(' ').join('_');
      break;

    case 'kebab':
      result = input.split(' ').join('-');
      break;

    case 'title':
      result = input
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => {
          return word.toUpperCase();
        })
        .replace(/\s+/g, ' ');
      break;

    case 'vowel':
      for (let i of input) {
        if (vowels.includes(i)) {
          result += i.toUpperCase();
        } else {
          result += i;
        }
      }
      break;

    case 'consonant':
      for (let i of input) {
        if (!vowels.includes(i)) {
          result += i.toUpperCase();
        } else {
          result += i;
        }
      }
      break;

    case 'upper':
      result = input.toUpperCase();
      break;

    case 'lower':
      result = input.toLowerCase();
      break;
  }
  return result;
};

// run case maker with all kind of scenarios
const makeCase = function (input, myCase) {
  if (typeof myCase == 'string') {
    // when there is only one case which is just string type
    return runCase(input, myCase);
  } else {
    // when there is more than one in an array of strings e.g. ['upper', 'snake];
    // Sort Array with these three casing styles order
    const first = ['camel', 'pascal', 'snake', 'kebab', 'title'];
    const second = ['vowel', 'consonant'];
    const thrid = ['upper', 'lower'];
    let sortedArray = new Array();

    for (let singleCase of myCase) {
      if (first.includes(singleCase)) {
        sortedArray.unshift(singleCase);
      } else if (second.includes(singleCase)) {
        sortedArray.splice(1, 0, singleCase);
      } else {
        sortedArray.push(singleCase);
      }
    }
    // Ok we are finally looping through the array of "sorted" cases
    let result = '';
    for (let i = 0; i < sortedArray.length; i++) {
      if (i == 0) {
        result = runCase(input, sortedArray[i]);
      } else {
        result = runCase(result, sortedArray[i]);
      }
    }
    return result;
  }
};

console.log(makeCase('this is a string', 'camel')); // thisIsAString
console.log(makeCase('this is a string', 'pascal')); // ThisIsAString
console.log(makeCase('this is a string', 'snake')); // this_is_a_string
console.log(makeCase('this is a string', 'kebab')); // this-is-a-string
console.log(makeCase('this is a string', 'title')); // This Is A String
console.log(makeCase('this is a string', 'vowel')); // thIs Is A strIng
console.log(makeCase('this is a string', 'consonant')); // THiS iS a STRiNG
console.log(makeCase('this is a string', ['upper', 'snake'])); // THIS_IS_A_STRING
