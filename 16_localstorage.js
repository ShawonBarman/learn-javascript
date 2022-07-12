// The localStorage object allows you to save key/value pairs in the browser.

// The localStorage object stores data with no expiration date.
// The data is not deleted when the browser is closed, and are available for future sessions.

localStorage.setItem('name', 'Shawon');

console.log(localStorage);

localStorage.removeItem('name');

console.log(localStorage);
// console.log(localStorage.getItem('name'));

// localStorage.clear();