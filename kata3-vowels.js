// In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.

// Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

const numberOfVowels = function (data) {
  // Put your solution here
  const vowels = 'aeiou';
  let count = 0;
  for (let v of vowels) {
    if (data.includes(v)) {
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels('orange')); // 3
console.log(numberOfVowels('lighthouse labs')); // 5
console.log(numberOfVowels('aeiou')); // 5
