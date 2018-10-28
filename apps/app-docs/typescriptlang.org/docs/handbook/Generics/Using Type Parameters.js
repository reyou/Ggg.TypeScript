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
    let x = { a: 1, b: 2, c: 3, d: 4 };
    let result = getProperty(x, "a"); // okay
    // getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
    console.log(result);
}
UsingTypeParameters();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNpbmcgVHlwZSBQYXJhbWV0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXNpbmcgVHlwZSBQYXJhbWV0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztxREFJcUQ7QUFDckQsU0FBUyxtQkFBbUI7SUFDMUIsU0FBUyxXQUFXLENBQXVCLEdBQU0sRUFBRSxHQUFNO1FBQ3ZELE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFDRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNuQyxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTztJQUN6QyxpR0FBaUc7SUFDakcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBQ0QsbUJBQW1CLEVBQUUsQ0FBQyJ9