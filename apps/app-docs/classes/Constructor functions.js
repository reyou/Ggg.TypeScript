"use strict";
/*When you declare a class in TypeScript, you are actually
creating multiple declarations at the same time. The first is
the type of the instance of the class. */
class GreeterConst {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
/*Here, when we say let greeter: Greeter, we’re using Greeter
as the type of instances of the class Greeter. This is almost
second nature to programmers from other object-oriented languages. */
let greeterConst;
greeterConst = new GreeterConst("world");
console.log(greeterConst.greet());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3RydWN0b3IgZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29uc3RydWN0b3IgZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7eUNBRXlDO0FBQ3pDLE1BQU0sWUFBWTtJQUVkLFlBQVksT0FBZTtRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBQ0QsS0FBSztRQUNELE9BQU8sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztDQUNKO0FBQ0Q7O3FFQUVxRTtBQUNyRSxJQUFJLFlBQTBCLENBQUM7QUFDL0IsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMifQ==