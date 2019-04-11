"use strict";
/*We may need to describe the type of variables that we do not
know when we are writing an application. These values may come from
dynamic content, e.g. from the user or a 3rd party library. In these cases,
we want to opt-out of type-checking and let the values pass through
compile-time checks. To do so, we label these with the any type: */
let notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
/*The any type is a powerful way to work with existing JavaScript,
allowing you to gradually opt-in and opt-out of type-checking during compilation.
You might expect Object to play a similar role, as it does in other languages.
But variables of type Object only allow you to assign any value to them - you
can’t call arbitrary methods on them, even ones that actually exist: */
let notSure2 = 4;
try {
    notSure.ifItExists(); // okay, ifItExists might exist at runtime
    notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
}
catch (ex) {
    console.log(ex);
}
let prettySure = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
/*The any type is also handy if you know some part of the type, but perhaps
not all of it. For example, you may have an array but the array has a
mix of different types: */
let listAny = [1, true, "free"];
listAny[1] = 100;
console.log(listAny);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW55LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svQmFzaWMgVHlwZXMvQW55LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OzttRUFJbUU7QUFDbkUsSUFBSSxPQUFPLEdBQVEsQ0FBQyxDQUFDO0FBQ3JCLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQztBQUNuQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsNkJBQTZCO0FBQzlDOzs7O3VFQUl1RTtBQUN2RSxJQUFJLFFBQVEsR0FBUSxDQUFDLENBQUM7QUFDdEIsSUFBSTtJQUNGLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLDBDQUEwQztJQUNoRSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyx3REFBd0Q7Q0FDNUU7QUFBQyxPQUFPLEVBQUUsRUFBRTtJQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDakI7QUFFRCxJQUFJLFVBQVUsR0FBVyxDQUFDLENBQUM7QUFDM0IscUZBQXFGO0FBQ3JGOzswQkFFMEI7QUFDMUIsSUFBSSxPQUFPLEdBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyJ9