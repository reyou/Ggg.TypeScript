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
/*A constructor may also be marked protected. This means that the
class cannot be instantiated outside of its containing class,
but can be extended. For example, */
var PersonProtected = /** @class */ (function () {
    function PersonProtected(theName) {
        this.name = theName;
    }
    return PersonProtected;
}());
// Employee can extend Person
var EmployeeConsProtected = /** @class */ (function (_super) {
    __extends(EmployeeConsProtected, _super);
    function EmployeeConsProtected(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    EmployeeConsProtected.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return EmployeeConsProtected;
}(PersonProtected));
var howardProtected = new EmployeeConsProtected("Howard", "Sales");
console.log("\nhowardProtected:");
console.log(howardProtected);
// Error: The 'Person' constructor is protected
// let john = new PersonProtected("John"); 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RydWN0b3ItcHJvdGVjdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uc3RydWN0b3ItcHJvdGVjdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7b0NBRW9DO0FBQ3BDO0lBRUkseUJBQXNCLE9BQWU7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFFRCw2QkFBNkI7QUFDN0I7SUFBb0MseUNBQWU7SUFHL0MsK0JBQVksSUFBWSxFQUFFLFVBQWtCO1FBQTVDLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQzs7SUFDakMsQ0FBQztJQUVNLGdEQUFnQixHQUF2QjtRQUNJLE9BQU8sdUJBQXFCLElBQUksQ0FBQyxJQUFJLHVCQUFrQixJQUFJLENBQUMsVUFBVSxNQUFHLENBQUM7SUFDOUUsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQVhELENBQW9DLGVBQWUsR0FXbEQ7QUFFRCxJQUFJLGVBQWUsR0FBRyxJQUFJLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QiwrQ0FBK0M7QUFDL0MsMkNBQTJDIn0=