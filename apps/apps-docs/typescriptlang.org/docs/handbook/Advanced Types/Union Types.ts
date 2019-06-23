/*Union types are closely related to intersection types, but 
they are used very differently. Occasionally, you’ll run 
into a library that expects a parameter to be either a number 
or a string. For instance, take the following function: */
function UnionTypes() {
  /**
   * Takes a string and adds "padding" to the left.
   * If 'padding' is a string, then 'padding' is appended to the left side.
   * If 'padding' is a number, then that number of spaces is added to the left side.
   */
  function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
  }

  let result = padLeft("Hello world", 4); // returns "    Hello world"
  console.log(result);
}
UnionTypes();

function UnionTypes2() {
  function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
  }

  let result = padLeft("Hello world", 4); // returns "    Hello world"
  console.log(result);
  // let indentedString = padLeft("Hello world", true); // errors during compilation
}
UnionTypes2();
