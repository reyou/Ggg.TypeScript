"use strict";
/*In this version, we check to make sure the user has a secret
passcode available before we allow them to modify the employee.
We do this by replacing the direct access to fullName with a set
that will check the passcode. We add a corresponding get to allow
the previous example to continue to work seamlessly. */
var passcode = "secret passcode";
var EmployeeAccessorSet = /** @class */ (function () {
    function EmployeeAccessorSet() {
    }
    Object.defineProperty(EmployeeAccessorSet.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return EmployeeAccessorSet;
}());
var employeeAccessorSet = new EmployeeAccessorSet();
employeeAccessorSet.fullName = "Bob Smith";
if (employeeAccessorSet.fullName) {
    console.log(employeeAccessorSet.fullName);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzb3Itc2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjZXNzb3Itc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozt1REFJdUQ7QUFDdkQsSUFBSSxRQUFRLEdBQUcsaUJBQWlCLENBQUM7QUFFakM7SUFBQTtJQWVBLENBQUM7SUFaRyxzQkFBSSx5Q0FBUTthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFhLE9BQWU7WUFDeEIsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLGlCQUFpQixFQUFFO2dCQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQzthQUM1QjtpQkFDSTtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7YUFDMUQ7UUFDTCxDQUFDOzs7T0FUQTtJQVVMLDBCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFFRCxJQUFJLG1CQUFtQixHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztBQUNwRCxtQkFBbUIsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO0FBQzNDLElBQUksbUJBQW1CLENBQUMsUUFBUSxFQUFFO0lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDN0MifQ==