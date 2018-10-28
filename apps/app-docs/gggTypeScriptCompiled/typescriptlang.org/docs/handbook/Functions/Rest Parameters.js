"use strict";
/*Required, optional, and default parameters all have one thing in common:
they talk about one parameter at a time. Sometimes, you want to work
with multiple parameters as a group, or you may not know how many
parameters a function will ultimately take. In JavaScript, you can work with
the arguments directly using the arguments variable that is visible inside
every function body.
In TypeScript, you can gather these arguments together into a variable: */
function RestParameters() {
    function buildName(firstName, ...restOfName) {
        return firstName + " " + restOfName.join(" ");
    }
    let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
    console.log(employeeName);
}
RestParameters();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdCBQYXJhbWV0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svRnVuY3Rpb25zL1Jlc3QgUGFyYW1ldGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OzswRUFNMEU7QUFDMUUsU0FBUyxjQUFjO0lBQ3JCLFNBQVMsU0FBUyxDQUFDLFNBQWlCLEVBQUUsR0FBRyxVQUFvQjtRQUMzRCxPQUFPLFNBQVMsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUVELGNBQWMsRUFBRSxDQUFDIn0=