var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*Methods within an abstract class that are marked as abstract
   do not contain an implementation and must be implemented in derived
   classes. Abstract methods share a similar syntax to interface
   methods. Both define the signature of a method without including
   a method body. However, abstract methods must include the abstract
   keyword and may optionally include access modifiers. */
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
// ok to create a reference to an abstract type
var department;
// error: cannot create an instance of an abstract class
// department = new Department(); 
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
// error: method doesn't exist on declared abstract type
// department.generateReports(); 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3QgbWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFic3RyYWN0IG1ldGhvZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7OzswREFLMEQ7QUFDMUQ7SUFFSSxvQkFBbUIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7SUFDL0IsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBR0wsaUJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQUVEO0lBQW1DLHdDQUFVO0lBRXpDO2VBQ0ksa0JBQU0seUJBQXlCLENBQUM7SUFDcEMsQ0FBQztJQUVELDJDQUFZLEdBQVo7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELDhDQUFlLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQWJELENBQW1DLFVBQVUsR0FhNUM7QUFFRCwrQ0FBK0M7QUFDL0MsSUFBSSxVQUFzQixDQUFDO0FBQzNCLHdEQUF3RDtBQUN4RCxrQ0FBa0M7QUFDbEMsVUFBVSxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLGtEQUFrRDtBQUMzRixVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDdkIsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzFCLHdEQUF3RDtBQUN4RCxpQ0FBaUMifQ==