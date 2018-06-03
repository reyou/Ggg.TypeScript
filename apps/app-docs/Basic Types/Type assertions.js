/*Sometimes you’ll end up in a situation where you’ll know more
about a value than TypeScript does. Usually this will happen when
you know the type of some entity could be more specific than its current type.
Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”
A type assertion is like a type cast in other languages, but performs no
special checking or restructuring of data. It has no runtime impact, and
is used purely by the compiler. TypeScript assumes that you, the programmer,
have performed any special checks that you need.
Type assertions have two forms. One is the “angle-bracket” syntax: */
let someValue = "this is a string";
let strLength = someValue.length;
let strLength2 = someValue.length;
console.log(someValue);
console.log(strLength);
console.log(strLength2);
// And the other is the as-syntax:
let someValue2 = "this is a string";
let strLength3 = someValue.length;
console.log(strLength3);
/*The two samples are equivalent. Using one over the other is
mostly a choice of preference; however, when using TypeScript with JSX,
only as-style assertions are allowed. */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZSBhc3NlcnRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVHlwZSBhc3NlcnRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztxRUFRcUU7QUFDckUsSUFBSSxTQUFTLEdBQVEsa0JBQWtCLENBQUM7QUFFeEMsSUFBSSxTQUFTLEdBQW9CLFNBQVUsQ0FBQyxNQUFNLENBQUM7QUFFbkQsSUFBSSxVQUFVLEdBQVcsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUUxQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN4QixrQ0FBa0M7QUFFbEMsSUFBSSxVQUFVLEdBQVEsa0JBQWtCLENBQUM7QUFDekMsSUFBSSxVQUFVLEdBQVksU0FBb0IsQ0FBQyxNQUFNLENBQUM7QUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN4Qjs7d0NBRXdDIn0=