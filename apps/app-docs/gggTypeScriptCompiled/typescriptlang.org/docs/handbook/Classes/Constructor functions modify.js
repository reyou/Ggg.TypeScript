"use strict";
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
console.log(typeof greeterMaker);
greeterMaker.standardGreeting = "Hey there!";
let greeter2 = new greeterMaker();
console.log(greeter2.greet());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3RydWN0b3IgZnVuY3Rpb25zIG1vZGlmeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3R5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL0NsYXNzZXMvQ29uc3RydWN0b3IgZnVuY3Rpb25zIG1vZGlmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztrQkFZa0I7QUFDbEIsTUFBTSxhQUFhO0lBR2pCLEtBQUs7UUFDSCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUNsQzthQUFNO1lBQ0wsT0FBTyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7U0FDdkM7SUFDSCxDQUFDOztBQVJNLDhCQUFnQixHQUFHLGNBQWMsQ0FBQztBQVczQyxJQUFJLFFBQXVCLENBQUM7QUFDNUIsUUFBUSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7QUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUU5QixJQUFJLFlBQVksR0FBeUIsYUFBYSxDQUFDO0FBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxZQUFZLENBQUMsQ0FBQztBQUNqQyxZQUFZLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDO0FBRTdDLElBQUksUUFBUSxHQUFrQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMifQ==