// Default values let you specify a default
// value in case a property is undefined:
// keepWholeObject now has a variable for wholeObject as well as the
// properties a and b, even if b is undefined.
function keepWholeObject(wholeObject: { a: string; b?: number }) {
  let { a, b = 1001 } = wholeObject;
  console.log(a + b);
}

keepWholeObject({
  a: "kafa-",
  b: 1500
});
