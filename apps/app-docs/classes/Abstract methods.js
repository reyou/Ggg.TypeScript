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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3QgbWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFic3RyYWN0IG1ldGhvZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OzBEQUswRDtBQUMxRDtJQUVJLFlBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQy9CLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUdKO0FBRUQsMEJBQTJCLFNBQVEsVUFBVTtJQUV6QztRQUNJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsb0RBQW9EO0lBQzFGLENBQUM7SUFFRCxZQUFZO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxlQUFlO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDSjtBQUVELCtDQUErQztBQUMvQyxJQUFJLFVBQXNCLENBQUM7QUFDM0Isd0RBQXdEO0FBQ3hELGtDQUFrQztBQUNsQyxVQUFVLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDLENBQUMsa0RBQWtEO0FBQzNGLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN2QixVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDMUIsd0RBQXdEO0FBQ3hELGlDQUFpQyJ9