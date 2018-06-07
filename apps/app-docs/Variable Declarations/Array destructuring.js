// The simplest form of destructuring is array destructuring assignment:
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first); // outputs 1
console.log(second); // outputs 2
// This creates two new variables named first and second.
// This is equivalent to using indexing, but is much more convenient:
first = input[0];
second = input[1];
// Destructuring works with already-declared variables as well:
// swap variables
_a = [second, first], first = _a[0], second = _a[1];
// And with parameters to a function:
function fDes(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
fDes([1, 2]);
// You can create a variable for the remaining items in a list using the syntax ...:
var _b = [1, 2, 3, 4], first2 = _b[0], rest = _b.slice(1);
console.log(first2); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
// Of course, since this is JavaScript, you can just
// ignore trailing elements you don’t care about:
var first3 = [1, 2, 3, 4][0];
console.log(first3); // outputs 1
// Or other elements:
console.log("Or other elements:");
var _c = [1, 2, 3, 4], second2 = _c[1], fourth = _c[3];
console.log(second2);
console.log(fourth);
var _a;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXkgZGVzdHJ1Y3R1cmluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFycmF5IGRlc3RydWN0dXJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQXdFO0FBRXhFLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2QsSUFBQSxnQkFBSyxFQUFFLGlCQUFNLENBQVU7QUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVk7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVk7QUFDakMseURBQXlEO0FBQ3pELHFFQUFxRTtBQUVyRSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pCLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsK0RBQStEO0FBQy9ELGlCQUFpQjtBQUNqQixvQkFBaUMsRUFBaEMsYUFBSyxFQUFFLGNBQU0sQ0FBb0I7QUFDbEMscUNBQXFDO0FBRXJDLGNBQWMsRUFBaUM7UUFBaEMsYUFBSyxFQUFFLGNBQU07SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNiLG9GQUFvRjtBQUVoRixJQUFBLGlCQUFnQyxFQUEvQixjQUFNLEVBQUUsa0JBQU8sQ0FBaUI7QUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVk7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtBQUN6QyxvREFBb0Q7QUFDcEQsaURBQWlEO0FBRTVDLElBQUEsd0JBQU0sQ0FBaUI7QUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVk7QUFDakMscUJBQXFCO0FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUM5QixJQUFBLGlCQUFvQyxFQUFqQyxlQUFPLEVBQUksY0FBTSxDQUFpQjtBQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMifQ==