/*Because TypeScript is a structural type system, type 
parameters only affect the resulting type when consumed as 
part of the type of a member. For example, */
function CompatibleTypes1() {
  interface Empty<T> {}
  let x: Empty<number>;
  let y: Empty<string>;

  x = y; // okay, y matches structure of x
}
/*In the above, x and y are compatible because their structures 
do not use the type argument in a differentiating way. 
Changing this example by adding a member to Empty<T> shows 
how this works: */
/*In this way, a generic type that has its type arguments specified 
acts just like a non-generic type. */
function CompatibleTypes2() {
  interface NotEmpty<T> {
    data: T;
  }
  let x: NotEmpty<number>;
  let y: NotEmpty<string>;

  // x = y; // error, x and y are not compatible
}
/*For generic types that do not have their type arguments specified, 
compatibility is checked by specifying any in place of all unspecified 
type arguments. The resulting types are then checked for compatibility, 
just as in the non-generic case. For example, */
function CompatibleTypes3() {
  let identity = function<T>(x: T): T {
    // ...
    return x;
  };

  let reverse = function<U>(y: U): U {
    return y;
  };

  identity = reverse; // Okay because (x: any)=>any matches (y: any)=>any
}
