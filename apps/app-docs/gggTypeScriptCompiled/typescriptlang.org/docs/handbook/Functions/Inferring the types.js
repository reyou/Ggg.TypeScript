"use strict";
/*Inferring the types
In playing with the example, you may notice that the TypeScript
compiler can figure out the type if you have types on one
side of the equation but not the other: */
/*This is called “contextual typing”, a form of type inference.
This helps cut down on the amount of effort to keep your program typed. */
function InferringTypes() {
    // myAdd has the full function type
    let myAdd = function (x, y) {
        return x + y;
    };
    // The parameters 'x' and 'y' have the type number
    let myAdd2 = function (x, y) {
        return x + y;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5mZXJyaW5nIHRoZSB0eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3R5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL0Z1bmN0aW9ucy9JbmZlcnJpbmcgdGhlIHR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OzBDQUcwQztBQUMxQzswRUFDMEU7QUFDMUUsU0FBUyxjQUFjO0lBQ3JCLG1DQUFtQztJQUNuQyxJQUFJLEtBQUssR0FBRyxVQUFTLENBQVMsRUFBRSxDQUFTO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQztJQUVGLGtEQUFrRDtJQUNsRCxJQUFJLE1BQU0sR0FBcUQsVUFDN0QsQ0FBQyxFQUNELENBQUM7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDLENBQUM7QUFDSixDQUFDIn0=