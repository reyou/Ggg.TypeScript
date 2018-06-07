/*When comparing functions for compatibility, optional and required 
parameters are interchangeable. Extra optional parameters of the source 
type are not an error, and optional parameters of the target type 
without corresponding parameters in the source type are not an error. */
function OptionalParametersAndRestParameters() {
  function invokeLater(args: any[], callback: (...args: any[]) => void) {
    /* ... Invoke callback with 'args' ... */
  }

  // Unsound - invokeLater "might" provide any number of arguments
  invokeLater([1, 2], (x, y) => console.log(x + ", " + y));

  // Confusing (x and y are actually required) and undiscoverable
  invokeLater([1, 2], (x?, y?) => console.log(x + ", " + y));
}
