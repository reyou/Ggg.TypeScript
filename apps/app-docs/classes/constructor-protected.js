"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RydWN0b3ItcHJvdGVjdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uc3RydWN0b3ItcHJvdGVjdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O29DQUVvQztBQUNwQztJQUVJLHlCQUFzQixPQUFlO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBRUQsNkJBQTZCO0FBQzdCO0lBQW9DLHlDQUFlO0lBRy9DLCtCQUFZLElBQVksRUFBRSxVQUFrQjtRQUE1QyxZQUNJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsS0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7O0lBQ2pDLENBQUM7SUFFTSxnREFBZ0IsR0FBdkI7UUFDSSxPQUFPLHVCQUFxQixJQUFJLENBQUMsSUFBSSx1QkFBa0IsSUFBSSxDQUFDLFVBQVUsTUFBRyxDQUFDO0lBQzlFLENBQUM7SUFDTCw0QkFBQztBQUFELENBQUMsQUFYRCxDQUFvQyxlQUFlLEdBV2xEO0FBRUQsSUFBSSxlQUFlLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0IsK0NBQStDO0FBQy9DLDJDQUEyQyJ9