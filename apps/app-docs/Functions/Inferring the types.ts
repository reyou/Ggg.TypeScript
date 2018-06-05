/*Inferring the types
In playing with the example, you may notice that the TypeScript 
compiler can figure out the type if you have types on one 
side of the equation but not the other: */
/*This is called “contextual typing”, a form of type inference. 
This helps cut down on the amount of effort to keep your program typed. */
function InferringTypes() {
  // myAdd has the full function type
  let myAdd = function(x: number, y: number): number {
    return x + y;
  };

  // The parameters 'x' and 'y' have the type number
  let myAdd2: (baseValue: number, increment: number) => number = function(
    x,
    y
  ) {
    return x + y;
  };
}
