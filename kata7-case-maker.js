// We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

// Create a function named camelCase that will convert a string to camel case, and return the result.

const camelCase = function (input) {
  // Your code here
  // 1. string to array by seperating space
  const inputArray = input.split(' ');
  let camelCaseInput = '';
  // 2. Loop through array and and from second value, capitalize the letter
  for (let i = 0; i < inputArray.length; i++) {
    if (i === 0) {
      camelCaseInput += inputArray[i];
    } else {
      // ✨Capitalize function
      camelCaseInput +=
        inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1);
    }
  }
  return camelCaseInput;
};

console.log(camelCase('this is a string')); // thisIsAString
console.log(camelCase('loopy lighthouse')); // loopyLighthouse
console.log(camelCase('supercalifragalisticexpialidocious')); // supercalifragalisticexpialidocious
