/*To start off, let’s do the “hello world” of generics: 
the identity function. The identity function is a function 
that will return back whatever is passed in. You can think of 
this in a similar way to the echo command.
Without generics, we would either have to give the identity function 
a specific type: */
function HelloWorldGenerics() {
  function identity(arg: number): number {
    return arg;
  }
}
// Or, we could describe the identity function using the any type:
function HelloWorldGenerics2() {
  function identity(arg: any): any {
    return arg;
  }
}
