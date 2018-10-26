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
var o = {
    a: "foo",
    aDes: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b;
console.log(a);
console.log(b);
// This creates new variables a and b from o.a and o.b.
// Notice that you can skip c if you don’t need it.
// Like array destructuring, you can have assignment without declaration:
(_a = { a: "baz", b: 101 }, a = _a.a, b = _a.b);
console.log(a);
console.log(b);
// Notice that we had to surround this statement with parentheses.
// JavaScript normally parses a { as the start of block.
// You can create a variable for the remaining items in an object using the syntax ...:
console.log("\nvariable for the remaining items:\n");
var aDes = o.aDes, passthrough = __rest(o, ["aDes"]);
console.log(aDes);
console.log(passthrough);
var total = passthrough.b + passthrough.c.length;
console.log(total);
var _a;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0IGRlc3RydWN0dXJpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJPYmplY3QgZGVzdHJ1Y3R1cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0NBQW9DOzs7Ozs7Ozs7O0FBRXBDLElBQUksQ0FBQyxHQUFHO0lBQ04sQ0FBQyxFQUFFLEtBQUs7SUFDUixJQUFJLEVBQUUsS0FBSztJQUNYLENBQUMsRUFBRSxFQUFFO0lBQ0wsQ0FBQyxFQUFFLEtBQUs7Q0FDVCxDQUFDO0FBQ0ksSUFBQSxPQUFDLEVBQUUsT0FBQyxDQUFPO0FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2YsdURBQXVEO0FBQ3ZELG1EQUFtRDtBQUNuRCx5RUFBeUU7QUFDekUsQ0FBQyx5QkFBK0IsRUFBN0IsUUFBQyxFQUFFLFFBQUMsQ0FBMEIsQ0FBQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNmLGtFQUFrRTtBQUNsRSx3REFBd0Q7QUFDeEQsdUZBQXVGO0FBQ3ZGLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztBQUMvQyxJQUFBLGFBQUksRUFBRSxpQ0FBYyxDQUFPO0FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN6QixJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMifQ==