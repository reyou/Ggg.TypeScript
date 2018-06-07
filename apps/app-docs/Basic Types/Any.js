/*We may need to describe the type of variables that we do not
know when we are writing an application. These values may come from
dynamic content, e.g. from the user or a 3rd party library. In these cases,
we want to opt-out of type-checking and let the values pass through
compile-time checks. To do so, we label these with the any type: */
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
/*The any type is a powerful way to work with existing JavaScript,
allowing you to gradually opt-in and opt-out of type-checking during compilation.
You might expect Object to play a similar role, as it does in other languages.
But variables of type Object only allow you to assign any value to them - you
can’t call arbitrary methods on them, even ones that actually exist: */
var notSure2 = 4;
try {
    notSure.ifItExists(); // okay, ifItExists might exist at runtime
    notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
}
catch (ex) {
    console.log(ex);
}
var prettySure = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
/*The any type is also handy if you know some part of the type, but perhaps
not all of it. For example, you may have an array but the array has a
mix of different types: */
var listAny = [1, true, "free"];
listAny[1] = 100;
console.log(listAny);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW55LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQW55LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O21FQUltRTtBQUNuRSxJQUFJLE9BQU8sR0FBUSxDQUFDLENBQUM7QUFDckIsT0FBTyxHQUFHLHdCQUF3QixDQUFDO0FBQ25DLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyw2QkFBNkI7QUFDOUM7Ozs7dUVBSXVFO0FBQ3ZFLElBQUksUUFBUSxHQUFRLENBQUMsQ0FBQztBQUN0QixJQUFJLENBQUM7SUFDSCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQywwQ0FBMEM7SUFDaEUsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsd0RBQXdEO0FBQzdFLENBQUM7QUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNsQixDQUFDO0FBRUQsSUFBSSxVQUFVLEdBQVcsQ0FBQyxDQUFDO0FBQzNCLHFGQUFxRjtBQUNyRjs7MEJBRTBCO0FBQzFCLElBQUksT0FBTyxHQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN2QyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMifQ==