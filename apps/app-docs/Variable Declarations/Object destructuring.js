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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0IGRlc3RydWN0dXJpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJPYmplY3QgZGVzdHJ1Y3R1cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7Ozs7Ozs7QUFFcEMsSUFBSSxDQUFDLEdBQUc7SUFDTixDQUFDLEVBQUUsS0FBSztJQUNSLElBQUksRUFBRSxLQUFLO0lBQ1gsQ0FBQyxFQUFFLEVBQUU7SUFDTCxDQUFDLEVBQUUsS0FBSztDQUNULENBQUM7QUFDRixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNmLHVEQUF1RDtBQUN2RCxtREFBbUQ7QUFDbkQseUVBQXlFO0FBQ3pFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2Ysa0VBQWtFO0FBQ2xFLHdEQUF3RDtBQUN4RCx1RkFBdUY7QUFDdkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0FBQ3JELElBQUksRUFBRSxJQUFJLEtBQXFCLENBQUMsRUFBcEIsaUNBQW9CLENBQUM7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pCLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyJ9