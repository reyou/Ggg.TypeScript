/*In JavaScript, every parameter is optional, and users may
leave them off as they see fit. When they do, their value is
undefined. We can get this functionality in TypeScript by adding a ?
to the end of parameters we want to be optional. For example,
let’s say we want the last name parameter from above to be optional: */
function OptionalAndDefaultParameters() {
    function buildName(firstName, lastName) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
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
    function buildName(firstName, lastName = "Smith") {
        return firstName + " " + lastName;
    }
    let result1 = buildName("Bob"); // works correctly now, returns "Bob Smith"
    let result2 = buildName("Bob", undefined); // still works, also returns "Bob Smith"
    // let result3 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
    let result4 = buildName("Bob", "Adams"); // ah, just right
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3B0aW9uYWwgYW5kIERlZmF1bHQgUGFyYW1ldGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk9wdGlvbmFsIGFuZCBEZWZhdWx0IFBhcmFtZXRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7dUVBSXVFO0FBQ3ZFO0lBQ0UsbUJBQW1CLFNBQWlCLEVBQUUsUUFBaUI7UUFDckQsSUFBSSxRQUFRO1lBQUUsT0FBTyxTQUFTLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQzs7WUFDM0MsT0FBTyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtJQUN0RCxnRkFBZ0Y7SUFDaEYsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtBQUM1RCxDQUFDO0FBRUQ7Ozs7Ozs7eURBT3lEO0FBQ3pEO0lBQ0UsbUJBQW1CLFNBQWlCLEVBQUUsUUFBUSxHQUFHLE9BQU87UUFDdEQsT0FBTyxTQUFTLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztJQUNwQyxDQUFDO0lBRUQsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsMkNBQTJDO0lBQzNFLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyx3Q0FBd0M7SUFDbkYsZ0ZBQWdGO0lBQ2hGLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7QUFDNUQsQ0FBQyJ9