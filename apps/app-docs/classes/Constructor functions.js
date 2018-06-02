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
//# sourceMappingURL=Constructor functions.js.map