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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3RydWN0b3IgZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svQ2xhc3Nlcy9Db25zdHJ1Y3RvciBmdW5jdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzt5Q0FFeUM7QUFDekMsTUFBTSxZQUFZO0lBRWQsWUFBWSxPQUFlO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFDRCxLQUFLO1FBQ0QsT0FBTyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0NBQ0o7QUFDRDs7cUVBRXFFO0FBQ3JFLElBQUksWUFBMEIsQ0FBQztBQUMvQixZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyJ9