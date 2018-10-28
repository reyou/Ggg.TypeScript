"use strict";
/*Because TypeScript is a structural type system, type
parameters only affect the resulting type when consumed as
part of the type of a member. For example, */
function CompatibleTypes1() {
    let x;
    let y = [];
    x = y; // okay, y matches structure of x
}
/*In the above, x and y are compatible because their structures
do not use the type argument in a differentiating way.
Changing this example by adding a member to Empty<T> shows
how this works: */
/*In this way, a generic type that has its type arguments specified
acts just like a non-generic type. */
function CompatibleTypes2() {
    let x;
    let y;
    // x = y; // error, x and y are not compatible
}
/*For generic types that do not have their type arguments specified,
compatibility is checked by specifying any in place of all unspecified
type arguments. The resulting types are then checked for compatibility,
just as in the non-generic case. For example, */
function CompatibleTypes3() {
    let identity = function (x) {
        // ...
        return x;
    };
    let reverse = function (y) {
        return y;
    };
    identity = reverse; // Okay because (x: any)=>any matches (y: any)=>any
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9UeXBlIENvbXBhdGliaWxpdHkvR2VuZXJpY3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs2Q0FFNkM7QUFDN0MsU0FBUyxnQkFBZ0I7SUFFdkIsSUFBSSxDQUFnQixDQUFDO0lBQ3JCLElBQUksQ0FBQyxHQUFrQixFQUFFLENBQUM7SUFFMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGlDQUFpQztBQUMxQyxDQUFDO0FBQ0Q7OztrQkFHa0I7QUFDbEI7cUNBQ3FDO0FBQ3JDLFNBQVMsZ0JBQWdCO0lBSXZCLElBQUksQ0FBbUIsQ0FBQztJQUN4QixJQUFJLENBQW1CLENBQUM7SUFFeEIsOENBQThDO0FBQ2hELENBQUM7QUFDRDs7O2dEQUdnRDtBQUNoRCxTQUFTLGdCQUFnQjtJQUN2QixJQUFJLFFBQVEsR0FBRyxVQUFZLENBQUk7UUFDN0IsTUFBTTtRQUNOLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0lBRUYsSUFBSSxPQUFPLEdBQUcsVUFBWSxDQUFJO1FBQzVCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0lBRUYsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDLG1EQUFtRDtBQUN6RSxDQUFDIn0=