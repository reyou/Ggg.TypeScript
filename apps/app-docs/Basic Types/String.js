/*Another fundamental part of creating programs in JavaScript for
webpages and servers alike is working with textual data. As in other
languages, we use the type string to refer to these textual datatypes.
Just like JavaScript, TypeScript also uses double quotes (") or single
quotes (') to surround string data. */
let color = "blue";
color = "red";
/*You can also use template strings, which can span multiple lines
and have embedded expressions. These strings are surrounded by the
backtick/backquote (`) character, and embedded expressions are
of the form ${ expr }. */
let fullName = `Bob Bobbington`;
let age = 37;
let sentence = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;
console.log(sentence);
console.log("\n=============================================\n");
// This is equivalent to declaring sentence like so:
let sentence2 = "Hello, my name is " +
    fullName +
    ".\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";
console.log(sentence2);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O3NDQUlzQztBQUN0QyxJQUFJLEtBQUssR0FBVyxNQUFNLENBQUM7QUFDM0IsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNkOzs7eUJBR3lCO0FBQ3pCLElBQUksUUFBUSxHQUFXLGdCQUFnQixDQUFDO0FBQ3hDLElBQUksR0FBRyxHQUFXLEVBQUUsQ0FBQztBQUNyQixJQUFJLFFBQVEsR0FBVyxxQkFBcUIsUUFBUTtVQUMxQyxHQUFHLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztBQUUxQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQW1ELENBQUMsQ0FBQztBQUNqRSxvREFBb0Q7QUFDcEQsSUFBSSxTQUFTLEdBQ1gsb0JBQW9CO0lBQ3BCLFFBQVE7SUFDUixLQUFLO0lBQ0wsVUFBVTtJQUNWLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNULHdCQUF3QixDQUFDO0FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMifQ==