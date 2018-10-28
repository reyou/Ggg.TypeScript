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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHZW5lcmljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OzZDQUU2QztBQUM3QyxTQUFTLGdCQUFnQjtJQUV2QixJQUFJLENBQWdCLENBQUM7SUFDckIsSUFBSSxDQUFDLEdBQWtCLEVBQUUsQ0FBQztJQUUxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsaUNBQWlDO0FBQzFDLENBQUM7QUFDRDs7O2tCQUdrQjtBQUNsQjtxQ0FDcUM7QUFDckMsU0FBUyxnQkFBZ0I7SUFJdkIsSUFBSSxDQUFtQixDQUFDO0lBQ3hCLElBQUksQ0FBbUIsQ0FBQztJQUV4Qiw4Q0FBOEM7QUFDaEQsQ0FBQztBQUNEOzs7Z0RBR2dEO0FBQ2hELFNBQVMsZ0JBQWdCO0lBQ3ZCLElBQUksUUFBUSxHQUFHLFVBQVksQ0FBSTtRQUM3QixNQUFNO1FBQ04sT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDLENBQUM7SUFFRixJQUFJLE9BQU8sR0FBRyxVQUFZLENBQUk7UUFDNUIsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDLENBQUM7SUFFRixRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsbURBQW1EO0FBQ3pFLENBQUMifQ==