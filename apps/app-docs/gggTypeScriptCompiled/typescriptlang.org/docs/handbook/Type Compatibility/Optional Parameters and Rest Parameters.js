"use strict";
/*When comparing functions for compatibility, optional and required
parameters are interchangeable. Extra optional parameters of the source
type are not an error, and optional parameters of the target type
without corresponding parameters in the source type are not an error. */
function OptionalParametersAndRestParameters() {
    function invokeLater(args, callback) {
        /* ... Invoke callback with 'args' ... */
    }
    // Unsound - invokeLater "might" provide any number of arguments
    invokeLater([1, 2], (x, y) => console.log(x + ", " + y));
    // Confusing (x and y are actually required) and undiscoverable
    invokeLater([1, 2], (x, y) => console.log(x + ", " + y));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3B0aW9uYWwgUGFyYW1ldGVycyBhbmQgUmVzdCBQYXJhbWV0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svVHlwZSBDb21wYXRpYmlsaXR5L09wdGlvbmFsIFBhcmFtZXRlcnMgYW5kIFJlc3QgUGFyYW1ldGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozt3RUFHd0U7QUFDeEUsU0FBUyxtQ0FBbUM7SUFDMUMsU0FBUyxXQUFXLENBQUMsSUFBVyxFQUFFLFFBQWtDO1FBQ2xFLHlDQUF5QztJQUMzQyxDQUFDO0lBRUQsZ0VBQWdFO0lBQ2hFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXpELCtEQUErRDtJQUMvRCxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFFLEVBQUUsQ0FBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3RCxDQUFDIn0=