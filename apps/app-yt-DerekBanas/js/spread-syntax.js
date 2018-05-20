"use strict";
//=============================================================================
/*Compiler incorrectly reports parameter/call target signature mismatch when
using the spread operator #4130 */
// https://github.com/Microsoft/TypeScript/issues/4130
//=============================================================================
// ---------- SPREAD OPERATOR ----------
// We can separate values in an array into
// attributs in a function
function theSum(x, y, z) {
    console.log("Sum : " + (x + y + z));
}
var args = [4, 5, 6];
theSum.apply(void 0, args);
//# sourceMappingURL=spread-syntax.js.map