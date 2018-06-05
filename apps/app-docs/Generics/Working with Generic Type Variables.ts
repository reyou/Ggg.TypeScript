/*What if we want to also log the length of the 
argument arg to the console with each call? We might be tempted to 
write this: */
function WorkingWithGenericTypeVariables() {
  function loggingIdentity<T>(arg: T): T {
    // console.log(arg.length); // Error: T doesn't have .length
    return arg;
  }
}
/*Let’s say that we’ve actually intended this function to 
work on arrays of T rather than T directly. Since we’re working with arrays, 
the .length member should be available. We can describe this just like we 
would create arrays of other types:*/
function WorkingWithGenericTypeVariables2() {
  function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
  }
}
// We can alternatively write the sample example this way:
function WorkingWithGenericTypeVariables3() {
  function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
  }
}
