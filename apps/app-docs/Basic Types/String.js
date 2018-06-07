/*Another fundamental part of creating programs in JavaScript for
webpages and servers alike is working with textual data. As in other
languages, we use the type string to refer to these textual datatypes.
Just like JavaScript, TypeScript also uses double quotes (") or single
quotes (') to surround string data. */
var color = "blue";
color = "red";
/*You can also use template strings, which can span multiple lines
and have embedded expressions. These strings are surrounded by the
backtick/backquote (`) character, and embedded expressions are
of the form ${ expr }. */
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
console.log("\n=============================================\n");
// This is equivalent to declaring sentence like so:
var sentence2 = "Hello, my name is " +
    fullName +
    ".\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";
console.log(sentence2);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O3NDQUlzQztBQUN0QyxJQUFJLEtBQUssR0FBVyxNQUFNLENBQUM7QUFDM0IsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNkOzs7eUJBR3lCO0FBQ3pCLElBQUksUUFBUSxHQUFXLGdCQUFnQixDQUFDO0FBQ3hDLElBQUksR0FBRyxHQUFXLEVBQUUsQ0FBQztBQUNyQixJQUFJLFFBQVEsR0FBVyx1QkFBcUIsUUFBUSxvQkFDMUMsR0FBRyxHQUFHLENBQUMsNEJBQXdCLENBQUM7QUFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7QUFDakUsb0RBQW9EO0FBQ3BELElBQUksU0FBUyxHQUNYLG9CQUFvQjtJQUNwQixRQUFRO0lBQ1IsS0FBSztJQUNMLFVBQVU7SUFDVixDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDVCx3QkFBd0IsQ0FBQztBQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDIn0=