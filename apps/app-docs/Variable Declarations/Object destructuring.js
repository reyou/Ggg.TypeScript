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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0IGRlc3RydWN0dXJpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJPYmplY3QgZGVzdHJ1Y3R1cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7Ozs7Ozs7QUFFcEMsSUFBSSxDQUFDLEdBQUc7SUFDTixDQUFDLEVBQUUsS0FBSztJQUNSLElBQUksRUFBRSxLQUFLO0lBQ1gsQ0FBQyxFQUFFLEVBQUU7SUFDTCxDQUFDLEVBQUUsS0FBSztDQUNULENBQUM7QUFDSSxJQUFBLE9BQUMsRUFBRSxPQUFDLENBQU87QUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZix1REFBdUQ7QUFDdkQsbURBQW1EO0FBQ25ELHlFQUF5RTtBQUN6RSxDQUFDLHlCQUErQixFQUE3QixRQUFDLEVBQUUsUUFBQyxDQUEwQixDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2Ysa0VBQWtFO0FBQ2xFLHdEQUF3RDtBQUN4RCx1RkFBdUY7QUFDdkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0FBQy9DLElBQUEsYUFBSSxFQUFFLGlDQUFjLENBQU87QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pCLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyJ9