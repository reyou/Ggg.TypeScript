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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXkgZGVzdHJ1Y3R1cmluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFycmF5IGRlc3RydWN0dXJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQXdFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNmLElBQUEscUJBQXVCLEVBQXRCLGFBQUssRUFBRSxjQUFNLENBQVU7QUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVk7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVk7QUFDakMseURBQXlEO0FBQ3pELHFFQUFxRTtBQUVyRSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pCLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsK0RBQStEO0FBQy9ELGlCQUFpQjtBQUNqQiwrQkFBaUMsRUFBaEMsYUFBSyxFQUFFLGNBQU0sQ0FBb0I7QUFDbEMscUNBQXFDO0FBRXJDLGNBQWMsRUFBaUM7UUFBakMsa0JBQWlDLEVBQWhDLGFBQUssRUFBRSxjQUFNO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDYixvRkFBb0Y7QUFFaEYsSUFBQSx5QkFBZ0MsRUFBL0IsY0FBTSxFQUFFLGtCQUFPLENBQWlCO0FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZO0FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7QUFDekMsb0RBQW9EO0FBQ3BELGlEQUFpRDtBQUU3QyxJQUFBLDRCQUF1QixFQUF0QixjQUFNLENBQWlCO0FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZO0FBQ2pDLHFCQUFxQjtBQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDOUIsSUFBQSw0QkFBb0MsRUFBakMsZUFBTyxFQUFJLGNBQU0sQ0FBaUI7QUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDIn0=