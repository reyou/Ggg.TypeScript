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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29ya2luZyB3aXRoIEdlbmVyaWMgVHlwZSBWYXJpYWJsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXb3JraW5nIHdpdGggR2VuZXJpYyBUeXBlIFZhcmlhYmxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Y0FFYztBQUNkO0lBQ0UseUJBQTRCLEdBQU07UUFDaEMsNERBQTREO1FBQzVELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztBQUNILENBQUM7QUFDRDs7O3FDQUdxQztBQUNyQztJQUNFLHlCQUE0QixHQUFRO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsd0NBQXdDO1FBQ2pFLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztBQUNILENBQUM7QUFDRCwwREFBMEQ7QUFDMUQ7SUFDRSx5QkFBNEIsR0FBYTtRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHdDQUF3QztRQUNqRSxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7QUFDSCxDQUFDIn0=