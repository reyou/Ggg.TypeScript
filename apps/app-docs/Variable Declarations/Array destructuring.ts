// The simplest form of destructuring is array destructuring assignment:

let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2
// This creates two new variables named first and second.
// This is equivalent to using indexing, but is much more convenient:

first = input[0];
second = input[1];
// Destructuring works with already-declared variables as well:
// swap variables
[first, second] = [second, first];
// And with parameters to a function:

function fDes([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}
fDes([1, 2]);
// You can create a variable for the remaining items in a list using the syntax ...:

let [first2, ...rest] = [1, 2, 3, 4];
console.log(first2); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
// Of course, since this is JavaScript, you can just
// ignore trailing elements you don’t care about:

let [first3] = [1, 2, 3, 4];
console.log(first3); // outputs 1
// Or other elements:
console.log("Or other elements:");
let [, second2, , fourth] = [1, 2, 3, 4];
console.log(second2);
console.log(fourth);
