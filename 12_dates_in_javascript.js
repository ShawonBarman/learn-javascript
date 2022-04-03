/*
By default, JavaScript will use the browser's time zone and display a date as a full text string:
Tue Feb 08 2022 14:01:10 GMT+0600 (Bangladesh Standard Time)
*/

// There are 4 ways to create a new date object:
// let myDates = new Date();
// let myDates = new Date(year, month, day, hours, minutes, seconds, milliseconds);
// let myDates = new Date(milliseconds);
// let myDates = new Date(date string);

let myDates = new Date();  // creates a new date object with the current date and time
// Date objects are static. The computer time is ticking, but date objects are not.

console.log(myDates);
console.log(myDates.toString());  // this method converts a date to a UTC string (a date display standard)
console.log(myDates.toUTCString());  // this method converts a date to a more readable format
console.log(myDates.toDateString());  // this method converts a date to a more readable format
console.log(myDates.toISOString());  // this method converts a Date object to a string, using the ISO standard format
console.log(myDates.getTime());
console.log(myDates.getFullYear());
console.log(myDates.getDay());
console.log(myDates.getMinutes());
console.log(myDates.getHours());
console.log(myDates.getMonth());

// creates a new date object with a specified date and time
// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
const d = new Date(2018, 11, 24, 10, 33, 30, 0);

/*
JavaScript counts months from 0 to 11:
    January = 0.
    December = 11.
*/

// 4 numbers specify year, month, day, and hour:
// const d = new Date(2018, 11, 24, 10);

// You cannot omit month. If you supply only one parameter it will be treated as milliseconds.