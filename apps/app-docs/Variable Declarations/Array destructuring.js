"use strict";
// The simplest form of destructuring is array destructuring assignment:
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var input = [1, 2];
var _a = __read(input, 2), first = _a[0], second = _a[1];
console.log(first); // outputs 1
console.log(second); // outputs 2
// This creates two new variables named first and second.
// This is equivalent to using indexing, but is much more convenient:
first = input[0];
second = input[1];
// Destructuring works with already-declared variables as well:
// swap variables
_b = __read([second, first], 2), first = _b[0], second = _b[1];
// And with parameters to a function:
function fDes(_a) {
    var _b = __read(_a, 2), first = _b[0], second = _b[1];
    console.log(first);
    console.log(second);
}
fDes([1, 2]);
// You can create a variable for the remaining items in a list using the syntax ...:
var _c = __read([1, 2, 3, 4]), first2 = _c[0], rest = _c.slice(1);
console.log(first2); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
// Of course, since this is JavaScript, you can just
// ignore trailing elements you don’t care about:
var _d = __read([1, 2, 3, 4], 1), first3 = _d[0];
console.log(first3); // outputs 1
// Or other elements:
console.log("Or other elements:");
var _e = __read([1, 2, 3, 4], 4), second2 = _e[1], fourth = _e[3];
console.log(second2);
console.log(fourth);
var _b;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXkgZGVzdHJ1Y3R1cmluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFycmF5IGRlc3RydWN0dXJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdFQUF3RTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDZixJQUFBLHFCQUF1QixFQUF0QixhQUFLLEVBQUUsY0FBTSxDQUFVO0FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZO0FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZO0FBQ2pDLHlEQUF5RDtBQUN6RCxxRUFBcUU7QUFFckUsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQixNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLCtEQUErRDtBQUMvRCxpQkFBaUI7QUFDakIsK0JBQWlDLEVBQWhDLGFBQUssRUFBRSxjQUFNLENBQW9CO0FBQ2xDLHFDQUFxQztBQUVyQyxjQUFjLEVBQWlDO1FBQWpDLGtCQUFpQyxFQUFoQyxhQUFLLEVBQUUsY0FBTTtJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQUNELElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2Isb0ZBQW9GO0FBRWhGLElBQUEseUJBQWdDLEVBQS9CLGNBQU0sRUFBRSxrQkFBTyxDQUFpQjtBQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWTtBQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsc0JBQXNCO0FBQ3pDLG9EQUFvRDtBQUNwRCxpREFBaUQ7QUFFN0MsSUFBQSw0QkFBdUIsRUFBdEIsY0FBTSxDQUFpQjtBQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWTtBQUNqQyxxQkFBcUI7QUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzlCLElBQUEsNEJBQW9DLEVBQWpDLGVBQU8sRUFBSSxjQUFNLENBQWlCO0FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyJ9