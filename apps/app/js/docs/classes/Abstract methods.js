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
//# sourceMappingURL=Abstract methods.js.map