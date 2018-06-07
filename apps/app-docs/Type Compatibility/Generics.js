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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHZW5lcmljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7NkNBRTZDO0FBQzdDO0lBRUUsSUFBSSxDQUFnQixDQUFDO0lBQ3JCLElBQUksQ0FBZ0IsQ0FBQztJQUVyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsaUNBQWlDO0FBQzFDLENBQUM7QUFDRDs7O2tCQUdrQjtBQUNsQjtxQ0FDcUM7QUFDckM7SUFJRSxJQUFJLENBQW1CLENBQUM7SUFDeEIsSUFBSSxDQUFtQixDQUFDO0lBRXhCLDhDQUE4QztBQUNoRCxDQUFDO0FBQ0Q7OztnREFHZ0Q7QUFDaEQ7SUFDRSxJQUFJLFFBQVEsR0FBRyxVQUFZLENBQUk7UUFDN0IsTUFBTTtRQUNOLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDLENBQUM7SUFFRixJQUFJLE9BQU8sR0FBRyxVQUFZLENBQUk7UUFDNUIsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQztJQUVGLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxtREFBbUQ7QUFDekUsQ0FBQyJ9