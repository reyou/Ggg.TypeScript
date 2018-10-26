"use strict";
/*Because TypeScript is a structural type system, type
parameters only affect the resulting type when consumed as
part of the type of a member. For example, */
function CompatibleTypes1() {
    var x;
    var y;
    x = y; // okay, y matches structure of x
}
/*In the above, x and y are compatible because their structures
do not use the type argument in a differentiating way.
Changing this example by adding a member to Empty<T> shows
how this works: */
/*In this way, a generic type that has its type arguments specified
acts just like a non-generic type. */
function CompatibleTypes2() {
    var x;
    var y;
    // x = y; // error, x and y are not compatible
}
/*For generic types that do not have their type arguments specified,
compatibility is checked by specifying any in place of all unspecified
type arguments. The resulting types are then checked for compatibility,
just as in the non-generic case. For example, */
function CompatibleTypes3() {
    var identity = function (x) {
        // ...
        return x;
    };
    var reverse = function (y) {
        return y;
    };
    identity = reverse; // Okay because (x: any)=>any matches (y: any)=>any
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHZW5lcmljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OzZDQUU2QztBQUM3QztJQUVFLElBQUksQ0FBZ0IsQ0FBQztJQUNyQixJQUFJLENBQWdCLENBQUM7SUFFckIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGlDQUFpQztBQUMxQyxDQUFDO0FBQ0Q7OztrQkFHa0I7QUFDbEI7cUNBQ3FDO0FBQ3JDO0lBSUUsSUFBSSxDQUFtQixDQUFDO0lBQ3hCLElBQUksQ0FBbUIsQ0FBQztJQUV4Qiw4Q0FBOEM7QUFDaEQsQ0FBQztBQUNEOzs7Z0RBR2dEO0FBQ2hEO0lBQ0UsSUFBSSxRQUFRLEdBQUcsVUFBWSxDQUFJO1FBQzdCLE1BQU07UUFDTixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQztJQUVGLElBQUksT0FBTyxHQUFHLFVBQVksQ0FBSTtRQUM1QixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQztJQUVGLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxtREFBbUQ7QUFDekUsQ0FBQyJ9