"use strict";
// ---------- FUNCTIONS ----------
// You can assign the variable types for the attributes
// You assign the return type after the attributes
// or if nothing is returned use void
var getSum = function (num1, num2) {
    return num1 + num2;
};
var theSum1 = getSum(5, 2);
console.log("5 + 2 = " + theSum1 + "<br />");
// Assign a default value in the function declaration
// If an attribute isn't required follow the variable
// with a ?
var getDiff = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    // Check if a value was assigned with typeof
    if (typeof num3 !== "undefined") {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
console.log("5 - 2 = " + getDiff(5) + "<br />");
console.log("5 - 2 - 3 = " + getDiff(5, 2, 3) + "<br />");
// You can receive an unknown number of values
// with a rest parameter ...nums
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    // We can use reduce with the array to add all
    // the values together one by one
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    console.log("Sum : " + sum + "<br />");
};
sumAll(1, 2, 3, 4, 5);
// Arrow functions don't include function in
// the definition
var addOne = function (x) { return x + 1; };
console.log("1 + 1 = " + addOne(1) + "<br />");
//# sourceMappingURL=functions.js.map