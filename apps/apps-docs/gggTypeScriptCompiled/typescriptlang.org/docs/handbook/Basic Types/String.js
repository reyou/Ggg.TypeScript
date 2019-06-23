"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svQmFzaWMgVHlwZXMvU3RyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztzQ0FJc0M7QUFDdEMsSUFBSSxLQUFLLEdBQVcsTUFBTSxDQUFDO0FBQzNCLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDZDs7O3lCQUd5QjtBQUN6QixJQUFJLFFBQVEsR0FBVyxnQkFBZ0IsQ0FBQztBQUN4QyxJQUFJLEdBQUcsR0FBVyxFQUFFLENBQUM7QUFDckIsSUFBSSxRQUFRLEdBQVcscUJBQXFCLFFBQVE7VUFDMUMsR0FBRyxHQUFHLENBQUMsd0JBQXdCLENBQUM7QUFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7QUFDakUsb0RBQW9EO0FBQ3BELElBQUksU0FBUyxHQUNYLG9CQUFvQjtJQUNwQixRQUFRO0lBQ1IsS0FBSztJQUNMLFVBQVU7SUFDVixDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDVCx3QkFBd0IsQ0FBQztBQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDIn0=