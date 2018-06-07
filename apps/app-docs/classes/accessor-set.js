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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzb3Itc2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjZXNzb3Itc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O3VEQUl1RDtBQUN2RCxJQUFJLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztBQUVqQztJQUFBO0lBZUEsQ0FBQztJQVpHLHNCQUFJLHlDQUFRO2FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQWEsT0FBZTtZQUN4QixJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksaUJBQWlCLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2FBQzVCO2lCQUNJO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQzthQUMxRDtRQUNMLENBQUM7OztPQVRBO0lBVUwsMEJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQUVELElBQUksbUJBQW1CLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0FBQ3BELG1CQUFtQixDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7QUFDM0MsSUFBSSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUU7SUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztDQUM3QyJ9