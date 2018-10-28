"use strict";
/*The protected modifier acts much like the private modifier with
the exception that members declared protected can also be accessed
by instances of deriving classes. For example, */
class Person {
    constructor(name) {
        this.name = name;
    }
}
class EmployeeProtected extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new EmployeeProtected("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5kZXJzdGFuZGluZyBwcm90ZWN0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVbmRlcnN0YW5kaW5nIHByb3RlY3RlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O2lEQUVpRDtBQUNqRCxNQUFNLE1BQU07SUFFUixZQUFZLElBQVk7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztDQUNKO0FBRUQsTUFBTSxpQkFBa0IsU0FBUSxNQUFNO0lBR2xDLFlBQVksSUFBWSxFQUFFLFVBQWtCO1FBQ3hDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxnQkFBZ0I7UUFDbkIsT0FBTyxxQkFBcUIsSUFBSSxDQUFDLElBQUksa0JBQWtCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQztJQUM5RSxDQUFDO0NBQ0o7QUFFRCxJQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7QUFDdkMscUNBQXFDIn0=