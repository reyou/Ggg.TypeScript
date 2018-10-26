"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztzQ0FJc0M7QUFDdEMsSUFBSSxLQUFLLEdBQVcsTUFBTSxDQUFDO0FBQzNCLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDZDs7O3lCQUd5QjtBQUN6QixJQUFJLFFBQVEsR0FBVyxnQkFBZ0IsQ0FBQztBQUN4QyxJQUFJLEdBQUcsR0FBVyxFQUFFLENBQUM7QUFDckIsSUFBSSxRQUFRLEdBQVcsdUJBQXFCLFFBQVEsb0JBQzFDLEdBQUcsR0FBRyxDQUFDLDRCQUF3QixDQUFDO0FBRTFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO0FBQ2pFLG9EQUFvRDtBQUNwRCxJQUFJLFNBQVMsR0FDWCxvQkFBb0I7SUFDcEIsUUFBUTtJQUNSLEtBQUs7SUFDTCxVQUFVO0lBQ1YsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1Qsd0JBQXdCLENBQUM7QUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyJ9