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
class GreeterModify {
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return GreeterModify.standardGreeting;
        }
    }
}
GreeterModify.standardGreeting = "Hello, there";
let greeter1;
greeter1 = new GreeterModify();
console.log(greeter1.greet());
let greeterMaker = GreeterModify;
greeterMaker.standardGreeting = "Hey there!";
let greeter2 = new greeterMaker();
console.log(greeter2.greet());
//# sourceMappingURL=Constructor functions modify.js.map