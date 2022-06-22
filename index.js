export const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

// console.log(shuffleArray([1, 2, 3, 4]));
// Result: [ 1, 4, 3, 2 ] **

export const isDateValid = (...val) =>
  !Number.isNaN(new Date(...val).valueOf());

// isDateValid("December 17, 1995 03:24:00");
// Result: true

export const copyToClipboard = (text) => navigator.clipboard.writeText(text);
//copyToClipboard("Hello World");

export const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
// dayOfYear(new Date());
// Result: 272

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
// capitalize("follow for more")
// Result: Follow for more
