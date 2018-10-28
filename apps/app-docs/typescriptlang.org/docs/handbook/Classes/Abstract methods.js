"use strict";
/*Methods within an abstract class that are marked as abstract
   do not contain an implementation and must be implemented in derived
   classes. Abstract methods share a similar syntax to interface
   methods. Both define the signature of a method without including
   a method body. However, abstract methods must include the abstract
   keyword and may optionally include access modifiers. */
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log("Department name: " + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }
    printMeeting() {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports() {
        console.log("Generating accounting reports...");
    }
}
// ok to create a reference to an abstract type
let department;
// error: cannot create an instance of an abstract class
// department = new Department(); 
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
// error: method doesn't exist on declared abstract type
// department.generateReports(); 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3QgbWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFic3RyYWN0IG1ldGhvZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OzswREFLMEQ7QUFDMUQsTUFBZSxVQUFVO0lBRXJCLFlBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQy9CLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUdKO0FBRUQsTUFBTSxvQkFBcUIsU0FBUSxVQUFVO0lBRXpDO1FBQ0ksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxvREFBb0Q7SUFDMUYsQ0FBQztJQUVELFlBQVk7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELGVBQWU7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNKO0FBRUQsK0NBQStDO0FBQy9DLElBQUksVUFBc0IsQ0FBQztBQUMzQix3REFBd0Q7QUFDeEQsa0NBQWtDO0FBQ2xDLFVBQVUsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxrREFBa0Q7QUFDM0YsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3ZCLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUMxQix3REFBd0Q7QUFDeEQsaUNBQWlDIn0=