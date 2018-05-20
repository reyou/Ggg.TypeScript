"use strict";
// ---------- GENERIC FUNCTIONS ----------
// We use generic functions when we want
// to be able to work with multiple data
// types in similar ways
// To create a generic function we place
// 1 or more data type markers in angled
// brackets after the function name. We
// then use those data type markers
// instead of actual data types.
function GetType(val) {
    return typeof val;
}
var aStr = "A String";
var aNum = 10;
document.write(GetType(aStr) + "<br />");
document.write(GetType(aNum) + "<br />");
// You define a generic function that
// excepts any class that implements
// an interface
function GetWheels(veh) {
    return veh.drive();
}
GetWheels(car);
GetWheels(bike);
// You can also define generic classes that
// can work with multiple data types
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var aNumber = new GenericNumber();
// Define how we want add to work with numbers
aNumber.add = function (x, y) {
    return x + y;
};
document.write("5 + 4 = " + aNumber.add(5, 4) + "<br />");
var aStrNum = new GenericNumber();
// Define how we want add to work with strings
aStrNum.add = function (x, y) {
    return String(Number(x) + Number(y));
};
document.write("5 + 6 = " + aStrNum.add("5", "6") + "<br />");
//# sourceMappingURL=generic-functions.js.map