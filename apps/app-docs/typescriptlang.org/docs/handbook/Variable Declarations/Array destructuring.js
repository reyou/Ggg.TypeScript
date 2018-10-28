"use strict";
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
function fDes([first, second]) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXkgZGVzdHJ1Y3R1cmluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFycmF5IGRlc3RydWN0dXJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdFQUF3RTtBQUV4RSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWTtBQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWTtBQUNqQyx5REFBeUQ7QUFDekQscUVBQXFFO0FBRXJFLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakIsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQiwrREFBK0Q7QUFDL0QsaUJBQWlCO0FBQ2pCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLHFDQUFxQztBQUVyQyxTQUFTLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQW1CO0lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDYixvRkFBb0Y7QUFFcEYsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVk7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtBQUN6QyxvREFBb0Q7QUFDcEQsaURBQWlEO0FBRWpELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZO0FBQ2pDLHFCQUFxQjtBQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDbEMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEFBQUQsRUFBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyJ9