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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RydWN0b3ItcHJvdGVjdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svQ2xhc3Nlcy9jb25zdHJ1Y3Rvci1wcm90ZWN0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztvQ0FFb0M7QUFDcEMsTUFBTSxlQUFlO0lBRWpCLFlBQXNCLE9BQWU7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBRUQsNkJBQTZCO0FBQzdCLE1BQU0scUJBQXNCLFNBQVEsZUFBZTtJQUcvQyxZQUFZLElBQVksRUFBRSxVQUFrQjtRQUN4QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBRU0sZ0JBQWdCO1FBQ25CLE9BQU8scUJBQXFCLElBQUksQ0FBQyxJQUFJLGtCQUFrQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUM7SUFDOUUsQ0FBQztDQUNKO0FBRUQsSUFBSSxlQUFlLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0IsK0NBQStDO0FBQy9DLDJDQUEyQyJ9