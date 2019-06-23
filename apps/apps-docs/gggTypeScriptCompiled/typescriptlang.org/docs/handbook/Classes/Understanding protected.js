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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5kZXJzdGFuZGluZyBwcm90ZWN0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9DbGFzc2VzL1VuZGVyc3RhbmRpbmcgcHJvdGVjdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7aURBRWlEO0FBQ2pELE1BQU0sTUFBTTtJQUVSLFlBQVksSUFBWTtRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUFFRCxNQUFNLGlCQUFrQixTQUFRLE1BQU07SUFHbEMsWUFBWSxJQUFZLEVBQUUsVUFBa0I7UUFDeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQztJQUVNLGdCQUFnQjtRQUNuQixPQUFPLHFCQUFxQixJQUFJLENBQUMsSUFBSSxrQkFBa0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDO0lBQzlFLENBQUM7Q0FDSjtBQUVELElBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztBQUN2QyxxQ0FBcUMifQ==