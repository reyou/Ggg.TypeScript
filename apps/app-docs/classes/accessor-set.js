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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzb3Itc2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjZXNzb3Itc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O3VEQUl1RDtBQUN2RCxJQUFJLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztBQUVqQztJQUdJLElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsT0FBZTtRQUN4QixJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksaUJBQWlCLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FDNUI7YUFDSTtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQztTQUMxRDtJQUNMLENBQUM7Q0FDSjtBQUVELElBQUksbUJBQW1CLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0FBQ3BELG1CQUFtQixDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7QUFDM0MsSUFBSSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUU7SUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztDQUM3QyJ9