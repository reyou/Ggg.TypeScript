"use strict";
/*A constructor may also be marked protected. This means that the
class cannot be instantiated outside of its containing class,
but can be extended. For example, */
class PersonProtected {
    constructor(theName) {
        this.name = theName;
    }
}
// Employee can extend Person
class EmployeeConsProtected extends PersonProtected {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howardProtected = new EmployeeConsProtected("Howard", "Sales");
console.log("\nhowardProtected:");
console.log(howardProtected);
// Error: The 'Person' constructor is protected
// let john = new PersonProtected("John"); 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RydWN0b3ItcHJvdGVjdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uc3RydWN0b3ItcHJvdGVjdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7b0NBRW9DO0FBQ3BDLE1BQU0sZUFBZTtJQUVqQixZQUFzQixPQUFlO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Q0FDSjtBQUVELDZCQUE2QjtBQUM3QixNQUFNLHFCQUFzQixTQUFRLGVBQWU7SUFHL0MsWUFBWSxJQUFZLEVBQUUsVUFBa0I7UUFDeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQztJQUVNLGdCQUFnQjtRQUNuQixPQUFPLHFCQUFxQixJQUFJLENBQUMsSUFBSSxrQkFBa0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDO0lBQzlFLENBQUM7Q0FDSjtBQUVELElBQUksZUFBZSxHQUFHLElBQUkscUJBQXFCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzdCLCtDQUErQztBQUMvQywyQ0FBMkMifQ==