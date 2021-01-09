// In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

// We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

// Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const talkingCalendar = function (date) {
  const dateArray = date.split('/');
  const year = dateArray[0];
  const month = monthNames[dateArray[1] - 1];
  let day = parseInt(dateArray[2]);
  //   Add suffix to a number
  if (day % 10 == 1 && day % 100 != 11) {
    day = day + 'st';
  } else if ((day % 10 == 2) & (day % 100 != 12)) {
    day = day + 'nd';
  } else if ((day % 10 == 3) & (day % 100 != 13)) {
    day = day + 'rd';
  } else {
    day = day + 'th';
  }

  return (day = month + ' ' + day + ', ' + year);
};

console.log(talkingCalendar('2017/12/02')); // December 2nd, 2017
console.log(talkingCalendar('2007/11/11')); // November 11th, 2007
console.log(talkingCalendar('1987/08/24')); // August 24th, 1987
