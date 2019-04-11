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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3QgbWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3R5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL0NsYXNzZXMvQWJzdHJhY3QgbWV0aG9kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OzBEQUswRDtBQUMxRCxNQUFlLFVBQVU7SUFFckIsWUFBbUIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7SUFDL0IsQ0FBQztJQUVELFNBQVM7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBR0o7QUFFRCxNQUFNLG9CQUFxQixTQUFRLFVBQVU7SUFFekM7UUFDSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLG9EQUFvRDtJQUMxRixDQUFDO0lBRUQsWUFBWTtRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQXNELENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsZUFBZTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0o7QUFFRCwrQ0FBK0M7QUFDL0MsSUFBSSxVQUFzQixDQUFDO0FBQzNCLHdEQUF3RDtBQUN4RCxrQ0FBa0M7QUFDbEMsVUFBVSxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLGtEQUFrRDtBQUMzRixVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDdkIsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzFCLHdEQUF3RDtBQUN4RCxpQ0FBaUMifQ==