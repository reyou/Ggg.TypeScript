// You can also destructure objects:

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
let { aDes, ...passthrough } = o;
console.log(aDes);
console.log(passthrough);
let total = passthrough.b + passthrough.c.length;
console.log(total);
