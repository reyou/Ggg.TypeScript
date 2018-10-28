/*While string index signatures are a powerful way to 
describe the “dictionary” pattern, they also enforce that 
all properties match their return type. This is because a 
string index declares that obj.property is also available 
as obj["property"]. In the following example, name’s type 
does not match the string index’s type, and the type-checker 
gives an error: */
interface NumberDictionary {
  [index: string]: number;
  length: number; // ok, length is a number
  // name: string; // error, the type of 'name' is not a subtype of the indexer
}
// Finally, you can make index signatures readonly in order to prevent assignment to their indices:

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
// You can’t set myArray[2] because the index signature is readonly.
// myArray2[2] = "Mallory"; // error!
