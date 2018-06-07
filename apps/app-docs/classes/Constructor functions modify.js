/*In this example, greeter1 works similarly to before.
We instantiate the Greeter class, and use this object.
This we have seen before. Next, we then use the class directly.
Here we create a new variable called greeterMaker. This variable
will hold the class itself, or said another way its constructor
function. Here we use typeof Greeter, that is “give me the type of
the Greeter class itself” rather than the instance type. Or, more
precisely, “give me the type of the symbol called Greeter,” which
is the type of the constructor function. This type will contain all
of the static members of Greeter along with the constructor that
creates instances of the Greeter class. We show this by using new
on greeterMaker, creating new instances of Greeter and invoking
them as before. */
var GreeterModify = /** @class */ (function () {
    function GreeterModify() {
    }
    GreeterModify.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return GreeterModify.standardGreeting;
        }
    };
    GreeterModify.standardGreeting = "Hello, there";
    return GreeterModify;
}());
var greeter1;
greeter1 = new GreeterModify();
console.log(greeter1.greet());
var greeterMaker = GreeterModify;
console.log(typeof greeterMaker);
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3RydWN0b3IgZnVuY3Rpb25zIG1vZGlmeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbnN0cnVjdG9yIGZ1bmN0aW9ucyBtb2RpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztrQkFZa0I7QUFDbEI7SUFBQTtJQVVBLENBQUM7SUFQQyw2QkFBSyxHQUFMO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU8sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDbEM7YUFBTTtZQUNMLE9BQU8sYUFBYSxDQUFDLGdCQUFnQixDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQVJNLDhCQUFnQixHQUFHLGNBQWMsQ0FBQztJQVMzQyxvQkFBQztDQUFBLEFBVkQsSUFVQztBQUVELElBQUksUUFBdUIsQ0FBQztBQUM1QixRQUFRLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztBQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBRTlCLElBQUksWUFBWSxHQUF5QixhQUFhLENBQUM7QUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLFlBQVksQ0FBQyxDQUFDO0FBQ2pDLFlBQVksQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUM7QUFFN0MsSUFBSSxRQUFRLEdBQWtCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyJ9