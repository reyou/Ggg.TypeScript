/*Required, optional, and default parameters all have one thing in common: 
they talk about one parameter at a time. Sometimes, you want to work 
with multiple parameters as a group, or you may not know how many 
parameters a function will ultimately take. In JavaScript, you can work with 
the arguments directly using the arguments variable that is visible inside 
every function body.
In TypeScript, you can gather these arguments together into a variable: */
function RestParameters() {
  function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }

  let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
  console.log(employeeName);
}

RestParameters();
