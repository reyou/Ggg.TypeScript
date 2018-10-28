// You can also give different names to properties:
let oProp = {
  a: "foo",
  aDes: "foo",
  aProp: "foo",
  bProp: 12,
  b: 12,
  c: "bar"
};
let { a: newName1, b: newName2 } = oProp;
console.log(newName1);
console.log(newName2);
// Here the syntax starts to get confusing. You can read a:
// newName1 as “a as newName1”. The direction is left-to-right,
// as if you had written:

let newName3 = oProp.a;
let newName4 = oProp.b;
console.log(newName3);
console.log(newName4);
// Confusingly, the colon here does not indicate the type.
// The type, if you specify it, still needs to be written
// after the entire destructuring:
let { aProp, bProp }: { aProp: string; bProp: number } = oProp;
console.log(aProp);
console.log(bProp);
