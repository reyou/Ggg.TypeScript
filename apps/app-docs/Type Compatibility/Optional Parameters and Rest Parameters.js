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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3B0aW9uYWwgUGFyYW1ldGVycyBhbmQgUmVzdCBQYXJhbWV0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiT3B0aW9uYWwgUGFyYW1ldGVycyBhbmQgUmVzdCBQYXJhbWV0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O3dFQUd3RTtBQUN4RSxTQUFTLG1DQUFtQztJQUMxQyxTQUFTLFdBQVcsQ0FBQyxJQUFXLEVBQUUsUUFBa0M7UUFDbEUseUNBQXlDO0lBQzNDLENBQUM7SUFFRCxnRUFBZ0U7SUFDaEUsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFekQsK0RBQStEO0lBQy9ELFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUUsRUFBRSxDQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdELENBQUMifQ==