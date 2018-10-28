"use strict";
/*What if we want to also log the length of the
argument arg to the console with each call? We might be tempted to
write this: */
function WorkingWithGenericTypeVariables() {
    function loggingIdentity(arg) {
        // console.log(arg.length); // Error: T doesn't have .length
        return arg;
    }
}
/*Let’s say that we’ve actually intended this function to
work on arrays of T rather than T directly. Since we’re working with arrays,
the .length member should be available. We can describe this just like we
would create arrays of other types:*/
function WorkingWithGenericTypeVariables2() {
    function loggingIdentity(arg) {
        console.log(arg.length); // Array has a .length, so no more error
        return arg;
    }
}
// We can alternatively write the sample example this way:
function WorkingWithGenericTypeVariables3() {
    function loggingIdentity(arg) {
        console.log(arg.length); // Array has a .length, so no more error
        return arg;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29ya2luZyB3aXRoIEdlbmVyaWMgVHlwZSBWYXJpYWJsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXb3JraW5nIHdpdGggR2VuZXJpYyBUeXBlIFZhcmlhYmxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O2NBRWM7QUFDZCxTQUFTLCtCQUErQjtJQUN0QyxTQUFTLGVBQWUsQ0FBSSxHQUFNO1FBQ2hDLDREQUE0RDtRQUM1RCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7QUFDSCxDQUFDO0FBQ0Q7OztxQ0FHcUM7QUFDckMsU0FBUyxnQ0FBZ0M7SUFDdkMsU0FBUyxlQUFlLENBQUksR0FBUTtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHdDQUF3QztRQUNqRSxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7QUFDSCxDQUFDO0FBQ0QsMERBQTBEO0FBQzFELFNBQVMsZ0NBQWdDO0lBQ3ZDLFNBQVMsZUFBZSxDQUFJLEdBQWE7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx3Q0FBd0M7UUFDakUsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0FBQ0gsQ0FBQyJ9