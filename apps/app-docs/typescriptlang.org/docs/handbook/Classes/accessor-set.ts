/*In this version, we check to make sure the user has a secret 
passcode available before we allow them to modify the employee. 
We do this by replacing the direct access to fullName with a set 
that will check the passcode. We add a corresponding get to allow 
the previous example to continue to work seamlessly. */
let passcode = "secret passcode";

class EmployeeAccessorSet {
  private _fullName: string | undefined;

  get fullName(this: any): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let employeeAccessorSet = new EmployeeAccessorSet();
employeeAccessorSet.fullName = "Bob Smith";
if (employeeAccessorSet.fullName) {
  console.log(employeeAccessorSet.fullName);
}
