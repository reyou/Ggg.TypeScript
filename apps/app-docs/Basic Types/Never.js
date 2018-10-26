"use strict";
/*The never type represents the type of values that never occur.
For instance, never is the return type for a function expression or
an arrow function expression that always throws an exception or one that never
returns; Variables also acquire the type never when narrowed by any type guards
that can never be true.
The never type is a subtype of, and assignable to, every type; however, no type
is a subtype of, or assignable to, never (except never itself). Even any isn’t
assignable to never.
Some examples of functions returning never: */
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJOZXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7OzhDQVE4QztBQUM5QywyREFBMkQ7QUFDM0QsZUFBZSxPQUFlO0lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUVELGdDQUFnQztBQUNoQztJQUNFLE9BQU8sS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVELDJEQUEyRDtBQUMzRDtJQUNFLE9BQU8sSUFBSSxFQUFFLEdBQUU7QUFDakIsQ0FBQyJ9