// Press F5 to run this page under VS code.
// http://www.typescriptlang.org/docs/handbook/classes.html

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
console.log(greeter);
