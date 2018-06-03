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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW55LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQW55LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O21FQUltRTtBQUNuRSxJQUFJLE9BQU8sR0FBUSxDQUFDLENBQUM7QUFDckIsT0FBTyxHQUFHLHdCQUF3QixDQUFDO0FBQ25DLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyw2QkFBNkI7QUFDOUM7Ozs7dUVBSXVFO0FBQ3ZFLElBQUksUUFBUSxHQUFRLENBQUMsQ0FBQztBQUN0QixJQUFJO0lBQ0YsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsMENBQTBDO0lBQ2hFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLHdEQUF3RDtDQUM1RTtBQUFDLE9BQU8sRUFBRSxFQUFFO0lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNqQjtBQUVELElBQUksVUFBVSxHQUFXLENBQUMsQ0FBQztBQUMzQixxRkFBcUY7QUFDckY7OzBCQUUwQjtBQUMxQixJQUFJLE9BQU8sR0FBVSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdkMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDIn0=