// Now that we’ve typed the function, let’s write the
// full type of the function out by looking at the each piece of the function type.
/*A function’s type has the same two parts: the type of the arguments 
and the return type. When writing out the whole function type, both 
parts are required. We write out the parameter types just like a 
parameter list, giving each parameter a name and a type. 
This name is just to help with readability. We could have instead written: */
let myAddType: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};

let mySubtractType: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x - y;
};
