/*In JavaScript, every parameter is optional, and users may 
leave them off as they see fit. When they do, their value is 
undefined. We can get this functionality in TypeScript by adding a ? 
to the end of parameters we want to be optional. For example, 
let’s say we want the last name parameter from above to be optional: */
function OptionalAndDefaultParameters() {
  function buildName(firstName: string, lastName?: string) {
    if (lastName) return firstName + " " + lastName;
    else return firstName;
  }

  let result1 = buildName("Bob"); // works correctly now
  // let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
  let result3 = buildName("Bob", "Adams"); // ah, just right
}

/*Any optional parameters must follow required parameters. Had we wanted to 
make the first name optional rather than the last name, we would need to 
change the order of parameters in the function, putting the first 
name last in the list.
In TypeScript, we can also set a value that a parameter will be assigned 
if the user does not provide one, or if the user passes undefined in its 
place. These are called default-initialized parameters. Let’s take the 
previous example and default the last name to "Smith". */
function DefaultInitializedParameters() {
  function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
  }

  let result1 = buildName("Bob"); // works correctly now, returns "Bob Smith"
  let result2 = buildName("Bob", undefined); // still works, also returns "Bob Smith"
  // let result3 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
  let result4 = buildName("Bob", "Adams"); // ah, just right
}
