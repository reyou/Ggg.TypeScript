"use strict";
/*In this version, we check to make sure the user has a secret
passcode available before we allow them to modify the employee.
We do this by replacing the direct access to fullName with a set
that will check the passcode. We add a corresponding get to allow
the previous example to continue to work seamlessly. */
let passcode = "secret passcode";
class EmployeeAccessorSet {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
let employeeAccessorSet = new EmployeeAccessorSet();
employeeAccessorSet.fullName = "Bob Smith";
if (employeeAccessorSet.fullName) {
    console.log(employeeAccessorSet.fullName);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzb3Itc2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjZXNzb3Itc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozt1REFJdUQ7QUFDdkQsSUFBSSxRQUFRLEdBQUcsaUJBQWlCLENBQUM7QUFFakMsTUFBTSxtQkFBbUI7SUFHdkIsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLFFBQVEsQ0FBQyxPQUFlO1FBQzFCLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxpQkFBaUIsRUFBRTtZQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztTQUMxQjthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztDQUNGO0FBRUQsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7QUFDcEQsbUJBQW1CLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztBQUMzQyxJQUFJLG1CQUFtQixDQUFDLFFBQVEsRUFBRTtJQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQzNDIn0=