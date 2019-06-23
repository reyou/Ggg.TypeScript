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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9CYXNpYyBUeXBlcy9OZXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7OzhDQVE4QztBQUM5QywyREFBMkQ7QUFDM0QsU0FBUyxLQUFLLENBQUMsT0FBZTtJQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFFRCxnQ0FBZ0M7QUFDaEMsU0FBUyxJQUFJO0lBQ1gsT0FBTyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsMkRBQTJEO0FBQzNELFNBQVMsWUFBWTtJQUNuQixPQUFPLElBQUksRUFBRSxHQUFFO0FBQ2pCLENBQUMifQ==