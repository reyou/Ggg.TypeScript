"use strict";
//=============================================================================
//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//=============================================================================
/*The destructuring assignment syntax is a JavaScript expression that makes
it possible to unpack values from arrays, or properties from objects,
into distinct variables. */
//=============================================================================
// ---------- DESTRUCTORING ----------
// You can assign multiple values on one line
var randVals = { x: 1, y: 2, z: 3 };
var x = randVals.x, y = randVals.y, z = randVals.z;
document.write(x + y + z + "<br />");
// Do the same with arrays
_a = [z, y, x], x = _a[0], y = _a[1], z = _a[2];
document.write("Switch : " + x + y + z + "<br />");
// ---------- TEMPLATE STRINGS ----------
// Create multiline strings
var multStr = "I go on for\nmany lines<br />";
document.write(multStr);
// You can use string interpolation
document.write("<b>" + multStr + "</b>");
var _a;
//# sourceMappingURL=destructuring.js.map