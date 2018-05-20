// https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
// ---------- LOOPING ----------
// Looping works the same in TypeScript as in JS
// but for..of is added to get values in either
// an array or string

var randArray = [5, 6, 7, 8];

// for..in provides the indexes
for (var val in randArray) {
  console.log(val);
}

// Convert a number array into a string array
var strArray = randArray.map(String);

// for..of provides the values
for (var val of strArray) {
  console.log(val);
}
