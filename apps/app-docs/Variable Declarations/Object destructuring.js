"use strict";
// You can also destructure objects:
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
let o = {
    a: "foo",
    aDes: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
console.log(a);
console.log(b);
// This creates new variables a and b from o.a and o.b.
// Notice that you can skip c if you don’t need it.
// Like array destructuring, you can have assignment without declaration:
({ a, b } = { a: "baz", b: 101 });
console.log(a);
console.log(b);
// Notice that we had to surround this statement with parentheses.
// JavaScript normally parses a { as the start of block.
// You can create a variable for the remaining items in an object using the syntax ...:
console.log("\nvariable for the remaining items:\n");
let { aDes } = o, passthrough = __rest(o, ["aDes"]);
console.log(aDes);
console.log(passthrough);
let total = passthrough.b + passthrough.c.length;
console.log(total);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0IGRlc3RydWN0dXJpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJPYmplY3QgZGVzdHJ1Y3R1cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0NBQW9DOzs7Ozs7Ozs7O0FBRXBDLElBQUksQ0FBQyxHQUFHO0lBQ04sQ0FBQyxFQUFFLEtBQUs7SUFDUixJQUFJLEVBQUUsS0FBSztJQUNYLENBQUMsRUFBRSxFQUFFO0lBQ0wsQ0FBQyxFQUFFLEtBQUs7Q0FDVCxDQUFDO0FBQ0YsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZix1REFBdUQ7QUFDdkQsbURBQW1EO0FBQ25ELHlFQUF5RTtBQUN6RSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNmLGtFQUFrRTtBQUNsRSx3REFBd0Q7QUFDeEQsdUZBQXVGO0FBQ3ZGLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztBQUNyRCxJQUFJLEVBQUUsSUFBSSxLQUFxQixDQUFDLEVBQXBCLGlDQUFvQixDQUFDO0FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN6QixJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMifQ==