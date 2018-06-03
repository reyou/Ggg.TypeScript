/*Interfaces are capable of describing the wide range of shapes 
that JavaScript objects can take. In addition to describing an 
object with properties, interfaces are also capable of describing 
function types.
To describe a function type with an interface, we give the interface 
a call signature. This is like a function declaration with only 
the parameter list and return type given. Each parameter in the 
parameter list requires both name and type. */
interface SearchFunc {
  (source: string, subString: string): boolean;
}
/*Once defined, we can use this function type interface like we 
would other interfaces. Here, we show how you can create a variable 
of a function type and assign it a function value of the same type. */
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
let result = mySearch("this is a sentence.", "ten");
console.log(result);
