// Change Calculator
// We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

// Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

// Valid denominations are as follows:

// Twenty dollars
// Ten dollars
// Five dollars
// Two dollars
// One dollar
// Quarter (25¢)
// Dime (10¢)
// Nickel (5¢)
// Penny (1¢)

// Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. Return a new object that describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.

const calculateChange = function (total, cash) {
  // Your code here
  // first validate the input numbers
  if (total > cash) {
    return 'Total amount should be smaller than cash!';
  }

  let remaining = cash - total;

  let myObj = {};

  const moneyType = [
    { name: 'twentyDollar', value: 2000 },
    { name: 'tenDollar', value: 1000 },
    { name: 'fiveDollar', value: 500 },
    { name: 'twoDollar', value: 200 },
    { name: 'oneDollar', value: 100 },
    { name: 'quater', value: 25 },
    { name: 'dime', value: 10 },
    { name: 'nickel', value: 5 },
    { name: 'penny', value: 1 },
  ];

  // Loop through moneyType array
  // and do the calculation using Math.floor and remainder "%"
  // add Object if the bill count is not 0
  for (let type of moneyType) {
    const count = Math.floor(remaining / type.value);
    if (count != 0) {
      myObj[type.name] = count;
    }
    remaining = remaining % type.value;
  }

  return myObj;
};

console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
