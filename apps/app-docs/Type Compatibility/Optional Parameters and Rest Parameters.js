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
    invokeLater([1, 2], function (x, y) { return console.log(x + ", " + y); });
    // Confusing (x and y are actually required) and undiscoverable
    invokeLater([1, 2], function (x, y) { return console.log(x + ", " + y); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3B0aW9uYWwgUGFyYW1ldGVycyBhbmQgUmVzdCBQYXJhbWV0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiT3B0aW9uYWwgUGFyYW1ldGVycyBhbmQgUmVzdCBQYXJhbWV0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O3dFQUd3RTtBQUN4RTtJQUNFLHFCQUFxQixJQUFXLEVBQUUsUUFBa0M7UUFDbEUseUNBQXlDO0lBQzNDLENBQUM7SUFFRCxnRUFBZ0U7SUFDaEUsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBRXpELCtEQUErRDtJQUMvRCxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsVUFBQyxDQUFFLEVBQUUsQ0FBRSxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7QUFDN0QsQ0FBQyJ9