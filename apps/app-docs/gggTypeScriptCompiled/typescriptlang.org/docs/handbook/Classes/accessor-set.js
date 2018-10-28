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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzb3Itc2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svQ2xhc3Nlcy9hY2Nlc3Nvci1zZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O3VEQUl1RDtBQUN2RCxJQUFJLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztBQUVqQyxNQUFNLG1CQUFtQjtJQUd2QixJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksUUFBUSxDQUFDLE9BQWU7UUFDMUIsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLGlCQUFpQixFQUFFO1lBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1NBQzFCO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDO0NBQ0Y7QUFFRCxJQUFJLG1CQUFtQixHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztBQUNwRCxtQkFBbUIsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO0FBQzNDLElBQUksbUJBQW1CLENBQUMsUUFBUSxFQUFFO0lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDM0MifQ==