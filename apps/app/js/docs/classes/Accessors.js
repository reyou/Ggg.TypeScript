/*TypeScript supports getters/setters as a way of intercepting
accesses to a member of an object. This gives you a way of
having finer-grained control over how a member is accessed
on each object.
Let’s convert a simple class to use get and set. First,
let’s start with an example without getters and setters. */
class EmployeeAccessors {
}
let employeeAccessor = new EmployeeAccessors();
employeeAccessor.fullName = "Bob Smith";
if (employeeAccessor.fullName) {
    console.log(employeeAccessor.fullName);
}
//# sourceMappingURL=Accessors.js.map