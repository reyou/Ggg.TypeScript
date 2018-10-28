"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZSBhc3NlcnRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svQmFzaWMgVHlwZXMvVHlwZSBhc3NlcnRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7cUVBUXFFO0FBQ3JFLElBQUksU0FBUyxHQUFRLGtCQUFrQixDQUFDO0FBRXhDLElBQUksU0FBUyxHQUFvQixTQUFVLENBQUMsTUFBTSxDQUFDO0FBRW5ELElBQUksVUFBVSxHQUFXLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEIsa0NBQWtDO0FBRWxDLElBQUksVUFBVSxHQUFRLGtCQUFrQixDQUFDO0FBQ3pDLElBQUksVUFBVSxHQUFZLFNBQW9CLENBQUMsTUFBTSxDQUFDO0FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEI7O3dDQUV3QyJ9