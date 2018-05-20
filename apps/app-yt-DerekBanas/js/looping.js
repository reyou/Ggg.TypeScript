"use strict";
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
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var val = strArray_1[_i];
    console.log(val);
}
//# sourceMappingURL=looping.js.map