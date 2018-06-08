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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3RydWN0b3IgZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29uc3RydWN0b3IgZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzt5Q0FFeUM7QUFDekM7SUFFSSxzQkFBWSxPQUFlO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFDRCw0QkFBSyxHQUFMO1FBQ0ksT0FBTyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQUNEOztxRUFFcUU7QUFDckUsSUFBSSxZQUEwQixDQUFDO0FBQy9CLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDIn0=