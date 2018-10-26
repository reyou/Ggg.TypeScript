"use strict";
/*When you declare a class in TypeScript, you are actually
creating multiple declarations at the same time. The first is
the type of the instance of the class. */
var GreeterConst = /** @class */ (function () {
    function GreeterConst(message) {
        this.greeting = message;
    }
    GreeterConst.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return GreeterConst;
}());
/*Here, when we say let greeter: Greeter, we’re using Greeter
as the type of instances of the class Greeter. This is almost
second nature to programmers from other object-oriented languages. */
var greeterConst;
greeterConst = new GreeterConst("world");
console.log(greeterConst.greet());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3RydWN0b3IgZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29uc3RydWN0b3IgZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7eUNBRXlDO0FBQ3pDO0lBRUksc0JBQVksT0FBZTtRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBQ0QsNEJBQUssR0FBTDtRQUNJLE9BQU8sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFDRDs7cUVBRXFFO0FBQ3JFLElBQUksWUFBMEIsQ0FBQztBQUMvQixZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyJ9