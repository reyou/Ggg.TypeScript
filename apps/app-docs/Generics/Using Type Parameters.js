"use strict";
/*You can declare a type parameter that is constrained by another
type parameter. For example, here we’d like to get a property from
an object given its name. We’d like to ensure that we’re not
accidentally grabbing a property that does not exist on the obj,
so we’ll place a constraint between the two types: */
function UsingTypeParameters() {
    function getProperty(obj, key) {
        return obj[key];
    }
    var x = { a: 1, b: 2, c: 3, d: 4 };
    var result = getProperty(x, "a"); // okay
    // getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
    console.log(result);
}
UsingTypeParameters();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNpbmcgVHlwZSBQYXJhbWV0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXNpbmcgVHlwZSBQYXJhbWV0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztxREFJcUQ7QUFDckQ7SUFDRSxxQkFBMkMsR0FBTSxFQUFFLEdBQU07UUFDdkQsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUNELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ25DLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPO0lBQ3pDLGlHQUFpRztJQUNqRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFDRCxtQkFBbUIsRUFBRSxDQUFDIn0=